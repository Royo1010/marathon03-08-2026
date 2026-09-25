(function () {
  "use strict";

  const APP_VERSION = "2026.09.25-3";
  // Keep this key stable. Preserve existing logs; migrate additions and protocol changes.
  const STORAGE_KEY = "marathon330TrainingAppData_v1";
  const APP_DATA_VERSION = 9;
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

  const VIEWS = { TODAY: "today", WEEK: "week", PLAN: "plan", PHASES: "phases", STATS: "stats", INFO: "info", MARATHON: "marathon", TREADMILL: "treadmill" };
  const requestedTreadmillWorkoutId = new URLSearchParams(window.location.search).get("treadmill");
  const initialTreadmillWorkoutId = plan.workoutAliases?.[requestedTreadmillWorkoutId] || requestedTreadmillWorkoutId;
  const state = {
    view: workouts.some((workout) => workout.workoutId === initialTreadmillWorkoutId) ? VIEWS.TREADMILL : VIEWS.TODAY,
    viewedWeekIndex: currentPlanWeekIndex(),
    expandedWorkoutIds: new Set(),
    treadmillWorkoutId: workouts.some((workout) => workout.workoutId === initialTreadmillWorkoutId) ? initialTreadmillWorkoutId : null,
    treadmillReturnView: VIEWS.TODAY,
    pushStatus: { code: "checking", label: "Pushstatus controleren…", detail: "" },
    showPushSetup: false,
    notificationsPanelOpen: false,
    focusQueueUserBrowsing: false,
    focusCompletedExpanded: false,
    focusLastActiveIndex: -1,
  };

  let storageWriteBlocked = false;
  let appData = loadAppData();
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
      nutritionLogs: {},
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

  function migrateFinalV3Workouts(raw) {
    const sourceSchema = raw.meta?.schemaVersion || "onbekend";
    const currentById = new Map(workouts.map((workout) => [workout.workoutId, workout]));
    const archive = (id) => {
      const entry = {};
      for (const field of ["workoutLogs", "completedSessions", "testResults", "nutritionLogs"]) {
        if (isObject(raw[field]) && Object.hasOwn(raw[field], id)) entry[field] = raw[field][id];
      }
      const settings = raw.userSettings?.notificationSettings?.[id];
      if (settings) entry.notificationSettings = settings;
      if (!Object.keys(entry).length) return;
      raw.legacyData = isObject(raw.legacyData) ? raw.legacyData : {};
      raw.legacyData.finalV3Migration ||= { sourceSchema, archivedAt: nowIso(), workouts: {} };
      raw.legacyData.finalV3Migration.workouts[id] ||= { ...entry, prescription: plan.previousWorkoutsV7?.[id] || null };
    };
    const remove = (id) => {
      for (const field of ["workoutLogs", "completedSessions", "testResults", "nutritionLogs"]) if (isObject(raw[field])) delete raw[field][id];
      if (isObject(raw.userSettings?.notificationSettings)) delete raw.userSettings.notificationSettings[id];
    };
    const storedIds = new Set([
      ...Object.keys(isObject(raw.workoutLogs) ? raw.workoutLogs : {}),
      ...Object.keys(isObject(raw.completedSessions) ? raw.completedSessions : {}),
      ...Object.keys(isObject(raw.testResults) ? raw.testResults : {}),
      ...Object.keys(isObject(raw.nutritionLogs) ? raw.nutritionLogs : {}),
      ...Object.keys(isObject(raw.userSettings?.notificationSettings) ? raw.userSettings.notificationSettings : {}),
    ]);
    for (const id of storedIds) {
      const previous = plan.previousWorkoutsV7?.[id];
      const current = currentById.get(id);
      if (current && previous?.signature === current.protocolSignature) continue;
      archive(id);
      remove(id);
    }
  }

  function migrateSpeedReserveWorkouts(raw) {
    const sourceSchema = raw.meta?.schemaVersion || "onbekend";
    const currentById = new Map(workouts.map((workout) => [workout.workoutId, workout]));
    const changedIds = new Set();
    for (const [id, previous] of Object.entries(plan.previousWorkoutsV8 || {})) {
      const current = currentById.get(id);
      if (!current || previous.signature !== current.protocolSignature) changedIds.add(id);
    }
    for (const id of changedIds) {
      const current = currentById.get(id);
      const entry = {};
      for (const field of ["workoutLogs", "completedSessions", "testResults", "nutritionLogs"]) {
        if (isObject(raw[field]) && Object.hasOwn(raw[field], id)) entry[field] = raw[field][id];
      }
      const settings = raw.userSettings?.notificationSettings?.[id];
      if (settings) entry.notificationSettings = settings;
      if (Object.keys(entry).length) {
        raw.legacyData = isObject(raw.legacyData) ? raw.legacyData : {};
        raw.legacyData.speedReserveMigration ||= { sourceSchema, archivedAt: nowIso(), workouts: {} };
        raw.legacyData.speedReserveMigration.workouts[id] ||= {
          ...entry,
          prescription: plan.previousWorkoutsV8?.[id] || null,
          replacement: current || null,
        };
      }
      for (const field of ["workoutLogs", "completedSessions", "testResults", "nutritionLogs"]) {
        if (isObject(raw[field])) delete raw[field][id];
      }
      if (isObject(raw.userSettings?.notificationSettings)) delete raw.userSettings.notificationSettings[id];
    }
  }

  function migrateMaximaparkWorkouts(raw) {
    const sourceSchema = raw.meta?.schemaVersion || "onbekend";
    const currentById = new Map(workouts.map((workout) => [workout.workoutId, workout]));
    const changedIds = new Set();
    for (const [id, previous] of Object.entries(plan.previousWorkoutsV9 || {})) {
      const current = currentById.get(id);
      if (!current || previous.signature !== current.protocolSignature || previous.surface !== current.surface) changedIds.add(id);
    }
    for (const id of changedIds) {
      const current = currentById.get(id);
      const entry = {};
      for (const field of ["workoutLogs", "completedSessions", "testResults", "nutritionLogs"]) {
        if (isObject(raw[field]) && Object.hasOwn(raw[field], id)) entry[field] = raw[field][id];
      }
      const settings = raw.userSettings?.notificationSettings?.[id];
      if (settings) entry.notificationSettings = settings;
      if (Object.keys(entry).length) {
        raw.legacyData = isObject(raw.legacyData) ? raw.legacyData : {};
        raw.legacyData.maximaparkMigration ||= { sourceSchema, archivedAt: nowIso(), workouts: {} };
        raw.legacyData.maximaparkMigration.workouts[id] ||= {
          ...entry,
          prescription: plan.previousWorkoutsV9?.[id] || null,
          replacement: current || null,
        };
      }
      for (const field of ["workoutLogs", "completedSessions", "testResults", "nutritionLogs"]) {
        if (isObject(raw[field])) delete raw[field][id];
      }
      if (isObject(raw.userSettings?.notificationSettings)) delete raw.userSettings.notificationSettings[id];
    }
  }

  function migrateExecutionModes(raw) {
    const currentById = new Map(workouts.map((workout) => [workout.workoutId, workout]));
    const changedWorkoutIds = Object.entries(plan.previousWorkoutsV10 || {}).flatMap(([id, previous]) => {
      const current = currentById.get(id);
      const changed = !current
        || previous.signature !== current.protocolSignature
        || previous.surface !== current.surface
        || Boolean(previous.outdoorSimpleMode) !== Boolean(current.outdoorSimpleMode);
      return changed ? [id] : [];
    });
    raw.legacyData = isObject(raw.legacyData) ? raw.legacyData : {};
    raw.legacyData.executionModeMigration ||= {
      sourceSchema: raw.meta?.schemaVersion || "onbekend",
      migratedAt: nowIso(),
      changedWorkoutIds,
      userDataPreserved: true,
    };
  }

  function migrateAppData(raw) {
    const empty = createEmptyAppData();
    if (!isObject(raw)) throw new Error("Opgeslagen data is geen app-object.");
    raw = JSON.parse(JSON.stringify(raw));
    if (Number(raw.appDataVersion || 0) < 6) migrateFinalV3Workouts(raw);
    if (Number(raw.appDataVersion || 0) < 7) migrateSpeedReserveWorkouts(raw);
    if (Number(raw.appDataVersion || 0) < 8) migrateMaximaparkWorkouts(raw);
    if (Number(raw.appDataVersion || 0) < 9) migrateExecutionModes(raw);
    const data = {
      ...empty,
      ...raw,
      appDataVersion: APP_DATA_VERSION,
      activePlanId: plan.config.planId,
      userSettings: isObject(raw.userSettings) ? raw.userSettings : {},
      uiState: isObject(raw.uiState) ? raw.uiState : {},
      testResults: isObject(raw.testResults) ? raw.testResults : {},
      nutritionLogs: isObject(raw.nutritionLogs) ? raw.nutritionLogs : {},
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
    if (storageWriteBlocked) return;
    appData.updatedAt = nowIso();
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(appData)); showStorageWarning(); }
    catch (error) {
      showStorageWarning("Opslaan lukt niet. Houd de app open en controleer de beschikbare browseropslag; nieuwe invoer is nog niet veilig bewaard.");
      console.warn("Voortgang opslaan is niet gelukt.", error);
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
    const completed = !isCompleted(workoutId);
    const log = normalizeWorkoutLog(workoutLog(workoutId) || {}, workoutId);
    log.completed = completed;
    log.completedDate = completed ? localDateIso() : "";
    log.updatedAt = nowIso();
    if (completed) {
      const workout = workoutById(workoutId);
      log.plannedDistanceAtCompletion = plannedDistanceKm(workout);
      log.plannedSecondsAtCompletion = workoutDurationSeconds(workout);
      log.schemaVersion = plan.config.schemaVersion;
    }
    appData.workoutLogs[workoutId] = log;
    if (completed) appData.completedSessions[workoutId] = { completedAt: log.completedDate, updatedAt: log.updatedAt };
    else delete appData.completedSessions[workoutId];
    saveAppData();
    render();
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

  function workoutSequenceLabel(workout) {
    const week = weeks.find((item) => item.weekNumber === workout?.weekNumber);
    if (week?.planningMode === "calendar" && workout?.fixedDay && workout.date) {
      return `${workout.weekday || formatDate(workout.date, { weekday: "long" })} ${formatDate(workout.date, { day: "numeric", month: "long" })}`;
    }
    return workout?.trainingLabel || (workout?.trainingNumber ? `Training ${workout.trainingNumber}` : "Extra sessie");
  }

  function relevantSegments(workout) {
    return model.flattenWorkoutSegments(workout).filter((segment) => !["wandelen", "warming-up", "cooling-down"].includes(segment.type));
  }

  function speedSummary(workout) {
    if (workout.outdoorSimpleMode) return "Buiten · tempo op gevoel";
    const values = relevantSegments(workout).map((segment) => Number(segment.speedKmh)).filter((value) => Number.isFinite(value) && value > 0);
    if (!values.length) return workout.surface === "buiten" ? "Buiten" : "Tempo op gevoel";
    const min = Math.min(...values);
    const max = Math.max(...values);
    return min === max ? `${formatNumber(min)} km/u` : `${formatNumber(min)}–${formatNumber(max)} km/u`;
  }

  function keyBlockSummary(workout) {
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
        <section><h3>Verbinding met 3:30</h3><p>${escapeHtml(philosophy.targetLink)}</p></section>
        <section><h3>Waarom niet meer of harder?</h3><p>${escapeHtml(philosophy.whyNotMore)}</p></section>
        <section><h3>Waar vertrouwen uit mag komen</h3><p>${escapeHtml(philosophy.confidence)}</p></section>
      </div>
    </details>`;
  }

  function renderRestDay(day) {
    return `<article class="rest-day-card">
      <div><span>${escapeHtml(day.weekday)} · ${escapeHtml(formatDate(day.date, { day: "numeric", month: "long" }))}</span><strong>Rust</strong></div>
      <p>${escapeHtml(day.note || "Volledige looprust en herstel.")}</p>
    </article>`;
  }

  function renderCalendarWeek(week) {
    return `<section class="calendar-week" aria-label="Vaste planning week ${week.weekNumber}">${(week.days || []).map((day) => {
      if (day.isRestDay) return renderRestDay(day);
      const workout = workoutById(day.workoutId);
      return workout ? `<div class="calendar-training-day">${renderTrainingCard(workout)}</div>` : "";
    }).join("")}</section>`;
  }

  function renderToday() {
    const date = appDateIso();
    const week = weeks[currentPlanWeekIndex()] || weeks[0];
    const beforePlan = date < plan.config.startDate;
    const afterPlan = date > plan.config.endDate;
    let content = "";
    if (beforePlan) {
      content = `<section class="today-state"><span>Start programma</span><strong>Maandag 21 september</strong><p>FINAL V3 begint morgen met week 39. Vandaag staat geen schemaonderdeel gepland.</p></section>`;
    } else if (afterPlan) {
      content = `<section class="today-state"><span>Programma voltooid</span><strong>Marathon afgerond</strong><p>Het actieve FINAL V3-schema liep tot zondag 22 november 2026.</p></section>`;
    } else if (week.planningMode === "calendar") {
      const day = (week.days || []).find((item) => item.date === date);
      if (day?.isRestDay) content = renderRestDay(day);
      else {
        const workout = workoutById(day?.workoutId);
        content = workout ? renderTrainingCard(workout) : `<section class="today-state"><strong>Geen training gepland</strong></section>`;
      }
    } else {
      const workout = firstIncompleteWorkout(week);
      content = workout ? `<section class="today-flex-note"><strong>Flexibele week</strong><p>De volgorde en herstelvoorwaarden zijn leidend. Dit is je eerstvolgende open sessie; de kalenderdag is niet verplicht.</p></section>${renderTrainingCard(workout)}` : `<section class="today-state"><strong>Week voltooid</strong><p>Alle sessies van week ${week.weekNumber} zijn afgerond.</p></section>`;
    }
    app.innerHTML = `<header class="page-header today-header"><span>${escapeHtml(formatDate(date, { weekday: "long", day: "numeric", month: "long" }))}</span><h1>Vandaag</h1><p>Week ${week.weekNumber} · ${escapeHtml(week.weekType)}</p></header>${content}`;
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
        <div class="week-meta">${escapeHtml(week.periodLabel || `${formatDate(week.startDate, { day: "numeric", month: "long" })} – ${formatDate(week.endDate, { day: "numeric", month: "long", year: "numeric" })}`)} · ${escapeHtml(getWeekPlannedLabel(week))} · nog ${daysUntilMarathon()} dagen</div>
        <div class="training-labels week-type">${renderSemanticBadge(week.weekType)}</div>
        <p class="week-focus">${escapeHtml(week.focus)}</p>
        <p class="week-pattern">${escapeHtml(week.planningMode === "calendar" ? "Vaste kalenderplanning · rustdagen horen bij het schema" : week.suggestedPattern)}</p>
      </section>

      ${renderWeekPhilosophy(week)}

      <div class="week-navigation" aria-label="Weeknavigatie">
        <button type="button" data-week-prev ${state.viewedWeekIndex === 0 ? "disabled" : ""}>Vorige week</button>
        <button type="button" data-week-current ${state.viewedWeekIndex === currentPlanWeekIndex() ? "disabled" : ""}>Deze week</button>
        <button type="button" data-week-next ${state.viewedWeekIndex === weeks.length - 1 ? "disabled" : ""}>Volgende week</button>
      </div>

      <section class="next-training" aria-label="Volgende training">
        <div><span>Volgende training</span>${next ? `<strong>${escapeHtml(workoutSequenceLabel(next))} · ${escapeHtml(trainingType(next))}</strong><small>${escapeHtml(workoutPrimarySummary(next))}</small>` : `<strong>Week voltooid</strong><small>Alle ${week.workouts.length} sessies zijn afgerond.</small>`}</div>
        <div class="week-score">${completed}/${week.workouts.length}</div>
      </section>

      ${week.planningMode === "calendar" ? renderCalendarWeek(week) : `<section class="training-list" aria-label="Trainingen in week ${week.weekNumber}">${week.workouts.map((workout) => renderTrainingCard(workout)).join("")}</section>`}
    `;
  }

  function renderSemanticBadge(label) {
    const text = String(label || "");
    const tone = /VOEDING|RACEVOEDING/.test(text) ? "fueling" : /STRENGTH/.test(text) ? "strength" : /BUITEN|OUTDOOR|MÁXIMAPARK/.test(text) ? "outdoor" : /LOOPBAND/.test(text) ? "treadmill"
      : /CUTBACK|RECOVERY/.test(text) ? "recovery" : /RACE/.test(text) ? "race" : /TAPER/.test(text) ? "taper"
      : /TEST|BENCHMARK|FITNESS CHECK/.test(text) ? "test" : /LONG|CONFIDENCE|PEAK/.test(text) ? "long"
      : /MARATHON SPECIFIC|MARATHONSPECIFIEK|MP/.test(text) ? "mp" : /INTERVAL|STRIDES/.test(text) ? "interval"
      : /QUALITY|THRESHOLD|CONTROLLED FAST/.test(text) ? "threshold" : /STEADY/.test(text) ? "steady" : "easy";
    return `<span class="semantic-badge tone-${tone}">${escapeHtml(text)}</span>`;
  }

  function renderFuelingForm(workout) {
    const log = appData.nutritionLogs?.[workout.workoutId] || {};
    const fields = [
      ["products", "Gebruikte producten", "text"], ["servings", "Gels / servings", "number"],
      ["totalCarbs", "Koolhydraten totaal (g)", "number"], ["carbsPerHour", "Koolhydraten per uur (g)", "number"],
      ["timing", "Timing", "text"], ["drinking", "Drinken", "text"],
      ["gut", "Maag / darmen", "text"], ["energy", "Energieniveau", "text"], ["legs", "Benen", "text"],
    ];
    return `<details class="info-accordion fueling-registration">
      <summary><span>${workout.fullFuelRehearsal ? "Volledige racevoedingsrepetitie" : "Racevoeding registreren"}</span><span aria-hidden="true">+</span></summary>
      <div><p>${escapeHtml(workout.nutrition)}</p><div class="test-fields">
      ${fields.map(([key, title, type]) => `<label><span>${title}</span><input type="${type}" ${type === "number" ? 'inputmode="decimal" min="0" step="any"' : ""} value="${escapeAttr(log[key] ?? "")}" data-fuel-workout="${workout.workoutId}" data-fuel-field="${key}"></label>`).join("")}
      <label class="wide"><span>Voeding volgens plan voltooid</span><select data-fuel-workout="${workout.workoutId}" data-fuel-field="completedAsPlanned"><option value="">Kies</option><option value="ja" ${log.completedAsPlanned === "ja" ? "selected" : ""}>Ja</option><option value="nee" ${log.completedAsPlanned === "nee" ? "selected" : ""}>Nee</option></select></label>
      <label class="wide"><span>Notitie</span><textarea rows="3" data-fuel-workout="${workout.workoutId}" data-fuel-field="note">${escapeHtml(log.note || "")}</textarea></label>
      </div></div></details>`;
  }

  function saveFuelField(workoutId, field, value) {
    if (!workoutById(workoutId)?.fueling || !["products", "servings", "totalCarbs", "carbsPerHour", "timing", "drinking", "gut", "energy", "legs", "completedAsPlanned", "note"].includes(field)) return;
    appData.nutritionLogs[workoutId] = { ...appData.nutritionLogs[workoutId], [field]: value, updatedAt: nowIso() };
    saveAppData();
  }

  function renderStrengthCard(workout) {
    const strength = workout.strength;
    if (!strength) return "";
    return `<details class="strength-card">
      <summary><span><small>Na het hardlopen</small><strong>Kracht · Sessie ${escapeHtml(strength.type)}</strong></span><span>${escapeHtml(strength.duration)}</span></summary>
      <div class="strength-body">
        <p class="strength-order"><strong>Eerst hardlopen, daarna krachttraining.</strong> ${escapeHtml(strength.note)}</p>
        <div class="strength-exercises">${(strength.exercises || []).map(([name, prescription]) => `<div><strong>${escapeHtml(name)}</strong><span>${escapeHtml(prescription)}</span></div>`).join("")}</div>
        <p><strong>Intensiteit:</strong> ${escapeHtml(strength.rir)}</p>
      </div>
    </details>`;
  }

  function trainingModeLabel(workout) {
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

  function renderTrainingCard(workout) {
    const open = state.expandedWorkoutIds.has(workout.workoutId);
    const completed = isCompleted(workout.workoutId);
    const detailsId = `details-${workout.workoutId}`;
    return `
      <article class="training-card tone-${escapeAttr(workout.tone || "easy")} ${open ? "is-open" : ""} ${completed ? "is-completed" : ""}" data-workout-card="${workout.workoutId}">
        <button class="training-card-toggle" type="button" data-toggle-workout="${workout.workoutId}" aria-expanded="${open}" aria-controls="${detailsId}">
          <span class="card-topline"><span>${escapeHtml(workoutSequenceLabel(workout))}</span>${completed ? `<span class="completed-mark">✓ Voltooid</span>` : `<span class="training-type">${escapeHtml(trainingType(workout))}</span>`}<span class="expand-icon" aria-hidden="true">${open ? "−" : "+"}</span></span>
          ${(workout.labels || []).length ? `<span class="training-labels">${workout.labels.map(renderSemanticBadge).join("")}</span>` : ""}
          <span class="training-metadata"><span class="recovery-${escapeAttr(workout.recoveryStatus || "none")}">${escapeHtml(workout.recoveryLabel || "")}</span>${workout.surface === "buiten" ? `<span>${escapeHtml(workout.locationStatus || "Buiten")}</span>` : ""}</span>
          <span class="training-name">${escapeHtml(capitalize(workout.title))}</span>
          <span class="training-primary">${escapeHtml(workoutPrimarySummary(workout))}</span>
          ${workout.strength ? `<span class="strength-inline">Daarna kracht · Sessie ${escapeHtml(workout.strength.type)} · ${escapeHtml(workout.strength.duration)}</span>` : ""}
          <span class="training-speed">${escapeHtml(joinText([speedSummary(workout), workout.targetRpe ? `RPE ${workout.targetRpe}` : ""]))}</span>
          <span class="key-block"><strong>Belangrijkste blok</strong>${escapeHtml(keyBlockSummary(workout))}</span>
          <span class="practical-hint">${escapeHtml(workout.goal)}</span>
        </button>
        ${open ? `<div class="training-details" id="${detailsId}">${renderTrainingDetails(workout)}</div>` : ""}
        <div class="completion-row">
          <button class="treadmill-button" type="button" data-open-treadmill="${workout.workoutId}">
            <span aria-hidden="true">▶</span>${trainingModeLabel(workout)}
          </button>
          <button class="completion-button ${completed ? "is-completed" : ""}" type="button" data-toggle-complete="${workout.workoutId}" aria-pressed="${completed}">
            <span aria-hidden="true">${completed ? "✓" : "○"}</span>${completed ? "Voltooid" : "Markeer als voltooid"}
          </button>
        </div>
      </article>`;
  }

  function renderTrainingDetails(workout) {
    return `
      <p class="detail-context">Week ${workout.weekNumber} · ${escapeHtml(workout.dateLabel)} · ${escapeHtml(workoutSequenceLabel(workout))} · ${escapeHtml(workout.phaseName)}</p>
      ${workout.outdoorSimpleMode ? renderOutdoorSimpleOverview(workout) : `<div class="detail-section"><h3>Exacte opbouw</h3><div class="segment-groups">${(workout.groups || []).map(renderSegmentGroup).join("")}</div></div>`}
      <div class="detail-section"><h3>Doel en belasting</h3><p><strong>Trainingsdoel:</strong> ${escapeHtml(workout.goal)}</p><p><strong>Gewenste RPE:</strong> ${escapeHtml(workout.targetRpe)}</p><p><strong>Mentale doelstelling:</strong> ${escapeHtml(workout.mentalGoal || "De training gecontroleerd uitvoeren zoals beschreven.")}</p></div>
      <div class="detail-section rationale-section"><h3>Waarom deze training hier staat</h3><p>${escapeHtml(workout.rationale || workout.goal)}</p></div>
      <div class="detail-section"><h3>Planning en herstel</h3><p><strong>${escapeHtml(workout.recoveryLabel || "Herstel volgens weekbelasting")}:</strong> ${escapeHtml(workout.recoveryAdvice || workout.orderWarning || "Bewaak herstel tussen de sessies.")}</p>${workout.orderWarning ? `<p>${escapeHtml(workout.orderWarning)}</p>` : ""}</div>
      <div class="detail-section"><h3>Locatie en buitenvariant</h3><p><strong>${escapeHtml(workout.locationStatus || "Loopband of buiten")}.</strong> ${escapeHtml(workout.outsideVariant || "Volg buiten dezelfde duur en inspanning.")}</p></div>
      ${workout.shoes ? `<div class="detail-section shoe-section"><h3>Schoenen</h3><p>${escapeHtml(workout.shoes)}</p></div>` : ""}
      ${renderStrengthCard(workout)}
      ${(workout.detailsSections || []).map((section) => `<div class="detail-section source-detail"><h3>${escapeHtml(section.title)}</h3><ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>`).join("")}
      ${workout.fueling ? renderFuelingForm(workout) : ""}
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

  function treadmillSpeedLabel(block) {
    return Number(block?.speedKmh) > 0 ? `${formatNumber(block.speedKmh)} km/u` : "Zelf sturen";
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
      <div class="treadmill-block-speed"><span>Snelheid</span><strong class="${Number(block.speedKmh) > 0 ? "" : "is-text"}">${escapeHtml(treadmillSpeedLabel(block))}</strong></div>
      <div class="treadmill-block-incline"><span>Helling</span><strong class="${block.inclinePercent == null ? "is-text" : ""}">${escapeHtml(treadmillInclineLabel(block))}</strong></div>
    </article>`;
  }

  function isTreadmillFocusMode(workout) {
    return treadmillTimer.workoutId === workout?.workoutId && ["running", "paused"].includes(treadmillTimer.status);
  }

  function focusSpeedValue(block) {
    return Number(block?.speedKmh) > 0 ? formatNumber(block.speedKmh) : "Zelf sturen";
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
        <div class="focus-speed"><span>Nu · snelheid</span><strong><b data-focus-current-speed>${escapeHtml(focusSpeedValue(current))}</b>${Number(current?.speedKmh) > 0 ? "<small>km/u</small>" : ""}</strong></div>
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
      <div class="focus-queue-speed"><span>Snelheid</span><strong><b>${escapeHtml(focusSpeedValue(block))}</b>${Number(block.speedKmh) > 0 ? "<small>km/u</small>" : ""}</strong></div>
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

  function actualDistanceKm(workout) {
    const log = workoutLog(workout.workoutId) || {};
    const actual = [log.actualDistanceKm, log.distanceKm, log.completedDistanceKm, log.plannedDistanceAtCompletion]
      .filter((value) => value != null && value !== "")
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
    const calculated = Number(model.calculateWeekDistanceKm?.(week, includeMarathon));
    return Number.isFinite(calculated) ? calculated : weekWorkouts(week, includeMarathon).reduce((total, workout) => total + plannedDistanceKm(workout), 0);
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
      const beforeRace = getWeekPlannedKm(week, false).toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      const includingRace = getWeekPlannedKm(week, true).toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      return `±${beforeRace} km vóór race · ±${includingRace} km incl. marathon`;
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
    const actual = [log.actualDurationSeconds, log.durationSeconds, log.completedDurationSeconds, log.plannedSecondsAtCompletion]
      .filter((value) => value != null && value !== "")
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
    const totalPlannedKm = Number(weeks.reduce((total, week) => total + getWeekPlannedKm(week, false), 0).toFixed(3));
    const totalCompletedKm = weeks.reduce((total, week) => total + getWeekCompletedKm(week, false), 0);
    const currentWeek = weeks[currentPlanWeekIndex()] || weeks[0];
    const weekly = weeks.map((week) => {
      const plannedKm = getWeekPlannedKm(week, true);
      const completedKm = getWeekCompletedKm(week, true);
      return { weekNumber: week.weekNumber, plannedKm, completedKm, includesMarathon: Boolean(week.includesMarathon), current: week.weekId === currentWeek?.weekId };
    });
    const current = weekly.find((week) => week.current) || { plannedKm: 0, completedKm: 0 };
    const confidence = workouts.filter((workout) => workout.confidence || (workout.labels || []).some((label) => /CONFIDENCE/.test(label)));
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
      scheduledPlannedKm: Number(weekly.reduce((total, week) => total + week.plannedKm, 0).toFixed(3)),
      scheduledCompletedKm: weekly.reduce((total, week) => total + week.completedKm, 0),
      weekly,
      currentWeek,
      currentPlannedKm: current.plannedKm,
      currentCompletedKm: current.completedKm,
      confidence,
      completedConfidence: confidence.filter((workout) => isCompleted(workout.workoutId)),
      latestCompletedConfidence: confidence.filter((workout) => isCompleted(workout.workoutId)).at(-1) || null,
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
    const labels = new Set([39, 41, 43, 45, 47]);
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

  function renderTestAndConfidenceHistory() {
    const milestones = workouts.filter((workout) => workout.confidence || (workout.labels || []).some((label) => /CONFIDENCE/.test(label)) || workout.category === "wedstrijd");
    return `<details class="dashboard-card history-card">
      <summary><span><small>Chronologisch overzicht</small><strong>Confidence-ladder</strong></span><i aria-hidden="true">+</i></summary>
      <div class="history-list">${milestones.map((workout) => {
        const completed = isCompleted(workout.workoutId);
        const resultLabel = completed ? "Voltooid" : "Nog te doen";
        return `<article><span>Week ${workout.weekNumber}</span><div><strong>${escapeHtml(capitalize(workout.title))}</strong><p>${escapeHtml(workoutSequenceLabel(workout))} · ${escapeHtml(resultLabel)}</p></div></article>`;
      }).join("")}</div>
    </details>`;
  }

  function renderMarathonOverview() {
    const metrics = dashboardMetrics();
    const days = daysUntilMarathon();
    const fullWeeks = Math.floor(days / 7);
    const looseDays = days % 7;
    const next = nextIncompleteWorkout();
    const milestone = nextMilestoneWorkout();
    const currentRemainingKm = Math.max(0, metrics.currentPlannedKm - metrics.currentCompletedKm);
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
      ${renderTestAndConfidenceHistory()}
      <section class="overview-next-grid">
        <article><span>Volgende training</span>${next ? `<strong>Week ${next.weekNumber} · ${escapeHtml(workoutSequenceLabel(next))}</strong><h2>${escapeHtml(capitalize(next.title))}</h2><p>${escapeHtml(workoutPrimarySummary(next))}</p>` : `<strong>Programma voltooid</strong><h2>De marathon wacht</h2>`}</article>
        <article><span>Volgende mijlpaal</span>${milestone ? `<strong>Week ${milestone.weekNumber} · ${escapeHtml(workoutSequenceLabel(milestone))}</strong><h2>${escapeHtml(capitalize(milestone.title))}</h2><p>${escapeHtml(milestone.category === "wedstrijd" ? "Marathon · 42,195 km" : workoutPrimarySummary(milestone))}</p>` : `<strong>Geen mijlpaal meer</strong><h2>Race ready</h2>`}</article>
      </section>
      <section class="dashboard-summary-grid">
        <article class="dashboard-card"><span>Confidence runs</span><strong>${metrics.completedConfidence.length} / ${metrics.confidence.length}</strong><p>${metrics.confidence.length - metrics.completedConfidence.length} te gaan</p></article>
        <article class="dashboard-card"><span>MP vóór marathon</span><strong>${plan.config.programmedMpMinutes} min</strong><p>5 uur en 28 minuten geprogrammeerd</p></article>
        <article class="dashboard-card"><span>Langste gepland</span><strong>${metrics.longestPlanned ? `${formatNumber(plannedDistanceKm(metrics.longestPlanned))} km` : "-"}</strong><p>${metrics.longestPlanned ? `Week ${metrics.longestPlanned.weekNumber}` : "Geen lange duurloop"}</p></article>
        <article class="dashboard-card"><span>Langste voltooid</span><strong>${metrics.longestCompleted ? `${formatNumber(completedDistanceKm(metrics.longestCompleted))} km` : "0 km"}</strong><p>${metrics.longestCompleted ? escapeHtml(capitalize(metrics.longestCompleted.title)) : "Nog geen lange duurloop"}</p></article>
        <article class="dashboard-card"><span>Bekende trainingsuren</span><strong>${formatHours(metrics.completedDurationSeconds)}</strong><p>van ${formatHours(metrics.plannedDurationSeconds)}</p></article>
        <article class="dashboard-card"><span>Resterende uren</span><strong>${formatHours(metrics.remainingDurationSeconds)}</strong><p>${metrics.unknownDurationCount ? `${metrics.unknownDurationCount} open testduur niet meegerekend` : "Alle trainingsduren bekend"}</p></article>
      </section>
      <section class="dashboard-card detail-status-card">
        <div><span>Gemiddelde voltooide training</span><strong>${formatNumber(metrics.averageCompletedKm)} km</strong></div>
        <div><span>Gemiddeld per actieve week</span><strong>${formatNumber(metrics.activeCompletedWeeks ? metrics.totalCompletedKm / metrics.activeCompletedWeeks : 0)} km</strong></div>
        <div><span>Laatste voltooid</span><strong>${metrics.latestCompleted ? `Week ${metrics.latestCompleted.weekNumber} · ${escapeHtml(workoutSequenceLabel(metrics.latestCompleted))}` : "Nog geen training"}</strong><small>${metrics.latestCompleted ? escapeHtml(capitalize(metrics.latestCompleted.title)) : ""}</small></div>
        <div><span>Laatste confidence</span><strong>${metrics.latestCompletedConfidence ? `Week ${metrics.latestCompletedConfidence.weekNumber}` : "Nog geen confidence-run"}</strong><small>${metrics.latestCompletedConfidence ? escapeHtml(capitalize(metrics.latestCompletedConfidence.title)) : ""}</small></div>
      </section>
      <p class="dashboard-method">Werkelijk gelogde afstand wordt gebruikt wanneer die beschikbaar is. Anders telt een voltooide sessie voor de geplande afstand mee. Rustdagen en krachttraining tellen niet mee als looptraining of kilometers; week 47 wordt in grafieken inclusief marathon getoond.</p>
    </section>`;
  }

  function renderPlan() {
    app.innerHTML = `
      <header class="page-header"><span>FINAL V3</span><h1>Schema</h1><p>Week 39 tot en met marathonweek, vanuit één centrale trainingsbron.</p></header>
      <section class="plan-list">
        ${weeks.map((week, index) => {
          const phase = plan.phases.find((item) => item.phaseId === week.phaseId);
          const longRun = week.workouts.filter((workout) => workout.category === "lange-duur").at(-1);
          const completed = week.workouts.filter((workout) => isCompleted(workout.workoutId)).length;
          const overview = week.weekPhilosophy
            ? { theme: week.weekPhilosophy.theme, goal: week.weekPhilosophy.summary }
            : { theme: phase?.shortName || week.phaseName, goal: week.focus };
          const marathonWeek = Boolean(week.includesMarathon || week.workouts.some((workout) => workout.category === "wedstrijd"));
          const restCount = (week.days || []).filter((day) => day.isRestDay).length;
          const runCount = week.workouts.filter((workout) => workout.category !== "wedstrijd").length;
          return `<button class="plan-row${completed === week.workouts.length ? " is-completed" : ""}" type="button" data-open-week="${index}" aria-label="Open week ${week.weekNumber}">
            <span class="plan-row-top"><span class="plan-week">Week ${week.weekNumber}</span><span class="plan-status">${completed}/${week.workouts.length}<i aria-hidden="true">›</i></span></span>
            <span class="plan-main">
              <strong>${escapeHtml(overview.theme)}</strong>
              <span class="plan-volume">${escapeHtml(getWeekPlannedLabel(week))}</span>
              <small>${marathonWeek ? `${runCount} trainingen + marathon · ${restCount} rustdagen` : week.planningMode === "calendar" ? `${runCount} trainingen · ${restCount} rustdagen` : `${runCount} trainingen · flexibel gepland`}</small>
              <span class="plan-goal"><b>Doel</b>${escapeHtml(overview.goal)}</span>
              <small class="plan-longest">${marathonWeek ? "Marathon: 42,195 km" : `Langste training: ${escapeHtml(longRun?.estimatedDistanceLabel || `${formatNumber(plannedDistanceKm(longRun))} km`)}`}</small>
            </span>
          </button>`;
        }).join("")}
      </section>`;
  }

  function renderPhases() {
    const strategy = plan.guidance.surfaceStrategy;
    app.innerHTML = `<header class="page-header"><span>Opbouw FINAL V3</span><h1>Fases</h1><p>De volume-piek ligt in week 43; de zwaarste marathonspecifieke long run volgt in week 44.</p></header>
      <section class="phase-list">${strategy ? `<article class="phase-card phase-strategy-card">
        <div><span>Trainingscontext</span>${renderSemanticBadge("OUTDOOR TRANSFER")}</div>
        <h2>${escapeHtml(strategy.title)}</h2>
        <p>${escapeHtml(strategy.explanation)}</p>
        <dl><div><dt>Loopband</dt><dd>${escapeHtml(strategy.treadmill.join(" · "))}</dd></div><div><dt>Buiten</dt><dd>${escapeHtml(strategy.outside.join(" · "))}</dd></div></dl>
      </article>` : ""}${plan.phases.map((phase) => {
        const week = weeks.find((item) => item.phaseId === phase.phaseId);
        return `<article class="phase-card">
          <div><span>Week ${week.weekNumber}</span>${renderSemanticBadge(week.planningMode === "calendar" ? "VASTE DAGEN" : "FLEXIBEL")}</div>
          <h2>${escapeHtml(phase.name)}</h2>
          <p>${escapeHtml(phase.description)}</p>
          <dl><div><dt>Periode</dt><dd>${escapeHtml(week.periodLabel)}</dd></div><div><dt>Volume</dt><dd>${escapeHtml(getWeekPlannedLabel(week))}</dd></div><div><dt>Planning</dt><dd>${week.planningMode === "calendar" ? "Vaste dagen inclusief rust" : "Flexibele sessievolgorde"}</dd></div></dl>
          <button type="button" data-open-week="${weeks.indexOf(week)}">Bekijk week</button>
        </article>`;
      }).join("")}</section>`;
  }

  function renderStatistics() {
    const metrics = dashboardMetrics();
    app.innerHTML = `<header class="page-header"><span>Voortgang FINAL V3</span><h1>Statistiek</h1><p>Rustdagen en krachttraining tellen niet mee als looptraining of kilometers.</p></header>
      <section class="target-summary stats-summary">
        <div><span>Gepland vóór race</span><strong>${formatNumber(metrics.totalPlannedKm, 2)} km</strong></div>
        <div><span>Voltooid</span><strong>${formatNumber(metrics.totalCompletedKm, 2)} km</strong></div>
        <div><span>MP gepland</span><strong>${plan.config.programmedMpMinutes} min</strong></div>
      </section>
      ${renderWeeklyDistanceChart(metrics)}
      ${renderCumulativeDistanceChart(metrics)}
      ${renderTestAndConfidenceHistory()}`;
  }

  function renderInfo() {
    const sections = [
      ["Tempo en afkortingen", [
        "km/u: snelheid in kilometer per uur.",
        "RPE: ervaren inspanning op een schaal van 1 tot 10.",
        "MP: marathontempo; in FINAL V3 praktisch 12,1 km/u.",
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
      ["Voeding tijdens trainingen", plan.guidance.fueling.map((item) => typeof item === "string" ? item : `${item.duration}: ${item.carbs}`)],
      ["Wanneer is 3:30 geloofwaardig?", plan.guidance.targetConfirmation],
      ["Confidence-ladder", plan.guidance.testTimeline || []],
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
      state.focusQueueUserBrowsing = false;
      state.focusCompletedExpanded = false;
      state.focusLastActiveIndex = -1;
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
    document.body?.classList?.toggle("treadmill-focus-active", state.view === VIEWS.TREADMILL && ["running", "paused"].includes(treadmillTimer.status));
    if (state.view === VIEWS.TREADMILL) renderTreadmillMode();
    else if (state.view === VIEWS.MARATHON) renderMarathonOverview();
    else if (state.view === VIEWS.PLAN) renderPlan();
    else if (state.view === VIEWS.PHASES) renderPhases();
    else if (state.view === VIEWS.STATS) renderStatistics();
    else if (state.view === VIEWS.INFO) renderInfo();
    else if (state.view === VIEWS.WEEK) renderWeek();
    else renderToday();
  }

  function toggleWorkoutDetails(workoutId) {
    if (state.expandedWorkoutIds.has(workoutId)) state.expandedWorkoutIds.delete(workoutId);
    else state.expandedWorkoutIds.add(workoutId);
    render();
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

    const toggle = event.target.closest("[data-toggle-workout]");
    if (toggle) {
      toggleWorkoutDetails(toggle.dataset.toggleWorkout);
      return;
    }

    const card = event.target.closest("[data-workout-card]");
    if (card && !event.target.closest("button, a, select, summary, input, textarea, label, .training-details")) {
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
    if (event.target.matches("[data-fuel-workout][data-fuel-field]")) {
      saveFuelField(event.target.dataset.fuelWorkout, event.target.dataset.fuelField, event.target.value);
      return;
    }
    if (event.target.matches("[data-notification-setting][data-workout-id]")) {
      const field = event.target.dataset.notificationSetting;
      const value = Boolean(event.target.checked);
      saveNotificationSetting(event.target.dataset.workoutId, field, value);
      renderTreadmillMode();
      return;
    }
    if (event.target.matches("[data-week-select]")) {
      state.viewedWeekIndex = Number(event.target.value);
      state.expandedWorkoutIds.clear();
      renderWeek();
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.matches("[data-fuel-workout][data-fuel-field]")) {
      saveFuelField(event.target.dataset.fuelWorkout, event.target.dataset.fuelField, event.target.value);
      return;
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
    getWeekPlannedKm,
    getWeekCompletedKm,
    getWeekPlannedLabel,
    dashboardMetrics,
  };
})();
