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

function createHarness(storageValues = new Map(), search = "?date=2026-10-05", clock = null) {
  const listeners = {};
  const windowListeners = {};
  const app = { innerHTML: "", querySelector() { return null; }, querySelectorAll() { return []; } };
  const storageWarning = { hidden: true, textContent: "" };
  const brandHome = { addEventListener(type, handler) { this[type] = handler; } };
  const navButtons = ["today", "week", "plan", "more"].map((view) => ({ dataset: { view }, classList: createClassList(), setAttribute() {}, removeAttribute() {} }));
  const document = {
    visibilityState: "visible",
    body: { classList: createClassList() },
    getElementById(id) { return id === "app" ? app : id === "brand-home" ? brandHome : id === "storage-warning" ? storageWarning : null; },
    querySelectorAll(selector) { return selector === "[data-view]" ? navButtons : []; },
    addEventListener(type, handler) { listeners[type] = handler; },
  };
  const localStorage = createStorage(storageValues);
  let timerCallback = null;
  const window = {
    document,
    localStorage,
    location: { search, href: `https://example.test/marathon-330/${search}` },
    navigator: {},
    confirm() { return true; },
    scrollTo() {},
    setInterval(callback) { timerCallback = callback; return 1; },
    clearInterval() {},
    setTimeout(callback) { callback(); },
    addEventListener(type, handler) { windowListeners[type] = handler; },
    matchMedia() { return { matches: false }; },
  };
  window.window = window;
  const HarnessDate = clock ? class extends Date { constructor(...args) { super(...(args.length ? args : [clock.now])); } static now() { return clock.now; } } : Date;
  const context = vm.createContext({ console, Date: HarnessDate, Intl, URL, URLSearchParams, Blob, window, document, localStorage, navigator: window.navigator, structuredClone });
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
  return { app, brandHome, click, change, input, context, localStorage, listeners, windowListeners, navButtons, storageWarning, tick: () => timerCallback?.() };
}

const saved = (harness) => JSON.parse(harness.localStorage.getItem(STORAGE_KEY));
const navigate = (harness, view) => harness.click({ "[data-view]": { dataset: { view } } });
const openWorkout = (harness, id) => harness.click({ "[data-open-workout]": { dataset: { openWorkout: id } } });

test("V8 naar V9.2 behoudt historie en neemt uitsluitend identieke protocollen mee", () => {
  const original = { appDataVersion:13, meta:{schemaVersion:"marathon-final-v8-350-2026.10.05-4"}, completedSessions:{"V8-W42-T2":{completedAt:"2026-10-14"},"V8-W45-T2":{completedAt:"2026-11-04"}}, workoutLogs:{"V8-W42-T2":{completed:true,note:"bestaande notitie"},"V8-W45-T2":{completed:true,actualDurationMinutes:66}}, testResults:{"V8-W45-T2":{note:"test behouden"}},nutritionLogs:{"V8-W45-T2":{gels:2}}, userSettings:{pushClient:{installId:"original"},notificationSettings:{"V8-W42-T2":{enabled:false}}},legacyData:{finalV8History:[{note:"eerder archief"}]}};
  const storage = new Map([[STORAGE_KEY,JSON.stringify(original)]]);
  let harness = createHarness(storage);
  const data = saved(harness);
  assert.equal(data.completedSessions["V9_2-W42-T2"].carriedFromWorkoutId,"V8-W42-T2");
  assert.equal(data.completedSessions["V9_2-W45-T2"],undefined);
  assert.equal(data.workoutLogs["V9_2-W42-T2"],undefined);
  assert.deepEqual(data.legacyData.finalV9_2History[0].workoutLogs,original.workoutLogs);
  assert.deepEqual(data.legacyData.finalV9_2History[0].nutritionLogs,original.nutritionLogs);
  assert.deepEqual(data.legacyData.finalV9_2History[0].testResults,original.testResults);
  assert.deepEqual(data.legacyData.finalV8History,original.legacyData.finalV8History);
  assert.equal(data.userSettings.notificationSettings["V9_2-W42-T2"].enabled,false);
  openWorkout(harness,"V9_2-W42-T2");
  assert.match(harness.app.innerHTML,/Al uitgevoerd \(V8\)/);
  harness = createHarness(storage);
  assert.equal(saved(harness).legacyData.finalV9_2History.length,1);
  assert.equal(saved(harness).userSettings.pushClient.installId,"original");
});

