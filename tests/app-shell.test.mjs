import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";

const trainingDataCode = fs.readFileSync(new URL("../training-data.js", import.meta.url), "utf8");
const notificationModelCode = fs.readFileSync(new URL("../notification-model.js", import.meta.url), "utf8");
const pushConfigCode = fs.readFileSync(new URL("../push-config.js", import.meta.url), "utf8");
const appCode = fs.readFileSync(new URL("../app.js", import.meta.url), "utf8");
const STORAGE_KEY = "marathon330TrainingAppData_v1";

function createClassList() {
  const values = new Set();
  return { toggle(name, active) { if (active) values.add(name); else values.delete(name); }, contains(name) { return values.has(name); }, remove(name) { values.delete(name); } };
}

function createStorage(seed = new Map()) {
  return { values: seed, getItem(key) { return this.values.has(key) ? this.values.get(key) : null; }, setItem(key, value) { this.values.set(key, String(value)); }, removeItem(key) { this.values.delete(key); } };
}

function createHarness(storageValues = new Map(), search = "?date=2026-10-05") {
  const listeners = {};
  const windowListeners = {};
  const app = { innerHTML: "", querySelector() { return null; }, querySelectorAll() { return []; } };
  const storageWarning = { hidden: true, textContent: "" };
  const brandHome = { addEventListener(type, handler) { this[type] = handler; } };
  const navButtons = ["today", "week", "plan", "phases", "stats", "info"].map((view) => ({ dataset: { view }, classList: createClassList(), setAttribute() {}, removeAttribute() {} }));
  const document = {
    visibilityState: "visible",
    body: { classList: createClassList() },
    getElementById(id) { return id === "app" ? app : id === "brand-home" ? brandHome : id === "storage-warning" ? storageWarning : null; },
    querySelectorAll(selector) { return selector === "[data-view]" ? navButtons : []; },
    addEventListener(type, handler) { listeners[type] = handler; },
  };
  const localStorage = createStorage(storageValues);
  const window = {
    document,
    localStorage,
    location: { search, href: `https://example.test/marathon-330/${search}` },
    navigator: {},
    confirm() { return true; },
    scrollTo() {},
    setInterval() { return 1; },
    clearInterval() {},
    setTimeout(callback) { callback(); },
    addEventListener(type, handler) { windowListeners[type] = handler; },
    matchMedia() { return { matches: false }; },
  };
  window.window = window;
  const context = vm.createContext({ console, Date, Intl, URL, URLSearchParams, window, document, localStorage, navigator: window.navigator, structuredClone });
  vm.runInContext(trainingDataCode, context, { filename: "training-data.js" });
  vm.runInContext(notificationModelCode, context, { filename: "notification-model.js" });
  vm.runInContext(pushConfigCode, context, { filename: "push-config.js" });
  vm.runInContext(appCode, context, { filename: "app.js" });

  const targetFor = (matchers) => ({
    closest(selector) { return matchers[selector] || null; },
    matches(selector) { return Boolean(matchers[selector]); },
    value: matchers.value,
    checked: matchers.checked,
    dataset: matchers.dataset || {},
  });
  const click = (matchers) => listeners.click({ target: targetFor(matchers), stopPropagation() {} });
  const change = (matchers) => listeners.change({ target: targetFor(matchers) });
  const input = (matchers) => listeners.input({ target: targetFor(matchers) });
  return { app, brandHome, click, change, input, context, localStorage, listeners, windowListeners, navButtons, storageWarning };
}

test("lege opslag start geldig op FINAL V5 en toont W41 als ORANGE", () => {
  const harness = createHarness();
  assert.match(harness.app.innerHTML, /Vandaag/);
  assert.equal(harness.context.window.MARATHON_PLAN.config.planSubtitle, "FINAL V5 · Garmin / Outdoor");
  assert.equal(harness.context.window.MARATHON_MODEL.resolvePlan({ workoutLogs: {}, userSettings: { weekDecisions: {} } })[0].status, "orange");
  const saved = JSON.parse(harness.localStorage.getItem(STORAGE_KEY));
  assert.equal(saved.appDataVersion, 11);
  assert.equal(saved.activePlanId, "marathon-final-v5-2026");
  assert.deepEqual(saved.workoutLogs, {});
});

