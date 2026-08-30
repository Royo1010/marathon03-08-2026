import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";

const trainingDataCode = fs.readFileSync(new URL("../training-data.js", import.meta.url), "utf8");
const appCode = fs.readFileSync(new URL("../app.js", import.meta.url), "utf8");

function createClassList() {
  const values = new Set();
  return {
    toggle(name, active) { if (active) values.add(name); else values.delete(name); },
    contains(name) { return values.has(name); },
  };
}

function createStorage(seed = new Map()) {
  return {
    values: seed,
    getItem(key) { return this.values.has(key) ? this.values.get(key) : null; },
    setItem(key, value) { this.values.set(key, String(value)); },
    removeItem(key) { this.values.delete(key); },
  };
}

function createHarness(storageValues = new Map()) {
  const listeners = {};
  const windowListeners = {};
  const app = { innerHTML: "" };
  const brandHome = { addEventListener(type, handler) { this[type] = handler; } };
  const navButtons = ["week", "plan", "info"].map((view) => ({
    dataset: { view },
    classList: createClassList(),
    setAttribute() {},
    removeAttribute() {},
  }));
  const document = {
    visibilityState: "visible",
    body: { classList: createClassList() },
    getElementById(id) { return id === "app" ? app : id === "brand-home" ? brandHome : null; },
    querySelectorAll(selector) { return selector === "[data-view]" ? navButtons : []; },
    addEventListener(type, handler) { listeners[type] = handler; },
  };
  const localStorage = createStorage(storageValues);
  const window = {
    document,
    localStorage,
    location: { search: "?date=2026-08-31", href: "https://example.test/marathon-330/?date=2026-08-31" },
    navigator: {},
    confirm() { return true; },
    scrollTo() {},
    setInterval() { return 1; },
    clearInterval() {},
    addEventListener(type, handler) { windowListeners[type] = handler; },
  };
  window.window = window;

  const context = vm.createContext({
    console,
    Date,
    Intl,
    URL,
    URLSearchParams,
    window,
    document,
    localStorage,
    navigator: window.navigator,
  });
  vm.runInContext(trainingDataCode, context, { filename: "training-data.js" });
  vm.runInContext(appCode, context, { filename: "app.js" });

  function targetFor(matchers) {
    return {
      closest(selector) { return matchers[selector] || null; },
      matches(selector) { return Boolean(matchers[selector]); },
      value: matchers.value,
    };
  }

  function click(matchers) {
    listeners.click({ target: targetFor(matchers), stopPropagation() {} });
  }

  function change(matchers) {
    listeners.change({ target: targetFor(matchers) });
  }

  function input(matchers) {
    listeners.input({ target: targetFor(matchers) });
  }

  return { app, brandHome, click, change, input, context, localStorage, listeners, navButtons };
}

test("vereenvoudigde weekplanner navigeert, klapt uit en bewaart voltooiing", () => {
  const storageValues = new Map();
  const first = createHarness(storageValues);
  const workoutId = first.context.window.MARATHON_PLAN.weeks[0].workouts[0].workoutId;

  assert.match(first.app.innerHTML, /Week 36/);
  assert.equal((first.app.innerHTML.match(/<article class="training-card/g) || []).length, 4);
  assert.equal((first.app.innerHTML.match(/data-open-treadmill=/g) || []).length, 4);

  first.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: workoutId } } });
  assert.equal(first.context.window.MarathonApp.state.expandedWorkoutIds.has(workoutId), true);
  assert.match(first.app.innerHTML, /Exacte opbouw/);
  assert.match(first.app.innerHTML, /Planning en herstel/);

  first.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: workoutId } } });
  assert.equal(first.context.window.MarathonApp.state.expandedWorkoutIds.has(workoutId), false);

  first.click({ "[data-workout-card]": { dataset: { workoutCard: workoutId } } });
  assert.equal(first.context.window.MarathonApp.state.expandedWorkoutIds.has(workoutId), true);
  first.click({ "[data-workout-card]": { dataset: { workoutCard: workoutId } } });
  assert.equal(first.context.window.MarathonApp.state.expandedWorkoutIds.has(workoutId), false);

  first.click({ "[data-week-next]": { dataset: {} } });
  assert.equal(first.context.window.MarathonApp.state.viewedWeekIndex, 1);
  assert.match(first.app.innerHTML, /Week 37/);

  first.click({ "[data-week-prev]": { dataset: {} } });
  assert.equal(first.context.window.MarathonApp.state.viewedWeekIndex, 0);
  assert.match(first.app.innerHTML, /Week 36/);

  first.change({ "[data-week-select]": true, value: "5" });
  assert.equal(first.context.window.MarathonApp.state.viewedWeekIndex, 5);
  assert.match(first.app.innerHTML, /Week 41/);

  first.click({ "[data-week-current]": { dataset: {} } });
  assert.equal(first.context.window.MarathonApp.state.viewedWeekIndex, 0);

  first.click({ "[data-toggle-complete]": { dataset: { toggleComplete: workoutId } } });
  assert.equal(first.context.window.MarathonApp.isCompleted(workoutId), true);
  assert.equal(first.context.window.MarathonApp.state.expandedWorkoutIds.has(workoutId), false);
  assert.match(first.app.innerHTML, /✓ Voltooid/);

  const saved = JSON.parse(storageValues.get("marathon330TrainingAppData_v1"));
  assert.equal(saved.workoutLogs[workoutId].completed, true);
  assert.ok(saved.updatedAt);

  const reloaded = createHarness(storageValues);
  assert.equal(reloaded.context.window.MarathonApp.isCompleted(workoutId), true);
  assert.match(reloaded.app.innerHTML, /Training 2 ·/);

  reloaded.click({ "[data-toggle-complete]": { dataset: { toggleComplete: workoutId } } });
  assert.equal(reloaded.context.window.MarathonApp.isCompleted(workoutId), false);
  assert.equal(JSON.parse(storageValues.get("marathon330TrainingAppData_v1")).workoutLogs[workoutId].completed, false);

  const reloadedAfterUndo = createHarness(storageValues);
  assert.equal(reloadedAfterUndo.context.window.MarathonApp.isCompleted(workoutId), false);
});