test("7 oktober blijft werkelijke 58:56, los van geplande 60 minuten en zonder dubbel record", () => {
  const storage = new Map();
  let harness = createHarness(storage,"?date=2026-10-08");
  const data = saved(harness);
  const result = data.workoutLogs["V9_2-W41-T2"];
  assert.equal(result.actualDurationSeconds,3536);
  assert.equal(result.actualDistanceKm,10.09);
  assert.equal(result.averagePace,"5:51/km");
  assert.equal(result.averageHeartRate,129);
  assert.equal(result.actualStepsVerified,false);
  assert.equal(data.completedSessions["V9_2-W41-T2"].completedAt,"2026-10-07");
  openWorkout(harness,"V9_2-W41-T2");
  assert.match(harness.app.innerHTML,/58:56 · 10,09 km · 5:51\/km/);
  assert.match(harness.app.innerHTML,/Gepland: 60 min/);
  assert.match(harness.app.innerHTML,/geen bevestigde werkelijke stapovergangen/);
  const before = storage.get(STORAGE_KEY);
  harness.click({"[data-toggle-complete]":{dataset:{toggleComplete:"V9_2-W41-T2"}}});
  assert.equal(storage.get(STORAGE_KEY),before);
  harness = createHarness(storage);
  assert.equal(Object.keys(saved(harness).reportedActivities).length,1);
  assert.equal(Object.keys(saved(harness).workoutLogs).length,1);
});

test("toekomstige training afvinken vraagt bevestiging; annuleren schrijft niets", () => {
  const harness = createHarness(new Map(),"?date=2026-10-08",{now:Date.parse("2026-10-08T12:00:00+02:00")});
  let asked = "";
  harness.context.window.confirm = (message) => { asked = message; return false; };
  const before = harness.localStorage.getItem(STORAGE_KEY);
  harness.click({"[data-toggle-complete]":{dataset:{toggleComplete:"V9_2-W45-T2"}}});
  assert.match(asked,/daadwerkelijk|uitgevoerd/i);
  assert.equal(harness.localStorage.getItem(STORAGE_KEY),before);
});

test("V6-uitvoeringen blijven oorspronkelijk; alleen identieke W41-protocollen nemen voortgang mee", () => {
  const original = { appDataVersion:12, workoutLogs:{"V6-W41-T1":{completed:true,completedDate:"2026-10-06",note:"echt uitgevoerd",actualDistanceKm:4},"V6-W42-T2":{completed:true,note:"oud protocol"}}, completedSessions:{"V6-W41-T1":{completedAt:"2026-10-06"},"V6-W42-T2":{completedAt:"2026-10-14"}}, testResults:{"V6-W41-T1":{rpe:3}},nutritionLogs:{"V6-W41-T1":{gel:1}}, userSettings:{notificationSettings:{"V6-W41-T1":{enabled:false}},pushClient:{installId:"kept"}},legacyData:{previousPlan:{note:"oude historie"}},meta:{schemaVersion:"marathon-final-v6-sub4-2026.10.05-1"}};
  const storage = new Map([[STORAGE_KEY,JSON.stringify(original)]]);
  let harness = createHarness(storage);
  const data = saved(harness);
  assert.equal(data.completedSessions["V9_2-W41-T1"].carriedFromWorkoutId,"V6-W41-T1");
  assert.equal(data.completedSessions["V9_2-W41-T1"].completedAt,"2026-10-06");
  assert.equal(data.workoutLogs["V9_2-W41-T1"],undefined);
  assert.equal(data.completedSessions["V9_2-W42-T2"],undefined);
  assert.deepEqual(data.legacyData.finalV9_2History[0].workoutLogs,original.workoutLogs);
  assert.deepEqual(data.legacyData.finalV9_2History[0].testResults,original.testResults);
  assert.deepEqual(data.legacyData.finalV9_2History[0].nutritionLogs,original.nutritionLogs);
  assert.deepEqual(data.legacyData.previousPlan,original.legacyData.previousPlan);
  assert.equal(data.userSettings.notificationSettings["V9_2-W41-T1"].enabled,false);
  openWorkout(harness,"V9_2-W41-T1");
  assert.match(harness.app.innerHTML,/Al uitgevoerd \(V6\)/);
  assert.match(harness.app.innerHTML,/geen nieuwe V9.2-uitvoering/);
  harness = createHarness(storage);
  assert.equal(saved(harness).legacyData.finalV9_2History.length,1);
  assert.equal(saved(harness).userSettings.pushClient.installId,"kept");
});

