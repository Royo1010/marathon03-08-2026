import fs from "node:fs";
import path from "node:path";

const inputPath = process.argv[2];
const outputPath = process.argv[3] || path.resolve("training-data.js");

if (!inputPath) {
  throw new Error("Gebruik: node scripts/generate-marathon-plan.mjs <schema.txt> [training-data.js]");
}

const source = fs.readFileSync(inputPath, "utf8").replace(/\r/g, "");
const lines = source.split("\n");

const numberWords = {
  eenmaal: 1,
  tweemaal: 2,
  driemaal: 3,
  viermaal: 4,
  vijfmaal: 5,
  zesmaal: 6,
  zevenmaal: 7,
  achtmaal: 8,
};

const weekDistances = [22.3, 25.8, 29.2, 33.8, 37.5, 41.9, 46.9, 41.1, 47.4, 49.0, 52.9, 45.5, 49.0, 46.5, 35.5, 13.9];
const phaseDefinitions = [
  {
    phaseId: "loopbestendig",
    number: 1,
    name: "Opnieuw loopbestendig worden",
    shortName: "Loopbestendig",
    startWeek: 1,
    endWeek: 4,
    goal: "Vier loopmomenten leren verdragen en de duur geleidelijk opbouwen zonder onnodige vermoeidheid.",
  },
  {
    phaseId: "marathonbasis",
    number: 2,
    name: "Marathonbasis opbouwen",
    shortName: "Marathonbasis",
    startWeek: 5,
    endWeek: 8,
    goal: "Weekvolume, lange duur en gecontroleerde blokken rond doeltempo verder uitbouwen.",
  },
  {
    phaseId: "marathonspecifiek",
    number: 3,
    name: "Marathonspecifieke periode",
    shortName: "Marathonspecifiek",
    startWeek: 9,
    endWeek: 13,
    goal: "Marathontempo leren vasthouden met vermoeide benen en voeding onder wedstrijdachtige belasting testen.",
  },
  {
    phaseId: "taper",
    number: 4,
    name: "Taper",
    shortName: "Taper",
    startWeek: 14,
    endWeek: 15,
    goal: "Trainingsvolume afbouwen, ritme behouden en opgebouwde vermoeidheid laten zakken.",
  },
  {
    phaseId: "wedstrijdweek",
    number: 5,
    name: "Wedstrijdweek",
    shortName: "Wedstrijdweek",
    startWeek: 16,
    endWeek: 16,
    goal: "Fris blijven, niets nieuws proberen en het geteste marathonplan gecontroleerd uitvoeren.",
  },
];

function slug(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

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
  const parsed = Number(String(value).replace(",", ".").replace(/[^0-9.-]/g, ""));
  return Number.isFinite(parsed) ? parsed : null;
}

function parseDurationSeconds(value) {
  const text = String(value || "").toLowerCase();
  let seconds = 0;
  const hours = text.match(/(\d+(?:[.,]\d+)?)\s*uur/);
  const minutes = text.match(/(\d+(?:[.,]\d+)?)\s*minuut|(?:circa\s+)?(\d+(?:[.,]\d+)?)\s*min/);
  const secondsMatch = text.match(/(\d+)\s*seconden?/);
  if (hours) seconds += parseDecimal(hours[1]) * 3600;
  if (minutes) seconds += parseDecimal(minutes[1] || minutes[2]) * 60;
  if (secondsMatch) seconds += Number(secondsMatch[1]);
  return Math.round(seconds);
}

function parseMeasure(value) {
  const text = value.trim().toLowerCase();
  if (/km$/.test(text)) return { basis: "distance", distanceKm: parseDecimal(text), display: value.trim() };
  if (/meter$/.test(text)) return { basis: "distance", distanceKm: parseDecimal(text) / 1000, display: value.trim() };
  return { basis: "time", durationSeconds: parseDurationSeconds(text), display: value.trim() };
}

function classifySegment(speed, context, workout) {
  const label = context.toLowerCase();
  const title = workout.title.toLowerCase();
  if (speed <= 6) return "wandelen";
  if (/herstel|na de eerste/.test(label)) return "herstel";
  if (/afsluiten|cooling/.test(label)) return "cooling-down";
  if (speed <= 8.8) return label === "opbouw" && workout.segmentCount <= 2 ? "warming-up" : "cooling-down";
  if (speed < 10.2) return /herstel/.test(title) ? "herstel" : "rustig";
  if (speed < 11.5) return "steady";
  if (speed <= 12.1 && /marathon|doeltempo|doelmarathon/.test(title + " " + label)) return "marathontempo";
  if (speed <= 12.1) return "tempo";
  return "interval";
}

