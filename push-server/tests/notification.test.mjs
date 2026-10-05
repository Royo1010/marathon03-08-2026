import assert from "node:assert/strict";
import test from "node:test";
import { switchNotification } from "../api/_lib/notification.js";
import { validateSchedule } from "../api/_lib/validation.js";
import { sessionDeliveryState, switchSendAtMs } from "../api/_lib/session.js";

const item = {
  switchId: "switch-1-600",
  blockName: "Steady",
  switchAtSeconds: 600,
  nextEndsAtSeconds: 900,
  previousSpeedKmh: 9.5,
  previousInclinePercent: 0.5,
  nextSpeedKmh: 10.5,
  nextInclinePercent: 0.5,
};

test("V8-server bewaart expliciet zelfgestuurd easy-tempo bij MP-wissels", () => {
  const switches = [{...item,previousSpeedKmh:null,previousSpeedMode:"self-paced",nextSpeedKmh:11,nextSpeedMode:"prescribed",previousInclinePercent:0,nextInclinePercent:0}];
  const base = {sessionId:"v8-session",workoutId:"V8-W42-T2",generation:1,warningSeconds:30,startedAt:new Date().toISOString(),switches};
  const result = validateSchedule(base);
  assert.equal(result.switches[0].previousSpeedKmh,null);
  assert.equal(result.switches[0].previousSpeedMode,"self-paced");
  assert.match(switchNotification(result.switches[0]).body,/Praattempo \/ RPE → 11 km\/u/);
  assert.throws(()=>validateSchedule({...base,switches:[{...switches[0],previousSpeedMode:undefined}]}),/INVALID_SWITCH/);
});

test("server maakt dezelfde absolute switchmelding", () => {
  const result = switchNotification(item, true);
  assert.equal(result.title, "SWITCH BIJ 10:00");
  assert.match(result.body, /Snelheid 9,5 → 10,5 km\/u/);
  assert.match(result.body, /Helling blijft 0,5%/);
  assert.match(result.body, /Tot 15:00/);
});

test("server accepteert alleen 30/45 en numerieke gewijzigde loopbandblokken", () => {
  const base = {
    sessionId: "session-1",
    workoutId: "week36-training2",
    generation: 1,
    warningSeconds: 30,
    startedAt: new Date().toISOString(),
    switches: [item],
  };
  assert.equal(validateSchedule(base).switches.length, 1);
  assert.throws(() => validateSchedule({ ...base, warningSeconds: 20 }), /INVALID_WARNING/);
  assert.throws(() => validateSchedule({ ...base, switches: [{ ...item, nextInclinePercent: null }] }), /INVALID_SWITCH_0/);
  assert.throws(() => validateSchedule({ ...base, switches: [{ ...item, nextSpeedKmh: 9.5 }] }), /UNCHANGED_SWITCH_0/);
});

test("stop en een nieuwe generatie maken oude jobs ongeldig", () => {
  assert.equal(sessionDeliveryState({ status: "active", generation: 1 }, { generation: 1 }), "deliver");
  assert.equal(sessionDeliveryState({ status: "canceled", generation: 1 }, { generation: 1 }), "skip");
  assert.equal(sessionDeliveryState({ status: "active", generation: 2 }, { generation: 1 }), "skip");
  assert.equal(sessionDeliveryState({ status: "scheduling", generation: 2 }, { generation: 2 }), "retry");
});

test("V6 snelheidsranges blijven behouden in servermeldingen", () => {
  const change = { ...item, previousSpeedRangeKmh: [7, 8.5], nextSpeedRangeKmh: [10.3, 10.7], previousInclinePercent: 0, nextInclinePercent: 0 };
  const result = validateSchedule({ sessionId: "v6-session", workoutId: "V6-W42-T2", generation: 1, warningSeconds: 30, startedAt: new Date().toISOString(), switches: [change] });
  assert.deepEqual(result.switches[0].nextSpeedRangeKmh, [10.3, 10.7]);
  assert.match(switchNotification(result.switches[0]).body, /7\u20138,5 → 10,3\u201310,7 km\/u/);
  assert.match(switchNotification(result.switches[0], false).body, /10,3\u201310,7 km\/u/);
  assert.throws(() => validateSchedule({ sessionId: "v6-session", workoutId: "V6-W42-T2", generation: 1, warningSeconds: 30, startedAt: new Date().toISOString(), switches: [{ ...change, nextSpeedRangeKmh: [10.7, 10.3] }] }), /INVALID_SPEED_RANGE/);
});

test("server plant 30 en 45 seconden voor dezelfde absolute switches", () => {
  const start = Date.UTC(2026, 7, 31, 10, 0, 0);
  assert.deepEqual([600, 900, 1380].map((seconds) => (switchSendAtMs(start, seconds, 30) - start) / 1000), [570, 870, 1350]);
  assert.deepEqual([600, 900, 1380].map((seconds) => (switchSendAtMs(start, seconds, 45) - start) / 1000), [555, 855, 1335]);
});
