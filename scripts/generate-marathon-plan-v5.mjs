import fs from "node:fs";
import path from "node:path";

const input = process.argv[2] || "marathonschema_Roy_FINAL_V5_GARMIN_OUTDOOR_2026-10-03.md";
const output = process.argv[3] || "training-data.js";
const source = fs.readFileSync(input, "utf8").replace(/\r/g, "");
const SCHEMA_VERSION = "marathon-final-v5-garmin-outdoor-2026.10.03-1";
const PLAN_ID = "marathon-final-v5-2026";

if (!source.includes("# Marathonschema Roy — FINAL V5 — Garmin / Outdoor")) {
  throw new Error("De opgegeven bron is niet het definitieve V5-schema.");
}

const clean = (value) => String(value || "").replace(/\*\*/g, "").replace(/`/g, "").replace(/<br\s*\/?\s*>/gi, " ").replace(/\s+/g, " ").trim();
const numberNl = (value) => Number(String(value).replace(",", "."));
const displayMinutes = (seconds) => seconds % 60 === 0 ? `${seconds / 60} min` : `${Math.floor(seconds / 60)} min ${seconds % 60} sec`;
const localIso = (dutchDate) => { const [day, month, year] = dutchDate.split("-"); return `${year}-${month}-${day}`; };
const localDate = (iso) => new Date(`${iso}T12:00:00`);
const titleCase = (value) => value ? value[0].toUpperCase() + value.slice(1) : "";
const weekday = (iso) => titleCase(localDate(iso).toLocaleDateString("nl-NL", { weekday: "long" }));
const dateLabel = (start, end) => `${localDate(start).toLocaleDateString("nl-NL", { day: "numeric", month: "long" })} t/m ${localDate(end).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}`;

function tableRows(block) {
  return block.split("\n")
    .filter((line) => /^\|.*\|\s*$/.test(line.trim()))
    .map((line) => line.trim().slice(1, -1).split("|").map(clean))
    .filter((cells) => !/^[-:]+$/.test(cells[0]) && cells[0] !== "Stap");
}

function parseDuration(text) {
  const value = clean(text);
  const repeat = value.match(/^(\d+)\s*[×x]\s*(\d+(?:[.,]\d+)?)\s*(min|sec)/i);
  const plain = value.match(/(\d+(?:[.,]\d+)?)\s*(min|sec)/i);
  const match = repeat || plain;
  if (!match) return { seconds: null, repetitions: 1 };
  const amount = numberNl(repeat ? match[2] : match[1]);
  const unit = repeat ? match[3] : match[2];
  return { seconds: Math.round(amount * (unit.toLowerCase() === "min" ? 60 : 1)), repetitions: repeat ? Number(match[1]) : 1 };
}

function parseTreadmill(text) {
  const value = clean(text);
  const speeds = [...value.split(";")[0].matchAll(/\d+(?:[.,]\d+)?/g)].map((match) => numberNl(match[0]));
  const incline = value.match(/;\s*(\d+(?:[.,]\d+)?)%/);
  return { speedRangeKmh: speeds.length ? [Math.min(...speeds), Math.max(...speeds)] : null, inclinePercent: incline ? numberNl(incline[1]) : null };
}

function segmentType(step, target, cue) {
  const text = `${step} ${target} ${cue}`.toLowerCase();
  const prescribed = String(target || "").toLowerCase();
  if (/warming/.test(String(step).toLowerCase())) return /wandel/.test(prescribed) ? "wandelen" : "warming-up";
  if (/cooldown/.test(String(step).toLowerCase())) return /wandel/.test(prescribed) ? "wandelen" : "cooling-down";
  if (/herstel/.test(String(step).toLowerCase())) return /wandel/.test(prescribed) ? "wandelen" : "easy";
  if (/stride/.test(text)) return "stride";
  if (/ritme/.test(text)) return "ritme";
  if (/fiets/.test(text)) return "fietsen";
  if (/wandel/.test(text)) return "wandelen";
  return "easy";
}

function makeSegment(workoutId, index, row, bike) {
  const duration = parseDuration(row[1]);
  const targetType = bike ? "Open / Vrij" : clean(row[2]) || "Open / Vrij";
  const targetValue = bike ? clean(row[2]) : clean(row[3]);
  const cue = bike ? clean(row[3]) : clean(row[4]);
  const treadmill = bike ? { speedRangeKmh: null, inclinePercent: null } : parseTreadmill(row[5]);
  const speedRangeKmh = treadmill.speedRangeKmh;
  return {
    segmentId: `${workoutId}-s${String(index + 1).padStart(2, "0")}`,
    basis: "time", name: clean(row[0]), type: segmentType(row[0], targetValue, cue),
    display: displayMinutes(duration.seconds), durationSeconds: duration.seconds,
    targetType: targetType.replace("Open/Vrij", "Open / Vrij"), targetValue: targetValue || "Vrij", cue, instruction: cue,
    repetitions: duration.repetitions, speedRangeKmh,
    speedKmh: speedRangeKmh ? Number(((speedRangeKmh[0] + speedRangeKmh[1]) / 2).toFixed(2)) : null,
    inclinePercent: treadmill.inclinePercent, isRecovery: /herstel/i.test(row[0]),
  };
}

function groupSegments(workoutId, rows, bike = false) {
  const groups = [];
  let segmentIndex = 0;
  for (let index = 0; index < rows.length; index += 1) {
    const segment = makeSegment(workoutId, segmentIndex++, rows[index], bike);
    if (segment.repetitions > 1) {
      const next = rows[index + 1] ? makeSegment(workoutId, segmentIndex, rows[index + 1], bike) : null;
      const paired = next?.repetitions === segment.repetitions && next.isRecovery;
      const segments = [{ ...segment, repetitions: 1 }];
      if (paired) { segments.push({ ...next, repetitions: 1 }); segmentIndex += 1; index += 1; }
      groups.push({ groupId: `${workoutId}-g${groups.length + 1}`, kind: "repeat", label: segment.name, repetitions: segment.repetitions, omitRecoveryAfterLast: false, segments });
    } else {
      groups.push({ groupId: `${workoutId}-g${groups.length + 1}`, kind: "sequence", label: segment.name, repetitions: 1, segments: [{ ...segment, repetitions: 1 }] });
    }
  }
  return groups;
}

function flattenGroups(groups) {
  const result = [];
  for (const group of groups || []) {
    const repeats = group.kind === "repeat" ? group.repetitions : 1;
    for (let repeat = 1; repeat <= repeats; repeat += 1) for (const segment of group.segments || []) result.push({ ...segment, repeat, repeats });
  }
  return result;
}

const groupsDuration = (groups) => flattenGroups(groups).reduce((sum, segment) => sum + Number(segment.durationSeconds || 0), 0);
const paragraphAfter = (block, label) => clean(block.match(new RegExp(`\\*\\*${label}:\\*\\*\\s*([^\\n]+)`, "i"))?.[1] || "");
const programSummary = (groups) => groups.map((group) => {
  const steps = group.segments.map((segment) => `${segment.display} [${segment.targetValue}; Vrij]`).join(" + ");
  return group.kind === "repeat" ? `REPEAT ${group.repetitions}× [${steps}]` : steps;
}).join(" → ");

function inferRole(title, groups, type) {
  if (type === "bike") return "bike";
  if (/run-walk|rustige duur/i.test(title)) return "runwalk";
  if (/continu/i.test(title)) return "continuous";
  if (/ritmeproef/i.test(title)) return "rhythm";
  if (flattenGroups(groups).some((segment) => segment.type === "stride")) return "strides";
  return "short";
}

function parseWorkout(weekNumber, variant, heading, block) {
  const match = heading.match(/^(\d{2}-\d{2}-\d{4})\s+—\s+(.+?)\s+·\s+(\d+)\s+min$/);
  if (!match) return null;
  const date = localIso(match[1]);
  const title = clean(match[2]);
  const declaredMinutes = Number(match[3]);
  const type = /\*\*Type:\*\*\s*`?bike/i.test(block) ? "bike" : "run";
  const sourceId = block.match(/\*\*ID:\*\*\s*`([^`]+)`/)?.[1];
  const workoutId = sourceId || `V5-W${weekNumber}-${type.toUpperCase()}-${date}`;
  const rows = tableRows(block).filter((row) => row.length >= (type === "bike" ? 4 : 6));
  const groups = groupSegments(workoutId, rows, type === "bike");
  const totalPlannedSeconds = groupsDuration(groups);
  if (totalPlannedSeconds !== declaredMinutes * 60) throw new Error(`${workoutId}: tabelduur ${totalPlannedSeconds / 60} wijkt af van ${declaredMinutes} min`);
  const flat = flattenGroups(groups);
  const walkSeconds = flat.filter((segment) => segment.type === "wandelen").reduce((sum, segment) => sum + segment.durationSeconds, 0);
  const role = variant === "optional" ? "rhythm" : inferRole(title, groups, type);
  const goal = paragraphAfter(block, "Doel") || (type === "bike" ? "Rustige aerobe ondersteuning met minder impact." : "Ontspannen uitvoeren en herstel bewaken.");
  const nutrition = [...block.matchAll(/Voeding:\s*([^\n]+)/gi)].map((item) => clean(item[1])).join(" ");
  const garminSummary = block.match(/\*\*Programmeer in Garmin als:\*\*\s*`([^`]+)`/)?.[1] || programSummary(groups);
  return {
    workoutId, sourceWorkoutId: workoutId, weekNumber, variant, role, trainingNumber: null,
    trainingLabel: type === "bike" ? "Fiets" : "Training", title,
    category: type === "bike" ? "fiets" : role === "runwalk" ? "lange-duur" : "easy", activityType: type,
    tone: type === "bike" ? "steady" : role === "runwalk" ? "long" : role === "rhythm" ? "steady" : "easy",
    labels: [type === "bike" ? "FIETS" : role === "runwalk" ? "RUN-WALK" : role === "rhythm" ? "OPTIONELE RITMEPROEF" : "EASY", "OPEN / VRIJ"],
    surface: type === "bike" ? "buiten of hometrainer" : "buiten", date, weekday: weekday(date), fixedDay: weekNumber >= 45,
    groups, totalPlannedSeconds, totalPlannedLabel: `${declaredMinutes} min`, plannedSessionMinutes: declaredMinutes,
    plannedRunMinutes: type === "run" ? (totalPlannedSeconds - walkSeconds) / 60 : 0,
    plannedWalkMinutes: type === "run" ? walkSeconds / 60 : 0, plannedBikeMinutes: type === "bike" ? declaredMinutes : 0,
    estimatedDistanceKm: null, estimatedDistanceLabel: type === "bike" ? "Afstand vrij" : "Afstand na afloop", sourceSummary: `${declaredMinutes} min · afstand vrij`,
    goal, targetRpe: role === "rhythm" ? "maximaal 4" : "2–3", mentalGoal: "Eindig met reserve; herstel is belangrijker dan de klok.", rationale: goal,
    detailsSections: [], notes: role === "strides" ? ["Strides alleen bij normale benen; op de loopband standaard de easy-variant."] : [],
    recoveryStatus: "required", recoveryLabel: "Herstel bepaalt de uitvoering",
    recoveryAdvice: "Verlaag, wandel of stop wanneer benen, pijn, RPE of techniek daarom vragen. Gemiste minuten worden niet ingehaald.",
    orderWarning: "Lokale of toenemende pijn, manken of veranderde techniek: stop met lopen en beoordeel herstel.",
    locationStatus: type === "bike" ? "Buiten of hometrainer" : "Outdoor standaard · loopbandoptie",
    outsideVariant: type === "bike" ? "Geen loopbandalternatief; een hometrainer is wel geschikt." : "Vlakke bekende route. Open target: praattest en RPE zijn leidend; Polar H9 is observatie.",
    outdoorSimpleMode: false, treadmillVariantAvailable: type === "run", defaultExecutionMode: "garmin", treadmillAvailable: type === "run",
    fueling: type === "run" && declaredMinutes >= 65, fullFuelRehearsal: false,
    nutrition: nutrition || (declaredMinutes <= 60 ? "Geen verplichte gel; normaal eten en drinken naar behoefte." : declaredMinutes <= 70 ? "Een vertrouwd voedingsmoment is optioneel." : "Oefen 30–60 g koolhydraten per uur als dit al goed wordt verdragen."),
    shoes: "Vertrouwde trainingsschoenen. Geen afzonderlijke zware schoenentest toevoegen.", confidence: false, strength: null,
    isExtra: false, isFitnessCheck: false, isTest: role === "rhythm", evaluation: null,
    protocolSignature: JSON.stringify(flat.map((segment) => [segment.durationSeconds, segment.targetValue, segment.speedRangeKmh, segment.inclinePercent])),
    garmin: { sourceHeading: heading, totalSeconds: totalPlannedSeconds, referenceDistanceLabel: type === "bike" ? "Afstand vrij" : "Achteraf gemeten", programSummary: garminSummary,
      groups: groups.map((group) => ({ ...group, segments: group.segments.map(({ speedKmh, speedRangeKmh, inclinePercent, ...segment }) => ({ ...segment, targetType: "Open / Vrij" })) })) },
  };
}