test("Schema, Informatie en Marathonoverzicht zijn bereikbaar", () => {
  const harness = createHarness();

  harness.click({ "[data-view]": { dataset: { view: "plan" } } });
  assert.match(harness.app.innerHTML, /Volledig programma/);
  assert.equal((harness.app.innerHTML.match(/class="plan-row"/g) || []).length, 12);

  harness.click({ "[data-view]": { dataset: { view: "info" } } });
  assert.match(harness.app.innerHTML, /Tempo en afkortingen/);
  assert.match(harness.app.innerHTML, /Inspanningsniveaus/);
  assert.match(harness.app.innerHTML, /Versie 2026\.08\.30-3/);

  harness.brandHome.click();
  assert.equal(harness.context.window.MarathonApp.state.view, "marathon");
  assert.match(harness.app.innerHTML, /Marathon 3:30/);
  assert.match(harness.app.innerHTML, /83[\s\S]*Dagen te gaan/);
  assert.match(harness.app.innerHTML, /47[\s\S]*Trainingen te gaan/);
  assert.match(harness.app.innerHTML, /0 van 47 trainingen voltooid/);
  assert.match(harness.app.innerHTML, /Gepland[\s\S]*km vóór de marathon/);
  assert.match(harness.app.innerHTML, /Weekvolume/);
  assert.match(harness.app.innerHTML, /Cumulatieve opbouw/);
  assert.match(harness.app.innerHTML, /Confidence runs/);
  assert.match(harness.app.innerHTML, /Officiële tests/);

  harness.click({ "[data-back-week]": { dataset: {} } });
  assert.equal(harness.context.window.MarathonApp.state.view, "week");
  assert.match(harness.app.innerHTML, /Week 36/);
});

test("Marathonoverzicht rekent voltooide trainingen en kilometers uit actuele voortgang", () => {
  const harness = createHarness();
  const workout = harness.context.window.MARATHON_PLAN.weeks[0].workouts[0];

  harness.click({ "[data-toggle-complete]": { dataset: { toggleComplete: workout.workoutId } } });
  harness.brandHome.click();

  assert.match(harness.app.innerHTML, /1 van 47 trainingen voltooid/);
  assert.match(harness.app.innerHTML, /Voltooid[\s\S]*7,3[\s\S]*km gelogd/);
  assert.match(harness.app.innerHTML, /Week 36/);
  assert.match(harness.app.innerHTML, /Laatste voltooid[\s\S]*Week 36 · Training 1/);
});

test("Loopbandmodus gebruikt dezelfde blokken en berekent cumulatieve wisseltijden", () => {
  const harness = createHarness();
  const plan = harness.context.window.MARATHON_PLAN;
  const workout = plan.weeks[0].workouts.find((item) => item.trainingNumber === 2);
  const timeline = harness.context.window.MarathonApp.buildTreadmillTimeline(workout);

  assert.equal(timeline.totalSeconds, 55 * 60);
  assert.deepEqual(Array.from(timeline.blocks, (block) => [block.startSeconds, block.endSeconds]), [
    [0, 600], [600, 900], [900, 1380], [1380, 1560], [1560, 2040], [2040, 2220], [2220, 2700], [2700, 3300],
  ]);
  assert.deepEqual(Array.from(timeline.blocks, (block) => block.timeRangeLabel), [
    "00:00 – 10:00", "10:00 – 15:00", "15:00 – 23:00", "23:00 – 26:00",
    "26:00 – 34:00", "34:00 – 37:00", "37:00 – 45:00", "45:00 – 55:00",
  ]);

  harness.click({ "[data-open-treadmill]": { dataset: { openTreadmill: workout.workoutId } } });
  assert.equal(harness.context.window.MarathonApp.state.view, "treadmill");
  assert.match(harness.app.innerHTML, /Loopbandblokken/);
  assert.match(harness.app.innerHTML, /15:00 – 23:00/);
  assert.match(harness.app.innerHTML, /12 km\/u/);
  assert.match(harness.app.innerHTML, /1%/);
  assert.doesNotMatch(harness.app.innerHTML, /<strong>—<\/strong>/);
  assert.match(harness.app.innerHTML, /Start training/);

  harness.click({ "[data-close-treadmill]": { dataset: {} } });
  assert.equal(harness.context.window.MarathonApp.state.view, "week");
});

