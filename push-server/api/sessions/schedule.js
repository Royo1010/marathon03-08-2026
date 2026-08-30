import { authenticate } from "../_lib/auth.js";
import { applyCors, assertOrigin, handleOptions, requireMethod, sendError } from "../_lib/http.js";
import { scheduleJob } from "../_lib/qstash.js";
import { getRedis, rateLimit, sessionKey } from "../_lib/store.js";
import { validateSchedule } from "../_lib/validation.js";
import { switchSendAtMs } from "../_lib/session.js";

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  applyCors(req, res);
  let store;
  let key;
  let session;
  try {
    requireMethod(req, "POST");
    assertOrigin(req);
    const { installId } = await authenticate(req);
    await rateLimit(`schedule:${installId}`, 20, 3600);
    const schedule = validateSchedule(req.body);
    store = getRedis();
    key = sessionKey(installId, schedule.sessionId);
    session = {
      status: "scheduling",
      generation: schedule.generation,
      workoutId: schedule.workoutId,
      startedAtMs: schedule.startedAtMs,
      soundEnabled: schedule.soundEnabled,
      extendedEnabled: schedule.extendedEnabled,
      createdAt: new Date().toISOString(),
      messageIds: [],
    };
    await store.set(key, session, { ex: 12 * 3600 });

    for (const item of schedule.switches) {
      const sendAtMs = switchSendAtMs(schedule.startedAtMs, item.switchAtSeconds, schedule.warningSeconds);
      const messageId = await scheduleJob({
        installId,
        sessionId: schedule.sessionId,
        generation: schedule.generation,
        workoutId: schedule.workoutId,
        soundEnabled: schedule.soundEnabled,
        extendedEnabled: schedule.extendedEnabled,
        item,
      }, sendAtMs);
      if (messageId) session.messageIds.push(messageId);
    }
    session.status = "active";
    await store.set(key, session, { ex: 12 * 3600 });
    res.status(200).json({ scheduledCount: schedule.switches.length });
  } catch (error) {
    if (store && key && session) {
      await store.set(key, { ...session, status: "canceled", canceledAt: new Date().toISOString() }, { ex: 12 * 3600 }).catch(() => {});
    }
    sendError(res, error);
  }
}
