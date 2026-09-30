import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";

const trainingDataCode = fs.readFileSync(new URL("../training-data.js", import.meta.url), "utf8");
const notificationModelCode = fs.readFileSync(new URL("../notification-model.js", import.meta.url), "utf8");
const pushConfigCode = fs.readFileSync(new URL("../push-config.js", import.meta.url), "utf8");
const appCode = fs.readFileSync(new URL("../app.js", import.meta.url), "utf8");

function createClassList() {
  const values = new Set();
  return { toggle(name, active) { if (active) values.add(name); else values.delete(name); }, contains(name) { return values.has(name); }, remove(name) { values.delete(name); } };
}

function createStorage(seed = new Map()) {
  return { values: seed, getItem(key) { return this.values.has(key) ? this.values.get(key) : null; }, setItem(key, value) { this.values.set(key, String(value)); }, removeItem(key) { this.values.delete(key); } };
}

function createHarness(storageValues = new Map(), search = "?date=2026-09-21") {
  let clock = Date.parse("2026-09-21T10:00:00Z");
  const listeners = {};
  const windowListeners = {};
  const app = { innerHTML: "", querySelector() { return null; }, querySelectorAll() { return []; } };
  const storageWarning = { hidden: true, textContent: "" };
  const brandHome = { addEventListener(type, handler) { this[type] = handler; } };
  const navButtons = ["today", "week", "plan", "phases", "stats", "info"].map((view) => ({ dataset: { view }, classList: createClassList(), setAttribute() {}, removeAttribute() {} }));
  const document = {
    visibilityState: "visible", body: { classList: createClassList() },
    getElementById(id) { return id === "app" ? app : id === "brand-home" ? brandHome : id === "storage-warning" ? storageWarning : null; },
    querySelectorAll(selector) { return selector === "[data-view]" ? navButtons : []; },
    addEventListener(type, handler) { listeners[type] = handler; },
  };
  const localStorage = createStorage(storageValues);
  const window = {
    document, localStorage, location: { search, href: `https://example.test/marathon-330/${search}` }, navigator: {},
    confirm() { return true; }, scrollTo() {}, setInterval() { return 1; }, clearInterval() {}, setTimeout(callback) { callback(); },
    addEventListener(type, handler) { windowListeners[type] = handler; }, matchMedia() { return { matches: false }; },
  };
  window.window = window;
  const context = vm.createContext({ console, Date, Intl, URL, URLSearchParams, window, document, localStorage, navigator: window.navigator, structuredClone });
  vm.runInContext(trainingDataCode, context, { filename: "training-data.js" });
  vm.runInContext(notificationModelCode, context, { filename: "notification-model.js" });
  vm.runInContext(pushConfigCode, context, { filename: "push-config.js" });
  vm.runInContext(appCode, context, { filename: "app.js" });

  const targetFor = (matchers) => ({ closest(selector) { return matchers[selector] || null; }, matches(selector) { return Boolean(matchers[selector]); }, value: matchers.value, checked: matchers.checked, dataset: matchers.dataset || {} });
  const click = (matchers) => listeners.click({ target: targetFor(matchers), stopPropagation() {} });
  const change = (matchers) => listeners.change({ target: targetFor(matchers) });
  const input = (matchers) => listeners.input({ target: targetFor(matchers) });
  return { app, brandHome, click, change, input, context, localStorage, listeners, windowListeners, navButtons, storageWarning };
}

test("Vandaag gebruikt in flexibele weken de eerstvolgende open sessie", () => {
  const storage = new Map();
  const harness = createHarness(storage, "?date=2026-09-21");
  const workout = harness.context.window.MARATHON_PLAN.weeks[0].workouts[0];

  assert.match(harness.app.innerHTML, /Vandaag/);
  assert.match(harness.app.innerHTML, /Flexibele week/);
  assert.match(harness.app.innerHTML, /Rustige duur/);
  assert.match(harness.app.innerHTML, /Daarna kracht · Sessie A-light/);

  harness.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: workout.workoutId } } });
  assert.match(harness.app.innerHTML, /Kracht · Sessie A-light/);
  assert.match(harness.app.innerHTML, /Bulgarian split squat/);
  assert.match(harness.app.innerHTML, /Eerst hardlopen, daarna krachttraining/);

  harness.click({ "[data-toggle-complete]": { dataset: { toggleComplete: workout.workoutId } } });
  assert.match(harness.app.innerHTML, /2 × 12 min MP/);
  const saved = JSON.parse(storage.get("marathon330TrainingAppData_v1"));
  assert.equal(saved.appDataVersion, 10);
  assert.equal(saved.workoutLogs[workout.workoutId].completed, true);
});

