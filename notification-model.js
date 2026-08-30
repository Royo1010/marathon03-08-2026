(function (root, factory) {
  "use strict";
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.MARATHON_NOTIFICATIONS = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  const DEFAULT_SETTINGS = Object.freeze({
    enabled: true,
    soundEnabled: true,
    warningSeconds: 30,
    extendedEnabled: true,
  });

  function finiteNumber(value) {
    if (value === null || value === undefined || value === "") return null;
    const number = Number(value);
    return Number.isFinite(number) ? number : null;
  }

  function normalizeSettings(value) {
    const source = value && typeof value === "object" ? value : {};
    return {
      enabled: source.enabled !== false,
      soundEnabled: source.soundEnabled !== false,
      warningSeconds: Number(source.warningSeconds) === 45 ? 45 : 30,
      extendedEnabled: source.extendedEnabled !== false,
    };
  }

  function formatClock(seconds) {
    if (!Number.isFinite(Number(seconds)) || Number(seconds) < 0) return "00:00";
    const rounded = Math.round(Number(seconds));
    const minutes = Math.floor(rounded / 60);
    const remainder = rounded % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
  }

  function formatNumber(value) {
    const number = finiteNumber(value);
    if (number == null) return "";
    return number.toLocaleString("nl-NL", { maximumFractionDigits: 1 });
  }

  function buildNotificationContent(change, extendedEnabled = true) {
    const switchLabel = formatClock(change.switchAtSeconds);
    const endLabel = formatClock(change.nextEndsAtSeconds);
    const nextSpeed = formatNumber(change.nextSpeedKmh);
    const nextIncline = formatNumber(change.nextInclinePercent);
    const previousSpeed = formatNumber(change.previousSpeedKmh);
    const previousIncline = formatNumber(change.previousInclinePercent);
    const title = `SWITCH BIJ ${switchLabel}`;

    if (!extendedEnabled) {
      return {
        title,
        body: `${nextSpeed} km/u · ${nextIncline}%\nTot ${endLabel}`,
      };
    }

    const lines = [];
    if (change.speedChanged) lines.push(`Snelheid ${previousSpeed} → ${nextSpeed} km/u`);
    else lines.push(`Snelheid blijft ${nextSpeed} km/u`);
    if (change.inclineChanged) lines.push(`Helling ${previousIncline} → ${nextIncline}%`);
    else lines.push(`Helling blijft ${nextIncline}%`);
    lines.push(`Tot ${endLabel}`);
    return { title, body: lines.join("\n") };
  }

  function buildSwitchPlan(blocks, settingsValue) {
    const settings = normalizeSettings(settingsValue);
    if (!settings.enabled || !Array.isArray(blocks) || blocks.length < 2) return [];
    const switches = [];

    for (let index = 1; index < blocks.length; index += 1) {
      const previous = blocks[index - 1] || {};
      const next = blocks[index] || {};
      const switchAtSeconds = finiteNumber(next.startSeconds);
      const nextEndsAtSeconds = finiteNumber(next.endSeconds);
      const previousSpeedKmh = finiteNumber(previous.speedKmh);
      const previousInclinePercent = finiteNumber(previous.inclinePercent);
      const nextSpeedKmh = finiteNumber(next.speedKmh);
      const nextInclinePercent = finiteNumber(next.inclinePercent);

      if (
        switchAtSeconds == null || switchAtSeconds <= 0 || nextEndsAtSeconds == null ||
        previousSpeedKmh == null || previousInclinePercent == null ||
        nextSpeedKmh == null || nextInclinePercent == null
      ) continue;

      const speedChanged = previousSpeedKmh !== nextSpeedKmh;
      const inclineChanged = previousInclinePercent !== nextInclinePercent;
      if (!speedChanged && !inclineChanged) continue;

      const change = {
        switchId: `switch-${index}-${switchAtSeconds}`,
        blockIndex: index,
        blockName: String(next.blockName || next.type || "Volgend blok"),
        switchAtSeconds,
        warningAtSeconds: Math.max(0, switchAtSeconds - settings.warningSeconds),
        nextEndsAtSeconds,
        previousSpeedKmh,
        previousInclinePercent,
        nextSpeedKmh,
        nextInclinePercent,
        speedChanged,
        inclineChanged,
      };
      const content = buildNotificationContent(change, settings.extendedEnabled);
      switches.push({ ...change, ...content });
    }
    return switches;
  }

  function activeWarning(switches, elapsedSeconds) {
    const elapsed = Math.max(0, Number(elapsedSeconds) || 0);
    return (switches || []).find((item) => elapsed >= item.warningAtSeconds && elapsed < item.switchAtSeconds) || null;
  }

  return {
    DEFAULT_SETTINGS,
    normalizeSettings,
    formatClock,
    buildNotificationContent,
    buildSwitchPlan,
    activeWarning,
  };
});
