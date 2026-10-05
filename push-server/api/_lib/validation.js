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

function optionalSpeedRange(value, message) {
  if (value == null) return null;
  if (!Array.isArray(value) || value.length !== 2) badRequest(message);
  const range = value.map((entry) => requiredNumber(entry, message));
  if (range[0] <= 0 || range[1] < range[0] || range[1] > 40) badRequest(message);
  return range;
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
    const previousSpeedMode = item.previousSpeedMode === "self-paced" ? "self-paced" : "prescribed";
    const nextSpeedMode = item.nextSpeedMode === "self-paced" ? "self-paced" : "prescribed";
    const values = [item.switchAtSeconds, item.nextEndsAtSeconds, item.previousInclinePercent, item.nextInclinePercent]
      .map((value) => requiredNumber(value, `INVALID_SWITCH_${index}`));
    const [switchAtSeconds, nextEndsAtSeconds, previousInclinePercent, nextInclinePercent] = values;
    const previousSpeedKmh = previousSpeedMode === "self-paced" ? null : requiredNumber(item.previousSpeedKmh, `INVALID_SWITCH_${index}`);
    const nextSpeedKmh = nextSpeedMode === "self-paced" ? null : requiredNumber(item.nextSpeedKmh, `INVALID_SWITCH_${index}`);
    const previousSpeedRangeKmh = optionalSpeedRange(item.previousSpeedRangeKmh, `INVALID_SPEED_RANGE_${index}`);
    const nextSpeedRangeKmh = optionalSpeedRange(item.nextSpeedRangeKmh, `INVALID_SPEED_RANGE_${index}`);
    if (switchAtSeconds <= 0 || nextEndsAtSeconds <= switchAtSeconds || (previousSpeedKmh != null && (previousSpeedKmh <= 0 || previousSpeedKmh > 40)) || (nextSpeedKmh != null && (nextSpeedKmh <= 0 || nextSpeedKmh > 40))) badRequest(`INVALID_SWITCH_${index}`);
    if (previousInclinePercent < 0 || nextInclinePercent < 0 || previousInclinePercent > 20 || nextInclinePercent > 20) badRequest(`INVALID_INCLINE_${index}`);
    if (previousSpeedKmh === nextSpeedKmh && previousInclinePercent === nextInclinePercent && JSON.stringify(previousSpeedRangeKmh) === JSON.stringify(nextSpeedRangeKmh)) badRequest(`UNCHANGED_SWITCH_${index}`);
    return {
      switchId: String(item.switchId || `switch-${index}`),
      blockName: String(item.blockName || "Volgend blok").slice(0, 80),
      switchAtSeconds,
      nextEndsAtSeconds,
      previousSpeedKmh,
      previousSpeedMode,
      previousInclinePercent,
      nextSpeedKmh,
      nextSpeedMode,
      nextInclinePercent,
      previousSpeedRangeKmh,
      nextSpeedRangeKmh,
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
