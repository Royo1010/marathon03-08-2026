(function () {
  "use strict";

  const APP_VERSION = "2026.10.08-1";
  // Keep this key stable. Preserve existing logs; migrate additions and protocol changes.
  const STORAGE_KEY = "marathon330TrainingAppData_v1";
  const APP_DATA_VERSION = 14;
  const plan = window.MARATHON_PLAN;
  const model = window.MARATHON_MODEL;
  const notifications = window.MARATHON_NOTIFICATIONS;
  const pushConfig = window.MARATHON_PUSH_CONFIG || {};
  const PUSH_API_BASE_URL = String(pushConfig.backendUrl || "").replace(/\/$/, "");
  const PUSH_VAPID_PUBLIC_KEY = String(pushConfig.vapidPublicKey || "");

  if (!plan || !model || !notifications) throw new Error("De trainingsdata kon niet volledig worden geladen.");

  let weeks = plan.weeks || [];
  let workouts = weeks.flatMap((week) => week.workouts || []);
  const app = document.getElementById("app");
  const brandHome = document.getElementById("brand-home");
  const navButtons = Array.from(document.querySelectorAll("[data-view]"));

  const VIEWS = { TODAY: "today", WEEK: "week", PLAN: "plan", PHASES: "phases", MORE: "more", DATA: "data", DETAIL: "detail", NUTRITION: "nutrition", INFO: "info", MARATHON: "marathon", TREADMILL: "treadmill" };
  const requestedTreadmillWorkoutId = new URLSearchParams(window.location.search).get("treadmill");
  const initialTreadmillWorkoutId = plan.workoutAliases?.[requestedTreadmillWorkoutId] || requestedTreadmillWorkoutId;
  let storageWriteBlocked = false;
  let appData = loadAppData();

  function refreshResolvedPlan() {
    weeks = model.resolvePlan ? model.resolvePlan(appData) : (plan.weeks || []);
    workouts = weeks.flatMap((week) => week.workouts || []);
  }

  refreshResolvedPlan();

  const state = {
    view: workouts.some((workout) => workout.workoutId === initialTreadmillWorkoutId) ? VIEWS.TREADMILL : VIEWS.TODAY,
    viewedWeekIndex: currentPlanWeekIndex(),
    expandedWorkoutIds: new Set(),
    workoutModes: new Map(),
    detailWorkoutId: null,
    detailReturnView: VIEWS.TODAY,
    dataDialog: null,
    dataMessage: "",
    pendingImport: null,
    treadmillWorkoutId: workouts.some((workout) => workout.workoutId === initialTreadmillWorkoutId) ? initialTreadmillWorkoutId : null,
    treadmillReturnView: VIEWS.TODAY,
    pushStatus: { code: "checking", label: "Pushstatus controleren…", detail: "" },
    showPushSetup: false,
    notificationsPanelOpen: false,
    focusQueueUserBrowsing: false,
    focusCompletedExpanded: false,
    focusLastActiveIndex: -1,
  };

  let treadmillTimer = createIdleTimer();
  let treadmillTimerInterval = null;
  let screenWakeLock = null;
  let pushServiceWorkerRegistration = null;
  let focusAutoScrolling = false;
  let focusAutoScrollReleaseTimer = null;

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

  function icon(name) {
    return `<span class="icon icon-${name}" aria-hidden="true"></span>`;
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
    return seedReportedExecutions({
      appDataVersion: APP_DATA_VERSION,
      createdAt: timestamp,
      updatedAt: timestamp,
      activePlanId: plan.config.planId,
      workoutLogs: {},
      completedSessions: {},
      testResults: {},
      nutritionLogs: {},
      reportedActivities: {},
      userSettings: {
        notificationDefaults: { ...notifications.DEFAULT_SETTINGS },
        notificationSettings: {},
        pushClient: {},
      },
      uiState: {},
      legacyData: {},
      meta: { storageInitialized: true, schemaVersion: plan.config.schemaVersion },
    });
  }

  function seedReportedExecutions(data) {
    data.reportedActivities = isObject(data.reportedActivities) ? data.reportedActivities : {};
    for (const result of plan.reportedActivities || []) {
      // Only explicitly reported results are seeded; planned steps are not actual execution.
      data.reportedActivities[result.activityId] ||= { ...result };
      data.completedSessions[result.workoutId] ||= { completedAt: result.date, activityId: result.activityId, source: "schema-reported" };
      data.workoutLogs[result.workoutId] ||= { ...result, completed: true, completedDate: result.date, planId: plan.config.planId };
    }
    return data;
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


  function migrateFinalV9_2(raw) {
    const validIds = new Set(plan.allWorkouts.map((workout) => workout.workoutId));
    const archive = { sourceSchema: raw.meta?.schemaVersion || "onbekend", migratedAt: nowIso() };
    // Carry verified identical Garmin protocols, retaining original execution attribution.
    if (raw.completedSessions != null && !isObject(raw.completedSessions)) archive.completedSessions = raw.completedSessions;
    raw.completedSessions = isObject(raw.completedSessions) ? raw.completedSessions : {};
    for (const workout of plan.allWorkouts) {
      for (const oldId of workout.compatiblePreviousIds || []) {
        const oldLog = raw.workoutLogs?.[oldId];
        const oldCompletion = raw.completedSessions[oldId];
        if ((oldLog?.completed || oldCompletion) && !raw.completedSessions[workout.workoutId]) {
          raw.completedSessions[workout.workoutId] = {
            ...(isObject(oldCompletion) ? oldCompletion : {}),
            completedAt: oldCompletion?.completedAt || oldLog?.completedDate || "",
            carriedFromWorkoutId: oldCompletion?.carriedFromWorkoutId || oldId,
            sourceSchema: oldCompletion?.sourceSchema || archive.sourceSchema,
          };
        }
        if (raw.userSettings?.notificationSettings?.[oldId] && !raw.userSettings.notificationSettings[workout.workoutId]) {
          raw.userSettings.notificationSettings[workout.workoutId] = { ...raw.userSettings.notificationSettings[oldId] };
        }
      }
    }
    for (const field of ["workoutLogs", "completedSessions", "testResults", "nutritionLogs"]) {
      if (!isObject(raw[field])) {
        if (raw[field] != null) { archive[field] = raw[field]; raw[field] = {}; }
        continue;
      }
      const old = Object.fromEntries(Object.entries(raw[field]).filter(([id]) => !validIds.has(id)));
      if (Object.keys(old).length) {
        archive[field] = old;
        for (const id of Object.keys(old)) delete raw[field][id];
      }
    }
    if (isObject(raw.userSettings)) {
      const settings = raw.userSettings;
      const previous = Object.fromEntries(Object.entries(settings.notificationSettings || {}).filter(([id]) => !validIds.has(id)));
      if (Object.keys(previous).length) archive.notificationSettings = previous;
      settings.notificationSettings = Object.fromEntries(Object.entries(settings.notificationSettings || {}).filter(([id]) => validIds.has(id)));
      for (const field of ["weekDecisions", "optionalWorkoutChoices", "raceTarget"]) {
        if (settings[field] != null) archive[field] = settings[field];
        delete settings[field];
      }
    }
    if (raw.legacyData != null && !isObject(raw.legacyData)) archive.previousLegacyData = raw.legacyData;
    if (raw.reportedActivities != null && !isObject(raw.reportedActivities)) archive.previousReportedActivities = raw.reportedActivities;
    raw.legacyData = isObject(raw.legacyData) ? raw.legacyData : {};
    if (Object.keys(archive).length > 2) {
      if (!Array.isArray(raw.legacyData.finalV9_2History)) {
        if (raw.legacyData.finalV9_2History != null) archive.previousV9_2History = raw.legacyData.finalV9_2History;
        raw.legacyData.finalV9_2History = [];
      }
      raw.legacyData.finalV9_2History.push(archive);
    }
    // Changed protocols are history only; no completion inferred from matching dates/numbers.
  }

  function migrateAppData(raw) {
    const empty = createEmptyAppData();
    if (!isObject(raw)) throw new Error("Opgeslagen data is geen app-object.");
    raw = JSON.parse(JSON.stringify(raw));
    if (Number(raw.appDataVersion || 0) < APP_DATA_VERSION || raw.meta?.schemaVersion !== plan.config.schemaVersion) migrateFinalV9_2(raw);
    const data = {
      ...empty,
      ...raw,
      appDataVersion: APP_DATA_VERSION,
      activePlanId: plan.config.planId,
      userSettings: { ...empty.userSettings, ...(isObject(raw.userSettings) ? raw.userSettings : {}) },
      uiState: isObject(raw.uiState) ? raw.uiState : {},
      testResults: isObject(raw.testResults) ? raw.testResults : {},
      nutritionLogs: isObject(raw.nutritionLogs) ? raw.nutritionLogs : {},
      reportedActivities: isObject(raw.reportedActivities) ? raw.reportedActivities : {},
      legacyData: isObject(raw.legacyData) ? raw.legacyData : {},
      meta: { ...empty.meta, ...(isObject(raw.meta) ? raw.meta : {}), schemaVersion: plan.config.schemaVersion },
    };

    const validIds = new Set((plan.allWorkouts || workouts).map((workout) => workout.workoutId));
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
    return seedReportedExecutions(data);
  }

  function loadAppData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const data = raw ? migrateAppData(JSON.parse(raw)) : createEmptyAppData();
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      } catch (error) {
        // A write failure must not hide data that was read successfully.
        showStorageWarning("Opslaan lukt niet. Je bestaande gegevens blijven zichtbaar; controleer de beschikbare browseropslag.");
        console.warn("Opslag kon niet worden bijgewerkt.", error);
      }
      return data;
    } catch (error) {
      storageWriteBlocked = true;
      showStorageWarning("Lokale gegevens konden niet worden geladen. De originele opslag is behouden. Nieuwe registraties worden niet opgeslagen totdat de opslag is hersteld.");
      console.warn("Opslag niet toegankelijk. Bestaande data blijft onaangeroerd; opslaan is geblokkeerd.", error);
      return createEmptyAppData();
    }
  }

  function showStorageWarning(message = "") {
    const warning = document.getElementById("storage-warning");
    if (!warning) return;
    warning.textContent = message;
    warning.hidden = !message;
  }

  function saveAppData() {
    if (storageWriteBlocked) return false;
    appData.updatedAt = nowIso();
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(appData)); showStorageWarning(); return true; }
    catch (error) {
      showStorageWarning("Opslaan lukt niet. Houd de app open en controleer de beschikbare browseropslag; nieuwe invoer is nog niet veilig bewaard.");
      console.warn("Voortgang opslaan is niet gelukt.", error);
      return false;
    }
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
    const selectedWorkout = workoutById(workoutId);
    if (!selectedWorkout || selectedWorkout.reportedExecution) return;
    const completed = !isCompleted(workoutId);
    if (completed && selectedWorkout.preferredDate > localDateIso() && !window.confirm("Heb je deze training al werkelijk uitgevoerd? Afvinken registreert uitvoering, niet alleen een voornemen.")) return;
    const log = normalizeWorkoutLog(workoutLog(workoutId) || {}, workoutId);
    log.completed = completed;
    log.completedDate = completed ? localDateIso() : "";
    log.updatedAt = nowIso();
    if (completed) {
      const workout = workoutById(workoutId);
      log.plannedDistanceAtCompletion = plannedDistanceKm(workout);
      log.plannedSecondsAtCompletion = workoutDurationSeconds(workout);
      log.plannedSessionMinutesAtCompletion = workout?.plannedSessionMinutes || 0;
      log.plannedRunMinutesAtCompletion = workout?.plannedRunMinutes || 0;
      log.plannedWalkMinutesAtCompletion = workout?.plannedWalkMinutes || 0;
      log.weekNumber = workout?.weekNumber;
      log.workoutDate = workout?.date || "";
      log.activityType = workout?.activityType || "";
      log.role = workout?.role || "";
      log.schemaVersion = plan.config.schemaVersion;
      log.title = workout?.title || "";
      log.protocolSignature = workout?.protocolSignature || "";
    }
    appData.workoutLogs[workoutId] = log;
    if (completed) appData.completedSessions[workoutId] = { completedAt: log.completedDate, updatedAt: log.updatedAt };
    else delete appData.completedSessions[workoutId];
    saveAppData();
    refreshResolvedPlan();
    render();
  }

  function firstIncompleteWorkout(week) {
    return orderedWorkouts(week).find((workout) => !isCompleted(workout.workoutId)) || null;
  }

  function orderedWorkouts(week) {
    return [...(week?.workouts || [])].sort((a, b) => String(a.preferredDate || "").localeCompare(String(b.preferredDate || "")) || a.trainingNumber - b.trainingNumber);
  }

  function completionLabel(workoutId) {
    if (workoutById(workoutId)?.reportedExecution) return "Uitgevoerd";
    const previous = appData.completedSessions[workoutId]?.carriedFromWorkoutId;
    const version = previous?.match(/^V([\d_]+)-/)?.[1]?.replace(/_/g, ".");
    return previous ? `Al uitgevoerd${version ? ` (V${version})` : ""}` : "Voltooid";
  }

  function renderRecordedResult(workout, compact = false) {
    if (!workout.reportedExecution) return "";
    const record = { ...workout.reportedExecution, ...workoutLog(workout.workoutId) };
    const result = `${formatStopwatch(record.actualDurationSeconds)} · ${formatNumber(record.actualDistanceKm, 2)} km · ${record.averagePace}`;
    if (compact) return `<span class="training-speed"><strong>Uitgevoerd ${escapeHtml(formatDate(record.date || record.completedDate))}: ${escapeHtml(result)}</strong></span>`;
    return `<section class="garmin-program-summary" aria-label="Werkelijk geregistreerd resultaat"><span>Uitgevoerd ${escapeHtml(formatDate(record.date || record.completedDate, { day: "numeric", month: "long" }))}</span><strong>${escapeHtml(result)}</strong><p>${escapeHtml(record.averageHeartRate)} bpm gemiddeld · circa ${escapeHtml(record.averageCadence)} spm · ${escapeHtml(record.sensor)}</p><p>${escapeHtml(record.note)}</p><small>Gepland: ${escapeHtml(workout.totalPlannedLabel)}. Planstappen hieronder zijn documentatie, geen bevestigde werkelijke stapovergangen. Door Roy aangeleverd, geen automatische Garmin-synchronisatie.</small></section>`;
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
      fiets: "Fietstraining",
    };
    return labels[workout.category] || capitalize(String(workout.category || "Training").replace(/-/g, " "));
  }

  function workoutSequenceLabel(workout) {
    return workout?.trainingNumber ? `Training ${workout.trainingNumber}` : workout?.trainingLabel || "Extra sessie";
  }

  function relevantSegments(workout) {
    return model.flattenWorkoutSegments(workout).filter((segment) => !["wandelen", "warming-up", "cooling-down"].includes(segment.type));
  }

  function garminSegments(workout) {
    return (workout?.garmin?.groups || []).flatMap((group) => group.segments || []);
  }

  function speedSummary(workout) {
    if (workout.garmin) {
      if (workout.garmin.isRacePlan) return "Outdoor · Garmin-raceplan";
      const types = [...new Set(garminSegments(workout).map((segment) => segment.targetType))];
      if (types.includes("Heart Rate") && types.includes("Pace")) return "Garmin · Heart Rate + Pace";
      if (types.includes("Pace")) return "Garmin · Pace";
      if (types.includes("Heart Rate")) return "Garmin · Heart Rate";
      return workout.activityType === "bike" ? "Fietsen op tijd · rustig" : "Garmin · Geen doel";
    }
    if (workout.outdoorSimpleMode) return "Buiten · tempo op gevoel";
    const values = relevantSegments(workout).map((segment) => Number(segment.speedKmh)).filter((value) => Number.isFinite(value) && value > 0);
    if (!values.length) return workout.surface === "buiten" ? "Buiten" : "Tempo op gevoel";
    const min = Math.min(...values);
    const max = Math.max(...values);
    return min === max ? `${formatNumber(min)} km/u` : `${formatNumber(min)}–${formatNumber(max)} km/u`;
  }

  function keyBlockSummary(workout) {
    if (workout.garmin) {
      if (workout.garmin.isRacePlan) return "Open raceactiviteit · strategie en startbesluit nog niet vastgesteld";
      const repeat = (workout.garmin.groups || []).find((group) => group.kind === "repeat");
      if (repeat?.segments?.length) {
        const work = repeat.segments[0];
        const recovery = repeat.segments[1];
        return `${repeat.repetitions} × ${work.display.replace(/^\d+\s*[×x]\s*/i, "")} · ${work.targetType}: ${work.targetValue}${recovery ? ` · herstel ${recovery.display.replace(/^.*?(\d)/, "$1")}` : ""}`;
      }
      const candidates = garminSegments(workout).filter((segment) => ["Pace", "Heart Rate"].includes(segment.targetType));
      const main = candidates.sort((a, b) => Number(b.durationSeconds || 0) - Number(a.durationSeconds || 0))[0];
      if (main) return `${main.display} · ${main.targetType}: ${main.targetValue}`;
      return workout.garmin.programSummary;
    }
    if (workout.outdoorSimpleMode) return workout.outdoorSimpleInstruction || "Loop ontspannen op gevoel.";
    const repeat = (workout.groups || []).find((group) => group.kind === "repeat");
    if (repeat?.segments?.length) {
      const work = repeat.segments[0];
      const recovery = repeat.segments[1];
      const main = `${repeat.repetitions} × ${work.display} op ${formatNumber(work.speedKmh)} km/u`;
      return recovery ? `${main} · herstel ${recovery.display}` : main;
    }
    const distanceSegments = relevantSegments(workout).filter((segment) => segment.basis === "distance");
    if (distanceSegments.length) {
      return distanceSegments.slice(0, 3).map((segment) => `${segment.display} ${segment.speedKmh > 0 ? `op ${formatNumber(segment.speedKmh)} km/u` : "op testtempo"}`).join(" · ") + (distanceSegments.length > 3 ? " · …" : "");
    }
    const faster = relevantSegments(workout).filter((segment) => Number(segment.speedKmh) >= 11.5);
    if (faster.length) return faster.slice(0, 2).map((segment) => `${segment.display} op ${formatNumber(segment.speedKmh)} km/u`).join(" · ") + (faster.length > 2 ? " · …" : "");
    const longest = relevantSegments(workout).sort((a, b) => model.segmentDurationSeconds(b) - model.segmentDurationSeconds(a))[0];
    if (!longest) return workout.goal;
    if (Number(longest.speedKmh) > 0) return `${longest.display} op ${formatNumber(longest.speedKmh)} km/u`;
    return joinText([longest.display, longest.instruction || "op gevoel"]);
  }

  function workoutPrimarySummary(workout) {
    return joinText([workout.totalPlannedLabel, workout.activityType === "race" ? workout.estimatedDistanceLabel : "afstand achteraf meten"], "Bekijk de exacte opbouw");
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
    const blocks = model.flattenWorkoutSegments({ ...workout, groups: model.treadmillGroups(workout) }).map((segment, index) => {
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

  function timelineSnapshotAt(timeline, elapsedValue) {
    const elapsedSeconds = Math.max(0, Math.floor(Number(elapsedValue) || 0));
    let currentIndex = timeline.blocks.findIndex((block) => block.endSeconds != null && elapsedSeconds < block.endSeconds);
    if (currentIndex === -1 && timeline.totalSeconds != null && elapsedSeconds < timeline.totalSeconds) currentIndex = 0;
    const current = currentIndex >= 0 ? timeline.blocks[currentIndex] : null;
    const next = currentIndex >= 0 ? timeline.blocks[currentIndex + 1] || null : null;
    const finished = timeline.totalSeconds != null && elapsedSeconds >= timeline.totalSeconds;
    return {
      elapsedSeconds,
      currentIndex,
      current,
      next,
      remainingSeconds: current?.endSeconds != null ? Math.max(0, current.endSeconds - elapsedSeconds) : 0,
      totalRemainingSeconds: timeline.totalSeconds != null ? Math.max(0, timeline.totalSeconds - elapsedSeconds) : 0,
      completedCount: finished ? timeline.blocks.length : Math.max(0, currentIndex),
      finished,
    };
  }

  function timerSnapshot(timeline) {
    return timelineSnapshotAt(timeline, timerElapsedSeconds());
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

  function renderWeekPhilosophy(week) {
    const philosophy = week.weekPhilosophy;
    if (!philosophy) return "";
    return `<details class="week-philosophy">
      <summary>
        <span><small>Trainingsfilosofie</small><strong>${escapeHtml(philosophy.summary)}</strong></span>
        <i aria-hidden="true">+</i>
      </summary>
      <div class="week-philosophy-body">
        <div class="philosophy-tags">${(philosophy.adaptations || []).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
        <section><h3>Waarom deze week zo is opgebouwd</h3>${(philosophy.why || []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</section>
        <section><h3>Relatie tot de marathondoelen</h3><p>${escapeHtml(philosophy.targetLink)}</p></section>
        <section><h3>Waarom niet meer of harder?</h3><p>${escapeHtml(philosophy.whyNotMore)}</p></section>
        <section><h3>Waar vertrouwen uit mag komen</h3><p>${escapeHtml(philosophy.confidence)}</p></section>
      </div>
    </details>`;
  }


  function renderToday() {
    const date = appDateIso();
    const week = weeks[currentPlanWeekIndex()] || weeks[0];
    const beforePlan = date < plan.config.startDate;
    const afterPlan = date > plan.config.endDate;
    let content = "";
    if (beforePlan) {
      content = `<section class="today-state"><span>Start programma</span><strong>Maandag 5 oktober</strong><p>FINAL V9.2 begint met actief herstel, daarna gecontroleerde opbouw richting 3:50.</p></section>`;
    } else if (afterPlan) {
      content = `<section class="today-state"><span>Programma voltooid</span><strong>Marathonperiode afgerond</strong><p>Het actieve FINAL V9.2-schema liep tot zondag 22 november 2026.</p></section>`;
    } else {
      const workout = firstIncompleteWorkout(week);
      const completed = week.workouts.filter((item) => isCompleted(item.workoutId)).length;
      const following = orderedWorkouts(week).filter((item) => !isCompleted(item.workoutId))[1];
      content = workout ? `<div class="today-focus">${renderTrainingCard(workout)}</div><div class="today-week-progress"><span>Deze week</span><strong>${completed}/${week.workouts.length} voltooid</strong><div class="progress-track" role="progressbar" aria-label="Weekvoortgang" aria-valuemin="0" aria-valuemax="${week.workouts.length}" aria-valuenow="${completed}"><span style="width:${completed / week.workouts.length * 100}%"></span></div></div>${following ? `<section class="today-up-next"><span>Daarna in deze week</span><button type="button" data-open-week="${currentPlanWeekIndex()}"><span><strong>${escapeHtml(workoutSequenceLabel(following))}</strong><small>${escapeHtml(following.title)}</small></span><span>${escapeHtml(following.totalPlannedLabel)} ${icon("chevron-right")}</span></button></section>` : ""}<p class="today-planning-note">Jij kiest wanneer je traint en rust neemt.</p>` : `<section class="today-state">${icon("circle-check")}<strong>Week voltooid</strong><p>Alle trainingen van week ${week.weekNumber} zijn afgerond. Tijd voor herstel en normale dagelijkse beweging.</p><button class="text-action" type="button" data-open-week="${currentPlanWeekIndex()}">Bekijk de week ${icon("chevron-right")}</button></section>`;
    }
    app.innerHTML = `<header class="page-header today-header"><div><span>${escapeHtml(formatDate(date, { day: "numeric", month: "long" }))}</span><h1>Vandaag</h1></div><button class="today-week-link" type="button" data-open-week="${currentPlanWeekIndex()}">Week ${week.weekNumber} ${icon("chevron-right")}</button></header><p class="today-phase">${escapeHtml(week.weekType)}</p>${content}`;
  }

  function renderWeek() {
    const week = weeks[state.viewedWeekIndex] || weeks[0];
    const phase = plan.phases.find((item) => item.phaseId === week.phaseId);
    const completed = week.workouts.filter((workout) => isCompleted(workout.workoutId)).length;
    app.innerHTML = `
      <section class="week-intro" aria-labelledby="week-title">
        <div class="week-title-row">
          <h1 id="week-title">Week ${week.weekNumber}</h1>
          <div class="week-controls" aria-label="Weeknavigatie">
            <button class="icon-button" type="button" data-week-prev aria-label="Vorige week" title="Vorige week" ${state.viewedWeekIndex === 0 ? "disabled" : ""}>${icon("chevron-left")}</button>
            <select data-week-select aria-label="Kies trainingsweek">
              ${weeks.map((item, index) => `<option value="${index}" ${index === state.viewedWeekIndex ? "selected" : ""}>Week ${item.weekNumber}</option>`).join("")}
            </select>
            <button class="icon-button" type="button" data-week-next aria-label="Volgende week" title="Volgende week" ${state.viewedWeekIndex === weeks.length - 1 ? "disabled" : ""}>${icon("chevron-right")}</button>
          </div>
        </div>
        <p class="week-subtitle">${escapeHtml(phase?.name || week.phaseName)} · ${week.workouts.length} trainingen</p>
        <p class="week-goal">${escapeHtml(week.focus)}</p>
        <p class="week-goal">${escapeHtml(getWeekPlannedLabel(week))} · ${week.workouts.filter((w) => w.activityType === "run").length} hardloopdagen${week.includesMarathon ? " + marathon" : ""}</p>
        <p class="week-goal">${week.distanceEstimate ? `${escapeHtml(distanceEstimateLabel(week))}<br>` : ""}Rust: ${escapeHtml(week.restDays.join(" en "))}</p>
        <div class="week-completion"><div class="progress-track" role="progressbar" aria-label="Weekvoortgang" aria-valuemin="0" aria-valuemax="${week.workouts.length}" aria-valuenow="${completed}"><span style="width:${week.workouts.length ? completed / week.workouts.length * 100 : 0}%"></span></div><span>${completed}/${week.workouts.length} voltooid</span></div>
      </section>
      <section class="training-list" aria-label="Trainingen in week ${week.weekNumber}">${week.workouts.map((workout) => renderTrainingCard(workout)).join("")}</section>
      <details class="info-accordion week-context"><summary><span>Planning en herstel</span>${icon("chevron-down")}</summary><div><p>${escapeHtml(week.periodLabel)}</p><p>${escapeHtml(getWeekPlannedLabel(week))}</p>${week.distanceEstimate ? `<p>${escapeHtml(distanceEstimateLabel(week))}. Rekenaanname easy 6:00–6:30/km (middenvoorbeeld 6:15) en MP 5:24–5:30/km; rustiger lopen mag.</p>` : ""}<ul>${plan.guidance.scheduling.map((rule) => `<li>${escapeHtml(rule)}</li>`).join("")}</ul><p>De nummers identificeren trainingen, geen verplichte weekdagen. Alleen W41 bevat een fietsrit, bij voorkeur op donderdag.</p></div></details>
      ${renderWeekPhilosophy(week)}
    `;
  }

  function renderSemanticBadge(label) {
    const text = String(label || "");
    const tone = /VOEDING|RACEVOEDING/.test(text) ? "fueling" : /STRENGTH/.test(text) ? "strength" : /BUITEN|OUTDOOR|MÁXIMAPARK|GARMIN/.test(text) ? "outdoor" : /LOOPBAND/.test(text) ? "treadmill"
      : /CUTBACK|RECOVERY/.test(text) ? "recovery" : /RACE/.test(text) ? "race" : /TAPER/.test(text) ? "taper"
      : /TEST|BENCHMARK|FITNESS CHECK/.test(text) ? "test" : /LONG|CONFIDENCE|PEAK/.test(text) ? "long"
      : /MARATHON SPECIFIC|MARATHONSPECIFIEK|MP/.test(text) ? "mp" : /INTERVAL|STRIDES/.test(text) ? "interval"
      : /QUALITY|THRESHOLD|CONTROLLED FAST/.test(text) ? "threshold" : /STEADY/.test(text) ? "steady" : "easy";
    return `<span class="semantic-badge tone-${tone}">${escapeHtml(text)}</span>`;
  }


  function trainingModeLabel(workout) {
    if (workout.garmin?.isRacePlan) return "Garmin-raceplan";
    if (workout.activityType === "bike") return "Fietsopbouw";
    if (workout.treadmillAvailable) return "Loopbandmodus";
    if (workout.outdoorSimpleMode && workout.treadmillVariantAvailable) return "Loopbandvariant";
    if (workout.outdoorSimpleMode) return "Buitenmodus";
    return workout.surface === "buiten" ? "Trainingsmodus" : "Loopbandmodus";
  }

  function renderOutdoorSimpleOverview(workout) {
    const kind = workout.category === "herstel" ? "Recovery" : "Easy";
    return `<section class="outdoor-simple-card" aria-label="Eenvoudige buitenuitvoering">
      <div class="outdoor-simple-heading"><span>${escapeHtml(kind)}</span><strong>Outdoor · Máximapark</strong></div>
      <div class="outdoor-simple-metrics">
        <div><strong>${escapeHtml(workout.estimatedDistanceLabel)}</strong><span>Afstand</span></div>
        <div><strong>RPE ${escapeHtml(workout.targetRpe)}</strong><span>${workout.category === "herstel" ? "Zeer rustig" : "Praattempo"}</span></div>
      </div>
      <p>${escapeHtml(workout.outdoorSimpleInstruction || workout.goal)}</p>
      <small>${escapeHtml(workout.outsideVariant)}</small>
      ${workout.treadmillVariantAvailable ? `<p class="outdoor-variant-note">Exacte minuten en snelheden staan onder <strong>Loopbandvariant</strong>.</p>` : `<p class="outdoor-variant-note">Het bronschema bevat voor deze bewust buiten geplande sessie geen numerieke loopbandvariant.</p>`}
    </section>`;
  }

  function workoutExecutionMode(workout) {
    if (!workout?.garmin) return workout?.surface === "buiten" ? "outdoor" : "treadmill";
    if (!workout.treadmillAvailable) return "garmin";
    return state.workoutModes.get(workout.workoutId) || workout.defaultExecutionMode || "garmin";
  }

  function renderExecutionModeSwitch(workout, mode) {
    if (!workout.garmin || !workout.treadmillAvailable) return "";
    return `<div class="execution-mode-switch" role="radiogroup" aria-label="Kies uitvoeringsmodus">
      <button type="button" role="radio" aria-checked="${mode === "garmin"}" class="${mode === "garmin" ? "is-active" : ""}" data-workout-mode="garmin" data-workout-id="${escapeAttr(workout.workoutId)}">Outdoor / Garmin</button>
      <button type="button" role="radio" aria-checked="${mode === "treadmill"}" class="${mode === "treadmill" ? "is-active" : ""}" data-workout-mode="treadmill" data-workout-id="${escapeAttr(workout.workoutId)}">Loopband</button>
    </div>`;
  }

  function renderGarminStep(segment, stepLabel) {
    const fields = model.garminStepFields(segment);
    return `<article class="garmin-step" aria-label="Garmin-stap ${escapeAttr(stepLabel)}">
      <div class="garmin-step-heading"><span class="garmin-step-number">${escapeHtml(stepLabel)}</span><strong>${escapeHtml(segment.name)}</strong></div>
      <dl class="garmin-step-fields">
        <div><dt>Staptype</dt><dd>${escapeHtml(fields.stepType)}</dd></div>
        <div><dt>Type duur</dt><dd>${escapeHtml(fields.durationType)}</dd></div>
        <div class="garmin-duration"><dt>${fields.durationType === "Tijd" ? "Tijdsduur" : "In te vullen waarde"}</dt><dd><strong>${escapeHtml(fields.durationValue)}</strong>${fields.durationLabel ? `<span> — ${escapeHtml(fields.durationLabel)}</span>` : ""}</dd></div>
        <div><dt>Type doel</dt><dd>${escapeHtml(fields.targetType)}</dd></div>
        ${fields.targetValue ? `<div><dt>Doelwaarde</dt><dd>${escapeHtml(fields.targetValue)}</dd></div>` : ""}
        <div class="garmin-step-notes"><dt>Voeg notities toe</dt><dd>${escapeHtml(fields.note)}</dd></div>
      </dl>
    </article>`;
  }

  function renderGarminGroups(workout) {
    let stepNumber = 0;
    return (workout.garmin.groups || []).map((group) => {
      if (group.kind !== "repeat") return (group.segments || []).map((segment) => renderGarminStep(segment, String(++stepNumber))).join("");
      stepNumber += 1;
      const groupSeconds = (group.segments || []).reduce((total, segment) => total + Number(segment.durationSeconds || 0), 0);
      const recovery = group.segments.find((segment) => segment.isRecovery);
      return `<section class="garmin-repeat">
        <div class="garmin-repeat-heading"><span>Groep ${stepNumber}</span><strong>Herhaalgroep: ${group.repetitions} keer</strong></div>
        <p class="garmin-repeat-note">Voer de onderstaande ${group.segments.length} stappen samen ${group.repetitions} keer uit. Voeg geen losse eerste herhaling toe. De stappen erbuiten voer je één keer uit.</p>
        ${(group.segments || []).map((segment, index) => renderGarminStep(segment, `${stepNumber}${String.fromCharCode(97 + index)}`)).join("")}
        <p class="garmin-repeat-note">${recovery ? group.omitRecoveryAfterLast ? "Herstel alleen tussen de werkblokken; na de laatste herhaling vervalt het herstel." : `${model.garminStepFields(recovery).stepType === "Wandelen" ? "De wandelpauze" : "De hersteljog"} blijft ook na de laatste herhaling aanwezig.` : ""} Totale groep: ${escapeHtml(model.garminDurationLabel(groupSeconds * group.repetitions - (group.omitRecoveryAfterLast ? Number(recovery?.durationSeconds || 0) : 0)))}.</p>
      </section>`;
    }).join("");
  }

  function renderGarminRaceSetup(workout) {
    return `<section class="garmin-setup garmin-race-setup" aria-label="Garmin-raceplan">
      <div class="garmin-setup-heading"><span>Garmin-raceplan</span><strong>Marathon 2026</strong></div>
      <div class="garmin-setup-metrics"><div><span>Afstand</span><strong>${escapeHtml(workout.garmin.referenceDistanceLabel)}</strong></div><div><span>A-doel</span><strong>${escapeHtml(plan.config.targetTime)}</strong></div><div><span>Doeltempo</span><strong>${escapeHtml(plan.config.targetPace)}</strong></div></div>
      <div class="garmin-program-summary"><span>Gebruik op Garmin</span><strong>${escapeHtml(workout.garmin.programSummary)}</strong></div>
      <div class="reference-content">${renderGuideBlocks(workout.garmin.raceGuidance)}</div>
    </section>`;
  }

  function renderGarminSetup(workout) {
    if (workout.garmin?.isRacePlan) return renderGarminRaceSetup(workout);
    if (workout.activityType === "bike") return renderBikeSetup(workout);
    return `<section class="garmin-setup" aria-label="Dit vul je in Garmin Connect in">
      <div class="garmin-setup-heading"><span>Outdoor / Garmin</span><strong>Dit vul je in Garmin Connect in</strong></div>
      <div class="garmin-setup-metrics">
        <div><span>Totale duur</span><strong>${escapeHtml(workout.totalPlannedLabel)}</strong></div>
        <div><span>Afstand</span><strong>${escapeHtml(workout.garmin.referenceDistanceLabel)}</strong></div>
      </div>
      <p class="garmin-purpose"><strong>Doel:</strong> ${escapeHtml(workout.goal)}</p>
      ${workout.role === "strides" ? `<p class="garmin-reference-note"><strong>Strides zijn optioneel.</strong> Alleen bij normale benen; ontspannen versnellen, geen sprint. Bij zware benen vervang je de volledige herhaalgroep door 6 minuten easy, met dezelfde totale trainingsduur. Op de loopband is de easy-variant standaard.</p>` : ""}
      <div class="garmin-steps" aria-label="Stappen voor Garmin Connect">${renderGarminGroups(workout)}</div>
      <div class="garmin-program-summary"><span>Programmeer in Garmin als:</span><strong>${escapeHtml(workout.garmin.programSummary)}</strong></div>
      <p class="garmin-reference-note"><strong>Totaal: ${escapeHtml(model.garminDurationLabel(workout.totalPlannedSeconds))}${workout.plannedWalkMinutes ? `, waarvan ${formatNumber(workout.plannedRunMinutes, 0)} minuten hardlopen en ${formatNumber(workout.plannedWalkMinutes, 0)} minuten wandelen` : ""}.</strong></p>
      <p class="garmin-reference-note">Selecteer bij alle stappen <strong>Tijd</strong>, ook bij Warm-up en Cooldown. Vrij = <strong>Geen doel</strong>. ${workout.plannedMpMinutes ? `MP = <strong>Tempo ${escapeHtml(plan.config.mpTarget)}</strong>; richt op ${escapeHtml(plan.config.targetPace)}, gecontroleerd rond RPE 4–5. ` : ""}RPE en praattest zijn notities, geen targets. Easy heeft geen pace- of zone-eis.</p>
      <p class="garmin-reference-note">Meer → Training en planning → Workouts → Maak een workout → Hardlopen. Sla op onder ${escapeHtml(workout.workoutId)}, stuur naar FR165, synchroniseer en controleer vóór vertrek. Auto Pause uit; geen losse zone-alerts die de workout tegenspreken.</p>
      <p class="garmin-reference-note">${escapeHtml(workout.durationCheck)}</p>
    </section>`;
  }

  function renderBikeSetup(workout) {
    const segments = garminSegments(workout);
    return `<section class="garmin-setup bike-setup" aria-label="Fietsopbouw op tijd">
      <div class="garmin-setup-heading"><span>Fietstraining</span><strong>Fietsopbouw op tijd</strong></div>
      <div class="garmin-setup-metrics"><div><span>Totale duur</span><strong>${escapeHtml(workout.totalPlannedLabel)}</strong></div><div><span>Inspanning</span><strong>RPE ${escapeHtml(workout.targetRpe)}</strong></div></div>
      <p class="garmin-purpose">${escapeHtml(workout.bikeInstruction)}</p>
      <div class="garmin-steps">${segments.map((segment, index) => `<article class="garmin-step"><div class="garmin-step-heading"><span class="garmin-step-number">${index + 1}</span><strong>${escapeHtml(segment.name)}</strong></div><dl class="garmin-step-fields"><div class="garmin-duration"><dt>Duur</dt><dd><strong>${escapeHtml(model.garminStepFields(segment).durationValue)}</strong><span> — ${escapeHtml(model.garminDurationLabel(segment.durationSeconds))}</span></dd></div><div class="garmin-step-notes"><dt>Uitvoering</dt><dd>${escapeHtml(index === 0 ? "Rustig opstarten, lichte versnelling." : index === segments.length - 1 ? "Rustig uittrappen." : "Rustig fietsen, RPE 2–3. Volledige zinnen kunnen praten.")} ${escapeHtml(segment.cue)}</dd></div></dl></article>`).join("")}</div>
      <div class="garmin-program-summary"><span>Programmeer in Garmin als:</span><strong>${escapeHtml(workout.garmin.programSummary)}</strong></div>
      <p class="garmin-reference-note"><strong>Hometrainer:</strong> ${escapeHtml(workout.hometrainerInstruction)}</p>
      <p class="garmin-reference-note">${escapeHtml(workout.durationCheck)} Fietsminuten blijven apart van rentijd.</p>
    </section>`;
  }

  function renderTreadmillDetails(workout) {
    return `<section class="treadmill-detail-panel" aria-label="Loopbandalternatief">
      <div class="treadmill-detail-heading"><span>Gelijkwaardig alternatief</span><strong>Loopband</strong></div>
      <p>${escapeHtml(workout.treadmillInstruction)}</p>
      <div class="segment-groups">${model.treadmillGroups(workout).map(renderSegmentGroup).join("")}</div>
      <button class="open-focus-mode" type="button" data-open-treadmill="${escapeAttr(workout.workoutId)}"><span aria-hidden="true">▶</span> Open volledige Loopband Focus Mode</button>
    </section>`;
  }

  function shortBlockDuration(segment) {
    const seconds = model.segmentDurationSeconds(segment);
    if (!seconds) return segment.display;
    const minutes = Math.floor(seconds / 60);
    const remainder = Math.round(seconds % 60);
    return [minutes ? `${minutes} min` : "", remainder ? `${remainder} sec` : ""].filter(Boolean).join(" ");
  }

  function compactWorkoutStructure(workout) {
    if (workout.garmin?.isRacePlan) return "A: 3:50 · B: PR <3:55:50 · C: sub 4 · officiële finish leidend";
    if (!workout.garmin) return keyBlockSummary(workout);
    const describe = (segment) => {
      const names = { wandelen: "wandelen", marathonpace: "MP", herstel: "easy", easy: "easy", "warming-up": "easy", "cooling-down": "easy" };
      const name = workout.activityType === "bike" ? "fietsen" : names[segment.type] || segment.name;
      return `${shortBlockDuration(segment)} ${name}`;
    };
    return workout.garmin.groups.map((group) => group.kind === "repeat"
      ? `${group.repetitions} × (${group.segments.map(describe).join(" + ")})`
      : group.segments.map(describe).join(" → ")).join(" → ");
  }

  function renderTrainingCard(workout) {
    const completed = isCompleted(workout.workoutId);
    return `
      <article class="training-card tone-${escapeAttr(workout.tone || "easy")} ${completed ? "is-completed" : ""}" data-workout-card="${workout.workoutId}">
        <button class="training-card-toggle" type="button" data-open-workout="${workout.workoutId}">
          <span class="card-topline"><span class="training-index" aria-hidden="true">${workout.trainingNumber}</span><span class="card-heading"><span class="training-number">${escapeHtml(workoutSequenceLabel(workout))}</span><span class="training-type">${escapeHtml(workout.activityType === "bike" ? "Fietsen" : workout.role === "runwalk" ? "Run-walk" : workout.activityType === "race" ? "Marathon" : workout.plannedMpMinutes ? "Marathonpace" : "Hardlopen")}</span></span>${completed ? `<span class="completed-mark">${icon("circle-check")} ${completionLabel(workout.workoutId)}</span>` : ""}<span class="expand-icon">${icon("chevron-right")}</span></span>
          <span class="card-title-row"><span class="training-name">${escapeHtml(capitalize(workout.title))}</span><span class="training-primary">${escapeHtml(workout.activityType === "race" ? workout.estimatedDistanceLabel : workout.totalPlannedLabel)}</span></span>
          <span class="training-speed">${escapeHtml(joinText([workout.targetRpe ? `RPE ${workout.targetRpe}` : "", workout.plannedMpMinutes ? `${plan.config.mpTarget} · ${workout.plannedMpMinutes} min MP` : workout.activityType === "race" ? plan.config.targetPace : "Vrij tempo"]))}</span>
          ${workout.preferredDate ? `<span class="training-speed">${workout.activityType === "race" ? "Racedatum" : "Voorkeur"}: ${escapeHtml(formatDate(workout.preferredDate, { weekday: "long", day: "numeric", month: "short" }))}</span>` : ""}
          <span class="card-structure">${escapeHtml(compactWorkoutStructure(workout))}</span>
          ${workout.confidence ? renderSemanticBadge("CONFIDENCE") : ""}
          ${renderRecordedResult(workout, true)}
          ${workout.labels.includes("OPTIONEEL") ? '<span class="semantic-badge">Optioneel</span>' : ""}
        </button>
        <div class="training-start-actions">
          <button class="text-action" type="button" data-open-garmin="${workout.workoutId}">${icon(workout.activityType === "bike" ? "bike" : "route")}${workout.activityType === "bike" ? "Fietsopbouw" : workout.activityType === "race" ? "Garmin-raceplan" : "Garmin"}</button>
          ${workout.treadmillAvailable ? `<button class="text-action" type="button" data-open-treadmill="${workout.workoutId}">${icon("play")} Loopband</button>` : ""}
        </div>
        <div class="completion-row">
          <button class="card-details-action" type="button" data-open-workout="${workout.workoutId}">Details ${icon("chevron-right")}</button>
          <button class="completion-button ${completed ? "is-completed" : ""}" type="button" data-toggle-complete="${workout.workoutId}" aria-pressed="${completed}" ${workout.reportedExecution ? "disabled" : ""}>
            ${icon(completed ? "circle-check" : "circle")}${completed ? completionLabel(workout.workoutId) : "Voltooien"}
          </button>
        </div>
      </article>`;
  }

  function renderTrainingDetails(workout) {
    const mode = workoutExecutionMode(workout);
    const detailContext = [...new Set([
      `Week ${workout.weekNumber}`,
      workoutSequenceLabel(workout),
      workout.phaseName,
    ].filter(Boolean))].join(" · ");
    return `
      <p class="detail-context">${escapeHtml(detailContext)}</p>
      <div class="detail-metadata">${escapeHtml(workout.locationStatus || "Outdoor / Garmin")}${workout.recoveryLabel ? ` · ${escapeHtml(workout.recoveryLabel)}` : ""}</div>
      ${workout.distanceEstimate ? `<p class="detail-context">${escapeHtml(distanceEstimateLabel(workout))}. Aanname: easy 6:00–6:30/km (middenvoorbeeld 6:15), MP 5:24–5:30/km; geen tempovoorschrift voor easy.</p>` : ""}
      ${workout.preferredDate ? `<p class="detail-context">${workout.activityType === "race" ? "Racedatum" : "Voorkeursdatum"}: ${escapeHtml(formatDate(workout.preferredDate, { weekday: "long", day: "numeric", month: "long" }))}${workout.activityType === "race" ? "" : " · verschuiven kan met de spreidingsregels"}</p>` : ""}
      ${renderRecordedResult(workout)}
      ${appData.completedSessions[workout.workoutId]?.carriedFromWorkoutId ? `<p class="garmin-reference-note">Deze ongewijzigde sessie is al uitgevoerd onder ${escapeHtml(appData.completedSessions[workout.workoutId].carriedFromWorkoutId)}. De oorspronkelijke registratie blijft in Data → Behouden geschiedenis; dit is geen nieuwe V9.2-uitvoering.</p>` : ""}
      ${renderExecutionModeSwitch(workout, mode)}
      ${workout.garmin ? (mode === "garmin" ? renderGarminSetup(workout) : renderTreadmillDetails(workout)) : workout.outdoorSimpleMode ? renderOutdoorSimpleOverview(workout) : `<div class="detail-section"><h3>Exacte opbouw</h3><div class="segment-groups">${(workout.groups || []).map(renderSegmentGroup).join("")}</div></div>`}
      ${workout.treadmillAvailable ? `<button class="treadmill-button" type="button" data-open-treadmill="${workout.workoutId}">${icon("play")} Loopbandmodus</button>` : ""}
      <details class="info-accordion training-background"><summary><span>Doel, herstel en achtergrond</span><span aria-hidden="true">+</span></summary><div>
      <div class="detail-section"><h3>Doel en belasting</h3><p><strong>Trainingsdoel:</strong> ${escapeHtml(workout.goal)}</p><p><strong>Gewenste RPE:</strong> ${escapeHtml(workout.targetRpe)}</p><p><strong>Mentale doelstelling:</strong> ${escapeHtml(workout.mentalGoal || "De training gecontroleerd uitvoeren zoals beschreven.")}</p></div>
      ${workout.rehearsal ? `<div class="detail-section"><h3>Generale repetitie</h3><p>${escapeHtml(workout.rehearsal)}</p></div>` : ""}
      <div class="detail-section rationale-section"><h3>Waarom deze training hier staat</h3><p>${escapeHtml(workout.rationale || workout.goal)}</p></div>
      <div class="detail-section"><h3>Planning en herstel</h3><p><strong>${escapeHtml(workout.recoveryLabel || "Herstel volgens weekbelasting")}:</strong> ${escapeHtml(workout.recoveryAdvice || workout.orderWarning || "Bewaak herstel tussen de sessies.")}</p>${workout.orderWarning ? `<p>${escapeHtml(workout.orderWarning)}</p>` : ""}</div>
      <div class="detail-section"><h3>Locatie en buitenvariant</h3><p><strong>${escapeHtml(workout.locationStatus || "Loopband of buiten")}.</strong> ${escapeHtml(workout.outsideVariant || "Volg buiten dezelfde duur en inspanning.")}</p></div>
      ${workout.shoes ? `<div class="detail-section shoe-section"><h3>Schoenen</h3><p>${escapeHtml(workout.shoes)}</p></div>` : ""}
      ${(workout.detailsSections || []).map((section) => `<div class="detail-section source-detail"><h3>${escapeHtml(section.title)}</h3><ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`).join("")}
      </div></details>
      ${workout.nutrition ? `<details class="info-accordion"><summary><span>Voeding voor deze training</span>${icon("chevron-down")}</summary><div><p>${escapeHtml(workout.nutrition)}</p><button class="text-action" type="button" data-view="nutrition">Voeding & racevoorraad ${icon("chevron-right")}</button></div></details>` : ""}
      ${workout.durationCheck ? `<p class="detail-duration-check">${escapeHtml(workout.durationCheck)}</p>` : ""}
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
            <span>${Number.isFinite(Number(segment.speedKmh)) && Number(segment.speedKmh) > 0 ? `${segment.speedRangeKmh ? `${formatNumber(segment.speedRangeKmh[0])}–${formatNumber(segment.speedRangeKmh[1])}` : formatNumber(segment.speedKmh)} km/u` : "zelf sturen"}</span>
            <span>${segment.inclinePercent == null ? "Buiten" : `${formatNumber(segment.inclinePercent)}%`}</span>
          </div>`).join("")}
        ${group.omitRecoveryAfterLast ? `<p class="segment-footnote">Na de laatste herhaling vervalt het herstelstuk, zoals in het schema beschreven.</p>` : ""}
        ${(group.segments || []).some((segment) => segment.instruction) ? `<p class="segment-footnote">${escapeHtml(group.segments.map((segment) => segment.instruction).filter(Boolean).join(" "))}</p>` : ""}
      </section>`;
  }

  function treadmillSpeedLabel(block) {
    if (Array.isArray(block?.speedRangeKmh)) return `${formatNumber(block.speedRangeKmh[0])}–${formatNumber(block.speedRangeKmh[1])} km/u`;
    return Number(block?.speedKmh) > 0 ? `${formatNumber(block.speedKmh)} km/u` : "Praattempo / RPE";
  }

  function treadmillInclineLabel(block) {
    if (block?.inclinePercent == null) return "Buiten";
    if (Number(block.inclinePercent) === 0.5) return "½";
    return `${formatNumber(block.inclinePercent)}%`;
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
    const numericTimeline = timeline.hasCompleteTiming && timeline.blocks.every((block) => (Number(block.speedKmh) > 0 || block.speedMode === "self-paced") && block.inclinePercent != null && Number.isFinite(Number(block.inclinePercent)));
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
      <div class="treadmill-block-speed"><span>Snelheid</span><strong class="${Number(block.speedKmh) > 0 ? "" : "is-text"}">${escapeHtml(treadmillSpeedLabel(block))}</strong></div>
      <div class="treadmill-block-incline"><span>Helling</span><strong class="${block.inclinePercent == null ? "is-text" : ""}">${escapeHtml(treadmillInclineLabel(block))}</strong></div>
    </article>`;
  }

  function isTreadmillFocusMode(workout) {
    return treadmillTimer.workoutId === workout?.workoutId && ["running", "paused"].includes(treadmillTimer.status);
  }

  function focusSpeedValue(block) {
    if (Array.isArray(block?.speedRangeKmh)) return `${formatNumber(block.speedRangeKmh[0])}–${formatNumber(block.speedRangeKmh[1])}`;
    return Number(block?.speedKmh) > 0 ? formatNumber(block.speedKmh) : "Praattempo";
  }

  function focusInclineValue(block) {
    return block?.inclinePercent == null ? "Buiten" : Number(block.inclinePercent) === 0.5 ? "½" : formatNumber(block.inclinePercent);
  }

  function focusInclineDescription(block) {
    return block?.inclinePercent == null ? "Buitenwedstrijd, geen loopbandhelling" : `Helling ${formatNumber(block.inclinePercent)} procent`;
  }

  function renderFocusIncline(block, current = false) {
    const outside = block?.inclinePercent == null;
    return `<strong class="${outside ? "is-text" : ""}" role="img" aria-label="${escapeAttr(focusInclineDescription(block))}" ${current ? "data-focus-current-incline" : ""}><b aria-hidden="true" ${current ? "data-focus-incline-value" : ""}>${escapeHtml(focusInclineValue(block))}</b><small aria-hidden="true" ${current ? "data-focus-incline-unit" : ""} ${outside || Number(block.inclinePercent) === 0.5 ? "hidden" : ""}>%</small></strong>`;
  }

  function focusTimingState(snapshot) {
    return {
      switchSoon: Boolean(snapshot.next && snapshot.remainingSeconds <= 30),
      finalCountdown: Boolean(snapshot.next && snapshot.remainingSeconds <= 5),
    };
  }

  function renderFocusProgress(timeline, snapshot) {
    return `<div class="focus-progress" aria-label="Blok ${snapshot.currentIndex + 1} van ${timeline.blocks.length}">
      <div class="focus-progress-heading"><span>Trainingsvoortgang</span><strong data-focus-block-progress>Blok ${snapshot.currentIndex + 1} van ${timeline.blocks.length}</strong></div>
      <div class="focus-progress-segments" style="--focus-segment-count:${timeline.blocks.length}">
        ${timeline.blocks.map((block) => `<i data-focus-progress-index="${block.index}" class="${block.index < snapshot.currentIndex ? "is-completed" : block.index === snapshot.currentIndex ? "is-current" : "is-upcoming"}" aria-hidden="true"></i>`).join("")}
      </div>
    </div>`;
  }

  function renderFocusCockpit(workout, timeline, snapshot) {
    const current = snapshot.current || timeline.blocks.at(-1);
    const { switchSoon, finalCountdown } = focusTimingState(snapshot);
    return `<section class="focus-cockpit${switchSoon ? " is-switch-soon" : ""}${finalCountdown ? " is-final-countdown" : ""}${treadmillTimer.status === "paused" ? " is-paused" : ""}" data-focus-cockpit aria-label="Actieve loopbandcockpit">
      <div class="focus-countdown">
        <div class="focus-countdown-label"><span>Nog in dit blok</span><em>${treadmillTimer.status === "paused" ? "Gepauzeerd" : "Actief"}</em></div>
        <strong data-block-remaining>${formatStopwatch(snapshot.remainingSeconds)}</strong>
        <small data-focus-current-context>${escapeHtml(current?.blockName || "Training")} · Blok ${snapshot.currentIndex + 1} van ${timeline.blocks.length}</small>
      </div>
      <div class="focus-now-grid">
        <div class="focus-speed"><span>Nu · snelheid</span><strong><b data-focus-current-speed class="${Number(current?.speedKmh) > 0 ? "" : "is-self-paced"}">${escapeHtml(focusSpeedValue(current))}</b><small data-focus-speed-unit>${Number(current?.speedKmh) > 0 ? "km/u" : "RPE 2–3"}</small></strong></div>
        <div class="focus-incline"><span>Helling</span>${renderFocusIncline(current, true)}</div>
      </div>
      ${renderFocusProgress(timeline, snapshot)}
      <div class="focus-total-time"><span><strong data-timer-elapsed>${formatStopwatch(snapshot.elapsedSeconds)}</strong> verstreken</span><span><strong data-focus-total-remaining>${formatStopwatch(snapshot.totalRemainingSeconds)}</strong> resterend</span></div>
      ${renderSwitchWarning(workout, timeline, snapshot.elapsedSeconds)}
      <div class="timer-controls focus-controls">
        ${treadmillTimer.status === "paused" ? `<button type="button" data-timer-resume>Hervat</button>` : `<button type="button" data-timer-pause>Pauze</button>`}
        <button class="is-secondary" type="button" data-timer-stop>Stop timer</button>
      </div>
    </section>`;
  }

  function renderFocusQueueBlock(block, snapshot) {
    const completed = block.index < snapshot.currentIndex;
    const active = block.index === snapshot.currentIndex;
    return `<article class="focus-queue-item${completed ? " is-completed" : ""}${active ? " is-current" : ""}" data-focus-queue-index="${block.index}" ${active ? 'aria-current="step"' : ""}>
      <div class="focus-queue-time">
        <span data-focus-queue-status>${active ? "Actief" : completed ? "Voltooid" : block.blockName}</span>
        <strong>${escapeHtml(block.timeRangeLabel)}</strong>
        <small>${escapeHtml(block.blockName)}</small>
      </div>
      <div class="focus-queue-speed"><span>Snelheid</span><strong><b class="${Number(block.speedKmh) > 0 ? "" : "is-self-paced"}">${escapeHtml(focusSpeedValue(block))}</b><small>${Number(block.speedKmh) > 0 ? "km/u" : "RPE 2–3"}</small></strong></div>
      <div class="focus-queue-incline"><span>Helling</span>${renderFocusIncline(block)}</div>
    </article>`;
  }

  function renderFocusQueue(timeline, snapshot) {
    const completedCount = snapshot.completedCount;
    return `<section class="focus-queue-section" aria-labelledby="focus-queue-title">
      <div class="focus-queue-heading"><div><span>Training</span><h2 id="focus-queue-title">Resterende blokken</h2></div><small>Scroll om vooruit te kijken</small></div>
      <button type="button" class="focus-completed-toggle" data-toggle-focus-completed ${completedCount ? "" : "hidden"} aria-expanded="${state.focusCompletedExpanded}">
        <span data-focus-completed-summary>✓ ${completedCount} ${completedCount === 1 ? "blok" : "blokken"} voltooid</span><i aria-hidden="true">${state.focusCompletedExpanded ? "−" : "+"}</i>
      </button>
      <div class="focus-queue${state.focusCompletedExpanded ? " show-completed" : ""}" data-focus-queue>
        ${timeline.blocks.map((block) => renderFocusQueueBlock(block, snapshot)).join("")}
      </div>
    </section>`;
  }

  function renderTreadmillFocusMode(workout, timeline) {
    const snapshot = timerSnapshot(timeline);
    state.focusLastActiveIndex = snapshot.currentIndex;
    focusAutoScrolling = true;
    if (focusAutoScrollReleaseTimer) window.clearTimeout?.(focusAutoScrollReleaseTimer);
    focusAutoScrollReleaseTimer = window.setTimeout?.(() => { focusAutoScrolling = false; }, 120) || null;
    if (!focusAutoScrollReleaseTimer) focusAutoScrolling = false;
    return `<section class="treadmill-view focus-mode" data-treadmill-view="${workout.workoutId}" data-focus-mode>
      ${renderFocusCockpit(workout, timeline, snapshot)}
      ${renderFocusQueue(timeline, snapshot)}
      <button type="button" class="focus-return-now${state.focusQueueUserBrowsing ? " is-visible" : ""}" data-focus-return-now ${state.focusQueueUserBrowsing ? "" : "hidden"}>Terug naar NU</button>
      <div class="focus-secondary-controls">
        ${renderNotificationToggle(workout)}
        ${state.notificationsPanelOpen ? renderNotificationSettings(workout, timeline) : ""}
      </div>
    </section>`;
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
    if (isTreadmillFocusMode(workout)) {
      document.body?.classList?.toggle("treadmill-focus-active", true);
      app.innerHTML = renderTreadmillFocusMode(workout, timeline);
      return;
    }
    document.body?.classList?.toggle("treadmill-focus-active", false);
    const snapshot = treadmillTimer.workoutId === workout.workoutId && treadmillTimer.status !== "idle" ? timerSnapshot(timeline) : { currentIndex: -1 };
    const modeLabel = trainingModeLabel(workout);
    app.innerHTML = `<section class="treadmill-view" data-treadmill-view="${workout.workoutId}">
      <header class="treadmill-header">
        <button class="treadmill-back" type="button" data-close-treadmill>← Terug</button>
        <div><span>${escapeHtml(modeLabel)} · Week ${workout.weekNumber} · ${escapeHtml(workoutSequenceLabel(workout))}</span><h1>${escapeHtml(capitalize(workout.title))}</h1><p>${escapeHtml(timeline.totalLabel)} totaal · ${timeline.blocks.length} blokken</p></div>
      </header>
      ${workout.recoveryStatus === "required" ? `<div class="treadmill-recovery-warning"><strong>${escapeHtml(workout.recoveryLabel)}</strong><span>${escapeHtml(workout.recoveryAdvice)}</span></div>` : ""}
      ${renderTreadmillTimer(workout, timeline)}
      ${renderNotificationToggle(workout)}
      ${state.notificationsPanelOpen ? renderNotificationSettings(workout, timeline) : ""}
      <section class="treadmill-timeline" aria-label="Loopbandblokken">
        ${timeline.blocks.map((block) => renderTreadmillBlock(block, snapshot.currentIndex)).join("")}
      </section>
      <p class="treadmill-note">Dezelfde blokduren als Garmin. Easy op praattempo/RPE 2–3, zonder vaste snelheid. MP praktisch 11,0 km/u, gecontroleerd rond RPE 4–5. Starthelling 0%.</p>
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
    state.focusQueueUserBrowsing = false;
    state.focusCompletedExpanded = false;
    state.focusLastActiveIndex = 0;
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
    state.focusQueueUserBrowsing = false;
    state.focusCompletedExpanded = false;
    state.focusLastActiveIndex = -1;
    renderTreadmillMode();
    cancelPushSession(sessionToCancel);
  }

  function setFocusQueueBrowsing(active) {
    state.focusQueueUserBrowsing = Boolean(active);
    const button = app.querySelector?.("[data-focus-return-now]");
    if (!button) return;
    button.hidden = !state.focusQueueUserBrowsing;
    button.classList?.toggle("is-visible", state.focusQueueUserBrowsing);
  }

  function focusActiveRowIsVisible(activeRect, cockpitRect, viewportHeight) {
    if (!activeRect || !cockpitRect || !Number.isFinite(Number(viewportHeight))) return true;
    const topLimit = Number(cockpitRect.bottom) + 8;
    const bottomLimit = Number(viewportHeight) - 12;
    return Number(activeRect.top) >= topLimit && Number(activeRect.bottom) <= bottomLimit;
  }

  function syncFocusQueueBrowsingFromViewport() {
    if (focusAutoScrolling || state.view !== VIEWS.TREADMILL || !["running", "paused"].includes(treadmillTimer.status)) return;
    const activeRow = app.querySelector?.("[data-focus-queue-index].is-current");
    const cockpit = app.querySelector?.("[data-focus-cockpit]");
    if (!activeRow || !cockpit) return setFocusQueueBrowsing(false);
    const activeRect = activeRow.getBoundingClientRect?.();
    const cockpitRect = cockpit.getBoundingClientRect?.();
    setFocusQueueBrowsing(!focusActiveRowIsVisible(activeRect, cockpitRect, window.innerHeight || document.documentElement?.clientHeight || 0));
  }

  function scrollFocusQueueToCurrent(behavior = "smooth") {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) behavior = "auto";
    const activeRow = app.querySelector?.("[data-focus-queue-index].is-current");
    if (!activeRow) {
      setFocusQueueBrowsing(false);
      return;
    }
    setFocusQueueBrowsing(false);
    app.querySelectorAll?.(".focus-queue-item.keep-visible").forEach((row) => row.classList.remove("keep-visible"));
    const completedToggle = app.querySelector?.("[data-toggle-focus-completed]");
    if (completedToggle && state.focusLastActiveIndex > 0) completedToggle.hidden = false;
    focusAutoScrolling = true;
    const cockpit = app.querySelector?.("[data-focus-cockpit]");
    const rowTop = activeRow.getBoundingClientRect?.().top;
    const cockpitBottom = cockpit?.getBoundingClientRect?.().bottom || 0;
    if (Number.isFinite(rowTop) && typeof window.scrollTo === "function") {
      const currentScroll = Number(window.scrollY || window.pageYOffset || 0);
      window.scrollTo({ top: Math.max(0, currentScroll + rowTop - cockpitBottom - 10), behavior });
    } else {
      activeRow.scrollIntoView?.({ block: "start", behavior });
    }
    if (focusAutoScrollReleaseTimer) window.clearTimeout?.(focusAutoScrollReleaseTimer);
    focusAutoScrollReleaseTimer = window.setTimeout?.(() => {
      focusAutoScrolling = false;
      syncFocusQueueBrowsingFromViewport();
    }, behavior === "smooth" ? 550 : 50) || null;
    if (!focusAutoScrollReleaseTimer) focusAutoScrolling = false;
  }

  function updateFocusQueue(snapshot, timeline) {
    app.querySelectorAll?.("[data-focus-queue-index]").forEach((row) => {
      const index = Number(row.dataset.focusQueueIndex);
      const completed = index < snapshot.currentIndex;
      const active = index === snapshot.currentIndex;
      if (completed && state.focusQueueUserBrowsing && !row.classList?.contains("is-completed")) row.classList?.toggle("keep-visible", true);
      row.classList?.toggle("is-completed", completed);
      row.classList?.toggle("is-current", active);
      if (active) row.setAttribute?.("aria-current", "step");
      else row.removeAttribute?.("aria-current");
      const status = row.querySelector?.("[data-focus-queue-status]");
      if (status) status.textContent = active ? "Actief" : completed ? "Voltooid" : timeline.blocks[index]?.blockName || "Blok";
    });
    app.querySelectorAll?.("[data-focus-progress-index]").forEach((segment) => {
      const index = Number(segment.dataset.focusProgressIndex);
      segment.classList?.toggle("is-completed", index < snapshot.currentIndex);
      segment.classList?.toggle("is-current", index === snapshot.currentIndex);
      segment.classList?.toggle("is-upcoming", index > snapshot.currentIndex);
    });
    const completedToggle = app.querySelector?.("[data-toggle-focus-completed]");
    // Do not insert a new row above the user's reading position during a switch.
    if (completedToggle) completedToggle.hidden = snapshot.completedCount === 0 || (state.focusQueueUserBrowsing && completedToggle.hidden);
    const completedSummary = app.querySelector?.("[data-focus-completed-summary]");
    if (completedSummary) completedSummary.textContent = `✓ ${snapshot.completedCount} ${snapshot.completedCount === 1 ? "blok" : "blokken"} voltooid`;

    if (snapshot.currentIndex !== state.focusLastActiveIndex) {
      state.focusLastActiveIndex = snapshot.currentIndex;
      if (!state.focusQueueUserBrowsing) scrollFocusQueueToCurrent();
      else setFocusQueueBrowsing(true);
    }
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
      state.focusQueueUserBrowsing = false;
      state.focusCompletedExpanded = false;
      state.focusLastActiveIndex = -1;
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
    const cockpit = app.querySelector?.("[data-focus-cockpit]");
    if (cockpit) {
      const { switchSoon, finalCountdown } = focusTimingState(snapshot);
      cockpit.classList?.toggle("is-switch-soon", switchSoon);
      cockpit.classList?.toggle("is-final-countdown", finalCountdown);
      setText("[data-block-remaining]", formatStopwatch(snapshot.remainingSeconds));
      setText("[data-focus-current-speed]", focusSpeedValue(snapshot.current));
      setText("[data-focus-speed-unit]", Number(snapshot.current?.speedKmh) > 0 ? "km/u" : "RPE 2–3");
      app.querySelector("[data-focus-current-speed]")?.classList.toggle("is-self-paced", !(Number(snapshot.current?.speedKmh) > 0));
      setText("[data-focus-incline-value]", focusInclineValue(snapshot.current));
      const incline = app.querySelector?.("[data-focus-current-incline]");
      incline?.setAttribute("aria-label", focusInclineDescription(snapshot.current));
      incline?.classList?.toggle("is-text", snapshot.current?.inclinePercent == null);
      const inclineUnit = app.querySelector?.("[data-focus-incline-unit]");
      if (inclineUnit) inclineUnit.hidden = snapshot.current?.inclinePercent == null || Number(snapshot.current.inclinePercent) === 0.5;
      setText("[data-focus-current-context]", `${snapshot.current?.blockName || "Training"} · Blok ${snapshot.currentIndex + 1} van ${timeline.blocks.length}`);
      setText("[data-focus-block-progress]", `Blok ${snapshot.currentIndex + 1} van ${timeline.blocks.length}`);
      setText("[data-timer-elapsed]", formatStopwatch(snapshot.elapsedSeconds));
      setText("[data-focus-total-remaining]", formatStopwatch(snapshot.totalRemainingSeconds));
      updateFocusQueue(snapshot, timeline);
    } else {
    setText("[data-timer-elapsed]", formatStopwatch(snapshot.elapsedSeconds));
    setText("[data-current-speed]", treadmillSpeedLabel(snapshot.current));
    setText("[data-current-incline]", `${treadmillInclineLabel(snapshot.current)} helling`);
    setText("[data-block-remaining]", formatStopwatch(snapshot.remainingSeconds));
    setText("[data-current-block]", snapshot.current?.blockName || "Training voltooid");
    setText("[data-next-block]", snapshot.next ? `${treadmillSpeedLabel(snapshot.next)} · ${treadmillInclineLabel(snapshot.next)}` : "Finish");
    }
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
    return workout.category === "wedstrijd" || workout.confidence || (workout.labels || []).some((label) => /CONFIDENCE|RACE/.test(label));
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
    const calculated = Number(model.calculateWorkoutDistanceKm(workout));
    return Number.isFinite(calculated) && calculated >= 0 ? calculated : 0;
  }

  function workoutDurationSeconds(workout) {
    return Number(workout?.totalPlannedSeconds || 0);
  }

  function getWeekPlannedLabel(week) {
    return joinText([`${formatNumber(week.plannedSessionMinutes, 0)} min loopsessies`,
      week.plannedWalkMinutes ? `${formatNumber(week.plannedRunMinutes, 0)} min lopen + ${formatNumber(week.plannedWalkMinutes, 0)} min wandelen` : "",
      week.plannedBikeMinutes ? `${formatNumber(week.plannedBikeMinutes, 0)} min fiets` : "",
      `${week.plannedMpMinutes} min MP`, week.includesMarathon ? "marathon apart" : ""], "");
  }

  function distanceEstimateLabel(item) {
    const estimate = item?.distanceEstimate;
    return estimate ? `Schatting ${formatNumber(estimate.min)}–${formatNumber(estimate.max)} km · midden ${formatNumber(estimate.middle)} km bij easy 6:15/km · geen afstandsdoel${item.includesMarathon ? " · race apart" : ""}` : "";
  }

  function renderGoalSummary() {
    return `<section class="target-summary"><div><span>A-doel</span><strong>${escapeHtml(plan.config.targetTime)}</strong></div><div><span>B-doel · PR</span><strong>&lt;3:55:50</strong></div><div><span>C-doel</span><strong>${escapeHtml(plan.config.fallbackTarget)}</strong></div><div><span>Doeltempo</span><strong>${escapeHtml(plan.config.targetPace)}</strong></div></section>`;
  }

  function renderMarathonOverview() {
    const regular = regularProgramWorkouts();
    const completed = regular.filter((workout) => isCompleted(workout.workoutId)).length;
    const percent = regular.length ? Math.round(completed / regular.length * 100) : 0;
    const days = daysUntilMarathon();
    const currentWeek = weeks[currentPlanWeekIndex()];
    const next = weeks.filter((week) => week.weekNumber >= currentWeek.weekNumber).flatMap(orderedWorkouts).find((workout) => !isCompleted(workout.workoutId));
    const checkpointRows = plan.guidance.sections[5].blocks.find((block) => block.type === "table").rows;
    const checkpoint = checkpointRows[Math.min(5, currentWeek.weekNumber - 41)];
    app.innerHTML = `<header class="page-header"><span>FINAL V9.2 · 3:50</span><h1>Marathonoverzicht</h1><p>Zondag 22 november 2026 · 42,195 km</p></header>
      ${renderGoalSummary()}
      <section class="countdown-card"><strong>${days}</strong><span>dagen te gaan</span><p>${Math.floor(days / 7)} weken en ${days % 7} dagen</p></section>
      <section class="program-progress"><div><h2>Trainingsvoortgang</h2><strong>${percent}%</strong></div><p>${completed} van ${regular.length} trainingen afgevinkt · ${regular.length - completed} te gaan + marathon</p><div class="progress-track" role="progressbar" aria-label="Programmavoortgang" aria-valuemin="0" aria-valuemax="${regular.length}" aria-valuenow="${completed}"><span style="width:${percent}%"></span></div><small>Afvinken geeft geen garantie over herstel of wedstrijdgereedheid.</small></section>
      ${next ? `<section class="today-up-next"><span>Volgende training vanaf deze week</span><button type="button" data-open-workout="${next.workoutId}"><span><strong>Week ${next.weekNumber} · ${workoutSequenceLabel(next)}</strong><small>${escapeHtml(next.title)}</small></span>${icon("chevron-right")}</button></section>` : ""}
      <section class="dashboard-checkpoint"><h2>Volgend checkpoint</h2><p>${escapeHtml(checkpoint[0])}</p><p>${escapeHtml(checkpoint[1])}</p><button class="text-action" type="button" data-view="info">Checkpoints & raceplan ${icon("chevron-right")}</button></section>
      <p class="today-planning-note">3:50 is een ambitie, geen voorspelling. Herstel en buitenbelastbaarheid blijven leidend.</p>`;
  }

  function openWorkout(workoutId, mode) {
    const workout = workoutById(workoutId);
    if (!workout) return;
    if (state.view !== VIEWS.DETAIL) state.detailReturnView = state.view;
    state.detailWorkoutId = workoutId;
    if (mode) state.workoutModes.set(workoutId, mode);
    setView(VIEWS.DETAIL);
  }

  function renderWorkoutDetail() {
    const workout = workoutById(state.detailWorkoutId);
    if (!workout) return renderToday();
    app.innerHTML = `<button class="detail-back text-action" type="button" data-close-workout>${icon("chevron-left")} Terug</button>
      <header class="page-header"><span>Week ${workout.weekNumber} · ${workoutSequenceLabel(workout)}</span><h1>${escapeHtml(workout.title)}</h1><p>${escapeHtml(workout.totalPlannedLabel)} · ${escapeHtml(workout.targetRpe)}</p></header>
      <section class="training-detail-page">${renderTrainingDetails(workout)}</section>
      <button class="completion-button detail-completion ${isCompleted(workout.workoutId) ? "is-completed" : ""}" type="button" data-toggle-complete="${workout.workoutId}" aria-pressed="${isCompleted(workout.workoutId)}" ${workout.reportedExecution ? "disabled" : ""}>${icon(isCompleted(workout.workoutId) ? "circle-check" : "circle")}${isCompleted(workout.workoutId) ? completionLabel(workout.workoutId) : "Training voltooien"}</button>`;
  }

  function renderGuideBlocks(blocks) {
    return (blocks || []).map((block) => {
      if (block.type === "heading") return `<h3>${escapeHtml(block.text)}</h3>`;
      if (block.type === "table") return `<div class="guide-rows">${block.rows.map((row) => `<section class="guide-row"><h3>${escapeHtml(row[0])}</h3><dl>${row.slice(1).map((cell, index) => `<div><dt>${escapeHtml(block.headers[index + 1])}</dt><dd>${escapeHtml(cell)}</dd></div>`).join("")}</dl></section>`).join("")}</div>`;
      return `<p class="${block.type === "item" ? "guide-item" : ""}">${escapeHtml(block.text)}</p>`;
    }).join("");
  }

  function renderNutrition() {
    const section = plan.guidance.sections[6];
    app.innerHTML = `<header class="page-header"><span>FINAL V9.2</span><h1>Voeding & herstel</h1><p>Dezelfde geoefende producten, stapsgewijze inname. Geen dieet of extra registratie.</p></header><section class="reference-content">${renderGuideBlocks(section.blocks)}</section>`;
  }

  function renderMore() {
    const links = [[VIEWS.MARATHON, "Marathonoverzicht", "Countdown, voortgang en volgende training", "route"], [VIEWS.PHASES, "Fases", "Herstel, opbouw en taper", "layers"], [VIEWS.NUTRITION, "Voeding & herstel", "Long runs, racevoorraad en vertrouwde routine", "info"], [VIEWS.INFO, "Informatie", "Garmin, checkpoints en raceplan", "info"], [VIEWS.DATA, "Data & app", "Backup, diagnose en app bijwerken", "layers"]];
    app.innerHTML = `<header class="page-header"><span>Marathon 3:50</span><h1>Meer</h1></header><section class="more-list">${links.map(([view, label, detail, symbol]) => `<button type="button" data-view="${view}">${icon(symbol)}<span><strong>${label}</strong><small>${detail}</small></span>${icon("chevron-right")}</button>`).join("")}</section><footer class="app-version">Versie ${APP_VERSION} · FINAL V9.2</footer>`;
  }

  function getStorageDiagnostics() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const stored = raw ? JSON.parse(raw) : null;
      if (stored != null && !isObject(stored)) throw new Error("De opgeslagen JSON is geen app-object.");
      const count = (value) => isObject(value) ? Object.keys(value).length : 0;
      return { status: !stored || (!count(stored.workoutLogs) && !count(stored.completedSessions)) ? "leeg" : "gezond", raw, stored,
        version: stored?.appDataVersion || APP_DATA_VERSION, updatedAt: stored?.updatedAt || "Nog niet opgeslagen", completions: count(stored?.completedSessions), history: count(stored?.legacyData), size: new Blob([raw || ""]).size };
    } catch (error) { return { status: "Niet leesbaar", error: error.message }; }
  }

  function exportAppData() {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw || JSON.stringify(appData, null, 2);
  }

  function downloadBackup(raw, prefix = "marathon-training-backup") {
    const url = URL.createObjectURL(new Blob([raw], { type: "application/json" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `${prefix}-${localDateIso()}.json`;
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function prepareImport(text) {
    try {
      const raw = JSON.parse(text);
      if (!isObject(raw) || !isObject(raw.workoutLogs) || !isObject(raw.completedSessions) || Number(raw.appDataVersion) > APP_DATA_VERSION) throw new Error("Geen ondersteunde trainingsbackup. Kies een export van deze app.");
      if (raw.testResults != null && !isObject(raw.testResults)) throw new Error("Testresultaten moeten een object zijn.");
      if (raw.nutritionLogs != null && !isObject(raw.nutritionLogs)) throw new Error("Voedingsregistraties moeten een object zijn.");
      state.pendingImport = migrateAppData(raw);
      state.dataDialog = "confirm-import";
      state.dataMessage = "";
    } catch (error) { state.pendingImport = null; state.dataMessage = `Import geweigerd: ${error.message}`; }
    renderData();
  }

  function confirmImport() {
    if (!state.pendingImport) return;
    const previous = appData;
    const blocked = storageWriteBlocked;
    appData = state.pendingImport;
    storageWriteBlocked = false;
    if (!saveAppData()) {
      appData = previous;
      storageWriteBlocked = blocked;
      state.dataMessage = "Import niet opgeslagen. De bestaande gegevens blijven behouden.";
    } else {
      state.dataMessage = "Backup teruggezet. Oudere schemaregistraties staan in de geschiedenis.";
      refreshResolvedPlan();
    }
    state.pendingImport = null;
    state.dataDialog = null;
    renderData();
  }

  function renderData() {
    const diagnostics = getStorageDiagnostics();
    const date = diagnostics.updatedAt && diagnostics.updatedAt !== "Nog niet opgeslagen" ? new Date(diagnostics.updatedAt).toLocaleString("nl-NL") : "Nog niet opgeslagen";
    const button = (action, label) => `<button class="text-action" type="button" data-data-action="${action}">${label} ${icon("chevron-right")}</button>`;
    let dialog = "";
    if (state.dataDialog === "paste") dialog = `<h2>Backup terugzetten</h2><label for="backup-json">Plak backup-JSON</label><textarea id="backup-json" rows="8" spellcheck="false" autocapitalize="off"></textarea>${button("prepare-import", "Controleer backup")}`;
    if (state.dataDialog === "confirm-import") dialog = `<h2>Backup importeren?</h2><p>Dit vervangt je huidige lokale trainingsdata door de gekozen backup. Maak eventueel eerst een export van je huidige data.</p><p>Dataversie ${APP_DATA_VERSION} · ${Object.keys(state.pendingImport.completedSessions).length} afgevinkte trainingen · geschiedenis wordt behouden uit de backup.</p>${button("confirm-import", "Backup importeren")}`;
    if (state.dataDialog === "copy") dialog = `<h2>Backup als tekst</h2><textarea rows="10" readonly aria-label="Volledige backup">${escapeHtml(diagnostics.raw || JSON.stringify(appData))}</textarea><p>${state.dataMessage || "Selecteer de tekst om de backup te kopiëren."}</p>`;
    if (state.dataDialog === "check") dialog = `<h2>App-diagnose</h2><dl class="data-diagnostics"><div><dt>App-versie</dt><dd>${APP_VERSION}</dd></div><div><dt>Storage-key</dt><dd>${STORAGE_KEY}</dd></div><div><dt>URL</dt><dd>${escapeHtml(window.location.href)}</dd></div><div><dt>Modus</dt><dd>${isStandaloneMode() ? "Beginscherm-app" : "Safari/browser"}</dd></div><div><dt>Status</dt><dd>${escapeHtml(diagnostics.status)}</dd></div><div><dt>Dataversie</dt><dd>${diagnostics.version || "onbekend"}</dd></div><div><dt>Laatst opgeslagen</dt><dd>${escapeHtml(date)}</dd></div><div><dt>Service worker</dt><dd>${navigator.serviceWorker?.controller ? "Actief" : "Nog geen actieve controller"}</dd></div></dl>${diagnostics.error ? `<p>${escapeHtml(diagnostics.error)}</p>` : ""}`;
    app.innerHTML = `<header class="page-header"><span>Op dit apparaat</span><h1>Data & app</h1><p>Garmin bewaart je activiteiten. De app bewaart afvinken, instellingen en je eerdere registraties. Maak af en toe een backup.</p></header>
      <section class="data-section"><h2>Opslagstatus</h2><dl class="data-diagnostics"><div><dt>Status</dt><dd>${escapeHtml(diagnostics.status)}</dd></div><div><dt>Dataversie</dt><dd>${diagnostics.version || "onbekend"}</dd></div><div><dt>Afgevinkte trainingen</dt><dd>${diagnostics.completions || 0}</dd></div><div><dt>Historische archieven</dt><dd>${diagnostics.history || 0}</dd></div><div><dt>Laatst opgeslagen</dt><dd>${escapeHtml(date)}</dd></div><div><dt>Opslaggrootte</dt><dd>${formatNumber((diagnostics.size || 0) / 1024)} kB</dd></div></dl>${button("check", "App-diagnose")}</section>
      <section class="data-section"><h2>App bijwerken</h2><p>Haal de actuele app opnieuw op. Je gegevens blijven behouden.</p>${button("reload", "Herlaad app")}${button("force-reload", "Forceer nieuwste versie laden")}</section>
      <section class="data-section"><h2>Backup</h2>${button("export", "Exporteer trainingsdata")}${button("copy", "Kopieer backup als tekst")}<label class="text-action backup-file">Importeer backupbestand ${icon("chevron-right")}<input type="file" accept=".json,application/json" data-import-backup></label>${button("paste", "Plak backup-JSON")}</section>
      <details class="info-accordion"><summary><span>Behouden geschiedenis</span>${icon("chevron-down")}</summary><div><p>Eerdere activiteiten, notities, testresultaten en voedingsregistraties blijven hier bewaard. Ze vinken geen nieuwe V9.2-training af.</p><textarea rows="10" readonly aria-label="Historische gegevens">${escapeHtml(JSON.stringify(appData.legacyData, null, 2))}</textarea></div></details>
      ${state.dataMessage && !dialog ? `<p class="data-message" role="status">${escapeHtml(state.dataMessage)}</p>` : ""}
      ${dialog ? `<div class="data-dialog-overlay"><section class="data-dialog" role="dialog" aria-modal="true" aria-label="Data beheren">${dialog}<button class="text-action" type="button" data-data-action="close">${state.dataDialog === "confirm-import" ? "Annuleren" : "Sluiten"}</button>${state.dataMessage && state.dataDialog !== "copy" ? `<p role="alert">${escapeHtml(state.dataMessage)}</p>` : ""}</section></div>` : ""}
      <footer class="app-version">Versie ${APP_VERSION} · ${STORAGE_KEY}</footer>`;
    if (dialog) app.querySelector(".data-dialog textarea, .data-dialog button")?.focus?.();
  }


  function renderPlan() {
    app.innerHTML = `
      <header class="page-header"><span>FINAL V9.2 · 3:50 · Garmin / Outdoor</span><h1>Schema</h1><p>Herstel → duur en MP → taper. Geen kilometerquotum; je kiest zelf de dagen.</p></header>
      <section class="plan-list">
        ${weeks.map((week, index) => {
          const phase = plan.phases.find((item) => item.phaseId === week.phaseId);
          const longRun = week.workouts.filter((workout) => workout.category === "lange-duur").at(-1);
          const completed = week.workouts.filter((workout) => isCompleted(workout.workoutId)).length;
          const overview = week.weekPhilosophy
            ? { theme: week.weekPhilosophy.theme, goal: week.weekPhilosophy.summary }
            : { theme: phase?.shortName || week.phaseName, goal: week.focus };
          const marathonWeek = Boolean(week.includesMarathon || week.workouts.some((workout) => workout.category === "wedstrijd"));
          const runCount = week.workouts.filter((workout) => workout.activityType === "run").length;
          const bikeCount = week.workouts.filter((workout) => workout.activityType === "bike").length;
          return `<button class="plan-row${completed === week.workouts.length ? " is-completed" : ""}" type="button" data-open-week="${index}" aria-label="Open week ${week.weekNumber}">
            <span class="plan-row-top"><span class="plan-week">Week ${week.weekNumber}</span><span class="plan-status">${completed}/${week.workouts.length}<i aria-hidden="true">›</i></span></span>
            <span class="plan-main">
              <strong>${escapeHtml(overview.theme)}</strong>
              <span class="plan-volume">${escapeHtml(getWeekPlannedLabel(week))}</span>
              <small>${runCount} runs${bikeCount ? ` + ${bikeCount} fietsrit` : ""}${marathonWeek ? " + marathon apart" : ""} · eigen dagindeling</small>
              <small>Rust: ${escapeHtml(week.restDays.join(" en "))}</small>
              ${week.distanceEstimate ? `<small>${escapeHtml(distanceEstimateLabel(week))}</small>` : ""}
              <span class="plan-goal"><b>Doel</b>${escapeHtml(overview.goal)}</span>
              <small class="plan-longest">${marathonWeek ? "Marathon: 42,195 km · A-doel 3:50 · officiële finish" : `Langste loopsessie: ${formatNumber(longRun?.plannedSessionMinutes || Math.max(...week.workouts.filter((w) => w.activityType === "run").map((w) => w.plannedSessionMinutes)), 0)} min`}</small>
            </span>
          </button>`;
        }).join("")}
      </section>`;
  }

  function renderPhases() {
    const strategy = plan.guidance.surfaceStrategy;
    app.innerHTML = `<header class="page-header"><span>Opbouw FINAL V9.2 · 3:50</span><h1>Fases</h1><p>Herstelweek, daarna 95 → 120 → 140 → maximaal 160 min lange easy. Taper vanaf 9 november.</p></header>
      <section class="phase-list">${strategy ? `<article class="phase-card phase-strategy-card">
        <div><span>Trainingscontext</span>${renderSemanticBadge("Outdoor heropbouw")}</div>
        <h2>${escapeHtml(strategy.title)}</h2>
        <p>${escapeHtml(strategy.explanation)}</p>
        <dl><div><dt>Loopband</dt><dd>${escapeHtml(strategy.treadmill.join(" · "))}</dd></div><div><dt>Buiten</dt><dd>${escapeHtml(strategy.outside.join(" · "))}</dd></div></dl>
      </article>` : ""}${plan.phases.map((phase) => {
        const week = weeks.find((item) => item.phaseId === phase.phaseId);
        return `<article class="phase-card">
          <div><span>Week ${week.weekNumber}</span></div>
          <h2>${escapeHtml(phase.name)}</h2>
          <p>${escapeHtml(phase.description)}</p>
          <dl><div><dt>Periode</dt><dd>${escapeHtml(week.periodLabel)}</dd></div><div><dt>Gepland</dt><dd>${escapeHtml(getWeekPlannedLabel(week))}</dd></div>${week.distanceEstimate ? `<div><dt>Afstandsschatting</dt><dd>${escapeHtml(distanceEstimateLabel(week))}</dd></div>` : ""}<div><dt>Rustdagen</dt><dd>${escapeHtml(week.restDays.join(" en "))}</dd></div><div><dt>Spreiding</dt><dd>Vrije dagkeuze, met herstelregels en vaste tapergrens.</dd></div></dl>
          <button type="button" data-open-week="${weeks.indexOf(week)}">Bekijk week</button>
        </article>`;
      }).join("")}</section>`;
  }


  function renderInfo() {
    const titles = { 1: "Uitgangspunt & behouden geschiedenis", 2: "Intensiteit, spreiding & stopregels", 3: "Garmin & loopband", 4: "Weekopbouw, afstandsschatting & taper", 5: "Checkpoints", 7: "3:50-raceplan & tussentijden", 8: "Onderbouwing & bronnen" };
    app.innerHTML = `
      <header class="page-header"><span>Naslag FINAL V9.2</span><h1>Informatie</h1><p>Trainingsinhoud, voorbereiding en het voorlopige raceplan.</p></header>
      ${renderGoalSummary()}
      <section class="info-accordions">${Object.entries(titles).map(([id, title]) => {
        const blocks = plan.guidance.sections[id].blocks.filter((block) => !(id === "5" && /^Log (per sessie|per training|na iedere training):/.test(block.text || "")));
        return `<details class="info-accordion"><summary><span>${title}</span>${icon("chevron-down")}</summary><div>${renderGuideBlocks(blocks)}</div></details>`;
      }).join("")}</section>
      <button class="text-action" type="button" data-view="nutrition">Voeding & herstel ${icon("chevron-right")}</button>
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
      state.focusQueueUserBrowsing = false;
      state.focusCompletedExpanded = false;
      state.focusLastActiveIndex = -1;
      cancelPushSession(sessionToCancel);
    }
    const viewedWeek = weeks[state.viewedWeekIndex]?.weekNumber;
    refreshResolvedPlan();
    if (viewedWeek) state.viewedWeekIndex = Math.max(0, weeks.findIndex((week) => week.weekNumber === viewedWeek));
    state.view = Object.values(VIEWS).includes(view) ? view : VIEWS.TODAY;
    state.expandedWorkoutIds.clear();
    navButtons.forEach((button) => {
      const active = button.dataset.view === state.view || (button.dataset.view === VIEWS.MORE && [VIEWS.PHASES, VIEWS.INFO, VIEWS.DATA, VIEWS.NUTRITION, VIEWS.MARATHON].includes(state.view));
      button.classList.toggle("is-active", active);
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    render();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function render() {
    document.body?.classList?.toggle("treadmill-active", state.view === VIEWS.TREADMILL);
    document.body?.classList?.toggle("treadmill-focus-active", state.view === VIEWS.TREADMILL && ["running", "paused"].includes(treadmillTimer.status));
    if (state.view === VIEWS.TREADMILL) renderTreadmillMode();
    else if (state.view === VIEWS.MARATHON) renderMarathonOverview();
    else if (state.view === VIEWS.PLAN) renderPlan();
    else if (state.view === VIEWS.PHASES) renderPhases();
    else if (state.view === VIEWS.MORE) renderMore();
    else if (state.view === VIEWS.DATA) renderData();
    else if (state.view === VIEWS.DETAIL) renderWorkoutDetail();
    else if (state.view === VIEWS.NUTRITION) renderNutrition();
    else if (state.view === VIEWS.INFO) renderInfo();
    else if (state.view === VIEWS.WEEK) renderWeek();
    else renderToday();
  }

  document.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) return setView(viewButton.dataset.view);

    const open = event.target.closest("[data-open-workout]");
    if (open) return openWorkout(open.dataset.openWorkout);
    if (event.target.closest("[data-close-workout]")) return setView(state.detailReturnView || VIEWS.WEEK);

    if (state.dataDialog && event.target.closest(".data-dialog-overlay") && !event.target.closest(".data-dialog")) return;
    const dataAction = event.target.closest("[data-data-action]");
    if (dataAction) {
      const action = dataAction.dataset.dataAction;
      if (action === "reload") { saveAppData(); return window.location.reload(); }
      if (action === "force-reload") { saveAppData(); const url = new URL(window.location.href); url.searchParams.set("reload", String(Date.now())); return window.location.assign(url.toString()); }
      if (action === "prepare-import") return prepareImport(document.getElementById("backup-json")?.value || "");
      if (action === "confirm-import") return confirmImport();
      if (action === "close") { state.pendingImport = null; state.dataDialog = null; state.dataMessage = ""; return renderData(); }
      if (action === "copy") {
        state.dataDialog = "copy";
        state.dataMessage = "Selecteer de tekst om de backup te kopiëren.";
        try {
          const text = exportAppData();
          window.navigator.clipboard?.writeText(text).then(() => { state.dataMessage = "Backup gekopieerd."; if (state.view === VIEWS.DATA) renderData(); }).catch(() => {});
        } catch (_) {}
      } else if (action === "export") {
        try { downloadBackup(exportAppData()); state.dataMessage = "Backupdownload gestart."; }
        catch (_) { state.dataDialog = "copy"; state.dataMessage = "Download niet beschikbaar. Gebruik de backuptekst."; }
      } else state.dataDialog = action;
      return renderData();
    }

    const complete = event.target.closest("[data-toggle-complete]");
    if (complete) {
      event.stopPropagation();
      toggleCompleted(complete.dataset.toggleComplete);
      return;
    }

    const workoutMode = event.target.closest("[data-workout-mode][data-workout-id]");
    if (workoutMode) {
      event.stopPropagation();
      const workout = workoutById(workoutMode.dataset.workoutId);
      if (workout?.garmin && (workoutMode.dataset.workoutMode === "garmin" || (workoutMode.dataset.workoutMode === "treadmill" && workout.treadmillAvailable))) {
        state.workoutModes.set(workout.workoutId, workoutMode.dataset.workoutMode);
        render();
      }
      return;
    }

    const openGarmin = event.target.closest("[data-open-garmin]");
    if (openGarmin) {
      event.stopPropagation();
      return openWorkout(openGarmin.dataset.openGarmin, "garmin");
    }

    const treadmill = event.target.closest("[data-open-treadmill]");
    if (treadmill) {
      event.stopPropagation();
      if (!workoutById(treadmill.dataset.openTreadmill)?.treadmillAvailable) return;
      state.treadmillWorkoutId = treadmill.dataset.openTreadmill;
      state.treadmillReturnView = state.view;
      state.notificationsPanelOpen = false;
      state.showPushSetup = false;
      state.focusQueueUserBrowsing = false;
      state.focusCompletedExpanded = false;
      state.focusLastActiveIndex = -1;
      return setView(VIEWS.TREADMILL);
    }

    if (event.target.closest("[data-close-treadmill]")) {
      return setView(state.treadmillReturnView || VIEWS.TODAY);
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

    if (event.target.closest("[data-focus-return-now]")) {
      scrollFocusQueueToCurrent();
      return;
    }

    if (event.target.closest("[data-toggle-focus-completed]")) {
      state.focusCompletedExpanded = !state.focusCompletedExpanded;
      const queue = app.querySelector?.("[data-focus-queue]");
      queue?.classList?.toggle("show-completed", state.focusCompletedExpanded);
      const toggle = app.querySelector?.("[data-toggle-focus-completed]");
      toggle?.setAttribute?.("aria-expanded", String(state.focusCompletedExpanded));
      const icon = toggle?.querySelector?.("i");
      if (icon) icon.textContent = state.focusCompletedExpanded ? "−" : "+";
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

    const card = event.target.closest("[data-workout-card]");
    if (card && !event.target.closest("button, a, select, summary, input, textarea, label, .training-details")) {
      openWorkout(card.dataset.workoutCard);
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

  document.addEventListener("change", async (event) => {
    if (event.target.matches("[data-import-backup]")) {
      const file = event.target.files?.[0];
      if (!file) return;
      try { prepareImport(await file.text()); }
      catch (error) { state.dataMessage = `Backup lezen mislukt: ${error.message}`; renderData(); }
      return;
    }
    if (event.target.matches("[data-notification-setting][data-workout-id]")) {
      saveNotificationSetting(event.target.dataset.workoutId, event.target.dataset.notificationSetting, Boolean(event.target.checked));
      renderTreadmillMode();
      return;
    }
    if (event.target.matches("[data-week-select]")) {
      state.viewedWeekIndex = Number(event.target.value);
      renderWeek();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!state.dataDialog || state.view !== VIEWS.DATA) return;
    if (event.key === "Escape") {
      state.dataDialog = null;
      state.pendingImport = null;
      renderData();
    }
    if (event.key === "Tab") {
      const elements = Array.from(app.querySelectorAll(".data-dialog button, .data-dialog textarea"));
      const first = elements[0], last = elements.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
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

  window.addEventListener("scroll", () => {
    if (state.view !== VIEWS.TREADMILL || !["running", "paused"].includes(treadmillTimer.status) || focusAutoScrolling) return;
    syncFocusQueueBrowsingFromViewport();
  }, { passive: true });

  document.addEventListener("touchmove", (event) => {
    if (event.target.closest?.("[data-focus-queue]")) window.setTimeout?.(syncFocusQueueBrowsingFromViewport, 0);
  }, { passive: true });

  document.addEventListener("wheel", (event) => {
    if (event.target.closest?.("[data-focus-queue]")) window.setTimeout?.(syncFocusQueueBrowsingFromViewport, 0);
  }, { passive: true });

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
    if (event.data?.type !== "OPEN_TREADMILL") return;
    const workoutId = plan.workoutAliases?.[event.data.workoutId] || event.data.workoutId;
    if (!workoutById(workoutId)) return;
    state.treadmillWorkoutId = workoutId;
    state.treadmillReturnView = VIEWS.TODAY;
    state.notificationsPanelOpen = false;
    state.showPushSetup = false;
    state.focusQueueUserBrowsing = false;
    state.focusCompletedExpanded = false;
    state.focusLastActiveIndex = -1;
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
    notificationSettings,
    saveNotificationSetting,
    getTreadmillTimer: () => ({ ...treadmillTimer }),
    buildTreadmillTimeline,
    timelineSnapshotAt,
    focusTimingState,
    focusActiveRowIsVisible,
    switchPlanFor,
    daysUntilMarathon,
    nextIncompleteWorkout,
    nextMilestoneWorkout,
    getWeekPlannedLabel,
    migrateAppData,
    getStorageDiagnostics,
    exportAppData,
    prepareImport,
    confirmImport,
  };
})();
