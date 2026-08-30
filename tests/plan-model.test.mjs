import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../training-data.js", import.meta.url), "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context);

const plan = context.window.MARATHON_PLAN;
const model = context.window.MARATHON_MODEL;
const allWorkouts = plan.weeks.flatMap((week) => week.workouts);
const workout = (week, training) => plan.weeks.find((item) => item.weekNumber === week).workouts.find((item) => item.trainingNumber === training);

assert.equal(plan.config.startDate, "2026-08-31");
assert.equal(plan.config.marathonDate, "2026-11-22");
assert.equal(plan.config.targetTime, "3:30:00");
assert.equal(plan.config.targetPace, "4:58,6/km");
assert.equal(plan.config.targetSpeedKmh, 12);
assert.equal(plan.config.trainingFrequency, 4);
assert.equal(plan.config.sourceFile, "marathon-schema-3u30-expliciete-helling.md");
assert.equal(plan.config.schemaVersion, "marathon-schema-3u30-expliciete-helling-2026.08.30-1");

assert.deepEqual(Array.from(plan.weeks, (week) => week.weekNumber), Array.from({ length: 12 }, (_, index) => 36 + index));
assert.equal(plan.weeks.length, 12, "Het definitieve schema bevat week 36 t/m 47");
assert.equal(allWorkouts.length, 48, "Iedere week bevat vier trainingen");
assert.ok(plan.weeks.every((week) => week.workouts.length === 4));
assert.equal(new Set(allWorkouts.map((item) => item.workoutId)).size, 48);
assert.ok(allWorkouts.every((item) => item.goal && item.targetRpe && item.mentalGoal));
assert.ok(allWorkouts.every((item) => item.weekId && item.dateLabel && item.phaseId && item.phaseName));
assert.ok(plan.weeks.every((week) => week.workouts.every((item) => item.weekNumber === week.weekNumber && item.dateLabel === week.periodLabel)));

assert.deepEqual(Array.from(plan.weeks, (week) => week.plannedDistanceLabel), [
  "±39 km", "±43,7 km", "±48,8 km", "±54,2 km", "±42–43 km", "±56–57 km",
  "±59,5 km", "±64,4 km", "±54,4 km", "±47 km", "±37,7 km", "Marathonweek",
]);

const week36Easy = workout(36, 1);
assert.equal(week36Easy.totalPlannedSeconds, 45 * 60);
assert.equal(week36Easy.estimatedDistanceKm, 7.3);
assert.deepEqual(Array.from(model.flattenWorkoutSegments(week36Easy), (segment) => [segment.durationSeconds, segment.speedKmh, segment.inclinePercent]), [
  [300, 9, 0.5], [2100, 10, 0.5], [300, 8.5, 0.5],
]);

const week37Threshold = workout(37, 2);
assert.equal(week37Threshold.totalPlannedSeconds, 56 * 60 + 30);
assert.equal(model.flattenWorkoutSegments(week37Threshold).length, 10);
assert.equal(week37Threshold.groups.find((group) => group.kind === "repeat").repetitions, 4);

assert.ok(workout(38, 4).labels.includes("CONFIDENCE RUN"));
assert.equal(workout(38, 4).estimatedDistanceKm, 20.7);

const week39Confidence = workout(39, 4);
assert.deepEqual(Array.from(model.flattenWorkoutSegments(week39Confidence), (segment) => segment.distanceKm), [3, 8, 6, 4.1, 2.7]);
assert.equal(week39Confidence.estimatedDistanceKm, 23.8);

const benchmark = workout(40, 2);
assert.equal(benchmark.testNumber, 1);
assert.ok(benchmark.labels.includes("TEST"));
assert.equal(model.flattenWorkoutSegments(benchmark).find((segment) => segment.type === "test").distanceKm, 5);
assert.equal(model.flattenWorkoutSegments(benchmark).find((segment) => segment.type === "test").inclinePercent, 1);

const hmConfidence = workout(41, 4);
const hmMain = model.flattenWorkoutSegments(hmConfidence).find((segment) => segment.distanceKm === 21.1);
assert.equal(hmMain.speedKmh, 10.7);
assert.equal(hmMain.inclinePercent, 0.5);
assert.equal(hmConfidence.estimatedDistanceKm, 25.8);

const week42Fast = workout(42, 2);
assert.equal(model.flattenWorkoutSegments(week42Fast).length, 12, "Na blok 3 en 4 staat herstel; na blok 5 niet");
assert.equal(model.flattenWorkoutSegments(week42Fast).filter((segment) => segment.speedKmh === 13.2).length, 2);

const marathonPaceTest = workout(43, 2);
assert.equal(marathonPaceTest.testNumber, 2);
assert.equal(model.flattenWorkoutSegments(marathonPaceTest).filter((segment) => segment.speedKmh === 12).length, 3);
assert.equal(workout(43, 4).totalPlannedSeconds, 180 * 60);
assert.equal(workout(43, 4).estimatedDistanceKm, 30.4);

const keyTest = workout(44, 4);
assert.equal(keyTest.testNumber, 3);
assert.ok(keyTest.labels.includes("CONFIDENCE RUN"));
assert.ok(keyTest.labels.includes("MARATHON SPECIFIC"));
assert.equal(keyTest.totalPlannedSeconds, 165 * 60);
assert.equal(keyTest.estimatedDistanceKm, 28.7);
assert.equal(model.flattenWorkoutSegments(keyTest).filter((segment) => segment.speedKmh === 12).length, 3);

assert.ok(plan.weeks.filter((week) => [45, 46].includes(week.weekNumber)).flatMap((week) => week.workouts).every((item) => item.labels.includes("TAPER")));

const marathon = workout(47, 4);
assert.equal(marathon.category, "wedstrijd");
assert.equal(marathon.surface, "buiten");
assert.equal(marathon.estimatedDistanceKm, 42.195);
assert.equal(model.flattenWorkoutSegments(marathon).length, 1);
assert.equal(model.flattenWorkoutSegments(marathon)[0].inclinePercent, null, "De buitenmarathon heeft volgens de bron geen loopbandhelling");
assert.ok(marathon.labels.includes("RACE"));

const treadmillSegments = allWorkouts
  .filter((item) => item.surface === "loopband")
  .flatMap((item) => Array.from(model.flattenWorkoutSegments(item)));
assert.equal(treadmillSegments.length, 254);
assert.ok(treadmillSegments.every((segment) => Number.isFinite(segment.inclinePercent)), "Ieder loopbandblok heeft een numerieke helling");
assert.deepEqual(Array.from(new Set(treadmillSegments.map((segment) => segment.inclinePercent))).sort((a, b) => a - b), [0, 0.5, 1]);
assert.deepEqual(Array.from(model.flattenWorkoutSegments(workout(36, 2)), (segment) => segment.inclinePercent), [0.5, 0.5, 1, 0.5, 1, 0.5, 1, 0.5]);
assert.ok(model.flattenWorkoutSegments(workout(39, 4)).every((segment) => segment.inclinePercent === 0.5));
assert.ok(treadmillSegments.filter((segment) => segment.type === "wandelen").every((segment) => segment.inclinePercent === 0));

assert.deepEqual(Array.from(plan.guidance.officialTests, (item) => item.week), [40, 43, 44]);
assert.equal(plan.guidance.raceStrategy.length, 6);

console.log("Planmodeltests geslaagd: week 36–47, 48 trainingen en 254 expliciete loopbandhellingen gecontroleerd.");
