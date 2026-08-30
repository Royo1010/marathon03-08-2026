import fs from "node:fs";
import path from "node:path";

const inputPath = process.argv[2];
const outputPath = process.argv[3] || path.resolve("training-data.js");

if (!inputPath) {
  throw new Error("Gebruik: node scripts/generate-marathon-plan.mjs <marathon-schema-3u30-expliciete-helling.md> [training-data.js]");
}

const source = fs.readFileSync(inputPath, "utf8").replace(/\r/g, "");
const lines = source.split("\n");
const schemaVersion = "marathon-schema-3u30-expliciete-helling-2026.08.30-1";
const scheduleStart = "2026-08-31";

function localIso(date) {
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
}

function addDays(iso, days) {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + days);
  return localIso(date);
}

function parseDecimal(value) {
  const match = String(value || "").replace(",", ".").match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
}

function parseClockSeconds(value) {
  const text = String(value || "").trim().toLowerCase().replace(/^±/, "");
  const minuteSecond = text.match(/^(\d+):(\d{2})(?:\s*min)?$/);
  if (minuteSecond) return Number(minuteSecond[1]) * 60 + Number(minuteSecond[2]);
  const seconds = text.match(/([\d,.]+)\s*sec/);
  if (seconds) return Math.round(parseDecimal(seconds[1]) * 1);
  const minutes = text.match(/([\d,.]+)\s*min/);
  if (minutes) return Math.round(parseDecimal(minutes[1]) * 60);
  return 0;
}

function measureFromText(value) {
  const text = String(value || "").trim();
  const distance = text.match(/([\d,.]+)\s*km/i);
  if (distance) return { basis: "distance", distanceKm: parseDecimal(distance[1]), display: text };
  const seconds = parseClockSeconds(text);
  return { basis: "time", durationSeconds: seconds, display: text };
}

function phaseForWeek(weekNumber) {
  if (weekNumber <= 39) return "opbouw-confidence";
  if (weekNumber === 40) return "herstel-test";
  if (weekNumber <= 44) return "marathonspecifiek";
  if (weekNumber <= 46) return "taper";
  return "marathonweek";
}

const phaseDefinitions = [
  { phaseId: "opbouw-confidence", number: 1, name: "Opbouw en confidence", shortName: "Opbouw", startWeek: 36, endWeek: 39, goal: "Lange afstanden geleidelijk normaler laten voelen en marathonpace gecontroleerd introduceren." },
  { phaseId: "herstel-test", number: 2, name: "Herstel en eerste test", shortName: "Herstel + test", startWeek: 40, endWeek: 40, goal: "Vermoeidheid laten zakken en de ontwikkeling van snelheid en drempel meten met de 5 km-benchmark." },
  { phaseId: "marathonspecifiek", number: 3, name: "Marathonspecifieke confidence-fase", shortName: "Marathonspecifiek", startWeek: 41, endWeek: 44, goal: "Lange afstanden beheersen en marathonpace diep in een lange training leren controleren." },
  { phaseId: "taper", number: 4, name: "Taper", shortName: "Taper", startWeek: 45, endWeek: 46, goal: "Volume verlagen, kwaliteit behouden en fris worden zonder nieuwe vermoeidheid op te bouwen." },
  { phaseId: "marathonweek", number: 5, name: "Marathonweek", shortName: "Marathonweek", startWeek: 47, endWeek: 47, goal: "Fit worden, niet fitter worden, en de geteste wedstrijdstrategie uitvoeren." },
];

function titleFallback(weekNumber, trainingNumber, segments) {
  if (trainingNumber === 1) return weekNumber >= 45 ? "Easy / herstel" : "Easy";
  if (trainingNumber === 3) return segments.some((segment) => Number(segment.speedKmh) >= 10.6) ? "Easy met steady finish" : "Easy / herstel";
  if (trainingNumber === 4) return weekNumber === 47 ? "Marathon — 22 november 2026" : "Lange duur";
  return "Kwaliteitstraining";
}