test("lege opslag opent V9.2 geldig zonder grafieken, statistieken of logformulier", () => {
  const harness = createHarness();
  assert.match(harness.app.innerHTML, /Vandaag/);
  assert.match(harness.app.innerHTML, /data-open-garmin="V9_2-W41-T1"/);
  assert.match(harness.app.innerHTML, /data-open-treadmill="V9_2-W41-T1"/);
  assert.equal(saved(harness).appDataVersion,14);
  assert.equal(saved(harness).activePlanId,"marathon-final-v9-2-350-2026");
  assert.equal(Object.keys(saved(harness).workoutLogs).length,1);
  assert.equal(saved(harness).workoutLogs["V9_2-W41-T2"].actualDurationSeconds,3536);
  for (const view of ["today","week","plan","more","phases","info","nutrition","marathon","data"]) {
    navigate(harness,view);
    assert.doesNotMatch(harness.app.innerHTML,/onleesbare|Nog geen leesbare|data-workout-log|data-fuel-field|<svg|<canvas|data-view="stats"/i);
  }
  navigate(harness,"data");
  assert.match(harness.app.innerHTML,/<dd>gezond<\/dd>/);
  assert.match(harness.app.innerHTML,/Data &amp; app|Data & app/);
});

test("alle 33 trainingen renderen afzonderlijk; terug houdt de gekozen week vast", () => {
  const harness = createHarness();
  const plan = harness.context.window.MARATHON_PLAN;
  for (const [index,week] of plan.weeks.entries()) {
    navigate(harness,"week");
    harness.change({"[data-week-select]":true,value:String(index)});
    assert.equal((harness.app.innerHTML.match(/<article class="training-card/g)||[]).length,week.workouts.length);
    assert.doesNotMatch(harness.app.innerHTML,/GREEN|ORANGE|RED|V5|Kalendermaximum|no-basis|data-week-decision/);
    assert.equal(week.workouts.at(-1).activityType,week.weekNumber===47?"race":week.weekNumber===41?"bike":"run");
    for (const workout of week.workouts) {
      openWorkout(harness,workout.workoutId);
      assert.equal(harness.context.window.MarathonApp.state.view,"detail");
      assert.match(harness.app.innerHTML,/data-close-workout/);
      assert.ok(harness.app.innerHTML.includes(workout.title.replace(/&/g,"&amp;")));
      assert.ok(harness.app.innerHTML.includes(workout.garmin.programSummary.replace(/&/g,"&amp;")));
      assert.doesNotMatch(harness.app.innerHTML,/Werkelijke uitvoering loggen|RPE achteraf|Voedingsregistratie/);
      assert.equal((harness.app.innerHTML.match(/class="training-card/g)||[]).length,0);
      harness.click({"[data-close-workout]":{}});
      assert.match(harness.app.innerHTML,new RegExp(`Week ${week.weekNumber}`));
    }
  }
});

test("Garmin en Loopband blijven apart; MP toont Tempo-target en 5:24–5:30/km", () => {
  const harness = createHarness();
  harness.click({"[data-open-garmin]":{dataset:{openGarmin:"V9_2-W42-T2"}}});
  assert.match(harness.app.innerHTML,/<dt>Type doel<\/dt><dd>Tempo<\/dd>/);
  assert.match(harness.app.innerHTML,/<dt>Doelwaarde<\/dt><dd>5:24–5:30\/km<\/dd>/);
  assert.match(harness.app.innerHTML,/Herhaalgroep: 4 keer/);
  assert.match(harness.app.innerHTML,/hersteljog blijft ook na de laatste herhaling aanwezig/);
  harness.click({"[data-workout-mode][data-workout-id]":{dataset:{workoutMode:"treadmill",workoutId:"V9_2-W42-T2"}}});
  assert.match(harness.app.innerHTML,/11(?:,0)? km\/u/);
  assert.match(harness.app.innerHTML,/praattempo/);
  assert.match(harness.app.innerHTML,/>0%</);
  assert.match(harness.app.innerHTML,/0% starthelling/);
});

test("Schema en Fases tonen V9.2-totalen, zonder oud taper- of kleurmodel", () => {
  const harness = createHarness();
  navigate(harness,"plan");
  assert.equal((harness.app.innerHTML.match(/<button class="plan-row/g)||[]).length,7);
  assert.match(harness.app.innerHTML,/170 min loopsessies · 60 min fiets · 0 min MP/);
  assert.match(harness.app.innerHTML,/320 min loopsessies · 35 min MP/);
  assert.match(harness.app.innerHTML,/Schatting 50,3–53,9 km · midden 52 km/);
  assert.match(harness.app.innerHTML,/marathon apart/);
  navigate(harness,"phases");
  assert.match(harness.app.innerHTML,/95 → 120 → 140 → maximaal 160/);
  assert.doesNotMatch(harness.app.innerHTML,/95-minuten|no-basis|ORANGE|V5|Geen huidig eindtijddoel/);
});

test("voltooien is direct opgeslagen en blijft zichtbaar na refresh en navigatie", () => {
  const storage = new Map();
  let harness = createHarness(storage);
  harness.click({"[data-toggle-complete]":{dataset:{toggleComplete:"V9_2-W41-T1"}}});
  assert.match(saved(harness).completedSessions["V9_2-W41-T1"].completedAt,/^\d{4}-\d{2}-\d{2}$/);
  assert.equal(saved(harness).workoutLogs["V9_2-W41-T1"].completed,true);
  harness = createHarness(storage);
  assert.match(harness.app.innerHTML,/class="training-number">Training 5</);
  navigate(harness,"week");
  assert.match(harness.app.innerHTML,/Voltooid/);
  const original = storage.get(STORAGE_KEY);
  for (const view of ["more","plan","phases","info","nutrition","data","marathon","today"]) navigate(harness,view);
  assert.equal(storage.get(STORAGE_KEY),original);
});

test("oude V5-logs, completion, notities, voeding en tests blijven idempotent in geschiedenis", () => {
  const oldId="V5-W41-RUN-2026-10-06";
  const original={appDataVersion:11,createdAt:"2026-10-01",workoutLogs:{[oldId]:{completed:true,note:"historische notitie",actualDistanceKm:4.2}},completedSessions:{[oldId]:{completedAt:"2026-10-06"}},testResults:{[oldId]:{rpe:3}},nutritionLogs:{[oldId]:{note:"oude voeding"}},userSettings:{pushClient:{installId:"abc"},weekDecisions:{42:{status:"red"}},optionalWorkoutChoices:{45:"rhythm"},raceTarget:{time:"3:30"}},meta:{schemaVersion:"V5"}};
  const storage=new Map([[STORAGE_KEY,JSON.stringify(original)],["other-app","unrelated"]]);
  let harness=createHarness(storage);
  const archive=saved(harness).legacyData.finalV9_2History[0];
  assert.deepEqual(archive.workoutLogs,original.workoutLogs);
  assert.deepEqual(archive.testResults,original.testResults);
  assert.deepEqual(archive.completedSessions,original.completedSessions);
  assert.deepEqual(archive.nutritionLogs,original.nutritionLogs);
  assert.deepEqual(archive.weekDecisions,original.userSettings.weekDecisions);
  assert.deepEqual(saved(harness).userSettings.pushClient,original.userSettings.pushClient);
  assert.deepEqual(Object.keys(saved(harness).completedSessions),["V9_2-W41-T2"]);
  assert.equal(harness.context.window.MarathonApp.isCompleted("V9_2-W41-T1"),false);
  harness=createHarness(storage);
  assert.equal(saved(harness).legacyData.finalV9_2History.length,1);
  assert.equal(storage.get("other-app"),"unrelated");
  assert.deepEqual(JSON.parse(harness.context.window.MarathonApp.exportAppData()).legacyData.finalV9_2History[0].workoutLogs,original.workoutLogs);
});

test("Data werkt bij echte corrupte JSON en overschrijft die niet tijdens navigatie", () => {
  const storage=new Map([[STORAGE_KEY,"{broken"]]);
  const harness=createHarness(storage);
  navigate(harness,"data");
  assert.match(harness.app.innerHTML,/Niet leesbaar/);
  assert.match(harness.app.innerHTML,/App-diagnose/);
  harness.listeners.visibilitychange();
  assert.equal(storage.get(STORAGE_KEY),"{broken");
  assert.equal(harness.context.window.MarathonApp.exportAppData(),"{broken");
});

test("een afwijkende historische archiefvorm blijft bij migratie bewaard", () => {
  const old = { appDataVersion: 11, workoutLogs: { old: { note: "behouden" } }, completedSessions: {}, legacyData: { finalV9_2History: { previous: "bestaand archief" } } };
  const harness = createHarness(new Map([[STORAGE_KEY,JSON.stringify(old)]]));
  const archive = saved(harness).legacyData.finalV9_2History[0];
  assert.deepEqual(archive.previousV9_2History, old.legacyData.finalV9_2History);
  assert.deepEqual(archive.workoutLogs, old.workoutLogs);
});

test("import valideert en vraagt eerst bevestiging; annuleren verandert niets", () => {
  const harness=createHarness();
  const appApi=harness.context.window.MarathonApp;
  const original=harness.localStorage.getItem(STORAGE_KEY);
  appApi.prepareImport("geen JSON");
  assert.match(harness.app.innerHTML,/Import geweigerd/);
  assert.equal(harness.localStorage.getItem(STORAGE_KEY),original);
  appApi.prepareImport(JSON.stringify({workoutLogs:[],completedSessions:{}}));
  assert.match(harness.app.innerHTML,/Import geweigerd/);
  const backup=saved(harness);
  backup.completedSessions["V9_2-W42-T2"]={completedAt:"2026-10-14"};
  appApi.prepareImport(JSON.stringify(backup));
  assert.match(harness.app.innerHTML,/Dit vervangt je huidige lokale trainingsdata/);
  assert.equal(harness.localStorage.getItem(STORAGE_KEY),original);
  harness.click({"[data-data-action]":{dataset:{dataAction:"close"}}});
  assert.equal(harness.localStorage.getItem(STORAGE_KEY),original);
  appApi.prepareImport(JSON.stringify(backup));
  appApi.confirmImport();
  assert.equal(saved(harness).completedSessions["V9_2-W42-T2"].completedAt,"2026-10-14");
  assert.match(harness.app.innerHTML,/Backup teruggezet/);
});

test("countdown, compact dashboard en checkpoints gebruiken V9.2-doelen zonder grafieken", () => {
  const harness=createHarness(new Map(),"?date=2026-10-05");
  harness.brandHome.click();
  assert.equal(harness.context.window.MarathonApp.daysUntilMarathon(),48);
  assert.match(harness.app.innerHTML,/6 weken en 6 dagen/);
  assert.match(harness.app.innerHTML,/1 van 32 trainingen afgevinkt · 31 te gaan \+ marathon/);
  assert.match(harness.app.innerHTML,/3:50:00/);
  assert.match(harness.app.innerHTML,/&lt;3:55:50/);
  assert.match(harness.app.innerHTML,/Sub 4:00/);
  assert.doesNotMatch(harness.app.innerHTML,/Cumulatieve|chart|werkelijk lopen|Taperbasis/i);
  navigate(harness,"info");
  assert.match(harness.app.innerHTML,/1 november \(na W44\)/);
  assert.match(harness.app.innerHTML,/5:27,05\/km/);
  assert.doesNotMatch(harness.app.innerHTML,/Log per sessie:|Log na iedere training:/);
  navigate(harness,"nutrition");
  assert.match(harness.app.innerHTML,/75–85 g\/u/);
  assert.match(harness.app.innerHTML,/10, 38, 66, 94, 122, 150, 178, 206/);
});

test("alle tijdlijnen zijn cumulatief en identiek aan hun trainingsduren", () => {
  const harness=createHarness();
  for (const workout of harness.context.window.MARATHON_PLAN.allWorkouts.filter((w)=>w.activityType==="run")) {
    const timeline=harness.context.window.MarathonApp.buildTreadmillTimeline(workout);
    assert.equal(timeline.hasCompleteTiming,true);
    assert.equal(timeline.blocks[0].startSeconds,0);
    assert.equal(timeline.totalSeconds,workout.totalPlannedSeconds);
    for (const [i,block] of timeline.blocks.entries()) {
      assert.equal(block.endSeconds-block.startSeconds,block.durationSeconds);
      if(i)assert.equal(block.startSeconds,timeline.blocks[i-1].endSeconds);
    }
  }
});

test("timer, pauze, hervatten en stop werken zonder completion automatisch te wijzigen", () => {
  const harness=createHarness();
  const original=harness.localStorage.getItem(STORAGE_KEY);
  harness.click({"[data-open-treadmill]":{dataset:{openTreadmill:"V9_2-W42-T2"}}});
  harness.click({"[data-timer-start]":{dataset:{timerStart:"V9_2-W42-T2"}}});
  assert.match(harness.app.innerHTML,/Actieve loopbandcockpit/);
  assert.match(harness.app.innerHTML,/Praattempo/);
  harness.click({"[data-timer-pause]":{}});
  assert.match(harness.app.innerHTML,/Gepauzeerd/);
  harness.click({"[data-timer-resume]":{}});
  harness.context.window.confirm=()=>false;
  harness.click({"[data-timer-stop]":{}});
  assert.match(harness.app.innerHTML,/Actieve loopbandcockpit/);
  harness.context.window.confirm=()=>true;
  harness.click({"[data-timer-stop]":{}});
  assert.match(harness.app.innerHTML,/Start training/);
  assert.equal(harness.localStorage.getItem(STORAGE_KEY),original);
});

test("actieve cockpit schakelt ook de eenheid en tekststijl van praattempo naar MP en terug", () => {
  const clock={now:Date.UTC(2026,9,14,10)};
  const harness=createHarness(new Map(),"?date=2026-10-14",clock);
  const original=harness.localStorage.getItem(STORAGE_KEY);
  harness.click({"[data-open-treadmill]":{dataset:{openTreadmill:"V9_2-W42-T2"}}});
  harness.click({"[data-timer-start]":{dataset:{timerStart:"V9_2-W42-T2"}}});
  const speed={textContent:"",classList:createClassList()};
  const unit={textContent:""};
  const cockpit={classList:createClassList()};
  harness.app.querySelector=(selector)=>({"[data-focus-current-speed]":speed,"[data-focus-speed-unit]":unit,"[data-focus-cockpit]":cockpit}[selector]||null);
  clock.now+=900000;
  harness.tick();
  assert.equal(speed.textContent,"11");
  assert.equal(unit.textContent,"km/u");
  assert.equal(speed.classList.contains("is-self-paced"),false);
  clock.now+=360000;
  harness.tick();
  assert.equal(speed.textContent,"Praattempo");
  assert.equal(unit.textContent,"RPE 2–3");
  assert.equal(speed.classList.contains("is-self-paced"),true);
  assert.equal(harness.localStorage.getItem(STORAGE_KEY),original);
});