const weekMeta = {
  41: { dates: ["2026-10-05", "2026-10-11"], phase: "active-recovery", type: "Actief herstel", focus: "Herstellen, vier rustige loopcontacten en één fietsrit; geen echte lange duurloop." },
  42: { dates: ["2026-10-12", "2026-10-18"], phase: "rebuild", type: "Heropbouw", focus: "Alleen na bevestigde GREEN een kleine duurstap; anders de ORANGE-fallback." },
  43: { dates: ["2026-10-19", "2026-10-25"], phase: "consolidate", type: "Basis consolideren", focus: "Rustige outdoorbelasting consolideren zonder kwaliteit toe te voegen." },
  44: { dates: ["2026-10-26", "2026-11-01"], phase: "last-progression", type: "Laatste kleine duurstap", focus: "Laatste mogelijke langere opbouw vóór de taper; herstel en caps blijven leidend." },
  45: { dates: ["2026-11-02", "2026-11-08"], phase: "taper-1", type: "Taper 1", focus: "Belasting terugbrengen vanaf de werkelijk verdragen basis; geen gemiste piek inhalen." },
  46: { dates: ["2026-11-09", "2026-11-15"], phase: "taper-2", type: "Taper 2", focus: "Verder afbouwen, ritme behouden en uiterlijk 15 november het startbesluit beoordelen." },
  47: { dates: ["2026-11-16", "2026-11-22"], phase: "race-week", type: "Frisheid / marathon", focus: "Korte rustige loopjes, herstellen en alleen starten op basis van de actuele beoordeling." },
};

