export function formatClock(seconds) {
  const rounded = Math.round(Number(seconds) || 0);
  return `${String(Math.floor(rounded / 60)).padStart(2, "0")}:${String(rounded % 60).padStart(2, "0")}`;
}

export function formatNumber(value) {
  return Number(value).toLocaleString("nl-NL", { maximumFractionDigits: 1 });
}

function formatSpeed(range, value) {
  return Array.isArray(range) && range.length === 2
    ? `${formatNumber(range[0])}\u2013${formatNumber(range[1])}`
    : formatNumber(value);
}

export function switchNotification(item, extendedEnabled = true) {
  const title = `SWITCH BIJ ${formatClock(item.switchAtSeconds)}`;
  const end = formatClock(item.nextEndsAtSeconds);
  const nextSpeed = formatSpeed(item.nextSpeedRangeKmh, item.nextSpeedKmh);
  const previousSpeed = formatSpeed(item.previousSpeedRangeKmh, item.previousSpeedKmh);
  const nextIncline = formatNumber(item.nextInclinePercent);
  if (item.previousSpeedMode === "self-paced" || item.nextSpeedMode === "self-paced") {
    const before = item.previousSpeedMode === "self-paced" ? "Praattempo / RPE" : `${previousSpeed} km/u`;
    const after = item.nextSpeedMode === "self-paced" ? "Praattempo / RPE" : `${nextSpeed} km/u`;
    return { title, body: extendedEnabled ? `Snelheid ${before} → ${after}\nHelling ${nextIncline}%\nTot ${end}` : `${after} · ${nextIncline}%\nTot ${end}` };
  }
  if (!extendedEnabled) return { title, body: `${nextSpeed} km/u · ${nextIncline}%\nTot ${end}` };
  const speed = previousSpeed === nextSpeed
    ? `Snelheid blijft ${nextSpeed} km/u`
    : `Snelheid ${previousSpeed} → ${nextSpeed} km/u`;
  const incline = item.previousInclinePercent === item.nextInclinePercent
    ? `Helling blijft ${nextIncline}%`
    : `Helling ${formatNumber(item.previousInclinePercent)} → ${nextIncline}%`;
  return { title, body: `${speed}\n${incline}\nTot ${end}` };
}