test("Vandaag volgt in taperweken exact de kalenderdag", () => {
  const rest = createHarness(new Map(), "?date=2026-11-20");
  assert.match(rest.app.innerHTML, /Vrijdag · 20 november/i);
  assert.match(rest.app.innerHTML, />Rust</);
  assert.doesNotMatch(rest.app.innerHTML, /Shakeout/);

  const shakeout = createHarness(new Map(), "?date=2026-11-21");
  assert.match(shakeout.app.innerHTML, /Zaterdag 21 november/);
  assert.match(shakeout.app.innerHTML, /Shakeout/i);
  assert.match(shakeout.app.innerHTML, /20 min/);

  const marathon = createHarness(new Map(), "?date=2026-11-22");
  assert.match(marathon.app.innerHTML, /Zondag 22 november/);
  assert.match(marathon.app.innerHTML, /42,195 km/);
  assert.match(marathon.app.innerHTML, /Marathon/i);
});

test("Week toont flexibel W39 en zeven vaste dagkaarten vanaf W45", () => {
  const flexible = createHarness(new Map(), "?date=2026-09-21");
  flexible.click({ "[data-view]": { dataset: { view: "week" } } });
  assert.match(flexible.app.innerHTML, /Week 39/);
  assert.match(flexible.app.innerHTML, /ma – wo – vr – zo/);
  assert.equal((flexible.app.innerHTML.match(/<article class="training-card/g) || []).length, 4);
  assert.doesNotMatch(flexible.app.innerHTML, /op 0 km\/u/);
  assert.match(flexible.app.innerHTML, /50 min · ±8,41 km/);
  assert.match(flexible.app.innerHTML, /Buiten · tempo op gevoel/);

  flexible.change({ "[data-week-select]": true, value: "6" });
  assert.match(flexible.app.innerHTML, /Week 45/);
  assert.match(flexible.app.innerHTML, /Vaste kalenderplanning/);
  assert.equal((flexible.app.innerHTML.match(/<article class="training-card/g) || []).length, 4);
  assert.equal((flexible.app.innerHTML.match(/class="rest-day-card"/g) || []).length, 3);
  assert.match(flexible.app.innerHTML, /Maandag · 2 november/);
  assert.match(flexible.app.innerHTML, /Zondag 8 november/);
});

test("Schema, Fases, Statistiek, Informatie en Marathonoverzicht gebruiken FINAL V4", () => {
  const harness = createHarness();
  harness.click({ "[data-view]": { dataset: { view: "plan" } } });
  assert.equal((harness.app.innerHTML.match(/<button class="plan-row/g) || []).length, 9);
  assert.match(harness.app.innerHTML, /±77,73 km totaal/);
  assert.match(harness.app.innerHTML, /±14,01 km vóór race · ±56,21 km incl\. marathon/);
  assert.match(harness.app.innerHTML, /3 trainingen \+ marathon · 3 rustdagen/);

  harness.click({ "[data-view]": { dataset: { view: "phases" } } });
  assert.equal((harness.app.innerHTML.match(/class="phase-card/g) || []).length, 10);
  assert.match(harness.app.innerHTML, /volume-piek ligt in week 43/i);
  assert.match(harness.app.innerHTML, /zwaarste marathonspecifieke long run volgt in week 44/i);
  assert.match(harness.app.innerHTML, /Outdoor \/ Garmin en loopband/);
  assert.match(harness.app.innerHTML, /Outdoor \/ Garmin is de standaard/i);
  assert.match(harness.app.innerHTML, /Heart Rate voor easy, recovery en Zone 2/);

  harness.click({ "[data-view]": { dataset: { view: "stats" } } });
  assert.match(harness.app.innerHTML, /Statistiek/);
  assert.match(harness.app.innerHTML, /483,65 km/);
  assert.match(harness.app.innerHTML, /328 min/);
  assert.match(harness.app.innerHTML, /Weekvolume/);

  harness.click({ "[data-view]": { dataset: { view: "info" } } });
  assert.match(harness.app.innerHTML, /12,1 km\/u/);
  assert.match(harness.app.innerHTML, /Confidence-ladder/);
  assert.match(harness.app.innerHTML, /Versie 2026\.09\.30-1/);
  assert.doesNotMatch(harness.app.innerHTML, /Fitness Check/i);

  harness.brandHome.click();
  assert.match(harness.app.innerHTML, /Marathon 3:30/);
  assert.match(harness.app.innerHTML, /39[\s\S]*Trainingen te gaan/);
  assert.match(harness.app.innerHTML, /483,7[\s\S]*km vóór de marathon/);
  assert.match(harness.app.innerHTML, /Confidence-ladder/);
  assert.doesNotMatch(harness.app.innerHTML, /fitnesscheck/i);
});

test("Week en trainingsdetails tonen de nieuwe W40- en W41-prikkels met hun voorwaarden", () => {
  const w40Harness = createHarness(new Map(), "?date=2026-09-28");
  const w40 = w40Harness.context.window.MARATHON_PLAN.weeks.find((week) => week.weekNumber === 40).workouts[2];
  w40Harness.click({ "[data-view]": { dataset: { view: "week" } } });
  assert.match(w40Harness.app.innerHTML, /Easy \+ optionele strides/);
  assert.match(w40Harness.app.innerHTML, /OPTIONEEL · ALLEEN BIJ VOLLEDIG HERSTEL|OPTIONEEL — ALLEEN BIJ VOLLEDIG HERSTEL/);
  assert.match(w40Harness.app.innerHTML, /55 min · ±9,20 km/);
  assert.match(w40Harness.app.innerHTML, /Loopbandmodus/);
  assert.equal(w40.surface, "loopband");
  assert.equal(w40.outdoorSimpleMode, false);
  w40Harness.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: w40.workoutId } } });
  assert.match(w40Harness.app.innerHTML, /geen sprint en geen conditietest/i);
  assert.match(w40Harness.app.innerHTML, /Deze strides tellen niet als marathonpace-minuten/i);

  const w41Harness = createHarness(new Map(), "?date=2026-10-05");
  const w41 = w41Harness.context.window.MARATHON_PLAN.weeks.find((week) => week.weekNumber === 41).workouts[2];
  w41Harness.click({ "[data-view]": { dataset: { view: "week" } } });
  assert.match(w41Harness.app.innerHTML, /Middellange Zone 2 \+ controlled fast/);
  assert.match(w41Harness.app.innerHTML, /90 min · ±15,81 km/);
  w41Harness.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: w41.workoutId } } });
  assert.match(w41Harness.app.innerHTML, /gebruik dan 12,6 km\/u/i);
  assert.match(w41Harness.app.innerHTML, /De 9 minuten tellen niet mee als marathonpace-minuten/i);

  const w41Easy = w41Harness.context.window.MARATHON_PLAN.weeks.find((week) => week.weekNumber === 41).workouts[1];
  assert.equal(w41Easy.surface, "buiten");
  assert.equal(w41Easy.locationStatus, "Outdoor / Garmin standaard");
});

test("trainingsdetails openen standaard Garmin Setup en wisselen zonder statusverlies naar loopband", () => {
  const harness = createHarness(new Map(), "?date=2026-10-05");
  const workout = harness.context.window.MARATHON_PLAN.weeks.find((week) => week.weekNumber === 41).workouts[1];
  harness.click({ "[data-view]": { dataset: { view: "week" } } });
  harness.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: workout.workoutId } } });

  assert.match(harness.app.innerHTML, /Garmin Setup/);
  assert.match(harness.app.innerHTML, /Heart Rate/);
  assert.match(harness.app.innerHTML, /Zone 2/);
  assert.match(harness.app.innerHTML, /Programmeer in Garmin als:/);
  assert.doesNotMatch(harness.app.innerHTML, /\bbpm\b/i);

  harness.click({ "[data-workout-mode][data-workout-id]": { dataset: { workoutMode: "treadmill", workoutId: workout.workoutId } } });
  assert.match(harness.app.innerHTML, /Gelijkwaardig alternatief/);
  assert.match(harness.app.innerHTML, /Open volledige Loopband Focus Mode/);
  assert.match(harness.app.innerHTML, /10,3 km\/u/);
  assert.match(harness.app.innerHTML, />0%/);
  assert.equal(harness.context.window.MarathonApp.isCompleted(workout.workoutId), false);
});

