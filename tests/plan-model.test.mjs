import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";

const sourceUrl = new URL("../marathonschema_Roy_FINAL_V6_SUB4_2026-10-05.md", import.meta.url);
const dataUrl = new URL("../training-data.js", import.meta.url);
const source = fs.readFileSync(sourceUrl, "utf8");
const context = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(dataUrl, "utf8"), context);
const plan = context.window.MARATHON_PLAN;
const model = context.window.MARATHON_MODEL;
const flat = (workout) => Array.from(model.flattenWorkoutSegments(workout));
const find = (id) => plan.allWorkouts.find((workout) => workout.workoutId === id);

test("V6 is volledig, met sub-4 als actief doel en 34 unieke sessies", () => {
  assert.deepEqual(Array.from(plan.weeks, (week) => week.weekNumber), [41,42,43,44,45,46,47]);
  assert.equal(plan.allWorkouts.length, 34);
  assert.equal(new Set(plan.allWorkouts.map((workout) => workout.workoutId)).size, 34);
  assert.equal(plan.config.targetTime, "Sub 4:00");
  assert.equal(plan.config.targetPace, "5:41/km");
  assert.equal(plan.config.practicalRacePace, "5:40/km");
  assert.equal(plan.config.sourceSha256, crypto.createHash("sha256").update(source).digest("hex"));
  assert.ok(plan.allWorkouts.every((workout) => !workout.strength && !workout.isSuspended));
});

test("onafhankelijk herberekende totalen, wandelen, fietsen en MP zijn exact", () => {
  const expected = [[185,164,21,60,0], [200,200,0,60,15], [245,245,0,50,24], [275,275,0,45,30], [275,275,0,40,30], [170,170,0,30,12], [70,70,0,0,6]];
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

test("alle 33 tijdprotocollen komen overeen met iedere tabelrij uit de Markdownbron", () => {
  const clean = (text) => text.replace(/\*\*|`/g, "").trim();
  const chunks = [...source.matchAll(/^### Training \d+ — .+\n([\s\S]*?)(?=^### |^## |$(?![\s\S]))/gm)];
  assert.equal(chunks.length, 34);
  for (const chunk of chunks) {
    const body = chunk[1];
    const id = body.match(/\*\*ID:\*\* `([^`]+)`/)[1];
    const workout = find(id);
    assert.ok(workout, id);
    if (workout.activityType === "race") continue;
    const rows = body.split("\n").filter((line) => /^\|/.test(line)).map((line) => line.split("|").slice(1,-1).map(clean)).filter((row) => row[0] !== "Stap in Garmin" && !/^-+$/.test(row[0]));
    const actual = workout.garmin.groups.flatMap((group) => group.kind === "repeat" ? [{ repeat: group.repetitions }, ...group.segments] : group.segments);
    assert.equal(rows.length, actual.length, id);
    for (const [index, row] of rows.entries()) {
      if (row[0] === "Herhalen") assert.equal(actual[index].repeat, Number(row[1].match(/\d+/)[0]));
      else {
        assert.equal(actual[index].name, row[0].replace(/^↳\s*/, ""), id);
        assert.equal(actual[index].durationSeconds, Number(row[1].match(/\d+/)[0])*60, id);
        assert.equal(actual[index].cue, row[3], id);
        assert.equal(actual[index].targetType, row[2].startsWith("Tempo") ? "Tempo" : "Vrij", id);
      }
    }
    for (const [label,key] of [["Programmeer in Garmin als","garmin"],["Doel / uitvoering","goal"],["Voeding oefenen","nutrition"],["Loopband","treadmillInstruction"],["Duurcontrole","durationCheck"]]) {
      const match = body.match(new RegExp(`^\\*\\*${label}:\\*\\* (.+)$`, "m"));
      if (match) assert.equal(key === "garmin" ? workout.garmin.programSummary : workout[key], clean(match[1]).replace(/\.$/, ""), id);
    }
  }
});

test("alle repeats behouden het laatste herstel; W41 heeft geen strides", () => {
  assert.ok(plan.allWorkouts.every((workout) => !flat(workout).some((step) => step.type === "stride")));
  const runwalk = find("V6-W41-T4");
  assert.equal(runwalk.groups[1].repetitions, 11);
  assert.equal(flat(runwalk).length, 24);
  assert.equal(flat(runwalk).at(-2).type, "wandelen");
  for (const [week,reps,work,recovery,cool] of [[42,3,5,2,14],[43,3,8,3,12],[44,3,10,3,11],[45,2,15,3,9],[46,2,6,3,15],[47,2,3,2,10]]) {
    const workout = find(`V6-W${week}-T2`);
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
      assert.ok(Array.isArray(step.speedRangeKmh));
      assert.ok(step.speedRangeKmh[0] > 0);
      const fields = model.garminStepFields(step);
      const [h,m,s] = fields.durationValue.split(":").map(Number);
      assert.equal(h*3600+m*60+s, step.durationSeconds);
      assert.equal(fields.durationType, "Tijd");
      assert.equal(fields.targetType, step.type === "marathonpace" ? "Tempo" : "Geen doel");
      if (step.type === "marathonpace") {
        assert.equal(fields.targetValue, "5:35–5:50/km");
        assert.deepEqual(Array.from(step.speedRangeKmh), [10.3,10.7]);
      }
    }
  }
});

test("vrije nummering, datumgrenzen, lange duur en taper zijn brongetrouw", () => {
  for (const week of plan.weeks) {
    assert.deepEqual(Array.from(week.workouts, (w) => w.trainingNumber), week.weekNumber === 47 ? [1,2,3,4] : [1,2,3,4,5]);
    assert.equal(week.planningMode, "flexible");
    assert.ok(week.workouts.filter((w) => w.activityType !== "race").every((w) => w.date === null));
    if (week.weekNumber < 47) assert.equal(week.workouts[4].activityType, "bike");
  }
  assert.deepEqual([42,43,44,45].map((week) => find(`V6-W${week}-T4`).plannedSessionMinutes), [85,110,135,150]);
  assert.equal(find("V6-W45-T4").latestDate,"2026-11-08");
  assert.equal(find("V6-W47-T2").latestDate,"2026-11-19");
  assert.equal(find("V6-W47-T4-RACE").date,"2026-11-22");
  assert.equal(find("V6-W47-T4-RACE").totalPlannedSeconds,null);
  assert.equal(find("V6-W47-T4-RACE").treadmillAvailable,false);
  assert.match(find("V6-W47-T4-RACE").garmin.programSummary,/STOP op finish/);
});

test("oude kleurcriteria en logs beïnvloeden V6 niet meer", () => {
  assert.equal(model.deriveTaperBasis, undefined);
  assert.deepEqual(Array.from(model.resolvePlan({userSettings:{weekDecisions:{42:{status:"red"}}}}), w=>w.plannedSessionMinutes),[185,200,245,275,275,170,70]);
});

test("V6 is exact reproduceerbaar uit de bron", () => {
  const folder = fs.mkdtempSync(path.join(os.tmpdir(),"marathon-v6-test-"));
  try {
    const generated = path.join(folder,"training-data.js");
    execFileSync(process.execPath,[new URL("../scripts/generate-marathon-plan.mjs",import.meta.url).pathname,sourceUrl.pathname,generated]);
    assert.equal(fs.readFileSync(generated,"utf8"),fs.readFileSync(dataUrl,"utf8"));
  } finally { fs.rmSync(folder,{recursive:true}); }
});
