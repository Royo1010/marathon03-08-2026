import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const input = process.argv[2] || "marathonschema_Roy_FINAL_V6_SUB4_2026-10-05.md";
const output = process.argv[3] || "training-data.js";
const source = fs.readFileSync(input, "utf8");
const clean = (text = "") => text.replace(/\*\*|`/g, "").trim();
const field = (body, name) => clean(body.match(new RegExp(`^\\*\\*${name}:\\*\\* (.+)$`, "m"))?.[1] || "").replace(/\.$/, "");
const dates = ["2026-10-05", "2026-10-12", "2026-10-19", "2026-10-26", "2026-11-02", "2026-11-09", "2026-11-16"];
const themes = ["Actief herstel", "Heropbouw + eerste MP", "Duur + specifiek ritme", "Specifieke opbouw", "Consolideren", "Taper", "Marathonweek"];
const isoOffset = (iso, offset) => { const date = new Date(`${iso}T12:00:00Z`); date.setUTCDate(date.getUTCDate() + offset); return date.toISOString().slice(0, 10); };
const calendarLabel = (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString("nl-NL", { day: "numeric", month: "long", timeZone: "UTC" });

// Keep explanatory source paragraphs/tables as structured content, not a second plan.
function guideBlocks(text) {
  const blocks = [];
  const lines = text.trim().split("\n");
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index].trim();
    if (!line || /^---$/.test(line)) continue;
    if (/^\|/.test(line)) {
      const rows = [];
      while (/^\|/.test(lines[index] || "")) {
        const cells = lines[index++].split("|").slice(1, -1).map(clean);
        if (!cells.every((cell) => /^:?-+:?$/.test(cell))) rows.push(cells);
      }
      index--;
      blocks.push({ type: "table", headers: rows.shift(), rows });
    } else if (/^### /.test(line)) blocks.push({ type: "heading", text: clean(line.slice(4)) });
    else blocks.push({ type: /^- /.test(line) ? "item" : "paragraph", text: clean(line.replace(/^- /, "")) });
  }
  return blocks;
}
const sections = Object.fromEntries([...source.matchAll(/^## (\d+)\. (.+)\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)].map((match) => [match[1], { title: clean(match[2]), blocks: guideBlocks(match[3]) }]));
const recovery = [
  "Een volledige rustdag na de langere duur, ook over een weekgrens heen.",
  "Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur.",
  "Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur.",
  "Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen.",
  "Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen.",
  "Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
];
const overrides = [
  "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit.",
  "Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren.",
  "Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen.",
  "MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen.",
  "Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
];

function parseGroups(body, id, activityType) {
  const rows = body.split("\n").filter((line) => /^\|/.test(line)).map((line) => line.split("|").slice(1, -1).map(clean));
  const groups = [];
  let repeatGroup = null;
  let number = 0;
  for (const row of rows) {
    if (row.length !== 4 || row[0] === "Stap in Garmin" || /^-+$/.test(row[0])) continue;
    if (row[0] === "Herhalen") {
      repeatGroup = { groupId: `${id}-g${groups.length + 1}`, kind: "repeat", repetitions: Number(row[1].match(/\d+/)[0]), label: "Werk + herstel", segments: [] };
      groups.push(repeatGroup);
      continue;
    }
    const nested = row[0].startsWith("↳");
    const name = row[0].replace(/^↳\s*/, "");
    const minutes = Number(row[1].match(/\d+/)?.[0]);
    if (!minutes) throw new Error(`Ongeldige duur ${id}: ${row.join(" | ")}`);
    const walking = /wandelen/i.test(row[3]);
    const mp = /Tempo 5:35/.test(row[2]);
    const type = activityType === "bike" ? "fiets" : walking ? "wandelen" : mp ? "marathonpace" : name === "Warming-up" ? "warming-up" : name === "Cooldown" ? "cooling-down" : name === "Herstel" ? "herstel" : "easy";
    const speedRangeKmh = activityType === "bike" ? null : walking ? [4, 5.5] : mp ? [10.3, 10.7] : id === "V6-W41-T4" ? [7, 9] : ["Warming-up", "Cooldown", "Herstel"].includes(name) ? [7, 8.5] : [7, 9.5];
    const segment = { segmentId: `${id}-s${++number}`, name, type, basis: "time", durationSeconds: minutes * 60, display: `${minutes} min`,
      isRecovery: name === "Herstel", targetType: mp ? "Tempo" : "Vrij", targetValue: mp ? "5:35–5:50/km" : null,
      cue: row[3], instruction: row[3], inclinePercent: activityType === "bike" ? null : 0,
      speedRangeKmh, speedKmh: speedRangeKmh ? (speedRangeKmh[0] + speedRangeKmh[1]) / 2 : null, distanceKm: null };
    if (nested) {
      if (!repeatGroup) throw new Error(`Herhaalstap zonder groep: ${id}`);
      repeatGroup.segments.push(segment);
    } else {
      repeatGroup = null;
      groups.push({ groupId: `${id}-g${groups.length + 1}`, kind: "sequence", repetitions: 1, label: name, segments: [segment] });
    }
  }
  return groups;
}

const weekSections = [...source.matchAll(/^## Week (\d+) — (.+)\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)];
const weeks = weekSections.map((match, weekIndex) => {
  const weekNumber = Number(match[1]);
  const workouts = [...match[3].matchAll(/^### Training (\d+) — (.+)\n([\s\S]*?)(?=^### Training |$(?![\s\S]))/gm)].map((training) => {
    const trainingNumber = Number(training[1]);
    const body = training[3];
    const id = body.match(/\*\*ID:\*\* `([^`]+)`/)?.[1];
    if (!id) throw new Error(`ID ontbreekt W${weekNumber} T${trainingNumber}`);
    const race = id.endsWith("RACE");
    const activityType = race ? "race" : /\*\*Type:\*\* fietsen/.test(body) ? "bike" : "run";
    const groups = race ? [] : parseGroups(body, id, activityType);
    const flat = groups.flatMap((group) => Array.from({ length: group.repetitions }, () => group.segments).flat());
    const seconds = flat.reduce((sum, step) => sum + step.durationSeconds, 0);
    const declared = Number(body.match(/\*\*Totale duur:\*\* (\d+) min/)?.[1]);
    if (!race && seconds !== declared * 60) throw new Error(`Duurverschil ${id}: ${seconds / 60} vs ${declared}`);
    const title = clean(training[2]).replace(/ · .+$/, "");
    const mpMinutes = flat.filter((step) => step.type === "marathonpace").reduce((sum, step) => sum + step.durationSeconds / 60, 0);
    const walk = flat.filter((step) => step.type === "wandelen").reduce((sum, step) => sum + step.durationSeconds / 60, 0);
    const role = race ? "race" : activityType === "bike" ? "bike" : walk ? "runwalk" : mpMinutes ? "marathonpace" : trainingNumber === 4 ? "long" : "easy";
    const workout = { workoutId: id, trainingId: id, trainingNumber, weekNumber, weekId: `marathon-v6-w${weekNumber}`,
      phaseId: `v6-phase-${weekNumber}`, phaseName: themes[weekIndex], date: race ? "2026-11-22" : null,
      title, activityType, category: race ? "wedstrijd" : activityType === "bike" ? "fiets" : trainingNumber === 4 ? "lange-duur" : mpMinutes ? "kwaliteit" : "rustige-duur",
      role, surface: "buiten", defaultExecutionMode: "garmin", treadmillAvailable: activityType === "run", totalPlannedSeconds: race ? null : seconds,
      totalPlannedLabel: race ? "Tot officiële finish" : `${declared} min`, estimatedDistanceKm: race ? 42.195 : null,
      estimatedDistanceLabel: race ? "42,195 km" : "Geen kilometerdoel", plannedSessionMinutes: race ? 0 : declared,
      plannedRunMinutes: activityType === "run" ? declared - walk : 0, plannedWalkMinutes: walk, plannedBikeMinutes: activityType === "bike" ? declared : 0, plannedMpMinutes: mpMinutes,
      targetRpe: race ? "Gecontroleerd starten" : mpMinutes ? "2–3 easy · 4–5 MP" : activityType === "bike" ? "2–3" : "2–3",
      goal: race ? "Sub 4:00 op de officiële route; uitvoeren wat goed is geoefend." : field(body, "Doel / uitvoering"),
      mentalGoal: "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      recoveryAdvice: recovery.join(" "), orderWarning: overrides.join(" "), locationStatus: race ? "Buitenwedstrijd" : activityType === "bike" ? "Fietsen / hometrainer" : "Outdoor / Garmin · loopband als alternatief",
      outsideVariant: race ? "Buiten op de officiële route. De officiële finish beëindigt de race, niet 42,195 GPS-kilometer." : activityType === "bike" ? "Buiten fietsen of binnen op de hometrainer, met dezelfde duur en rustige inspanning." : "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      treadmillInstruction: field(body, "Loopband"), bikeInstruction: field(body, "FR165-uitvoering"), hometrainerInstruction: field(body, "Hometrainer"),
      durationCheck: field(body, "Duurcontrole"), nutrition: field(body, "Voeding oefenen"),
      shoes: "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      labels: [mpMinutes ? "MARATHONPACE" : "", walk ? "RUN-WALK" : "", /Optionele/.test(title) ? "OPTIONEEL" : "", race ? "RACE" : ""].filter(Boolean),
      tone: race ? "race" : mpMinutes ? "quality" : "easy", groups,
      garmin: { groups, programSummary: field(body, "Programmeer in Garmin als"), referenceDistanceLabel: race ? "42,195 km officieel" : "Geen afstandsdoel", isRacePlan: race },
      protocolSignature: crypto.createHash("sha256").update(JSON.stringify(groups)).digest("hex"),
    };
    if (id === "V6-W45-T4") workout.latestDate = "2026-11-08";
    if (id === "V6-W47-T2") workout.latestDate = "2026-11-19";
    if (race) {
      workout.garmin.programSummary = field(source.slice(source.indexOf("### Garmin op racedag")), "Programmeer in Garmin als");
      workout.garmin.raceGuidance = sections[7].blocks.filter((block) => block.type === "paragraph" || block.type === "item").map((block) => block.text);
    }
    return workout;
  });
  const load = workouts.filter((w) => w.activityType !== "race").reduce((sum, w) => ({ session: sum.session + (w.activityType === "run" ? w.plannedSessionMinutes : 0), run: sum.run + w.plannedRunMinutes, walk: sum.walk + w.plannedWalkMinutes, bike: sum.bike + w.plannedBikeMinutes, mp: sum.mp + w.plannedMpMinutes }), { session: 0, run: 0, walk: 0, bike: 0, mp: 0 });
  const focus = field(match[3], "Weekdoel");
  return { weekNumber, weekId: `marathon-v6-w${weekNumber}`, phaseId: `v6-phase-${weekNumber}`, phaseName: themes[weekIndex], weekType: themes[weekIndex], startDate: dates[weekIndex], endDate: isoOffset(dates[weekIndex], 6), periodLabel: `${calendarLabel(dates[weekIndex])} – ${calendarLabel(isoOffset(dates[weekIndex], 6))}`, focus, planningMode: "flexible", includesMarathon: weekNumber === 47,
    plannedSessionMinutes: load.session, plannedRunMinutes: load.run, plannedWalkMinutes: load.walk, plannedBikeMinutes: load.bike, plannedMpMinutes: load.mp, workouts,
    weekPhilosophy: { theme: themes[weekIndex], summary: focus, adaptations: ["SUB 4", "EIGEN DAGKEUZE"], why: [focus], targetLink: "Sub 4:00 blijft het doel; checkpoints verfijnen de uitvoering zonder een eindtijdgarantie.", whyNotMore: "Geen kilometerquotum, extra tests of late inhaalpiek. Langste duur maximaal 150 minuten; taper vanaf 9 november.", confidence: "Vertrouwen komt uit goed verwerkte buitenweken, gecontroleerde MP en passend herstel." } };
});
if (weeks.length !== 7 || weeks.flatMap((week) => week.workouts).length !== 34) throw new Error("Onvolledig V6-schema");
const plan = {
  config: { planId: "marathon-final-v6-sub4-2026", planVersion: 14, schemaVersion: "marathon-final-v6-sub4-2026.10.05-1", sourceFile: path.basename(input), sourceSha256: crypto.createHash("sha256").update(source).digest("hex"),
    planName: "Marathon sub 4", planSubtitle: "FINAL V6 · Sub 4 · Garmin / Outdoor", startDate: "2026-10-05", endDate: "2026-11-22", marathonDate: "2026-11-22", raceDistanceKm: 42.195,
    targetTime: "Sub 4:00", targetPace: "5:41/km", practicalRacePace: "5:40/km", historicalAmbition: "3:30 (historisch)", volumeUnit: "minutes" },
  weeks, allWorkouts: weeks.flatMap((week) => week.workouts), phases: weeks.map((week, index) => ({ phaseId: week.phaseId, name: week.phaseName, shortName: week.phaseName, number: index + 1, startWeek: week.weekNumber, endWeek: week.weekNumber, startDate: week.startDate, endDate: week.endDate, description: week.focus })),
  guidance: { sections, scheduling: recovery, painRules: overrides,
    philosophy: ["Sub 4:00 is het actieve uitgangspunt, geen voorspelling of startgarantie.", "Herstelweek, daarna gecontroleerde aerobe duur en 15–30 minuten MP per week. De lange duur blijft volledig easy.", "W45 consolideert; vanaf 9 november taper. Geen krachttraining, extra tests of gemiste kilometers inhalen."],
    paces: [{ type: "Easy", speed: "Vrij buiten · band 7–9,5 km/u als startbereik", incline: "0%", rpe: "2–3" }, { type: "Marathonpace", speed: "5:35–5:50/km · band 10,3–10,7 km/u", incline: "0%", rpe: "4–5" }, { type: "Wandelen", speed: "Vrij buiten · band 4–5,5 km/u", incline: "0%", rpe: "ontspannen" }],
    surfaceStrategy: { title: "Outdoor / Garmin of Loopband", explanation: "Zelfde duren en repeats; outdoor is de standaard. Vooral MP en lange duur in W43–45 bij voorkeur buiten.", treadmill: ["0% starthelling", "Easy op RPE", "MP 10,3–10,7 km/u"], outside: ["Easy: Geen doel", "MP: Tempo 5:35–5:50/km", "H9 als observatie"] } },
};

