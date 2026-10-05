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

test("Week toont direct vijf genummerde trainingen zonder kleurpaneel of bevestigingsflow", () => {
  const harness = createHarness();
  harness.click({ "[data-view]": { dataset: { view: "week" } } });
  assert.match(harness.app.innerHTML, /Week 41/);
  assert.doesNotMatch(harness.app.innerHTML, /Herstelbesluit|GREEN|ORANGE|RED|Voorwaarden en bevestiging|data-week-status|data-week-decision/);
  assert.equal((harness.app.innerHTML.match(/<article class="training-card/g) || []).length, 5);
  assert.equal((harness.app.innerHTML.match(/class="rest-day-card"/g) || []).length, 2);
  assert.match(harness.app.innerHTML, /Rustig fietsen/);
  assert.match(harness.app.innerHTML, /Herstel en progressie/);
  const numbers = [...harness.app.innerHTML.matchAll(/class="card-topline"><span>(Training \d+)<\/span>/g)].map((match) => match[1]);
  assert.deepEqual(numbers, ["Training 1", "Training 2", "Training 3", "Training 4", "Training 5"]);
  assert.match(harness.app.innerHTML, /Training 3[\s\S]*?Fietstraining[\s\S]*?Rustig fietsen/);
  assert.doesNotMatch(harness.app.innerHTML, /Sessie A|Sessie B|krachttraining/i);
});

test("trainingdetail toont exacte Garmin-keuzes en ondubbelzinnige tijden", () => {
  const harness = createHarness();
  const workout = harness.context.window.MARATHON_PLAN.weekVariants[41].max[0];
  harness.click({ "[data-view]": { dataset: { view: "week" } } });
  harness.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: workout.workoutId } } });
  assert.match(harness.app.innerHTML, /Programmeer in Garmin als/i);
  assert.match(harness.app.innerHTML, /Dit vul je in Garmin Connect in/);
  assert.match(harness.app.innerHTML, /<dt>Staptype<\/dt><dd>Warm-up<\/dd>/);
  assert.match(harness.app.innerHTML, /<dt>Type duur<\/dt><dd>Tijd<\/dd>/);
  assert.match(harness.app.innerHTML, /00:05:00<\/strong><span> — 5 minuten/);
  assert.match(harness.app.innerHTML, /00:20:00<\/strong><span> — 20 minuten/);
  assert.equal((harness.app.innerHTML.match(/<dt>Type doel<\/dt><dd>Geen doel<\/dd>/g) || []).length, 3);
  assert.match(harness.app.innerHTML, /<dt>Voeg notities toe<\/dt>/);
  assert.doesNotMatch(harness.app.innerHTML, /<dt>Doelwaarde<\/dt>|Druk op de knop Lap/);
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
  assert.match(harness.app.innerHTML, /Versie 2026\.10\.05-1/);
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

test("W45 blijft zonder taperbasis begrensd en details zijn zonder vragen toegankelijk", () => {
  const harness = createHarness(new Map(), "?date=2026-11-02");
  harness.click({ "[data-view]": { dataset: { view: "week" } } });
  assert.match(harness.app.innerHTML, /Taperbasis B:<\/strong> 0 min/);
  assert.match(harness.app.innerHTML, /zonder goed verdragen basis/i);
  assert.match(harness.app.innerHTML, /uitsluitend na alle V5-checkpoints/);
  assert.match(harness.app.innerHTML, /Kalenderreferentie: een goed verdragen taperbasis is nog niet vastgesteld/);
  assert.doesNotMatch(harness.app.innerHTML, /data-week-status|data-week-decision|GREEN|ORANGE|RED/);
  const workout = harness.context.window.MARATHON_MODEL.resolvePlan({})[4].workouts[0];
  harness.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: workout.workoutId } } });
  assert.match(harness.app.innerHTML, /Dit vul je in Garmin Connect in/);
  assert.match(harness.app.innerHTML, /00:25:00/);
});