function parseSegment(line, context, workout, index) {
  const match = line.match(/^\*\s+(.+?)\s+—\s+([\d,.]+)\s*km\/u\s+—\s+(.+)$/);
  if (!match) return null;
  const measure = parseMeasure(match[1]);
  const speedKmh = parseDecimal(match[2]);
  const inclinePercent = parseDecimal(match[3]);
  workout.segmentCount += 1;
  return {
    segmentId: `${workout.workoutId}-s${String(index).padStart(2, "0")}`,
    ...measure,
    speedKmh,
    inclinePercent,
    type: classifySegment(speedKmh, context, workout),
    instruction: /meestal/.test(match[3]) ? "Gebruik meestal deze helling; de algemene hellingsvariatie blijft optioneel." : "Stel snelheid en helling rustig in en houd je pas technisch stabiel.",
  };
}

function repeatsFromMarker(line) {
  const lower = line.toLowerCase();
  for (const [word, count] of Object.entries(numberWords)) {
    if (lower.includes(word)) return count;
  }
  const numeric = lower.match(/(\d+)\s*(?:maal|x)/);
  return numeric ? Number(numeric[1]) : null;
}

function categoryFor(number, title) {
  const lower = title.toLowerCase();
  if (number === 4 && lower.trim() === "marathon") return "wedstrijd";
  if (number === 4) return "lange-duur";
  if (number === 2 && /interval/.test(lower)) return "interval";
  if (number === 2 && /test|evaluatie|progressieve/.test(lower)) return "testtraining";
  if (number === 2) return "kwaliteit";
  if (/herstel|losmaak/.test(lower)) return "herstel";
  return "rustige-duur";
}

function defaultGoal(number, category) {
  if (category === "wedstrijd") return "De marathon gecontroleerd uitvoeren volgens de geteste tempo-, voedings- en herstelstrategie.";
  if (number === 1) return "Rustig aeroob volume opbouwen en technisch ontspannen lopen.";
  if (number === 2) return "De geplande kwaliteitsprikkel gecontroleerd uitvoeren zonder sprinten of totale uitputting.";
  if (number === 3) return "Extra loopfrequentie toevoegen met weinig restvermoeidheid.";
  return "Tijd op de benen, duurvermogen en wedstrijdspecifieke belastbaarheid opbouwen.";
}

function defaultRpe(category) {
  if (category === "herstel" || category === "rustige-duur") return "3–4/10";
  if (category === "lange-duur") return "3–5/10";
  if (category === "wedstrijd") return "Wedstrijdinspanning";
  if (category === "interval") return "maximaal 8/10";
  return "6–8/10";
}

