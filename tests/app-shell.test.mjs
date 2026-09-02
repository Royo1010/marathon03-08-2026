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
  return {
    toggle(name, active) { if (active) values.add(name); else values.delete(name); },
    contains(name) { return values.has(name); },
    remove(name) { values.delete(name); },
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
  let clock = Date.parse("2026-08-31T10:00:00Z");
  let intervalCallback;
  class TestDate extends Date {
    constructor(...args) { super(...(args.length ? args : [clock])); }
    static now() { return clock; }
  }
  const listeners = {};
  const windowListeners = {};
  const app = { innerHTML: "" };
  const storageWarning = { hidden: true, textContent: "" };
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
    getElementById(id) { return id === "app" ? app : id === "brand-home" ? brandHome : id === "storage-warning" ? storageWarning : null; },
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
    setInterval(callback) { intervalCallback = callback; return 1; },
    clearInterval() { intervalCallback = null; },
    addEventListener(type, handler) { windowListeners[type] = handler; },
  };
  window.window = window;

  const context = vm.createContext({
    console,
    Date: TestDate,
    Intl,
    URL,
    URLSearchParams,
    window,
    document,
    localStorage,
    navigator: window.navigator,
  });
  vm.runInContext(trainingDataCode, context, { filename: "training-data.js" });
  vm.runInContext(notificationModelCode, context, { filename: "notification-model.js" });
  vm.runInContext(pushConfigCode, context, { filename: "push-config.js" });
  vm.runInContext(appCode, context, { filename: "app.js" });

  function targetFor(matchers) {
    return {
      closest(selector) { return matchers[selector] || null; },
      matches(selector) { return Boolean(matchers[selector]); },
      value: matchers.value,
      dataset: matchers.dataset || {},
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

  function advance(seconds) { clock += seconds * 1000; intervalCallback?.(); }
  return { app, brandHome, click, change, input, context, localStorage, listeners, windowListeners, navButtons, advance, storageWarning };
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

test("definitieve fitnesschecks, herstelmetadata en weekfilosofie zijn volledig gekoppeld", () => {
  const harness = createHarness();
  harness.change({ "[data-week-select]": true, value: "2" });
  const week38 = harness.context.window.MARATHON_PLAN.weeks.find((week) => week.weekNumber === 38);
  const check = week38.workouts.find((workout) => workout.isFitnessCheck);

  assert.equal((harness.app.innerHTML.match(/<article class="training-card/g) || []).length, 5);
  assert.match(harness.app.innerHTML, /Waarom niet meer of harder/);
  assert.match(harness.app.innerHTML, /vierde training|20K confidence/i);
  assert.match(harness.app.innerHTML, /Fitness Check #1/);
  assert.match(harness.app.innerHTML, /Rustige dag aanbevolen/);
  assert.match(harness.app.innerHTML, /EXTRA FITNESS CHECK/);

  harness.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: check.workoutId } } });
  assert.match(harness.app.innerHTML, /Na ieder blok van 10 minuten/);
  assert.match(harness.app.innerHTML, /data-test-field="block10Rpe"/);
  assert.match(harness.app.innerHTML, /data-test-field="block12Legs"/);
  assert.match(harness.app.innerHTML, /Waarom deze training hier staat/);
  assert.match(harness.app.innerHTML, /dezelfde loopband/);

  harness.context.window.MarathonApp.saveTestField(check.workoutId, "block12Rpe", "7");
  const saved = JSON.parse(harness.localStorage.getItem("marathon330TrainingAppData_v1"));
  assert.equal(saved.testResults[check.workoutId].block12Rpe, "7");
});

test("Schema, Informatie en Marathonoverzicht zijn bereikbaar", () => {
  const harness = createHarness();

  harness.click({ "[data-view]": { dataset: { view: "plan" } } });
  assert.match(harness.app.innerHTML, /Volledig programma/);
  assert.equal((harness.app.innerHTML.match(/<button class="plan-row/g) || []).length, 12);
  assert.match(harness.app.innerHTML, /±39 km totaal/);
  assert.match(harness.app.innerHTML, /Basisvolume en eerste beheerste/);
  assert.match(harness.app.innerHTML, /±58,1 km totaal incl\. marathon/);
  assert.match(harness.app.innerHTML, /4 sessies incl\. marathon/);
  assert.doesNotMatch(harness.app.innerHTML, /4 trainingen · Training 4/);

  harness.click({ "[data-view]": { dataset: { view: "info" } } });
  assert.match(harness.app.innerHTML, /Tempo en afkortingen/);
  assert.match(harness.app.innerHTML, /Inspanningsniveaus/);
  assert.match(harness.app.innerHTML, /Versie 2026\.09\.02-1/);

  harness.brandHome.click();
  assert.equal(harness.context.window.MarathonApp.state.view, "marathon");
  assert.match(harness.app.innerHTML, /Marathon 3:30/);
  assert.match(harness.app.innerHTML, /83[\s\S]*Dagen te gaan/);
  assert.match(harness.app.innerHTML, /49[\s\S]*Trainingen te gaan/);
  assert.match(harness.app.innerHTML, /0 van 49 trainingen voltooid/);
  assert.match(harness.app.innerHTML, /Gepland[\s\S]*km vóór de marathon/);
  assert.match(harness.app.innerHTML, /Weekvolume/);
  assert.match(harness.app.innerHTML, /Cumulatieve opbouw/);
  assert.match(harness.app.innerHTML, /3:30-readiness/);
  assert.match(harness.app.innerHTML, /Nog onzeker/i);
  assert.match(harness.app.innerHTML, /Tests &amp; confidence|Tests & confidence/);
  assert.match(harness.app.innerHTML, /Confidence runs/);
  assert.match(harness.app.innerHTML, /Meetmomenten/);

  harness.click({ "[data-back-week]": { dataset: {} } });
  assert.equal(harness.context.window.MarathonApp.state.view, "week");
  assert.match(harness.app.innerHTML, /Week 36/);
});

test("Marathonoverzicht rekent voltooide trainingen en kilometers uit actuele voortgang", () => {
  const harness = createHarness();
  const workout = harness.context.window.MARATHON_PLAN.weeks[0].workouts[0];

  harness.click({ "[data-toggle-complete]": { dataset: { toggleComplete: workout.workoutId } } });
  harness.brandHome.click();

  assert.match(harness.app.innerHTML, /1 van 49 trainingen voltooid/);
  assert.match(harness.app.innerHTML, /Voltooid[\s\S]*7,3[\s\S]*km gelogd/);
  assert.match(harness.app.innerHTML, /Week 36/);
  assert.match(harness.app.innerHTML, /Laatste voltooid[\s\S]*Week 36 · Training 1/);
});

test("Schema en dashboard delen dezelfde centrale weekvolumes", () => {
  const harness = createHarness();
  const appApi = harness.context.window.MarathonApp;
  const plan = harness.context.window.MARATHON_PLAN;
  const expected = [38.98, 43.71, 55.78, 54.20, 42.55, 64.91, 68.88, 67.73, 53.65, 47.03, 37.72, 58.15];

  assert.deepEqual(Array.from(plan.weeks, (week) => Number(appApi.getWeekPlannedKm(week).toFixed(2))), expected);
  assert.deepEqual(Array.from(appApi.dashboardMetrics().weekly, (week) => Number(week.plannedKm.toFixed(2))), expected);

  const firstWorkout = plan.weeks[0].workouts[0];
  harness.click({ "[data-toggle-complete]": { dataset: { toggleComplete: firstWorkout.workoutId } } });
  harness.click({ "[data-view]": { dataset: { view: "plan" } } });
  assert.match(harness.app.innerHTML, /Week 36[\s\S]*1\/4/);
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

test("Focus Mode gebruikt één snapshot voor iedere exacte blokgrens", () => {
  const harness = createHarness();
  const workout = harness.context.window.MARATHON_PLAN.weeks[0].workouts.find((item) => item.trainingNumber === 2);
  const api = harness.context.window.MarathonApp;
  const timeline = api.buildTreadmillTimeline(workout);
  const checks = [
    [0, 0, 600, 1],
    [600, 1, 300, 2],
    [900, 2, 480, 3],
    [1380, 3, 180, 4],
    [1560, 4, 480, 5],
    [2040, 5, 180, 6],
    [2220, 6, 480, 7],
    [2700, 7, 600, null],
  ];

  for (const [seconds, currentIndex, remainingSeconds, nextIndex] of checks) {
    const snapshot = api.timelineSnapshotAt(timeline, seconds);
    assert.equal(snapshot.currentIndex, currentIndex, `actief blok bij ${seconds}s`);
    assert.equal(snapshot.remainingSeconds, remainingSeconds, `resterend bij ${seconds}s`);
    assert.equal(snapshot.next?.index ?? null, nextIndex, `volgend blok bij ${seconds}s`);
    assert.equal(snapshot.completedCount, currentIndex);
    assert.equal(snapshot.finished, false);
  }

  const finished = api.timelineSnapshotAt(timeline, 3300);
  assert.equal(finished.currentIndex, -1);
  assert.equal(finished.completedCount, 8);
  assert.equal(finished.totalRemainingSeconds, 0);
  assert.equal(finished.finished, true);

  assert.deepEqual({ ...api.focusTimingState(api.timelineSnapshotAt(timeline, 569)) }, { switchSoon: false, finalCountdown: false });
  assert.deepEqual({ ...api.focusTimingState(api.timelineSnapshotAt(timeline, 570)) }, { switchSoon: true, finalCountdown: false });
  assert.deepEqual({ ...api.focusTimingState(api.timelineSnapshotAt(timeline, 595)) }, { switchSoon: true, finalCountdown: true });
  assert.deepEqual({ ...api.focusTimingState(api.timelineSnapshotAt(timeline, 600)) }, { switchSoon: false, finalCountdown: false });
});

test("Start training schakelt naar rustige Focus Mode en Stop herstelt de voorbereiding", () => {
  const harness = createHarness();
  const workout = harness.context.window.MARATHON_PLAN.weeks[0].workouts.find((item) => item.trainingNumber === 2);

  harness.click({ "[data-open-treadmill]": { dataset: { openTreadmill: workout.workoutId } } });
  assert.match(harness.app.innerHTML, /Week 36 · Training 2/);
  assert.match(harness.app.innerHTML, /Eerste marathonpaceblokken/i);

  harness.click({ "[data-timer-start]": { dataset: { timerStart: workout.workoutId } } });
  assert.match(harness.app.innerHTML, /class="treadmill-view focus-mode"/);
  assert.match(harness.app.innerHTML, /Nog in dit blok/);
  assert.match(harness.app.innerHTML, /data-focus-current-speed>9,5</);
  assert.match(harness.app.innerHTML, /data-focus-current-incline>½%/);
  assert.doesNotMatch(harness.app.innerHTML, /Daarna|focus-next/);
  assert.match(harness.app.innerHTML, /Blok 1 van 8/);
  assert.equal((harness.app.innerHTML.match(/data-focus-queue-index=/g) || []).length, 8);
  assert.equal((harness.app.innerHTML.match(/data-focus-progress-index=/g) || []).length, 8);
  assert.doesNotMatch(harness.app.innerHTML, /class="treadmill-header"/);
  assert.doesNotMatch(harness.app.innerHTML, /Week 36 · Training 2/);
  assert.doesNotMatch(harness.app.innerHTML, /Eerste marathonpaceblokken/i);

  harness.windowListeners.scroll();
  assert.equal(harness.context.window.MarathonApp.state.focusQueueUserBrowsing, false, "geen scroll-away zonder actieve kaart buiten beeld");
  harness.context.window.MarathonApp.render();
  assert.match(harness.app.innerHTML, /data-focus-return-now[^>]*>Terug naar NU/);
  harness.click({ "[data-focus-return-now]": { dataset: {} } });
  assert.equal(harness.context.window.MarathonApp.state.focusQueueUserBrowsing, false);

  harness.click({ "[data-timer-pause]": { dataset: {} } });
  assert.match(harness.app.innerHTML, /Gepauzeerd/);
  assert.match(harness.app.innerHTML, /data-focus-current-speed>9,5</);
  harness.click({ "[data-timer-resume]": { dataset: {} } });
  assert.match(harness.app.innerHTML, />Actief<\/em>/);

  harness.click({ "[data-timer-stop]": { dataset: {} } });
  assert.doesNotMatch(harness.app.innerHTML, /class="treadmill-view focus-mode"/);
  assert.match(harness.app.innerHTML, /class="treadmill-header"/);
  assert.match(harness.app.innerHTML, /Start training/);
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
  assert.equal(corruptStorage.get("marathon330TrainingAppData_v1"), "{ongeldige-json", "onleesbare data wordt niet overschreven");
  recovered.context.window.MarathonApp.saveTestField("marathon-3u30-w40-t2", "result", "22:35");
  assert.equal(corruptStorage.get("marathon330TrainingAppData_v1"), "{ongeldige-json");

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

  reloaded.brandHome.click();
  assert.match(reloaded.app.innerHTML, /Meetmomenten[\s\S]*0 \/ 6/);
  assert.match(reloaded.app.innerHTML, /Laatste testresultaat[\s\S]*22:35/);
});

test("meldingsinstellingen zijn per training opgeslagen", () => {
  const storageValues = new Map();
  const harness = createHarness(storageValues);
  const [first, second] = harness.context.window.MARATHON_PLAN.weeks[0].workouts;
  const api = harness.context.window.MarathonApp;

  api.saveNotificationSetting(first.workoutId, "warningSeconds", 45);
  api.saveNotificationSetting(first.workoutId, "soundEnabled", false);
  assert.equal(api.notificationSettings(first.workoutId).warningSeconds, 45);
  assert.equal(api.notificationSettings(first.workoutId).soundEnabled, false);
  assert.equal(api.notificationSettings(second.workoutId).warningSeconds, 30);
  assert.equal(api.notificationSettings(second.workoutId).soundEnabled, true);

  const reloaded = createHarness(storageValues);
  assert.equal(reloaded.context.window.MarathonApp.notificationSettings(first.workoutId).warningSeconds, 45);
  assert.equal(reloaded.context.window.MarathonApp.notificationSettings(first.workoutId).soundEnabled, false);
});

test("meldingen staan standaard compact en de 30/45-keuze gebruikt een volledige segmented rij", () => {
  const storageValues = new Map();
  const harness = createHarness(storageValues);
  const workout = harness.context.window.MARATHON_PLAN.weeks[0].workouts[0];

  harness.click({ "[data-open-treadmill]": { dataset: { openTreadmill: workout.workoutId } } });
  assert.match(harness.app.innerHTML, /data-toggle-notifications/);
  assert.doesNotMatch(harness.app.innerHTML, /class="notification-card"/);

  harness.click({ "[data-toggle-notifications]": { dataset: {} } });
  assert.match(harness.app.innerHTML, /class="notification-card"/);
  assert.match(harness.app.innerHTML, /class="warning-segments"/);
  assert.match(harness.app.innerHTML, /data-warning-seconds="30"/);
  assert.match(harness.app.innerHTML, /data-warning-seconds="45"/);
  assert.doesNotMatch(harness.app.innerHTML, /<select[^>]+warningSeconds/);

  harness.click({ "[data-warning-seconds][data-workout-id]": { dataset: { warningSeconds: "45", workoutId: workout.workoutId } } });
  assert.equal(harness.context.window.MarathonApp.notificationSettings(workout.workoutId).warningSeconds, 45);
  assert.match(harness.app.innerHTML, /data-warning-seconds="45"[^>]+aria-checked="true"|aria-checked="true"[^>]+data-warning-seconds="45"/);

  harness.click({ "[data-toggle-notifications]": { dataset: {} } });
  assert.doesNotMatch(harness.app.innerHTML, /class="notification-card"/);
  assert.equal(harness.context.window.MarathonApp.notificationSettings(workout.workoutId).warningSeconds, 45);
});

test("week 36 training 1 heeft exact twee switches op 05:00 en 40:00", () => {
  const harness = createHarness();
  const workout = harness.context.window.MARATHON_PLAN.weeks[0].workouts[0];
  const timeline = harness.context.window.MarathonApp.buildTreadmillTimeline(workout);
  const switches = harness.context.window.MarathonApp.switchPlanFor(workout, timeline);

  assert.deepEqual(Array.from(switches, (item) => item.switchAtSeconds), [300, 2400]);
  assert.deepEqual(Array.from(switches, (item) => item.warningAtSeconds), [270, 2370]);
  assert.deepEqual(Array.from(switches, (item) => item.title), ["SWITCH BIJ 05:00", "SWITCH BIJ 40:00"]);
  assert.match(switches[0].body, /Snelheid 9 → 10 km\/u/);
  assert.match(switches[0].body, /Helling blijft 0,5%/);
  assert.match(switches[0].body, /Tot 40:00/);
});

test("start, pauze, hervatten en stop gebruiken unieke timersessies", () => {
  const harness = createHarness();
  const workout = harness.context.window.MARATHON_PLAN.weeks[0].workouts[1];
  harness.click({ "[data-open-treadmill]": { dataset: { openTreadmill: workout.workoutId } } });
  assert.match(harness.app.innerHTML, /Meldingen/);
  assert.match(harness.app.innerHTML, /30 sec/);

  harness.click({ "[data-timer-start]": { dataset: { timerStart: workout.workoutId } } });
  const firstSession = harness.context.window.MarathonApp.getTreadmillTimer();
  assert.equal(firstSession.status, "running");
  assert.ok(firstSession.sessionId);

  harness.click({ "[data-timer-pause]": { dataset: {} } });
  assert.equal(harness.context.window.MarathonApp.getTreadmillTimer().status, "paused");
  harness.click({ "[data-timer-resume]": { dataset: {} } });
  const resumed = harness.context.window.MarathonApp.getTreadmillTimer();
  assert.equal(resumed.status, "running");
  assert.notEqual(resumed.sessionId, firstSession.sessionId);
  assert.equal(resumed.generation, 2);

  harness.click({ "[data-timer-stop]": { dataset: {} } });
  assert.equal(harness.context.window.MarathonApp.getTreadmillTimer().status, "idle");
  harness.click({ "[data-timer-start]": { dataset: { timerStart: workout.workoutId } } });
  assert.notEqual(harness.context.window.MarathonApp.getTreadmillTimer().sessionId, resumed.sessionId);
});

test("alle gegenereerde switchmeldingen gebruiken complete numerieke loopbandwaarden", () => {
  const harness = createHarness();
  const api = harness.context.window.MarathonApp;
  let switchCount = 0;
  for (const week of harness.context.window.MARATHON_PLAN.weeks) {
    for (const workout of week.workouts) {
      const timeline = api.buildTreadmillTimeline(workout);
      const switches = api.switchPlanFor(workout, timeline);
      switchCount += switches.length;
      for (const item of switches) {
        assert.ok(item.switchAtSeconds > 0);
        assert.ok(Number.isFinite(item.nextSpeedKmh));
        assert.ok(Number.isFinite(item.nextInclinePercent));
        assert.doesNotMatch(`${item.title}\n${item.body}`, /—|null|undefined/);
      }
    }
  }
  assert.ok(switchCount > 100);
});

test("racevoeding bewaart alle velden direct, zonder inklappen of verlies bij herladen", () => {
  const values = new Map();
  const h = createHarness(values);
  const id = "marathon-3u30-w43-t4";
  h.change({ "[data-week-select]": true, value: "7" });
  h.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: id } } });
  const fields = { products: "Gel A", servings: "7", totalCarbs: "210", carbsPerHour: "70", timing: "Elke 25 min", drinking: "Water", gut: "Rustig", energy: "Stabiel", legs: "Normaal", completedAsPlanned: "ja", note: "Goed getest" };
  for (const [field, value] of Object.entries(fields)) {
    h.input({ "[data-fuel-workout][data-fuel-field]": true, dataset: { fuelWorkout: id, fuelField: field }, value });
    assert.equal(JSON.parse(values.get("marathon330TrainingAppData_v1")).nutritionLogs[id][field], value);
  }
  h.click({ "[data-workout-card]": { dataset: { workoutCard: id } }, "button, a, select, summary, input, textarea, label, .training-details": {} });
  assert.equal(h.context.window.MarathonApp.state.expandedWorkoutIds.has(id), true);
  const reloaded = createHarness(values);
  reloaded.change({ "[data-week-select]": true, value: "7" });
  reloaded.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: id } } });
  for (const value of Object.values(fields)) assert.ok(reloaded.app.innerHTML.includes(value));
  assert.match(reloaded.app.innerHTML, /Volledige racevoedingsrepetitie/);
  assert.equal(JSON.parse(values.get("marathon330TrainingAppData_v1")).nutritionLogs[id].carbsPerHour, "70");
});

