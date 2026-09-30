import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

const context = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(new URL("../training-data.js", import.meta.url), "utf8"), context);
const plan = context.window.MARATHON_PLAN;
const model = context.window.MARATHON_MODEL;
const weeks = plan.weeks;
const all = weeks.flatMap((week) => week.workouts);
const get = (week, training) => all.find((workout) => workout.weekNumber === week && workout.trainingNumber === training);
const flat = (workout) => Array.from(model.flattenWorkoutSegments(workout));
const sourceUrl = new URL("../marathonschema_Roy_FINAL_V4_GARMIN_OUTDOOR_2026-09-30.md", import.meta.url);
const previousV11 = JSON.parse(fs.readFileSync(new URL("../scripts/previous-workouts-v11.json", import.meta.url), "utf8"));

function garminSeconds(workout) {
  return (workout.garmin?.groups || []).reduce((sum, group) => {
    const seconds = (group.segments || []).reduce((subtotal, segment) => subtotal + Number(segment.durationSeconds || 0), 0);
    if (group.kind !== "repeat") return sum + seconds;
    const omitted = group.omitRecoveryAfterLast ? Number(group.segments.at(-1)?.durationSeconds || 0) : 0;
    return sum + seconds * group.repetitions - omitted;
  }, 0);
}

test("FINAL V4 bevat exact W39-W47 en behoudt alle stabiele workout-id's", () => {
  assert.deepEqual(Array.from(weeks, (week) => week.weekNumber), [39, 40, 41, 42, 43, 44, 45, 46, 47]);
  assert.equal(all.length, 40);
  assert.equal(new Set(all.map((workout) => workout.workoutId)).size, 40);
  assert.deepEqual(Array.from(all, (workout) => workout.workoutId), Object.keys(previousV11));
  assert.equal(plan.config.planVersion, 12);
  assert.equal(plan.config.schemaVersion, "marathon-3u30-final-v4-garmin-outdoor-2026.09.30-1");
  assert.equal(plan.config.sourceFile, "marathonschema_Roy_FINAL_V4_GARMIN_OUTDOOR_2026-09-30.md");
  assert.equal(plan.config.planSubtitle, "FINAL V4 · Garmin / Outdoor Edition");
  assert.equal(plan.config.programmedMpMinutes, 328);
});

test("week-, programma- en MP-totalen blijven gelijk aan FINAL V4", () => {
  const expected = [53.23, 45.94, 65.42, 72.22, 77.73, 68.28, 51.75, 35.07, 14.01];
  assert.deepEqual(Array.from(weeks, (week) => week.plannedDistanceBeforeRaceKm), expected);
  assert.deepEqual(Array.from(weeks, (week) => model.calculateWeekDistanceKm(week, false)), expected);
  assert.equal(expected.reduce((sum, value) => sum + value, 0).toFixed(2), "483.65");
  assert.equal(model.calculateWeekDistanceKm(weeks.at(-1), true).toFixed(3), "56.205");
  assert.equal(plan.config.plannedKmIncludingRace, 525.845);
  const mpMinutes = all.flatMap(flat).filter((segment) => segment.type === "marathonpace").reduce((sum, segment) => sum + segment.durationSeconds, 0) / 60;
  assert.equal(mpMinutes, 328);
});

test("W39 blijft historisch en W40-W47 krijgt Garmin standaard zonder de workout te verdubbelen", () => {
  assert.ok(all.filter((workout) => workout.weekNumber === 39).every((workout) => !workout.garmin));
  const activeV4 = all.filter((workout) => workout.weekNumber >= 40);
  assert.equal(activeV4.length, 36);
  assert.ok(activeV4.every((workout) => workout.garmin && workout.defaultExecutionMode === "garmin"));
  assert.equal(activeV4.filter((workout) => workout.treadmillAvailable).length, 35);
  assert.equal(get(47, 4).treadmillAvailable, false);
  assert.equal(get(47, 4).garmin.isRacePlan, true);
  assert.ok(activeV4.every((workout) => workout.labels.includes("GARMIN")));
  assert.ok(activeV4.every((workout) => !workout.outdoorSimpleMode));
});