function parseAllWorkouts() {
  const lines = source.split("\n");
  const workouts = [];
  let weekNumber = null;
  let variant = "max";
  for (let index = 0; index < lines.length; index += 1) {
    const week = lines[index].match(/^## Week (4[1-7])\b/);
    if (week) { weekNumber = Number(week[1]); variant = "max"; continue; }
    if (!weekNumber) continue;
    if (/^### ORANGE-uitvoering/.test(lines[index])) { variant = "orange"; continue; }
    if (/^### Optionele ritmeproef/.test(lines[index])) { variant = "optional"; continue; }
    const headingMatch = lines[index].match(/^### (\d{2}-\d{2}-\d{4}\s+—\s+.+?\s+·\s+\d+\s+min)$/);
    if (!headingMatch) continue;
    const start = index + 1;
    let end = start;
    while (end < lines.length && !/^#{2,3} /.test(lines[end])) end += 1;
    const workout = parseWorkout(weekNumber, variant, headingMatch[1], lines.slice(start, end).join("\n"));
    if (workout) workouts.push(workout);
    index = end - 1;
  }
  return workouts;
}

function makeRace() {
  return {
    workoutId: "V5-RACE-2026-11-22", sourceWorkoutId: "V5-RACE-2026-11-22", weekNumber: 47, variant: "race", role: "race",
    trainingNumber: 4, trainingLabel: "Marathon", title: "Marathon", category: "wedstrijd", activityType: "race", tone: "race",
    labels: ["MARATHON", "STARTBESLUIT NOG OPEN"], surface: "buiten", date: "2026-11-22", weekday: "Zondag", fixedDay: true,
    groups: [], totalPlannedSeconds: null, totalPlannedLabel: "Duur nog niet vastgesteld", plannedSessionMinutes: 0, plannedRunMinutes: 0, plannedWalkMinutes: 0, plannedBikeMinutes: 0,
    estimatedDistanceKm: 42.195, estimatedDistanceLabel: "42,195 km", sourceSummary: "42,195 km · raceplan nog te bepalen",
    goal: "Alleen starten na de finale beoordeling; de start is geen automatisch gevolg van het schema.", targetRpe: "eerste deel 2–3",
    mentalGoal: "Geen oude eindtijd redden en niets nieuws proberen.",
    rationale: "V5 bewaart de marathon als doel, maar erkent het ongeteste gat tussen maximaal 95 minuten en 42,195 km.",
    detailsSections: [{ title: "Wedstrijdstrategie", items: ["Huidig tijdsdoel en racepace zijn nog niet vastgesteld.", "Een 4:1 run-walkstrategie is slechts een kandidaat na expliciete bevestiging.", "Bij toenemende pijn of veranderde techniek stoppen."] }],
    notes: [], recoveryStatus: "required", recoveryLabel: "Startbesluit vereist",
    recoveryAdvice: "Checkpoint 4, actuele klachten en de werkelijk opgebouwde basis bepalen of starten verantwoord is.",
    orderWarning: "Run-walk en voeding compenseren ontbrekende belastbaarheid niet.", locationStatus: "Officiële buitenwedstrijd",
    outsideVariant: "Gewone Garmin-hardloopactiviteit; geen eindige 95-minuten-workout en geen verplicht racetempo.",
    outdoorSimpleMode: false, treadmillVariantAvailable: false, defaultExecutionMode: "garmin", treadmillAvailable: false,
    fueling: true, nutrition: "Gebruik alleen een vooraf bewezen voedingsstrategie. 60–80 g/uur kan passend zijn; 80 alleen als getraind en 90 alleen als aantoonbaar verdragen.",
    shoes: "Alleen vertrouwde schoenen die eerder klachtenvrij zijn gebruikt.", confidence: false, strength: null, isTest: false,
    protocolSignature: "V5-race-open-target-42.195",
    garmin: { isRacePlan: true, referenceDistanceLabel: "42,195 km", programSummary: "Gewone activiteit Hardlopen · target Open / Vrij · stop bij de officiële finish",
      raceGuidance: ["Geen huidig eindtijddoel of verplichte 4:59/km.", "Lap pace en gevoel zijn observatie; geen agressieve reactie op instant pace.", "Optionele 4:1-alerts alleen na expliciet start- en strategieadvies."], groups: [] },
  };
}

const allWorkouts = [...parseAllWorkouts(), makeRace()];
const weekVariants = {};
for (const weekNumber of Object.keys(weekMeta).map(Number)) {
  const items = allWorkouts.filter((workout) => workout.weekNumber === weekNumber);
  weekVariants[weekNumber] = {
    max: items.filter((workout) => workout.variant === "max" && workout.activityType !== "bike"),
    orange: items.filter((workout) => workout.variant === "orange"),
    optional: items.filter((workout) => workout.variant === "optional"),
    shared: items.filter((workout) => workout.activityType === "bike" || workout.variant === "race"),
  };
}

function finalizeWorkout(workout, trainingNumber) {
  const meta = weekMeta[workout.weekNumber];
  return { ...workout, trainingNumber,
    trainingLabel: workout.activityType === "bike" ? "Fiets" : workout.activityType === "race" ? "Marathon" : `Training ${trainingNumber}`,
    weekId: `marathon-v5-w${workout.weekNumber}`, dateLabel: dateLabel(meta.dates[0], meta.dates[1]), phaseId: meta.phase, phaseName: meta.type };
}

function sortAndNumber(items) {
  let runIndex = 0;
  return [...items].sort((a, b) => a.date.localeCompare(b.date) || a.activityType.localeCompare(b.activityType)).map((workout) => {
    if (workout.activityType === "run") runIndex += 1;
    return finalizeWorkout(workout, workout.activityType === "race" ? 4 : workout.activityType === "run" ? runIndex : null);
  });
}

function makeDays(weekNumber, workouts) {
  const start = localDate(weekMeta[weekNumber].dates[0]);
  return Array.from({ length: 7 }, (_, offset) => {
    const date = new Date(start);
    date.setDate(date.getDate() + offset);
    const iso = [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
    const scheduled = workouts.filter((workout) => workout.date === iso);
    return scheduled.length
      ? { date: iso, weekday: weekday(iso), workoutIds: scheduled.map((workout) => workout.workoutId), workoutId: scheduled[0].workoutId, isRestDay: false }
      : { date: iso, weekday: weekday(iso), isRestDay: true, note: "Rust, herstel en normale dagelijkse beweging." };
  });
}

const totals = (workouts) => workouts.reduce((result, workout) => ({
  session: result.session + (workout.activityType === "run" ? Number(workout.plannedSessionMinutes || 0) : 0), run: result.run + Number(workout.plannedRunMinutes || 0),
  walk: result.walk + Number(workout.plannedWalkMinutes || 0), bike: result.bike + Number(workout.plannedBikeMinutes || 0),
}), { session: 0, run: 0, walk: 0, bike: 0 });

const initialWeeks = Object.keys(weekMeta).map(Number).map((weekNumber) => {
  const variants = weekVariants[weekNumber];
  const selected = weekNumber === 41 || weekNumber >= 45 ? variants.max : variants.orange;
  const workouts = sortAndNumber([...selected, ...variants.shared]);
  const volume = totals(workouts.filter((workout) => workout.activityType !== "race"));
  const meta = weekMeta[weekNumber];
  return {
    weekId: `marathon-v5-w${weekNumber}`, weekNumber, phaseId: meta.phase, phaseName: meta.type,
    startDate: meta.dates[0], endDate: meta.dates[1], periodLabel: dateLabel(meta.dates[0], meta.dates[1]), weekType: meta.type, focus: meta.focus,
    includesMarathon: weekNumber === 47, planningMode: "calendar", suggestedPattern: "Voorkeursdagen met rust ertussen; bij verschuiven niet samenpersen.",
    status: "orange", variant: weekNumber === 41 ? "recovery-max" : weekNumber >= 45 ? "scaled" : "orange",
    plannedSessionMinutes: volume.session, plannedRunMinutes: volume.run, plannedWalkMinutes: volume.walk, plannedBikeMinutes: volume.bike,
    workouts, days: makeDays(weekNumber, workouts),
    weekPhilosophy: { theme: meta.type, summary: meta.focus, adaptations: ["OPEN / VRIJ", "OUTDOOR", weekNumber >= 45 ? "TAPER" : "HERSTELGESTUURD"],
      why: [meta.focus, "RPE, praatcomfort, techniek en herstel bepalen of de kalendermaxima passend zijn."],
      targetLink: "De historische ambitie 3:30 blijft context, maar is geen actief tempo- of tijdsvoorschrift.",
      whyNotMore: "Geen gemiste kilometers inhalen en geen extra kwaliteit toevoegen. De laatst goed verdragen belasting is leidend.",
      confidence: "Vertrouwen komt uit normale benen, stabiele techniek en herhaald goed herstel." },
  };
});

const phases = initialWeeks.map((week, index) => ({ phaseId: week.phaseId, name: week.phaseName, shortName: week.phaseName, number: index + 1,
  startWeek: week.weekNumber, endWeek: week.weekNumber, startDate: week.startDate, endDate: week.endDate, description: week.focus }));

const plan = {
  config: { planId: PLAN_ID, planVersion: 13, schemaVersion: SCHEMA_VERSION, sourceFile: path.basename(input), planName: "Marathon 2026",
    planSubtitle: "FINAL V5 · Garmin / Outdoor", startDate: "2026-10-05", endDate: "2026-11-22", marathonDate: "2026-11-22", raceDistanceKm: 42.195,
    targetTime: null, targetPace: null, targetSpeedKmh: null, practicalMarathonSpeedKmh: null, historicalAmbition: "3:30",
    trainingFrequency: "4 runs + 1 fietsrit; raceweek 3 korte runs", primarySurface: "Outdoor / Garmin, met loopbandoptie op 0%", volumeUnit: "minutes" },
  phases, weeks: initialWeeks, allWorkouts: allWorkouts.map((workout) => finalizeWorkout(workout, workout.trainingNumber)), weekVariants,
  workoutAliases: {}, sourceDiscrepancies: [],
  guidance: {
    philosophy: ["Herstel, ontspannen buiten lopen en hardloopspecifieke belastbaarheid gaan vóór kalendermaxima.", "Easy betekent RPE 2–3 en volledige zinnen. Polar H9 is observatie, geen verplichte zone.", "Geen gemiste kilometers inhalen, geen krachttraining en geen zwaar marathonpace- of confidence-werk in de actieve V5-planning.", "GREEN staat maximaal één kleine duurstap toe; ORANGE verhoogt niet; RED schort lopen op.", "De marathon blijft een doel, maar de historische 3:30-ambitie is geen actief trainingsvoorschrift of startgarantie."],
    surfaceStrategy: { title: "Outdoor standaard · loopband als alternatief", explanation: "Outdoor is leidend voor herstelchecks. De loopband gebruikt dezelfde duur en structuur met 0% en aanpasbare startbereiken.", treadmill: ["0% helling", "Easy 7–9 km/u", "Praattest en RPE leidend"], outside: ["Open / Vrij", "Vlakke bekende route", "Polar H9 alleen observeren"] },
    paces: [{ type: "Easy", speed: "Vrij buiten · 7–9 km/u als bandstartbereik", incline: "0%", rpe: "2–3" }, { type: "Wandelen", speed: "Vrij buiten · 4–5,5 km/u als bandstartbereik", incline: "0%", rpe: "zeer rustig" }, { type: "Optionele ritmeproef", speed: "Zelf gekozen gecontroleerd ritme", incline: "0%", rpe: "maximaal 4" }],
    rpeScale: [{ type: "Easy", rpe: "2–3", feeling: "Volledige zinnen en duidelijke reserve." }, { type: "Ritmeproef", rpe: "maximaal 4", feeling: "Alleen na alle checkpoints, nooit als extra training." }],
    scheduling: ["W41–44 gebruiken voorkeursdagen; behoud rust en volgorde bij verschuiven.", "W45–47 hebben vaste dagen. Herstelproblemen mogen altijd tot inkorten of overslaan leiden."],
    suggestedSequences: ["Dinsdag easy · donderdag continuous · vrijdag fiets · zaterdag easy · zondag run-walk."], incline: ["Alle loopbandstappen gebruiken 0%.", "Geen automatische 1%-correctie."],
    painRules: ["GREEN: alleen na alle herstelcriteria.", "ORANGE: niet verhogen en geen snelheid.", "RED: lopen pauzeren en oorzaak beoordelen."],
    fueling: ["Tot en met 60 min: normaal gevoed starten; geen verplichte gel.", "65–70 min: eventueel één vertrouwd voedingsmoment, zonder 80 g/u-plicht.", "80–95 min: oefen 30–60 g koolhydraten per uur naar tolerantie.", "Eventuele marathon: doorgaans alleen een bewezen 60–80 g/u; 80 g/u is geen verplichting en 90 g/u alleen als eerder verdragen.", "SiS Beta Fuel Neutral en Bulk Electrolytes blijven opties als etiket, waterinname en tolerantie kloppen. Sportdrank telt mee; tel koolhydraten niet dubbel.", "Niets nieuws op racedag, inclusief cafeïne. Controleer waterposten en tijdslimiet vóór het definitieve racebesluit."],
    raceStrategy: [{ distance: "Startbesluit", pace: "nog open", instruction: "Checkpoint 4 en actuele belastbaarheid zijn leidend." }, { distance: "Race", pace: "nog niet vastgesteld", instruction: "Geen oude 3:30-pace afdwingen." }],
    targetConfirmation: ["Er is momenteel geen actieve eindtijd of racepace.", "Een comfortabele 95-minuten-sessie laat nog een groot ongetest gat naar 42,195 km."],
    testTimeline: ["Checkpoint 1: 11 oktober; herstel uiterlijk 13 oktober bevestigen.", "Checkpoint 2: 18 oktober; herstel uiterlijk 20 oktober bevestigen.", "Checkpoint 3: 1 november; herstel uiterlijk 3 november bevestigen.", "Checkpoint 4: 8 november; kies voorlopig run-walk, comfortabel uitlopen of deelname heroverwegen.", "Definitieve start- en strategiebeoordeling uiterlijk 15 november."],
  },
};

function installModel() {
  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function segmentDurationSeconds(segment) { return Number(segment?.durationSeconds || 0); }
  function flattenWorkoutSegments(workout) {
    const result = [];
    for (const group of workout?.groups || []) {
      const repeats = group.kind === "repeat" ? Number(group.repetitions || 1) : 1;
      for (let repeat = 1; repeat <= repeats; repeat += 1) for (const segment of group.segments || []) {
        result.push({ ...segment, groupLabel: group.label, repeat, repeats, executionId: `${segment.segmentId}-r${repeat}` });
      }
    }
    return result;
  }
  function calculateWorkoutDistanceKm(_workout, log) {
    const value = Number(log?.actualDistanceKm ?? log?.distanceKm);
    return Number.isFinite(value) && value >= 0 ? value : 0;
  }
  function calculateWeekDistanceKm(week, _includeRace = true, logs = {}) {
    return (week?.workouts || []).reduce((sum, workout) => sum + calculateWorkoutDistanceKm(workout, logs[workout.workoutId]), 0);
  }
  function sumLoad(workouts) {
    return (workouts || []).reduce((result, workout) => ({
      session: result.session + (workout.activityType === "run" ? Number(workout.plannedSessionMinutes || 0) : 0), run: result.run + Number(workout.plannedRunMinutes || 0),
      walk: result.walk + Number(workout.plannedWalkMinutes || 0), bike: result.bike + Number(workout.plannedBikeMinutes || 0),
    }), { session: 0, run: 0, walk: 0, bike: 0 });
  }
  function completedLoad(appData, weekNumber) {
    const logs = Object.values(appData?.workoutLogs || {}).filter((log) => Number(log.weekNumber) === Number(weekNumber) || String(log.workoutId || "").includes(`W${weekNumber}-`));
    return logs.reduce((result, log) => ({
      session: result.session + Number(log.actualTotalMinutes || 0), run: result.run + Number(log.actualRunMinutes || 0),
      walk: result.walk + Number(log.actualWalkMinutes || 0), bike: result.bike + Number(log.actualBikeMinutes || 0),
    }), { session: 0, run: 0, walk: 0, bike: 0 });
  }
  function greenCriteria(decision, weekNumber, appData) {
    const checks = decision?.criteria || {};
    const base = ["noPain", "normalRecovery", "easyImproved", "continuousEvidence", "notStoppedEarly"].every((key) => checks[key] === true);
    if (!(base && decision?.recoveryConfirmed === true)) return false;
    if (weekNumber === 42) {
      const w41 = completedLoad(appData || {}, 41);
      return checks.w41NinetyPercent === true && w41.session >= 166.5;
    }
    if ([43, 44].includes(weekNumber)) {
      const previousDecision = appData?.userSettings?.weekDecisions?.[weekNumber - 1] || {};
      return previousDecision.wellTolerated === true && completedLoad(appData || {}, weekNumber - 1).session > 0;
    }
    if (weekNumber === 45) {
      return ["twoContinuousOutdoor", "longRunWalkOutdoor", "nutritionTolerated", "noRecentSetback"].every((key) => checks[key] === true)
        && decision?.wellTolerated === true;
    }
    return true;
  }
  function effectiveStatus(appData, weekNumber) {
    const decision = appData?.userSettings?.weekDecisions?.[weekNumber] || {};
    if (decision.status === "red") return "red";
    if (decision.status === "green" && greenCriteria(decision, weekNumber, appData)) return "green";
    return "orange";
  }
  function deriveTaperBasis(appData) {
    let previous = null;
    let basis = 0;
    for (const weekNumber of [41, 42, 43, 44]) {
      const decision = appData?.userSettings?.weekDecisions?.[weekNumber] || {};
      if (!decision.wellTolerated) continue;
      const load = completedLoad(appData, weekNumber);
      if (!(load.session > 0) || (previous != null && load.session > previous * 1.1 + 0.001)) continue;
      basis = Math.min(240, load.session);
      previous = load.session;
    }
    return { basisMinutes: basis, scale: basis > 0 ? Math.min(1, basis / 240) : 0 };
  }
  function deriveTaperReference(appData) {
    let previous = null;
    let referenceWeek = null;
    for (const weekNumber of [41, 42, 43, 44]) {
      const decision = appData?.userSettings?.weekDecisions?.[weekNumber] || {};
      if (!decision.wellTolerated) continue;
      const load = completedLoad(appData, weekNumber);
      if (!(load.session > 0) || (previous != null && load.session > previous * 1.1 + 0.001)) continue;
      previous = load.session;
      referenceWeek = weekNumber;
    }
    if (!referenceWeek) return { weekNumber: null, runLogs: [], runCaps: {}, bikeMinutes: 0 };
    const logs = Object.values(appData?.workoutLogs || {}).filter((log) => Number(log.weekNumber) === referenceWeek);
    const runLogs = logs.filter((log) => log.activityType === "run" && Number(log.actualTotalMinutes) > 0)
      .sort((a, b) => String(a.workoutDate || a.completedDate || a.updatedAt || "").localeCompare(String(b.workoutDate || b.completedDate || b.updatedAt || "")));
    const roleFallback = ["short", "continuous", "short", "runwalk"];
    const runCaps = {};
    runLogs.forEach((log, index) => { runCaps[log.role || roleFallback[index]] = Math.floor(Number(log.actualTotalMinutes)); });
    const bikeMinutes = logs.filter((log) => log.activityType === "bike").reduce((max, log) => Math.max(max, Number(log.actualBikeMinutes || 0)), 0);
    return { weekNumber: referenceWeek, runLogs, runCaps, bikeMinutes };
  }
  function rebuildTimedWorkout(workout, targetMinutes) {
    const result = clone(workout);
    const target = Math.max(0, Math.floor(Number(targetMinutes || 0)));
    if (!target) return { ...result, isSkipped: true, totalPlannedSeconds: 0, plannedSessionMinutes: 0, plannedRunMinutes: 0, plannedWalkMinutes: 0, plannedBikeMinutes: 0, totalPlannedLabel: "Overslaan" };
    if (result.role === "runwalk") {
      const repeats = Math.max(1, Math.floor((target - 10) / 5));
      const duration = 10 + repeats * 5;
      const repeat = result.groups.find((group) => group.kind === "repeat");
      if (repeat) repeat.repetitions = repeats;
      result.plannedSessionMinutes = duration;
      result.plannedRunMinutes = repeats * 4;
      result.plannedWalkMinutes = duration - repeats * 4;
    } else if (result.activityType === "bike") {
      const segments = result.groups.flatMap((group) => group.segments);
      if (target >= 20) [segments[0].durationSeconds, segments[1].durationSeconds, segments[2].durationSeconds] = [600, (target - 20) * 60, 600];
      else { const edge = Math.floor(target / 4); [segments[0].durationSeconds, segments[1].durationSeconds, segments[2].durationSeconds] = [edge * 60, (target - edge * 2) * 60, edge * 60]; }
      result.plannedSessionMinutes = target;
      result.plannedBikeMinutes = target;
    } else {
      if (result.role === "strides") {
        const easy = window.MARATHON_PLAN.allWorkouts.find((item) => item.activityType === "run" && item.role === "short" && item.plannedSessionMinutes === 30);
        if (easy) { result.groups = clone(easy.groups); result.title = "Easy herstel"; result.role = "short"; result.notes = ["Door schaling volledig easy; geen strides."]; }
      }
      const segments = result.groups.flatMap((group) => group.segments);
      if (segments.length >= 3) { segments[0].durationSeconds = 300; segments[1].durationSeconds = Math.max(0, target - 10) * 60; segments[2].durationSeconds = 300; }
      result.plannedSessionMinutes = target;
      result.plannedRunMinutes = target;
      result.plannedWalkMinutes = 0;
    }
    result.totalPlannedSeconds = result.plannedSessionMinutes * 60;
    result.totalPlannedLabel = `${result.plannedSessionMinutes} min`;
    result.sourceSummary = `${result.plannedSessionMinutes} min · afstand vrij`;
    result.garmin.totalSeconds = result.totalPlannedSeconds;
    result.garmin.groups = clone(result.groups).map((group) => ({ ...group, segments: group.segments.map(({ speedKmh, speedRangeKmh, inclinePercent, ...segment }) => ({ ...segment, targetType: "Open / Vrij" })) }));
    return result;
  }
  function scaleTaperWorkout(workout, scale) {
    const raw = Number(workout.plannedSessionMinutes || 0) * scale;
    if (workout.role === "runwalk") return raw < 15 ? rebuildTimedWorkout(workout, 0) : rebuildTimedWorkout(workout, 10 + 5 * Math.floor((raw - 10) / 5));
    if (workout.activityType === "bike") return raw < 4 ? rebuildTimedWorkout(workout, 0) : rebuildTimedWorkout(workout, Math.floor(raw));
    return raw < 15 ? rebuildTimedWorkout(workout, 0) : rebuildTimedWorkout(workout, Math.floor(raw));
  }
  function capTaperToReference(workout, reference, runIndex) {
    if (workout.activityType === "bike") {
      return reference.bikeMinutes > 0 && workout.plannedSessionMinutes > reference.bikeMinutes
        ? rebuildTimedWorkout(workout, reference.bikeMinutes)
        : workout;
    }
    if (workout.activityType !== "run") return workout;
    const comparable = reference.runLogs[runIndex];
    const comparableRole = workout.role === "rhythm" ? "continuous" : workout.role;
    const cap = Math.floor(Number(reference.runCaps?.[comparableRole] || comparable?.actualTotalMinutes || 0));
    if (!cap) return rebuildTimedWorkout(workout, 0);
    return workout.plannedSessionMinutes > cap ? rebuildTimedWorkout(workout, cap) : workout;
  }
  function previousRunLogs(appData, weekNumber) {
    return Object.values(appData?.workoutLogs || {})
      .filter((log) => Number(log.weekNumber) === Number(weekNumber) && log.activityType === "run" && Number(log.actualTotalMinutes) > 0)
      .sort((a, b) => String(a.workoutDate || a.completedDate || a.updatedAt || "").localeCompare(String(b.workoutDate || b.completedDate || b.updatedAt || "")));
  }
  function capProgressionWorkouts(appData, weekNumber, workouts, noIncrease = false) {
    const previousWeek = weekNumber - 1;
    const previous = previousRunLogs(appData, previousWeek);
    const previousLoad = completedLoad(appData, previousWeek);
    if (!previous.length || !previousLoad.session) return workouts;
    let capped = workouts.map((workout, index) => {
      const prior = previous[index];
      if (!prior || workout.activityType !== "run") return workout;
      const perSessionIncrease = noIncrease ? 0 : workout.role === "runwalk" ? 15 : 5;
      const cap = Number(prior.actualTotalMinutes) + perSessionIncrease;
      return workout.plannedSessionMinutes > cap ? rebuildTimedWorkout(workout, cap) : workout;
    });
    const sessionCap = Math.floor(previousLoad.session * (noIncrease ? 1 : 1.1));
    const runCap = Math.floor(previousLoad.run * (noIncrease ? 1 : 1.15));
    const currentLoad = () => sumLoad(capped);
    let guard = 0;
    while ((currentLoad().session > sessionCap || currentLoad().run > runCap) && guard < 500) {
      guard += 1;
      const longIndex = capped.findIndex((workout) => workout.role === "runwalk" && workout.plannedSessionMinutes > 15);
      const candidates = longIndex >= 0 ? [longIndex] : capped.map((workout, index) => workout.activityType === "run" && workout.plannedSessionMinutes > 15 ? index : -1).filter((index) => index >= 0).reverse();
      const index = candidates[0];
      if (index == null) break;
      const decrement = capped[index].role === "runwalk" ? 5 : 1;
      capped[index] = rebuildTimedWorkout(capped[index], capped[index].plannedSessionMinutes - decrement);
    }
    return capped;
  }
  function decorateWeek(weekNumber, workouts, status, variant, appData, extra = {}) {
    const sourceWeek = window.MARATHON_PLAN.weeks.find((week) => week.weekNumber === weekNumber);
    const sorted = workouts.filter((workout) => !workout.isSkipped).sort((a, b) => a.date.localeCompare(b.date) || a.activityType.localeCompare(b.activityType));
    let runIndex = 0;
    for (const workout of sorted) {
      if (workout.activityType === "run") runIndex += 1;
      workout.trainingNumber = workout.activityType === "race" ? 4 : workout.activityType === "run" ? runIndex : null;
      workout.trainingLabel = workout.activityType === "race" ? "Marathon" : workout.activityType === "run" ? `Training ${runIndex}` : "Fiets";
      workout.weekId = sourceWeek.weekId; workout.phaseId = sourceWeek.phaseId; workout.phaseName = sourceWeek.phaseName; workout.dateLabel = sourceWeek.periodLabel;
    }
    const load = sumLoad(sorted.filter((workout) => workout.activityType !== "race"));
    const start = new Date(`${sourceWeek.startDate}T12:00:00`);
    const days = Array.from({ length: 7 }, (_, offset) => {
      const date = new Date(start); date.setDate(date.getDate() + offset);
      const iso = [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
      const planned = sorted.filter((workout) => workout.date === iso);
      return planned.length ? { date: iso, weekday: date.toLocaleDateString("nl-NL", { weekday: "long" }), workoutIds: planned.map((workout) => workout.workoutId), workoutId: planned[0].workoutId, isRestDay: false }
        : { date: iso, weekday: date.toLocaleDateString("nl-NL", { weekday: "long" }), isRestDay: true, note: "Rust, herstel en normale dagelijkse beweging." };
    });
    return { ...sourceWeek, workouts: sorted, days, status, variant, plannedSessionMinutes: load.session, plannedRunMinutes: load.run, plannedWalkMinutes: load.walk, plannedBikeMinutes: load.bike, actualLoad: completedLoad(appData, weekNumber), ...extra };
  }
  function resolvePlan(appData = {}) {
    const resolved = [];
    const variants = window.MARATHON_PLAN.weekVariants;
    for (const weekNumber of [41, 42, 43, 44]) {
      const status = effectiveStatus(appData, weekNumber);
      const source = weekNumber === 41 || status === "green" ? variants[weekNumber].max : variants[weekNumber].orange;
      let runs = clone(source.length ? source : variants[weekNumber].max);
      if (weekNumber > 41 && status === "green") runs = capProgressionWorkouts(appData, weekNumber, runs, false);
      if (weekNumber > 42 && status === "orange") runs = capProgressionWorkouts(appData, weekNumber, runs, true);
      const shared = clone(variants[weekNumber].shared);
      const workouts = [...runs, ...shared].map((workout) => status === "red" && workout.activityType === "run" ? { ...workout, isSuspended: true } : workout);
      resolved.push(decorateWeek(weekNumber, workouts, status, weekNumber === 41 ? "recovery-max" : status, appData));
    }
    const taper = deriveTaperBasis(appData);
    const taperReference = deriveTaperReference(appData);
    for (const weekNumber of [45, 46, 47]) {
      const status = effectiveStatus(appData, weekNumber);
      let selected = clone(variants[weekNumber].max);
      if (weekNumber === 45) {
        const decision = appData?.userSettings?.weekDecisions?.[45] || {};
        const unlocked = taper.scale === 1 && greenCriteria(decision, 45, appData);
        if (appData?.userSettings?.optionalWorkoutChoices?.[45] === "rhythm" && unlocked) selected = selected.map((workout) => workout.date === "2026-11-05" ? clone(variants[45].optional[0]) : workout);
      }
      let taperRunIndex = 0;
      const scaled = taper.scale
        ? [...selected, ...clone(variants[weekNumber].shared)].map((workout) => {
          if (workout.activityType === "race") return workout;
          const scaledWorkout = scaleTaperWorkout(workout, taper.scale);
          const runIndex = workout.activityType === "run" ? taperRunIndex++ : -1;
          return capTaperToReference(scaledWorkout, taperReference, runIndex);
        })
        : [...selected, ...clone(variants[weekNumber].shared)];
      const workouts = scaled.map((workout) => (status === "red" || taper.scale === 0) && workout.activityType === "run" ? { ...workout, isSuspended: true } : workout);
      resolved.push(decorateWeek(weekNumber, workouts, status, taper.scale ? "scaled-taper" : "no-basis", appData, { taperBasisMinutes: taper.basisMinutes, taperScale: taper.scale, taperReferenceWeek: taperReference.weekNumber }));
    }
    return resolved;
  }
  window.MARATHON_MODEL = { segmentDurationSeconds, flattenWorkoutSegments, calculateWorkoutDistanceKm, calculateWeekDistanceKm, sumLoad, completedLoad, greenCriteria, effectiveStatus, deriveTaperBasis, deriveTaperReference, rebuildTimedWorkout, scaleTaperWorkout, capProgressionWorkouts, resolvePlan };
  window.APP_CONFIG = window.MARATHON_PLAN.config;
  window.TRAINING_WEEKS = window.MARATHON_PLAN.weeks;
  window.TRAINING_PLAN = window.MARATHON_PLAN.phases.map((phase) => ({ ...phase, weeks: window.TRAINING_WEEKS.filter((week) => week.phaseId === phase.phaseId) }));
}

fs.writeFileSync(output, `// Generated from ${path.basename(input)}. Edit the source and generator, then regenerate.\nwindow.MARATHON_PLAN = ${JSON.stringify(plan, null, 2)};\n(${installModel.toString()})();\n`);

const maxima = Object.fromEntries([41, 42, 43, 44, 45, 46, 47].map((weekNumber) => [weekNumber, totals([...weekVariants[weekNumber].max, ...weekVariants[weekNumber].shared].filter((workout) => workout.activityType !== "race"))]));
console.log(JSON.stringify({ schemaVersion: SCHEMA_VERSION, parsedWorkouts: allWorkouts.length, maxima }, null, 2));
