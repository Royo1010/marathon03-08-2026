(function () {
  "use strict";

  const APP_VERSION = "marathon-plan-2026-v1";
  const STORAGE_KEY = "marathon330TrainingAppData_v1";
  const APP_DATA_VERSION = 2;
  const plan = window.MARATHON_PLAN;
  const model = window.MARATHON_MODEL;

  if (!plan || !model) throw new Error("De centrale marathondatabron kon niet worden geladen.");

  const weeks = plan.weeks;
  const workouts = weeks.flatMap((week) => week.workouts);
  const app = document.getElementById("app");
  const todayPill = document.getElementById("today-pill");
  const menuOverlay = document.getElementById("menu-overlay");
  const menuToggle = document.getElementById("menu-toggle");
  const countdownOverlay = document.getElementById("countdown-overlay");
  const countdownContent = document.getElementById("countdown-content");
  const milestoneOverlay = document.getElementById("milestone-overlay");
  const navButtons = Array.from(document.querySelectorAll("[data-view]"));

  const VIEWS = {
    TODAY: "today",
    WEEK: "week",
    WORKOUT: "workout",
    PLAN: "plan",
    PROGRESS: "progress",
    DATA: "data",
  };

  const state = {
    view: VIEWS.TODAY,
    selectedWorkoutId: "",
    viewedWeekIndex: 0,
    execution: null,
  };

  let appData = loadAppData();
  let timerHandle = null;

  function isObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function nowIso() {
    return new Date().toISOString();
  }

  function localDateIso(date = new Date()) {
    return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
  }

  function parseLocalDate(iso) {
    const [year, month, day] = String(iso).split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  function formatDate(iso, options = { day: "numeric", month: "short" }) {
    if (!iso) return "-";
    return parseLocalDate(iso).toLocaleDateString("nl-NL", options);
  }

  function formatDateTime(iso) {
    if (!iso) return "Nog niet opgeslagen";
    return new Date(iso).toLocaleString("nl-NL", { dateStyle: "medium", timeStyle: "short" });
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

  function formatNumber(value, decimals = 1) {
    if (!Number.isFinite(Number(value))) return "0";
    return Number(value).toLocaleString("nl-NL", { maximumFractionDigits: decimals });
  }

  function formatClock(seconds) {
    const safe = Math.max(0, Math.round(Number(seconds) || 0));
    const hours = Math.floor(safe / 3600);
    const minutes = Math.floor((safe % 3600) / 60);
    const secs = safe % 60;
    return hours
      ? `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
      : `${minutes}:${String(secs).padStart(2, "0")}`;
  }

  function formatDuration(seconds) {
    if (!seconds) return "-";
    const minutes = Math.floor(seconds / 60);
    const rest = seconds % 60;
    if (minutes && rest) return `${minutes} min ${rest} sec`;
    if (minutes) return `${minutes} min`;
    return `${rest} sec`;
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
      userSettings: {},
      uiState: {},
      legacyData: {},
      meta: {
        storageInitialized: true,
        schemaVersion: plan.config.schemaVersion,
        lastMigrationAt: null,
      },
    };
  }

  function normalizeWorkoutLog(log, workoutId) {
    const source = isObject(log) ? log : {};
    return {
      workoutId,
      planId: source.planId || plan.config.planId,
      completed: Boolean(source.completed),
      completedDate: source.completedDate || source.date || "",
      actualTimeMinutes: source.actualTimeMinutes === "" || source.actualTimeMinutes == null ? null : Number(source.actualTimeMinutes),
      actualDistanceKm: source.actualDistanceKm === "" || source.actualDistanceKm == null ? null : Number(source.actualDistanceKm),
      experiencedRpe: source.experiencedRpe === "" || source.experiencedRpe == null ? null : Number(source.experiencedRpe),
      painLevel: source.painLevel === "" || source.painLevel == null ? null : Number(source.painLevel),
      notes: source.notes || "",
      startedAt: source.startedAt || "",
      updatedAt: source.updatedAt || nowIso(),
    };
  }

  function migrateAppData(raw) {
    const empty = createEmptyAppData();
    if (!isObject(raw)) return empty;

    const migrated = {
      ...empty,
      ...raw,
      appDataVersion: APP_DATA_VERSION,
      activePlanId: plan.config.planId,
      userSettings: isObject(raw.userSettings) ? raw.userSettings : {},
      uiState: isObject(raw.uiState) ? raw.uiState : {},
      legacyData: isObject(raw.legacyData) ? raw.legacyData : {},
      meta: {
        ...empty.meta,
        ...(isObject(raw.meta) ? raw.meta : {}),
        schemaVersion: plan.config.schemaVersion,
      },
    };

    const currentLogs = {};
    if (isObject(raw.workoutLogs) && !Array.isArray(raw.workoutLogs.strength) && !Array.isArray(raw.workoutLogs.cardio)) {
      for (const [workoutId, log] of Object.entries(raw.workoutLogs)) {
        if (workouts.some((workout) => workout.workoutId === workoutId)) currentLogs[workoutId] = normalizeWorkoutLog(log, workoutId);
      }
    } else if (raw.workoutLogs || raw.runLogs || raw.completedSessions) {
      migrated.legacyData.previousPlan = {
        archivedAt: nowIso(),
        workoutLogs: raw.workoutLogs || {},
        runLogs: raw.runLogs || {},
        completedSessions: raw.completedSessions || {},
      };
    }
    migrated.workoutLogs = currentLogs;
    migrated.completedSessions = isObject(raw.completedSessions) && !Array.isArray(raw.completedSessions)
      ? Object.fromEntries(Object.entries(raw.completedSessions).filter(([id]) => workouts.some((workout) => workout.workoutId === id)))
      : {};
    migrated.meta.lastMigrationAt = raw.appDataVersion === APP_DATA_VERSION ? migrated.meta.lastMigrationAt : nowIso();
    return migrated;
  }

  function loadAppData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        const empty = createEmptyAppData();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(empty));
        return empty;
      }
      const migrated = migrateAppData(JSON.parse(raw));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      return migrated;
    } catch (error) {
      console.warn("Opslag kon niet worden gelezen; er is een veilige lege structuur gestart.", error);
      const empty = createEmptyAppData();
      try {
        localStorage.setItem(`${STORAGE_KEY}_corrupt_${Date.now()}`, localStorage.getItem(STORAGE_KEY) || "");
        localStorage.setItem(STORAGE_KEY, JSON.stringify(empty));
      } catch (_) {
        // De app blijft bruikbaar, ook wanneer opslag in private modus niet beschikbaar is.
      }
      return empty;
    }
  }

  function saveAppData() {
    appData.updatedAt = nowIso();
    appData.meta.schemaVersion = plan.config.schemaVersion;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    } catch (error) {
      console.warn("Opslaan is niet gelukt.", error);
    }
  }

  function workoutLog(workoutId) {
    return appData.workoutLogs[workoutId] || null;
  }

  function isCompleted(workoutId) {
    return Boolean(workoutLog(workoutId)?.completed || appData.completedSessions[workoutId]);
  }

  function getWorkout(workoutId) {
    return workouts.find((workout) => workout.workoutId === workoutId) || null;
  }

  function getWeekForWorkout(workoutId) {
    return weeks.find((week) => week.workouts.some((workout) => workout.workoutId === workoutId)) || weeks[0];
  }

  function currentWeekIndex() {
    const firstIncomplete = weeks.findIndex((week) => week.workouts.some((workout) => !isCompleted(workout.workoutId)));
    return firstIncomplete === -1 ? weeks.length - 1 : firstIncomplete;
  }

  function nextWorkout() {
    return workouts.find((workout) => !isCompleted(workout.workoutId)) || workouts[workouts.length - 1];
  }

  function selectedWorkout() {
    return getWorkout(state.selectedWorkoutId) || nextWorkout();
  }

  function phaseForWeek(week) {
    return plan.phases.find((phase) => phase.phaseId === week.phaseId) || plan.phases[0];
  }

  function statusForWorkout(workout) {
    if (isCompleted(workout.workoutId)) return { id: "completed", label: "Voltooid", icon: "✓" };
    if (nextWorkout()?.workoutId === workout.workoutId) return { id: "active", label: "Volgende", icon: "" };
    return { id: "todo", label: "Nog te doen", icon: "" };
  }

  function countdownParts(from = new Date()) {
    const target = parseLocalDate(plan.config.marathonDate);
    const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
    const days = Math.ceil((target - start) / 86400000);
    if (days < 0) return { days, text: "Marathon voltooid" };
    const weeksLeft = Math.floor(days / 7);
    const remainingDays = days % 7;
    return { days, text: `${weeksLeft} weken en ${remainingDays} dagen` };
  }

  function openMenu() {
    menuOverlay.hidden = false;
    menuToggle.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    menuOverlay.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
  }

  function navigate(view) {
    stopTimer();
    state.view = view;
    state.execution = null;
    if (view === VIEWS.WEEK) state.viewedWeekIndex = currentWeekIndex();
    closeMenu();
    render();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function openWorkout(workoutId, start = false) {
    const workout = getWorkout(workoutId);
    if (!workout) return;
    if (start && !confirmOrderIfNeeded(workout)) return;
    state.selectedWorkoutId = workoutId;
    state.view = VIEWS.WORKOUT;
    state.viewedWeekIndex = weeks.indexOf(getWeekForWorkout(workoutId));
    state.execution = null;
    if (start) beginExecution(workout);
    closeMenu();
    render();
    if (start) scrollExecutionIntoView();
    else window.scrollTo({ top: 0, behavior: "auto" });
  }

  function confirmOrderIfNeeded(workout) {
    const week = getWeekForWorkout(workout.workoutId);
    const earlier = week.workouts.filter((item) => item.trainingNumber < workout.trainingNumber && !isCompleted(item.workoutId));
    const quality = week.workouts.find((item) => item.trainingNumber === 2);
    const qualityLog = quality ? workoutLog(quality.workoutId) : null;
    let message = "";
    if (workout.trainingNumber === 4 && quality && !isCompleted(quality.workoutId)) {
      message = "Training 2 is nog niet voltooid. Training 4 is de lange duurtraining en hoort normaal niet direct naast de kwaliteitstraining te staan.";
    } else if (workout.trainingNumber === 4 && qualityLog?.completedDate) {
      const dayDifference = Math.round((parseLocalDate(localDateIso()) - parseLocalDate(qualityLog.completedDate)) / 86400000);
      if (dayDifference >= 0 && dayDifference < 2) message = "Je kwaliteitstraining was minder dan ongeveer 48 uur geleden. De lange duurtraining vraagt bij voorkeur meer herstel.";
    } else if (earlier.length) {
      message = `${earlier.length} eerdere training${earlier.length === 1 ? "" : "en"} in deze week ${earlier.length === 1 ? "is" : "zijn"} nog niet voltooid.`;
    }
    return !message || window.confirm(`${message}\n\nWil je deze training bewust toch starten?`);
  }

  function moveWorkout(direction) {
    const current = selectedWorkout();
    const index = Math.max(0, workouts.findIndex((workout) => workout.workoutId === current.workoutId));
    const nextIndex = Math.min(workouts.length - 1, Math.max(0, index + direction));
    state.selectedWorkoutId = workouts[nextIndex].workoutId;
    state.viewedWeekIndex = weeks.indexOf(getWeekForWorkout(state.selectedWorkoutId));
    state.execution = null;
    stopTimer();
    state.view = VIEWS.TODAY;
    render();
  }

  function compactMeta(items) {
    return `<div class="compact-meta">${items.filter(Boolean).map((item) => `<span class="meta-chip">${escapeHtml(item)}</span>`).join("")}</div>`;
  }

  function statusBadge(workout) {
    const status = statusForWorkout(workout);
    return `<span class="status-badge status-${status.id}">${status.icon ? `${status.icon} ` : ""}${status.label}</span>`;
  }

  function workoutSummary(workout) {
    return `${workout.totalPlannedLabel} · ${workout.estimatedDistanceLabel}`;
  }

  function renderPageHeader(kicker, title, subtitle = "") {
    return `<header class="page-header"><span class="eyebrow">${escapeHtml(kicker)}</span><h1>${escapeHtml(title)}</h1>${subtitle ? `<p>${escapeHtml(subtitle)}</p>` : ""}</header>`;
  }

  function renderToday() {
    const workout = selectedWorkout();
    const week = getWeekForWorkout(workout.workoutId);
    const phase = phaseForWeek(week);
    const complete = isCompleted(workout.workoutId);
    const allDone = workouts.every((item) => isCompleted(item.workoutId));
    app.innerHTML = `
      ${renderPageHeader("Vandaag", allDone ? "Schema voltooid" : "Eerstvolgende training", allDone ? "Alle trainingen in dit plan zijn geregistreerd." : "Geen vaste weekdag: voer de sessies in volgorde uit wanneer je herstel het toelaat.")}
      <section class="today-workout-card">
        <div class="today-card-top"><span>${escapeHtml(phase.name)} · Week ${week.weekNumber}</span>${statusBadge(workout)}</div>
        <div class="training-index">Training ${workout.trainingNumber} van 4</div>
        <h2>${escapeHtml(capitalize(workout.title))}</h2>
        <p class="today-summary">${escapeHtml(workoutSummary(workout))}</p>
        ${compactMeta([capitalize(workout.category.replace(/-/g, " ")), `RPE ${workout.targetRpe}`, workout.surface])}
        <div class="today-goal"><strong>Doel</strong><span>${escapeHtml(workout.goal)}</span></div>
        <div class="card-actions centered-actions">
          <button class="primary-button" type="button" data-open-workout="${workout.workoutId}">Training openen</button>
          <button class="secondary-button" type="button" data-start-workout="${workout.workoutId}">${complete ? "Opnieuw bekijken" : "Training starten"}</button>
        </div>
      </section>
      <section class="dashboard-strip">
        <div><strong>${week.workouts.filter((item) => isCompleted(item.workoutId)).length}/4</strong><span>deze week</span></div>
        <div><strong>${formatNumber(week.plannedDistanceKm)} km</strong><span>gepland</span></div>
        <div><strong>${countdownParts().days}</strong><span>dagen tot marathon</span></div>
      </section>
      <section class="info-card compact-card">
        <h3>Herstelregels</h3>
        <p>${escapeHtml(workout.orderWarning)}</p>
        <p class="muted">Training 2 en Training 4 nooit op opeenvolgende dagen. Na Training 4 bij voorkeur minstens één dag zonder hardlopen.</p>
      </section>
    `;
  }

  function renderWeek() {
    const week = weeks[state.viewedWeekIndex] || weeks[0];
    const phase = phaseForWeek(week);
    const completed = week.workouts.filter((workout) => isCompleted(workout.workoutId)).length;
    app.innerHTML = `
      <section class="week-header-card">
        <button class="icon-nav-button" type="button" data-week-prev aria-label="Vorige week" ${state.viewedWeekIndex === 0 ? "disabled" : ""}>‹</button>
        <div>
          <span class="eyebrow">Schemaweek</span>
          <h1>Week ${week.weekNumber}</h1>
          <p>${escapeHtml(phase.name)}</p>
          ${compactMeta([`${formatDate(week.startDate)} - ${formatDate(week.endDate)}`, `${formatNumber(week.plannedDistanceKm)} km`, `${completed}/4 voltooid`])}
        </div>
        <button class="icon-nav-button" type="button" data-week-next aria-label="Volgende week" ${state.viewedWeekIndex === weeks.length - 1 ? "disabled" : ""}>›</button>
      </section>
      <section class="section-heading"><div><span class="eyebrow">Flexibel te plannen</span><h2>Trainingen deze week</h2></div><span>${completed}/4</span></section>
      <div class="workout-list">${week.workouts.map((workout) => renderWorkoutCard(workout, week)).join("")}</div>
      <section class="info-card compact-card">
        <h3>Weekfocus</h3>
        <p>${escapeHtml(week.focus)}</p>
        <p><strong>Volgorde:</strong> Training 1 → Training 2 → Training 3 → Training 4. Kies zelf de kalenderdagen; herstelregels zijn leidend.</p>
      </section>
    `;
  }

  function renderWorkoutCard(workout, week) {
    const log = workoutLog(workout.workoutId);
    return `
      <article class="workout-card ${isCompleted(workout.workoutId) ? "is-completed" : ""}" data-open-workout="${workout.workoutId}" tabindex="0" role="button">
        <div class="workout-card-head"><span class="training-index">Training ${workout.trainingNumber}</span>${statusBadge(workout)}</div>
        <h3>${escapeHtml(capitalize(workout.title))}</h3>
        <p class="workout-summary">${escapeHtml(workoutSummary(workout))}</p>
        ${compactMeta([capitalize(workout.category.replace(/-/g, " ")), `RPE ${workout.targetRpe}`])}
        <p><strong>Doel:</strong> ${escapeHtml(workout.goal)}</p>
        ${log?.completedDate ? `<p class="completion-line">Voltooid op ${formatDate(log.completedDate, { day: "numeric", month: "long", year: "numeric" })}</p>` : ""}
        <span class="card-link-label">Open training →</span>
      </article>`;
  }

  function renderWorkoutDetail() {
    const workout = selectedWorkout();
    const week = getWeekForWorkout(workout.workoutId);
    const phase = phaseForWeek(week);
    const log = workoutLog(workout.workoutId) || {};
    app.innerHTML = `
      <button class="back-button" type="button" data-back-week>‹ Terug naar week ${week.weekNumber}</button>
      <section class="workout-hero">
        <div class="workout-card-head"><span class="eyebrow">Week ${week.weekNumber} · Training ${workout.trainingNumber}</span>${statusBadge(workout)}</div>
        <h1>${escapeHtml(capitalize(workout.title))}</h1>
        <p class="workout-summary prominent">${escapeHtml(workoutSummary(workout))}</p>
        ${compactMeta([phase.shortName, capitalize(workout.category.replace(/-/g, " ")), `RPE ${workout.targetRpe}`, workout.surface])}
        <div class="detail-grid">
          <div><span>Doel</span><strong>${escapeHtml(workout.goal)}</strong></div>
          <div><span>Herstel</span><strong>${escapeHtml(workout.orderWarning)}</strong></div>
        </div>
        <div class="card-actions">
          <button class="primary-button" type="button" data-start-execution="${workout.workoutId}">Uitvoeringsmodus</button>
          <button class="secondary-button" type="button" data-scroll-completion>Resultaat registreren</button>
        </div>
      </section>
      ${state.execution?.workoutId === workout.workoutId ? renderExecutionPanel(workout) : ""}
      <section class="section-heading"><div><span class="eyebrow">Chronologische opbouw</span><h2>Loopbandinstellingen</h2></div><span>${model.flattenWorkoutSegments(workout).length} stappen</span></section>
      <div class="segment-groups">${workout.groups.map((group) => renderSegmentGroup(group)).join("")}</div>
      ${renderTechniqueGuidance(workout)}
      ${renderWorkoutInformation(workout)}
      ${renderCompletionForm(workout, log)}
    `;
  }

  function renderSegmentGroup(group) {
    return `
      <section class="segment-group ${group.kind === "repeat" ? "is-repeat" : ""}">
        <div class="segment-group-head">
          <div><span class="segment-group-label">${escapeHtml(group.label)}</span>${group.context ? `<small>${escapeHtml(group.context)}</small>` : ""}</div>
          ${group.kind === "repeat" ? `<strong>${group.repetitions}×</strong>` : ""}
        </div>
        <div class="segment-list">${group.segments.map((segment) => renderSegmentRow(segment, group)).join("")}</div>
        ${group.omitRecoveryAfterLast ? `<p class="segment-note">Na het laatste snelle blok vervalt het herstelstuk en ga je door naar de afsluiting.</p>` : ""}
      </section>`;
  }

  function renderSegmentRow(segment) {
    return `
      <div class="segment-row segment-${escapeAttr(segment.type)}">
        <span class="segment-type">${escapeHtml(capitalize(segment.type.replace(/-/g, " ")))}</span>
        <div class="segment-main">
          <strong>${escapeHtml(segment.display)}</strong>
          <span>${formatNumber(segment.speedKmh)} km/u</span>
        </div>
        <div class="incline-value"><strong>${segment.inclinePercent == null ? "Buiten" : `${formatNumber(segment.inclinePercent)}%`}</strong><span>helling</span></div>
      </div>`;
  }

  function renderWorkoutInformation(workout) {
    const fueling = fuelingAdvice(workout);
    const hasExtra = fueling || workout.notes.length || workout.evaluation;
    if (!hasExtra) return "";
    return `
      <section class="detail-info-stack">
        ${fueling ? `<article class="info-card"><h3>Voeding en drinken</h3><p>${escapeHtml(fueling)}</p></article>` : ""}
        ${workout.notes.length ? `<article class="info-card"><h3>Aanvullende aanwijzingen</h3>${workout.notes.map((note) => `<p>${escapeHtml(note)}</p>`).join("")}</article>` : ""}
        ${workout.evaluation ? `
          <article class="info-card evaluation-card">
            <h3>${escapeHtml(workout.evaluation.title)}</h3>
            <h4>Positieve criteria</h4>
            <ul>${workout.evaluation.criteria.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            <h4>Aanpassen als dit niet lukt</h4>
            <ul>${workout.evaluation.adjustmentRules.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </article>` : ""}
      </section>`;
  }

  function fuelingAdvice(workout) {
    if (workout.nutrition) return workout.nutrition;
    const minutes = workout.totalPlannedSeconds / 60;
    if (!minutes) return workout.category === "wedstrijd" ? "Voer uitsluitend het gel-, drink- en ontbijtplan uit dat tijdens de lange trainingen goed is getest." : "";
    if (minutes < 75) return "Tijdens deze training is extra koolhydraatinname meestal niet nodig. Start wel normaal gevoed en drink naar behoefte.";
    if (minutes <= 120) return "Richtlijn: 30–40 gram koolhydraten per uur. Gebruik deze training om timing en maagreactie te leren kennen.";
    if (minutes <= 150) return "Richtlijn: 45–60 gram koolhydraten per uur. Begin vroeg genoeg en test gels altijd met water.";
    return "Richtlijn: 60–75 gram koolhydraten per uur, uitsluitend als lagere innames eerder goed zijn verdragen.";
  }

  function renderTechniqueGuidance(workout) {
    const quality = ["kwaliteit", "interval", "testtraining"].includes(workout.category);
    const longRun = workout.category === "lange-duur";
    const race = workout.category === "wedstrijd";
    const purpose = race
      ? "Deze sessie brengt alle opgebouwde onderdelen samen: energieverdeling, loopeconomie, voeding, mentale controle en het vermogen om na 30 kilometer technisch te blijven lopen."
      : longRun
        ? "De lange duurtraining bouwt vooral aerobe capaciteit, lokale spieruithouding, pees- en gewrichtsbelastbaarheid, brandstofgebruik en mentale rust op. De afstand of duur is de hoofdprikkel; snelheid is ondergeschikt tenzij een sneller blok expliciet staat voorgeschreven."
        : quality
          ? "De snellere stukken verbeteren tempoherkenning, loopeconomie en het vermogen om een hogere bandsnelheid gecontroleerd vast te houden. Het herstelstuk maakt kwalitatieve herhalingen mogelijk zonder dat de sessie een maximale test wordt."
          : "De rustige training vergroot je aerobe basis en loopfrequentie met beperkte herstelkosten. Je traint vooral ontspannen ritme, efficiënte pasplaatsing en het vermogen om volledige zinnen te blijven spreken.";
    const intensity = race
      ? "Start bewust beheerst. De gemiddelde snelheid voor 3:30 is geen verplicht starttempo; volg de racestrategie uit Schema en versnel pas laat als alle signalen goed blijven."
      : quality
        ? "Laat de band het tempo bepalen zonder je aan de handgrepen op te trekken. Het laatste snelle stuk mag zwaar voelen, maar je houding en pas moeten stabiel blijven. Geen sprintgevoel en geen totale uitputting."
        : "Houd schouders, handen en gezicht ontspannen. Als je niet meer in volledige zinnen kunt praten of de rustige stukken boven RPE 4 komen, verlaag dan 0,3–0,5 km/u.";
    return `
      <details class="accordion-row workout-guidance">
        <summary><span>Doel, spieren en uitvoering</span><span class="accordion-chevron">⌄</span></summary>
        <div class="accordion-content guidance-content">
          <h3>Waarom deze training?</h3><p>${escapeHtml(purpose)}</p>
          <h3>Wat train je?</h3><p>Hart en longen leveren de aerobe basis. Kuiten en achilles slaan veerenergie op, hamstrings en bilspieren sturen heupextensie, quadriceps vangen en stuwen op, en voet- en enkelspieren houden iedere landing stabiel. Je core voorkomt onnodig draaien en helpt je bekken rustig te houden.</p>
          <h3>Houding op de loopband</h3><ul><li>Kijk vooruit en maak jezelf lang; knik niet vanuit je middel.</li><li>Gebruik een lichte helling vanuit de enkels, niet door de heupen naar voren te duwen.</li><li>Laat je voet ongeveer onder je lichaamszwaartepunt landen en probeer niet ver voor je uit te stappen.</li><li>Houd schouders laag, ellebogen ontspannen gebogen en laat de armen rustig voor-achter bewegen.</li><li>Hang niet aan de handgrepen. Verlaag de snelheid als je ze nodig hebt om het tempo vol te houden.</li></ul>
          <h3>Intensiteit en controle</h3><p>${escapeHtml(intensity)}</p>
          <h3>Veilig instellen</h3><p>Bevestig de veiligheidsclip, verhoog snelheid en helling in beheersbare stappen en wacht tot je pas stabiel is voordat je verder versnelt. Verander de helling niet midden in een snel blok. Gebruik bij lange trainingen een krachtige ventilator en leg drinken binnen veilig bereik.</p>
          <h3>Pijnsignalen</h3><p>Bij 3/10 pijn: helling naar 0% en snelheid 0,5 km/u lager. Vermindert dit niet binnen vijf minuten, stop dan. Stop direct bij scherpe pijn, mank lopen of een duidelijk veranderde pas.</p>
        </div>
      </details>`;
  }

  function renderCompletionForm(workout, log) {
    return `
      <section class="completion-card" id="completion-form" data-completion-form="${workout.workoutId}">
        <div class="section-heading"><div><span class="eyebrow">Persoonlijke uitvoering</span><h2>Resultaat registreren</h2></div>${isCompleted(workout.workoutId) ? `<span class="status-badge status-completed">✓ Voltooid</span>` : ""}</div>
        <div class="form-grid">
          <label>Datum<input type="date" data-log-field="completedDate" value="${escapeAttr(log.completedDate || localDateIso())}" /></label>
          <label>Werkelijke tijd (min)<input type="number" inputmode="decimal" min="0" step="0.5" data-log-field="actualTimeMinutes" value="${escapeAttr(log.actualTimeMinutes ?? "")}" placeholder="${Math.round(workout.totalPlannedSeconds / 60) || ""}" /></label>
          <label>Werkelijke afstand (km)<input type="number" inputmode="decimal" min="0" step="0.01" data-log-field="actualDistanceKm" value="${escapeAttr(log.actualDistanceKm ?? "")}" placeholder="${workout.estimatedDistanceKm || ""}" /></label>
          <label>Ervaren RPE<input type="number" inputmode="decimal" min="1" max="10" step="0.5" data-log-field="experiencedRpe" value="${escapeAttr(log.experiencedRpe ?? "")}" placeholder="1–10" /></label>
          <label>Pijnniveau<input type="number" inputmode="decimal" min="0" max="10" step="0.5" data-log-field="painLevel" value="${escapeAttr(log.painLevel ?? "")}" placeholder="0–10" /></label>
        </div>
        <label class="notes-field">Notities<textarea rows="4" data-log-field="notes" placeholder="Hoe voelde de training? Wat wil je onthouden?">${escapeHtml(log.notes || "")}</textarea></label>
        <label class="completion-toggle"><input type="checkbox" data-log-field="completed" ${log.completed ? "checked" : ""} /><span>Training voltooid</span></label>
        <p class="save-status" data-save-status>Wijzigingen worden direct op dit apparaat opgeslagen.</p>
      </section>`;
  }

  function beginExecution(workout) {
    const segments = model.flattenWorkoutSegments(workout);
    if (!segments.length) return;
    const log = workoutLog(workout.workoutId) || normalizeWorkoutLog({}, workout.workoutId);
    log.startedAt ||= nowIso();
    appData.workoutLogs[workout.workoutId] = log;
    saveAppData();
    state.execution = {
      workoutId: workout.workoutId,
      index: 0,
      remaining: model.segmentDurationSeconds(segments[0]),
      running: false,
    };
  }

  function scrollExecutionIntoView() {
    window.requestAnimationFrame(() => document.querySelector("[data-execution-panel]")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function renderExecutionPanel(workout) {
    const segments = model.flattenWorkoutSegments(workout);
    const execution = state.execution;
    const current = segments[execution.index];
    const next = segments[execution.index + 1];
    return `
      <section class="execution-panel" data-execution-panel>
        <div class="execution-top"><span>Stap ${execution.index + 1} van ${segments.length}</span><button type="button" class="close-button" data-exit-execution aria-label="Uitvoeringsmodus sluiten">×</button></div>
        <div class="execution-type">${escapeHtml(capitalize(current.type.replace(/-/g, " ")))}</div>
        <div class="execution-setting"><strong>${formatNumber(current.speedKmh)}</strong><span>km/u</span></div>
        <div class="execution-secondary">
          <div><strong>${current.inclinePercent == null ? "Buiten" : `${formatNumber(current.inclinePercent)}%`}</strong><span>helling</span></div>
          <div><strong>${escapeHtml(current.display)}</strong><span>${current.basis === "distance" ? "afstand" : "duur"}</span></div>
        </div>
        <div class="execution-timer" data-timer-display>${formatClock(execution.remaining)}</div>
        <p>${escapeHtml(current.instruction)}</p>
        ${current.repeats > 1 ? `<span class="repeat-progress">Herhaling ${current.repeat} van ${current.repeats}</span>` : ""}
        <div class="execution-controls">
          <button class="icon-control" type="button" data-execution-prev aria-label="Vorige stap" ${execution.index === 0 ? "disabled" : ""}>‹</button>
          <button class="primary-button timer-button" type="button" data-timer-toggle>${execution.running ? "Pauze" : "Start timer"}</button>
          <button class="icon-control" type="button" data-execution-next aria-label="Volgende stap" ${execution.index === segments.length - 1 ? "disabled" : ""}>›</button>
        </div>
        <button class="text-button" type="button" data-timer-reset>Timer opnieuw instellen</button>
        <div class="next-segment"><span>Hierna</span><strong>${next ? `${next.display} · ${formatNumber(next.speedKmh)} km/u · ${next.inclinePercent == null ? "buiten" : `${formatNumber(next.inclinePercent)}%`}` : "Training afronden"}</strong></div>
      </section>`;
  }

  function stopTimer() {
    if (timerHandle) window.clearInterval(timerHandle);
    timerHandle = null;
    if (state.execution) state.execution.running = false;
  }

  function toggleTimer() {
    if (!state.execution) return;
    if (state.execution.running) {
      stopTimer();
      renderWorkoutDetail();
      return;
    }
    state.execution.running = true;
    renderWorkoutDetail();
    timerHandle = window.setInterval(() => {
      if (!state.execution?.running) return;
      state.execution.remaining = Math.max(0, state.execution.remaining - 1);
      const display = document.querySelector("[data-timer-display]");
      if (display) display.textContent = formatClock(state.execution.remaining);
      if (state.execution.remaining === 0) {
        stopTimer();
        if (navigator.vibrate) navigator.vibrate([150, 80, 150]);
        const button = document.querySelector("[data-timer-toggle]");
        if (button) button.textContent = "Volgende stap";
      }
    }, 1000);
  }

  function moveExecution(direction) {
    const workout = selectedWorkout();
    const segments = model.flattenWorkoutSegments(workout);
    const nextIndex = Math.max(0, Math.min(segments.length - 1, state.execution.index + direction));
    stopTimer();
    state.execution.index = nextIndex;
    state.execution.remaining = model.segmentDurationSeconds(segments[nextIndex]);
    renderWorkoutDetail();
  }

  function resetTimer() {
    if (!state.execution) return;
    stopTimer();
    const segment = model.flattenWorkoutSegments(selectedWorkout())[state.execution.index];
    state.execution.remaining = model.segmentDurationSeconds(segment);
    renderWorkoutDetail();
  }

  function saveCompletionForm(form) {
    const workoutId = form.dataset.completionForm;
    const existing = workoutLog(workoutId) || normalizeWorkoutLog({}, workoutId);
    const value = (name) => form.querySelector(`[data-log-field="${name}"]`)?.value ?? "";
    const completed = Boolean(form.querySelector('[data-log-field="completed"]')?.checked);
    const numeric = (name) => value(name) === "" ? null : Number(value(name));
    const log = normalizeWorkoutLog({
      ...existing,
      completed,
      completedDate: value("completedDate"),
      actualTimeMinutes: numeric("actualTimeMinutes"),
      actualDistanceKm: numeric("actualDistanceKm"),
      experiencedRpe: numeric("experiencedRpe"),
      painLevel: numeric("painLevel"),
      notes: value("notes"),
      updatedAt: nowIso(),
    }, workoutId);
    appData.workoutLogs[workoutId] = log;
    if (completed) appData.completedSessions[workoutId] = { completedAt: log.completedDate || localDateIso(), updatedAt: nowIso() };
    else delete appData.completedSessions[workoutId];
    saveAppData();
    const status = form.querySelector("[data-save-status]");
    if (status) status.textContent = `Opgeslagen om ${new Date().toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" })}`;
  }

  function renderPlan() {
    const totalDistance = weeks.reduce((sum, week) => sum + week.plannedDistanceKm, 0) + 42.195;
    app.innerHTML = `
      ${renderPageHeader("Marathonschema", "16 weken richting 3:30", `${formatDate(plan.config.startDate, { day: "numeric", month: "long" })} tot en met ${formatDate(plan.config.marathonDate, { day: "numeric", month: "long", year: "numeric" })}`)}
      <section class="plan-hero">
        <div><span>Ambitieus doel</span><strong>${plan.config.targetTime}</strong></div>
        <div><span>Doeltempo</span><strong>${plan.config.targetPace}</strong></div>
        <div><span>Praktisch MP</span><strong>${formatNumber(plan.config.practicalMarathonSpeedKmh)} km/u</strong></div>
        <div><span>Geplande omvang</span><strong>±${formatNumber(totalDistance, 0)} km</strong></div>
      </section>
      <section class="phase-timeline">${plan.phases.map((phase) => renderPhaseCard(phase)).join("")}</section>
      <section class="section-heading"><div><span class="eyebrow">Volledig overzicht</span><h2>Alle trainingsweken</h2></div><span>16 weken</span></section>
      <div class="plan-week-list">${weeks.map((week, index) => renderPlanWeek(week, index)).join("")}</div>
      ${renderGuidanceAccordions()}
    `;
  }

  function renderPhaseCard(phase) {
    const phaseWeeks = weeks.filter((week) => week.phaseId === phase.phaseId);
    const completed = phaseWeeks.flatMap((week) => week.workouts).filter((workout) => isCompleted(workout.workoutId)).length;
    return `
      <article class="phase-card">
        <span class="meta-chip">Fase ${phase.number}</span>
        <h3>${escapeHtml(phase.name)}</h3>
        <p>Week ${phase.startWeek}${phase.endWeek !== phase.startWeek ? `–${phase.endWeek}` : ""} · ${formatDate(phase.startDate)}–${formatDate(phase.endDate)}</p>
        <p>${escapeHtml(phase.goal)}</p>
        <strong>${completed}/${phaseWeeks.length * 4} trainingen voltooid</strong>
      </article>`;
  }

  function renderPlanWeek(week, index) {
    const completed = week.workouts.filter((workout) => isCompleted(workout.workoutId)).length;
    const status = completed === 4 ? "Voltooid" : index === currentWeekIndex() ? "Actief" : index < currentWeekIndex() ? "Voorbij" : "Komend";
    return `
      <button class="plan-week-row" type="button" data-open-plan-week="${index}">
        <div><span>Week ${week.weekNumber}</span><strong>${escapeHtml(week.phaseName)}</strong><small>${formatDate(week.startDate)}–${formatDate(week.endDate)}</small></div>
        <div><strong>${formatNumber(week.plannedDistanceKm)} km${week.weekNumber === 16 ? " + marathon" : ""}</strong><span>${status} · ${completed}/4 voltooid</span></div>
        <span class="row-chevron">›</span>
      </button>`;
  }

  function renderGuidanceAccordions() {
    const sections = [
      ["Flexibele planning", plan.guidance.scheduling],
      ["Inspanningsschaal", plan.guidance.rpeScale.map((item) => `${item.type}: ${item.rpe} — ${item.feeling}`)],
      ["Hellingsregels", plan.guidance.incline],
      ["Pijn- en aanpassingsregels", plan.guidance.painRules],
      ["Wanneer is 3:30 voldoende bevestigd?", plan.guidance.targetConfirmation],
      ["Wedstrijdstrategie", plan.guidance.raceStrategy.map((item) => `${item.distance}: ${item.pace}. ${item.instruction}`)],
    ];
    return `<section class="accordion-section"><div class="section-heading"><div><span class="eyebrow">Naslag</span><h2>Schema-uitleg</h2></div></div>${sections.map(([title, items]) => `<details class="accordion-row"><summary><span>${escapeHtml(title)}</span><span class="accordion-chevron">⌄</span></summary><div class="accordion-content"><ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div></details>`).join("")}</section>`;
  }

  function progressData() {
    const completedWorkouts = workouts.filter((workout) => isCompleted(workout.workoutId));
    const logs = completedWorkouts.map((workout) => ({ workout, log: workoutLog(workout.workoutId) || {} }));
    const plannedCompletedDistance = completedWorkouts.reduce((sum, workout) => sum + (workout.estimatedDistanceKm || 0), 0);
    const actualDistance = logs.reduce((sum, item) => sum + (Number(item.log.actualDistanceKm) || 0), 0);
    const actualMinutes = logs.reduce((sum, item) => sum + (Number(item.log.actualTimeMinutes) || 0), 0);
    const rpes = logs.map((item) => Number(item.log.experiencedRpe)).filter(Number.isFinite);
    const longest = logs.sort((a, b) => (Number(b.log.actualDistanceKm) || b.workout.estimatedDistanceKm || 0) - (Number(a.log.actualDistanceKm) || a.workout.estimatedDistanceKm || 0))[0];
    return {
      completedWorkouts,
      plannedCompletedDistance,
      actualDistance,
      actualMinutes,
      averageRpe: rpes.length ? rpes.reduce((sum, value) => sum + value, 0) / rpes.length : null,
      longest,
    };
  }

  function renderProgress() {
    const progress = progressData();
    const percent = Math.round((progress.completedWorkouts.length / workouts.length) * 100);
    const current = weeks[currentWeekIndex()];
    app.innerHTML = `
      ${renderPageHeader("Voortgang", "Marathonvoorbereiding", "Eenvoudige, betrouwbare voortgang op basis van je geregistreerde trainingen.")}
      <section class="progress-hero"><div class="progress-ring" style="--progress:${percent * 3.6}deg"><strong>${percent}%</strong><span>voltooid</span></div><div><h2>${progress.completedWorkouts.length} van ${workouts.length} trainingen</h2><p>Huidige focus: week ${current.weekNumber} · ${escapeHtml(current.phaseName)}</p></div></section>
      <section class="metrics-grid">
        ${metricCard("Werkelijk gelopen", `${formatNumber(progress.actualDistance)} km`, `Gepland voor voltooide trainingen: ${formatNumber(progress.plannedCompletedDistance)} km`)}
        ${metricCard("Gelopen tijd", formatMinutesTotal(progress.actualMinutes), "Alleen werkelijk geregistreerde tijd")}
        ${metricCard("Langste voltooid", progress.longest ? `${formatNumber(Number(progress.longest.log.actualDistanceKm) || progress.longest.workout.estimatedDistanceKm)} km` : "-", progress.longest ? capitalize(progress.longest.workout.title) : "Nog geen training voltooid")}
        ${metricCard("Gemiddelde RPE", progress.averageRpe == null ? "-" : formatNumber(progress.averageRpe), progress.averageRpe == null ? "Registreer ervaren RPE" : "Gebaseerd op je eigen invoer")}
      </section>
      <section class="info-card"><h2>Voortgang per week</h2><div class="week-progress-list">${weeks.map((week) => renderWeekProgressRow(week)).join("")}</div></section>
    `;
  }

  function metricCard(label, value, note) {
    return `<article class="metric-card"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><small>${escapeHtml(note)}</small></article>`;
  }

  function formatMinutesTotal(minutes) {
    const total = Math.round(minutes || 0);
    return `${Math.floor(total / 60)} u ${total % 60} min`;
  }

  function renderWeekProgressRow(week) {
    const completed = week.workouts.filter((workout) => isCompleted(workout.workoutId)).length;
    return `<button class="week-progress-row" type="button" data-open-plan-week="${weeks.indexOf(week)}"><span>Week ${week.weekNumber}</span><div class="mini-progress"><i style="width:${completed * 25}%"></i></div><strong>${completed}/4</strong></button>`;
  }

  function storageDiagnostics() {
    const raw = localStorage.getItem(STORAGE_KEY) || "";
    const logs = Object.values(appData.workoutLogs || {});
    return {
      status: raw ? (logs.length ? "gezond" : "gezond / leeg") : "leeg",
      size: new Blob([raw]).size,
      logCount: logs.length,
      completed: logs.filter((log) => log.completed).length,
      lastSaved: appData.updatedAt,
      mode: window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true ? "Beginscherm-app" : "Safari/browser",
      serviceWorker: navigator.serviceWorker?.controller ? "actief" : "niet actief",
    };
  }

  function renderData() {
    const diagnostics = storageDiagnostics();
    app.innerHTML = `
      ${renderPageHeader("Data", "Data beheren", "Je uitvoeringsgegevens staan lokaal op dit apparaat en zijn losgekoppeld van het voorgeschreven schema.")}
      <section class="info-card">
        <h2>Opslagstatus</h2>
        <div class="diagnostic-list">
          ${diagnosticRow("Status", diagnostics.status)}
          ${diagnosticRow("Trainingslogs", diagnostics.logCount)}
          ${diagnosticRow("Voltooide trainingen", diagnostics.completed)}
          ${diagnosticRow("Laatst opgeslagen", formatDateTime(diagnostics.lastSaved))}
          ${diagnosticRow("Opslaggrootte", `${formatNumber(diagnostics.size / 1024)} KB`)}
        </div>
      </section>
      <section class="info-card">
        <h2>App-diagnose</h2>
        <div class="diagnostic-list">
          ${diagnosticRow("App-versie", APP_VERSION)}
          ${diagnosticRow("Schemaversie", plan.config.schemaVersion)}
          ${diagnosticRow("Plan-ID", plan.config.planId)}
          ${diagnosticRow("Storage-key", STORAGE_KEY)}
          ${diagnosticRow("Modus", diagnostics.mode)}
          ${diagnosticRow("Service worker", diagnostics.serviceWorker)}
          ${diagnosticRow("Huidige URL", window.location.href)}
        </div>
      </section>
      <section class="info-card">
        <h2>App bijwerken</h2>
        <p>Herlaad na een nieuwe GitHub Pages-versie. Je trainingsdata blijft behouden.</p>
        <div class="button-stack"><button class="primary-button" type="button" data-reload>Herlaad app</button><button class="secondary-button" type="button" data-force-reload>Forceer nieuwste versie laden</button></div>
      </section>
      <section class="info-card">
        <h2>Backup</h2>
        <p>Exporteer regelmatig een backup wanneer je veel resultaten hebt geregistreerd.</p>
        <div class="button-stack"><button class="primary-button" type="button" data-export>Exporteer trainingsdata</button><button class="secondary-button" type="button" data-copy>Kopieer backup als tekst</button><button class="secondary-button" type="button" data-import>Kies backupbestand</button></div>
        <input type="file" accept="application/json,.json" data-import-file hidden />
        <label class="notes-field">Of plak backup-JSON<textarea rows="5" data-import-text></textarea></label>
        <button class="secondary-button" type="button" data-import-text-button>Backup importeren</button>
      </section>
      <section class="danger-card">
        <h2>Gevaarlijke actie</h2>
        <p>Hiermee verwijder je uitsluitend de gelogde resultaten van dit actieve marathonschema.</p>
        <button class="danger-button" type="button" data-reset>Frisse start maken</button>
      </section>
    `;
  }

  function diagnosticRow(label, value) {
    return `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
  }

  function downloadBackup() {
    const blob = new Blob([JSON.stringify(appData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `marathon-training-backup-${localDateIso()}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  async function copyBackup() {
    const text = JSON.stringify(appData, null, 2);
    try {
      await navigator.clipboard.writeText(text);
      window.alert("Backup gekopieerd.");
    } catch (_) {
      window.prompt("Kopieer je backup:", text);
    }
  }

  function importBackupText(text) {
    try {
      const parsed = JSON.parse(text);
      if (!isObject(parsed)) throw new Error("Geen geldig data-object");
      const migrated = migrateAppData(parsed);
      if (!window.confirm(`Deze backup bevat ${Object.keys(migrated.workoutLogs).length} trainingslogs. Wil je je huidige lokale resultaten vervangen?`)) return;
      appData = migrated;
      saveAppData();
      render();
      window.alert("Backup geïmporteerd.");
    } catch (error) {
      window.alert(`Backup kon niet worden gelezen: ${error.message}`);
    }
  }

  function resetData() {
    const first = window.confirm("Frisse start maken? Alle gelogde trainingsresultaten van dit schema worden verwijderd.");
    const second = first && window.confirm("Laatste bevestiging: dit kan niet automatisch worden hersteld. Doorgaan?");
    if (!second) return;
    const legacyData = appData.legacyData;
    appData = createEmptyAppData();
    appData.legacyData = legacyData;
    saveAppData();
    state.selectedWorkoutId = workouts[0].workoutId;
    state.viewedWeekIndex = 0;
    render();
  }

  function openCountdown() {
    const countdown = countdownParts();
    countdownContent.innerHTML = `
      <p><strong>Marathon:</strong> ${formatDate(plan.config.marathonDate, { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
      <div class="countdown-metric"><strong>${escapeHtml(countdown.text)}</strong><span>${Math.max(0, countdown.days)} dagen totaal</span></div>
      <p><strong>Ambitieus doel:</strong> ${plan.config.targetTime}<br><strong>Praktische trainingsreferentie:</strong> ${formatNumber(plan.config.practicalMarathonSpeedKmh)} km/u</p>
    `;
    countdownOverlay.hidden = false;
  }

  function closeCountdown() {
    countdownOverlay.hidden = true;
  }

  function updateHeader() {
    const selected = selectedWorkout();
    const week = getWeekForWorkout(selected.workoutId);
    todayPill.textContent = `${countdownParts().days} dagen`;
    todayPill.setAttribute("aria-label", `Countdown openen. ${countdownParts().text} tot de marathon.`);
    const eyebrow = document.querySelector("#brand-home .eyebrow");
    const title = document.querySelector("#brand-home .brand-title");
    if (eyebrow) eyebrow.textContent = `Week ${week.weekNumber} · Training ${selected.trainingNumber}`;
    if (title) title.textContent = "Marathon 3:30";
  }

  function render() {
    updateHeader();
    navButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.view === state.view));
    if (milestoneOverlay) milestoneOverlay.hidden = true;
    const renderer = {
      [VIEWS.TODAY]: renderToday,
      [VIEWS.WEEK]: renderWeek,
      [VIEWS.WORKOUT]: renderWorkoutDetail,
      [VIEWS.PLAN]: renderPlan,
      [VIEWS.PROGRESS]: renderProgress,
      [VIEWS.DATA]: renderData,
    }[state.view] || renderToday;
    renderer();
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (target.closest("#menu-toggle")) return openMenu();
    if (target.closest("#menu-close") || target.closest("[data-menu-close]") || target === menuOverlay) return closeMenu();
    if (target.closest("#brand-home")) return navigate(VIEWS.TODAY);
    if (target.closest("#header-day-prev")) return moveWorkout(-1);
    if (target.closest("#header-day-next")) return moveWorkout(1);
    if (target.closest("#today-pill")) return openCountdown();
    if (target.closest("[data-countdown-close]") || target === countdownOverlay) return closeCountdown();

    const nav = target.closest("[data-view]");
    if (nav) return navigate(nav.dataset.view);
    const open = target.closest("[data-open-workout]");
    if (open) return openWorkout(open.dataset.openWorkout);
    const start = target.closest("[data-start-workout], [data-start-execution]");
    if (start) {
      const workoutId = start.dataset.startWorkout || start.dataset.startExecution;
      if (state.view === VIEWS.WORKOUT && state.selectedWorkoutId === workoutId) {
        const workout = getWorkout(workoutId);
        if (!confirmOrderIfNeeded(workout)) return;
        beginExecution(workout);
        renderWorkoutDetail();
        scrollExecutionIntoView();
      } else openWorkout(workoutId, true);
      return;
    }
    if (target.closest("[data-back-week]")) return navigate(VIEWS.WEEK);
    if (target.closest("[data-week-prev]")) { state.viewedWeekIndex = Math.max(0, state.viewedWeekIndex - 1); return renderWeek(); }
    if (target.closest("[data-week-next]")) { state.viewedWeekIndex = Math.min(weeks.length - 1, state.viewedWeekIndex + 1); return renderWeek(); }
    const planWeek = target.closest("[data-open-plan-week]");
    if (planWeek) { state.viewedWeekIndex = Number(planWeek.dataset.openPlanWeek); state.view = VIEWS.WEEK; return render(); }
    if (target.closest("[data-scroll-completion]")) return document.getElementById("completion-form")?.scrollIntoView({ behavior: "smooth" });
    if (target.closest("[data-exit-execution]")) { stopTimer(); state.execution = null; return renderWorkoutDetail(); }
    if (target.closest("[data-timer-toggle]")) {
      if (state.execution?.remaining === 0) return moveExecution(1);
      return toggleTimer();
    }
    if (target.closest("[data-execution-prev]")) return moveExecution(-1);
    if (target.closest("[data-execution-next]")) return moveExecution(1);
    if (target.closest("[data-timer-reset]")) return resetTimer();
    if (target.closest("[data-reload]")) return window.location.reload();
    if (target.closest("[data-force-reload]")) { const url = new URL(window.location.href); url.searchParams.set("reload", Date.now()); window.location.href = url.toString(); return; }
    if (target.closest("[data-export]")) return downloadBackup();
    if (target.closest("[data-copy]")) return copyBackup();
    if (target.closest("[data-import]")) return document.querySelector("[data-import-file]")?.click();
    if (target.closest("[data-import-text-button]")) return importBackupText(document.querySelector("[data-import-text]")?.value || "");
    if (target.closest("[data-reset]")) return resetData();
  });

  document.addEventListener("change", (event) => {
    const form = event.target.closest("[data-completion-form]");
    if (form && event.target.matches("[data-log-field]")) {
      saveCompletionForm(form);
      if (event.target.dataset.logField === "completed") renderWorkoutDetail();
    }
    if (event.target.matches("[data-import-file]")) {
      const file = event.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => importBackupText(String(reader.result || ""));
      reader.readAsText(file);
      event.target.value = "";
    }
  });

  document.addEventListener("input", (event) => {
    const form = event.target.closest("[data-completion-form]");
    if (form && event.target.matches("[data-log-field]")) saveCompletionForm(form);
  });

  document.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && event.target.matches(".workout-card[data-open-workout]")) {
      event.preventDefault();
      openWorkout(event.target.dataset.openWorkout);
    }
  });

  window.addEventListener("pagehide", saveAppData);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") saveAppData();
  });

  function boot() {
    state.viewedWeekIndex = currentWeekIndex();
    state.selectedWorkoutId = nextWorkout().workoutId;
    render();
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("./service-worker.js").then((registration) => registration.update()).catch(() => {});
  }

  window.MarathonApp = {
    APP_VERSION,
    STORAGE_KEY,
    VIEWS,
    plan,
    model,
    state,
    createEmptyAppData,
    migrateAppData,
    loadAppData,
    saveAppData,
    getWorkout,
    isCompleted,
    progressData,
    openWorkout,
    render,
  };

  boot();
})();