test("Week toont vier runs, één fietsrit, rustdagen en het zichtbare herstelbesluit", () => {
  const harness = createHarness();
  harness.click({ "[data-view]": { dataset: { view: "week" } } });
  assert.match(harness.app.innerHTML, /Week 41/);
  assert.match(harness.app.innerHTML, /Herstelbesluit/);
  assert.match(harness.app.innerHTML, /Ontbrekende of onvolledige hersteldata betekenen ORANGE/);
  assert.equal((harness.app.innerHTML.match(/<article class="training-card/g) || []).length, 5);
  assert.equal((harness.app.innerHTML.match(/class="rest-day-card"/g) || []).length, 2);
  assert.match(harness.app.innerHTML, /Rustig fietsen/);
  assert.doesNotMatch(harness.app.innerHTML, /Sessie A|Sessie B|krachttraining/i);
});

test("trainingdetail gebruikt Garmin Open / Vrij en dezelfde 0%-loopbanddata", () => {
  const harness = createHarness();
  const workout = harness.context.window.MARATHON_PLAN.weekVariants[41].max[0];
  harness.click({ "[data-view]": { dataset: { view: "week" } } });
  harness.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: workout.workoutId } } });
  assert.match(harness.app.innerHTML, /Programmeer in Garmin als/i);
  assert.match(harness.app.innerHTML, /Open \/ Vrij/);
  assert.match(harness.app.innerHTML, /Loopband/);
  harness.click({ "[data-workout-mode][data-workout-id]": { dataset: { workoutMode: "treadmill", workoutId: workout.workoutId } } });
  assert.match(harness.app.innerHTML, /7–8,5 km\/u/);
  assert.match(harness.app.innerHTML, />0%?</);
});

