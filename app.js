(function () {
  "use strict";

  const APP_VERSION = "2026.08.30-1";
  const STORAGE_KEY = "marathon330TrainingAppData_v1";
  const APP_DATA_VERSION = 3;
  const plan = window.MARATHON_PLAN;
  const model = window.MARATHON_MODEL;

  if (!plan || !model) throw new Error("De trainingsdata kon niet worden geladen.");

  const weeks = plan.weeks || [];
  const workouts = weeks.flatMap((week) => week.workouts || []);
  const app = document.getElementById("app");
  const brandHome = document.getElementById("brand-home");
  const navButtons = Array.from(document.querySelectorAll("[data-view]"));

  const VIEWS = { WEEK: "week", PLAN: "plan", INFO: "info" };
  const state = {
    view: VIEWS.WEEK,
    viewedWeekIndex: currentPlanWeekIndex(),
    expandedWorkoutIds: new Set(),
  };

  let appData = loadAppData();

  function isObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function nowIso() {
    return new Date().toISOString();
  }

  function localDateIso(date = new Date()) {
    return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
  }

  function appDateIso() {
    const value = new URLSearchParams(window.location.search).get("date");
    return /^\d{4}-\d{2}-\d{2}$/.test(value || "") ? value : localDateIso();
  }

  function parseLocalDate(iso) {
    const [year, month, day] = String(iso).split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  function formatDate(iso, options = { day: "numeric", month: "short" }) {
    return parseLocalDate(iso).toLocaleDateString("nl-NL", options);
  }

  function formatNumber(value, decimals = 1) {
    if (!Number.isFinite(Number(value))) return "0";
    return Number(value).toLocaleString("nl-NL", { maximumFractionDigits: decimals });
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttr(value) {
    return escapeHtml(value);
  }

  function capitalize(value) {
    const text = String(value || "");
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
  }

  function joinText(parts, fallback = "") {
    const values = parts.map((part) => String(part || "").trim()).filter(Boolean);
    return values.length ? values.join(" · ") : fallback;
  }

  function currentPlanWeekIndex() {
    if (!weeks.length) return 0;
    const today = appDateIso();
    if (today <= weeks[0].startDate) return 0;
    const exact = weeks.findIndex((week) => today >= week.startDate && today <= week.endDate);
    if (exact !== -1) return exact;
    return weeks.length - 1;
  }

  function createEmptyAppData() {
    const timestamp = nowIso();
    return {
      appDataVersion: APP_DATA_VERSION,
      createdAt: timestamp,
      updatedAt: timestamp,
      activePlanId: plan.config.planId,
      workoutLogs: {},
      completedSessions: {},
      testResults: {},
      userSettings: {},
      uiState: {},
      legacyData: {},
      meta: { storageInitialized: true, schemaVersion: plan.config.schemaVersion },
    };
  }

  function normalizeWorkoutLog(log, workoutId) {
    const source = isObject(log) ? log : {};
    return {
      ...source,
      workoutId,
      planId: source.planId || plan.config.planId,
      completed: Boolean(source.completed),
      completedDate: source.completedDate || source.date || "",
      updatedAt: source.updatedAt || nowIso(),
    };
  }

  function migrateAppData(raw) {
    const empty = createEmptyAppData();
    if (!isObject(raw)) return empty;
    const data = {
      ...empty,
      ...raw,
      appDataVersion: APP_DATA_VERSION,
      activePlanId: plan.config.planId,
      userSettings: isObject(raw.userSettings) ? raw.userSettings : {},
      uiState: isObject(raw.uiState) ? raw.uiState : {},
      testResults: isObject(raw.testResults) ? raw.testResults : {},
      legacyData: isObject(raw.legacyData) ? raw.legacyData : {},
      meta: { ...empty.meta, ...(isObject(raw.meta) ? raw.meta : {}), schemaVersion: plan.config.schemaVersion },
    };

    const validIds = new Set(workouts.map((workout) => workout.workoutId));
    const currentLogs = {};
    const archivedLogs = {};
    if (isObject(raw.workoutLogs) && !Array.isArray(raw.workoutLogs.strength) && !Array.isArray(raw.workoutLogs.cardio)) {
      for (const [workoutId, log] of Object.entries(raw.workoutLogs)) {
        if (validIds.has(workoutId)) currentLogs[workoutId] = normalizeWorkoutLog(log, workoutId);
        else archivedLogs[workoutId] = log;
      }
    } else if (raw.workoutLogs || raw.runLogs || raw.completedSessions) {
      data.legacyData.previousPlan ||= {
        archivedAt: nowIso(),
        workoutLogs: raw.workoutLogs || {},
        runLogs: raw.runLogs || {},
        completedSessions: raw.completedSessions || {},
      };
    }
    if (Object.keys(archivedLogs).length) {
      data.legacyData.previousPlan ||= { archivedAt: nowIso(), workoutLogs: {}, completedSessions: {} };
      data.legacyData.previousPlan.workoutLogs = { ...(data.legacyData.previousPlan.workoutLogs || {}), ...archivedLogs };
    }
    data.workoutLogs = currentLogs;
    const completedEntries = isObject(raw.completedSessions) ? Object.entries(raw.completedSessions) : [];
    data.completedSessions = Object.fromEntries(completedEntries.filter(([workoutId]) => validIds.has(workoutId)));
    const archivedCompleted = Object.fromEntries(completedEntries.filter(([workoutId]) => !validIds.has(workoutId)));
    if (Object.keys(archivedCompleted).length) {
      data.legacyData.previousPlan ||= { archivedAt: nowIso(), workoutLogs: {}, completedSessions: {} };
      data.legacyData.previousPlan.completedSessions = { ...(data.legacyData.previousPlan.completedSessions || {}), ...archivedCompleted };
    }
    return data;
  }

  function loadAppData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        const empty = createEmptyAppData();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(empty));
        return empty;
      }
      const data = migrateAppData(JSON.parse(raw));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return data;
    } catch (error) {
      console.warn("Lokale voortgang kon niet worden gelezen; de planner start leeg.", error);
      const empty = createEmptyAppData();
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(empty)); } catch (_) {}
      return empty;
    }
  }

  function saveAppData() {
    appData.updatedAt = nowIso();
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(appData)); }
    catch (error) { console.warn("Voortgang opslaan is niet gelukt.", error); }
  }

  function workoutLog(workoutId) {
    return appData.workoutLogs[workoutId] || null;
  }

  function isCompleted(workoutId) {
    return Boolean(workoutLog(workoutId)?.completed || appData.completedSessions[workoutId]);
  }

  function toggleCompleted(workoutId) {
    const completed = !isCompleted(workoutId);
    const log = normalizeWorkoutLog(workoutLog(workoutId) || {}, workoutId);
    log.completed = completed;
    log.completedDate = completed ? localDateIso() : "";
    log.updatedAt = nowIso();
    appData.workoutLogs[workoutId] = log;
    if (completed) appData.completedSessions[workoutId] = { completedAt: log.completedDate, updatedAt: log.updatedAt };
    else delete appData.completedSessions[workoutId];
    saveAppData();
    renderWeek();
  }

  function firstIncompleteWorkout(week) {
    return (week.workouts || []).find((workout) => !isCompleted(workout.workoutId)) || null;
  }

  function daysUntilMarathon() {
    const today = parseLocalDate(appDateIso());
    const marathon = parseLocalDate(plan.config.marathonDate);
    return Math.max(0, Math.ceil((marathon - today) / 86400000));
  }

  function trainingType(workout) {
    const labels = {
      "rustige-duur": "Rustige duur",
      herstel: "Hersteltraining",
      kwaliteit: "Kwaliteitstraining",
      interval: "Intervaltraining",
      testtraining: "Testtraining",
      "lange-duur": "Lange duurloop",
      wedstrijd: "Wedstrijd",
    };
    return labels[workout.category] || capitalize(String(workout.category || "Training").replace(/-/g, " "));
  }

  function relevantSegments(workout) {
    return model.flattenWorkoutSegments(workout).filter((segment) => !["wandelen", "warming-up", "cooling-down"].includes(segment.type));
  }

  function speedSummary(workout) {
    const values = relevantSegments(workout).map((segment) => Number(segment.speedKmh)).filter((value) => Number.isFinite(value) && value > 0);
    if (!values.length) return workout.surface === "buiten" ? "Buiten" : "Tempo op gevoel";
    const min = Math.min(...values);
    const max = Math.max(...values);
    return min === max ? `${formatNumber(min)} km/u` : `${formatNumber(min)}–${formatNumber(max)} km/u`;
  }

  function keyBlockSummary(workout) {
    const repeat = (workout.groups || []).find((group) => group.kind === "repeat");
    if (repeat?.segments?.length) {
      const work = repeat.segments[0];
      const recovery = repeat.segments[1];
      const main = `${repeat.repetitions} × ${work.display} op ${formatNumber(work.speedKmh)} km/u`;
      return recovery ? `${main} · herstel ${recovery.display}` : main;
    }
    const distanceSegments = relevantSegments(workout).filter((segment) => segment.basis === "distance");
    if (distanceSegments.length) {
      return distanceSegments.slice(0, 3).map((segment) => `${segment.display} op ${formatNumber(segment.speedKmh)} km/u`).join(" · ") + (distanceSegments.length > 3 ? " · …" : "");
    }
    const faster = relevantSegments(workout).filter((segment) => Number(segment.speedKmh) >= 11.5);
    if (faster.length) return faster.slice(0, 2).map((segment) => `${segment.display} op ${formatNumber(segment.speedKmh)} km/u`).join(" · ") + (faster.length > 2 ? " · …" : "");
    const longest = relevantSegments(workout).sort((a, b) => model.segmentDurationSeconds(b) - model.segmentDurationSeconds(a))[0];
    return longest ? `${longest.display} op ${formatNumber(longest.speedKmh)} km/u` : workout.goal;
  }

  function fuelingAdvice(workout) {
    if (workout.nutrition) return workout.nutrition;
    const minutes = Number(workout.totalPlannedSeconds || 0) / 60;
    if (!minutes) return workout.category === "wedstrijd" ? "Gebruik alleen het voedingsplan dat eerder goed is getest." : "";
    if (minutes < 75) return "Extra koolhydraten tijdens deze training zijn meestal niet nodig.";
    if (minutes <= 120) return "Richtlijn: 30–40 gram koolhydraten per uur.";
    if (minutes <= 150) return "Richtlijn: 45–60 gram koolhydraten per uur.";
    return "Richtlijn: 60–75 gram koolhydraten per uur, alleen als dit eerder goed ging.";
  }

  function workoutPrimarySummary(workout) {
    return joinText([workout.totalPlannedLabel, workout.estimatedDistanceLabel], "Bekijk de exacte opbouw");
  }

  function renderWeek() {
    const week = weeks[state.viewedWeekIndex] || weeks[0];
    const phase = plan.phases.find((item) => item.phaseId === week.phaseId);
    const completed = week.workouts.filter((workout) => isCompleted(workout.workoutId)).length;
    const next = firstIncompleteWorkout(week);
    app.innerHTML = `
      <section class="week-intro" aria-labelledby="week-title">
        <div class="week-label">Trainingsschema</div>
        <div class="week-title-row">
          <div>
            <h1 id="week-title">Week ${week.weekNumber}</h1>
            <p>${escapeHtml(phase?.name || week.phaseName)}</p>
          </div>
          <label class="week-picker">
            <span>Ga naar week</span>
            <select data-week-select aria-label="Kies trainingsweek">
              ${weeks.map((item, index) => `<option value="${index}" ${index === state.viewedWeekIndex ? "selected" : ""}>Week ${item.weekNumber}</option>`).join("")}
            </select>
          </label>
        </div>
        <div class="week-meta">${escapeHtml(week.periodLabel || `${formatDate(week.startDate, { day: "numeric", month: "long" })} – ${formatDate(week.endDate, { day: "numeric", month: "long", year: "numeric" })}`)} · ${escapeHtml(week.plannedDistanceLabel || "Afstand volgens trainingen")} · nog ${daysUntilMarathon()} dagen</div>
        <p class="week-focus">${escapeHtml(week.focus)}</p>
      </section>

      <div class="week-navigation" aria-label="Weeknavigatie">
        <button type="button" data-week-prev ${state.viewedWeekIndex === 0 ? "disabled" : ""}>Vorige week</button>
        <button type="button" data-week-current ${state.viewedWeekIndex === currentPlanWeekIndex() ? "disabled" : ""}>Deze week</button>
        <button type="button" data-week-next ${state.viewedWeekIndex === weeks.length - 1 ? "disabled" : ""}>Volgende week</button>
      </div>

      <section class="next-training" aria-label="Volgende training">
        <div><span>Volgende training</span>${next ? `<strong>Training ${next.trainingNumber} · ${escapeHtml(trainingType(next))}</strong><small>${escapeHtml(workoutPrimarySummary(next))}</small>` : `<strong>Week voltooid</strong><small>Alle ${week.workouts.length} trainingen zijn afgerond.</small>`}</div>
        <div class="week-score">${completed}/${week.workouts.length}</div>
      </section>

      <section class="training-list" aria-label="Trainingen in week ${week.weekNumber}">
        ${week.workouts.map((workout) => renderTrainingCard(workout)).join("")}
      </section>
    `;
  }

  function renderTrainingCard(workout) {
    const open = state.expandedWorkoutIds.has(workout.workoutId);
    const completed = isCompleted(workout.workoutId);
    const detailsId = `details-${workout.workoutId}`;
    return `
      <article class="training-card ${open ? "is-open" : ""} ${completed ? "is-completed" : ""}" data-workout-card="${workout.workoutId}">
        <button class="training-card-toggle" type="button" data-toggle-workout="${workout.workoutId}" aria-expanded="${open}" aria-controls="${detailsId}">
          <span class="card-topline"><span>Training ${workout.trainingNumber}</span>${completed ? `<span class="completed-mark">✓ Voltooid</span>` : `<span class="training-type">${escapeHtml(trainingType(workout))}</span>`}<span class="expand-icon" aria-hidden="true">${open ? "−" : "+"}</span></span>
          ${(workout.labels || []).length ? `<span class="training-labels">${workout.labels.map((label) => `<span>${escapeHtml(label)}</span>`).join("")}</span>` : ""}
          <span class="training-name">${escapeHtml(capitalize(workout.title))}</span>
          <span class="training-primary">${escapeHtml(workoutPrimarySummary(workout))}</span>
          <span class="training-speed">${escapeHtml(joinText([speedSummary(workout), workout.targetRpe ? `RPE ${workout.targetRpe}` : ""]))}</span>
          <span class="key-block"><strong>Belangrijkste blok</strong>${escapeHtml(keyBlockSummary(workout))}</span>
          <span class="practical-hint">${escapeHtml(workout.goal)}</span>
        </button>
        ${open ? `<div class="training-details" id="${detailsId}">${renderTrainingDetails(workout)}</div>` : ""}
        <div class="completion-row">
          <button class="completion-button ${completed ? "is-completed" : ""}" type="button" data-toggle-complete="${workout.workoutId}" aria-pressed="${completed}">
            <span aria-hidden="true">${completed ? "✓" : "○"}</span>${completed ? "Voltooid" : "Markeer als voltooid"}
          </button>
          <span>${open ? "Tik op − om details te sluiten" : "Tik op de kaart voor details"}</span>
        </div>
      </article>`;
  }

  function renderTrainingDetails(workout) {
    return `
      <p class="detail-context">Week ${workout.weekNumber} · ${escapeHtml(workout.dateLabel)} · Training ${workout.trainingNumber} · ${escapeHtml(workout.phaseName)}</p>
      <div class="detail-section"><h3>Exacte opbouw</h3><div class="segment-groups">${(workout.groups || []).map(renderSegmentGroup).join("")}</div></div>
      <div class="detail-section"><h3>Doel en belasting</h3><p><strong>Trainingsdoel:</strong> ${escapeHtml(workout.goal)}</p><p><strong>Gewenste RPE:</strong> ${escapeHtml(workout.targetRpe)}</p><p><strong>Mentale doelstelling:</strong> ${escapeHtml(workout.mentalGoal || "De training gecontroleerd uitvoeren zoals beschreven.")}</p></div>
      ${workout.orderWarning ? `<div class="detail-section"><h3>Planning en herstel</h3><p>${escapeHtml(workout.orderWarning)}</p></div>` : ""}
      ${(workout.detailsSections || []).map((section) => `<div class="detail-section source-detail"><h3>${escapeHtml(section.title)}</h3><ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`).join("")}
      ${workout.isTest ? renderTestForm(workout) : ""}
    `;
  }

  function renderSegmentGroup(group) {
    return `
      <section class="segment-group ${group.kind === "repeat" ? "is-repeat" : ""}">
        <div class="segment-heading"><strong>${escapeHtml(group.label)}</strong>${group.kind === "repeat" ? `<span>${group.repetitions}×</span>` : ""}</div>
        ${(group.segments || []).map((segment) => `
          <div class="segment-row">
            <span class="segment-kind">${escapeHtml(capitalize(String(segment.type || "onderdeel").replace(/-/g, " ")))}</span>
            <strong>${escapeHtml(segment.display)}</strong>
            <span>${Number.isFinite(Number(segment.speedKmh)) && Number(segment.speedKmh) > 0 ? `${formatNumber(segment.speedKmh)} km/u` : "zelf sturen"}</span>
            <span>${segment.inclinePercent == null ? "—" : `${formatNumber(segment.inclinePercent)}%`}</span>
          </div>`).join("")}
        ${group.omitRecoveryAfterLast ? `<p class="segment-footnote">Na de laatste herhaling vervalt het herstelstuk, zoals in het schema beschreven.</p>` : ""}
        ${(group.segments || []).some((segment) => segment.instruction) ? `<p class="segment-footnote">${escapeHtml(group.segments.map((segment) => segment.instruction).filter(Boolean).join(" "))}</p>` : ""}
      </section>`;
  }

  function testResult(workoutId) {
    return isObject(appData.testResults?.[workoutId]) ? appData.testResults[workoutId] : {};
  }

  function renderRpeOptions(value) {
    return `<option value="">Kies RPE</option>${Array.from({ length: 10 }, (_, index) => index + 1).map((number) => `<option value="${number}" ${String(value) === String(number) ? "selected" : ""}>${number}/10</option>`).join("")}`;
  }

  function renderTestForm(workout) {
    const result = testResult(workout.workoutId);
    return `<div class="detail-section test-registration">
      <h3>Testresultaat registreren</h3>
      <p>De waarden worden direct lokaal opgeslagen. Het schema en de voorgeschreven snelheden worden hierdoor niet automatisch aangepast.</p>
      <div class="test-fields">
        <label><span>Resultaat / tijd</span><input type="text" inputmode="text" value="${escapeAttr(result.result || "")}" placeholder="bijv. 22:35" data-test-workout="${workout.workoutId}" data-test-field="result"></label>
        <label><span>Gemiddelde snelheid</span><input type="number" inputmode="decimal" min="0" step="0.1" value="${escapeAttr(result.averageSpeed || "")}" placeholder="km/u" data-test-workout="${workout.workoutId}" data-test-field="averageSpeed"></label>
        <label><span>RPE</span><select data-test-workout="${workout.workoutId}" data-test-field="rpe">${renderRpeOptions(result.rpe)}</select></label>
        <label><span>RPE laatste blok</span><select data-test-workout="${workout.workoutId}" data-test-field="lastBlockRpe">${renderRpeOptions(result.lastBlockRpe)}</select></label>
        <label class="wide"><span>Ademhaling</span><input type="text" value="${escapeAttr(result.breathing || "")}" placeholder="bijv. stevig maar beheersbaar" data-test-workout="${workout.workoutId}" data-test-field="breathing"></label>
        <label class="wide"><span>Benen</span><input type="text" value="${escapeAttr(result.legs || "")}" placeholder="Hoe voelden je benen?" data-test-workout="${workout.workoutId}" data-test-field="legs"></label>
        <label class="wide"><span>Pijn / klachten</span><input type="text" value="${escapeAttr(result.pain || "")}" placeholder="Geen, of beschrijf waar en wanneer" data-test-workout="${workout.workoutId}" data-test-field="pain"></label>
        <label class="wide"><span>Algemene ervaring</span><textarea rows="3" data-test-workout="${workout.workoutId}" data-test-field="experience" placeholder="Hoe verliep de test?">${escapeHtml(result.experience || "")}</textarea></label>
        <label class="wide"><span>Vrije notitie</span><textarea rows="3" data-test-workout="${workout.workoutId}" data-test-field="note" placeholder="Aanvullende notitie">${escapeHtml(result.note || "")}</textarea></label>
      </div>
    </div>`;
  }

  function saveTestField(workoutId, field, value) {
    if (!workoutId || !field) return;
    appData.testResults ||= {};
    appData.testResults[workoutId] = { ...testResult(workoutId), [field]: value, updatedAt: nowIso() };
    saveAppData();
  }

  function renderPlan() {
    app.innerHTML = `
      <header class="page-header"><span>Volledig programma</span><h1>Schema</h1><p>Alle zestien trainingsweken in één compact overzicht.</p></header>
      <section class="plan-list">
        ${weeks.map((week, index) => {
          const phase = plan.phases.find((item) => item.phaseId === week.phaseId);
          const longRun = week.workouts.find((workout) => workout.trainingNumber === 4);
          const completed = week.workouts.filter((workout) => isCompleted(workout.workoutId)).length;
          return `<button class="plan-row" type="button" data-open-week="${index}"><span class="plan-week">Week ${week.weekNumber}</span><span class="plan-main"><strong>${escapeHtml(phase?.shortName || week.phaseName)}</strong><small>${week.workouts.length} trainingen · Training 4: ${escapeHtml(longRun?.estimatedDistanceLabel || "-")}</small></span><span class="plan-status">${completed}/${week.workouts.length}<i aria-hidden="true">›</i></span></button>`;
        }).join("")}
      </section>`;
  }

  function renderInfo() {
    const sections = [
      ["Tempo en afkortingen", [
        "km/u: snelheid in kilometer per uur.",
        "RPE: ervaren inspanning op een schaal van 1 tot 10.",
        "MP: marathontempo; in dit schema praktisch rond 12,0 km/u.",
        "Herstel: het rustige stuk tussen twee snellere delen.",
        "Helling: stijgingspercentage van de loopband.",
      ]],
      ["Trainingsfilosofie", plan.guidance.philosophy],
      ["Trainingssnelheden", plan.guidance.paces.map((item) => `${item.type}: ${item.speed}, helling ${item.incline}.`)],
      ["Trainingen plannen", plan.guidance.scheduling],
      ["Mogelijke trainingsvolgorde", plan.guidance.suggestedSequences],
      ["Inspanningsniveaus", plan.guidance.rpeScale.map((item) => `${item.type}: ${item.rpe}. ${item.feeling}`)],
      ["Helling op de loopband", plan.guidance.incline],
      ["Pijn en aanpassen", plan.guidance.painRules],
      ["Voeding tijdens trainingen", plan.guidance.fueling.map((item) => `${item.duration}: ${item.carbs}`)],
      ["Wanneer is 3:30 geloofwaardig?", plan.guidance.targetConfirmation],
      ["De drie officiële tests", plan.guidance.officialTests.map((item) => `Week ${item.week}, Training ${item.training}: ${item.title}. Vraag: ${item.question}`)],
      ["Wedstrijdstrategie", plan.guidance.raceStrategy.map((item) => `${item.distance}: ${item.pace}. ${item.instruction}`)],
    ];
    app.innerHTML = `
      <header class="page-header"><span>Naslag</span><h1>Informatie</h1><p>Korte uitleg over tempo, belasting en het gebruik van het schema.</p></header>
      <section class="target-summary"><div><span>Doel</span><strong>${escapeHtml(plan.config.targetTime)}</strong></div><div><span>Doeltempo</span><strong>${escapeHtml(plan.config.targetPace)}</strong></div><div><span>Praktisch MP</span><strong>${formatNumber(plan.config.practicalMarathonSpeedKmh)} km/u</strong></div></section>
      <section class="info-accordions">${sections.map(([title, items]) => `<details class="info-accordion"><summary><span>${escapeHtml(title)}</span><span aria-hidden="true">+</span></summary><div><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div></details>`).join("")}</section>
      <footer class="app-version">Versie ${APP_VERSION} · schema ${escapeHtml(plan.config.schemaVersion)}</footer>`;
  }

  function setView(view) {
    state.view = view;
    state.expandedWorkoutIds.clear();
    navButtons.forEach((button) => {
      const active = button.dataset.view === view;
      button.classList.toggle("is-active", active);
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    render();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function render() {
    if (state.view === VIEWS.PLAN) renderPlan();
    else if (state.view === VIEWS.INFO) renderInfo();
    else renderWeek();
  }

  function toggleWorkoutDetails(workoutId) {
    if (state.expandedWorkoutIds.has(workoutId)) state.expandedWorkoutIds.delete(workoutId);
    else state.expandedWorkoutIds.add(workoutId);
    renderWeek();
  }

  document.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) return setView(viewButton.dataset.view);

    const complete = event.target.closest("[data-toggle-complete]");
    if (complete) {
      event.stopPropagation();
      toggleCompleted(complete.dataset.toggleComplete);
      return;
    }

    const toggle = event.target.closest("[data-toggle-workout]");
    if (toggle) {
      toggleWorkoutDetails(toggle.dataset.toggleWorkout);
      return;
    }

    const card = event.target.closest("[data-workout-card]");
    if (card && !event.target.closest("button, a, select, summary")) {
      toggleWorkoutDetails(card.dataset.workoutCard);
      return;
    }

    if (event.target.closest("[data-week-prev]")) {
      state.viewedWeekIndex = Math.max(0, state.viewedWeekIndex - 1);
      state.expandedWorkoutIds.clear();
      return renderWeek();
    }
    if (event.target.closest("[data-week-next]")) {
      state.viewedWeekIndex = Math.min(weeks.length - 1, state.viewedWeekIndex + 1);
      state.expandedWorkoutIds.clear();
      return renderWeek();
    }
    if (event.target.closest("[data-week-current]")) {
      state.viewedWeekIndex = currentPlanWeekIndex();
      state.expandedWorkoutIds.clear();
      return renderWeek();
    }

    const openWeek = event.target.closest("[data-open-week]");
    if (openWeek) {
      state.viewedWeekIndex = Number(openWeek.dataset.openWeek);
      return setView(VIEWS.WEEK);
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-test-workout][data-test-field]")) {
      saveTestField(event.target.dataset.testWorkout, event.target.dataset.testField, event.target.value);
      return;
    }
    if (event.target.matches("[data-week-select]")) {
      state.viewedWeekIndex = Number(event.target.value);
      state.expandedWorkoutIds.clear();
      renderWeek();
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.matches("[data-test-workout][data-test-field]")) {
      saveTestField(event.target.dataset.testWorkout, event.target.dataset.testField, event.target.value);
    }
  });

  brandHome.addEventListener("click", () => {
    state.viewedWeekIndex = currentPlanWeekIndex();
    setView(VIEWS.WEEK);
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") saveAppData();
  });
  window.addEventListener("pagehide", saveAppData);

  async function retireLegacyPwaCache() {
    try {
      const appBasePath = new URL("./", window.location.href).pathname;
      if ("serviceWorker" in navigator && navigator.serviceWorker.getRegistrations) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        const appRegistrations = registrations.filter((registration) => new URL(registration.scope).pathname === appBasePath);
        await Promise.all(appRegistrations.map((registration) => registration.unregister()));
      }
      if ("caches" in window) {
        const cacheNames = await window.caches.keys();
        const appCachePrefixes = ["marathon-330-", "marathon-app-"];
        await Promise.all(cacheNames.filter((name) => appCachePrefixes.some((prefix) => name.startsWith(prefix))).map((name) => window.caches.delete(name)));
      }
      if (navigator.serviceWorker?.controller && window.sessionStorage && window.location.reload) {
        const reloadKey = `marathon-pwa-cleanup-${APP_VERSION}`;
        if (!window.sessionStorage.getItem(reloadKey)) {
          window.sessionStorage.setItem(reloadKey, "done");
          window.location.reload();
        }
      }
    } catch (error) {
      console.warn("Oude app-cache kon niet volledig worden opgeruimd.", error);
    }
  }

  render();
  retireLegacyPwaCache();

  window.MarathonApp = { APP_VERSION, STORAGE_KEY, plan, state, isCompleted, loadAppData, saveAppData, currentPlanWeekIndex, render, saveTestField };
})();