test("run-walk benoemt 11 volledige groepen, wandelen en exact 65 minuten", () => {
  const harness = createHarness();
  const workout = harness.context.window.MARATHON_PLAN.weekVariants[41].max.find((item) => item.role === "runwalk");
  harness.click({ "[data-view]": { dataset: { view: "week" } } });
  harness.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: workout.workoutId } } });
  assert.match(harness.app.innerHTML, /Herhaalgroep: 11 keer/);
  assert.match(harness.app.innerHTML, /<dt>Staptype<\/dt><dd>Wandelen<\/dd>/);
  assert.match(harness.app.innerHTML, /Wandelen, niet joggen/);
  assert.match(harness.app.innerHTML, /wandelpauze blijft ook na de laatste herhaling aanwezig/);
  assert.match(harness.app.innerHTML, /Totaal: 1 uur en 5 minuten, waarvan 44 minuten hardlopen en 21 minuten wandelen/);
  assert.doesNotMatch(harness.app.innerHTML, /Laatste herstel overslaan|Druk op de knop Lap/);
});

test("strides tonen seconden en hersteljogs; fietsen toont geen verzonnen Garmin-keuzes", () => {
  const harness = createHarness();
  const week = harness.context.window.MARATHON_MODEL.resolvePlan({})[0];
  const strides = week.workouts.find((item) => item.role === "strides");
  const bike = week.workouts.find((item) => item.activityType === "bike");
  harness.click({ "[data-view]": { dataset: { view: "week" } } });
  harness.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: strides.workoutId } } });
  assert.match(harness.app.innerHTML, /00:00:20<\/strong><span> — 20 seconden/);
  assert.match(harness.app.innerHTML, /00:01:10<\/strong><span> — 1 minuut en 10 seconden/);
  assert.match(harness.app.innerHTML, /<dt>Staptype<\/dt><dd>Herstel<\/dd>/);
  assert.match(harness.app.innerHTML, /Zeer rustig joggen/);
  assert.match(harness.app.innerHTML, /Strides zijn optioneel/);
  harness.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: strides.workoutId } } });
  harness.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: bike.workoutId } } });
  assert.match(harness.app.innerHTML, /exacte Garmin-velden voor een fietsworkout zijn nog niet vastgesteld/);
  assert.match(harness.app.innerHTML, /00:10:00/);
  assert.match(harness.app.innerHTML, /00:40:00/);
  assert.doesNotMatch(harness.app.innerHTML, /<dt>Staptype<\/dt>|<dt>Type doel<\/dt>/);
});

test("nieuwe displaynummering behoudt fietsnotities, voeding en voltooiing na herladen", () => {
  const storage = new Map();
  let harness = createHarness(storage);
  const bike = harness.context.window.MARATHON_PLAN.weekVariants[41].shared.find((item) => item.activityType === "bike");
  const saved = JSON.parse(storage.get(STORAGE_KEY));
  saved.workoutLogs[bike.workoutId] = { workoutId: bike.workoutId, planId: saved.activePlanId, completed: true, activityType: "bike", weekNumber: 41, note: "fietstest behouden", actualBikeMinutes: 42 };
  saved.completedSessions[bike.workoutId] = { completedAt: "2026-10-09" };
  saved.nutritionLogs[bike.workoutId] = { note: "voedingsnotitie behouden" };
  storage.set(STORAGE_KEY, JSON.stringify(saved));
  harness = createHarness(storage);
  harness.click({ "[data-view]": { dataset: { view: "week" } } });
  assert.match(harness.app.innerHTML, /Training 3[\s\S]*?Voltooid/);
  const reloaded = JSON.parse(storage.get(STORAGE_KEY));
  assert.equal(reloaded.workoutLogs[bike.workoutId].note, "fietstest behouden");
  assert.equal(reloaded.nutritionLogs[bike.workoutId].note, "voedingsnotitie behouden");
  assert.deepEqual(reloaded.completedSessions[bike.workoutId], saved.completedSessions[bike.workoutId]);
});
