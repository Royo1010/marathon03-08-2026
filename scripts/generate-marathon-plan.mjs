import fs from "node:fs";
import path from "node:path";

const input = process.argv[2] || "marathon-schema-3u30-definitief-2026.md";
const output = process.argv[3] || "training-data.js";
const source = fs.readFileSync(input, "utf8").replace(/\r/g, "");
const clean = (s) => s.replace(/\*\*|`/g, "").trim();
const number = (s) => Number(s.replace(",", "."));
const label = (n) => n.toLocaleString("nl-NL", { maximumFractionDigits: 1 });
const field = (body, name) => clean(body.match(new RegExp(`^\\*\\*${name}:\\*\\* (.+)$`, "m"))?.[1] || "");
const days = (offset) => new Date(Date.UTC(2026, 7, 31 + offset)).toISOString().slice(0, 10);
const problems = [];
const previous = JSON.parse(fs.readFileSync(new URL("./previous-workouts-v5.json", import.meta.url), "utf8"));

function seconds(text) {
  const parts = text.split(":").map(number);
  return parts.length === 2 ? parts[0] * 60 + parts[1] : number(text) * 60;
}

function parseBlock(line) {
  const m = line.match(/^\d+\. ([\d,:.]+) (min|sec|km)(?: wandelen)? @ ([\d,]+) km\/u — ([\d,]+)%$/);
  if (m) {
    const speedKmh = number(m[3]);
    const inclinePercent = number(m[4]);
    return {
      basis: m[2] === "km" ? "distance" : "time",
      ...(m[2] === "km" ? { distanceKm: number(m[1]) } : { durationSeconds: m[2] === "sec" ? number(m[1]) : seconds(m[1]) }),
      display: `${m[1]} ${m[2]}`, speedKmh, inclinePercent,
      type: speedKmh <= 6 ? "wandelen" : speedKmh <= 8.5 ? "cooling-down" : speedKmh < 9.9 ? "herstel" : speedKmh <= 10.3 ? "easy" : inclinePercent === 0.5 ? "steady" : speedKmh < 12 ? "sub-marathon" : speedKmh <= 12.1 ? "marathonpace" : speedKmh < 13 ? "drempel" : "interval",
      instruction: "",
    };
  }
  if (/^\d+\. 5,00 km test/.test(line)) return { basis: "distance", distanceKm: 5, speedKmh: null, inclinePercent: 1, display: "5,00 km", type: "test", instruction: line.split(";")[1].trim() };
  if (/^\d+\. .*@/.test(line)) throw new Error(`Onbegrepen trainingsblok: ${line}`);
  return null;
}

function table(heading) {
  const rest = source.slice(source.indexOf(heading));
  return rest.slice(0, rest.indexOf("\n\n")).split("\n").slice(2).map((l) => l.split("|").slice(1, -1).map(clean));
}
const protocol = table("| Blok |").map((cols, i) => ({ ...parseBlock(`${i + 1}. ${cols[1]} @ ${cols[2]} — ${cols[3]}`), type: cols[4] }));
const phaseDefinitions = [
  ["opbouw-confidence", "Opbouw en confidence", 36, 39],
  ["herstel-test", "Herstel en eerste test", 40, 40],
  ["marathonspecifiek", "Marathonspecifieke piekfase", 41, 44],
  ["taper", "Taper", 45, 46],
  ["marathonweek", "Marathonweek", 47, 47],
].map(([phaseId, name, startWeek, endWeek], i) => ({ phaseId, name, shortName: name, number: i + 1, startWeek, endWeek, startDate: days((startWeek - 36) * 7), endDate: days((endWeek - 36) * 7 + 6) }));
const weekGoals = [
  "Basisvolume en eerste beheerste marathonpaceblokken",
  "Drempelwerk en lange duur richting 18 km",
  "Eerste 20K confidence run en submaximale nulmeting",
  "3 × 12 min MP en progressieve halve-marathonconfidence",
  "Vermoeidheid laten zakken en 5K-snelheidsreserve meten",
  "Een uur marathonritme en steady halve-marathonconfidence",
  "Identieke fitnesscheck en marathonpace na 150 minuten",
  "3 × 15 min MP-test en de langste duurloop van 30,4 km",
  "Minder volume, met 2 × 30 min MP onder vermoeidheid",
  "Taper starten en kwaliteit behouden zonder nieuwe tests",
  "Frisheid opbouwen en marathonpace kort onderhouden",
  "Losmaken, volledig herstellen en de marathon uitvoeren",
];
const coreRules = source.slice(source.indexOf("## Kernprincipes"), source.indexOf("# 2.")).split("\n").filter((l) => l.startsWith("- ")).map((l) => clean(l.slice(2)));
const fuelText = "Oefen voor grote lange trainingen geleidelijk richting 60–75 gram koolhydraten per uur, indien goed verdragen. Bouw dit niet ineens op in de zwaarste sessie; gebruik in de laatste weken geen nieuwe producten.";
const fullFuelText = "Gebruik dezelfde producten, timing, beoogde hoeveelheid per uur en een vergelijkbare drinkstrategie als op raceday.";
const weekParts = [...source.matchAll(/^## WEEK (\d+) — (.+)\n([\s\S]*?)(?=^## WEEK |^# 6\.)/gm)];

const weeks = weekParts.map(([, nr, weekType, body]) => {
  const weekNumber = Number(nr);
  const phase = phaseDefinitions.find((p) => weekNumber >= p.startWeek && weekNumber <= p.endWeek);
  const week = { weekId: `marathon-3u30-w${nr}`, weekNumber, phaseId: phase.phaseId, phaseName: phase.name, startDate: days((weekNumber - 36) * 7), endDate: days((weekNumber - 36) * 7 + 6), periodLabel: field(body, "Periode"), weekType, focus: weekGoals[weekNumber - 36], includesMarathon: weekNumber === 47 };
  const headings = [...body.matchAll(/^### (Training (\d+) — (.+)|Extra Fitness Check #(\d+))\n/gm)];
  week.workouts = headings.map((match, i) => {
    const [, heading, nr, title, check] = match;
    const content = body.slice(match.index + match[0].length, headings[i + 1]?.index ?? body.length);
    const trainingNumber = nr ? Number(nr) : null;
    const workoutId = `marathon-3u30-w${weekNumber}-${nr ? `t${nr}` : `fitness-check-${check}`}`;
    const labels = field(content, "Labels").split(", ").filter(Boolean);
    const race = weekNumber === 47 && trainingNumber === 4;
    const blocks = check ? protocol.map((s) => ({ ...s })) : content.split("\n").map((l) => parseBlock(l.trim())).filter(Boolean);
    if (race) blocks.push({ basis: "distance", distanceKm: 42.195, speedKmh: 42.195 / 3.5, inclinePercent: null, type: "wedstrijd", display: "42,195 km", instruction: "Buitenwedstrijd: volg de pacingstrategie; 3:30 is een doel, geen vaste voorspelling." });
    if (!blocks.length) throw new Error(`Geen blokken: ${workoutId}`);
    if (!race) {
      blocks[0].type = "warming-up";
      if (blocks.at(-1).speedKmh <= 9) blocks.at(-1).type = blocks.at(-1).speedKmh <= 6 ? "wandelen" : "cooling-down";
    }
    blocks.forEach((s, i) => { s.segmentId = `${workoutId}-s${String(i + 1).padStart(2, "0")}`; });
    const distance = blocks.reduce((sum, s) => sum + (s.distanceKm ?? s.durationSeconds * s.speedKmh / 3600), 0);
    const durations = blocks.map((s) => s.durationSeconds || (s.speedKmh ? s.distanceKm / s.speedKmh * 3600 : null));
    const duration = durations.every((s) => s > 0) ? Math.round(durations.reduce((a, b) => a + b, 0)) : null;
    const summary = field(content, "(?:Totaal|Loopbandtotaal)");
    const statedTime = summary.match(/^([\d:]+) min/);
    if (statedTime && duration !== seconds(statedTime[1])) problems.push({ workoutId, field: "duration", source: seconds(statedTime[1]), calculated: duration });
    const category = race ? "wedstrijd" : trainingNumber === 4 ? "lange-duur" : labels.includes("TEST") ? "testtraining" : labels.includes("RECOVERY") ? "herstel" : labels.includes("INTERVAL") || labels.includes("STRIDES") ? "interval" : trainingNumber === 2 ? "kwaliteit" : "rustige-duur";
    const tone = race ? "race" : labels.includes("TEST") ? "test" : trainingNumber === 4 ? "long" : labels.includes("RECOVERY") ? "recovery" : labels.includes("MARATHON SPECIFIC") ? "mp" : labels.includes("INTERVAL") || labels.includes("STRIDES") ? "interval" : trainingNumber === 2 ? "threshold" : labels.includes("STEADY") ? "steady" : "easy";
    const detailsSections = [];
    const primaryFields = new Set(["Labels", "Blokken", "Afstandsblokken", "Loopbandblokken", "Totaal", "Loopbandtotaal", "Doel", "RPE", "Mentaal", "Protocol"]);
    for (const [, name, value] of content.matchAll(/^\*\*([^*]+):\*\* (.+)$/gm)) if (!primaryFields.has(name)) detailsSections.push({ title: name, items: [clean(value)] });
    const rows = content.split("\n").filter((l) => l.startsWith("|") && !/^\|\s*---/.test(l));
    if (rows.length) detailsSections.push({ title: race ? "Wedstrijdstrategie" : "Interpretatie", items: rows.slice(1).map((l) => l.split("|").slice(1, -1).map(clean).join(" · ")) });
    if (race) detailsSections.unshift({ title: "Pacing", items: ["Exact 5:00/km geeft ongeveer 3:30:59. Voor 3:30:00 is gemiddeld 4:58,6/km nodig; na de beheerste start ligt het tempo hoofdzakelijk rond 4:58–4:59/km."] });
    const locationStatus = labels.includes("BUITEN AANBEVOLEN") ? "Buiten aanbevolen" : labels.includes("LOOPBAND AANBEVOLEN") ? "Loopband aanbevolen" : race ? "Buitenwedstrijd" : "Primair loopband";
    const goal = field(content, "Doel") || "Het geteste raceplan uitvoeren wanneer het totaalbeeld groen licht geeft.";
    const mentalGoal = field(content, "Mentaal") || field(content, "B-doel");
    const long = trainingNumber === 4;
    const recoveryStatus = long || trainingNumber === 2 ? "required" : check ? "recommended" : "none";
    const workout = {
      workoutId, weekNumber, trainingNumber, trainingLabel: nr ? `Training ${nr}` : `Extra Fitness Check #${check}`,
      weekId: week.weekId, dateLabel: week.periodLabel, phaseId: week.phaseId, phaseName: phase.name,
      title: title || heading, category, tone, labels, surface: race ? "buiten" : "loopband",
      isExtra: Boolean(check), isFitnessCheck: Boolean(check), fitnessCheckNumber: check ? Number(check) : null,
      isTest: labels.includes("TEST"), testNumber: !labels.includes("TEST") ? null : check ? `fitness-${check}` : weekNumber === 40 ? 1 : weekNumber === 41 ? "rhythm" : weekNumber === 43 ? 2 : weekNumber === 44 ? 3 : null,
      groups: [{ groupId: `${workoutId}-g1`, kind: "sequence", label: check ? "Vast vergelijkingsprotocol" : "Exacte opbouw", repetitions: 1, segments: blocks }],
      totalPlannedSeconds: duration,
      totalPlannedLabel: race ? "Marathon" : duration == null ? "39 min + 5 km test" : duration % 60 === 0 ? `${duration / 60} min` : `${Math.floor(duration / 60)}:${String(duration % 60).padStart(2, "0")} min`,
      estimatedDistanceKm: distance, estimatedDistanceLabel: race ? "42,195 km" : `±${weekNumber === 44 && trainingNumber === 2 ? distance.toLocaleString("nl-NL", { maximumFractionDigits: 2 }) : label(distance)} km`,
      sourceSummary: summary, goal, targetRpe: field(content, "RPE") || "Wedstrijdinspanning volgens controle", mentalGoal,
      rationale: `${goal} ${mentalGoal}`, detailsSections, notes: [],
      recoveryStatus, recoveryLabel: recoveryStatus === "required" ? "Herstelruimte bewaken" : recoveryStatus === "recommended" ? "Rustige dag aanbevolen" : "Easy blijft easy",
      recoveryAdvice: "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
      orderWarning: field(content, "Planning") || (weekNumber >= 45 ? "Taper beschermd: geen extra volume, tests of trainingsdagen." : "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen."),
      locationStatus, outsideVariant: field(content, "Buitenvariant") || field(content, "Ondergrond") || (check ? "Gebruik dezelfde loopband, snelheden en hellingen als bij de andere check; geen automatische snelheidsaanpassing." : "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken."),
      fueling: long, fullFuelRehearsal: long && [43, 44].includes(weekNumber),
      nutrition: long ? `${fuelText} ${[43, 44].includes(weekNumber) ? fullFuelText : ""} ${field(content, "Voeding")}`.trim() : "",
      evaluation: labels.includes("TEST") ? [field(content, "RPE"), ...detailsSections.filter((s) => s.title === "Interpretatie").flatMap((s) => s.items)].join(" ") : null,
      protocolSignature: JSON.stringify(blocks.map((s) => [s.durationSeconds || null, s.distanceKm || null, s.speedKmh, s.inclinePercent])),
    };
    if (long && !labels.includes("RACEVOEDING OEFENEN")) labels.push("RACEVOEDING OEFENEN");
    if (weekNumber === 47 && trainingNumber === 3) { workout.recoveryStatus = "required"; workout.recoveryLabel = "Daarna volledige rust"; workout.recoveryAdvice = field(content, "Planning"); }
    return workout;
  });
  week.plannedDistanceKm = week.workouts.reduce((s, w) => s + w.estimatedDistanceKm, 0);
  week.plannedDistanceLabel = `±${label(week.plannedDistanceKm)} km`;
  week.weekPhilosophy = { theme: weekType, summary: week.focus, adaptations: [...new Set(week.workouts.flatMap((w) => w.labels).filter((l) => !/VOEDING|AANBEVOLEN/.test(l)))], why: week.workouts.map((w) => `${w.trainingLabel}: ${w.goal}`), targetLink: "Van aerobe omvang en snelheidsreserve naar controle op 12,0 km/u onder vermoeidheid, gevolgd door taper en frisheid.", whyNotMore: coreRules.filter((s) => /Easy|taper|langste|pijn|test is/.test(s)).join(" "), confidence: week.workouts.filter((w) => w.trainingNumber === 4 || w.isTest).map((w) => w.mentalGoal).join(" ") };
  return week;
});

