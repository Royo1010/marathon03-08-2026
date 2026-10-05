import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";

const sourceUrl = new URL("../marathonschema_Roy_FINAL_V8_350_GARMIN_OUTDOOR_2026-10-05.md", import.meta.url);
const dataUrl = new URL("../training-data.js", import.meta.url);
const source = fs.readFileSync(sourceUrl, "utf8");
const context = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(dataUrl, "utf8"), context);
const plan = context.window.MARATHON_PLAN;
const model = context.window.MARATHON_MODEL;
const flat = (workout) => Array.from(model.flattenWorkoutSegments(workout));
const find = (id) => plan.allWorkouts.find((workout) => workout.workoutId === id);

test("W41-migratiekoppelingen zijn onafhankelijk gecontroleerd tegen het oorspronkelijke V6-protocol", () => {
  const folder = fs.mkdtempSync(path.join(os.tmpdir(), "marathon-protocol-test-"));
  try {
    const generated = path.join(folder,"v6.js");
    execFileSync(process.execPath,[new URL("../scripts/generate-marathon-plan-v6.mjs",import.meta.url).pathname,new URL("../marathonschema_Roy_FINAL_V6_SUB4_2026-10-05.md",import.meta.url).pathname,generated]);
    const old = vm.createContext({window:{}});
    vm.runInContext(fs.readFileSync(generated,"utf8"),old);
    const canonical = (workout) => JSON.stringify(workout.groups.map((group) => ({kind:group.kind,reps:group.repetitions,steps:group.segments.map((step)=>({name:step.name,type:step.type,seconds:step.durationSeconds,target:step.targetType,value:step.targetValue,incline:step.inclinePercent,speed:step.speedKmh,range:step.speedRangeKmh}))})));
    for (const workout of plan.allWorkouts) {
      if (workout.weekNumber !== 41) { assert.equal(workout.compatiblePreviousIds,undefined); continue; }
      const oldId = workout.compatiblePreviousIds[0];
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
      low+=easy/7.5+mp/5.5; high+=easy/6.5+mp/5.4; middle+=easy/7+mp/(230/42.195);
    }
    assert.ok(Math.abs(low-week.distanceEstimate.min)<1e-9);
    assert.ok(Math.abs(high-week.distanceEstimate.max)<1e-9);
    assert.ok(Math.abs(middle-week.distanceEstimate.middle)<1e-9);
  }
  assert.equal(plan.weeks[0].distanceEstimate,null);
});

test("race-tussentijden en fueling zijn volledig aanwezig en onafhankelijk nagerekend", () => {
  const blocks = find("V8-W47-T4-RACE").garmin.raceGuidance;
  const splits = blocks.find((b)=>b.type==="table"&&b.headers.some((h)=>/constant/i.test(h)));
  assert.ok(splits);
  const clockSeconds=(value)=>value.split(":").map(Number).reduce((sum,n)=>sum*60+n,0);
  for (const row of splits.rows) {
    const distance = /Halve|21,0975/.test(row[0]) ? 21.0975 : Number(row[0].replace(",",".").match(/[\d.]+/)?.[0]);
    assert.ok(Math.abs(clockSeconds(row[1])-230*60*distance/42.195)<=1,row[0]);
  }
  assert.ok(Math.abs(8*40/(230/60)-83.47826)<0.00001);
  assert.equal(5+230+5,240);
  assert.match(JSON.stringify(plan.guidance.sections[6]),/15, 45, 75, 105, 135, 165, 195 en 220/);
});

test("V8 is volledig, met A/B/C-doelen en 33 unieke sessies", () => {
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
  const expected = [[185,164,21,60,0], [240,240,0,0,24], [295,295,0,0,30], [320,320,0,0,40], [330,330,0,0,40], [195,195,0,0,20], [65,65,0,0,8]];
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
  const clean = (text) => text.replace(/\*\*|`/g, "").trim();
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

test("alle repeats behouden het laatste herstel; W41 heeft geen strides", () => {
  assert.ok(plan.allWorkouts.every((workout) => !flat(workout).some((step) => step.type === "stride")));
  const runwalk = find("V8-W41-T4");
  assert.equal(runwalk.groups[1].repetitions, 11);
  assert.equal(flat(runwalk).length, 24);
  assert.equal(flat(runwalk).at(-2).type, "wandelen");
  for (const [week,reps,work,recovery,cool] of [[42,4,6,3,5],[43,3,10,3,6],[44,2,20,3,5],[45,2,20,3,5],[46,2,10,3,7],[47,2,4,2,3]]) {
    const workout = find(`V8-W${week}-T2`);
    assert.equal(workout.groups[1].repetitions, reps);
    assert.deepEqual(Array.from(workout.groups[1].segments, (step) => step.durationSeconds / 60), [work,recovery]);
    assert.equal(flat(workout).at(-2).isRecovery, true);
    assert.equal(flat(workout).at(-1).durationSeconds, cool * 60);
  }
});

test("Garmin en loopband delen tijdstappen, 0% en juiste MP-targets", () => {
  for (const workout of plan.allWorkouts.filter((workout) => workout.activityType === "run")) {
    assert.equal(model.treadmillGroups(workout), workout.groups);
    for (const step of flat(workout)) {
      assert.equal(step.inclinePercent, 0);
      if (workout.weekNumber === 41) assert.ok(step.speedRangeKmh[0] > 0);
      const fields = model.garminStepFields(step);
      const [h,m,s] = fields.durationValue.split(":").map(Number);
      assert.equal(h*3600+m*60+s, step.durationSeconds);
      assert.equal(fields.durationType, "Tijd");
      assert.equal(fields.targetType, step.type === "marathonpace" ? "Tempo" : "Geen doel");
      if (step.type === "marathonpace") {
        assert.equal(fields.targetValue, "5:24–5:30/km");
        assert.equal(step.speedKmh, 11);
        assert.equal(step.speedMode, "prescribed");
      } else if (workout.weekNumber >= 42) {
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
  assert.deepEqual([42,43,44,45].map((week) => find(`V8-W${week}-T5`).plannedSessionMinutes), [95,120,145,165]);
  assert.equal(find("V8-W45-T5").latestDate,"2026-11-08");
  assert.equal(find("V8-W46-T4").plannedSessionMinutes,80);
  assert.equal(find("V8-W47-T2").preferredDate,"2026-11-18");
  assert.equal(find("V8-W47-T4-RACE").date,"2026-11-22");
  assert.equal(find("V8-W47-T4-RACE").totalPlannedSeconds,null);
  assert.equal(find("V8-W47-T4-RACE").treadmillAvailable,false);
  assert.match(find("V8-W47-T4-RACE").garmin.programSummary,/officiële finish leidend/);
});

test("oude kleurcriteria en logs beïnvloeden V8 niet meer", () => {
  assert.equal(model.deriveTaperBasis, undefined);
  assert.deepEqual(Array.from(model.resolvePlan({userSettings:{weekDecisions:{42:{status:"red"}}}}), w=>w.plannedSessionMinutes),[185,240,295,320,330,195,65]);
});

test("V8 is exact reproduceerbaar uit de bron", () => {
  const folder = fs.mkdtempSync(path.join(os.tmpdir(),"marathon-v6-test-"));
  try {
    const generated = path.join(folder,"training-data.js");
    execFileSync(process.execPath,[new URL("../scripts/generate-marathon-plan.mjs",import.meta.url).pathname,sourceUrl.pathname,generated]);
    assert.equal(fs.readFileSync(generated,"utf8"),fs.readFileSync(dataUrl,"utf8"));
  } finally { fs.rmSync(folder,{recursive:true}); }
});