function categoryFor(trainingNumber, title, weekNumber) {
  const lower = title.toLowerCase();
  if (weekNumber === 47 && trainingNumber === 4) return "wedstrijd";
  if (trainingNumber === 4) return "lange-duur";
  if (/test|benchmark/.test(lower)) return "testtraining";
  if (trainingNumber === 2 && /snel|drempel|×/.test(lower)) return "interval";
  if (trainingNumber === 2) return "kwaliteit";
  if (/recovery|herstel|losmaken/.test(lower)) return "herstel";
  return "rustige-duur";
}

function segmentType(segment, groupLabel, title) {
  const speed = segment.speedKmh == null ? null : Number(segment.speedKmh);
  const text = `${segment.display} ${groupLabel} ${title}`.toLowerCase();
  if (/wandelen/.test(text) || (Number.isFinite(speed) && speed <= 6)) return "wandelen";
  if (/cooldown|uitlopen/.test(text) || (speed && speed <= 8.8)) return "cooling-down";
  if (/warming/.test(text)) return "warming-up";
  if (/herstel|na blok/.test(text) || (speed && speed < 9.9)) return "herstel";
  if (!Number.isFinite(speed)) return /test/.test(text) ? "test" : "afstand";
  if (speed <= 10.3) return "easy";
  if (speed <= 11) return "steady";
  if (speed < 12) return "sub-marathon";
  if (speed <= 12.1) return "marathontempo";
  if (speed <= 12.7) return "drempel";
  return "interval";
}

function parseSegment(line, workoutId, segmentIndex, groupLabel) {
  const clean = line.replace(/^[-*]\s*/, "").trim();
  const recoveryPrefix = clean.match(/^na blok\s+([^:]+):\s*(.+)$/i);
  const content = recoveryPrefix ? recoveryPrefix[2] : clean;
  const atMatch = content.match(/^(.+?)\s*@\s*([\d,.]+)(?:\s*km\/u)?(?:\s*—\s*([\d,.]+)%)?$/i);
  if (atMatch) {
    const segment = {
      segmentId: `${workoutId}-s${String(segmentIndex).padStart(2, "0")}`,
      ...measureFromText(atMatch[1]),
      speedKmh: parseDecimal(atMatch[2]),
      inclinePercent: atMatch[3] == null ? null : parseDecimal(atMatch[3]),
      instruction: recoveryPrefix ? `Na blok ${recoveryPrefix[1]}.` : "",
    };
    segment.type = segmentType(segment, recoveryPrefix ? `herstel ${groupLabel}` : groupLabel, "");
    segment.isRecovery = Boolean(recoveryPrefix);
    return segment;
  }

  const benchmark = content.match(/^([\d,.]+\s*km)\s*—\s*([\d,.]+)%$/i);
  if (benchmark) {
    const segment = {
      segmentId: `${workoutId}-s${String(segmentIndex).padStart(2, "0")}`,
      ...measureFromText(benchmark[1]),
      speedKmh: null,
      inclinePercent: parseDecimal(benchmark[2]),
      instruction: "Begin gecontroleerd rond 12,5 km/u en pas daarna geleidelijk aan.",
      type: "test",
    };
    return segment;
  }
  return null;
}

function repeatMarker(line) {
  const clean = line.trim();
  const repeated = clean.match(/^(?:Daarna\s+)?(\d+)\s*×:$/i);
  if (repeated) return { label: clean.replace(/:$/, ""), repetitions: Number(repeated[1]) };
  const blockRange = clean.match(/^Blok\s+(\d+)(?:–(\d+))?:$/i);
  if (blockRange) return { label: clean.replace(/:$/, ""), repetitions: blockRange[2] ? Number(blockRange[2]) - Number(blockRange[1]) + 1 : 1 };
  return null;
}

function isSummaryLine(line) {
  const clean = line.trim();
  return /^(?:±?\d+(?::\d{2})?(?:\s*min)?\s*—\s*)?±?[\d,.]+\s*km$/i.test(clean)
    || /^\d+(?::\d{2})?\s*min\s*—\s*±?[\d,.]+\s*km$/i.test(clean)
    || /^(?:Totaal|Totale training):\s*±?[\d,.]+\s*km$/i.test(clean);
}