test("migratie behoudt voortgang, echte historische kilometers en alleen vergelijkbare testprotocollen", () => {
  const old = JSON.parse(fs.readFileSync(new URL("../scripts/previous-workouts-v5.json", import.meta.url), "utf8"));
  const id = "marathon-3u30-w42-t2";
  const fitness = "marathon-3u30-w38-fitness-check-1";
  const raw = { appDataVersion: 3, meta: { schemaVersion: "marathon-3u30-definitief-2026.09.01-1" },
    workoutLogs: { [id]: { completed: true, note: "Oude uitvoering", rpe: 7, completedDate: "2026-10-05" } },
    completedSessions: { [id]: { date: "2026-10-05" } },
    testResults: { [id]: { result: "Oud protocol", rpe: 7 }, [fitness]: { block10Rpe: "4", block12Rpe: "7.5", block12Breathing: "Beheerst", block12Legs: "Normaal" } },
    userSettings: { customSetting: true }, nutritionLogs: { [id]: { note: "Behouden" } }, uiState: { custom: true } };
  const values = new Map([["marathon330TrainingAppData_v1", JSON.stringify(raw)], ["unrelated", "laat staan"]]);
  const h = createHarness(values);
  const saved = JSON.parse(values.get("marathon330TrainingAppData_v1"));
  assert.equal(saved.appDataVersion, 4);
  assert.equal(saved.workoutLogs[id].plannedDistanceAtCompletion, old[id].distanceKm);
  assert.equal(saved.workoutLogs[id].plannedSecondsAtCompletion, old[id].durationSeconds);
  assert.equal(saved.workoutLogs[id].note, "Oude uitvoering");
  assert.equal(saved.workoutLogs[id].rpe, 7);
  assert.equal(saved.testResults[id], undefined);
  assert.deepEqual(saved.legacyData.previousTestProtocols[id].result, raw.testResults[id]);
  assert.deepEqual(saved.testResults[fitness], raw.testResults[fitness]);
  assert.equal(saved.userSettings.customSetting, true);
  assert.equal(saved.nutritionLogs[id].note, "Behouden");
  assert.equal(saved.uiState.custom, true);
  assert.equal(values.get("unrelated"), "laat staan");
  assert.equal(h.context.window.MarathonApp.getWeekCompletedKm(h.context.window.MARATHON_PLAN.weeks[6]), old[id].distanceKm);
  createHarness(values);
  assert.deepEqual(JSON.parse(values.get("marathon330TrainingAppData_v1")), saved, "tweede opening migreert niet opnieuw");
  h.change({ "[data-week-select]": true, value: "6" });
  h.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: "marathon-3u30-w42-fitness-check-2" } } });
  assert.match(h.app.innerHTML, /12 km\/u · W38[\s\S]*RPE 7.5 · Beheerst · Normaal/);
});

