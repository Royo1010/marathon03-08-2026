import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";

const trainingDataCode = fs.readFileSync(new URL("../training-data.js", import.meta.url), "utf8");
const trainingPlanV5Code = fs.readFileSync(new URL("../training-plan-v5.js", import.meta.url), "utf8");
const notificationModelCode = fs.readFileSync(new URL("../notification-model.js", import.meta.url), "utf8");
const pushConfigCode = fs.readFileSync(new URL("../push-config.js", import.meta.url), "utf8");
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
  vm.runInContext(trainingPlanV5Code, context, { filename: "training-plan-v5.js" });
  vm.runInContext(notificationModelCode, context, { filename: "notification-model.js" });
  vm.runInContext(pushConfigCode, context, { filename: "push-config.js" });
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

test("definitieve fitnesschecks, herstelmetadata en weekfilosofie zijn volledig gekoppeld", () => {
  const harness = createHarness();
  harness.change({ "[data-week-select]": true, value: "2" });
  const week38 = harness.context.window.MARATHON_PLAN.weeks.find((week) => week.weekNumber === 38);
  const check = week38.workouts.find((workout) => workout.isFitnessCheck);

  assert.equal((harness.app.innerHTML.match(/<article class="training-card/g) || []).length, 5);
  assert.match(harness.app.innerHTML, /Waarom niet meer of harder/);
  assert.match(harness.app.innerHTML, /vierde training|20K confidence/i);
  assert.match(harness.app.innerHTML, /Fitness Check #1/);
  assert.match(harness.app.innerHTML, /Herstel aanbevolen/);
  assert.match(harness.app.innerHTML, /Loopband vereist/);

  harness.click({ "[data-toggle-workout]": { dataset: { toggleWorkout: check.workoutId } } });
  assert.match(harness.app.innerHTML, /Na ieder blok van 10 minuten/);
  assert.match(harness.app.innerHTML, /data-test-field="block10Rpe"/);
  assert.match(harness.app.innerHTML, /data-test-field="block12Legs"/);
  assert.match(harness.app.innerHTML, /Waarom deze training hier staat/);
  assert.match(harness.app.innerHTML, /Geen buitenvariant/);

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
  assert.match(harness.app.innerHTML, /Basisvolume verhogen en marathontempo/);
  assert.match(harness.app.innerHTML, /±58,1 km totaal incl\. marathon/);
  assert.match(harness.app.innerHTML, /4 sessies incl\. marathon/);
  assert.doesNotMatch(harness.app.innerHTML, /4 trainingen · Training 4/);

  harness.click({ "[data-view]": { dataset: { view: "info" } } });
  assert.match(harness.app.innerHTML, /Tempo en afkortingen/);
  assert.match(harness.app.innerHTML, /Inspanningsniveaus/);
  assert.match(harness.app.innerHTML, /Versie 2026\.09\.01-7/);

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
  const expected = [38.983, 43.707, 51.575, 56, 42.547, 61.541, 65.533, 64.366, 54.923, 47.033, 37.723, 58.146];

  assert.deepEqual(Array.from(plan.weeks, (week) => appApi.getWeekPlannedKm(week)), expected);
  assert.deepEqual(Array.from(appApi.dashboardMetrics().weekly, (week) => week.plannedKm), expected);

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
