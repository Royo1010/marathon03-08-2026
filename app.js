(function () {
  "use strict";

  const APP_VERSION = "2026.08.31-6";
  const STORAGE_KEY = "marathon330TrainingAppData_v1";
  const APP_DATA_VERSION = 3;
  const plan = window.MARATHON_PLAN;
  const model = window.MARATHON_MODEL;
  const notifications = window.MARATHON_NOTIFICATIONS;
  const pushConfig = window.MARATHON_PUSH_CONFIG || {};
  const PUSH_API_BASE_URL = String(pushConfig.backendUrl || "").replace(/\/$/, "");
  const PUSH_VAPID_PUBLIC_KEY = String(pushConfig.vapidPublicKey || "");

  if (!plan || !model || !notifications) throw new Error("De trainingsdata kon niet volledig worden geladen.");

  const weeks = plan.weeks || [];
  const workouts = weeks.flatMap((week) => week.workouts || []);
  const app = document.getElementById("app");
  const brandHome = document.getElementById("brand-home");
  const navButtons = Array.from(document.querySelectorAll("[data-view]"));

  const VIEWS = { WEEK: "week", PLAN: "plan", INFO: "info", MARATHON: "marathon", TREADMILL: "treadmill" };
  const WEEK_OVERVIEW = {
    36: { theme: "Opbouw", goal: "Basisvolume verhogen + eerste marathonpaceblokken" },
    37: { theme: "Duur + drempel", goal: "Drempelblokken verlengen + duur verder opbouwen" },
    38: { theme: "Confidence-opbouw", goal: "Eerste 20K confidence run + snelheid ontwikkelen" },
    39: { theme: "Confidence + MP", goal: "Halve-marathonconfidence + marathonpace" },
    40: { theme: "Herstel + test", goal: "Herstellen + 5 km benchmark" },
    41: { theme: "Marathonspecifiek", goal: "Steady halve marathon + drempelontwikkeling" },
    42: { theme: "Duuropbouw", goal: "Duurvermogen richting 28 km" },
    43: { theme: "Piekweek", goal: "Piekvolume + 30K confidence + marathonpace-test" },
    44: { theme: "Sleutelweek", goal: "Belangrijkste marathonspecifieke sleutelweek" },
    45: { theme: "Taperstart", goal: "Taper starten, kwaliteit behouden" },
    46: { theme: "Taper", goal: "Volume verder verlagen, marathonpace scherp houden" },
    47: { theme: "Marathonweek", goal: "Herstellen, losmaken en racen" },
  };
  const initialTreadmillWorkoutId = new URLSearchParams(window.location.search).get("treadmill");
  const state = {
    view: workouts.some((workout) => workout.workoutId === initialTreadmillWorkoutId) ? VIEWS.TREADMILL : VIEWS.WEEK,
    viewedWeekIndex: currentPlanWeekIndex(),
    expandedWorkoutIds: new Set(),
    treadmillWorkoutId: workouts.some((workout) => workout.workoutId === initialTreadmillWorkoutId) ? initialTreadmillWorkoutId : null,
    treadmillReturnView: VIEWS.WEEK,
    pushStatus: { code: "checking", label: "Pushstatus controleren…", detail: "" },
    showPushSetup: false,
    notificationsPanelOpen: false,
  };

  let appData = loadAppData();
  let treadmillTimer = createIdleTimer();
  let treadmillTimerInterval = null;
  let screenWakeLock = null;
  let pushServiceWorkerRegistration = null;

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

  function calendarDayNumber(iso) {
    const [year, month, day] = String(iso).split("-").map(Number);
    return Math.floor(Date.UTC(year, month - 1, day) / 86400000);
  }

  function calendarDaysBetween(fromIso, toIso) {
    return calendarDayNumber(toIso) - calendarDayNumber(fromIso);
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
      userSettings: {
        notificationDefaults: { ...notifications.DEFAULT_SETTINGS },
        notificationSettings: {},
        pushClient: {},
      },
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
    data.userSettings.notificationDefaults = notifications.normalizeSettings(data.userSettings.notificationDefaults);
    data.userSettings.notificationSettings = isObject(data.userSettings.notificationSettings) ? data.userSettings.notificationSettings : {};
    data.userSettings.pushClient = isObject(data.userSettings.pushClient) ? data.userSettings.pushClient : {};
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

  function notificationSettings(workoutId) {
    const defaults = notifications.normalizeSettings(appData.userSettings?.notificationDefaults);
    const specific = isObject(appData.userSettings?.notificationSettings?.[workoutId])
      ? appData.userSettings.notificationSettings[workoutId]
      : {};
    return notifications.normalizeSettings({ ...defaults, ...specific });
  }

  function saveNotificationSetting(workoutId, field, value) {
    if (!workoutId || !["enabled", "soundEnabled", "warningSeconds", "extendedEnabled"].includes(field)) return;
    appData.userSettings.notificationSettings ||= {};
    const current = notificationSettings(workoutId);
    appData.userSettings.notificationSettings[workoutId] = notifications.normalizeSettings({ ...current, [field]: value });
    saveAppData();
  }

  function isStandaloneMode() {
    return Boolean(window.matchMedia?.("(display-mode: standalone)")?.matches || window.navigator?.standalone === true);
  }

  function isIosDevice() {
    return /iPad|iPhone|iPod/i.test(window.navigator?.userAgent || "");
  }

  function hasPushSupport() {
    return "Notification" in window && "serviceWorker" in navigator && "PushManager" in window;
  }

  function hasPushConfiguration() {
    return /^https:\/\//.test(PUSH_API_BASE_URL) && PUSH_VAPID_PUBLIC_KEY.length > 20;
  }

  function pushDebug(message, details = {}) {
    console.debug(`[push] ${message}`, details);
  }

  function setPushStatus(code, label, detail = "", rerender = true) {
    state.pushStatus = { code, label, detail };
    if (rerender && state.view === VIEWS.TREADMILL) renderTreadmillMode();
  }

  function backendUrl(path) {
    return `${PUSH_API_BASE_URL}${path}`;
  }

  async function backendRequest(path, options = {}) {
    if (!hasPushConfiguration()) throw new Error("PUSH_BACKEND_NOT_CONFIGURED");
    const client = appData.userSettings?.pushClient || {};
    const { auth = true, ...requestOptions } = options;
    const headers = { "Content-Type": "application/json", ...(requestOptions.headers || {}) };
    if (auth && client.installId) headers["X-Install-Id"] = client.installId;
    if (auth && client.authToken) headers.Authorization = `Bearer ${client.authToken}`;
    const response = await window.fetch(backendUrl(path), { ...requestOptions, headers });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(payload.error || `PUSH_BACKEND_${response.status}`);
      error.statusCode = response.status;
      error.payload = payload;
      throw error;
    }
    return payload;
  }

  async function checkPushBackendHealth() {
    const health = await backendRequest("/api/health", { method: "GET", auth: false });
    if (!health?.ok) throw new Error("PUSH_BACKEND_UNHEALTHY");
    pushDebug("backend health ok", { service: health.service, version: health.version });
    return health;
  }

  function urlBase64ToUint8Array(value) {
    const padding = "=".repeat((4 - (value.length % 4)) % 4);
    const base64 = (value + padding).replace(/-/g, "+").replace(/_/g, "/");
    const raw = window.atob(base64);
    return Uint8Array.from(Array.from(raw, (character) => character.charCodeAt(0)));
  }

  async function registerPushServiceWorker() {
    if (!("serviceWorker" in navigator)) return null;
    if (pushServiceWorkerRegistration) return pushServiceWorkerRegistration;
    pushServiceWorkerRegistration = await navigator.serviceWorker.register(`./service-worker.js?v=${APP_VERSION}`, {
      scope: "./",
      updateViaCache: "none",
    });
    pushServiceWorkerRegistration.update?.().catch(() => {});
    pushDebug("service worker geregistreerd", { scope: pushServiceWorkerRegistration.scope });
    return pushServiceWorkerRegistration;
  }

  async function registerPushSubscription(subscription) {
    const client = appData.userSettings?.pushClient || {};
    const result = await backendRequest("/api/register", {
      method: "POST",
      body: JSON.stringify({
        subscription: subscription.toJSON ? subscription.toJSON() : subscription,
        installId: client.installId || null,
        authToken: client.authToken || null,
        appVersion: APP_VERSION,
      }),
    });
    appData.userSettings.pushClient = {
      installId: result.installId,
      authToken: result.authToken,
      registeredAt: nowIso(),
    };
    saveAppData();
    pushDebug("pushabonnement geregistreerd", { installId: result.installId });
    return result;
  }

  async function refreshPushStatus({ rerender = true } = {}) {
    if (!hasPushSupport()) {
      setPushStatus("unsupported", "Niet ondersteund", "Deze browser ondersteunt geen Web Push.", rerender);
      return state.pushStatus;
    }
    if (isIosDevice() && !isStandaloneMode()) {
      setPushStatus("home-required", "Beginscherm-app nodig", "Installeer deze site eerst via Zet op beginscherm.", rerender);
      return state.pushStatus;
    }
    if (!hasPushConfiguration()) {
      setPushStatus("backend-unconfigured", "Pushserver instellen", "Vul de publieke server-URL en VAPID-sleutel in om Lock Screen-meldingen te activeren.", rerender);
      return state.pushStatus;
    }
    try {
      await checkPushBackendHealth();
    } catch (error) {
      console.warn("Pushserver-healthcheck is niet geslaagd.", error);
      const misconfigured = error.statusCode === 503 || error.message === "PUSH_BACKEND_NOT_READY";
      setPushStatus(
        misconfigured ? "backend-misconfigured" : "backend-offline",
        misconfigured ? "Pushserver onvolledig" : "Pushserver niet bereikbaar",
        misconfigured ? "De server is online, maar mist nog verplichte instellingen." : "Controleer de server-URL, deployment en internetverbinding.",
        rerender,
      );
      return state.pushStatus;
    }
    if (window.Notification.permission === "denied") {
      setPushStatus("denied", "Toestemming geweigerd", "Sta meldingen toe via de iPhone-instellingen.", rerender);
      return state.pushStatus;
    }
    if (window.Notification.permission !== "granted") {
      setPushStatus("permission-needed", "Toestemming nodig", "Gebruik Notificaties toestaan wanneer je klaar bent.", rerender);
      return state.pushStatus;
    }
    try {
      const registration = await registerPushServiceWorker();
      const subscription = await registration?.pushManager?.getSubscription();
      if (!subscription) {
        setPushStatus("no-subscription", "Geen pushabonnement", "Sta meldingen opnieuw toe om dit apparaat te registreren.", rerender);
        return state.pushStatus;
      }
      const client = appData.userSettings?.pushClient || {};
      if (!client.installId || !client.authToken) {
        setPushStatus("no-subscription", "Registratie onvolledig", "Registreer dit apparaat opnieuw.", rerender);
        return state.pushStatus;
      }
      const status = await backendRequest("/api/status", { method: "GET" });
      pushDebug("pushstatus gecontroleerd", { active: Boolean(status.active) });
      setPushStatus(status.active ? "active" : "no-subscription", status.active ? "Push actief" : "Geen actieve registratie", status.active ? "Lock Screen-meldingen zijn gereed." : "Registreer dit apparaat opnieuw.", rerender);
    } catch (error) {
      console.warn("Pushstatus kon niet worden gecontroleerd.", error);
      setPushStatus("backend-offline", "Pushserver niet bereikbaar", "De trainingstimer blijft normaal werken.", rerender);
    }
    return state.pushStatus;
  }

  async function requestNotificationAccess() {
    if (!hasPushSupport()) return refreshPushStatus();
    if (isIosDevice() && !isStandaloneMode()) return refreshPushStatus();
    try {
      const permission = await window.Notification.requestPermission();
      pushDebug("notificatietoestemming afgehandeld", { permission });
      if (permission !== "granted") return refreshPushStatus();
      if (!hasPushConfiguration()) return refreshPushStatus();
      await checkPushBackendHealth();
      setPushStatus("checking", "Apparaat registreren…", "", true);
      const registration = await registerPushServiceWorker();
      let subscription = await registration.pushManager.getSubscription();
      if (!subscription) {
        subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(PUSH_VAPID_PUBLIC_KEY),
        });
      }
      await registerPushSubscription(subscription);
      await refreshPushStatus();
    } catch (error) {
      console.warn("Pushregistratie is niet gelukt.", error);
      setPushStatus("registration-failed", "Registratie mislukt", "Controleer de verbinding en probeer opnieuw.");
    }
  }

  async function sendTestPush(workoutId) {
    const settings = notificationSettings(workoutId);
    try {
      await refreshPushStatus({ rerender: false });
      if (state.pushStatus.code !== "active") throw new Error("PUSH_NOT_ACTIVE");
      await backendRequest("/api/test", {
        method: "POST",
        body: JSON.stringify({
          soundEnabled: settings.soundEnabled,
          extendedEnabled: settings.extendedEnabled,
          workoutId,
        }),
      });
      pushDebug("testmelding door server geaccepteerd", { workoutId });
      setPushStatus("active", "Testmelding verzonden", "Controleer je vergrendelscherm of meldingencentrum.");
    } catch (error) {
      console.warn("Testmelding is niet verzonden.", error);
      if (state.pushStatus.code === "active") setPushStatus("backend-offline", "Testmelding mislukt", "Controleer de pushserver en probeer opnieuw.");
      else renderTreadmillMode();
    }
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
    return Math.max(0, calendarDaysBetween(appDateIso(), plan.config.marathonDate));
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

  function workoutById(workoutId) {
    return workouts.find((workout) => workout.workoutId === workoutId) || null;
  }

  function formatTimelineClock(seconds) {
    if (!Number.isFinite(Number(seconds)) || Number(seconds) < 0) return "—";
    const rounded = Math.round(Number(seconds));
    const minutes = Math.floor(rounded / 60);
    const remainder = rounded % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
  }

  function formatStopwatch(seconds) {
    if (!Number.isFinite(Number(seconds)) || Number(seconds) < 0) return "00:00";
    const rounded = Math.floor(Number(seconds));
    const hours = Math.floor(rounded / 3600);
    const minutes = Math.floor((rounded % 3600) / 60);
    const remainder = rounded % 60;
    return hours > 0
      ? `${hours}:${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`
      : `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
  }

  function treadmillBlockName(segment) {
    const labels = {
      easy: "Easy",
      herstel: "Herstel",
      recovery: "Herstel",
      "warming-up": "Warming-up",
      "cooling-down": "Cooling-down",
      marathonpace: "Marathonpace",
      steady: "Steady",
      interval: "Interval",
      wandelen: "Wandelen",
      test: "Test",
      wedstrijd: "Marathon",
    };
    const base = labels[segment.type] || capitalize(String(segment.type || "Blok").replace(/-/g, " "));
    return segment.repeats > 1 ? `${base} ${segment.repeat}/${segment.repeats}` : base;
  }

  function buildTreadmillTimeline(workout) {
    let elapsedSeconds = 0;
    let cumulativeTimeKnown = true;
    const blocks = model.flattenWorkoutSegments(workout).map((segment, index) => {
      const explicitDuration = Number(segment.durationSeconds);
      const calculatedDuration = Number(model.segmentDurationSeconds(segment));
      const durationSeconds = calculatedDuration > 0 ? calculatedDuration : null;
      const estimated = !(explicitDuration > 0) && Number(segment.distanceKm) > 0 && Number(segment.speedKmh) > 0;
      const startSeconds = cumulativeTimeKnown ? elapsedSeconds : null;
      const endSeconds = cumulativeTimeKnown && durationSeconds ? elapsedSeconds + durationSeconds : null;
      if (endSeconds != null) elapsedSeconds = endSeconds;
      else cumulativeTimeKnown = false;
      return {
        ...segment,
        index,
        blockName: treadmillBlockName(segment),
        durationSeconds,
        startSeconds,
        endSeconds,
        estimated,
        timeRangeLabel: startSeconds != null && endSeconds != null
          ? `${estimated ? "±" : ""}${formatTimelineClock(startSeconds)} – ${formatTimelineClock(endSeconds)}`
          : startSeconds != null
            ? `${formatTimelineClock(startSeconds)} – op gevoel`
            : "Tijd afhankelijk van vorig blok",
      };
    });
    const hasCompleteTiming = blocks.length > 0 && blocks.every((block) => block.durationSeconds && block.startSeconds != null && block.endSeconds != null);
    return {
      blocks,
      hasCompleteTiming,
      totalSeconds: hasCompleteTiming ? elapsedSeconds : null,
      totalLabel: hasCompleteTiming ? formatTimelineClock(elapsedSeconds) : workout.totalPlannedLabel || "Variabele duur",
    };
  }

  function createIdleTimer() {
    return { workoutId: null, status: "idle", startedAt: 0, elapsedSeconds: 0 };
  }

  function timerElapsedSeconds() {
    if (treadmillTimer.status !== "running") return treadmillTimer.elapsedSeconds || 0;
    return Math.max(0, Math.floor((Date.now() - treadmillTimer.startedAt) / 1000));
  }

  function timerSnapshot(timeline) {
    const elapsedSeconds = timerElapsedSeconds();
    let currentIndex = timeline.blocks.findIndex((block) => block.endSeconds != null && elapsedSeconds < block.endSeconds);
    if (currentIndex === -1 && timeline.totalSeconds != null && elapsedSeconds < timeline.totalSeconds) currentIndex = 0;
    const current = currentIndex >= 0 ? timeline.blocks[currentIndex] : null;
    const next = currentIndex >= 0 ? timeline.blocks[currentIndex + 1] || null : null;
    return {
      elapsedSeconds,
      currentIndex,
      current,
      next,
      remainingSeconds: current?.endSeconds != null ? Math.max(0, current.endSeconds - elapsedSeconds) : 0,
      finished: timeline.totalSeconds != null && elapsedSeconds >= timeline.totalSeconds,
    };
  }

  async function requestScreenWakeLock() {
    if (!navigator.wakeLock?.request || document.visibilityState !== "visible") return;
    try {
      screenWakeLock = await navigator.wakeLock.request("screen");
      screenWakeLock.addEventListener?.("release", () => { screenWakeLock = null; });
    } catch (error) {
      console.debug("Screen Wake Lock is op dit apparaat niet beschikbaar.", error);
    }
  }

  async function releaseScreenWakeLock() {
    if (!screenWakeLock) return;
    try { await screenWakeLock.release(); }
    catch (_) {}
    screenWakeLock = null;
  }

  function clearTreadmillInterval() {
    if (treadmillTimerInterval) window.clearInterval(treadmillTimerInterval);
    treadmillTimerInterval = null;
  }

  function startTreadmillInterval() {
    clearTreadmillInterval();
    treadmillTimerInterval = window.setInterval(updateTreadmillTimerUi, 500);
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
          <button class="treadmill-button" type="button" data-open-treadmill="${workout.workoutId}">
            <span aria-hidden="true">▶</span>Loopbandmodus
          </button>
          <button class="completion-button ${completed ? "is-completed" : ""}" type="button" data-toggle-complete="${workout.workoutId}" aria-pressed="${completed}">
            <span aria-hidden="true">${completed ? "✓" : "○"}</span>${completed ? "Voltooid" : "Markeer als voltooid"}
          </button>
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
            <span>${segment.inclinePercent == null ? "Buiten" : `${formatNumber(segment.inclinePercent)}%`}</span>
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

  function treadmillSpeedLabel(block) {
    return Number(block?.speedKmh) > 0 ? `${formatNumber(block.speedKmh)} km/u` : "Zelf sturen";
  }

  function treadmillInclineLabel(block) {
    return block?.inclinePercent == null ? "Buiten" : `${formatNumber(block.inclinePercent)}%`;
  }

  function switchPlanFor(workout, timeline) {
    if (!workout || !timeline?.hasCompleteTiming) return [];
    return notifications.buildSwitchPlan(timeline.blocks, notificationSettings(workout.workoutId));
  }

  function renderSwitchWarning(workout, timeline, elapsedSeconds) {
    const warning = notifications.activeWarning(switchPlanFor(workout, timeline), elapsedSeconds);
    return `<div class="timer-switch-warning${warning ? " is-visible" : ""}" data-switch-warning ${warning ? "" : "hidden"}>
      <span>Volgende switch</span>
      <strong data-warning-title>${escapeHtml(warning?.title || "")}</strong>
      <small data-warning-body>${escapeHtml(warning?.body || "")}</small>
    </div>`;
  }

  function renderNotificationSettings(workout, timeline) {
    const settings = notificationSettings(workout.workoutId);
    const activeTimer = treadmillTimer.workoutId === workout.workoutId && ["running", "paused"].includes(treadmillTimer.status);
    const numericTimeline = timeline.hasCompleteTiming && timeline.blocks.every((block) => Number(block.speedKmh) > 0 && Number.isFinite(Number(block.inclinePercent)));
    const switchCount = numericTimeline ? switchPlanFor(workout, timeline).length : 0;
    const status = state.pushStatus || { code: "checking", label: "Controleren…", detail: "" };
    const canRequest = ["permission-needed", "no-subscription", "registration-failed"].includes(status.code);
    const needsSetup = ["backend-unconfigured", "backend-misconfigured", "backend-offline"].includes(status.code);
    const canTest = status.code === "active" && settings.enabled && !activeTimer;
    return `<section class="notification-card" aria-labelledby="notification-title">
      <div class="notification-heading">
        <div><span>Trainingshulp</span><h2 id="notification-title">Meldingen</h2></div>
        <span class="push-status is-${escapeAttr(status.code)}">${escapeHtml(status.label)}</span>
      </div>
      <p class="notification-intro">${numericTimeline ? `${switchCount} echte wisselmomenten · instellingen gelden alleen voor deze training.` : "Lock Screen-planning is niet beschikbaar voor een training zonder volledig berekenbare loopbandtijdlijn."}</p>
      <div class="notification-options">
        <label><span>Notificaties</span><input type="checkbox" data-notification-setting="enabled" data-workout-id="${escapeAttr(workout.workoutId)}" ${settings.enabled ? "checked" : ""} ${activeTimer ? "disabled" : ""}></label>
        <label><span>Geluid</span><input type="checkbox" data-notification-setting="soundEnabled" data-workout-id="${escapeAttr(workout.workoutId)}" ${settings.soundEnabled ? "checked" : ""} ${!settings.enabled || activeTimer ? "disabled" : ""}></label>
        <label><span>Uitgebreid</span><input type="checkbox" data-notification-setting="extendedEnabled" data-workout-id="${escapeAttr(workout.workoutId)}" ${settings.extendedEnabled ? "checked" : ""} ${!settings.enabled || activeTimer ? "disabled" : ""}></label>
        <div class="notification-option warning-option ${!settings.enabled || activeTimer ? "is-disabled" : ""}">
          <span id="warning-label-${escapeAttr(workout.workoutId)}">Voorwaarschuwing</span>
          <div class="warning-segments" role="radiogroup" aria-labelledby="warning-label-${escapeAttr(workout.workoutId)}">
            ${[30, 45].map((seconds) => `<button type="button" role="radio" aria-checked="${settings.warningSeconds === seconds}" class="${settings.warningSeconds === seconds ? "is-active" : ""}" data-warning-seconds="${seconds}" data-workout-id="${escapeAttr(workout.workoutId)}" ${!settings.enabled || activeTimer ? "disabled" : ""}>${seconds} sec</button>`).join("")}
          </div>
        </div>
      </div>
      ${status.detail ? `<p class="push-status-detail">${escapeHtml(status.detail)}</p>` : ""}
      <div class="notification-actions">
        ${canRequest ? `<button type="button" data-request-notifications>Notificaties toestaan</button>` : ""}
        ${needsSetup ? `<button type="button" data-show-push-setup>${state.showPushSetup ? "Verberg configuratie" : "Pushserver configureren"}</button>` : ""}
        ${canTest ? `<button type="button" class="is-secondary" data-test-notification="${escapeAttr(workout.workoutId)}">Test melding</button>` : ""}
      </div>
      ${state.showPushSetup && needsSetup ? `<div class="push-setup-panel">
        <strong>Lock Screen-meldingen activeren</strong>
        <ol><li>Deploy de meegeleverde map <code>push-server</code>.</li><li>Vul de publieke server-URL en VAPID-sleutel in <code>push-config.js</code> in.</li><li>Publiceer de app opnieuw en kies daarna Notificaties toestaan.</li></ol>
        <p>De volledige stappen staan in <code>PUSH-DEPLOYMENT.md</code>. Private sleutels horen nooit in deze app.</p>
      </div>` : ""}
      ${activeTimer ? `<p class="settings-locked">Tijdens een actieve timer blijven deze instellingen vaststaan. Testen kan weer nadat je de timer stopt.</p>` : ""}
    </section>`;
  }

  function renderNotificationToggle(workout) {
    const settings = notificationSettings(workout.workoutId);
    const status = state.pushStatus || { code: "checking" };
    const hasProblem = !["active", "checking", "permission-needed"].includes(status.code);
    const summary = settings.enabled ? `${settings.warningSeconds} sec${settings.soundEnabled ? " · geluid" : " · stil"}` : "Uit";
    return `<button type="button" class="notification-toggle${state.notificationsPanelOpen ? " is-open" : ""}" data-toggle-notifications aria-expanded="${state.notificationsPanelOpen}">
      <span>Meldingen</span><small>${escapeHtml(summary)}${hasProblem ? " · controle nodig" : ""}</small><i aria-hidden="true">${state.notificationsPanelOpen ? "−" : "+"}</i>
    </button>`;
  }

  function renderTreadmillBlock(block, currentIndex) {
    const active = block.index === currentIndex;
    const distance = Number(block.distanceKm) > 0 ? `${formatNumber(block.distanceKm)} km` : "";
    const duration = block.durationSeconds ? `${block.estimated ? "±" : ""}${formatTimelineClock(block.durationSeconds)}` : "duur op gevoel";
    return `<article class="treadmill-block ${active ? "is-current" : ""}" data-timeline-index="${block.index}">
      <div class="treadmill-block-time">
        <span>${escapeHtml(block.blockName)}</span>
        <strong>${escapeHtml(block.timeRangeLabel)}</strong>
        <small>${escapeHtml(joinText([distance, duration]))}</small>
      </div>
      <div class="treadmill-block-speed"><span>Snelheid</span><strong>${escapeHtml(treadmillSpeedLabel(block))}</strong></div>
      <div class="treadmill-block-incline"><span>Helling</span><strong>${escapeHtml(treadmillInclineLabel(block))}</strong></div>
    </article>`;
  }

  function renderTreadmillTimer(workout, timeline) {
    if (!timeline.hasCompleteTiming) {
      return `<section class="timer-start-card"><div><span>Statisch overzicht</span><strong>Timer niet beschikbaar</strong><p>Minstens één blok heeft geen berekenbare duur. De tijdlijn blijft wel volledig bruikbaar.</p></div></section>`;
    }
    if (treadmillTimer.workoutId !== workout.workoutId || treadmillTimer.status === "idle") {
      return `<section class="timer-start-card"><div><span>Optionele begeleiding</span><strong>Start de trainingstimer</strong><p>De timer toont het huidige en volgende blok. Wake Lock wordt gebruikt als je iPhone dit ondersteunt.</p></div><button type="button" data-timer-start="${workout.workoutId}">Start training</button></section>`;
    }
    const snapshot = timerSnapshot(timeline);
    const current = snapshot.current || timeline.blocks.at(-1);
    const next = snapshot.next;
    const finished = treadmillTimer.status === "finished";
    return `<section class="timer-live-card ${finished ? "is-finished" : ""}" aria-label="Live trainingstimer">
      <div class="timer-live-top"><div><span>Verstreken</span><strong data-timer-elapsed>${formatStopwatch(snapshot.elapsedSeconds)}</strong></div><span class="timer-status" data-timer-status>${finished ? "Klaar" : treadmillTimer.status === "paused" ? "Gepauzeerd" : "Actief"}</span></div>
      <div class="timer-now-grid">
        <div><span>Nu</span><strong data-current-speed>${escapeHtml(treadmillSpeedLabel(current))}</strong><small data-current-incline>${escapeHtml(treadmillInclineLabel(current))} helling</small></div>
        <div><span>Nog</span><strong data-block-remaining>${finished ? "00:00" : formatStopwatch(snapshot.remainingSeconds)}</strong><small data-current-block>${escapeHtml(current?.blockName || "Training voltooid")}</small></div>
      </div>
      <div class="timer-next"><span>Daarna</span><strong data-next-block>${next ? `${escapeHtml(treadmillSpeedLabel(next))} · ${escapeHtml(treadmillInclineLabel(next))}` : "Finish"}</strong></div>
      ${renderSwitchWarning(workout, timeline, snapshot.elapsedSeconds)}
      <div class="timer-controls">
        ${finished ? `<button type="button" data-timer-reset>Timer opnieuw instellen</button>` : treadmillTimer.status === "paused" ? `<button type="button" data-timer-resume>Hervat</button>` : `<button type="button" data-timer-pause>Pauze</button>`}
        ${finished ? "" : `<button class="is-secondary" type="button" data-timer-stop>Stop timer</button>`}
      </div>
    </section>`;
  }

  function renderTreadmillMode() {
    const workout = workoutById(state.treadmillWorkoutId);
    if (!workout) {
      state.view = VIEWS.WEEK;
      return renderWeek();
    }
    const timeline = buildTreadmillTimeline(workout);
    const snapshot = treadmillTimer.workoutId === workout.workoutId && treadmillTimer.status !== "idle" ? timerSnapshot(timeline) : { currentIndex: -1 };
    app.innerHTML = `<section class="treadmill-view" data-treadmill-view="${workout.workoutId}">
      <header class="treadmill-header">
        <button class="treadmill-back" type="button" data-close-treadmill>← Terug</button>
        <div><span>Week ${workout.weekNumber} · Training ${workout.trainingNumber}</span><h1>${escapeHtml(capitalize(workout.title))}</h1><p>${escapeHtml(timeline.totalLabel)} totaal · ${timeline.blocks.length} blokken</p></div>
      </header>
      ${renderTreadmillTimer(workout, timeline)}
      ${renderNotificationToggle(workout)}
      ${state.notificationsPanelOpen ? renderNotificationSettings(workout, timeline) : ""}
      <section class="treadmill-timeline" aria-label="Loopbandblokken">
        ${timeline.blocks.map((block) => renderTreadmillBlock(block, snapshot.currentIndex)).join("")}
      </section>
      <p class="treadmill-note">Afstandstijden met ± zijn berekend uit afstand en snelheid. De marathon is een buitenwedstrijd en toont daarom “Buiten” in plaats van een hellingspercentage.</p>
    </section>`;
  }

  function createTrainingSessionId(workoutId) {
    const random = window.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    return `${workoutId}-${random}`;
  }

  async function cancelPushSession(timer = treadmillTimer) {
    if (!timer?.sessionId || !hasPushConfiguration()) return;
    try {
      await backendRequest("/api/sessions/cancel", {
        method: "POST",
        body: JSON.stringify({ sessionId: timer.sessionId, generation: timer.generation || 1 }),
      });
      pushDebug("pushsessie geannuleerd", { sessionId: timer.sessionId, generation: timer.generation || 1 });
    } catch (error) {
      console.warn("De oude pushplanning kon niet direct worden geannuleerd.", error);
      if (state.view === VIEWS.TREADMILL) setPushStatus("backend-offline", "Annuleren niet bevestigd", "Controleer je verbinding voordat je opnieuw start.");
    }
  }

  async function schedulePushSession(workout, timeline) {
    const settings = notificationSettings(workout.workoutId);
    const timerSession = { ...treadmillTimer };
    if (!settings.enabled || !timerSession.sessionId) return;
    const elapsed = timerSession.status === "running"
      ? Math.max(0, Math.floor((Date.now() - timerSession.startedAt) / 1000))
      : timerSession.elapsedSeconds || 0;
    const switches = switchPlanFor(workout, timeline).filter((item) => item.switchAtSeconds > elapsed);
    if (!switches.length) return;
    await refreshPushStatus({ rerender: false });
    if (state.pushStatus.code !== "active") {
      renderTreadmillMode();
      return;
    }
    try {
      const result = await backendRequest("/api/sessions/schedule", {
        method: "POST",
        body: JSON.stringify({
          sessionId: timerSession.sessionId,
          generation: timerSession.generation || 1,
          workoutId: workout.workoutId,
          startedAt: new Date(timerSession.startedAt).toISOString(),
          warningSeconds: settings.warningSeconds,
          soundEnabled: settings.soundEnabled,
          extendedEnabled: settings.extendedEnabled,
          switches,
        }),
      });
      if (treadmillTimer.sessionId !== timerSession.sessionId) return;
      treadmillTimer.pushScheduled = true;
      treadmillTimer.pushJobCount = result.scheduledCount || 0;
      pushDebug("wisselmeldingen gepland", { sessionId: timerSession.sessionId, count: treadmillTimer.pushJobCount });
      setPushStatus("active", "Push actief", `${treadmillTimer.pushJobCount} wisselmeldingen gepland.`);
    } catch (error) {
      console.warn("Switchmeldingen konden niet worden gepland.", error);
      if (treadmillTimer.sessionId !== timerSession.sessionId) return;
      treadmillTimer.pushScheduled = false;
      setPushStatus("backend-offline", "Planning mislukt", "De schermtimer en in-app waarschuwingen blijven werken.");
    }
  }

  function startTreadmillTimer(workoutId) {
    const workout = workoutById(workoutId);
    if (!workout) return;
    const timeline = buildTreadmillTimeline(workout);
    if (!timeline.hasCompleteTiming) return;
    treadmillTimer = {
      workoutId,
      status: "running",
      startedAt: Date.now(),
      elapsedSeconds: 0,
      sessionId: createTrainingSessionId(workoutId),
      generation: 1,
      pushScheduled: false,
      pushJobCount: 0,
    };
    requestScreenWakeLock();
    renderTreadmillMode();
    startTreadmillInterval();
    schedulePushSession(workout, timeline);
  }

  function pauseTreadmillTimer() {
    const sessionToCancel = { ...treadmillTimer };
    treadmillTimer.elapsedSeconds = timerElapsedSeconds();
    treadmillTimer.status = "paused";
    treadmillTimer.pushScheduled = false;
    clearTreadmillInterval();
    releaseScreenWakeLock();
    renderTreadmillMode();
    cancelPushSession(sessionToCancel);
  }

  function resumeTreadmillTimer() {
    const workout = workoutById(treadmillTimer.workoutId);
    if (!workout) return;
    treadmillTimer.startedAt = Date.now() - (treadmillTimer.elapsedSeconds || 0) * 1000;
    treadmillTimer.status = "running";
    treadmillTimer.generation = (treadmillTimer.generation || 1) + 1;
    treadmillTimer.sessionId = createTrainingSessionId(treadmillTimer.workoutId);
    treadmillTimer.pushScheduled = false;
    treadmillTimer.pushJobCount = 0;
    requestScreenWakeLock();
    renderTreadmillMode();
    startTreadmillInterval();
    schedulePushSession(workout, buildTreadmillTimeline(workout));
  }

  function resetTreadmillTimer() {
    const sessionToCancel = { ...treadmillTimer };
    clearTreadmillInterval();
    releaseScreenWakeLock();
    treadmillTimer = createIdleTimer();
    renderTreadmillMode();
    cancelPushSession(sessionToCancel);
  }

  function updateTreadmillTimerUi() {
    if (state.view !== VIEWS.TREADMILL || treadmillTimer.status !== "running") return;
    const workout = workoutById(treadmillTimer.workoutId);
    if (!workout) return;
    const timeline = buildTreadmillTimeline(workout);
    const snapshot = timerSnapshot(timeline);
    if (snapshot.finished) {
      const finishedSession = { ...treadmillTimer };
      treadmillTimer.elapsedSeconds = timeline.totalSeconds;
      treadmillTimer.status = "finished";
      clearTreadmillInterval();
      releaseScreenWakeLock();
      renderTreadmillMode();
      cancelPushSession(finishedSession);
      return;
    }
    const setText = (selector, value) => {
      const element = app.querySelector?.(selector);
      if (element) element.textContent = value;
    };
    setText("[data-timer-elapsed]", formatStopwatch(snapshot.elapsedSeconds));
    setText("[data-current-speed]", treadmillSpeedLabel(snapshot.current));
    setText("[data-current-incline]", `${treadmillInclineLabel(snapshot.current)} helling`);
    setText("[data-block-remaining]", formatStopwatch(snapshot.remainingSeconds));
    setText("[data-current-block]", snapshot.current?.blockName || "Training voltooid");
    setText("[data-next-block]", snapshot.next ? `${treadmillSpeedLabel(snapshot.next)} · ${treadmillInclineLabel(snapshot.next)}` : "Finish");
    const warning = notifications.activeWarning(switchPlanFor(workout, timeline), snapshot.elapsedSeconds);
    const warningElement = app.querySelector?.("[data-switch-warning]");
    if (warningElement) {
      warningElement.hidden = !warning;
      warningElement.classList?.toggle("is-visible", Boolean(warning));
      const title = warningElement.querySelector?.("[data-warning-title]");
      const body = warningElement.querySelector?.("[data-warning-body]");
      if (title) title.textContent = warning?.title || "";
      if (body) body.textContent = warning?.body || "";
    }
    app.querySelectorAll?.("[data-timeline-index]").forEach((row) => row.classList.toggle("is-current", Number(row.dataset.timelineIndex) === snapshot.currentIndex));
  }

  function regularProgramWorkouts() {
    return workouts.filter((workout) => workout.category !== "wedstrijd");
  }

  function nextIncompleteWorkout() {
    return regularProgramWorkouts().find((workout) => !isCompleted(workout.workoutId)) || null;
  }

  function isMilestoneWorkout(workout) {
    return workout.category === "wedstrijd" || (workout.labels || []).some((label) => ["CONFIDENCE RUN", "TEST", "RACE"].includes(label));
  }

  function nextMilestoneWorkout() {
    const today = appDateIso();
    const milestones = workouts.filter(isMilestoneWorkout).filter((workout) => workout.category === "wedstrijd" || !isCompleted(workout.workoutId));
    return milestones.find((workout) => {
      const week = weeks.find((item) => item.weekNumber === workout.weekNumber);
      return week && week.endDate >= today;
    }) || milestones[0] || null;
  }

  function plannedDistanceKm(workout) {
    const explicit = Number(workout?.estimatedDistanceKm);
    if (Number.isFinite(explicit) && explicit >= 0) return explicit;
    const calculated = Number(model.calculateWorkoutDistanceKm(workout));
    return Number.isFinite(calculated) && calculated >= 0 ? calculated : 0;
  }

  function actualDistanceKm(workout) {
    const log = workoutLog(workout.workoutId) || {};
    const actual = [log.actualDistanceKm, log.distanceKm, log.completedDistanceKm]
      .map(Number)
      .find((value) => Number.isFinite(value) && value >= 0);
    return actual ?? null;
  }

  function completedDistanceKm(workout) {
    if (!isCompleted(workout.workoutId)) return 0;
    return actualDistanceKm(workout) ?? plannedDistanceKm(workout);
  }

  function weekWorkouts(week, includeMarathon = true) {
    return (week?.workouts || []).filter((workout) => includeMarathon || workout.category !== "wedstrijd");
  }

  function getWeekPlannedKm(week, includeMarathon = true) {
    const containsMarathon = weekWorkouts(week, true).some((workout) => workout.category === "wedstrijd");
    const authoritative = Number(week?.plannedDistanceKm);
    if (Number.isFinite(authoritative) && (includeMarathon || !containsMarathon)) return authoritative;
    return weekWorkouts(week, includeMarathon).reduce((total, workout) => total + plannedDistanceKm(workout), 0);
  }

  function getWeekCompletedKm(week, includeMarathon = true) {
    const eligible = weekWorkouts(week, includeMarathon);
    const completed = eligible.filter((workout) => isCompleted(workout.workoutId));
    if (!completed.length) return 0;
    const allCompleted = completed.length === eligible.length;
    const hasActualDistance = completed.some((workout) => actualDistanceKm(workout) != null);
    if (allCompleted && !hasActualDistance) return getWeekPlannedKm(week, includeMarathon);
    return completed.reduce((total, workout) => total + completedDistanceKm(workout), 0);
  }

  function getWeekPlannedLabel(week) {
    if (week?.includesMarathon || weekWorkouts(week, true).some((workout) => workout.category === "wedstrijd")) {
      return `±${formatNumber(getWeekPlannedKm(week, true))} km totaal incl. marathon`;
    }
    const sourceLabel = String(week?.plannedDistanceLabel || "").trim();
    return sourceLabel ? `${sourceLabel} totaal` : `±${formatNumber(getWeekPlannedKm(week, true))} km totaal`;
  }

  function workoutDurationSeconds(workout) {
    const explicit = Number(workout?.totalPlannedSeconds);
    if (Number.isFinite(explicit) && explicit > 0) return explicit;
    const segments = model.flattenWorkoutSegments(workout);
    if (!segments.length) return null;
    const durations = segments.map((segment) => Number(model.segmentDurationSeconds(segment)));
    return durations.every((duration) => Number.isFinite(duration) && duration > 0)
      ? durations.reduce((total, duration) => total + duration, 0)
      : null;
  }

  function completedDurationSeconds(workout) {
    if (!isCompleted(workout.workoutId)) return 0;
    const log = workoutLog(workout.workoutId) || {};
    const actual = [log.actualDurationSeconds, log.durationSeconds, log.completedDurationSeconds]
      .map(Number)
      .find((value) => Number.isFinite(value) && value >= 0);
    return actual ?? workoutDurationSeconds(workout) ?? 0;
  }

  function formatHours(seconds) {
    return `${formatNumber(Number(seconds || 0) / 3600)} uur`;
  }

  function latestCompletedWorkout() {
    return regularProgramWorkouts()
      .filter((workout) => isCompleted(workout.workoutId))
      .sort((a, b) => {
        const aLog = workoutLog(a.workoutId) || {};
        const bLog = workoutLog(b.workoutId) || {};
        return String(bLog.updatedAt || bLog.completedDate || "").localeCompare(String(aLog.updatedAt || aLog.completedDate || ""));
      })[0] || null;
  }

  function dashboardMetrics() {
    const programWorkouts = regularProgramWorkouts();
    const completedWorkouts = programWorkouts.filter((workout) => isCompleted(workout.workoutId));
    const totalPlannedKm = weeks.reduce((total, week) => total + getWeekPlannedKm(week, false), 0);
    const totalCompletedKm = weeks.reduce((total, week) => total + getWeekCompletedKm(week, false), 0);
    const currentWeek = weeks[currentPlanWeekIndex()] || weeks[0];
    const weekly = weeks.map((week) => {
      const plannedKm = getWeekPlannedKm(week, true);
      const completedKm = getWeekCompletedKm(week, true);
      return { weekNumber: week.weekNumber, plannedKm, completedKm, includesMarathon: Boolean(week.includesMarathon), current: week.weekId === currentWeek?.weekId };
    });
    const current = weekly.find((week) => week.current) || { plannedKm: 0, completedKm: 0 };
    const confidence = workouts.filter((workout) => (workout.labels || []).includes("CONFIDENCE RUN"));
    const tests = workouts.filter((workout) => workout.isTest);
    const completedTests = tests.filter((workout) => isCompleted(workout.workoutId));
    const testsWithResults = tests.filter((workout) => Object.keys(testResult(workout.workoutId)).some((key) => key !== "updatedAt"));
    const nextTest = tests.find((workout) => !completedTests.includes(workout)) || null;
    const latestTest = testsWithResults
      .slice()
      .sort((a, b) => String(testResult(b.workoutId).updatedAt || "").localeCompare(String(testResult(a.workoutId).updatedAt || "")))[0] || null;
    const longRuns = programWorkouts.filter((workout) => workout.category === "lange-duur");
    const longestPlanned = longRuns.slice().sort((a, b) => plannedDistanceKm(b) - plannedDistanceKm(a))[0] || null;
    const longestCompleted = longRuns.filter((workout) => isCompleted(workout.workoutId)).sort((a, b) => completedDistanceKm(b) - completedDistanceKm(a))[0] || null;
    const knownDurationWorkouts = programWorkouts.filter((workout) => workoutDurationSeconds(workout) != null);
    const plannedDurationSeconds = knownDurationWorkouts.reduce((total, workout) => total + workoutDurationSeconds(workout), 0);
    const completedDurationTotal = completedWorkouts.reduce((total, workout) => total + completedDurationSeconds(workout), 0);
    const remainingDurationSeconds = programWorkouts.filter((workout) => !isCompleted(workout.workoutId)).reduce((total, workout) => total + (workoutDurationSeconds(workout) || 0), 0);
    return {
      programWorkouts,
      completedWorkouts,
      completedCount: completedWorkouts.length,
      remainingCount: programWorkouts.length - completedWorkouts.length,
      trainingProgress: programWorkouts.length ? Math.round((completedWorkouts.length / programWorkouts.length) * 100) : 0,
      totalPlannedKm,
      totalCompletedKm,
      totalRemainingKm: Math.max(0, totalPlannedKm - totalCompletedKm),
      distanceProgress: totalPlannedKm ? Math.min(100, Math.round((totalCompletedKm / totalPlannedKm) * 100)) : 0,
      averageCompletedKm: completedWorkouts.length ? totalCompletedKm / completedWorkouts.length : 0,
      activeCompletedWeeks: weekly.filter((week) => week.completedKm > 0).length,
      scheduledPlannedKm: weekly.reduce((total, week) => total + week.plannedKm, 0),
      scheduledCompletedKm: weekly.reduce((total, week) => total + week.completedKm, 0),
      weekly,
      currentWeek,
      currentPlannedKm: current.plannedKm,
      currentCompletedKm: current.completedKm,
      confidence,
      completedConfidence: confidence.filter((workout) => isCompleted(workout.workoutId)),
      tests,
      completedTests,
      nextTest,
      latestTest,
      longestPlanned,
      longestCompleted,
      latestCompleted: latestCompletedWorkout(),
      plannedDurationSeconds,
      completedDurationSeconds: completedDurationTotal,
      remainingDurationSeconds,
      unknownDurationCount: programWorkouts.length - knownDurationWorkouts.length,
    };
  }

  function renderWeeklyDistanceChart(metrics) {
    const maxKm = Math.max(1, ...metrics.weekly.map((week) => week.plannedKm));
    return `<section class="dashboard-card chart-card">
      <div class="dashboard-title"><div><span>Weekvolume</span><h2>Gepland en voltooid</h2></div><div class="chart-legend"><span><i class="is-planned"></i>Gepland</span><span><i class="is-completed"></i>Voltooid</span></div></div>
      <div class="weekly-bars" aria-label="Geplande en voltooide kilometers per week">
        ${metrics.weekly.map((week) => {
          const plannedHeight = Math.max(5, Math.round((week.plannedKm / maxKm) * 100));
          const completedHeight = Math.max(0, Math.round((week.completedKm / maxKm) * 100));
          return `<div class="week-bar-column${week.current ? " is-current" : ""}" title="Week ${week.weekNumber}: ${formatNumber(week.completedKm)} van ${formatNumber(week.plannedKm)} km">
            <div class="week-bar-stack"><i class="bar-planned" style="height:${plannedHeight}%"></i><i class="bar-completed" style="height:${completedHeight}%"></i></div>
            <strong>${week.weekNumber}</strong>
          </div>`;
        }).join("")}
      </div>
      <p>Week 47 bevat de marathon. Blauw gebruikt een werkelijk gelogde afstand, of anders de geplande afstand van een voltooide sessie.</p>
    </section>`;
  }

  function renderCumulativeDistanceChart(metrics) {
    const width = 360;
    const height = 154;
    const plotLeft = 18;
    const plotRight = 350;
    const plotTop = 12;
    const plotBottom = 124;
    let plannedTotal = 0;
    let completedTotal = 0;
    const plannedTotals = metrics.weekly.map((week) => (plannedTotal += week.plannedKm));
    const completedTotals = metrics.weekly.map((week) => (completedTotal += week.completedKm));
    const maxKm = Math.max(1, ...plannedTotals);
    const point = (value, index) => {
      const x = plotLeft + ((plotRight - plotLeft) * index) / Math.max(1, metrics.weekly.length - 1);
      const y = plotBottom - ((plotBottom - plotTop) * value) / maxKm;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    };
    const labels = new Set([36, 39, 42, 45, 47]);
    return `<section class="dashboard-card chart-card">
      <div class="dashboard-title"><div><span>Programma-afstand</span><h2>Cumulatieve opbouw</h2></div><div class="chart-legend"><span><i class="is-line-planned"></i>Gepland</span><span><i class="is-line-completed"></i>Voltooid</span></div></div>
      <svg class="cumulative-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Cumulatieve geplande en voltooide kilometers">
        <line x1="${plotLeft}" y1="${plotTop}" x2="${plotRight}" y2="${plotTop}" class="chart-grid-line"></line>
        <line x1="${plotLeft}" y1="${(plotTop + plotBottom) / 2}" x2="${plotRight}" y2="${(plotTop + plotBottom) / 2}" class="chart-grid-line"></line>
        <line x1="${plotLeft}" y1="${plotBottom}" x2="${plotRight}" y2="${plotBottom}" class="chart-grid-line"></line>
        <polyline points="${plannedTotals.map(point).join(" ")}" class="chart-line-planned"></polyline>
        <polyline points="${completedTotals.map(point).join(" ")}" class="chart-line-completed"></polyline>
        ${metrics.weekly.map((week, index) => labels.has(week.weekNumber) ? `<text x="${point(0, index).split(",")[0]}" y="144" text-anchor="middle">${week.weekNumber}</text>` : "").join("")}
      </svg>
      <p>${formatNumber(metrics.scheduledCompletedKm)} van ${formatNumber(metrics.scheduledPlannedKm)} km in het volledige weekschema, inclusief de marathon.</p>
    </section>`;
  }

  function renderMarathonOverview() {
    const metrics = dashboardMetrics();
    const days = daysUntilMarathon();
    const fullWeeks = Math.floor(days / 7);
    const looseDays = days % 7;
    const next = nextIncompleteWorkout();
    const milestone = nextMilestoneWorkout();
    const currentRemainingKm = Math.max(0, metrics.currentPlannedKm - metrics.currentCompletedKm);
    const latestTestResult = metrics.latestTest ? testResult(metrics.latestTest.workoutId) : null;
    app.innerHTML = `<section class="marathon-overview">
      <header class="overview-header">
        <button type="button" data-back-week>← Terug naar week</button>
        <span>Marathon 3:30</span>
        <h1>${escapeHtml(formatDate(plan.config.marathonDate, { weekday: "long", day: "numeric", month: "long", year: "numeric" }))}</h1>
      </header>
      <section class="countdown-grid">
        <div class="countdown-primary"><strong>${days}</strong><span>Dagen te gaan</span></div>
        <div class="countdown-secondary"><strong>${fullWeeks}</strong><span>Weken</span><strong>${looseDays}</strong><span>Dagen</span></div>
      </section>
      <section class="overview-stat-grid">
        <div><strong>${metrics.remainingCount}</strong><span>Trainingen te gaan</span><small>+ marathon</small></div>
        <div><strong>${metrics.completedCount}</strong><span>Trainingen voltooid</span><small>van ${metrics.programWorkouts.length}</small></div>
      </section>
      <section class="program-progress">
        <div><span>Trainingsvoortgang</span><strong>${metrics.trainingProgress}%</strong></div>
        <div class="progress-track" role="progressbar" aria-label="Trainingsvoortgang" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${metrics.trainingProgress}"><span style="width:${metrics.trainingProgress}%"></span></div>
        <p>${metrics.completedCount} van ${metrics.programWorkouts.length} trainingen voltooid</p>
      </section>
      <section class="km-stat-grid">
        <div><span>Gepland</span><strong>${formatNumber(metrics.totalPlannedKm)}</strong><small>km vóór de marathon</small></div>
        <div><span>Voltooid</span><strong>${formatNumber(metrics.totalCompletedKm)}</strong><small>km gelogd</small></div>
        <div><span>Resterend</span><strong>${formatNumber(metrics.totalRemainingKm)}</strong><small>km gepland</small></div>
      </section>
      <section class="program-progress">
        <div><span>Kilometervoortgang</span><strong>${metrics.distanceProgress}%</strong></div>
        <div class="progress-track" role="progressbar" aria-label="Kilometervoortgang" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${metrics.distanceProgress}"><span style="width:${metrics.distanceProgress}%"></span></div>
        <p>${formatNumber(metrics.totalCompletedKm)} van ${formatNumber(metrics.totalPlannedKm)} km voltooid</p>
      </section>
      <section class="dashboard-card week-km-card">
        <div class="dashboard-title"><div><span>Huidige schemaweek</span><h2>Week ${metrics.currentWeek?.weekNumber || "-"}</h2></div><strong>${formatNumber(metrics.currentCompletedKm)} / ${formatNumber(metrics.currentPlannedKm)} km</strong></div>
        <div class="week-km-values"><span>${formatNumber(currentRemainingKm)} km resterend</span><span>${metrics.currentWeek ? escapeHtml(metrics.currentWeek.periodLabel) : ""}</span></div>
      </section>
      ${renderWeeklyDistanceChart(metrics)}
      ${renderCumulativeDistanceChart(metrics)}
      <section class="overview-next-grid">
        <article><span>Volgende training</span>${next ? `<strong>Week ${next.weekNumber} · Training ${next.trainingNumber}</strong><h2>${escapeHtml(capitalize(next.title))}</h2><p>${escapeHtml(workoutPrimarySummary(next))}</p>` : `<strong>Programma voltooid</strong><h2>De marathon wacht</h2>`}</article>
        <article><span>Volgende mijlpaal</span>${milestone ? `<strong>Week ${milestone.weekNumber} · Training ${milestone.trainingNumber}</strong><h2>${escapeHtml(capitalize(milestone.title))}</h2><p>${escapeHtml(milestone.category === "wedstrijd" ? "Marathon · 42,195 km" : workoutPrimarySummary(milestone))}</p>` : `<strong>Geen mijlpaal meer</strong><h2>Race ready</h2>`}</article>
      </section>
      <section class="dashboard-summary-grid">
        <article class="dashboard-card"><span>Confidence runs</span><strong>${metrics.completedConfidence.length} / ${metrics.confidence.length}</strong><p>${metrics.confidence.length - metrics.completedConfidence.length} te gaan</p></article>
        <article class="dashboard-card"><span>Officiële tests</span><strong>${metrics.completedTests.length} / ${metrics.tests.length}</strong><p>${metrics.nextTest ? `Volgende: week ${metrics.nextTest.weekNumber}` : "Alle tests afgerond"}</p></article>
        <article class="dashboard-card"><span>Langste gepland</span><strong>${metrics.longestPlanned ? `${formatNumber(plannedDistanceKm(metrics.longestPlanned))} km` : "-"}</strong><p>${metrics.longestPlanned ? `Week ${metrics.longestPlanned.weekNumber}` : "Geen lange duurloop"}</p></article>
        <article class="dashboard-card"><span>Langste voltooid</span><strong>${metrics.longestCompleted ? `${formatNumber(completedDistanceKm(metrics.longestCompleted))} km` : "0 km"}</strong><p>${metrics.longestCompleted ? escapeHtml(capitalize(metrics.longestCompleted.title)) : "Nog geen lange duurloop"}</p></article>
        <article class="dashboard-card"><span>Bekende trainingsuren</span><strong>${formatHours(metrics.completedDurationSeconds)}</strong><p>van ${formatHours(metrics.plannedDurationSeconds)}</p></article>
        <article class="dashboard-card"><span>Resterende uren</span><strong>${formatHours(metrics.remainingDurationSeconds)}</strong><p>${metrics.unknownDurationCount ? `${metrics.unknownDurationCount} open testduur niet meegerekend` : "Alle trainingsduren bekend"}</p></article>
      </section>
      <section class="dashboard-card detail-status-card">
        <div><span>Gemiddelde voltooide training</span><strong>${formatNumber(metrics.averageCompletedKm)} km</strong></div>
        <div><span>Gemiddeld per actieve week</span><strong>${formatNumber(metrics.activeCompletedWeeks ? metrics.totalCompletedKm / metrics.activeCompletedWeeks : 0)} km</strong></div>
        <div><span>Laatste voltooid</span><strong>${metrics.latestCompleted ? `Week ${metrics.latestCompleted.weekNumber} · Training ${metrics.latestCompleted.trainingNumber}` : "Nog geen training"}</strong><small>${metrics.latestCompleted ? escapeHtml(capitalize(metrics.latestCompleted.title)) : ""}</small></div>
        <div><span>Laatste testresultaat</span><strong>${metrics.latestTest ? escapeHtml(latestTestResult?.result || `Week ${metrics.latestTest.weekNumber}`) : "Nog geen test"}</strong><small>${metrics.latestTest ? escapeHtml(capitalize(metrics.latestTest.title)) : ""}</small></div>
      </section>
      <p class="dashboard-method">Werkelijk gelogde afstand wordt gebruikt wanneer die beschikbaar is. Anders telt een voltooide training voor de geplande afstand mee. De kilometerkaarten tellen 47 trainingen vóór de race; de weekgrafieken en het Schema tonen week 47 inclusief marathon.</p>
    </section>`;
  }

  function renderPlan() {
    app.innerHTML = `
      <header class="page-header"><span>Volledig programma</span><h1>Schema</h1><p>Alle twaalf trainingsweken in één compact overzicht.</p></header>
      <section class="plan-list">
        ${weeks.map((week, index) => {
          const phase = plan.phases.find((item) => item.phaseId === week.phaseId);
          const longRun = week.workouts.find((workout) => workout.trainingNumber === 4);
          const completed = week.workouts.filter((workout) => isCompleted(workout.workoutId)).length;
          const overview = WEEK_OVERVIEW[week.weekNumber] || { theme: phase?.shortName || week.phaseName, goal: week.focus };
          const marathonWeek = Boolean(week.includesMarathon || longRun?.category === "wedstrijd");
          return `<button class="plan-row${completed === week.workouts.length ? " is-completed" : ""}" type="button" data-open-week="${index}" aria-label="Open week ${week.weekNumber}">
            <span class="plan-row-top"><span class="plan-week">Week ${week.weekNumber}</span><span class="plan-status">${completed}/${week.workouts.length}<i aria-hidden="true">›</i></span></span>
            <span class="plan-main">
              <strong>${escapeHtml(overview.theme)}</strong>
              <span class="plan-volume">${escapeHtml(getWeekPlannedLabel(week))}</span>
              <small>${marathonWeek ? `${week.workouts.length} sessies incl. marathon` : `${week.workouts.length} trainingen`}</small>
              <span class="plan-goal"><b>Doel</b>${escapeHtml(overview.goal)}</span>
              <small class="plan-longest">${marathonWeek ? "Marathon" : "Langste training"}: ${escapeHtml(longRun?.estimatedDistanceLabel || `${formatNumber(plannedDistanceKm(longRun))} km`)}</small>
            </span>
          </button>`;
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
    if (state.view === VIEWS.TREADMILL && view !== VIEWS.TREADMILL) {
      const sessionToCancel = { ...treadmillTimer };
      clearTreadmillInterval();
      releaseScreenWakeLock();
      treadmillTimer = createIdleTimer();
      state.treadmillWorkoutId = null;
      state.notificationsPanelOpen = false;
      state.showPushSetup = false;
      cancelPushSession(sessionToCancel);
    }
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
    document.body?.classList?.toggle("treadmill-active", state.view === VIEWS.TREADMILL);
    if (state.view === VIEWS.TREADMILL) renderTreadmillMode();
    else if (state.view === VIEWS.MARATHON) renderMarathonOverview();
    else if (state.view === VIEWS.PLAN) renderPlan();
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

    const treadmill = event.target.closest("[data-open-treadmill]");
    if (treadmill) {
      event.stopPropagation();
      state.treadmillWorkoutId = treadmill.dataset.openTreadmill;
      state.treadmillReturnView = state.view;
      state.notificationsPanelOpen = false;
      state.showPushSetup = false;
      return setView(VIEWS.TREADMILL);
    }

    if (event.target.closest("[data-close-treadmill]")) {
      return setView(state.treadmillReturnView || VIEWS.WEEK);
    }

    if (event.target.closest("[data-back-week]")) {
      return setView(VIEWS.WEEK);
    }

    const timerStart = event.target.closest("[data-timer-start]");
    if (timerStart) return startTreadmillTimer(timerStart.dataset.timerStart);
    if (event.target.closest("[data-timer-pause]")) return pauseTreadmillTimer();
    if (event.target.closest("[data-timer-resume]")) return resumeTreadmillTimer();
    if (event.target.closest("[data-timer-reset]")) return resetTreadmillTimer();
    if (event.target.closest("[data-timer-stop]")) {
      if (!window.confirm || window.confirm("Timer stoppen en terugzetten naar 00:00?")) resetTreadmillTimer();
      return;
    }

    if (event.target.closest("[data-request-notifications]")) {
      requestNotificationAccess();
      return;
    }

    if (event.target.closest("[data-toggle-notifications]")) {
      state.notificationsPanelOpen = !state.notificationsPanelOpen;
      state.showPushSetup = false;
      renderTreadmillMode();
      return;
    }

    if (event.target.closest("[data-show-push-setup]")) {
      state.showPushSetup = !state.showPushSetup;
      renderTreadmillMode();
      return;
    }

    const warningSeconds = event.target.closest("[data-warning-seconds][data-workout-id]");
    if (warningSeconds && !warningSeconds.disabled) {
      saveNotificationSetting(warningSeconds.dataset.workoutId, "warningSeconds", Number(warningSeconds.dataset.warningSeconds));
      renderTreadmillMode();
      return;
    }

    const testNotification = event.target.closest("[data-test-notification]");
    if (testNotification) {
      sendTestPush(testNotification.dataset.testNotification);
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
    if (event.target.matches("[data-notification-setting][data-workout-id]")) {
      const field = event.target.dataset.notificationSetting;
      const value = Boolean(event.target.checked);
      saveNotificationSetting(event.target.dataset.workoutId, field, value);
      renderTreadmillMode();
      return;
    }
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

  brandHome.addEventListener("click", () => setView(VIEWS.MARATHON));

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
      saveAppData();
      releaseScreenWakeLock();
    } else if (state.view === VIEWS.TREADMILL && treadmillTimer.status === "running") {
      requestScreenWakeLock();
      updateTreadmillTimerUi();
    }
  });
  window.addEventListener("pagehide", () => {
    saveAppData();
    clearTreadmillInterval();
    releaseScreenWakeLock();
  });

  async function initializePwaServices() {
    try {
      if ("caches" in window) {
        const cacheNames = await window.caches.keys();
        const appCachePrefixes = ["marathon-330-", "marathon-app-"];
        await Promise.all(cacheNames.filter((name) => appCachePrefixes.some((prefix) => name.startsWith(prefix))).map((name) => window.caches.delete(name)));
      }
      await registerPushServiceWorker();
      await refreshPushStatus();
    } catch (error) {
      console.warn("PWA-diensten konden niet volledig worden gestart.", error);
      if (state.view === VIEWS.TREADMILL) setPushStatus("service-worker-error", "Service worker niet actief", "Herlaad de app en probeer opnieuw.");
    }
  }

  navigator.serviceWorker?.addEventListener?.("message", (event) => {
    if (event.data?.type !== "OPEN_TREADMILL" || !workoutById(event.data.workoutId)) return;
    state.treadmillWorkoutId = event.data.workoutId;
    state.treadmillReturnView = VIEWS.WEEK;
    state.notificationsPanelOpen = false;
    state.showPushSetup = false;
    setView(VIEWS.TREADMILL);
  });

  render();
  initializePwaServices();

  window.MarathonApp = {
    APP_VERSION,
    STORAGE_KEY,
    plan,
    state,
    isCompleted,
    loadAppData,
    saveAppData,
    currentPlanWeekIndex,
    render,
    saveTestField,
    notificationSettings,
    saveNotificationSetting,
    getTreadmillTimer: () => ({ ...treadmillTimer }),
    buildTreadmillTimeline,
    switchPlanFor,
    daysUntilMarathon,
    nextIncompleteWorkout,
    nextMilestoneWorkout,
    getWeekPlannedKm,
    getWeekCompletedKm,
    getWeekPlannedLabel,
    dashboardMetrics,
  };
})();