test("blokwissel houdt cockpit live, laat handmatige scroll met rust en herstelt auto-follow", () => {
  const h = createHarness();
  const api = h.context.window.MarathonApp;
  const id = "marathon-3u30-w36-t2";
  api.saveNotificationSetting(id, "enabled", false);
  h.click({ "[data-open-treadmill]": { dataset: { openTreadmill: id } } });
  h.click({ "[data-timer-start]": { dataset: { timerStart: id } } });
  const w = h.context.window;
  w.innerHeight = 844;
  w.scrollY = 0;
  const scrolls = [];
  w.scrollTo = ({ top }) => { scrolls.push(top); w.scrollY = top; };
  const node = () => ({ textContent: "", hidden: false, classList: createClassList(), setAttribute() {}, removeAttribute() {} });
  const cockpit = { ...node(), getBoundingClientRect: () => ({ top: 5, bottom: 341 }) };
  const rows = Array.from({ length: 8 }, (_, index) => ({ ...node(), dataset: { focusQueueIndex: String(index) },
    getBoundingClientRect: () => ({ top: 360 + 84 * index - w.scrollY, bottom: 438 + 84 * index - w.scrollY }),
    querySelector: () => node() }));
  rows[0].classList.toggle("is-current", true);
  const nodes = new Map([["[data-focus-cockpit]", cockpit]]);
  for (const s of ["[data-focus-return-now]", "[data-toggle-focus-completed]", "[data-focus-current-speed]", "[data-focus-current-incline]", "[data-block-remaining]", "[data-focus-current-context]"]) nodes.set(s, node());
  nodes.get("[data-toggle-focus-completed]").hidden = true;
  h.app.querySelector = (s) => s === "[data-focus-queue-index].is-current" ? rows.find((r) => r.classList.contains("is-current")) : nodes.get(s);
  h.app.querySelectorAll = (s) => s === "[data-focus-queue-index]" ? rows : s === ".focus-queue-item.keep-visible" ? rows.filter((r) => r.classList.contains("keep-visible")) : [];
  h.windowListeners.scroll();
  assert.equal(nodes.get("[data-focus-return-now]").hidden, true);
  w.scrollY = 300;
  h.windowListeners.scroll();
  assert.equal(nodes.get("[data-focus-return-now]").hidden, false);
  h.advance(601);
  assert.equal(nodes.get("[data-focus-current-speed]").textContent, "10,5");
  assert.equal(nodes.get("[data-focus-current-incline]").textContent, "½%");
  assert.equal(nodes.get("[data-block-remaining]").textContent, "04:59");
  assert.equal(w.scrollY, 300);
  assert.equal(scrolls.length, 0);
  assert.equal(rows[0].classList.contains("keep-visible"), true);
  assert.equal(nodes.get("[data-toggle-focus-completed]").hidden, true, "geen inschuivende knop tijdens lezen");
  h.click({ "[data-focus-return-now]": {} });
  assert.equal(nodes.get("[data-focus-return-now]").hidden, true);
  assert.equal(api.state.focusQueueUserBrowsing, false);
  assert.equal(rows[1].getBoundingClientRect().top, 351);
  assert.equal(rows[0].classList.contains("keep-visible"), false);
  h.advance(300);
  assert.equal(nodes.get("[data-focus-current-speed]").textContent, "12");
  assert.equal(nodes.get("[data-focus-current-incline]").textContent, "1%");
  assert.equal(scrolls.length, 2);
  assert.equal(rows[2].getBoundingClientRect().top, 351);
  h.click({ "[data-timer-pause]": {} });
  const elapsed = api.getTreadmillTimer().elapsedSeconds;
  h.advance(60);
  assert.equal(api.getTreadmillTimer().elapsedSeconds, elapsed);
  h.click({ "[data-timer-resume]": {} });
  h.advance(1);
  assert.equal(nodes.get("[data-block-remaining]").textContent, "07:58");
  h.click({ "[data-timer-stop]": {} });
  assert.equal(api.getTreadmillTimer().status, "idle");
});

