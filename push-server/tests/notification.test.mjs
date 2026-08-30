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

test("server plant 30 en 45 seconden voor dezelfde absolute switches", () => {
  const start = Date.UTC(2026, 7, 31, 10, 0, 0);
  assert.deepEqual([600, 900, 1380].map((seconds) => (switchSendAtMs(start, seconds, 30) - start) / 1000), [570, 870, 1350]);
  assert.deepEqual([600, 900, 1380].map((seconds) => (switchSendAtMs(start, seconds, 45) - start) / 1000), [555, 855, 1335]);
});
