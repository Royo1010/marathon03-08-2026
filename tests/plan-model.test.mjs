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

assert.equal(plan.weeks.length, 16, "Het schema moet 16 weken bevatten");
assert.equal(allWorkouts.length, 64, "Iedere week moet vier trainingen bevatten");
assert.equal(new Set(allWorkouts.map((workout) => workout.workoutId)).size, 64, "Workout-ID's moeten uniek zijn");
assert.ok(allWorkouts.every((workout) => workout.goal && workout.targetRpe), "Iedere training heeft doel en RPE");

const week1Training1 = plan.weeks[0].workouts[0];
assert.equal(week1Training1.totalPlannedSeconds, 35 * 60);
assert.equal(model.flattenWorkoutSegments(week1Training1).length, 5);

const week1Training2 = plan.weeks[0].workouts[1];
assert.equal(week1Training2.totalPlannedSeconds, 40 * 60);
assert.equal(model.flattenWorkoutSegments(week1Training2).length, 13, "Vier versnellingen en herstelstukken moeten worden uitgevouwen");

const week4Training2 = plan.weeks[3].workouts[1];
assert.equal(week4Training2.totalPlannedSeconds, 54 * 60 + 30);
assert.equal(model.flattenWorkoutSegments(week4Training2).length, 11, "Na het laatste tempoblok hoort geen herstelstuk");

const week8Test = plan.weeks[7].workouts[1];
assert.equal(week8Test.groups.flatMap((group) => group.segments).filter((segment) => segment.basis === "distance").length, 7);
assert.equal(week8Test.evaluation.criteria.length, 5);
assert.equal(week8Test.evaluation.adjustmentRules.length, 3);

const marathon = plan.weeks[15].workouts[3];
assert.equal(marathon.estimatedDistanceKm, 42.195);
assert.equal(model.flattenWorkoutSegments(marathon).length, 1);

for (const week of plan.weeks) {
  const calculated = week.workouts
    .filter((workout) => workout.category !== "wedstrijd")
    .reduce((sum, workout) => sum + model.calculateWorkoutDistanceKm(workout), 0);
  assert.ok(Math.abs(calculated - week.plannedDistanceKm) <= 0.25, `Week ${week.weekNumber}: berekende afstand wijkt te veel af`);
}

console.log("Planmodeltests geslaagd: 16 weken, 64 trainingen, tijd, afstand en herhaalblokken gecontroleerd.");
