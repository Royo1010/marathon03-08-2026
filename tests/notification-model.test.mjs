import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";

const code = fs.readFileSync(new URL("../notification-model.js", import.meta.url), "utf8");
const context = vm.createContext({ Intl, console });
vm.runInContext(code, context);
const model = context.MARATHON_NOTIFICATIONS;

const blocks = [
  { startSeconds: 0, endSeconds: 600, speedKmh: 9.5, inclinePercent: 0.5, blockName: "Easy" },
  { startSeconds: 600, endSeconds: 900, speedKmh: 10.5, inclinePercent: 0.5, blockName: "Steady" },
  { startSeconds: 900, endSeconds: 1380, speedKmh: 12, inclinePercent: 1, blockName: "Marathonpace" },
  { startSeconds: 1380, endSeconds: 1560, speedKmh: 9.5, inclinePercent: 0.5, blockName: "Herstel" },
];

test("30 en 45 seconden worden exact van de absolute switchtijd afgetrokken", () => {
  const thirty = model.buildSwitchPlan(blocks, { warningSeconds: 30 });
  const fortyFive = model.buildSwitchPlan(blocks, { warningSeconds: 45 });
  assert.deepEqual(Array.from(thirty, (item) => item.warningAtSeconds), [570, 870, 1350]);
  assert.deepEqual(Array.from(fortyFive, (item) => item.warningAtSeconds), [555, 855, 1335]);
  assert.deepEqual(Array.from(thirty, (item) => item.title), ["SWITCH BIJ 10:00", "SWITCH BIJ 15:00", "SWITCH BIJ 23:00"]);
  assert.match(thirty[0].body, /Snelheid 9,5 → 10,5 km\/u/);
  assert.match(thirty[0].body, /Helling blijft 0,5%/);
  assert.match(thirty[0].body, /Tot 15:00/);
});

test("inhoud onderscheidt snelheid, helling en gecombineerde wijziging", () => {
  const speedOnly = model.buildSwitchPlan(blocks.slice(0, 2), { warningSeconds: 30 })[0];
  assert.equal(speedOnly.speedChanged, true);
  assert.equal(speedOnly.inclineChanged, false);

  const inclineOnly = model.buildSwitchPlan([
    { startSeconds: 0, endSeconds: 600, speedKmh: 12, inclinePercent: 0.5 },
    { startSeconds: 600, endSeconds: 900, speedKmh: 12, inclinePercent: 1 },
  ], { warningSeconds: 30 })[0];
  assert.match(inclineOnly.body, /Snelheid blijft 12 km\/u/);
  assert.match(inclineOnly.body, /Helling 0,5 → 1%/);

  const both = model.buildSwitchPlan(blocks.slice(1, 3), { warningSeconds: 30 })[0];
  assert.equal(both.speedChanged, true);
  assert.equal(both.inclineChanged, true);
});

test("eerste blok, onveranderde blokken en ontbrekende helling maken geen push", () => {
  const plan = model.buildSwitchPlan([
    { startSeconds: 0, endSeconds: 300, speedKmh: 10, inclinePercent: 0.5 },
    { startSeconds: 300, endSeconds: 600, speedKmh: 10, inclinePercent: 0.5 },
    { startSeconds: 600, endSeconds: 900, speedKmh: 11, inclinePercent: null },
  ], { warningSeconds: 30 });
  assert.deepEqual(Array.from(plan), []);
  assert.equal(model.buildSwitchPlan(blocks, { enabled: false }).length, 0);
});

test("in-app waarschuwing is alleen zichtbaar tussen voorwaarschuwing en switch", () => {
  const switches = model.buildSwitchPlan(blocks, { warningSeconds: 30 });
  assert.equal(model.activeWarning(switches, 569), null);
  assert.equal(model.activeWarning(switches, 570).title, "SWITCH BIJ 10:00");
  assert.equal(model.activeWarning(switches, 600), null);
});
