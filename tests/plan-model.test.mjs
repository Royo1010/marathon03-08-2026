import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";
import { pathToFileURL } from "node:url";

const sourceUrl = process.env.MARATHON_SCHEMA_SOURCE ? pathToFileURL(process.env.MARATHON_SCHEMA_SOURCE) : new URL("../marathonschema_Roy_FINAL_V9_2_350_GARMIN_OUTDOOR_2026-10-08.md", import.meta.url);
const dataUrl = new URL("../training-data.js", import.meta.url);
const source = fs.readFileSync(sourceUrl, "utf8");
const context = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(dataUrl, "utf8"), context);
const plan = context.window.MARATHON_PLAN;
const model = context.window.MARATHON_MODEL;
const flat = (workout) => Array.from(model.flattenWorkoutSegments(workout));
const find = (id) => plan.allWorkouts.find((workout) => workout.workoutId === id);

test("alle V8-migratiealiassen matchen het onafhankelijk opnieuw gegenereerde oude protocol", {skip: !fs.existsSync(new URL("../marathonschema_Roy_FINAL_V8_350_GARMIN_OUTDOOR_2026-10-05.md",import.meta.url)) && "Historische V8-bron ontbreekt in de huidige werkmap"}, () => {
  const folder = fs.mkdtempSync(path.join(os.tmpdir(), "marathon-v8-protocol-"));
  try {
    const output = path.join(folder,"v8.js");
    execFileSync(process.execPath,[new URL("../scripts/generate-marathon-plan-v8.mjs",import.meta.url).pathname,new URL("../marathonschema_Roy_FINAL_V8_350_GARMIN_OUTDOOR_2026-10-05.md",import.meta.url).pathname,output]);
    const old = vm.createContext({window:{}});
    vm.runInContext(fs.readFileSync(output,"utf8"),old);
    const canonical = (workout) => JSON.stringify({activity:workout.activityType,groups:workout.groups.map(g=>({kind:g.kind,reps:g.repetitions,steps:g.segments.map(s=>({name:s.name,seconds:s.durationSeconds,target:s.targetType,value:s.targetValue,incline:s.inclinePercent}))}))});
    for (const workout of plan.allWorkouts) {
      const previous = old.window.MARATHON_PLAN.allWorkouts.find(w=>w.trainingNumber===workout.trainingNumber && w.weekNumber===workout.weekNumber);
      const identical = canonical(workout) === canonical(previous);
      assert.equal((workout.compatiblePreviousIds || []).includes(previous.workoutId),identical,workout.workoutId);
    }
  } finally { fs.rmSync(folder,{recursive:true}); }
});

test("W41-migratiekoppelingen zijn onafhankelijk gecontroleerd tegen het oorspronkelijke Garmin V6-protocol", {skip: !fs.existsSync(new URL("../marathonschema_Roy_FINAL_V6_SUB4_2026-10-05.md",import.meta.url)) && "Historische V6-bron ontbreekt in de huidige werkmap"}, () => {
  const folder = fs.mkdtempSync(path.join(os.tmpdir(), "marathon-protocol-test-"));
  try {
    const generated = path.join(folder,"v6.js");
    execFileSync(process.execPath,[new URL("../scripts/generate-marathon-plan-v6.mjs",import.meta.url).pathname,new URL("../marathonschema_Roy_FINAL_V6_SUB4_2026-10-05.md",import.meta.url).pathname,generated]);
    const old = vm.createContext({window:{}});
    vm.runInContext(fs.readFileSync(generated,"utf8"),old);
    const canonical = (workout) => JSON.stringify(workout.groups.map((group) => ({kind:group.kind,reps:group.repetitions,steps:group.segments.map((step)=>({name:step.name,seconds:step.durationSeconds,target:step.targetType,value:step.targetValue,incline:step.inclinePercent}))})));
    for (const workout of plan.allWorkouts) {
      if (workout.weekNumber !== 41 || workout.trainingNumber === 4) continue;
      const oldId = workout.compatiblePreviousIds.find(id=>id.startsWith("V6-"));
      const previous = old.window.MARATHON_PLAN.allWorkouts.find((w)=>w.workoutId===oldId);
      assert.equal(canonical(workout),canonical(previous),workout.workoutId);
    }
  } finally { fs.rmSync(folder,{recursive:true}); }
});

