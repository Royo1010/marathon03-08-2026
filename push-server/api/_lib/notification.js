export function formatClock(seconds) {
  const rounded = Math.round(Number(seconds) || 0);
  return `${String(Math.floor(rounded / 60)).padStart(2, "0")}:${String(rounded % 60).padStart(2, "0")}`;
}

export function formatNumber(value) {
  return Number(value).toLocaleString("nl-NL", { maximumFractionDigits: 1 });
}

export function switchNotification(item, extendedEnabled = true) {
  const title = `SWITCH BIJ ${formatClock(item.switchAtSeconds)}`;
  const end = formatClock(item.nextEndsAtSeconds);
  const nextSpeed = formatNumber(item.nextSpeedKmh);
  const nextIncline = formatNumber(item.nextInclinePercent);
  if (!extendedEnabled) return { title, body: `${nextSpeed} km/u · ${nextIncline}%\nTot ${end}` };
  const speed = item.previousSpeedKmh === item.nextSpeedKmh
    ? `Snelheid blijft ${nextSpeed} km/u`
    : `Snelheid ${formatNumber(item.previousSpeedKmh)} → ${nextSpeed} km/u`;
  const incline = item.previousInclinePercent === item.nextInclinePercent
    ? `Helling blijft ${nextIncline}%`
    : `Helling ${formatNumber(item.previousInclinePercent)} → ${nextIncline}%`;
  return { title, body: `${speed}\n${incline}\nTot ${end}` };
}