test("het Garmin-raceplan toont ook het exact vereiste marathongemiddelde", () => {
  const harness = createHarness(new Map(), "?date=2026-11-22");
  const marathon = harness.context.window.MARATHON_PLAN.weeks.find((week) => week.weekNumber === 47).workouts[3];
  harness.click({ "[data-view]": { dataset: { view: "week" } } });
  harness.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: marathon.workoutId } } });
  assert.match(harness.app.innerHTML, /Exact gemiddeld/);
  assert.match(harness.app.innerHTML, /4:58,61\/km/);
  assert.match(harness.app.innerHTML, /geen tijd bankieren/i);
  assert.match(harness.app.innerHTML, /80 g koolhydraten\/u/);
});

test("Loopbandmodus gebruikt dezelfde W42-blokken en nul procent helling", () => {
  const harness = createHarness(new Map(), "?date=2026-10-12");
  const workout = harness.context.window.MARATHON_PLAN.weeks.find((week) => week.weekNumber === 42).workouts[0];
  const timeline = harness.context.window.MarathonApp.buildTreadmillTimeline(workout);
  assert.equal(timeline.totalSeconds, 70 * 60);
  assert.equal(timeline.blocks.length, 11);
  assert.equal(timeline.blocks.filter((block) => block.speedKmh === 12.7).length, 4);
  assert.ok(timeline.blocks.every((block) => block.inclinePercent === 0));
  assert.deepEqual(Array.from(timeline.blocks.slice(0, 4), (block) => [block.startSeconds, block.endSeconds]), [[0,600],[600,900],[900,1260],[1260,1440]]);

  harness.click({ "[data-open-treadmill]": { dataset: { openTreadmill: workout.workoutId } } });
  assert.match(harness.app.innerHTML, /Loopbandblokken/);
  assert.match(harness.app.innerHTML, /15:00 – 21:00/);
  assert.match(harness.app.innerHTML, /12,7 km\/u/);
  assert.match(harness.app.innerHTML, />0%/);
});