function installModel() {
  const segmentDurationSeconds = (segment) => Number(segment?.durationSeconds || 0);
  function flattenWorkoutSegments(workout) {
    return (workout?.groups || []).flatMap((group) => Array.from({ length: group.kind === "repeat" ? group.repetitions : 1 }, (_, index) => group.segments.map((segment) => ({ ...segment, groupLabel: group.label, repeat: index + 1, repeats: group.repetitions, executionId: `${segment.segmentId}-r${index + 1}` }))).flat());
  }
  function garminDurationLabel(seconds) {
    const total = Math.round(Number(seconds || 0));
    const hours = Math.floor(total / 3600), minutes = Math.floor(total % 3600 / 60), remainder = total % 60;
    return [hours ? `${hours} uur` : "", minutes ? `${minutes} ${minutes === 1 ? "minuut" : "minuten"}` : "", remainder ? `${remainder} ${remainder === 1 ? "seconde" : "seconden"}` : ""].filter(Boolean).join(" en ") || "0 seconden";
  }
  function garminStepFields(segment) {
    const seconds = segmentDurationSeconds(segment);
    const durationValue = [Math.floor(seconds / 3600), Math.floor(seconds % 3600 / 60), seconds % 60].map((n) => String(n).padStart(2, "0")).join(":");
    return { stepType: segment.name === "Warming-up" ? "Warm-up" : segment.name === "Cooldown" ? "Cooldown" : segment.type === "wandelen" ? "Wandelen" : segment.isRecovery ? "Herstel" : "Hardlopen",
      durationType: "Tijd", durationValue, durationLabel: garminDurationLabel(seconds), targetType: segment.targetType === "Tempo" ? "Tempo" : "Geen doel", targetValue: segment.targetValue,
      note: `${segment.type === "wandelen" ? "Wandelen, niet joggen. " : ""}${segment.cue}` };
  }
  const calculateWorkoutDistanceKm = (_workout, log) => { const value = Number(log?.actualDistanceKm ?? log?.distanceKm); return Number.isFinite(value) && value >= 0 ? value : 0; };
  const calculateWeekDistanceKm = (week, _includeRace = true, logs = {}) => (week?.workouts || []).reduce((sum, workout) => sum + calculateWorkoutDistanceKm(workout, logs[workout.workoutId]), 0);
  window.MARATHON_MODEL = { segmentDurationSeconds, flattenWorkoutSegments, treadmillGroups: (workout) => workout?.groups || [], garminDurationLabel, garminStepFields, calculateWorkoutDistanceKm, calculateWeekDistanceKm, resolvePlan: () => window.MARATHON_PLAN.weeks };
  window.APP_CONFIG = window.MARATHON_PLAN.config;
  window.TRAINING_WEEKS = window.MARATHON_PLAN.weeks;
  window.TRAINING_PLAN = window.MARATHON_PLAN.phases.map((phase) => ({ ...phase, weeks: window.TRAINING_WEEKS.filter((week) => week.phaseId === phase.phaseId) }));
}
fs.writeFileSync(output, `// Generated from ${path.basename(input)}. Edit the source/generator, then regenerate.\nwindow.MARATHON_PLAN = ${JSON.stringify(plan, null, 2)};\n(${installModel.toString()})();\n`);
console.log(JSON.stringify(weeks.map((week) => ({ week: week.weekNumber, session: week.plannedSessionMinutes, run: week.plannedRunMinutes, walk: week.plannedWalkMinutes, bike: week.plannedBikeMinutes, mp: week.plannedMpMinutes })), null, 2));