test("afstandsblokken krijgen gemarkeerde schatting en onbekende testduur blokkeert alleen de timer", () => {
  const harness = createHarness();
  const plan = harness.context.window.MARATHON_PLAN;
  const confidence = plan.weeks.find((week) => week.weekNumber === 39).workouts.find((item) => item.trainingNumber === 4);
  const confidenceTimeline = harness.context.window.MarathonApp.buildTreadmillTimeline(confidence);
  assert.equal(confidenceTimeline.hasCompleteTiming, true);
  assert.ok(confidenceTimeline.blocks.every((block) => block.estimated));
  assert.match(confidenceTimeline.blocks[0].timeRangeLabel, /^±00:00/);
  assert.equal(confidenceTimeline.blocks[0].distanceKm, 3);

  const benchmark = plan.weeks.find((week) => week.weekNumber === 40).workouts.find((item) => item.testNumber === 1);
  const benchmarkTimeline = harness.context.window.MarathonApp.buildTreadmillTimeline(benchmark);
  assert.equal(benchmarkTimeline.hasCompleteTiming, false);
  assert.equal(benchmarkTimeline.blocks.find((block) => block.type === "test").durationSeconds, null);

  harness.click({ "[data-open-treadmill]": { dataset: { openTreadmill: benchmark.workoutId } } });
  assert.match(harness.app.innerHTML, /Timer niet beschikbaar/);
  assert.match(harness.app.innerHTML, /Zelf sturen/);
});

test("oude of beschadigde opslag kan de weekplanner niet laten vastlopen", () => {
  const corruptStorage = new Map([["marathon330TrainingAppData_v1", "{ongeldige-json"]]);
  const originalWarn = console.warn;
  console.warn = () => {};
  const recovered = createHarness(corruptStorage);
  console.warn = originalWarn;

  assert.match(recovered.app.innerHTML, /Week 36/);
  const repaired = JSON.parse(corruptStorage.get("marathon330TrainingAppData_v1"));
  assert.equal(repaired.meta.storageInitialized, true);
  assert.deepEqual(Object.keys(repaired.workoutLogs), []);

  const legacyStorage = new Map([["marathon330TrainingAppData_v1", JSON.stringify({
    appDataVersion: 1,
    workoutLogs: { strength: [], cardio: [] },
    completedSessions: { oud: true },
  })]]);
  const migrated = createHarness(legacyStorage);
  assert.match(migrated.app.innerHTML, /Week 36/);
  assert.ok(JSON.parse(legacyStorage.get("marathon330TrainingAppData_v1")).legacyData.previousPlan);
});

test("testresultaten worden direct opgeslagen en blijven na herladen bestaan", () => {
  const storageValues = new Map();
  const harness = createHarness(storageValues);
  const testWorkout = harness.context.window.MARATHON_PLAN.weeks.find((week) => week.weekNumber === 40).workouts.find((item) => item.testNumber === 1);

  harness.context.window.MarathonApp.saveTestField(testWorkout.workoutId, "result", "22:35");
  harness.context.window.MarathonApp.saveTestField(testWorkout.workoutId, "averageSpeed", "13.2");
  harness.context.window.MarathonApp.saveTestField(testWorkout.workoutId, "rpe", "8");
  harness.context.window.MarathonApp.saveTestField(testWorkout.workoutId, "note", "Gecontroleerd begonnen");

  const saved = JSON.parse(storageValues.get("marathon330TrainingAppData_v1"));
  assert.equal(saved.testResults[testWorkout.workoutId].result, "22:35");
  assert.equal(saved.testResults[testWorkout.workoutId].averageSpeed, "13.2");

  const reloaded = createHarness(storageValues);
  reloaded.context.window.MarathonApp.state.viewedWeekIndex = 4;
  reloaded.context.window.MarathonApp.state.expandedWorkoutIds.add(testWorkout.workoutId);
  reloaded.context.window.MarathonApp.render();
  assert.match(reloaded.app.innerHTML, /value="22:35"/);
  assert.match(reloaded.app.innerHTML, /Gecontroleerd begonnen/);
  assert.match(reloaded.app.innerHTML, /niet automatisch aangepast/);
});