test("fueling en voltooiing worden direct onder dezelfde opslagkey bewaard", () => {
  const storage = new Map();
  const harness = createHarness(storage, "?date=2026-10-18");
  const workout = harness.context.window.MARATHON_PLAN.weeks.find((week) => week.weekNumber === 42).workouts[4];
  harness.input({ "[data-fuel-workout][data-fuel-field]": true, dataset: { fuelWorkout: workout.workoutId, fuelField: "carbsPerHour" }, value: "80" });
  harness.click({ "[data-toggle-complete]": { dataset: { toggleComplete: workout.workoutId } } });
  const saved = JSON.parse(storage.get("marathon330TrainingAppData_v1"));
  assert.equal(saved.nutritionLogs[workout.workoutId].carbsPerHour, "80");
  assert.match(saved.completedSessions[workout.workoutId].completedAt, /^\d{4}-\d{2}-\d{2}$/);
  assert.equal(saved.completedSessions[workout.workoutId].completedAt, saved.workoutLogs[workout.workoutId].completedDate);
  const reloaded = createHarness(storage, "?date=2026-10-18");
  assert.equal(reloaded.context.window.MarathonApp.isCompleted(workout.workoutId), true);
});

test("migratie archiveert gewijzigde oude voorschriften zonder overige data te wissen", () => {
  const storage = new Map();
  storage.set("marathon330TrainingAppData_v1", JSON.stringify({
    appDataVersion: 5, createdAt: "2026-09-01T00:00:00.000Z", updatedAt: "2026-09-19T00:00:00.000Z",
    workoutLogs: { "marathon-3u30-w39-t1": { completed: true, completedDate: "2026-09-18" } },
    completedSessions: { "marathon-3u30-w39-t1": { completedAt: "2026-09-18" } },
    testResults: {}, nutritionLogs: {}, userSettings: { customSetting: "bewaren", notificationSettings: {}, notificationDefaults: {} }, uiState: {}, legacyData: {}, meta: { schemaVersion: "marathon-3u30-verfijnd-2026.09.02-1" },
  }));
  const harness = createHarness(storage);
  const saved = JSON.parse(storage.get("marathon330TrainingAppData_v1"));
  assert.equal(saved.appDataVersion, 10);
  assert.equal(saved.userSettings.customSetting, "bewaren");
  assert.equal(saved.workoutLogs["marathon-3u30-w39-t1"], undefined);
  assert.equal(saved.legacyData.finalV3Migration.workouts["marathon-3u30-w39-t1"].workoutLogs.completed, true);
  assert.equal(harness.context.window.MarathonApp.isCompleted("marathon-3u30-w39-t1"), false);
});