test("zichtbaarheid vraagt volledige kaart onder de sticky cockpit", () => {
  const visible = createHarness().context.window.MarathonApp.focusActiveRowIsVisible;
  assert.equal(visible({ top: 351, bottom: 430 }, { bottom: 341 }, 844), true);
  assert.equal(visible({ top: 330, bottom: 410 }, { bottom: 341 }, 844), false);
  assert.equal(visible({ top: 800, bottom: 878 }, { bottom: 341 }, 844), false);
});

test("onbruikbare JSON-vormen blijven bewaard; schrijffout verbergt geen leesbare voortgang", () => {
  const originalWarn = console.warn;
  console.warn = () => {};
  try {
    for (const raw of ["null", "[]", "17", '"tekst"']) {
      const values = new Map([["marathon330TrainingAppData_v1", raw]]);
      const h = createHarness(values);
      assert.equal(values.get("marathon330TrainingAppData_v1"), raw);
      assert.equal(h.storageWarning.hidden, false);
    }
    const id = "marathon-3u30-w36-t1";
    const values = new Map([["marathon330TrainingAppData_v1", JSON.stringify({ appDataVersion: 4, workoutLogs: { [id]: { completed: true } } })]]);
    values.set = () => { throw new Error("QuotaExceeded"); };
    const h = createHarness(values);
    assert.equal(h.context.window.MarathonApp.isCompleted(id), true);
    assert.match(h.app.innerHTML, /✓ Voltooid/);
    assert.equal(h.storageWarning.hidden, false);
    delete values.set;
    h.context.window.MarathonApp.saveAppData();
    assert.equal(h.storageWarning.hidden, true);
  } finally { console.warn = originalWarn; }
});