function parseSummary(bodyLines, groups, category) {
  let totalLabel = "";
  let distanceLabel = "";
  for (const raw of bodyLines) {
    const line = raw.trim();
    let match = line.match(/^(±?\d+(?::\d{2})?(?:\s*min)?)\s*—\s*(±?[\d,.]+\s*km)$/i);
    if (match) {
      totalLabel = match[1];
      distanceLabel = match[2];
      continue;
    }
    match = line.match(/^(?:Totaal|Totale training):\s*(±?[\d,.]+\s*km)$/i);
    if (match) distanceLabel = match[1];
    if (!distanceLabel && /^±?[\d,.]+\s*km$/i.test(line)) distanceLabel = line;
  }

  const flattened = flattenGroups(groups);
  const calculatedSeconds = flattened.reduce((sum, segment) => {
    if (segment.durationSeconds) return sum + segment.durationSeconds;
    if (segment.distanceKm && segment.speedKmh) return sum + (segment.distanceKm / segment.speedKmh) * 3600;
    return sum;
  }, 0);
  const hasUnknownDuration = flattened.some((segment) => segment.distanceKm && !segment.speedKmh);
  const totalSeconds = totalLabel ? parseClockSeconds(totalLabel) : hasUnknownDuration ? 0 : Math.round(calculatedSeconds);

  if (!totalLabel) {
    if (category === "wedstrijd") totalLabel = "Marathon";
    else if (hasUnknownDuration) totalLabel = "Tijd afhankelijk van testresultaat";
    else if (totalSeconds) totalLabel = `${Math.round(totalSeconds / 60)} min`;
    else totalLabel = "Tijd niet vermeld";
  }
  if (!distanceLabel && category === "wedstrijd") distanceLabel = "42,195 km";
  return {
    totalPlannedLabel: totalLabel,
    totalPlannedSeconds: totalSeconds,
    estimatedDistanceLabel: distanceLabel || "Afstand niet vermeld",
    estimatedDistanceKm: distanceLabel ? parseDecimal(distanceLabel) : category === "wedstrijd" ? 42.195 : null,
  };
}

function flattenGroups(groups) {
  const result = [];
  for (const group of groups) {
    const repetitions = group.kind === "repeat" ? group.repetitions : 1;
    for (let repeat = 1; repeat <= repetitions; repeat += 1) {
      group.segments.forEach((segment, index) => {
        if (group.omitRecoveryAfterLast && repeat === repetitions && index === group.segments.length - 1 && segment.isRecovery) return;
        result.push({ ...segment, repeat, repetitions });
      });
    }
  }
  return result;
}