const paces = table("| Type |").map(([type, speed, incline, rpe]) => ({ type, speed, incline, rpe }));
const raceStrategy = table("| Wedstrijddeel |").map(([distance, pace, instruction]) => ({ distance, pace, instruction }));
const tests = weeks.flatMap((w) => w.workouts).filter((w) => w.isTest);
const plan = {
  config: { planId: "marathon-3u30-definitief-2026", planVersion: 6, schemaVersion: "marathon-3u30-definitief-2026.09.02-1", sourceFile: path.basename(input), planName: "Marathonschema 3:30", planSubtitle: "Vier kerntrainingen per week en twee extra fitnesschecks", startDate: days(0), endDate: "2026-11-22", marathonDate: "2026-11-22", targetTime: "3:30:00", targetPace: "4:58,6/km", targetSpeedKmh: 42.195 / 3.5, practicalMarathonSpeedKmh: 12, trainingFrequency: 4, primarySurface: "primair loopband" },
  phases: phaseDefinitions, weeks, sourceDiscrepancies: problems, previousWorkouts: previous,
  guidance: {
    philosophy: coreRules, paces,
    rpeScale: paces.map((p) => ({ type: p.type, rpe: p.rpe, feeling: p.type === "Easy" ? "Volledige zinnen mogelijk." : "Volg de specifieke training en houd controle." })),
    scheduling: ["Vier reguliere loopdagen per week. Alleen W38 en W42 hebben een extra Fitness Check, geen structurele vijfde loopdag.", weeks[0].workouts[0].recoveryAdvice],
    suggestedSequences: ["Trainingsdagen zijn vrij te kiezen. Plaats minimaal één rustdag tussen Training 2 en Training 4; laat op opeenvolgende loopdagen één sessie easy zijn."],
    incline: paces.map((p) => `${p.type}: ${p.incline}.`), painRules: coreRules.filter((s) => /pijn|test is|praattest/.test(s)), fueling: [fuelText, fullFuelText],
    raceStrategy, targetConfirmation: ["Exact 5:00/km geeft 3:30:59, niet 3:30:00. Het benodigde gemiddelde is 4:58,6/km.", "Halverwege-richtpunt: 1:44:50–1:45:00, rekening houdend met gelopen lijn en officiële markeringen.", field(weekParts.at(-1)[3], "B-doel")],
    officialTests: tests.map((w) => ({ week: w.weekNumber, training: w.isExtra ? "extra" : w.trainingNumber, title: w.title, question: w.goal })),
    testTimeline: ["Vanaf week 45: geen nieuwe test, volume of trainingsdag. Frisheid heeft voorrang."],
  },
};
if (weeks.length !== 12 || weeks.some((w) => w.workouts.filter((t) => !t.isExtra).length !== 4)) throw new Error("Schema onvolledig");
for (const w of weeks.flatMap((w) => w.workouts)) for (const s of w.groups[0].segments) {
  if (w.surface === "loopband" && !Number.isFinite(s.inclinePercent)) throw new Error(`Geen helling: ${s.segmentId}`);
  if (!(s.durationSeconds > 0 || s.distanceKm > 0)) throw new Error(`Geen duur/afstand: ${s.segmentId}`);
}