test("afstandsschattingen volgen de bron-aannames; marathon en wandelen zijn apart", () => {
  for (const week of plan.weeks.slice(1)) {
    let low=0,high=0,middle=0;
    for (const workout of week.workouts) {
      if (workout.activityType === "race") { assert.equal(workout.distanceEstimate,null); continue; }
      const steps=flat(workout);
      const easy=steps.filter((s)=>s.type!=="marathonpace").reduce((sum,s)=>sum+s.durationSeconds/60,0);
      const mp=steps.filter((s)=>s.type==="marathonpace").reduce((sum,s)=>sum+s.durationSeconds/60,0);
      low+=easy/6.5+mp/5.45; high+=easy/6+mp/5.45; middle+=easy/6.25+mp/5.45;
    }
    assert.ok(Math.abs(low-week.distanceEstimate.min)<1e-9);
    assert.ok(Math.abs(high-week.distanceEstimate.max)<1e-9);
    assert.ok(Math.abs(middle-week.distanceEstimate.middle)<1e-9);
  }
  assert.equal(plan.weeks[0].distanceEstimate,null);
});

test("race-tussentijden en fueling zijn volledig aanwezig en onafhankelijk nagerekend", () => {
  const blocks = find("V9_2-W47-T4-RACE").garmin.raceGuidance;
  const splits = blocks.find((b)=>b.type==="table"&&b.headers.some((h)=>/constant/i.test(h)));
  assert.ok(splits);
  const clockSeconds=(value)=>value.split(":").map(Number).reduce((sum,n)=>sum*60+n,0);
  for (const row of splits.rows) {
    const distance = /Halve|21,0975/.test(row[0]) ? 21.0975 : Number(row[0].replace(",",".").match(/[\d.]+/)?.[0]);
    assert.ok(Math.abs(clockSeconds(row[1])-230*60*distance/42.195)<=1,row[0]);
  }
  assert.ok(Math.abs(8*40/(230/60)-83.47826)<0.00001);
  assert.equal(5+230+5,240);
  assert.match(JSON.stringify(plan.guidance.sections[6]),/10, 38, 66, 94, 122, 150, 178, 206/);
});

test("V9.2 is volledig, met A/B/C-doelen en 33 unieke sessies", () => {
  assert.deepEqual(Array.from(plan.weeks, (week) => week.weekNumber), [41,42,43,44,45,46,47]);
  assert.equal(plan.allWorkouts.length, 33);
  assert.equal(new Set(plan.allWorkouts.map((workout) => workout.workoutId)).size, 33);
  assert.equal(plan.config.targetTime, "3:50:00");
  assert.equal(plan.config.targetPace, "5:27/km");
  assert.equal(plan.config.practicalRacePace, "5:27/km");
  assert.equal(plan.config.secondaryTarget, "PR <3:55:50");
  assert.equal(plan.config.fallbackTarget, "Sub 4:00");
  assert.equal(plan.config.sourceSha256, crypto.createHash("sha256").update(source).digest("hex"));
  assert.ok(plan.allWorkouts.every((workout) => !workout.strength && !workout.isSuspended));
});

test("onafhankelijk herberekende totalen, wandelen, fietsen en MP zijn exact", () => {
  const expected = [[170,170,0,60,0], [240,240,0,0,24], [285,285,0,0,30], [310,310,0,0,40], [320,320,0,0,35], [195,195,0,0,20], [65,65,0,0,8]];
  for (const [index, week] of plan.weeks.entries()) {
    const result = [0,0,0,0,0];
    for (const workout of week.workouts.filter((workout) => workout.activityType !== "race")) {
      const steps = flat(workout);
      assert.equal(steps.reduce((sum, step) => sum + step.durationSeconds, 0), workout.totalPlannedSeconds, workout.workoutId);
      for (const step of steps) {
        assert.ok(step.durationSeconds > 0);
        if (workout.activityType === "bike") result[3] += step.durationSeconds / 60;
        else { result[0] += step.durationSeconds / 60; result[step.type === "wandelen" ? 2 : 1] += step.durationSeconds / 60; }
        if (step.type === "marathonpace") result[4] += step.durationSeconds / 60;
      }
    }
    assert.deepEqual(result, expected[index], `Week ${week.weekNumber}`);
    assert.deepEqual([week.plannedSessionMinutes,week.plannedRunMinutes,week.plannedWalkMinutes,week.plannedBikeMinutes,week.plannedMpMinutes], result);
  }
});

