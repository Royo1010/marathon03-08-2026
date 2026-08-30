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
    scrollTo() {},
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
  assert.doesNotMatch(first.app.innerHTML, /Training starten|timer|aftellen/i);

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

test("Schema en Informatie zijn bereikbaar via de drieknopsnavigatie", () => {
  const harness = createHarness();

  harness.click({ "[data-view]": { dataset: { view: "plan" } } });
  assert.match(harness.app.innerHTML, /Volledig programma/);
  assert.equal((harness.app.innerHTML.match(/class="plan-row"/g) || []).length, 12);

  harness.click({ "[data-view]": { dataset: { view: "info" } } });
  assert.match(harness.app.innerHTML, /Tempo en afkortingen/);
  assert.match(harness.app.innerHTML, /Inspanningsniveaus/);
  assert.match(harness.app.innerHTML, /Versie 2026\.08\.30-1/);

  harness.brandHome.click();
  assert.equal(harness.context.window.MarathonApp.state.view, "week");
  assert.match(harness.app.innerHTML, /Week 36/);
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