function parseWorkoutBody(workout, bodyLines) {
  workout.segmentCount = 0;
  const groups = [];
  let currentGroup = { groupId: `${workout.workoutId}-g1`, kind: "sequence", label: "Opbouw", segments: [] };
  groups.push(currentGroup);
  let segmentIndex = 0;
  let inEvaluation = false;
  let evaluationMode = "criteria";
  const notes = [];
  const evaluationCriteria = [];
  const adjustmentRules = [];

  const metadata = {};
  for (let index = 0; index < bodyLines.length; index += 1) {
    const trimmed = bodyLines[index].trim();
    if (!trimmed || trimmed === "---") continue;

    if (/^####\s+Evaluatie/i.test(trimmed)) {
      inEvaluation = true;
      evaluationMode = "criteria";
      continue;
    }

    const meta = trimmed.match(/^\*\*(.+?):\*\*\s*(.*)$/);
    if (meta) {
      metadata[meta[1].trim().toLowerCase()] = meta[2].trim().replace(/\.$/, "");
      continue;
    }

    if (inEvaluation && /wanneer|gebruik je|trek vanaf|gaat verder|blijft serieus/i.test(trimmed) && !trimmed.startsWith("*")) {
      if (/wanneer|trek vanaf|gebruik je/i.test(trimmed)) evaluationMode = "adjustments";
      notes.push(trimmed.replace(/:$/, ""));
      continue;
    }

    if (trimmed.startsWith("* ") && inEvaluation && !trimmed.includes("—")) {
      (evaluationMode === "criteria" ? evaluationCriteria : adjustmentRules).push(trimmed.slice(2).replace(/;$/, "").replace(/\.$/, ""));
      continue;
    }

    const segmentContext = currentGroup.context || (currentGroup.kind === "repeat" && currentGroup.segments.length ? "herstel" : currentGroup.label);
    const segment = parseSegment(trimmed, segmentContext, workout, segmentIndex + 1);
    if (segment) {
      segmentIndex += 1;
      currentGroup.segments.push(segment);
      continue;
    }

    if (/^(Daarna|Afsluiten|Vervolgens|Na de eerste)/i.test(trimmed)) {
      const repeatCount = repeatsFromMarker(trimmed);
      if (/^Na de eerste/i.test(trimmed)) {
        const repeatGroup = [...groups].reverse().find((group) => group.kind === "repeat");
        if (repeatGroup) {
          repeatGroup.context = trimmed.replace(/:$/, "");
          repeatGroup.omitRecoveryAfterLast = true;
          currentGroup = repeatGroup;
          continue;
        }
      }
      currentGroup = {
        groupId: `${workout.workoutId}-g${groups.length + 1}`,
        kind: repeatCount ? "repeat" : "sequence",
        label: trimmed.replace(/:$/, ""),
        repetitions: repeatCount || undefined,
        segments: [],
      };
      groups.push(currentGroup);
      continue;
    }

    if (trimmed.startsWith("* ")) {
      notes.push(trimmed.slice(2).replace(/\.$/, ""));
      continue;
    }

    if (!trimmed.startsWith("#")) notes.push(trimmed);
  }

  workout.groups = groups.filter((group) => group.segments.length);
  workout.totalPlannedLabel = metadata.totaal || (workout.category === "wedstrijd" ? "Marathon" : "Niet opgegeven");
  workout.totalPlannedSeconds = parseDurationSeconds(metadata.totaal || "");
  workout.estimatedDistanceLabel = metadata.afstand || (workout.category === "wedstrijd" ? "42,195 km" : "Niet opgegeven");
  workout.estimatedDistanceKm = parseDecimal(metadata.afstand || "") || (workout.category === "wedstrijd" ? 42.195 : null);
  workout.goal = metadata.doel || defaultGoal(workout.trainingNumber, workout.category);
  workout.targetRpe = metadata.rpe || metadata["rpe versnellingen"] || metadata["rpe snelle minuten"] || defaultRpe(workout.category);
  workout.nutrition = metadata.voeding || "";
  workout.marathonPaceVolume = metadata.marathontempo || "";
  workout.notes = [...new Set(notes.filter((note) => note && !/^Geen$/.test(note)))];
  workout.evaluation = evaluationCriteria.length || adjustmentRules.length
    ? { title: "Evaluatie na deze training", criteria: evaluationCriteria, adjustmentRules }
    : null;
  if (workout.category === "wedstrijd" && !workout.groups.length) {
    workout.groups = [{
      groupId: `${workout.workoutId}-g1`,
      kind: "sequence",
      label: "Marathon",
      segments: [{
        segmentId: `${workout.workoutId}-s01`,
        basis: "distance",
        distanceKm: 42.195,
        display: "42,195 km",
        speedKmh: 12.06,
        inclinePercent: null,
        type: "wedstrijd",
        instruction: "Start beheerst en volg de wedstrijdstrategie; de aangegeven snelheid is het gemiddelde voor 3:30, niet het verplichte starttempo.",
      }],
    }];
  }
  delete workout.segmentCount;
}

const weeks = [];
let activePhaseName = "";
let currentWeek = null;
let currentWorkout = null;
let workoutBody = [];

function finalizeWorkout() {
  if (!currentWorkout || !currentWeek) return;
  parseWorkoutBody(currentWorkout, workoutBody);
  currentWeek.workouts.push(currentWorkout);
  currentWorkout = null;
  workoutBody = [];
}

function finalizeWeek() {
  finalizeWorkout();
  if (!currentWeek) return;
  weeks.push(currentWeek);
  currentWeek = null;
}

