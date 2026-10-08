import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const input = process.argv[2] || "marathonschema_Roy_FINAL_V9_2_350_GARMIN_OUTDOOR_2026-10-08.md";
const output = process.argv[3] || "training-data.js";
const source = fs.readFileSync(input, "utf8");
// The supplied implementation prompt explicitly corrects this one derived range.
const clean = (text = "") => text.replace(/\*\*|`/g, "").replace("22,3–24,2 km", "21,5–23,3 km").trim();
const field = (body, name) => clean(body.match(new RegExp(`^\\*\\*${name}:\\*\\* (.+)$`, "m"))?.[1] || "").replace(/\.$/, "");
const dates = ["2026-10-05", "2026-10-12", "2026-10-19", "2026-10-26", "2026-11-02", "2026-11-09", "2026-11-16"];
const themes = ["Actief herstel", "Herstart met vijf runs", "Two-Hour Confidence", "Half Marathon+ Confidence", "Piek + dubbele confidence", "Taper", "Marathonweek"];
const previousProtocols = JSON.parse(fs.readFileSync(new URL("./previous-plan-protocols-v8.json", import.meta.url), "utf8"));
const canonicalProtocol = (workout) => JSON.stringify({ activityType: workout.activityType, groups: workout.groups.map((g) => ({ kind:g.kind, repetitions:g.repetitions, segments:g.segments.map((s) => ({ name:s.name, durationSeconds:s.durationSeconds, targetType:s.targetType, targetValue:s.targetValue, inclinePercent:s.inclinePercent })) })) });
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
const referenceRow = sections[1].blocks.find((b) => b.type === "table").rows.find((row) => row[0] === "7 oktober 2026");
if (!referenceRow) throw new Error("De uitgevoerde training van 7 oktober ontbreekt");
const reference = referenceRow[1];
const duration = reference.match(/totale tijd (\d+):(\d+)/);
const actualActivity = { activityId:"roy-garmin-2026-10-07", workoutId:"V9_2-W41-T2", date:"2026-10-07", actualDurationSeconds:Number(duration[1])*60+Number(duration[2]), actualDistanceKm:Number(reference.match(/([\d,]+) km/)[1].replace(",",".")), averagePace:reference.match(/gemiddeld (\d+:\d+)\/km/)[1]+"/km", averageHeartRate:Number(reference.match(/hartslag (\d+) bpm/)[1]), averageCadence:Number(reference.match(/cadans circa (\d+) spm/)[1]), sensor:"Polar H9", source:"Door Roy gerapporteerd in V9.2; geen automatische Garmin-import", note:reference, actualStepsVerified:false };
const recovery = [
  "Een volledige rustdag na de langere duur, ook over een weekgrens heen.",
  "Minimaal 48 uur tussen MP en lange duur, in beide richtingen; bij voorkeur 72 uur of meer.",
  "Langere duurlopen circa 6–8 dagen uit elkaar. Alleen W41 bevat een rustige fietsrit.",
  "W42–45: maandag rust, dinsdag T1, woensdag T2 MP, donderdag T3 recovery, vrijdag rust, zaterdag T4 easy, zondag T5 lange duur. Voorkeursdagen, geen verplicht rooster.",
  "Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen.",
  "Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
];
const overrides = sections[2].blocks.filter((block) => block.type === "item" || block.type === "paragraph").map((block) => block.text);

function parseGroups(body, id, activityType) {
  const rows = body.split("\n").filter((line) => /^\|/.test(line)).map((line) => line.split("|").slice(1, -1).map(clean));
  const groups = [];
  let repeatGroup = null;
  let number = 0;
  for (const row of rows) {
    if (![4, 5].includes(row.length) || /^Stap/.test(row[0]) || /^-+$/.test(row[0])) continue;
    const duration = row.length === 5 ? row[2] : row[1];
    const target = row.length === 5 ? row[3] : row[2];
    const cue = row.at(-1);
    if (row[0] === "Herhalen") {
      repeatGroup = { groupId: `${id}-g${groups.length + 1}`, kind: "repeat", repetitions: Number(duration.match(/\d+/)[0]), label: "Werk + herstel", segments: [] };
      groups.push(repeatGroup);
      continue;
    }
    const nested = row[0].startsWith("↳");
    const name = row[0].replace(/^↳\s*/, "");
    const minutes = Number(duration.match(/\d+/)?.[0]);
    if (!minutes) throw new Error(`Ongeldige duur ${id}: ${row.join(" | ")}`);
    const walking = /wandelen/i.test(cue);
    const mp = /^Tempo/.test(target);
    const type = activityType === "bike" ? "fiets" : walking ? "wandelen" : mp ? "marathonpace" : name === "Warming-up" ? "warming-up" : name === "Cooldown" ? "cooling-down" : name === "Herstel" ? "herstel" : "easy";
    // Easy is deliberately self-paced. Do not invent a numerical band target.
    const speedRangeKmh = null;
    const segment = { segmentId: `${id}-s${++number}`, name, type, basis: "time", durationSeconds: minutes * 60, display: `${minutes} min`,
      isRecovery: name === "Herstel", targetType: mp ? "Tempo" : "Vrij", targetValue: mp ? "5:24–5:30/km" : null,
      cue, instruction: cue, inclinePercent: activityType === "bike" ? null : 0,
      speedRangeKmh, speedKmh: mp ? 11 : speedRangeKmh ? (speedRangeKmh[0] + speedRangeKmh[1]) / 2 : null,
      speedMode: mp || speedRangeKmh ? "prescribed" : "self-paced", distanceKm: null };
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
    const declared = Number(body.match(/\*\*Totale duur:\*\* (\d+) min/)?.[1] || training[2].match(/· (\d+) min/)?.[1]);
    if (!race && seconds !== declared * 60) throw new Error(`Duurverschil ${id}: ${seconds / 60} vs ${declared}`);
    const title = clean(training[2]).replace(/ · .+$/, "");
    const mpMinutes = flat.filter((step) => step.type === "marathonpace").reduce((sum, step) => sum + step.durationSeconds / 60, 0);
    const walk = flat.filter((step) => step.type === "wandelen").reduce((sum, step) => sum + step.durationSeconds / 60, 0);
    const confidence = /Confidence/.test(title);
    const role = race ? "race" : activityType === "bike" ? "bike" : walk ? "runwalk" : mpMinutes ? "marathonpace" : /Lange duur|Distance Confidence|Half Marathon\+ Confidence/.test(title) ? "long" : /Recovery/.test(title) ? "recovery" : /support/.test(title) ? "support" : "easy";
    const rawPreferred = body.match(/\*\*Voorkeursdatum:\*\* (\d{2})-(\d{2})-(\d{4})/);
    const preferredDate = race ? "2026-11-22" : rawPreferred ? `${rawPreferred[3]}-${rawPreferred[2]}-${rawPreferred[1]}` : weekNumber === 41 ? isoOffset(dates[weekIndex], [1, 2, 4, 5, 3][trainingNumber - 1]) : null;
    const estimates = weekNumber >= 42 && activityType === "run" ? { min: (declared - mpMinutes) / 6.5 + mpMinutes / 5.45, max: (declared - mpMinutes) / 6 + mpMinutes / 5.45, middle: (declared - mpMinutes) / 6.25 + mpMinutes / 5.45 } : null;
    const workout = { workoutId: id, trainingId: id, trainingNumber, weekNumber, weekId: `marathon-v9-2-w${weekNumber}`,
      phaseId: `v9-2-phase-${weekNumber}`, phaseName: themes[weekIndex], date: race ? "2026-11-22" : null, preferredDate,
      title, activityType, category: race ? "wedstrijd" : activityType === "bike" ? "fiets" : role === "long" ? "lange-duur" : mpMinutes ? "kwaliteit" : "rustige-duur",
      role, surface: "buiten", defaultExecutionMode: "garmin", treadmillAvailable: activityType === "run", totalPlannedSeconds: race ? null : seconds,
      totalPlannedLabel: race ? "Tot officiële finish" : `${declared} min`, estimatedDistanceKm: race ? 42.195 : null,
      estimatedDistanceLabel: race ? "42,195 km" : "Geen kilometerdoel", distanceEstimate: estimates, plannedSessionMinutes: race ? 0 : declared,
      plannedRunMinutes: activityType === "run" ? declared - walk : 0, plannedWalkMinutes: walk, plannedBikeMinutes: activityType === "bike" ? declared : 0, plannedMpMinutes: mpMinutes,
      targetRpe: race ? "Gecontroleerd starten" : mpMinutes ? "2–3 easy · 4–5 MP" : activityType === "bike" ? "2–3" : "2–3",
      confidence, goal: race ? "A: 3:50:00 · B: PR <3:55:50 · C: sub 4:00. Officiële finish en geteste uitvoering zijn leidend." : field(body, "Confidence-doel") || field(body, "Doel / uitvoering") || field(body, "Uitvoering") || field(body, "Terugblik uitvoering"),
      mentalGoal: "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      recoveryAdvice: recovery.join(" "), orderWarning: "", locationStatus: race ? "Buitenwedstrijd" : activityType === "bike" ? "Fietsen / hometrainer" : "Outdoor / Garmin · loopband als alternatief",
      outsideVariant: race ? "Buiten op de officiële route. De officiële finish beëindigt de race, niet 42,195 GPS-kilometer." : activityType === "bike" ? "Buiten fietsen of binnen op de hometrainer, met dezelfde duur en rustige inspanning." : "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      treadmillInstruction: field(body, "Loopband"), bikeInstruction: field(body, "FR165-uitvoering"), hometrainerInstruction: field(body, "Hometrainer"),
      durationCheck: field(body, "Duurcontrole"), nutrition: field(body, "Voeding oefenen") || field(body, "Voedingsoefening"), rehearsal: field(body, "Generale repetitie"),
      shoes: "Vertrouwde trainingschoenen. Test raceschoenen en sokken uiterlijk in W43 of W44, niet voor het eerst W45. W45 herhaalt de geteste routine; geen nieuwe schoenen op racedag.",
      labels: [confidence ? "CONFIDENCE" : "", mpMinutes ? "MARATHONPACE" : "", role === "recovery" ? "RECOVERY" : "", role === "support" ? "AEROBIC SUPPORT" : "", race ? "RACE" : ""].filter(Boolean),
      tone: race ? "race" : mpMinutes ? "quality" : "easy", groups,
      garmin: { groups, programSummary: field(body, "Programmeer in Garmin als") || field(body, "Garmin-invoer"), referenceDistanceLabel: race ? "42,195 km officieel" : "Geen afstandsdoel", isRacePlan: race },
      protocolSignature: crypto.createHash("sha256").update(JSON.stringify(groups)).digest("hex"),
    };
    if (id === "V9_2-W45-T5") workout.latestDate = "2026-11-08";
    // Compare Garmin time/target protocols, excluding versioned IDs and explanatory text.
    const previous = previousProtocols.find((p) => p.id === id.replace("V9_2-", "V8-"));
    if (previous && canonicalProtocol(workout) === canonicalProtocol(previous)) {
      workout.compatiblePreviousIds = [previous.id];
      if (weekNumber === 41 && trainingNumber !== 4) workout.compatiblePreviousIds.push(previous.id.replace("V8-", "V6-"));
    }
    if (id === actualActivity.workoutId) workout.reportedExecution = actualActivity;
    if (race) {
      workout.garmin.programSummary = "Normale activiteit Hardlopen · Auto Pause uit · officiële finish leidend. Optioneel één open stap Hardlopen, LAP-knop, Geen doel.";
      workout.garmin.raceGuidance = sections[7].blocks;
    }
    return workout;
  });
  const load = workouts.filter((w) => w.activityType !== "race").reduce((sum, w) => ({ session: sum.session + (w.activityType === "run" ? w.plannedSessionMinutes : 0), run: sum.run + w.plannedRunMinutes, walk: sum.walk + w.plannedWalkMinutes, bike: sum.bike + w.plannedBikeMinutes, mp: sum.mp + w.plannedMpMinutes }), { session: 0, run: 0, walk: 0, bike: 0, mp: 0 });
  const focus = field(match[3], "Weekdoel").split(" Totaal:")[0] || "Rustige herstelweek: vier loopcontacten en één rustige fietsrit; geen MP of snellere prikkels.";
  const distanceEstimate = workouts.some((w) => w.distanceEstimate) ? workouts.reduce((sum, w) => ({ min: sum.min + (w.distanceEstimate?.min || 0), max: sum.max + (w.distanceEstimate?.max || 0), middle: sum.middle + (w.distanceEstimate?.middle || 0) }), { min: 0, max: 0, middle: 0 }) : null;
  return { weekNumber, weekId: `marathon-v9-2-w${weekNumber}`, phaseId: `v9-2-phase-${weekNumber}`, phaseName: themes[weekIndex], weekType: themes[weekIndex], startDate: dates[weekIndex], endDate: isoOffset(dates[weekIndex], 6), periodLabel: `${calendarLabel(dates[weekIndex])} – ${calendarLabel(isoOffset(dates[weekIndex], 6))}`, focus, planningMode: "flexible", includesMarathon: weekNumber === 47, distanceEstimate,
    restDays: weekNumber === 41 ? ["maandag", "zondag"] : weekNumber <=45 ? ["maandag", "vrijdag"] : weekNumber ===46 ? ["maandag", "donderdag", "zaterdag"] : ["maandag", "donderdag", "vrijdag"],
    plannedSessionMinutes: load.session, plannedRunMinutes: load.run, plannedWalkMinutes: load.walk, plannedBikeMinutes: load.bike, plannedMpMinutes: load.mp, workouts,
    weekPhilosophy: { theme: themes[weekIndex], summary: focus, adaptations: ["3:50 A-DOEL", "VOORKEURSDAGEN"], why: [focus], targetLink: "A: 3:50:00 · B: PR <3:55:50 · C: sub 4:00. Checkpoints verfijnen de uitvoering, geen eindtijdgarantie.", whyNotMore: "Geen kilometerquotum, extra tests of late inhaalpiek. Lange duur maximaal 160 minuten; taper vanaf 9 november.", confidence: "Vertrouwen komt uit goed verwerkte buitenweken, gecontroleerde MP en passend herstel." } };
});
if (weeks.length !== 7 || weeks.flatMap((week) => week.workouts).length !== 33) throw new Error("Onvolledig V9.2-schema");
const plan = {
  config: { planId: "marathon-final-v9-2-350-2026", planVersion: 16, schemaVersion: "marathon-final-v9-2-350-2026.10.08-1", sourceFile: path.basename(input), sourceSha256: crypto.createHash("sha256").update(source).digest("hex"),
    planName: "Marathon 3:50", planSubtitle: "FINAL V9.2 · 3:50 · Garmin / Outdoor", startDate: "2026-10-05", endDate: "2026-11-22", marathonDate: "2026-11-22", raceDistanceKm: 42.195,
    targetTime: "3:50:00", targetPace: "5:27/km", practicalRacePace: "5:27/km", mpTarget: "5:24–5:30/km", secondaryTarget: "PR <3:55:50", fallbackTarget: "Sub 4:00", historicalAmbition: "3:30 (historisch)", volumeUnit: "minutes" },
  reportedActivities: [actualActivity],
  workoutAliases: Object.fromEntries(weeks.flatMap((week) => week.workouts).flatMap((workout) => (workout.compatiblePreviousIds || []).map((id) => [id,workout.workoutId]))),
  weeks, allWorkouts: weeks.flatMap((week) => week.workouts), phases: weeks.map((week, index) => ({ phaseId: week.phaseId, name: week.phaseName, shortName: week.phaseName, number: index + 1, startWeek: week.weekNumber, endWeek: week.weekNumber, startDate: week.startDate, endDate: week.endDate, description: week.focus })),
  guidance: { sections, scheduling: recovery, painRules: overrides,
    philosophy: ["A-doel 3:50:00, B-doel een PR onder 3:55:50, C-doel sub 4:00. Ambitie is geen voorspelling of veiligheidsgarantie.", "Herstelweek, daarna vijf loopdagen in W42–45. MP 5:24–5:30/km, gericht op 5:27; alle lange duur volledig easy.", "W45 piekt met 320 min, 35 min MP continu en 160 min Final Distance Confidence; vanaf 9 november taper. Geen krachttraining, extra tests of gemiste kilometers inhalen."],
    paces: [{ type: "Easy", speed: "Geen doel · praattempo buiten en op de band", incline: "0%", rpe: "2–3" }, { type: "Marathonpace", speed: "5:24–5:30/km · band 11,0 km/u", incline: "0%", rpe: "gecontroleerd" }],
    surfaceStrategy: { title: "Outdoor / Garmin of Loopband", explanation: "Zelfde duren en repeats; outdoor is de standaard. Easy blijft op gevoel, zonder verplichte snelheid.", treadmill: ["0% starthelling", "Easy op praattempo / RPE", "MP 11,0 km/u"], outside: ["Easy: Geen doel", "MP: Tempo 5:24–5:30/km", "H9 als observatie"] } },
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