test("Schema, Fases, Statistiek, Informatie en marathonoverzicht tonen de V5-minutenlogica", () => {
  const harness = createHarness();
  harness.click({ "[data-view]": { dataset: { view: "plan" } } });
  assert.equal((harness.app.innerHTML.match(/<button class="plan-row/g) || []).length, 7);
  assert.match(harness.app.innerHTML, /FINAL V5/);
  assert.match(harness.app.innerHTML, /165 min loopsessies · 145 min lopen · 20 min wandelen · 60 min fiets/);
  assert.doesNotMatch(harness.app.innerHTML, /km totaal/);

  harness.click({ "[data-view]": { dataset: { view: "phases" } } });
  assert.equal((harness.app.innerHTML.match(/class="phase-card/g) || []).length, 8);
  assert.match(harness.app.innerHTML, /Herstelgestuurde heropbouw/i);
  assert.match(harness.app.innerHTML, /0% helling/);

  harness.click({ "[data-view]": { dataset: { view: "stats" } } });
  assert.match(harness.app.innerHTML, /Loopsessietijd per week/);
  assert.match(harness.app.innerHTML, /Cumulatieve loopsessieminuten/);
  assert.match(harness.app.innerHTML, /0 min/);

  harness.click({ "[data-view]": { dataset: { view: "info" } } });
  assert.match(harness.app.innerHTML, /Actief tijdsdoel/);
  assert.match(harness.app.innerHTML, /Nog niet vastgesteld/);
  assert.match(harness.app.innerHTML, /Historische ambitie/);
  assert.match(harness.app.innerHTML, /Versie 2026\.10\.03-1/);
  assert.doesNotMatch(harness.app.innerHTML, /12,1 km\/u|4:59\/km/);

  harness.brandHome.click();
  assert.match(harness.app.innerHTML, /Marathon 2026/);
  assert.match(harness.app.innerHTML, /Actief tijdsdoel/);
  assert.match(harness.app.innerHTML, /Taperbasis/);
  assert.match(harness.app.innerHTML, /afstand wordt alleen uit je eigen logs/i);
});

test("werkelijke invoer wordt meteen in dezelfde centrale opslag opgeslagen", () => {
  const harness = createHarness();
  const workout = harness.context.window.MARATHON_PLAN.weekVariants[41].max[0];
  harness.input({
    "[data-workout-log][data-workout-field]": true,
    dataset: { workoutLog: workout.workoutId, workoutField: "actualTotalMinutes" },
    value: "27",
  });
  harness.input({
    "[data-workout-log][data-workout-field]": true,
    dataset: { workoutLog: workout.workoutId, workoutField: "actualDistanceKm" },
    value: "3.42",
  });
  const saved = JSON.parse(harness.localStorage.getItem(STORAGE_KEY));
  assert.equal(saved.workoutLogs[workout.workoutId].actualTotalMinutes, 27);
  assert.equal(saved.workoutLogs[workout.workoutId].actualDistanceKm, 3.42);
  assert.equal(saved.workoutLogs[workout.workoutId].activityType, "run");
  assert.equal(saved.workoutLogs[workout.workoutId].role, "short");
});

test("voltooien bewaart V5-metadata en blijft na herladen zichtbaar", () => {
  const storage = new Map();
  let harness = createHarness(storage);
  const workout = harness.context.window.MARATHON_PLAN.weekVariants[41].max[0];
  harness.click({ "[data-toggle-complete]": { dataset: { toggleComplete: workout.workoutId } } });
  let saved = JSON.parse(storage.get(STORAGE_KEY));
  assert.equal(saved.workoutLogs[workout.workoutId].completed, true);
  assert.equal(saved.workoutLogs[workout.workoutId].schemaVersion, "marathon-final-v5-garmin-outdoor-2026.10.03-1");
  assert.equal(saved.workoutLogs[workout.workoutId].activityType, "run");

  harness = createHarness(storage);
  harness.click({ "[data-view]": { dataset: { view: "week" } } });
  assert.match(harness.app.innerHTML, /Voltooid/);
});

test("een oud V4-logboek wordt idempotent gearchiveerd en niet aan V5 gekoppeld", () => {
  const oldId = "week43-training5";
  const seed = new Map([[STORAGE_KEY, JSON.stringify({
    appDataVersion: 10,
    createdAt: "2026-09-30T10:00:00.000Z",
    updatedAt: "2026-09-30T10:00:00.000Z",
    workoutLogs: { [oldId]: { workoutId: oldId, completed: true, note: "historische notitie" } },
    completedSessions: { [oldId]: { completedAt: "2026-09-30" } },
    userSettings: {},
    meta: { schemaVersion: "marathon-final-v4" },
  })]]);
  const first = createHarness(seed);
  const saved = JSON.parse(first.localStorage.getItem(STORAGE_KEY));
  assert.equal(saved.workoutLogs[oldId], undefined);
  assert.equal(saved.completedSessions[oldId], undefined);
  assert.equal(saved.legacyData.finalV5Migration.workoutLogs[oldId].note, "historische notitie");
  const archivedAt = saved.legacyData.finalV5Migration.migratedAt;

  createHarness(seed);
  const reloaded = JSON.parse(seed.get(STORAGE_KEY));
  assert.equal(reloaded.legacyData.finalV5Migration.migratedAt, archivedAt);
  assert.equal(reloaded.legacyData.finalV5Migration.workoutLogs[oldId].note, "historische notitie");
});

test("W45 toont zonder basis opgeschorte runs en vergrendelt de ritmeproef", () => {
  const harness = createHarness(new Map(), "?date=2026-11-02");
  harness.click({ "[data-view]": { dataset: { view: "week" } } });
  assert.match(harness.app.innerHTML, /Taperbasis B:<\/strong> 0 min/);
  assert.match(harness.app.innerHTML, /Zonder goed verdragen basis/);
  assert.match(harness.app.innerHTML, /Ritmeproef vergrendeld/);
  assert.match(harness.app.innerHTML, /geen taperbasis: lopen is opgeschort/i);
});
