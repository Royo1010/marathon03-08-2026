function badRequest(message) {
  const error = new Error(message);
  error.statusCode = 400;
  throw error;
}

function requiredNumber(value, message) {
  if (value === null || value === undefined || value === "") badRequest(message);
  const number = Number(value);
  if (!Number.isFinite(number)) badRequest(message);
  return number;
}

export function validateSubscription(subscription) {
  if (!subscription || typeof subscription !== "object") badRequest("INVALID_SUBSCRIPTION");
  if (!/^https:\/\//.test(String(subscription.endpoint || ""))) badRequest("INVALID_SUBSCRIPTION_ENDPOINT");
  if (!subscription.keys?.p256dh || !subscription.keys?.auth) badRequest("INVALID_SUBSCRIPTION_KEYS");
  return {
    endpoint: String(subscription.endpoint),
    expirationTime: subscription.expirationTime || null,
    keys: { p256dh: String(subscription.keys.p256dh), auth: String(subscription.keys.auth) },
  };
}

export function validateSchedule(body) {
  if (!body || typeof body !== "object") badRequest("INVALID_BODY");
  const sessionId = String(body.sessionId || "");
  const workoutId = String(body.workoutId || "");
  const generation = Number(body.generation);
  const warningSeconds = Number(body.warningSeconds);
  const startedAtMs = Date.parse(body.startedAt);
  if (!sessionId || sessionId.length > 180) badRequest("INVALID_SESSION_ID");
  if (!workoutId || workoutId.length > 120) badRequest("INVALID_WORKOUT_ID");
  if (!Number.isInteger(generation) || generation < 1 || generation > 1000) badRequest("INVALID_GENERATION");
  if (![30, 45].includes(warningSeconds)) badRequest("INVALID_WARNING");
  if (!Number.isFinite(startedAtMs) || Math.abs(Date.now() - startedAtMs) > 24 * 3600 * 1000) badRequest("INVALID_START_TIME");
  if (!Array.isArray(body.switches) || body.switches.length > 128) badRequest("INVALID_SWITCHES");

  const switches = body.switches.map((item, index) => {
    const values = [item.switchAtSeconds, item.nextEndsAtSeconds, item.previousSpeedKmh, item.previousInclinePercent, item.nextSpeedKmh, item.nextInclinePercent]
      .map((value) => requiredNumber(value, `INVALID_SWITCH_${index}`));
    const [switchAtSeconds, nextEndsAtSeconds, previousSpeedKmh, previousInclinePercent, nextSpeedKmh, nextInclinePercent] = values;
    if (switchAtSeconds <= 0 || nextEndsAtSeconds <= switchAtSeconds || previousSpeedKmh <= 0 || nextSpeedKmh <= 0) badRequest(`INVALID_SWITCH_${index}`);
    if (previousInclinePercent < 0 || nextInclinePercent < 0 || previousInclinePercent > 20 || nextInclinePercent > 20) badRequest(`INVALID_INCLINE_${index}`);
    if (previousSpeedKmh === nextSpeedKmh && previousInclinePercent === nextInclinePercent) badRequest(`UNCHANGED_SWITCH_${index}`);
    return {
      switchId: String(item.switchId || `switch-${index}`),
      blockName: String(item.blockName || "Volgend blok").slice(0, 80),
      switchAtSeconds,
      nextEndsAtSeconds,
      previousSpeedKmh,
      previousInclinePercent,
      nextSpeedKmh,
      nextInclinePercent,
    };
  });

  return {
    sessionId,
    workoutId,
    generation,
    warningSeconds,
    startedAtMs,
    soundEnabled: body.soundEnabled !== false,
    extendedEnabled: body.extendedEnabled !== false,
    switches,
  };
}

export function validateCancel(body) {
  const sessionId = String(body?.sessionId || "");
  const generation = Number(body?.generation);
  if (!sessionId || sessionId.length > 180 || !Number.isInteger(generation)) badRequest("INVALID_CANCEL");
  return { sessionId, generation };
}
