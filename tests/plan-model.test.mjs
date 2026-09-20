import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

const c = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(new URL("../training-data.js", import.meta.url), "utf8"), c);
const plan = c.window.MARATHON_PLAN;
const model = c.window.MARATHON_MODEL;
const weeks = plan.weeks;
const all = weeks.flatMap((week) => week.workouts);
const get = (week, training) => all.find((workout) => workout.weekNumber === week && workout.trainingNumber === training);
const flat = (workout) => Array.from(model.flattenWorkoutSegments(workout));
const source = fs.readFileSync(new URL("../marathonschema_Roy_FINAL_V3_3u30_2026.md", import.meta.url), "utf8");

test("FINAL V3 bevat exact W39-W47 en veertig unieke sessies", () => {
  assert.deepEqual(Array.from(weeks, (week) => week.weekNumber), [39, 40, 41, 42, 43, 44, 45, 46, 47]);
  assert.equal(all.length, 40);
  assert.equal(new Set(all.map((workout) => workout.workoutId)).size, 40);
  assert.equal(all.filter((workout) => workout.category !== "wedstrijd").length, 39);
  assert.equal(plan.config.schemaVersion, "marathon-3u30-final-v3-2026.09.20-1");
  assert.equal(plan.config.sourceFile, "marathonschema_Roy_FINAL_V3_3u30_2026.md");
  assert.equal(plan.config.startDate, "2026-09-21");
  assert.equal(plan.config.marathonDate, "2026-11-22");
  assert.equal(plan.config.practicalMarathonSpeedKmh, 12.1);
  assert.equal(plan.config.programmedMpMinutes, 328);
  assert.equal(all.filter((workout) => workout.isFitnessCheck).length, 0);
  assert.equal(all.filter((workout) => workout.isTest).length, 0);
});

test("week- en programmatotalen volgen de afgeronde FINAL V3-bron", () => {
  const expected = [53.23, 45.93, 65.16, 72.22, 77.73, 68.28, 51.75, 35.07, 14.01];
  assert.deepEqual(Array.from(weeks, (week) => week.plannedDistanceBeforeRaceKm), expected);
  assert.deepEqual(Array.from(weeks, (week) => model.calculateWeekDistanceKm(week, false)), expected);
  assert.equal(expected.reduce((sum, value) => sum + value, 0).toFixed(2), "483.38");
  assert.equal(model.calculateWeekDistanceKm(weeks.at(-1), true).toFixed(3), "56.205");
  assert.equal((expected.reduce((sum, value) => sum + value, 0) + 42.195).toFixed(3), "525.575");
  assert.equal(plan.config.plannedKmBeforeRace, 483.38);
  assert.equal(plan.config.plannedKmIncludingRace, 525.575);
});

test("alle loopbandblokken hebben expliciet 0 procent; buitenblokken krijgen geen verzonnen helling", () => {
  let treadmillBlocks = 0;
  let outdoorBlocks = 0;
  for (const workout of all) {
    for (const segment of flat(workout)) {
      assert.ok(segment.durationSeconds > 0 || segment.distanceKm > 0, segment.segmentId);
      if (workout.surface === "loopband") {
        assert.equal(segment.inclinePercent, 0, segment.segmentId);
        treadmillBlocks++;
      } else {
        assert.equal(segment.inclinePercent, null, segment.segmentId);
        outdoorBlocks++;
      }
    }
  }
  assert.ok(treadmillBlocks > 100);
  assert.ok(outdoorBlocks >= 10);
});

test("sleuteltrainingen hebben exact de FINAL V3-blokken", () => {
  assert.deepEqual(flat(get(41, 1)).map((s) => [s.durationSeconds / 60, s.speedKmh]), [[10,9.5],[5,10.5],[45,12.1],[10,9]]);
  assert.deepEqual(flat(get(42, 1)).filter((s) => s.speedKmh === 12.7).map((s) => s.durationSeconds / 60), [6,6,6,6]);
  assert.deepEqual(flat(get(42, 5)).map((s) => [s.durationSeconds / 60, s.speedKmh]), [[10,9.5],[100,10.4],[40,12.1],[5,10],[10,9]]);
  assert.deepEqual(flat(get(43, 5)).map((s) => [s.durationSeconds / 60, s.speedKmh]), [[5,9.5],[170,10.6],[5,9]]);
  assert.deepEqual(flat(get(44, 5)).map((s) => [s.durationSeconds / 60, s.speedKmh]), [[10,9.5],[65,10.4],[35,12.1],[8,9.8],[35,12.1],[7,10],[10,9]]);
  assert.equal(get(44, 5).totalPlannedSeconds, 170 * 60);
  assert.equal(get(43, 5).estimatedDistanceKm, 31.58);
  assert.equal(get(47, 4).estimatedDistanceKm, 42.195);
  assert.equal(get(47, 4).date, "2026-11-22");
});