test("MP-test registreert alle drie blokken en halve RPE-stappen", () => {
  const h = createHarness();
  const id = "marathon-3u30-w43-t2";
  h.change({ "[data-week-select]": true, value: "7" });
  h.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: id } } });
  for (const block of [1, 2, 3]) assert.ok(h.app.innerHTML.includes(`data-test-field="mpBlock${block}Rpe"`));
  h.input({ "[data-test-workout][data-test-field]": true, dataset: { testWorkout: id, testField: "mpBlock3Rpe" }, value: "7.5" });
  const saved = JSON.parse(h.localStorage.getItem("marathon330TrainingAppData_v1"));
  assert.equal(saved.testResults[id].mpBlock3Rpe, "7.5");
  assert.match(h.app.innerHTML, /value="7.5"/);
  h.context.window.MarathonApp.saveTestField(id, "mpBlock3Rpe", "7");
  h.brandHome.click();
  assert.match(h.app.innerHTML, /Doeltempo bleef beheerst rond RPE 7/);
});

test("Wake Lock volgt start, pauze, hervatten en stoppen zonder verplichte ondersteuning", async () => {
  const h = createHarness();
  const id = "marathon-3u30-w36-t1";
  let requests = 0;
  let releases = 0;
  h.context.navigator.wakeLock = { async request(type) { assert.equal(type, "screen"); requests++; return { async release() { releases++; }, addEventListener() {} }; } };
  h.context.window.MarathonApp.saveNotificationSetting(id, "enabled", false);
  h.click({ "[data-open-treadmill]": { dataset: { openTreadmill: id } } });
  h.click({ "[data-timer-start]": { dataset: { timerStart: id } } });
  await new Promise(setImmediate);
  assert.equal(requests, 1);
  h.click({ "[data-timer-pause]": {} });
  await new Promise(setImmediate);
  assert.equal(releases, 1);
  h.click({ "[data-timer-resume]": {} });
  await new Promise(setImmediate);
  assert.equal(requests, 2);
  h.click({ "[data-timer-stop]": {} });
  await new Promise(setImmediate);
  assert.equal(releases, 2);
});