function installModel() {
  function segmentDurationSeconds(segment) {
    if (segment.durationSeconds) return segment.durationSeconds;
    if (segment.distanceKm && segment.speedKmh) return Math.round(segment.distanceKm / segment.speedKmh * 3600);
    return 0;
  }
  function flattenWorkoutSegments(workout) {
    const result = [];
    (workout?.groups || []).forEach((group) => {
      const repeats = group.kind === "repeat" ? group.repetitions || 1 : 1;
      for (let repeat = 1; repeat <= repeats; repeat++) (group.segments || []).forEach((segment, index) => {
        if (group.omitRecoveryAfterLast && repeat === repeats && index === group.segments.length - 1 && segment.isRecovery) return;
        result.push({ ...segment, groupLabel: group.label, repeat, repeats, executionId: `${segment.segmentId}-r${repeat}` });
      });
    });
    return result;
  }
  function calculateWorkoutDistanceKm(workout) {
    return flattenWorkoutSegments(workout).reduce((sum, s) => sum + (s.distanceKm ?? (s.durationSeconds || 0) * (s.speedKmh || 0) / 3600), 0);
  }
  function calculateWeekDistanceKm(week) { return week.workouts.reduce((sum, w) => sum + calculateWorkoutDistanceKm(w), 0); }
  window.MARATHON_MODEL = { segmentDurationSeconds, flattenWorkoutSegments, calculateWorkoutDistanceKm, calculateWeekDistanceKm };
  window.APP_CONFIG = window.MARATHON_PLAN.config;
  window.TRAINING_WEEKS = window.MARATHON_PLAN.weeks;
  window.TRAINING_PLAN = window.MARATHON_PLAN.phases.map((p) => ({ ...p, weeks: window.TRAINING_WEEKS.filter((w) => w.phaseId === p.phaseId) }));
}
fs.writeFileSync(output, `// Generated from ${path.basename(input)}. Edit the source, then regenerate.\nwindow.MARATHON_PLAN = ${JSON.stringify(plan, null, 2)};\n(${installModel.toString()})();\n`);
console.log(JSON.stringify({ workouts: weeks.flatMap((w) => w.workouts).length, weeks: weeks.map((w) => [w.weekNumber, w.plannedDistanceKm]), sourceDiscrepancies: problems }, null, 2));
