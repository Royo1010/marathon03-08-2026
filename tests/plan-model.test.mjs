import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";

const sourceUrl = new URL("../marathonschema_Roy_FINAL_V5_GARMIN_OUTDOOR_2026-10-03.md", import.meta.url);
const dataUrl = new URL("../training-data.js", import.meta.url);
const context = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(dataUrl, "utf8"), context, { filename: "training-data.js" });

const plan = context.window.MARATHON_PLAN;
const model = context.window.MARATHON_MODEL;
const variants = plan.weekVariants;
const flatten = (workout) => Array.from(model.flattenWorkoutSegments(workout));
const load = (workouts) => model.sumLoad(Array.from(workouts).filter((workout) => workout.activityType !== "race"));
const maxWeek = (weekNumber) => [...Array.from(variants[weekNumber].max), ...Array.from(variants[weekNumber].shared)];
const runWorkout = (weekNumber, variant, role) => Array.from(variants[weekNumber][variant]).find((workout) => workout.role === role);

function decision(status = "green", extra = {}) {
  return {
    status,
    recoveryConfirmed: true,
    wellTolerated: true,
    criteria: {
      noPain: true,
      normalRecovery: true,
      easyImproved: true,
      continuousEvidence: true,
      notStoppedEarly: true,
      ...extra,
    },
  };
}

function addWeekLogs(data, weekNumber, durations, runMinutes, bikeMinutes = 0) {
  const roles = ["short", "continuous", "short", "runwalk"];
  durations.forEach((minutes, index) => {
    data.workoutLogs[`actual-w${weekNumber}-${index}`] = {
      workoutId: `actual-w${weekNumber}-${index}`,
      weekNumber,
      workoutDate: `2026-10-${String(index + 10).padStart(2, "0")}`,
      activityType: "run",
      role: roles[index],
      actualTotalMinutes: minutes,
      actualRunMinutes: runMinutes[index],
    };
  });
  if (bikeMinutes) data.workoutLogs[`actual-w${weekNumber}-bike`] = { workoutId: `actual-w${weekNumber}-bike`, weekNumber, activityType: "bike", actualBikeMinutes: bikeMinutes };
}

function appData() {
  return { workoutLogs: {}, userSettings: { weekDecisions: {}, optionalWorkoutChoices: {} } };
}

test("FINAL V5 is de enige actieve planning en laat het racetarget leeg", () => {
  assert.deepEqual(Array.from(plan.weeks, (week) => week.weekNumber), [41, 42, 43, 44, 45, 46, 47]);
  assert.equal(plan.allWorkouts.length, 47);
  assert.equal(plan.config.planVersion, 13);
  assert.equal(plan.config.schemaVersion, "marathon-final-v5-garmin-outdoor-2026.10.03-1");
  assert.equal(plan.config.sourceFile, "marathonschema_Roy_FINAL_V5_GARMIN_OUTDOOR_2026-10-03.md");
  assert.equal(plan.config.targetTime, null);
  assert.equal(plan.config.targetPace, null);
  assert.equal(plan.config.practicalMarathonSpeedKmh, null);
  assert.equal(plan.config.historicalAmbition, "3:30");
  assert.ok(plan.allWorkouts.every((workout) => !workout.strength));
});

test("kalendermaxima, ORANGE W42 en raceweektotalen zijn brongetrouw", () => {
  const expected = {
    41: { session: 185, run: 164, walk: 21, bike: 60 },
    42: { session: 200, run: 178, walk: 22, bike: 60 },
    43: { session: 220, run: 196, walk: 24, bike: 60 },
    44: { session: 240, run: 213, walk: 27, bike: 60 },
    45: { session: 205, run: 181, walk: 24, bike: 45 },
    46: { session: 140, run: 123, walk: 17, bike: 30 },
    47: { session: 60, run: 60, walk: 0, bike: 0 },
  };
  for (const [weekNumber, volume] of Object.entries(expected)) assert.deepEqual({ ...load(maxWeek(Number(weekNumber))) }, volume);
  assert.deepEqual({ ...load([...Array.from(variants[42].orange), ...Array.from(variants[42].shared)]) }, { session: 165, run: 145, walk: 20, bike: 60 });
  const race = Array.from(variants[47].shared).find((workout) => workout.activityType === "race");
  assert.equal(race.date, "2026-11-22");
  assert.equal(race.estimatedDistanceKm, 42.195);
  assert.equal(race.totalPlannedSeconds, null);
});