function detailSections(bodyLines) {
  const sections = [];
  let current = { title: "Aanwijzingen", items: [] };
  const push = () => {
    if (current.items.length) sections.push(current);
  };
  for (const raw of bodyLines) {
    const line = raw.trim();
    if (!line || parseSegment(line, "preview", 1, "") || isSummaryLine(line) || repeatMarker(line)) continue;
    if (/^(?:Cooldown|Warming-up|Hoofdblok|Uitlopen|Eerst|Daarna|Vervolgens|Loop exact|Test):?$/i.test(line)) continue;
    if (/^Helling:\s*[\d,.]+%/i.test(line)) continue;
    const heading = line.match(/^#{1,3}\s+(.+)$/);
    const colonHeading = line.match(/^([^“”]{2,55}):$/);
    if (heading || colonHeading || /^(?:Beoordeling|Interpretatie|Waarom dit de sleuteltraining is|Wedstrijdstrategie)$/i.test(line)) {
      push();
      current = { title: (heading ? heading[1] : colonHeading ? colonHeading[1] : line).trim(), items: [] };
      continue;
    }
    current.items.push(line.replace(/^[-*]\s*/, ""));
  }
  push();
  return sections;
}

function explicitTextAfter(bodyLines, labelPattern) {
  const index = bodyLines.findIndex((line) => labelPattern.test(line.trim()));
  if (index === -1) return "";
  const values = [];
  for (let cursor = index + 1; cursor < bodyLines.length; cursor += 1) {
    const line = bodyLines[cursor].trim();
    if (!line || /^#{1,3}\s/.test(line) || /^[^“”]{2,55}:$/.test(line) || isSummaryLine(line) || parseSegment(line, "preview", 1, "")) break;
    values.push(line.replace(/^[-*]\s*/, ""));
  }
  return values.join(" ");
}

function defaultGoal(category, title, weekNumber) {
  if (category === "wedstrijd") return "De marathon uitvoeren volgens de geteste 3:30-strategie, als de ontwikkeling en tests groen licht geven.";
  if (/test 1/i.test(title)) return "Meten hoeveel snelheid en drempel zijn verbeterd; deze test beslist nog niet zelfstandig over 3:30.";
  if (/test 2/i.test(title)) return "Beoordelen hoe comfortabel het beoogde marathonpace van 12,0 km/u is geworden.";
  if (/test 3/i.test(title)) return "Beoordelen of marathonpace na 85 minuten lopen nog beheerst kan worden.";
  if (category === "rustige-duur") return "Easy en ontspannen lopen op RPE 3–4/10; volledige zinnen moeten mogelijk blijven.";
  if (category === "herstel") return "Herstellen en loopritme behouden met zo weinig mogelijk restvermoeidheid.";
  if (category === "lange-duur") return "Lange afstanden conditioneel en psychologisch steeds normaler en beter beheersbaar maken.";
  if (weekNumber >= 45) return "Kwaliteit behouden en fris blijven zonder nieuwe vermoeidheid op te bouwen.";
  return "De voorgeschreven kwaliteitsblokken gecontroleerd uitvoeren zonder de lange duurtraining te ondermijnen.";
}

function defaultRpe(category, title, bodyLines) {
  const explicit = bodyLines.map((line) => line.trim()).find((line) => /^RPE:/i.test(line));
  if (explicit) return explicit.replace(/^RPE:\s*/i, "").replace(/\.$/, "");
  if (/test 2/i.test(title)) return "derde blok maximaal ongeveer 7/10 voor groen";
  if (/test 3/i.test(title)) return "derde blok maximaal ±7–7,5/10 voor groen licht";
  if (category === "rustige-duur" || category === "herstel") return "3–4/10";
  if (category === "lange-duur") return "4–6/10, tenzij expliciet anders beschreven";
  if (category === "wedstrijd") return "wedstrijdinspanning";
  return "maximaal ongeveer 7–8/10";
}

function labelsFor(workout, weekNumber) {
  const labels = [];
  if (workout.category === "rustige-duur" || workout.category === "herstel") labels.push("EASY");
  if (["kwaliteit", "interval", "testtraining"].includes(workout.category)) labels.push("QUALITY");
  if (workout.category === "lange-duur") labels.push("LONG RUN");
  if (/confidence/i.test(workout.title)) labels.push("CONFIDENCE RUN");
  if (workout.isTest) labels.push("TEST");
  if (/marathonpace|marathon confidence/i.test(workout.title)) labels.push("MARATHON SPECIFIC");
  if (weekNumber === 45 || weekNumber === 46) labels.push("TAPER");
  if (workout.category === "wedstrijd") labels.push("RACE");
  return [...new Set(labels)];
}

function parseWorkout(weekNumber, trainingNumber, headingTitle, bodyLines, mentalGoal) {
  const workoutId = `marathon-3u30-w${weekNumber}-t${trainingNumber}`;
  const groups = [];
  let group = { groupId: `${workoutId}-g1`, kind: "sequence", label: "Opbouw", repetitions: 1, segments: [] };
  groups.push(group);
  let segmentIndex = 0;
  let title = String(headingTitle || "").trim();

  for (const raw of bodyLines) {
    const line = raw.trim();
    const markdownTitle = line.match(/^#\s+MARATHON\s+—\s+(.+)$/i);
    if (markdownTitle) {
      title = `Marathon — ${markdownTitle[1]}`;
      continue;
    }
    const marker = repeatMarker(line);
    if (marker) {
      group = { groupId: `${workoutId}-g${groups.length + 1}`, kind: marker.repetitions > 1 ? "repeat" : "sequence", label: marker.label, repetitions: marker.repetitions, segments: [], omitRecoveryAfterLast: false };
      groups.push(group);
      continue;
    }
    if (/^(?:Cooldown|Warming-up|Hoofdblok|Uitlopen|Eerst|Daarna|Vervolgens|Test):?$/i.test(line)) {
      group = { groupId: `${workoutId}-g${groups.length + 1}`, kind: "sequence", label: line.replace(/:$/, ""), repetitions: 1, segments: [] };
      groups.push(group);
      continue;
    }
    const segment = parseSegment(line, workoutId, segmentIndex + 1, group.label);
    if (segment) {
      segmentIndex += 1;
      segment.type = segmentType(segment, group.label, title);
      group.segments.push(segment);
      if (segment.isRecovery && group.kind === "repeat") group.omitRecoveryAfterLast = true;
      continue;
    }
    const incline = line.match(/^Helling:\s*([\d,.]+)%/i);
    if (incline && group.segments.length) group.segments[group.segments.length - 1].inclinePercent = parseDecimal(incline[1]);
  }

  const cleanGroups = groups.filter((item) => item.segments.length);
  if (!title) title = titleFallback(weekNumber, trainingNumber, flattenGroups(cleanGroups));
  if (/^TEST\s+[123]$/i.test(title)) {
    const firstText = bodyLines.map((line) => line.trim()).find((line) => line && !line.startsWith("#") && !line.startsWith("-") && !parseSegment(line, "preview", 1, "") && !isSummaryLine(line));
    if (firstText) title = `${title} — ${firstText}`;
  }
  const category = categoryFor(trainingNumber, title, weekNumber);
  if (category === "wedstrijd" && !cleanGroups.length) {
    cleanGroups.push({
      groupId: `${workoutId}-g1`,
      kind: "sequence",
      label: "Marathon",
      repetitions: 1,
      segments: [{ segmentId: `${workoutId}-s01`, basis: "distance", distanceKm: 42.195, display: "42,195 km", speedKmh: 12.06, inclinePercent: null, type: "wedstrijd", instruction: "Benodigd gemiddelde 4:58,6/km; start bewust rustiger volgens de wedstrijdstrategie." }],
    });
  }

  const summary = parseSummary(bodyLines, cleanGroups, category);
  const explicitGoal = explicitTextAfter(bodyLines, /^Doel(?: is)?:$/i);
  const explicitMental = explicitTextAfter(bodyLines, /^(?:Mentale boodschap|Mentale doel|Psychologische boodschap):$/i);
  const isTest = /\bTEST\s+[123]\b/i.test(title);
  const workout = {
    workoutId,
    weekNumber,
    trainingNumber,
    category,
    title,
    surface: category === "wedstrijd" ? "buiten" : "loopband",
    groups: cleanGroups,
    ...summary,
    goal: explicitGoal || defaultGoal(category, title, weekNumber),
    targetRpe: defaultRpe(category, title, bodyLines),
    mentalGoal: explicitMental || mentalGoal,
    orderWarning: trainingNumber === 2
      ? "Plan Training 2 en Training 4 liefst met minimaal één rustdag ertussen."
      : trainingNumber === 4
        ? "Kom niet direct uit Training 2; houd liefst minimaal één rustdag tussen beide trainingen."
        : "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
    detailsSections: detailSections(bodyLines),
    notes: [],
    isTest,
    testNumber: isTest ? Number(title.match(/TEST\s+([123])/i)[1]) : null,
  };
  workout.labels = labelsFor(workout, weekNumber);
  workout.evaluation = isTest
    ? { title: `Beoordeling TEST ${workout.testNumber}`, criteria: workout.detailsSections.flatMap((section) => section.items), adjustmentRules: ["Sla het resultaat op en beoordeel het totaalbeeld; trainingssnelheden worden niet automatisch aangepast."] }
    : null;
  return workout;
}

function parsePsychologicalGoals() {
  const start = lines.findIndex((line) => /^# DE PSYCHOLOGISCHE OPBOUW/.test(line));
  const end = lines.findIndex((line, index) => index > start && /^# DE DRIE OFFICIËLE TESTS/.test(line));
  const goals = {};
  let activeWeeks = [];
  for (const raw of lines.slice(start + 1, end)) {
    const line = raw.trim();
    const heading = line.match(/^# Week (\d+)(?:–(\d+))?/i);
    if (heading) {
      const from = Number(heading[1]);
      const to = Number(heading[2] || heading[1]);
      activeWeeks = Array.from({ length: to - from + 1 }, (_, index) => from + index);
      continue;
    }
    if (line && !line.startsWith("#")) activeWeeks.forEach((week) => { goals[week] = [goals[week], line].filter(Boolean).join(" "); });
  }
  return goals;
}

const psychologicalGoals = parsePsychologicalGoals();
const weekHeaderIndices = lines.map((line, index) => (/^# WEEK \d+/.test(line) ? index : -1)).filter((index) => index >= 0);
const scheduleEndIndex = lines.findIndex((line) => /^# DE PSYCHOLOGISCHE OPBOUW/.test(line));
const weeks = [];

weekHeaderIndices.forEach((startIndex, weekPosition) => {
  const endIndex = weekPosition + 1 < weekHeaderIndices.length ? weekHeaderIndices[weekPosition + 1] : scheduleEndIndex;
  const block = lines.slice(startIndex, endIndex);
  const heading = block[0].match(/^# WEEK (\d+)(?:\s+—\s+(.+))?$/);
  const weekNumber = Number(heading[1]);
  const periodLabel = block.find((line, index) => index > 0 && /\d/.test(line) && /(?:augustus|september|oktober|november)/i.test(line))?.trim() || "";
  const plannedDistanceLabel = block.find((line) => /^±[\d,.]+(?:–[\d,.]+)?\s*km$/i.test(line.trim()))?.trim() || "";
  const workoutStarts = block.map((line, index) => (/^#{1,2}\s+Training\s+\d+(?:\s+—\s+.+)?$/i.test(line.trim()) ? index : -1)).filter((index) => index >= 0);
  const firstWorkout = workoutStarts[0] ?? block.length;
  const intro = block.slice(1, firstWorkout).map((line) => line.trim()).filter((line) => line && line !== periodLabel && line !== plannedDistanceLabel && !line.startsWith("#"));
  const workouts = workoutStarts.map((workoutStart, workoutPosition) => {
    const workoutEnd = workoutPosition + 1 < workoutStarts.length ? workoutStarts[workoutPosition + 1] : block.length;
    const workoutHeading = block[workoutStart].trim().match(/^#{1,2}\s+Training\s+(\d+)(?:\s+—\s+(.+))?$/i);
    return parseWorkout(weekNumber, Number(workoutHeading[1]), workoutHeading[2] || "", block.slice(workoutStart + 1, workoutEnd), psychologicalGoals[weekNumber] || "");
  });
  const startDate = addDays(scheduleStart, (weekNumber - 36) * 7);
  const weekId = `marathon-3u30-week-${weekNumber}`;
  const phaseId = phaseForWeek(weekNumber);
  const phaseName = phaseDefinitions.find((phase) => phase.phaseId === phaseId).name;
  workouts.forEach((workout) => {
    workout.weekId = weekId;
    workout.weekNumber = weekNumber;
    workout.dateLabel = periodLabel;
    workout.phaseId = phaseId;
    workout.phaseName = phaseName;
  });
  weeks.push({
    weekId,
    weekNumber,
    phaseId,
    phaseName,
    title: heading[2] || "",
    startDate,
    endDate: addDays(startDate, 6),
    periodLabel,
    plannedDistanceLabel: plannedDistanceLabel || (weekNumber === 47 ? "Marathonweek" : ""),
    plannedDistanceKm: plannedDistanceLabel ? parseDecimal(plannedDistanceLabel) : null,
    focus: [...intro, psychologicalGoals[weekNumber]].filter(Boolean).join(" "),
    mentalGoal: psychologicalGoals[weekNumber] || "",
    workouts,
  });
});

for (const phase of phaseDefinitions) {
  const phaseWeeks = weeks.filter((week) => week.weekNumber >= phase.startWeek && week.weekNumber <= phase.endWeek);
  phase.startDate = phaseWeeks[0]?.startDate || "";
  phase.endDate = phaseWeeks.at(-1)?.endDate || "";
}

const treadmillSegments = weeks.flatMap((week) => week.workouts)
  .filter((workout) => workout.surface === "loopband")
  .flatMap((workout) => flattenGroups(workout.groups).map((segment) => ({ workoutId: workout.workoutId, segment })));
const missingInclines = treadmillSegments.filter(({ segment }) => !Number.isFinite(Number(segment.inclinePercent)));
if (missingInclines.length) {
  throw new Error(`Helling ontbreekt in ${missingInclines.length} loopbandblokken: ${missingInclines.map(({ workoutId, segment }) => `${workoutId}/${segment.segmentId}`).join(", ")}`);
}

function linesBetween(startPattern, endPattern) {
  const start = lines.findIndex((line) => startPattern.test(line));
  const end = lines.findIndex((line, index) => index > start && endPattern.test(line));
  return lines.slice(start + 1, end < 0 ? lines.length : end).map((line) => line.trim()).filter(Boolean);
}

const paces = lines.slice(lines.findIndex((line) => /^\| Type \|/.test(line)) + 2).filter((line) => /^\|/.test(line)).map((line) => {
  const [type, speed, incline] = line.split("|").map((value) => value.trim()).filter(Boolean);
  return { type, speed, incline };
});

const raceStrategy = [
  { distance: "0–5 km", pace: "5:03–5:05/km", instruction: "Niet meegaan met mensen die te snel vertrekken." },
  { distance: "5–10 km", pace: "stabiliseren rond 5:00/km", instruction: "Langzaam naar het beoogde ritme gaan." },
  { distance: "10–30 km", pace: "4:59–5:00/km", instruction: "Gecontroleerd lopen en geen tijd proberen te winnen." },
  { distance: "30–35 km", pace: "tempo vasthouden", instruction: "De wedstrijd begint hier pas echt." },
  { distance: "35–40 km", pace: "op controle", instruction: "Alleen versnellen als er daadwerkelijk controle is." },
  { distance: "Laatste 2,2 km", pace: "op gevoel", instruction: "Alles wat nog beschikbaar is." },
];

const plan = {
  config: {
    planId: "marathon-3u30-definitief-2026",
    planVersion: 3,
    schemaVersion,
    sourceFile: path.basename(inputPath),
    planName: "Marathonschema 3:30 — definitieve versie",
    planSubtitle: "12 weken met confidence runs, drie officiële tests en taper",
    startDate: scheduleStart,
    endDate: "2026-11-22",
    marathonDate: "2026-11-22",
    targetTime: "3:30:00",
    targetPace: "4:58,6/km",
    targetSpeedKmh: 12,
    practicalMarathonSpeedKmh: 12,
    trainingFrequency: 4,
    primarySurface: "primair loopband",
  },
  phases: phaseDefinitions,
  weeks,
  guidance: {
    philosophy: linesBetween(/^# TRAININGSFILOSOFIE/, /^# TRAININGSSNELHEDEN/).filter((line) => !line.startsWith("#")),
    paces,
    scheduling: ["Vier loopdagen per week.", "Training 2 en Training 4 liefst met minimaal één rustdag ertussen.", "Geen structurele vijfde loopdag."],
    suggestedSequences: ["Training 1 → rust of herstel → Training 2 → minimaal één rustdag → Training 4", "Training 3 kan flexibel worden geplaatst zolang Training 2 en Training 4 niet direct op elkaar volgen."],
    rpeScale: [
      { type: "Easy", rpe: "3–4/10", feeling: "Volledige zinnen moeten mogelijk blijven." },
      { type: "Confidence/long run", rpe: "meestal 4–6/10", feeling: "Controle en tijd op de benen zijn belangrijker dan snelheid." },
      { type: "Kwaliteit/test", rpe: "volgens de specifieke criteria", feeling: "Niet harder dan de beschreven training vraagt." },
    ],
    incline: paces.map((item) => `${item.type}: ${item.incline}.`),
    painRules: ["Geen oplopende pijn- of blessureklachten accepteren.", "Herstel tussen trainingen moet goed blijven.", "Pas belasting aan bij pijn die tijdens het lopen toeneemt."],
    fueling: ["Gebruik lange duurlopen en confidence runs om voeding en drinken te testen.", "Verander trainingssnelheden nooit automatisch op basis van één testresultaat."],
    raceStrategy,
    targetConfirmation: linesBetween(/^# 3:30 — GROEN LICHT/, /^# REGELS VOOR DE HTML-APP/).filter((line) => line.startsWith("-")).map((line) => line.replace(/^[-*]\s*/, "")),
    officialTests: [
      { week: 40, training: 2, title: "TEST 1 — 5 km benchmark", question: "Hoeveel is mijn snelheid/drempel verbeterd?" },
      { week: 43, training: 2, title: "TEST 2 — 3 × 15 min @ 12 km/u", question: "Hoe comfortabel is mijn beoogde marathonpace geworden?" },
      { week: 44, training: 4, title: "TEST 3 — 28,7 km met marathonpace na 85 minuten", question: "Kan ik marathonpace ook onder vermoeidheid beheersen?" },
    ],
  },
};

if (weeks.length !== 12 || weeks.some((week) => week.workouts.length !== 4)) {
  throw new Error(`Schema onvolledig: ${weeks.length} weken; trainingen per week: ${weeks.map((week) => `${week.weekNumber}:${week.workouts.length}`).join(", ")}`);
}

const output = `(function () {\n  "use strict";\n\n  const MARATHON_PLAN = ${JSON.stringify(plan, null, 2)};\n\n  function segmentDurationSeconds(segment) {\n    if (segment.durationSeconds) return segment.durationSeconds;\n    if (segment.distanceKm && segment.speedKmh) return Math.round((segment.distanceKm / segment.speedKmh) * 3600);\n    return 0;\n  }\n\n  function flattenWorkoutSegments(workout) {\n    const result = [];\n    (workout.groups || []).forEach((group) => {\n      const repeats = group.kind === "repeat" ? group.repetitions || 1 : 1;\n      for (let repeat = 1; repeat <= repeats; repeat += 1) {\n        (group.segments || []).forEach((segment, index) => {\n          if (group.omitRecoveryAfterLast && repeat === repeats && index === group.segments.length - 1 && segment.isRecovery) return;\n          result.push({ ...segment, groupLabel: group.label, repeat, repeats, executionId: segment.segmentId + "-r" + repeat });\n        });\n      }\n    });\n    return result;\n  }\n\n  function calculateWorkoutDistanceKm(workout) {\n    return flattenWorkoutSegments(workout).reduce((total, segment) => {\n      if (segment.distanceKm) return total + segment.distanceKm;\n      return total + ((segment.durationSeconds || 0) / 3600) * (segment.speedKmh || 0);\n    }, 0);\n  }\n\n  function calculateWeekDistanceKm(week) {\n    return (week.workouts || []).reduce((total, workout) => total + (workout.estimatedDistanceKm || calculateWorkoutDistanceKm(workout)), 0);\n  }\n\n  window.MARATHON_PLAN = MARATHON_PLAN;\n  window.APP_CONFIG = MARATHON_PLAN.config;\n  window.TRAINING_WEEKS = MARATHON_PLAN.weeks;\n  window.TRAINING_PLAN = MARATHON_PLAN.phases.map((phase) => ({ ...phase, weeks: MARATHON_PLAN.weeks.filter((week) => week.phaseId === phase.phaseId) }));\n  window.MARATHON_MODEL = { segmentDurationSeconds, flattenWorkoutSegments, calculateWorkoutDistanceKm, calculateWeekDistanceKm };\n})();\n`;

fs.writeFileSync(outputPath, output);
console.log(`Gegenereerd: ${weeks.length} weken en ${weeks.flatMap((week) => week.workouts).length} trainingen uit ${path.basename(inputPath)}.`);