test("alle 32 tijdprotocollen komen overeen met iedere tabelrij uit de Markdownbron", () => {
    const clean = (text) => text.replace(/\*\*|`/g, "").replace("22,3–24,2 km", "21,5–23,3 km").trim();
  const chunks = [...source.matchAll(/^### Training \d+ — .+\n([\s\S]*?)(?=^### |^## |$(?![\s\S]))/gm)];
  assert.equal(chunks.length, 33);
  for (const chunk of chunks) {
    const body = chunk[1];
    const id = body.match(/\*\*ID:\*\* `([^`]+)`/)[1];
    const workout = find(id);
    assert.ok(workout, id);
    if (workout.activityType === "race") continue;
    const rows = body.split("\n").filter((line) => /^\|/.test(line)).map((line) => line.split("|").slice(1,-1).map(clean)).filter((row) => !/^Stap/.test(row[0]) && !/^-+$/.test(row[0]));
    const actual = workout.garmin.groups.flatMap((group) => group.kind === "repeat" ? [{ repeat: group.repetitions }, ...group.segments] : group.segments);
    assert.equal(rows.length, actual.length, id);
    for (const [index, row] of rows.entries()) {
      const duration = row.length === 5 ? row[2] : row[1];
      const target = row.length === 5 ? row[3] : row[2];
      if (row[0] === "Herhalen") assert.equal(actual[index].repeat, Number(duration.match(/\d+/)[0]));
      else {
        assert.equal(actual[index].name, row[0].replace(/^↳\s*/, ""), id);
        assert.equal(actual[index].durationSeconds, Number(duration.match(/\d+/)[0])*60, id);
        assert.equal(actual[index].cue, row.at(-1), id);
        assert.equal(actual[index].targetType, target.startsWith("Tempo") ? "Tempo" : "Vrij", id);
      }
    }
    for (const [label,key] of [["Programmeer in Garmin als","garmin"],["Garmin-invoer","garmin"],["Doel / uitvoering","goal"],["Uitvoering","goal"],["Voeding oefenen","nutrition"],["Voedingsoefening","nutrition"],["Loopband","treadmillInstruction"],["Duurcontrole","durationCheck"],["Generale repetitie","rehearsal"]]) {
      const match = body.match(new RegExp(`^\\*\\*${label}:\\*\\* (.+)$`, "m"));
      if (match) assert.equal(key === "garmin" ? workout.garmin.programSummary : workout[key], clean(match[1]).replace(/\.$/, ""), id);
    }
  }
});

test("repeats behouden het laatste herstel; W41 continu en W45 MP zonder interval", () => {
  assert.ok(plan.allWorkouts.every((workout) => !flat(workout).some((step) => step.type === "stride")));
  assert.deepEqual(flat(find("V9_2-W41-T4")).map(s=>s.durationSeconds/60), [5,40,5]);
  const confidence = find("V9_2-W45-T2");
  assert.equal(confidence.confidence, true);
  assert.ok(confidence.groups.every(g=>g.kind==="sequence"));
  assert.deepEqual(flat(confidence).map(s=>s.durationSeconds/60), [15,35,5]);
  for (const [week,reps,work,recovery,cool] of [[42,4,6,3,5],[43,3,10,3,6],[44,2,20,3,5],[46,2,10,3,7],[47,2,4,2,3]]) {
    const workout = find(`V9_2-W${week}-T2`);
    assert.equal(workout.groups[1].repetitions, reps);
    assert.deepEqual(Array.from(workout.groups[1].segments, (step) => step.durationSeconds / 60), [work,recovery]);
    assert.equal(flat(workout).at(-2).isRecovery, true);
    assert.equal(flat(workout).at(-1).durationSeconds, cool * 60);
  }
});

test("confidence-doelen, gelopbouw, persoonlijke referentie en W44-range zijn brongetrouw", () => {
  assert.deepEqual(Array.from(plan.allWorkouts.filter(w=>w.confidence),w=>w.workoutId),["V9_2-W43-T5","V9_2-W44-T5","V9_2-W45-T2","V9_2-W45-T5"]);
  for (const id of ["V9_2-W43-T5","V9_2-W44-T5","V9_2-W45-T2","V9_2-W45-T5"]) assert.ok(find(id).goal.length>30,id);
  const half = find("V9_2-W44-T5");
  assert.ok(Math.abs(half.distanceEstimate.min-140/6.5)<1e-9);
  assert.ok(Math.abs(half.distanceEstimate.max-140/6)<1e-9);
  assert.equal(half.distanceEstimate.middle,22.4);
  assert.doesNotMatch(JSON.stringify(plan),/22,3–24,2/);
  const actual = plan.reportedActivities[0];
  assert.equal(actual.actualDurationSeconds,3536);
  assert.equal(actual.actualDistanceKm,10.09);
  assert.equal(actual.averagePace,"5:51/km");
  const fuel = JSON.stringify(plan.guidance.sections[6]);
  for (const text of ["25 en 65","20, 60 en 100","15, 50, 85 en 120","15, 45, 75, 105 en 135","10, 38, 66, 94, 122, 150, 178, 206"]) assert.ok(fuel.includes(text),text);
  assert.ok(Math.abs(2*40/(95/60)-50.5263)<0.0001);
  assert.ok(Math.abs(4*40/(140/60)-68.5714)<0.0001);
  assert.equal(5*40/(160/60),75);
});

test("Garmin en loopband delen tijdstappen, 0% en juiste MP-targets", () => {
  for (const workout of plan.allWorkouts.filter((workout) => workout.activityType === "run")) {
    assert.equal(model.treadmillGroups(workout), workout.groups);
    for (const step of flat(workout)) {
      assert.equal(step.inclinePercent, 0);
      const fields = model.garminStepFields(step);
      const [h,m,s] = fields.durationValue.split(":").map(Number);
      assert.equal(h*3600+m*60+s, step.durationSeconds);
      assert.equal(fields.durationType, "Tijd");
      assert.equal(fields.targetType, step.type === "marathonpace" ? "Tempo" : "Geen doel");
      if (step.type === "marathonpace") {
        assert.equal(fields.targetValue, "5:24–5:30/km");
        assert.equal(step.speedKmh, 11);
        assert.equal(step.speedMode, "prescribed");
      } else {
        assert.equal(step.speedKmh, null);
        assert.equal(step.speedRangeKmh, null);
        assert.equal(step.speedMode, "self-paced");
      }
    }
  }
});

test("vrije nummering, datumgrenzen, lange duur en taper zijn brongetrouw", () => {
  for (const week of plan.weeks) {
    assert.deepEqual(Array.from(week.workouts, (w) => w.trainingNumber), week.weekNumber >= 46 ? [1,2,3,4] : [1,2,3,4,5]);
    assert.equal(week.planningMode, "flexible");
    assert.ok(week.workouts.filter((w) => w.activityType !== "race").every((w) => w.date === null));
    if (week.weekNumber === 41) assert.equal(week.workouts[4].activityType, "bike");
    else assert.equal(week.workouts.filter((w) => w.activityType === "bike").length, 0);
    assert.ok(week.workouts.every((w) => w.preferredDate >= week.startDate && w.preferredDate <= week.endDate));
    if (week.weekNumber >= 42 && week.weekNumber <= 45) {
      assert.deepEqual(Array.from(week.workouts, (w) => new Date(`${w.preferredDate}T12:00:00Z`).getUTCDay()), [2,3,4,6,0]);
    }
  }
  assert.deepEqual([42,43,44,45].map((week) => find(`V9_2-W${week}-T5`).plannedSessionMinutes), [95,120,140,160]);
  assert.equal(find("V9_2-W45-T5").latestDate,"2026-11-08");
  assert.equal(find("V9_2-W46-T4").plannedSessionMinutes,80);
  assert.equal(find("V9_2-W47-T2").preferredDate,"2026-11-18");
  assert.equal(find("V9_2-W47-T4-RACE").date,"2026-11-22");
  assert.equal(find("V9_2-W47-T4-RACE").totalPlannedSeconds,null);
  assert.equal(find("V9_2-W47-T4-RACE").treadmillAvailable,false);
  assert.match(find("V9_2-W47-T4-RACE").garmin.programSummary,/officiële finish leidend/);
});

test("oude kleurcriteria en logs beïnvloeden V9.2 niet meer", () => {
  assert.equal(model.deriveTaperBasis, undefined);
  assert.deepEqual(Array.from(model.resolvePlan({userSettings:{weekDecisions:{42:{status:"red"}}}}), w=>w.plannedSessionMinutes),[170,240,285,310,320,195,65]);
});

test("V9.2 is exact reproduceerbaar uit de bron", () => {
  const folder = fs.mkdtempSync(path.join(os.tmpdir(),"marathon-v6-test-"));
  try {
    const generated = path.join(folder,"training-data.js");
    execFileSync(process.execPath,[new URL("../scripts/generate-marathon-plan.mjs",import.meta.url).pathname,sourceUrl.pathname,generated]);
    assert.equal(fs.readFileSync(generated,"utf8"),fs.readFileSync(dataUrl,"utf8"));
  } finally { fs.rmSync(folder,{recursive:true}); }
});