test("Garmin blijft Open / Vrij en iedere loopbandstap gebruikt expliciet 0%", () => {
  const standard = plan.allWorkouts.filter((workout) => ["run", "bike"].includes(workout.activityType));
  for (const workout of standard) {
    const garminSegments = Array.from(workout.garmin?.groups || []).flatMap((group) => Array.from(group.segments || []));
    assert.ok(garminSegments.length > 0, workout.workoutId);
    assert.ok(garminSegments.every((segment) => segment.targetType === "Open / Vrij"), workout.workoutId);
    if (workout.activityType === "run") {
      assert.ok(flatten(workout).every((segment) => segment.inclinePercent === 0), workout.workoutId);
      assert.ok(workout.treadmillAvailable, workout.workoutId);
    } else {
      assert.equal(workout.treadmillAvailable, false, workout.workoutId);
    }
  }
  const race = plan.allWorkouts.find((workout) => workout.activityType === "race");
  assert.equal(race.garmin.isRacePlan, true);
  assert.match(race.garmin.programSummary, /officiële finish/i);
});

test("strides en run-walkrepeats tellen herstel na de laatste herhaling mee", () => {
  const strides = runWorkout(41, "max", "strides");
  const strideRepeat = strides.groups.find((group) => group.kind === "repeat");
  assert.equal(strideRepeat.repetitions, 4);
  assert.equal(strideRepeat.segments.length, 2);
  assert.equal(strides.totalPlannedSeconds, 30 * 60);
  const expected = { 41: 11, 42: 12, 43: 14, 44: 17 };
  for (const [weekNumber, repetitions] of Object.entries(expected)) {
    const workout = runWorkout(Number(weekNumber), "max", "runwalk");
    const repeat = workout.groups.find((group) => group.kind === "repeat");
    assert.equal(repeat.repetitions, repetitions);
    assert.equal(repeat.segments.length, 2);
    assert.equal(repeat.segments[1].isRecovery, true);
    assert.equal(flatten(workout).reduce((sum, segment) => sum + segment.durationSeconds, 0), workout.totalPlannedSeconds);
  }
});

test("alle Garmin-loopstappen hebben Nederlandse keuzes en tijden uit de echte blokduur", () => {
  for (const workout of plan.allWorkouts.filter((item) => item.activityType === "run")) {
    let total = 0;
    for (const group of workout.garmin.groups) {
      for (const segment of group.segments) {
        const fields = model.garminStepFields(segment);
        assert.equal(fields.durationType, "Tijd", workout.workoutId);
        assert.equal(fields.targetType, "Geen doel", workout.workoutId);
        assert.equal(fields.targetValue, null, workout.workoutId);
        assert.match(fields.durationValue, /^\d{2}:\d{2}:\d{2}$/);
        const [hours, minutes, seconds] = fields.durationValue.split(":").map(Number);
        assert.equal(hours * 3600 + minutes * 60 + seconds, segment.durationSeconds);
        assert.ok(["Warm-up", "Hardlopen", "Wandelen", "Herstel", "Cooldown"].includes(fields.stepType));
        if (segment.type === "wandelen") assert.match(fields.note, /Wandelen, niet joggen/);
        total += segment.durationSeconds * (group.kind === "repeat" ? group.repetitions : 1);
      }
    }
    assert.equal(total, workout.totalPlannedSeconds, workout.workoutId);
  }
});

test("alle sessies inclusief fietsen krijgen een chronologisch nummer zonder nieuwe IDs", () => {
  for (const week of model.resolvePlan(appData())) {
    assert.deepEqual(Array.from(week.workouts, (workout) => workout.trainingNumber), Array.from({ length: week.workouts.length }, (_, index) => index + 1));
    assert.ok(week.workouts.every((workout) => workout.trainingLabel === `Training ${workout.trainingNumber}`));
    assert.ok(week.workouts.every((workout) => plan.allWorkouts.some((sourceWorkout) => sourceWorkout.workoutId === workout.workoutId)));
    assert.deepEqual(Array.from(week.workouts, (workout) => workout.date), Array.from(week.workouts, (workout) => workout.date).sort());
  }
  const w41 = model.resolvePlan(appData())[0];
  assert.equal(w41.workouts[2].activityType, "bike");
  const variants = plan.weekVariants[42];
  for (const workout of variants.orange) {
    const alternative = variants.max.find((item) => item.date === workout.date);
    assert.equal(workout.trainingNumber, alternative.trainingNumber);
  }
});