for (const line of lines) {
  if (/^# Wedstrijdstrategie/.test(line)) {
    finalizeWeek();
    break;
  }
  const phaseMatch = line.match(/^# Fase\s+(\d+)\s+—\s+(.+)$/);
  if (phaseMatch) {
    activePhaseName = phaseMatch[2].trim();
    continue;
  }
  const weekMatch = line.match(/^## Week\s+(\d+)\s+—\s+(.+)$/);
  if (weekMatch) {
    finalizeWeek();
    const number = Number(weekMatch[1]);
    const startDate = addDays("2026-08-03", (number - 1) * 7);
    const phase = phaseDefinitions.find((item) => number >= item.startWeek && number <= item.endWeek);
    currentWeek = {
      weekId: `marathon-2026-w${String(number).padStart(2, "0")}`,
      weekNumber: number,
      label: `Week ${number}`,
      periodLabel: weekMatch[2].trim(),
      startDate,
      endDate: addDays(startDate, 6),
      phaseId: phase.phaseId,
      phaseName: phase.name,
      sourcePhaseName: activePhaseName,
      plannedDistanceKm: weekDistances[number - 1],
      focus: "",
      workouts: [],
    };
    continue;
  }
  const workoutMatch = line.match(/^### Training\s+(\d+)\s+—\s+(.+)$/);
  if (workoutMatch && currentWeek) {
    finalizeWorkout();
    const trainingNumber = Number(workoutMatch[1]);
    const title = workoutMatch[2].trim();
    currentWorkout = {
      workoutId: `marathon-2026-w${String(currentWeek.weekNumber).padStart(2, "0")}-t${trainingNumber}`,
      weekId: currentWeek.weekId,
      weekNumber: currentWeek.weekNumber,
      trainingNumber,
      title,
      category: categoryFor(trainingNumber, title),
      surface: trainingNumber === 4 && title.toLowerCase().trim() === "marathon" ? "buiten" : "loopband",
    };
    workoutBody = [];
    continue;
  }
  if (currentWorkout) workoutBody.push(line);
  else if (currentWeek && line.trim() && !line.startsWith("#")) {
    const text = line.replace(/^\*\*|\*\*$/g, "").trim();
    if (text && text !== "---") currentWeek.focus = currentWeek.focus ? `${currentWeek.focus} ${text}` : text;
  }
}
finalizeWeek();

const specialEvaluations = {
  "marathon-2026-w08-t2": {
    title: "Evaluatie na deze training",
    criteria: [
      "Voltooi alle tien progressieve kilometers",
      "Laat het laatste deel niet zwaarder worden dan RPE 8",
      "Hang niet aan de handgrepen",
      "Houd je techniek stabiel",
      "Geen duidelijke verergering van klachten de volgende dag",
    ],
    adjustmentRules: [
      "Stop je vóór kilometer 8 of bereik je vroeg RPE 9, trek dan vanaf week 9 0,3 km/u af van de snelle blokken",
      "Gebruik voorlopig 11,7–11,8 km/u voor marathontempo",
      "Verander de rustige snelheden niet",
    ],
  },
  "marathon-2026-w12-t2": {
    title: "Doeltempo-evaluatie",
    criteria: [
      "Het laatste blok blijft maximaal RPE 7–8",
      "Je looptechniek blijft stabiel",
      "Je hoeft niet aan de handgrepen te hangen",
      "Je kunt de volgende dag normaal bewegen",
      "Geen duidelijke heup-, enkel-, kuit- of achillesreactie",
    ],
    adjustmentRules: [
      "Is het tweede blok al RPE 8–9 of maak je het laatste blok niet af, gebruik dan in week 13 11,7–11,8 km/u voor de marathontempoblokken",
    ],
  },
};

for (const week of weeks) {
  week.focus ||= week.weekNumber === 13
    ? "Belangrijkste marathonspecifieke week: kwaliteit beheersen en de lange duurloop als hoofdprikkel uitvoeren."
    : week.weekNumber === 16
      ? "Wedstrijdweek: fris blijven en alleen uitvoeren wat al is getest."
      : `Voer alle vier trainingen in volgorde uit en laat herstel leidend zijn binnen ${week.phaseName.toLowerCase()}.`;
  for (const workout of week.workouts) {
    if (specialEvaluations[workout.workoutId]) workout.evaluation = specialEvaluations[workout.workoutId];
    workout.orderWarning = workout.trainingNumber === 4
      ? "Training 4 is de belangrijkste duurprikkel. Plan hem niet direct na Training 2 en houd bij voorkeur ongeveer 48 uur tussen beide."
      : workout.trainingNumber === 2
        ? "Plan deze kwaliteitstraining niet op de dag direct vóór Training 4."
        : "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf.";
  }
}

if (weeks.length !== 16 || weeks.some((week) => week.workouts.length !== 4)) {
  throw new Error(`Parser leverde ${weeks.length} weken op; trainingen per week: ${weeks.map((week) => week.workouts.length).join(", ")}`);
}

const plan = {
  config: {
    planId: "marathon-330-treadmill-2026",
    planVersion: 1,
    schemaVersion: "marathon-plan-2026-v1",
    planName: "Persoonlijk loopband-marathonschema",
    planSubtitle: "16 weken richting een ambitieuze marathon rond 3:30",
    startDate: "2026-08-03",
    endDate: "2026-11-22",
    marathonDate: "2026-11-22",
    previousMarathonTime: "3:55:50",
    targetTime: "3:30:00",
    targetPace: "4:58,6 min/km",
    targetSpeedKmh: 12.06,
    practicalMarathonSpeedKmh: 12.0,
    trainingFrequency: 4,
    primarySurface: "Gemotoriseerde loopband",
  },
  phases: phaseDefinitions.map((phase) => ({
    ...phase,
    startDate: weeks[phase.startWeek - 1].startDate,
    endDate: weeks[phase.endWeek - 1].endDate,
  })),
  weeks,
  guidance: {
    scheduling: [
      "Plan Training 2 en Training 4 nooit op opeenvolgende dagen.",
      "Plan na Training 4 bij voorkeur minstens één dag zonder hardlopen.",
      "Training 3 mag de dag vóór Training 4, omdat hij bewust rustig en kort is.",
      "Loop maximaal twee dagen achter elkaar.",
      "Combineer twee opeenvolgende loopdagen alleen wanneer minstens één daarvan Training 1 of Training 3 is.",
      "Plan geen zware beentraining op de dag vóór Training 2 of Training 4.",
      "Houd bij voorkeur ongeveer 48 uur tussen Training 2 en Training 4.",
      "Een gemiste training haal je niet in; ga verder met de volgende geplande training.",
    ],
    suggestedSequences: [
      "Training 1 → rust → Training 2 → rust → Training 3 → Training 4",
      "Training 1 → Training 3 → rust → Training 2 → rust → Training 4",
    ],
    rpeScale: [
      { type: "Herstel/rustig", rpe: "3–4/10", feeling: "Gemakkelijk volledige zinnen spreken" },
      { type: "Steady", rpe: "5/10", feeling: "Duidelijk werken, maar volledig beheerst" },
      { type: "Marathontempo", rpe: "6–7/10", feeling: "Stevig, geconcentreerd en controleerbaar" },
      { type: "Drempelachtig", rpe: "7–8/10", feeling: "Zwaar, maar technisch stabiel" },
      { type: "Korte intervallen", rpe: "maximaal 8/10", feeling: "Geen sprint en geen totale uitputting" },
    ],
    incline: [
      "Wandelen: 0%.",
      "Rustig lopen: 0,5%.",
      "Marathontempo en snellere blokken: 1%.",
      "Bij rustige blokken langer dan 60 minuten mag je 25 minuten op 0,5%, 5 minuten op 0% en daarna opnieuw 25 minuten op 0,5% gebruiken.",
      "Verander de helling niet midden in een snel tempo- of marathontempoblok.",
      "Gebruik bij lange loopbandtrainingen bij voorkeur een krachtige ventilator.",
    ],
    painRules: [
      "0–2/10 pijn en stabiel: doorgaan.",
      "3/10 pijn: helling naar 0% en snelheid 0,5 km/u verlagen.",
      "Na vijf minuten niet verminderd: training stoppen.",
      "Scherpe pijn, mank lopen of veranderde pas: direct stoppen.",
      "Duidelijk erger de volgende ochtend: vervang de eerstvolgende kwaliteitstraining door 30–40 minuten op 9,0–9,3 km/u en 0%.",
      "Dezelfde klacht tijdens twee trainingen: geen interval- of lange training uitvoeren totdat de klacht is beoordeeld.",
    ],
    fueling: [
      { duration: "Korter dan 75 minuten", carbs: "Meestal niet nodig" },
      { duration: "75–120 minuten", carbs: "30–40 gram per uur" },
      { duration: "120–150 minuten", carbs: "45–60 gram per uur" },
      { duration: "Langer dan 150 minuten", carbs: "60–75 gram per uur indien verdragen" },
    ],
    raceStrategy: [
      { distance: "0–5 km", pace: "5:03–5:05 min/km", instruction: "Begin bewust iets langzamer dan doeltempo en haal geen seconden geforceerd terug." },
      { distance: "5–30 km", pace: "4:59–5:00 min/km", instruction: "Stabiliseer rond 12,0–12,1 km/u." },
      { distance: "30–35 km", pace: "4:59–5:00 min/km", instruction: "Houd hetzelfde tempo vast en versnel nog niet bewust." },
      { distance: "35–42,2 km", pace: "op gevoel", instruction: "Versnel alleen bij een stabiele pas, rustige maag, geen beginnende kramp en beheersbare ademhaling." },
    ],
    targetConfirmation: [
      "Voltooi de progressieve training van week 8 beheerst.",
      "Voltooi in week 12 driemaal 15 minuten op 12,0 km/u.",
      "Voltooi in week 13 na 90 rustige minuten tweemaal 15 minuten op 12,0 km/u.",
      "Verdraag meerdere weken tussen ongeveer 45 en 53 kilometer.",
      "Herstel binnen ongeveer 48 uur van de zwaarste trainingen.",
      "Ontwikkel geen oplopende heup-, enkel-, knie-, kuit- of achillesklachten.",
      "Verdraag tijdens lange trainingen ongeveer 60 gram koolhydraten per uur.",
    ],
  },
};

const output = `(function () {\n  "use strict";\n\n  const MARATHON_PLAN = ${JSON.stringify(plan, null, 2).replace(/\n/g, "\n  ")};\n\n  function segmentDurationSeconds(segment) {\n    if (segment.durationSeconds) return segment.durationSeconds;\n    if (segment.distanceKm && segment.speedKmh) return Math.round((segment.distanceKm / segment.speedKmh) * 3600);\n    return 0;\n  }\n\n  function flattenWorkoutSegments(workout) {\n    const result = [];\n    (workout.groups || []).forEach((group) => {\n      const repeats = group.kind === "repeat" ? group.repetitions || 1 : 1;\n      for (let repeat = 1; repeat <= repeats; repeat += 1) {\n        group.segments.forEach((segment, index) => {\n          if (group.omitRecoveryAfterLast && repeat === repeats && index === group.segments.length - 1 && /herstel/i.test(segment.type)) return;\n          result.push({ ...segment, groupLabel: group.label, repeat, repeats, executionId: segment.segmentId + "-r" + repeat });\n        });\n      }\n    });\n    return result;\n  }\n\n  function calculateWorkoutDistanceKm(workout) {\n    return flattenWorkoutSegments(workout).reduce((total, segment) => {\n      if (segment.distanceKm) return total + segment.distanceKm;\n      return total + ((segment.durationSeconds || 0) / 3600) * (segment.speedKmh || 0);\n    }, 0);\n  }\n\n  function calculateWeekDistanceKm(week) {\n    return (week.workouts || []).reduce((total, workout) => total + (workout.estimatedDistanceKm || calculateWorkoutDistanceKm(workout)), 0);\n  }\n\n  window.MARATHON_PLAN = MARATHON_PLAN;\n  window.APP_CONFIG = MARATHON_PLAN.config;\n  window.TRAINING_WEEKS = MARATHON_PLAN.weeks;\n  window.TRAINING_PLAN = MARATHON_PLAN.phases.map((phase) => ({ ...phase, weeks: MARATHON_PLAN.weeks.filter((week) => week.phaseId === phase.phaseId) }));\n  window.MARATHON_MODEL = { segmentDurationSeconds, flattenWorkoutSegments, calculateWorkoutDistanceKm, calculateWeekDistanceKm };\n})();\n`;

fs.writeFileSync(outputPath, output, "utf8");
console.log(`Gegenereerd: ${outputPath} (${weeks.length} weken, ${weeks.reduce((sum, week) => sum + week.workouts.length, 0)} trainingen)`);