test("speed-reserve-migratie archiveert alleen de twee gewijzigde protocollen", () => {
  const storage = new Map();
  storage.set("marathon330TrainingAppData_v1", JSON.stringify({
    appDataVersion: 6, createdAt: "2026-09-20T00:00:00.000Z", updatedAt: "2026-09-24T00:00:00.000Z",
    workoutLogs: {
      "marathon-3u30-w40-t3": { completed: true, completedDate: "2026-10-02" },
      "marathon-3u30-w41-t3": { completed: true, completedDate: "2026-10-08" },
      "marathon-3u30-w42-t3": { completed: true, completedDate: "2026-10-15" },
    },
    completedSessions: {
      "marathon-3u30-w40-t3": { completedAt: "2026-10-02" },
      "marathon-3u30-w41-t3": { completedAt: "2026-10-08" },
      "marathon-3u30-w42-t3": { completedAt: "2026-10-15" },
    },
    testResults: {}, nutritionLogs: {}, userSettings: { customSetting: "bewaren", notificationSettings: {}, notificationDefaults: {} }, uiState: {}, legacyData: {}, meta: { schemaVersion: "marathon-3u30-final-v3-2026.09.20-1" },
  }));
  const harness = createHarness(storage);
  const saved = JSON.parse(storage.get("marathon330TrainingAppData_v1"));
  assert.equal(saved.appDataVersion, 10);
  assert.equal(saved.userSettings.customSetting, "bewaren");
  assert.equal(saved.workoutLogs["marathon-3u30-w40-t3"], undefined);
  assert.equal(saved.workoutLogs["marathon-3u30-w41-t3"], undefined);
  assert.equal(saved.completedSessions["marathon-3u30-w40-t3"], undefined);
  assert.equal(saved.completedSessions["marathon-3u30-w41-t3"], undefined);
  assert.equal(saved.legacyData.speedReserveMigration.workouts["marathon-3u30-w40-t3"].workoutLogs.completed, true);
  assert.equal(saved.legacyData.speedReserveMigration.workouts["marathon-3u30-w41-t3"].workoutLogs.completed, true);
  assert.equal(saved.workoutLogs["marathon-3u30-w42-t3"].completed, true);
  assert.equal(harness.context.window.MarathonApp.isCompleted("marathon-3u30-w42-t3"), true);
});

test("Máximapark-migratie archiveert alleen de vijf gewijzigde easy-voorschriften", () => {
  const storage = new Map();
  storage.set("marathon330TrainingAppData_v1", JSON.stringify({
    appDataVersion: 7, createdAt: "2026-09-20T00:00:00.000Z", updatedAt: "2026-09-25T00:00:00.000Z",
    workoutLogs: {
      "marathon-3u30-w41-t2": { completed: true, completedDate: "2026-10-07" },
      "marathon-3u30-w42-t3": { completed: true, completedDate: "2026-10-15" },
    },
    completedSessions: {
      "marathon-3u30-w41-t2": { completedAt: "2026-10-07" },
      "marathon-3u30-w42-t3": { completedAt: "2026-10-15" },
    },
    testResults: {}, nutritionLogs: {}, userSettings: { customSetting: "bewaren", notificationSettings: {}, notificationDefaults: {} }, uiState: {}, legacyData: {}, meta: { schemaVersion: "marathon-3u30-final-v3-2026.09.25-1" },
  }));
  const harness = createHarness(storage);
  const saved = JSON.parse(storage.get("marathon330TrainingAppData_v1"));
  assert.equal(saved.appDataVersion, 10);
  assert.equal(saved.userSettings.customSetting, "bewaren");
  assert.equal(saved.workoutLogs["marathon-3u30-w41-t2"], undefined);
  assert.equal(saved.completedSessions["marathon-3u30-w41-t2"], undefined);
  assert.equal(saved.legacyData.maximaparkMigration.workouts["marathon-3u30-w41-t2"].workoutLogs.completed, true);
  assert.equal(saved.workoutLogs["marathon-3u30-w42-t3"].completed, true);
  assert.equal(harness.context.window.MarathonApp.isCompleted("marathon-3u30-w42-t3"), true);
});