test("alle Garmin-workouts hebben programmeerbare stappen en exact dezelfde duur", () => {
  for (const workout of all.filter((item) => item.weekNumber >= 40 && item.category !== "wedstrijd")) {
    assert.ok(workout.garmin.groups.length > 0, workout.workoutId);
    assert.equal(garminSeconds(workout), workout.totalPlannedSeconds, workout.workoutId);
    assert.equal(workout.garmin.totalSeconds, workout.totalPlannedSeconds, workout.workoutId);
    assert.ok(workout.garmin.programSummary.length > 10, workout.workoutId);
    for (const group of workout.garmin.groups) {
      for (const segment of group.segments) {
        assert.ok(segment.durationSeconds > 0, segment.segmentId);
        assert.ok(["Heart Rate", "Pace", "Open / Free"].includes(segment.targetType), segment.segmentId);
        assert.ok(segment.targetValue, segment.segmentId);
        assert.ok(segment.cue, segment.segmentId);
      }
    }
  }
});

test("Garmin-targets gebruiken zones en min/km zonder verzonnen bpm of buiten-km/u", () => {
  const garminJson = JSON.stringify(all.filter((workout) => workout.garmin).map((workout) => workout.garmin));
  assert.doesNotMatch(garminJson, /\bbpm\b/i);
  assert.doesNotMatch(garminJson, /km\/u/i);
  const segments = all.flatMap((workout) => workout.garmin?.groups || []).flatMap((group) => group.segments || []);
  assert.ok(segments.some((segment) => segment.targetType === "Heart Rate" && segment.targetValue === "Zone 2"));
  assert.ok(segments.some((segment) => segment.targetType === "Heart Rate" && /Zone 1–lage Zone 2/.test(segment.targetValue)));
  for (const segment of segments.filter((item) => item.targetType === "Pace")) assert.match(segment.targetValue, /^\d:\d{2}–\d:\d{2}\/km$/);
  for (const segment of segments.filter((item) => item.name === "Stride")) {
    assert.equal(segment.targetType, "Open / Free");
    assert.equal(segment.targetValue, "Geen pace-alert");
  }
});

test("Garmin-repeatgroepen voorkomen een extra laatste herstel waar V4 dat voorschrijft", () => {
  const expected = [[40,3,4,false],[41,3,3,true],[42,1,4,true],[44,1,3,true],[46,3,4,false],[47,3,3,false]];
  for (const [week, training, repetitions, omitRecoveryAfterLast] of expected) {
    const repeat = get(week, training).garmin.groups.find((group) => group.kind === "repeat");
    assert.equal(repeat.repetitions, repetitions);
    assert.equal(repeat.omitRecoveryAfterLast, omitRecoveryAfterLast);
    assert.equal(repeat.segments.length, 2);
    assert.equal(repeat.segments[1].isRecovery, true);
  }
  assert.equal(garminSeconds(get(41, 3)), 90 * 60);
  assert.equal(garminSeconds(get(42, 1)), 70 * 60);
  assert.equal(garminSeconds(get(44, 1)), 55 * 60);
});

test("alle V4-loopbandalternatieven zijn numeriek en brongetrouw", () => {
  const variants = all.filter((workout) => workout.weekNumber >= 40 && workout.category !== "wedstrijd");
  assert.equal(variants.length, 35);
  for (const workout of variants) assert.ok(flat(workout).every((segment) => segment.durationSeconds > 0 && segment.speedKmh > 0 && segment.inclinePercent === 0), workout.workoutId);
  assert.deepEqual(Array.from(flat(get(43, 1)), (segment) => [segment.durationSeconds / 60, segment.speedKmh, segment.inclinePercent]), [[10,9.5,0],[5,10.5,0],[50,12.1,0],[10,9,0]]);
  assert.deepEqual(Array.from(flat(get(45, 4)), (segment) => [segment.durationSeconds / 60, segment.speedKmh, segment.inclinePercent]), [[10,9.5,0],[80,10.4,0],[25,12.1,0],[5,9,0]]);
  const controlledFast = flat(get(41, 3)).filter((segment) => segment.type === "controlled-fast");
  assert.equal(controlledFast.length, 3);
  assert.ok(controlledFast.every((segment) => JSON.stringify(segment.speedRangeKmh) === "[12.6,12.7]"));
});

