import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(new URL("../training-data.js", import.meta.url), "utf8"), context);
vm.runInContext(fs.readFileSync(new URL("../training-plan-v5.js", import.meta.url), "utf8"), context);

const plan = context.window.MARATHON_PLAN;
const model = context.window.MARATHON_MODEL;
const allWorkouts = plan.weeks.flatMap((week) => week.workouts);
const week = (number) => plan.weeks.find((item) => item.weekNumber === number);
const workout = (weekNumber, trainingNumber) => week(weekNumber).workouts.find((item) => item.trainingNumber === trainingNumber);
const fitness = (weekNumber) => week(weekNumber).workouts.find((item) => item.isFitnessCheck);
const flattened = (item) => Array.from(model.flattenWorkoutSegments(item));

assert.equal(plan.config.startDate, "2026-08-31");
assert.equal(plan.config.marathonDate, "2026-11-22");
assert.equal(plan.config.targetTime, "3:30:00");
assert.equal(plan.config.targetPace, "4:58,6/km");
assert.equal(plan.config.targetSpeedKmh, 12.056);
assert.equal(plan.config.practicalMarathonSpeedKmh, 12);
assert.equal(plan.config.trainingFrequency, 4);
assert.equal(plan.config.schemaVersion, "marathon-3u30-definitief-2026.09.01-1");
assert.equal(plan.config.planVersion, 5);

assert.deepEqual(Array.from(plan.weeks, (item) => item.weekNumber), Array.from({ length: 12 }, (_, index) => 36 + index));
assert.equal(allWorkouts.length, 50, "48 kernsessies plus twee fitnesschecks");
assert.ok(plan.weeks.filter((item) => ![38, 42].includes(item.weekNumber)).every((item) => item.workouts.length === 4));
assert.equal(week(38).workouts.length, 5);
assert.equal(week(42).workouts.length, 5);
assert.equal(new Set(allWorkouts.map((item) => item.workoutId)).size, 50);
assert.ok(allWorkouts.every((item) => item.goal && item.targetRpe && item.mentalGoal));
assert.ok(allWorkouts.every((item) => item.rationale && item.recoveryStatus && item.recoveryLabel && item.locationStatus && item.outsideVariant));
assert.ok(plan.weeks.every((item) => item.weekPhilosophy?.whyNotMore && item.weekPhilosophy?.targetLink));

assert.deepEqual(Array.from(plan.weeks, (item) => item.plannedDistanceLabel), [
  "±39 km", "±43,7 km", "±51,6 km", "±56 km", "±42,5 km", "±61,5 km",
  "±65,5 km", "±64,4 km", "±54,9 km", "±47 km", "±37,7 km", "±58,1 km",
]);
assert.deepEqual(Array.from(plan.weeks, (item) => item.plannedDistanceKm), [
  38.983, 43.707, 51.575, 56, 42.547, 61.541, 65.533, 64.366, 54.923, 47.033, 37.723, 58.146,
]);
assert.ok(plan.weeks.every((item) => Math.abs(item.plannedDistanceKm - item.workouts.reduce((sum, entry) => sum + entry.estimatedDistanceKm, 0)) < 0.0001));

assert.deepEqual(flattened(workout(38, 1)).map((item) => [item.durationSeconds, item.speedKmh, item.inclinePercent]), [
  [300, 9.2, 0.5], [1800, 10.1, 0.5], [300, 8.5, 0.5],
]);
assert.deepEqual(flattened(workout(38, 3)).map((item) => [item.durationSeconds, item.speedKmh, item.inclinePercent]), [
  [300, 9.2, 0.5], [1200, 10.1, 0.5], [600, 10.8, 0.5], [300, 8.5, 0.5],
]);

for (const weekNumber of [38, 42]) {
  const check = fitness(weekNumber);
  assert.ok(check?.isTest);
  assert.equal(check.totalPlannedSeconds, 40 * 60);
  assert.equal(Math.round(check.estimatedDistanceKm * 10) / 10, 7);
  assert.deepEqual(flattened(check).map((item) => [item.durationSeconds, item.speedKmh, item.inclinePercent]), [
    [300, 9, 0.5], [600, 10, 0.5], [600, 11, 0.5], [600, 12, 1], [300, 8.5, 0.5],
  ]);
}

assert.equal(workout(39, 2).totalPlannedSeconds, 76 * 60);
assert.deepEqual(flattened(workout(39, 2)).map((item) => item.speedKmh), [9.5, 10.5, 12, 9.5, 12, 9.5, 12, 9]);
assert.equal(workout(41, 2).totalPlannedSeconds, 85 * 60);
assert.deepEqual(flattened(workout(41, 2)).map((item) => [item.durationSeconds, item.speedKmh]), [[600, 9.5], [300, 10.5], [3600, 12], [600, 9]]);
assert.equal(workout(42, 4).totalPlannedSeconds, 165 * 60);
assert.deepEqual(flattened(workout(42, 4)).map((item) => [item.durationSeconds, item.speedKmh]), [[600, 9.5], [6900, 10.1], [1200, 11.5], [900, 11.8], [300, 8.5]]);
assert.equal(workout(44, 4).totalPlannedSeconds, 165 * 60);
assert.deepEqual(flattened(workout(44, 4)).map((item) => [item.durationSeconds, item.speedKmh]), [[600, 9.5], [4500, 10], [1800, 12], [480, 9.8], [1800, 12], [420, 10], [300, 8.5]]);

assert.match(workout(40, 2).evaluation, /22:00–22:45/);
assert.match(workout(38, 4).outsideVariant, /90 min easy/);
assert.match(workout(41, 4).outsideVariant, /2 uur steady/);
assert.match(workout(43, 4).outsideVariant, /140 min praattempo/);
assert.match(workout(44, 4).outsideVariant, /Loopband aanbevolen/);
assert.equal(workout(47, 3).recoveryStatus, "required");

const marathon = workout(47, 4);
assert.equal(marathon.category, "wedstrijd");
assert.equal(marathon.surface, "buiten");
assert.equal(marathon.estimatedDistanceKm, 42.195);
assert.equal(flattened(marathon)[0].inclinePercent, null);

const treadmillSegments = allWorkouts.filter((item) => item.surface === "loopband").flatMap(flattened);
assert.equal(treadmillSegments.length, 259);
assert.ok(treadmillSegments.every((item) => Number.isFinite(item.inclinePercent)), "Ieder loopbandblok heeft een numerieke helling");
assert.deepEqual(Array.from(new Set(treadmillSegments.map((item) => item.inclinePercent))).sort((a, b) => a - b), [0, 0.5, 1]);
assert.ok(treadmillSegments.filter((item) => item.type === "wandelen").every((item) => item.inclinePercent === 0));
assert.ok(treadmillSegments.filter((item) => ["recovery", "herstel", "easy", "steady", "warming-up", "cooling-down"].includes(item.type)).every((item) => item.inclinePercent === 0.5));
assert.ok(treadmillSegments.filter((item) => ["sub-marathon", "marathonpace", "marathontempo", "drempel", "interval", "test"].includes(item.type)).every((item) => item.inclinePercent === 1));
assert.ok(plan.guidance.raceStrategy.some((item) => item.pace === "5:01/km"));
assert.deepEqual(Array.from(plan.guidance.officialTests, (item) => item.week), [38, 40, 42, 43, 44]);

console.log("Planmodeltests geslaagd: 50 sessies, 259 expliciete loopbandhellingen en definitieve v5-weekvolumes gecontroleerd.");