test("uitvoeringsmodus-migratie bewaart bestaande gebruikersdata actief", () => {
  const storage = new Map();
  storage.set("marathon330TrainingAppData_v1", JSON.stringify({
    appDataVersion: 8, createdAt: "2026-09-20T00:00:00.000Z", updatedAt: "2026-09-25T00:00:00.000Z",
    workoutLogs: {
      "marathon-3u30-w45-t2": { completed: true, completedDate: "2026-11-04", note: "bewaren" },
      "marathon-3u30-w45-t3": { completed: true, completedDate: "2026-11-05" },
    },
    completedSessions: {
      "marathon-3u30-w45-t2": { completedAt: "2026-11-04" },
      "marathon-3u30-w45-t3": { completedAt: "2026-11-05" },
    },
    testResults: {}, nutritionLogs: {}, userSettings: { notificationSettings: {}, notificationDefaults: {} }, uiState: {}, legacyData: {}, meta: { schemaVersion: "marathon-3u30-final-v3-2026.09.25-2" },
  }));
  const harness = createHarness(storage);
  const saved = JSON.parse(storage.get("marathon330TrainingAppData_v1"));
  assert.equal(saved.appDataVersion, 10);
  assert.equal(saved.workoutLogs["marathon-3u30-w45-t2"].note, "bewaren");
  assert.equal(saved.completedSessions["marathon-3u30-w45-t2"].completedAt, "2026-11-04");
  assert.equal(saved.workoutLogs["marathon-3u30-w45-t3"].completed, true);
  assert.equal(saved.legacyData.executionModeMigration.userDataPreserved, true);
  assert.ok(saved.legacyData.executionModeMigration.changedWorkoutIds.includes("marathon-3u30-w45-t2"));
  assert.equal(harness.context.window.MarathonApp.isCompleted("marathon-3u30-w45-t2"), true);
});

test("Garmin V4-migratie bewaart V3-voortgang, notities en voeding actief", () => {
  const workoutId = "marathon-3u30-w43-t1";
  const storage = new Map([["marathon330TrainingAppData_v1", JSON.stringify({
    appDataVersion: 9,
    createdAt: "2026-09-25T00:00:00.000Z",
    updatedAt: "2026-09-29T00:00:00.000Z",
    workoutLogs: { [workoutId]: { completed: true, completedDate: "2026-10-20", note: "blijft bewaard" } },
    completedSessions: { [workoutId]: { completedAt: "2026-10-20" } },
    testResults: {},
    nutritionLogs: { [workoutId]: { note: "voeding blijft bewaard" } },
    userSettings: { notificationSettings: {}, notificationDefaults: {} },
    uiState: {}, legacyData: {}, meta: { schemaVersion: "marathon-3u30-final-v3-2026.09.25-3" },
  })]]);
  const harness = createHarness(storage);
  const saved = JSON.parse(storage.get("marathon330TrainingAppData_v1"));
  assert.equal(saved.appDataVersion, 10);
  assert.equal(saved.workoutLogs[workoutId].note, "blijft bewaard");
  assert.equal(saved.completedSessions[workoutId].completedAt, "2026-10-20");
  assert.equal(saved.nutritionLogs[workoutId].note, "voeding blijft bewaard");
  assert.equal(saved.legacyData.garminOutdoorV4Migration.userDataPreserved, true);
  assert.ok(saved.legacyData.garminOutdoorV4Migration.changedWorkoutIds.includes(workoutId));
  assert.equal(harness.context.window.MarathonApp.isCompleted(workoutId), true);
});

test("lege opslag initialiseert gezond en corrupte opslag wordt niet overschreven", () => {
  const empty = new Map();
  createHarness(empty);
  const initialized = JSON.parse(empty.get("marathon330TrainingAppData_v1"));
  assert.equal(initialized.appDataVersion, 10);
  assert.equal(initialized.meta.storageInitialized, true);

  const corrupt = new Map([["marathon330TrainingAppData_v1", "{kapot"]]);
  const harness = createHarness(corrupt);
  assert.equal(corrupt.get("marathon330TrainingAppData_v1"), "{kapot");
  assert.equal(harness.storageWarning.hidden, false);
  assert.match(harness.storageWarning.textContent, /originele opslag is behouden/i);
});