test("maak browserfixture met alle 24 snelheid/helling-combinaties uit de echte renderer", () => {
  const fixtures = [];
  for (const speed of [8.5, 9, 9.5, 10, 10.5, 11.8, 12, 13.5]) for (const incline of [0, 0.5, 1]) {
    const h = createHarness();
    const workout = h.context.window.MARATHON_PLAN.weeks[0].workouts[1];
    workout.groups[0].segments[0].speedKmh = speed;
    workout.groups[0].segments[0].inclinePercent = incline;
    h.context.window.MarathonApp.saveNotificationSetting(workout.workoutId, "enabled", false);
    h.click({ "[data-open-treadmill]": { dataset: { openTreadmill: workout.workoutId } } });
    h.click({ "[data-timer-start]": { dataset: { timerStart: workout.workoutId } } });
    fixtures.push(h.app.innerHTML);
  }
  const html = `<!doctype html><html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><link rel="stylesheet" href="../style.css"><title>Focus layout test</title></head><body class="treadmill-active treadmill-focus-active"><div class="app-shell"><main id="app" class="content"></main></div><script>const fixtures=${JSON.stringify(fixtures)};document.getElementById('app').innerHTML=fixtures[Number(new URLSearchParams(location.search).get('case'))||0];</script></body></html>`;
  fs.writeFileSync(new URL("./focus-fixtures.html", import.meta.url), html);
  assert.equal(fixtures.length, 24);
});
