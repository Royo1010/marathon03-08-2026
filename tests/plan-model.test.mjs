import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";

const c = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(new URL("../training-data.js", import.meta.url), "utf8"), c);
const plan = c.window.MARATHON_PLAN;
const model = c.window.MARATHON_MODEL;
const all = plan.weeks.flatMap((w) => w.workouts);
const get = (w, t) => all.find((x) => x.weekNumber === w && x.trainingNumber === t);
const flat = (w) => Array.from(model.flattenWorkoutSegments(w));
const source = fs.readFileSync(new URL("../marathon-schema-3u30-definitief-2026.md", import.meta.url), "utf8");
const decimal = (s) => Number(s.replace(",", "."));

test("alle 50 sessies en hun metadata komen uit de definitieve bron", () => {
  assert.equal(all.length, 50);
  assert.equal(new Set(all.map((w) => w.workoutId)).size, 50);
  assert.equal(plan.config.marathonDate, "2026-11-22");
  assert.equal(plan.config.schemaVersion, "marathon-3u30-definitief-2026.09.02-1");
  assert.equal(plan.config.trainingFrequency, 4);
  assert.equal(plan.config.targetTime, "3:30:00");
  for (const week of plan.weeks) {
    assert.equal(week.workouts.filter((w) => !w.isExtra).length, 4);
    assert.equal(week.workouts.length, [38, 42].includes(week.weekNumber) ? 5 : 4);
    assert.equal(week.startDate, new Date(Date.UTC(2026, 7, 31 + (week.weekNumber - 36) * 7)).toISOString().slice(0, 10));
    assert.ok(week.weekPhilosophy.whyNotMore && week.weekPhilosophy.targetLink);
  }
  for (const w of all) assert.ok(w.title && w.goal && w.targetRpe && w.mentalGoal && w.outsideVariant);
});