test("loopband vervangt de optionele stridegroep door exact zes minuten easy", () => {
  const workout = runWorkout(41, "max", "strides");
  const groups = model.treadmillGroups(workout);
  assert.equal(groups.filter((group) => group.kind === "repeat").length, 0);
  const replacement = groups.find((group) => group.label === "Easy in plaats van strides");
  assert.equal(replacement.segments[0].durationSeconds, 360);
  assert.equal(replacement.segments[0].type, "easy");
  assert.deepEqual(Array.from(replacement.segments[0].speedRangeKmh), [7, 9]);
  assert.equal(model.flattenWorkoutSegments({ ...workout, groups }).reduce((sum, segment) => sum + segment.durationSeconds, 0), 1800);
  assert.equal(workout.garmin.groups.find((group) => group.kind === "repeat").repetitions, 4);
});

test("verkorte blokken tonen dezelfde duur in Garmin, loopband en samenvatting", () => {
  const sourceWorkout = runWorkout(41, "max", "continuous");
  const shortened = model.rebuildTimedWorkout(sourceWorkout, 45);
  assert.equal(shortened.totalPlannedSeconds, 2700);
  assert.equal(shortened.groups[1].segments[0].display, "35 min");
  assert.equal(model.garminStepFields(shortened.garmin.groups[1].segments[0]).durationValue, "00:35:00");
  assert.match(shortened.garmin.programSummary, /35 min/);
  assert.doesNotMatch(shortened.garmin.programSummary, /50 min/);
  assert.equal(model.flattenWorkoutSegments(shortened).reduce((sum, segment) => sum + segment.durationSeconds, 0), 2700);
});

test("ontbrekende gegevens geven ORANGE en tonen geen automatische kalenderprogressie", () => {
  const resolved = Array.from(model.resolvePlan(appData()));
  assert.deepEqual(Array.from(resolved.slice(0, 4), (week) => week.status), ["orange", "orange", "orange", "orange"]);
  assert.deepEqual(Array.from(resolved.slice(1, 4), (week) => [week.plannedSessionMinutes, week.plannedRunMinutes]), [[165, 145], [165, 145], [165, 145]]);
  for (const week of resolved.slice(4)) {
    assert.equal(week.variant, "no-basis");
    assert.ok(week.workouts.filter((workout) => workout.activityType === "run").every((workout) => workout.isSuspended));
  }
});

test("W42 GREEN vereist 90% werkelijke W41-belasting en alle herstelcriteria", () => {
  const data = appData();
  addWeekLogs(data, 41, [30, 60, 30, 65], [30, 60, 30, 44], 60);
  data.userSettings.weekDecisions[41] = decision();
  data.userSettings.weekDecisions[42] = decision("green", { w41NinetyPercent: true });
  const w42 = Array.from(model.resolvePlan(data)).find((week) => week.weekNumber === 42);
  assert.equal(w42.status, "green");
  assert.equal(w42.plannedSessionMinutes, 200);
  assert.equal(w42.plannedRunMinutes, 178);

  data.workoutLogs["actual-w41-3"].actualTotalMinutes = 40;
  data.workoutLogs["actual-w41-3"].actualRunMinutes = 28;
  const fallback = Array.from(model.resolvePlan(data)).find((week) => week.weekNumber === 42);
  assert.equal(fallback.status, "orange");
  assert.equal(fallback.plannedSessionMinutes, 165);
});