test("onderliggende trainingsbelasting en metadata blijven gelijk aan de vorige build", () => {
  for (const workout of all) {
    const previous = previousV11[workout.workoutId];
    assert.equal(workout.title, previous.title, workout.workoutId);
    assert.equal(workout.estimatedDistanceKm, previous.distanceKm, workout.workoutId);
    assert.equal(workout.totalPlannedSeconds, previous.durationSeconds, workout.workoutId);
  }
  assert.equal(get(40, 3).totalPlannedSeconds, 55 * 60);
  assert.equal(get(41, 3).totalPlannedSeconds, 90 * 60);
  assert.equal(weeks.find((week) => week.weekNumber === 41).workouts.length, 5);
  assert.equal(get(42, 5).estimatedDistanceKm, 29.32);
  assert.equal(get(43, 5).estimatedDistanceKm, 31.58);
  assert.equal(get(44, 5).estimatedDistanceKm, 30.94);
});

test("kracht, voeding, schoenen en vaste taperdagen blijven intact", () => {
  const strength = Array.from(all.filter((workout) => workout.strength), (workout) => [workout.weekNumber, workout.trainingNumber, workout.strength.type]);
  assert.deepEqual(strength, [[39,1,"A-light"],[40,2,"A-light"],[41,1,"A"],[41,3,"B"],[42,1,"A"],[42,3,"B"],[43,1,"A-light"],[43,3,"B-light"],[44,1,"A-light"],[45,1,"A-light"]]);
  assert.ok(all.filter((workout) => workout.weekNumber >= 46).every((workout) => !workout.strength));
  assert.deepEqual(Array.from(all.filter((workout) => workout.fullFuelRehearsal), (workout) => [workout.weekNumber, workout.trainingNumber]), [[42,5],[43,5],[44,5],[45,4]]);
  for (const workout of all.filter((item) => item.fullFuelRehearsal)) assert.match(workout.nutrition, /80 g koolhydraten/);
  for (const week of weeks.filter((item) => item.weekNumber >= 45)) {
    assert.equal(week.planningMode, "calendar");
    assert.equal(week.days.length, 7);
  }
});

test("het marathon-raceplan gebruikt lap pace, ondersteunende HR en 80 gram per uur", () => {
  const marathon = get(47, 4);
  assert.match(marathon.garmin.programSummary, /Lap pace \/ gemiddelde pace/);
  assert.match(marathon.garmin.programSummary, /geen tijd bankieren/);
  assert.match(marathon.garmin.raceGuidance.join(" "), /HR is ondersteunende informatie/);
  assert.match(marathon.garmin.raceGuidance.join(" "), /80 g koolhydraten\/u/);
  assert.equal(marathon.date, "2026-11-22");
  assert.equal(marathon.estimatedDistanceKm, 42.195);
});

test("de FINAL V4-bron reproduceert training-data.js exact", () => {
  const folder = fs.mkdtempSync(path.join(os.tmpdir(), "marathon-v4-test-"));
  try {
    const generated = path.join(folder, "training-data.js");
    execFileSync(process.execPath, [new URL("../scripts/generate-marathon-plan.mjs", import.meta.url).pathname, sourceUrl.pathname, generated]);
    assert.equal(fs.readFileSync(generated, "utf8"), fs.readFileSync(new URL("../training-data.js", import.meta.url), "utf8"));
  } finally {
    fs.rmSync(folder, { recursive: true });
  }
});
