import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";

const context = vm.createContext({window:{},Intl,Date});
for (const file of ["training-data.js","review-model.js"]) vm.runInContext(fs.readFileSync(new URL(`../${file}`,import.meta.url),"utf8"),context);
const plan = context.window.MARATHON_PLAN;
const model = context.window.MARATHON_REVIEWS;
const definitions = model.definitions(plan);
const resolve = (today,records={},completed={}) => definitions.map(d=>model.resolve(d,records,completed,today));

test("11 reviews koppelen uniek aan bestaande V9.2-sessies en exacte datums",()=>{
  assert.equal(definitions.length,11);
  assert.equal(new Set(definitions.map(d=>d.trainingId)).size,11);
  assert.deepEqual(Array.from(definitions,d=>d.plannedDate),["2026-10-14","2026-10-18","2026-10-21","2026-10-25","2026-10-28","2026-11-01","2026-11-04","2026-11-08","2026-11-11","2026-11-15","2026-11-22"]);
  for (const week of [42,43,44,45]) {
    const items=definitions.filter(d=>d.weekNumber===week);
    assert.equal(items.length,2);
    assert.ok(items.every(d=>d.required&&!d.optional));
    assert.equal(items[0].trainingId,`V9_2-W${week}-T2`);
    assert.equal(items[1].trainingId,`V9_2-W${week}-T5`);
  }
  assert.ok(definitions.filter(d=>d.weekNumber===46).every(d=>d.optional&&!d.required));
  assert.equal(definitions.at(-1).trainingId,"V9_2-W47-T4-RACE");
  assert.ok(definitions.every(d=>plan.allWorkouts.some(w=>w.workoutId===d.trainingId)));
});

test("maandaggrens is Europe/Amsterdam, zowel zomer- als wintertijd",()=>{
  assert.equal(model.amsterdamDate(new Date("2026-10-18T21:59:59Z")),"2026-10-18");
  assert.equal(model.amsterdamDate(new Date("2026-10-18T22:00:00Z")),"2026-10-19");
  assert.equal(model.amsterdamDate(new Date("2026-10-25T22:59:59Z")),"2026-10-25");
  assert.equal(model.amsterdamDate(new Date("2026-10-25T23:00:00Z")),"2026-10-26");
  assert.equal(resolve("2026-10-18").filter(r=>r.overdue).length,0);
  assert.equal(resolve("2026-10-19").filter(r=>r.overdue).length,2);
  assert.equal(resolve("2026-10-26").filter(r=>r.overdue).length,4);
});

test("meerdere weken later blijven alle aanbevolen open reviews staan; taper niet",()=>{
  assert.equal(resolve("2026-11-16").filter(r=>r.overdue).length,8);
  assert.equal(resolve("2026-12-01").filter(r=>r.overdue).length,9);
  assert.ok(resolve("2026-12-01").filter(r=>r.overdue).every(r=>r.weekNumber!==46));
  const ids = definitions.slice(0,2).map(d=>d.reviewId);
  const records = {[ids[0]]:{status:"shared",sharedAt:"2026-10-19T10:00:00Z"},[ids[1]]:{status:"skipped",skippedAt:"2026-10-19T10:00:00Z"}};
  const items=resolve("2026-11-16",records);
  assert.equal(items.filter(r=>r.overdue).length,6);
  assert.deepEqual({...model.progress(items.filter(r=>r.weekNumber===42))},{total:2,shared:1,skipped:1,open:0});
  records[ids[0]].status="pending";
  assert.equal(resolve("2026-11-16",records).filter(r=>r.overdue).length,7);
});

test("training uitgevoerd, review gedeeld en toekomstige planning zijn onafhankelijk",()=>{
  const definition=definitions[0];
  assert.equal(model.resolve(definition,{}, {},"2026-10-08").statusLabel,"Aankomend");
  const completed={[definition.trainingId]:{completedAt:"2026-10-14"}};
  const ready=model.resolve(definition,{},completed,"2026-10-14");
  assert.equal(ready.statusLabel,"Klaar om te delen");
  assert.equal(ready.shared,false);
  const shared=model.resolve(definition,{[definition.reviewId]:{status:"shared"}}, {},"2026-10-14");
  assert.equal(shared.statusLabel,"Gedeeld");
  assert.equal(shared.performed,false);
});

test("kopieertekst gebruikt echte workouts en ervaringen, niet verzonnen analyse",()=>{
  const definition=definitions.find(d=>d.trainingId==="V9_2-W45-T2");
  const workout=plan.allWorkouts.find(w=>w.workoutId===definition.trainingId);
  const text=model.reviewText(definition,workout,plan,{rpe:"5",legs:"goed",notes:"soepel",recovery:"normaal"});
  assert.match(text,/4 november 2026/);
  assert.match(text,/Marathonpace Confidence Run/);
  assert.match(text,/55 min/);
  assert.match(text,/35 minuten/);
  assert.match(text,/5:27\/km/);
  assert.match(text,/RPE \(1-10\): 5/);
  assert.match(text,/Bijzonderheden: soepel/);
  assert.doesNotMatch(text,/automatisch geanalyseerd|2x20|2×20/);
  const long=definitions.find(d=>d.trainingId==="V9_2-W44-T5");
  const longText=model.reviewText(long,plan.allWorkouts.find(w=>w.workoutId===long.trainingId),plan,{fueling:"4 gels",fluids:"water"});
  assert.match(longText,/140 min/);
  assert.match(longText,/Voeding: 4 gels/);
  assert.match(longText,/Vochtinname: water/);
  assert.match(longText,/laatste halfuur/);
  const race=definitions.at(-1);
  assert.doesNotMatch(model.reviewText(race,plan.allWorkouts.at(-1),plan),/Easy is op gevoel/);
});