test("vertraagde W42-opbouw kan W43 niet stilzwijgend naar 220 minuten tillen", () => {
  const data = appData();
  addWeekLogs(data, 42, [30, 45, 30, 60], [30, 45, 30, 40], 60);
  data.userSettings.weekDecisions[42] = decision();
  data.userSettings.weekDecisions[43] = decision();
  const week = Array.from(model.resolvePlan(data)).find((item) => item.weekNumber === 43);
  assert.equal(week.status, "green");
  assert.ok(week.plannedSessionMinutes <= 181, week.plannedSessionMinutes);
  assert.ok(week.plannedRunMinutes <= 166, week.plannedRunMinutes);
  assert.ok(week.workouts.filter((workout) => workout.activityType === "run").every((workout, index) => workout.plannedSessionMinutes <= [35, 50, 35, 75][index]));
});

test("taper schaalt op B=240 en B=165 en overschrijdt geen vergelijkbare sessie", () => {
  const full = appData();
  for (const [weekNumber, durations, runMinutes] of [[41,[30,60,30,65],[30,60,30,44]],[42,[35,60,35,70],[35,60,35,48]],[43,[40,65,35,80],[40,65,35,56]],[44,[40,70,35,95],[40,70,35,68]]]) {
    addWeekLogs(full, weekNumber, durations, runMinutes, 60);
    full.userSettings.weekDecisions[weekNumber] = decision();
  }
  assert.deepEqual({ ...model.deriveTaperBasis(full) }, { basisMinutes: 240, scale: 1 });
  let w45 = Array.from(model.resolvePlan(full)).find((week) => week.weekNumber === 45);
  assert.equal(w45.plannedSessionMinutes, 205);
  assert.deepEqual(Array.from(w45.workouts.filter((workout) => workout.activityType === "run"), (workout) => workout.plannedSessionMinutes), [35, 35, 55, 80]);

  const lower = appData();
  addWeekLogs(lower, 42, [30,45,30,60], [30,45,30,40], 45);
  lower.userSettings.weekDecisions[42] = decision();
  assert.deepEqual({ ...model.deriveTaperBasis(lower) }, { basisMinutes: 165, scale: 0.6875 });
  w45 = Array.from(model.resolvePlan(lower)).find((week) => week.weekNumber === 45);
  const durations = Array.from(w45.workouts.filter((workout) => workout.activityType === "run"), (workout) => workout.plannedSessionMinutes);
  assert.deepEqual(durations, [24, 24, 37, 55]);
  assert.ok(w45.plannedBikeMinutes <= 30);
  assert.ok(durations[3] <= 60);
});

test("de optionele ritmeproef vervangt exact één easy en blijft vergrendeld zonder alle criteria", () => {
  const data = appData();
  for (const [weekNumber, durations, runMinutes] of [[41,[30,60,30,65],[30,60,30,44]],[42,[35,60,35,70],[35,60,35,48]],[43,[40,65,35,80],[40,65,35,56]],[44,[40,70,35,95],[40,70,35,68]]]) {
    addWeekLogs(data, weekNumber, durations, runMinutes, 60);
    data.userSettings.weekDecisions[weekNumber] = decision();
  }
  data.userSettings.optionalWorkoutChoices[45] = "rhythm";
  data.userSettings.weekDecisions[45] = decision("green", { twoContinuousOutdoor: true, longRunWalkOutdoor: true, nutritionTolerated: true, noRecentSetback: true });
  const week = Array.from(model.resolvePlan(data)).find((item) => item.weekNumber === 45);
  assert.equal(week.workouts.filter((workout) => workout.activityType === "run").length, 4);
  assert.equal(week.plannedSessionMinutes, 205);
  assert.equal(week.workouts.filter((workout) => workout.role === "rhythm").length, 1);

  data.userSettings.weekDecisions[45].criteria.nutritionTolerated = false;
  const locked = Array.from(model.resolvePlan(data)).find((item) => item.weekNumber === 45);
  assert.equal(locked.workouts.filter((workout) => workout.role === "rhythm").length, 0);
});

test("de definitieve V5-bron reproduceert training-data.js exact", () => {
  const folder = fs.mkdtempSync(path.join(os.tmpdir(), "marathon-v5-test-"));
  try {
    const generated = path.join(folder, "training-data.js");
    execFileSync(process.execPath, [new URL("../scripts/generate-marathon-plan.mjs", import.meta.url).pathname, sourceUrl.pathname, generated]);
    assert.equal(fs.readFileSync(generated, "utf8"), fs.readFileSync(dataUrl, "utf8"));
  } finally {
    fs.rmSync(folder, { recursive: true });
  }
});