test("flexibele weken en vaste taperdagen zijn gescheiden modellen", () => {
  assert.ok(weeks.filter((week) => week.weekNumber <= 44).every((week) => week.planningMode === "flexible" && week.days.length === 0));
  for (const week of weeks.filter((item) => item.weekNumber >= 45)) {
    assert.equal(week.planningMode, "calendar");
    assert.equal(week.days.length, 7);
    assert.ok(week.workouts.every((workout) => workout.fixedDay && workout.date && workout.weekday));
  }
  assert.deepEqual(Array.from(weeks.find((week) => week.weekNumber === 45).days, (day) => [day.date, day.isRestDay]), [
    ["2026-11-02", true], ["2026-11-03", false], ["2026-11-04", false], ["2026-11-05", false], ["2026-11-06", true], ["2026-11-07", true], ["2026-11-08", false],
  ]);
  assert.deepEqual(Array.from(weeks.find((week) => week.weekNumber === 47).days, (day) => [day.date, day.isRestDay]), [
    ["2026-11-16", true], ["2026-11-17", false], ["2026-11-18", true], ["2026-11-19", false], ["2026-11-20", true], ["2026-11-21", false], ["2026-11-22", false],
  ]);
});

test("krachtplanning, fueling, schoenen en confidence zijn structureel gekoppeld", () => {
  const strength = all.filter((workout) => workout.strength).map((workout) => [workout.weekNumber, workout.trainingNumber, workout.strength.type]);
  assert.equal(JSON.stringify(strength), JSON.stringify([[39,1,"A-light"],[40,2,"A-light"],[41,1,"A"],[41,3,"B"],[42,1,"A"],[42,3,"B"],[43,1,"A-light"],[43,3,"B-light"],[44,1,"A-light"],[45,1,"A-light"]]));
  assert.ok(all.filter((workout) => workout.weekNumber >= 46).every((workout) => !workout.strength));
  assert.equal(JSON.stringify(all.filter((workout) => workout.fullFuelRehearsal).map((workout) => [workout.weekNumber, workout.trainingNumber])), JSON.stringify([[42,5],[43,5],[44,5],[45,4]]));
  assert.equal(JSON.stringify(all.filter((workout) => workout.shoes).map((workout) => [workout.weekNumber, workout.trainingNumber])), JSON.stringify([[43,1],[44,5],[45,4]]));
  assert.equal(all.filter((workout) => workout.confidence).length, 7);
  for (const workout of all.filter((item) => item.fullFuelRehearsal)) assert.match(workout.nutrition, /80 g koolhydraten/);
});

test("bron bevat alle actieve titels, vaste taperdatums en geen Fitness Check", () => {
  for (const week of weeks) assert.match(source, new RegExp(`WEEK ${week.weekNumber}`));
  for (const workout of all) assert.ok(source.toLowerCase().includes(workout.title.toLowerCase()), workout.title);
  assert.match(source, /Maandag 02-11 — RUST/);
  assert.match(source, /Zaterdag 21-11 — SHAKEOUT/);
  assert.match(source, /Zondag 22-11 — MARATHON/);
  assert.doesNotMatch(source, /Fitness Check/i);
});

test("de FINAL V3-bron reproduceert training-data.js exact", () => {
  const folder = fs.mkdtempSync(path.join(os.tmpdir(), "marathon-v3-test-"));
  try {
    const generated = path.join(folder, "training-data.js");
    execFileSync(process.execPath, [new URL("../scripts/generate-marathon-plan.mjs", import.meta.url).pathname, new URL("../marathonschema_Roy_FINAL_V3_3u30_2026.md", import.meta.url).pathname, generated]);
    assert.equal(fs.readFileSync(generated, "utf8"), fs.readFileSync(new URL("../training-data.js", import.meta.url), "utf8"));
  } finally {
    fs.rmSync(folder, { recursive: true });
  }
});