test("onafhankelijke tweede parser vergelijkt ieder bronblok, titel, doel, RPE en mentale tekst", () => {
  let weekNumber;
  let current;
  let expected = [];
  const compare = () => {
    if (!current || current.isFitnessCheck || current.category === "wedstrijd") return;
    assert.deepEqual(flat(current).map((s) => [s.durationSeconds || null, s.distanceKm || null, s.speedKmh, s.inclinePercent]), expected, current.workoutId);
  };
  for (const line of source.split("\n")) {
    const week = line.match(/^## WEEK (\d+)/);
    if (week) { compare(); current = null; weekNumber = Number(week[1]); }
    const training = line.match(/^### Training (\d+) — (.+)/);
    const fitness = line.match(/^### Extra Fitness Check #(\d+)/);
    if (training || fitness) {
      compare();
      current = training ? get(weekNumber, Number(training[1])) : all.find((w) => w.weekNumber === weekNumber && w.isExtra);
      expected = [];
      if (training) assert.equal(current.title, training[2]);
    }
    if (!current) continue;
    const block = line.match(/^\d+\. (.+?) @ ([\d,]+) km\/u — ([\d,]+)%$/);
    if (block) {
      const [measure, unit] = block[1].split(" ");
      const clock = measure.split(":").map(decimal);
      const duration = unit === "km" ? null : unit === "sec" ? clock[0] : clock[0] * 60 + (clock[1] || 0);
      expected.push([duration, unit === "km" ? decimal(measure) : null, decimal(block[2]), decimal(block[3])]);
    }
    if (/^\d+\. 5,00 km test/.test(line)) expected.push([null, 5, null, 1]);
    const meta = line.match(/^\*\*(Doel|RPE|Mentaal):\*\* (.+)/);
    if (meta) assert.equal(current[{ Doel: "goal", RPE: "targetRpe", Mentaal: "mentalGoal" }[meta[1]]], meta[2].replace(/\*\*|`/g, "").trim());
    if (line.startsWith("# 6.")) { compare(); current = null; }
  }
});

test("onafhankelijke afstandssommen, duur en expliciete hellingen", () => {
  const expected = [38.98, 43.71, 55.78, 54.20, 42.55, 64.91, 68.88, 67.73, 53.65, 47.03, 37.72, 58.15];
  let inclineCount = 0;
  for (const [i, week] of plan.weeks.entries()) {
    let sum = 0;
    for (const w of week.workouts) {
      let distance = 0;
      let duration = 0;
      let unknown = false;
      for (const s of flat(w)) {
        assert.ok(s.durationSeconds > 0 || s.distanceKm > 0);
        if (w.surface === "loopband") {
          assert.ok(Number.isFinite(s.inclinePercent));
          assert.ok([0, 0.5, 1].includes(s.inclinePercent));
          inclineCount++;
        }
        assert.ok(s.speedKmh > 0 || (w.workoutId === "marathon-3u30-w40-t2" && s.distanceKm === 5));
        distance += s.basis === "distance" ? s.distanceKm : s.durationSeconds / 3600 * s.speedKmh;
        if (s.durationSeconds) duration += s.durationSeconds;
        else if (s.speedKmh) duration += s.distanceKm / s.speedKmh * 3600;
        else unknown = true;
      }
      assert.ok(Math.abs(distance - w.estimatedDistanceKm) < 1e-10);
      assert.equal(w.totalPlannedSeconds, unknown ? null : Math.round(duration));
      sum += distance;
    }
    assert.ok(Math.abs(sum - expected[i]) < 0.006, `W${week.weekNumber}: ${sum}`);
    assert.ok(Math.abs(sum - model.calculateWeekDistanceKm(week)) < 1e-10);
  }
  console.log(`Gecontroleerd: ${inclineCount} expliciete loopbandhellingen.`);
  assert.equal(get(44, 2).totalPlannedSeconds, 47 * 60);
  assert.equal(get(44, 2).estimatedDistanceLabel, "±8,35 km");
  assert.match(get(44, 2).sourceSummary, /^47 min/);
  assert.equal(flat(get(44, 2)).length, 10);
  assert.equal(plan.sourceDiscrepancies.length, 0);
});

test("sleuteltrainingen, fitnessprotocol, taper, racevoeding en buitenaanbevelingen", () => {
  const checks = all.filter((w) => w.isFitnessCheck);
  for (const check of checks) {
    assert.equal(check.totalPlannedSeconds, 2400);
    assert.ok(check.labels.includes("EXTRA FITNESS CHECK"));
    assert.equal(check.trainingNumber, null);
    assert.deepEqual(flat(check).map((s) => [s.durationSeconds, s.speedKmh, s.inclinePercent]), [[300, 9, 0.5], [600, 10, 0.5], [600, 11, 0.5], [600, 12, 1], [300, 8.5, 0.5]]);
  }
  assert.equal(flat(get(41, 2))[2].durationSeconds, 3600);
  assert.equal(get(41, 2).locationStatus, "Buiten aanbevolen");
  const w42 = flat(get(42, 4));
  assert.deepEqual(w42.slice(2).map((s) => [s.durationSeconds, s.speedKmh]), [[1200, 11.5], [300, 11.8], [600, 12], [300, 8.5]]);
  assert.equal(w42.slice(0, 4).reduce((sum, s) => sum + s.durationSeconds, 0), 150 * 60);
  assert.equal(get(43, 4).locationStatus, "Buiten aanbevolen");
  assert.equal(get(43, 4).estimatedDistanceKm, Math.max(...all.filter((w) => w.category === "lange-duur").map((w) => w.estimatedDistanceKm)));
  assert.equal(get(44, 4).locationStatus, "Loopband aanbevolen");
  assert.equal(flat(get(44, 4)).filter((s) => s.durationSeconds === 1800 && s.speedKmh === 12).length, 2);
  for (const w of all.filter((w) => w.trainingNumber === 4)) assert.ok(w.fueling && w.labels.includes("RACEVOEDING OEFENEN"));
  assert.deepEqual(Array.from(all.filter((w) => w.fullFuelRehearsal), (w) => w.weekNumber), [43, 44]);
  assert.ok(all.filter((w) => w.weekNumber >= 45).every((w) => !w.isTest && !w.isExtra));
  assert.equal(get(47, 4).estimatedDistanceKm, 42.195);
  assert.equal(flat(get(47, 4))[0].inclinePercent, null);
  assert.deepEqual(Array.from(plan.guidance.officialTests, (w) => w.week), [38, 40, 41, 42, 43, 44]);
  assert.match(plan.guidance.raceStrategy[0].pace, /5:02–5:03/);
});

test("volledige bronmetadata, trainingsvolgorde, veiligheidsregels en samenvattingen", () => {
  const clean = (s) => s.replace(/\*\*|`/g, "").trim();
  const chapters = source.split(/^## WEEK /m).slice(1);
  for (const chapter of chapters) {
    const nr = Number(chapter.match(/^\d+/)[0]);
    const week = plan.weeks.find((w) => w.weekNumber === nr);
    assert.equal(week.periodLabel, chapter.match(/^\*\*Periode:\*\* (.+)/m)[1].trim());
    const sections = chapter.split(/^### /m).slice(1);
    assert.equal(sections.length, week.workouts.length);
    for (const [i, section] of sections.entries()) {
      const w = week.workouts[i];
      const heading = section.split("\n")[0];
      assert.equal(heading, w.isExtra ? w.trainingLabel : `${w.trainingLabel} — ${w.title}`);
      const sourceLabels = [...section.match(/^\*\*Labels:\*\* (.+)/m)[1].matchAll(/`([^`]+)`/g)].map((m) => m[1]);
      assert.ok(sourceLabels.every((label) => w.labels.includes(label)));
      assert.equal(w.isTest, sourceLabels.includes("TEST"));
      for (const field of ["Veiligheidsregel", "Buitenvariant", "Absolute grens", "Ondergrond", "Planning", "Specificiteit"]) {
        const value = section.match(new RegExp(`^\\*\\*${field}:\\*\\* (.+)`, "m"))?.[1];
        if (value) assert.ok(w.detailsSections.some((s) => s.title === field && s.items.includes(clean(value))), `${w.workoutId}: ${field}`);
      }
      const summary = section.match(/^\*\*(?:Totaal|Loopbandtotaal):\*\* (.+)/m)?.[1];
      if (summary) {
        assert.equal(w.sourceSummary, clean(summary));
        const km = summary.match(/(?:ongeveer|exact) ([\d,]+) km/);
        if (km) assert.ok(Math.abs(decimal(km[1]) - w.estimatedDistanceKm) < 0.006, w.workoutId);
      }
      for (const s of flat(w)) {
        if (w.surface !== "loopband") continue;
        const quality = ["sub-marathon", "marathonpace", "drempel", "interval", "test"].includes(s.type);
        assert.equal(s.inclinePercent, s.type === "wandelen" ? 0 : quality ? 1 : 0.5, s.segmentId);
      }
    }
  }
  assert.deepEqual(flat(get(42, 2)).filter((s) => s.durationSeconds === 300 && s.speedKmh >= 12).map((s) => s.speedKmh), [12.8, 12.8, 12.8, 13, 13]);
  assert.equal(flat(get(43, 2)).filter((s) => s.durationSeconds === 900 && s.speedKmh === 12 && s.inclinePercent === 1).length, 3);
  assert.equal(flat(get(44, 4)).slice(0, 2).reduce((sum, s) => sum + s.durationSeconds, 0), 85 * 60);
  assert.ok(Math.abs(get(41, 4).estimatedDistanceKm - 25.8) < 1e-10);
});
