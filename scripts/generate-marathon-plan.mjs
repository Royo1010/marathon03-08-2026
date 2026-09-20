import fs from "node:fs";
import path from "node:path";

const input = process.argv[2] || "marathonschema_Roy_FINAL_V3_3u30_2026.md";
const output = process.argv[3] || "training-data.js";
const source = fs.readFileSync(input, "utf8").replace(/\r/g, "");
const previousWorkoutsV7 = JSON.parse(fs.readFileSync(new URL("./previous-workouts-v7.json", import.meta.url), "utf8"));
const SCHEMA_VERSION = "marathon-3u30-final-v3-2026.09.20-1";
const PLAN_ID = "marathon-3u30-final-v3-2026";
const nl = (value, digits = 2) => Number(value).toLocaleString("nl-NL", { minimumFractionDigits: digits, maximumFractionDigits: digits });
const displayDuration = (minutes) => {
  const seconds = Math.round(minutes * 60);
  if (seconds % 60 === 0) return `${seconds / 60} min`;
  if (seconds < 60) return `${seconds} sec`;
  return `${Math.floor(seconds / 60)} min ${seconds % 60} sec`;
};
const T = (minutes, speedKmh, type, instruction = "") => ({ basis: "time", durationSeconds: Math.round(minutes * 60), display: displayDuration(minutes), speedKmh, inclinePercent: 0, type, instruction });
const O = (minutes, type, instruction = "", speedKmh = null) => ({ basis: "time", durationSeconds: Math.round(minutes * 60), display: displayDuration(minutes), speedKmh, inclinePercent: null, type, instruction });
const D = (distanceKm, type, instruction = "", speedKmh = null) => ({ basis: "distance", distanceKm, display: `${nl(distanceKm, distanceKm === 21.1 ? 1 : distanceKm === 42.195 ? 3 : 2)} km`, speedKmh, inclinePercent: null, type, instruction });

const strengthDefinitions = {
  A: { type: "A", duration: "25–35 min", rir: "2–3 RIR", note: "Geen spierfalen. Altijd na het lopen.", exercises: [["Bulgarian split squat", "2 × 5–6 per been"], ["Romanian deadlift", "2 × 5–6"], ["Standing calf raise", "2 × 8"]] },
  B: { type: "B", duration: "15–20 min", rir: "3–4 RIR", note: "Geen spierfalen. Altijd na het lopen.", exercises: [["Seated calf raise", "2 × 10–12"], ["Bulgarian split squat licht", "1 × 6 per been"], ["Side plank", "2 × 20–30 sec per zijde"]] },
  "A-light": { type: "A-light", duration: "verkorte A-sessie", rir: "3–4 RIR", note: "Zelfde oefeningen als A, één set minder waar mogelijk. Geen spierpijn najagen.", exercises: [["Bulgarian split squat", "één set minder waar mogelijk · 5–6 per been"], ["Romanian deadlift", "één set minder waar mogelijk · 5–6"], ["Standing calf raise", "één set minder waar mogelijk · 8"]] },
  "B-light": { type: "B-light", duration: "circa helft van B", rir: "3–4 RIR", note: "Ongeveer de helft van het normale B-volume. Geen spierpijn najagen.", exercises: [["Seated calf raise", "circa helft van 2 × 10–12"], ["Bulgarian split squat licht", "circa helft van 1 × 6 per been"], ["Side plank", "circa helft van 2 × 20–30 sec per zijde"]] },
};
const recoveryAdvice = "Na een grote zondagse key-run volgt maandag volledige rust. Dinsdagse kwaliteit gaat alleen door bij normaal herstel; anders 24 uur opschuiven en de easy-run laten vervallen of verplaatsen. Niet comprimeren.";
const generalWarning = "Bij scherpe of oplopende lokale pijn, aangepast looppatroon of vroeg geforceerd marathonpace: stoppen of naar easy omzetten. Gemiste kilometers niet inhalen.";
const fullFueling = "Volledige voedingsrepetitie: circa 80 g koolhydraten per uur. Gebruik SiS Beta Fuel Neutral en Bulk Electrolytes volgens het raceplan; bij 40 g per gel is dat ongeveer één gel per 30 minuten.";

function makeWorkout(weekNumber, trainingNumber, spec) {
  const workoutId = `marathon-3u30-w${weekNumber}-t${trainingNumber}`;
  const segments = spec.segments.map((segment, index) => ({ ...segment, segmentId: `${workoutId}-s${String(index + 1).padStart(2, "0")}` }));
  const knownDuration = segments.every((segment) => segment.durationSeconds > 0 || (segment.distanceKm > 0 && segment.speedKmh > 0));
  const totalSeconds = spec.totalSeconds ?? (knownDuration ? Math.round(segments.reduce((sum, segment) => sum + (segment.durationSeconds || segment.distanceKm / segment.speedKmh * 3600), 0)) : null);
  const surface = spec.surface || "loopband";
  if (surface === "loopband" && segments.some((segment) => !Number.isFinite(segment.inclinePercent))) throw new Error(`Ontbrekende helling: ${workoutId}`);
  const strength = spec.strength ? structuredClone(strengthDefinitions[spec.strength]) : null;
  const labels = [...new Set(spec.labels || [])];
  if (spec.confidence && !labels.includes("CONFIDENCE")) labels.push("CONFIDENCE");
  if (strength && !labels.includes("STRENGTH")) labels.push("STRENGTH");
  if (spec.fullFuelRehearsal && !labels.includes("RACEVOEDING")) labels.push("RACEVOEDING");
  return {
    workoutId, weekNumber, trainingNumber, trainingLabel: `Training ${trainingNumber}`, title: spec.title,
    category: spec.category, tone: spec.tone, labels, surface, date: spec.date || null, weekday: spec.weekday || null, fixedDay: Boolean(spec.date),
    groups: [{ groupId: `${workoutId}-g1`, kind: "sequence", label: "Exacte opbouw", repetitions: 1, segments }],
    totalPlannedSeconds: totalSeconds, totalPlannedLabel: spec.durationLabel || (totalSeconds ? `${Math.round(totalSeconds / 60)} min` : "Duur volgens uitvoering"),
    estimatedDistanceKm: spec.distanceKm, estimatedDistanceLabel: spec.category === "wedstrijd" ? "42,195 km" : `±${nl(spec.distanceKm)} km`,
    sourceSummary: `${spec.durationLabel || (totalSeconds ? `${Math.round(totalSeconds / 60)} min` : "variabele duur")} · ${spec.category === "wedstrijd" ? "42,195 km" : `ongeveer ${nl(spec.distanceKm)} km`}`,
    goal: spec.goal, targetRpe: spec.rpe || "Volgens praat- en hersteltest", mentalGoal: spec.mental || "Beheerst uitvoeren en reserve bewaken.", rationale: spec.rationale || spec.goal,
    detailsSections: spec.details || [], notes: spec.notes || [],
    recoveryStatus: spec.recoveryStatus || (["kwaliteit", "lange-duur"].includes(spec.category) ? "required" : "none"),
    recoveryLabel: spec.recoveryLabel || (["kwaliteit", "lange-duur"].includes(spec.category) ? "Herstelruimte bewaken" : "Easy blijft easy"),
    recoveryAdvice: spec.recoveryAdvice || recoveryAdvice, orderWarning: spec.orderWarning || generalWarning,
    locationStatus: surface === "buiten" ? "Buiten" : "Loopband", outsideVariant: spec.locationNote || (surface === "buiten" ? "Buiten uitvoeren zoals beschreven." : "Loopband uitvoeren met 0% helling, tenzij het schema expliciet anders zegt."),
    fueling: Boolean(spec.fueling), fullFuelRehearsal: Boolean(spec.fullFuelRehearsal), nutrition: spec.nutrition || (spec.fullFuelRehearsal ? fullFueling : ""),
    shoes: spec.shoes || "", confidence: Boolean(spec.confidence), strength,
    isExtra: false, isFitnessCheck: false, fitnessCheckNumber: null, isTest: false, testNumber: null, evaluation: null,
    protocolSignature: JSON.stringify(segments.map((segment) => [segment.durationSeconds || null, segment.distanceKm || null, segment.speedKmh, segment.inclinePercent])),
  };
}

const weekSpecs = [
  { number: 39, dates: ["2026-09-21", "2026-09-27"], period: "21 t/m 27 september 2026", type: "TEXEL / BUILD", phase: "texel-build", focus: "Texel integreren, ritme houden en gecontroleerd marathonpace trainen", km: 53.23, planningMode: "flexible", pattern: "Praktisch: ma – wo – vr – zo vanwege Texel", workouts: [
    { title: "Rustige duur", category: "rustige-duur", tone: "easy", labels: ["ZONE 2", "LOOPBAND"], distanceKm: 11.08, durationLabel: "65 min", strength: "A-light", goal: "Rustige aerobe duur opbouwen zonder de Texel-week onnodig zwaar te maken.", rpe: "3–4", segments: [T(5,9.5,"warming-up"),T(55,10.4,"easy"),T(5,9,"cooling-down")] },
    { title: "2 × 12 min MP", category: "kwaliteit", tone: "mp", labels: ["MARATHONPACE", "LOOPBAND"], distanceKm: 10.65, durationLabel: "60 min", goal: "Twee beheerste marathonpaceblokken lopen met volledig herstel onder controle.", rpe: "5–7", segments: [T(10,9.5,"warming-up"),T(5,10.5,"steady"),T(12,12.1,"marathonpace"),T(3,9.5,"herstel"),T(12,12.1,"marathonpace"),T(8,10.3,"easy"),T(10,9,"cooling-down")] },
    { title: "Easy buiten", category: "rustige-duur", tone: "easy", labels: ["EASY", "BUITEN"], surface: "buiten", distanceKm: 8.41, durationLabel: "50 min", goal: "Praattempo en ontspannen buitenritme bewaren.", rpe: "3–4", segments: [O(5,"warming-up","Rustig inlopen"),O(40,"easy","Easy op praattempo"),O(5,"cooling-down","Rustig uitlopen")] },
    { title: "Halve Marathon Texel", category: "lange-duur", tone: "race", labels: ["CONFIDENCE", "BUITENWEDSTRIJD"], surface: "buiten", date: "2026-09-27", weekday: "Zondag", distanceKm: 23.10, durationLabel: "afstandsgestuurd", confidence: true, fueling: true, goal: "Pacing, voeding en weggevoel oefenen zonder verplichte maximale sprint.", rpe: "5–6 start · 6–7 midden · maximaal 7–8 slot", mental: "Wedstrijdgevoel benutten zonder de rest van de cyclus te slopen.", nutrition: "Gebruik de marathonproducten en oefen timing en tolerantie.", segments: [D(1,"warming-up","Rustig inlopen"),D(21.1,"wedstrijd","Halve marathon volgens RPE-opbouw"),D(1,"cooling-down","Alleen uitlopen als de benen normaal voelen")] },
  ]},
  { number: 40, dates: ["2026-09-28", "2026-10-04"], period: "28 september t/m 4 oktober 2026", type: "RECOVERY / REBUILD", phase: "recovery-rebuild", focus: "Texel verwerken en de aerobe basis rustig opnieuw opbouwen", km: 45.93, planningMode: "flexible", pattern: "Volgorde en herstel zijn belangrijker dan vaste dagen", workouts: [
    { title: "Herstel", category: "herstel", tone: "recovery", labels: ["RECOVERY", "LOOPBAND"], distanceKm: 7.14, durationLabel: "45 min", goal: "Vermoeidheid van Texel laten zakken.", rpe: "2–3", segments: [T(5,9.5,"warming-up"),T(35,9.6,"herstel"),T(5,9,"cooling-down")] },
    { title: "Aerobe herstart", category: "rustige-duur", tone: "easy", labels: ["ZONE 2", "LOOPBAND"], distanceKm: 10.89, durationLabel: "65 min", strength: "A-light", goal: "Rustige aerobe belasting opnieuw opbouwen.", rpe: "3–4", segments: [T(5,9.5,"warming-up"),T(55,10.2,"easy"),T(5,9,"cooling-down")] },
    { title: "Easy", category: "rustige-duur", tone: "easy", labels: ["EASY", "LOOPBAND"], distanceKm: 9.19, durationLabel: "55 min", goal: "Extra rustige omvang zonder kwaliteit toe te voegen.", rpe: "3–4", segments: [T(5,9.5,"warming-up"),T(45,10.2,"easy"),T(5,9,"cooling-down")] },
    { title: "Lange easy", category: "lange-duur", tone: "long", labels: ["LONG RUN", "ZONE 2"], distanceKm: 18.71, durationLabel: "110 min", fueling: true, goal: "Duurvermogen rustig hervatten; dit is geen performancetest.", rpe: "3–4", nutrition: "Voeding rustig oefenen; geen performance-test.", segments: [T(5,9.5,"warming-up"),T(100,10.3,"easy"),T(5,9,"cooling-down")] },
  ]},
  { number: 41, dates: ["2026-10-05", "2026-10-11"], period: "5 t/m 11 oktober 2026", type: "OVERLOAD 1", phase: "overload-1", focus: "45 minuten onafgebroken marathonpace en extra gecontroleerde Zone 2", km: 65.16, mpMinutes: 45, planningMode: "flexible", pattern: "Aanbevolen: di – wo – do – za – zo", workouts: [
    { title: "MP Confidence #1", category: "kwaliteit", tone: "mp", labels: ["MP CONFIDENCE #1", "MARATHONPACE", "LOOPBAND"], distanceKm: 13.03, durationLabel: "70 min", confidence: true, strength: "A", goal: "45 minuten onafgebroken op 12,1 km/u gecontroleerd dragen.", rpe: "eerste helft 5–6 · einde maximaal 7", mental: "Bewijs verzamelen dat doeltempo steeds normaler wordt.", segments: [T(10,9.5,"warming-up"),T(5,10.5,"steady"),T(45,12.1,"marathonpace"),T(10,9,"cooling-down")] },
    { title: "Easy", category: "rustige-duur", tone: "easy", labels: ["EASY", "LOOPBAND"], distanceKm: 7.55, durationLabel: "45 min", goal: "Herstellen met ontspannen aerobe arbeid.", rpe: "3–4", segments: [T(5,9.5,"warming-up"),T(35,10.3,"easy"),T(5,9,"cooling-down")] },
    { title: "Middellange Zone 2", category: "rustige-duur", tone: "steady", labels: ["ZONE 2", "VERLENGD"], distanceKm: 15.54, durationLabel: "90 min", strength: "B", goal: "Aerobe omvang verhogen zonder extra intensiteit.", rpe: "3–4", segments: [T(5,9.5,"warming-up"),T(80,10.5,"easy"),T(5,9,"cooling-down")] },
    { title: "Recovery", category: "herstel", tone: "recovery", labels: ["RECOVERY"], distanceKm: 4.74, durationLabel: "30 min", goal: "De benen losmaken vóór de lange duurloop.", rpe: "2–3", segments: [T(5,9.5,"warming-up"),T(20,9.6,"herstel"),T(5,9,"cooling-down")] },
    { title: "Lange rustige duur", category: "lange-duur", tone: "long", labels: ["LONG RUN", "ZONE 2"], distanceKm: 24.29, durationLabel: "140 min", fueling: true, goal: "Lange gecontroleerde duur zonder fast finish.", rpe: "3–4", nutrition: "Voeding oefenen; dit hoeft nog geen volledige 80 g/u-repetitie te zijn.", segments: [T(5,9.5,"warming-up"),T(130,10.5,"easy"),T(5,9,"cooling-down")] },
  ]},
  { number: 42, dates: ["2026-10-12", "2026-10-18"], period: "12 t/m 18 oktober 2026", type: "OVERLOAD 2", phase: "overload-2", focus: "Controlled fast, meer Zone 2 en marathonpace na 110 minuten", km: 72.22, mpMinutes: 40, planningMode: "flexible", pattern: "Aanbevolen: di – wo – do – za – zo", workouts: [
    { title: "4 × 6 min controlled fast", category: "kwaliteit", tone: "threshold", labels: ["CONTROLLED FAST", "LOOPBAND"], distanceKm: 12.52, durationLabel: "70 min", strength: "A", goal: "Snelheidsreserve gecontroleerd onderhouden zonder maximaal werk.", rpe: "circa 7 · maximaal 8 laat", segments: [T(10,9.5,"warming-up"),T(5,10.5,"steady"),T(6,12.7,"drempel"),T(3,9.5,"herstel"),T(6,12.7,"drempel"),T(3,9.5,"herstel"),T(6,12.7,"drempel"),T(3,9.5,"herstel"),T(6,12.7,"drempel"),T(12,10.3,"easy"),T(10,9,"cooling-down")] },
    { title: "Easy", category: "rustige-duur", tone: "easy", labels: ["EASY"], distanceKm: 7.55, durationLabel: "45 min", goal: "Herstellen en aerobe consistentie bewaren.", rpe: "3–4", segments: [T(5,9.5,"warming-up"),T(35,10.3,"easy"),T(5,9,"cooling-down")] },
    { title: "Middellange Zone 2", category: "rustige-duur", tone: "steady", labels: ["ZONE 2", "VERLENGD"], distanceKm: 17.29, durationLabel: "100 min", strength: "B", goal: "Meer aerobe arbeid toevoegen zonder meer hoge intensiteit.", rpe: "3–4", segments: [T(5,9.5,"warming-up"),T(90,10.5,"easy"),T(5,9,"cooling-down")] },
    { title: "Recovery", category: "herstel", tone: "recovery", labels: ["RECOVERY"], distanceKm: 5.54, durationLabel: "35 min", goal: "Licht bewegen vóór de key-run.", rpe: "2–3", segments: [T(5,9.5,"warming-up"),T(25,9.6,"herstel"),T(5,9,"cooling-down")] },
    { title: "MP-under-fatigue Confidence #2", category: "lange-duur", tone: "long", labels: ["MP-UNDER-FATIGUE CONFIDENCE #2", "MARATHONPACE"], distanceKm: 29.32, durationLabel: "165 min", confidence: true, fueling: true, fullFuelRehearsal: true, goal: "Na 110 minuten lopen nog 40 minuten onafgebroken doeltempo dragen.", rpe: "MP beheerst · geen maximale test", mental: "Onder vermoeidheid bewijs verzamelen zonder de cyclus te slopen.", segments: [T(10,9.5,"warming-up"),T(100,10.4,"easy"),T(40,12.1,"marathonpace"),T(5,10,"easy"),T(10,9,"cooling-down")] },
  ]},
  { number: 43, dates: ["2026-10-19", "2026-10-25"], period: "19 t/m 25 oktober 2026", type: "PIEKWEEK", phase: "peak", focus: "Volume-piek, buiten-MP en drie uur gecontroleerde duur", km: 77.73, mpMinutes: 50, planningMode: "flexible", pattern: "Aanbevolen: di – wo – do – za – zo", workouts: [
    { title: "Outdoor MP Confidence #3", category: "kwaliteit", tone: "mp", labels: ["OUTDOOR MP CONFIDENCE #3", "BUITEN", "MARATHONPACE"], surface: "buiten", distanceKm: 14.04, durationLabel: "75 min", confidence: true, strength: "A-light", shoes: "Beoogde marathonschoenen", goal: "Zelf pacing rond 4:58/km dragen zonder bandsturing.", rpe: "einde idealiter maximaal 7", mental: "Marathonpace buiten beheersen zonder er een maximale test van te maken.", segments: [O(10,"warming-up","Rustig inlopen"),O(5,"steady","Geleidelijk opbouwen"),O(50,"marathonpace","Rond 4:58/km",12.1),O(10,"cooling-down","Rustig uitlopen")] },
    { title: "Easy", category: "rustige-duur", tone: "easy", labels: ["EASY"], distanceKm: 8.41, durationLabel: "50 min", goal: "Ontspannen omvang tussen de sleutelprikkels.", rpe: "3–4", segments: [T(5,9.5,"warming-up"),T(40,10.3,"easy"),T(5,9,"cooling-down")] },
    { title: "Middellange Zone 2", category: "rustige-duur", tone: "steady", labels: ["ZONE 2", "VERLENGD"], distanceKm: 18.17, durationLabel: "105 min", strength: "B-light", goal: "De hoogste aerobe weekomvang rationeel ondersteunen.", rpe: "3–4", segments: [T(5,9.5,"warming-up"),T(95,10.5,"easy"),T(5,9,"cooling-down")] },
    { title: "Recovery", category: "herstel", tone: "recovery", labels: ["RECOVERY"], distanceKm: 5.54, durationLabel: "35 min", goal: "Zeer lichte voorbereiding op de 30K Confidence Run.", rpe: "2–3", segments: [T(5,9.5,"warming-up"),T(25,9.6,"herstel"),T(5,9,"cooling-down")] },
    { title: "30K Confidence Run", category: "lange-duur", tone: "long", labels: ["30K CONFIDENCE RUN", "LONG RUN"], distanceKm: 31.58, durationLabel: "180 min", confidence: true, fueling: true, fullFuelRehearsal: true, goal: "Drie uur gecontroleerd lopen en 30 km+ als normale trainingsafstand ervaren.", rpe: "3–4 · geen snelle finish", mental: "Mentale duur opbouwen zonder voorbij de absolute grens van 180 minuten te gaan.", orderWarning: "Absolute grens: 180 minuten. Niet verlengen voor een rond getal.", segments: [T(5,9.5,"warming-up"),T(170,10.6,"easy"),T(5,9,"cooling-down")] },
  ]},
  { number: 44, dates: ["2026-10-26", "2026-11-01"], period: "26 oktober t/m 1 november 2026", type: "KEY MARATHON SPECIFIC", phase: "key-specific", focus: "De zwaarste marathonspecifieke long run met 2 × 35 minuten MP", km: 68.28, mpMinutes: 70, planningMode: "flexible", pattern: "Aanbevolen: di – wo – do – za – zo", workouts: [
    { title: "3 × 4 min controlled fast", category: "kwaliteit", tone: "threshold", labels: ["CONTROLLED FAST"], distanceKm: 9.51, durationLabel: "55 min", strength: "A-light", goal: "Korte snelheidsreserve onderhouden zonder extra intervalvolume.", rpe: "7–8", segments: [T(10,9.5,"warming-up"),T(5,10.5,"steady"),T(4,12.7,"drempel"),T(3,9.5,"herstel"),T(4,12.7,"drempel"),T(3,9.5,"herstel"),T(4,12.7,"drempel"),T(12,10.3,"easy"),T(10,9,"cooling-down")] },
    { title: "Easy", category: "rustige-duur", tone: "easy", labels: ["EASY"], distanceKm: 7.55, durationLabel: "45 min", goal: "Herstellen na controlled fast.", rpe: "3–4", segments: [T(5,9.5,"warming-up"),T(35,10.3,"easy"),T(5,9,"cooling-down")] },
    { title: "Middellange aerobe duur", category: "rustige-duur", tone: "steady", labels: ["ZONE 2"], distanceKm: 15.54, durationLabel: "90 min", goal: "Aerobe omvang behouden vóór de belangrijkste specifieke training.", rpe: "3–4", segments: [T(5,9.5,"warming-up"),T(80,10.5,"easy"),T(5,9,"cooling-down")] },
    { title: "Recovery", category: "herstel", tone: "recovery", labels: ["RECOVERY"], distanceKm: 4.74, durationLabel: "30 min", goal: "Licht bewegen en frisse benen bewaren.", rpe: "2–3", segments: [T(5,9.5,"warming-up"),T(20,9.6,"herstel"),T(5,9,"cooling-down")] },
    { title: "Key Marathon Confidence", category: "lange-duur", tone: "long", labels: ["KEY MARATHON CONFIDENCE", "MARATHONPACE"], distanceKm: 30.94, durationLabel: "170 min", confidence: true, fueling: true, fullFuelRehearsal: true, shoes: "Beoogde marathonschoenen", goal: "70 minuten totaal MP dragen nadat al 75 minuten is gelopen.", rpe: "tweede MP-blok maximaal circa 7–7,5", mental: "Het sterkste marathonspecifieke bewijs verzamelen zonder maximaal te testen.", segments: [T(10,9.5,"warming-up"),T(65,10.4,"easy"),T(35,12.1,"marathonpace"),T(8,9.8,"herstel"),T(35,12.1,"marathonpace"),T(7,10,"easy"),T(10,9,"cooling-down")] },
  ]},
  { number: 45, dates: ["2026-11-02", "2026-11-08"], period: "2 t/m 8 november 2026", type: "TAPER 1", phase: "taper-1", focus: "Taper starten, kwaliteit behouden en herstelmomenten vastzetten", km: 51.75, mpMinutes: 60, planningMode: "calendar", workouts: [
    { title: "35 min continue MP", category: "kwaliteit", tone: "mp", labels: ["MARATHONPACE", "LOOPBAND"], date: "2026-11-03", weekday: "Dinsdag", distanceKm: 11.88, durationLabel: "65 min", strength: "A-light", goal: "Laatste continue loopbandbevestiging van marathonpace.", rpe: "5–7", orderWarning: "Laatste beenkrachtsessie van het schema. Geen spierpijn najagen.", segments: [T(10,9.5,"warming-up"),T(5,10.5,"steady"),T(35,12.1,"marathonpace"),T(5,10.3,"easy"),T(10,9,"cooling-down")] },
    { title: "Easy", category: "rustige-duur", tone: "easy", labels: ["EASY"], date: "2026-11-04", weekday: "Woensdag", distanceKm: 6.69, durationLabel: "40 min", goal: "Ontspannen bewegen tijdens de taper.", rpe: "3–4", segments: [T(5,9.5,"warming-up"),T(30,10.3,"easy"),T(5,9,"cooling-down")] },
    { title: "Aerobe duur", category: "rustige-duur", tone: "steady", labels: ["ZONE 2"], date: "2026-11-05", weekday: "Donderdag", distanceKm: 11.94, durationLabel: "70 min", goal: "Aerobe prikkel behouden zonder nieuwe vermoeidheid op te bouwen.", rpe: "3–4", segments: [T(5,9.5,"warming-up"),T(60,10.4,"easy"),T(5,9,"cooling-down")] },
    { title: "Buiten long run met MP", category: "lange-duur", tone: "long", labels: ["LONG RUN", "BUITEN", "MARATHONPACE"], surface: "buiten", date: "2026-11-08", weekday: "Zondag", distanceKm: 21.24, durationLabel: "120 min", confidence: true, fueling: true, fullFuelRehearsal: true, shoes: "Trainingsschoenen; raceschoenen alleen als nog een laatste specifieke check nodig is", goal: "Laatste substantiële wegprikkel en duidelijke MP-bevestiging buiten.", rpe: "easy beheerst · MP rond doelritme", segments: [O(10,"warming-up","Rustig"),O(80,"easy","Easy rond 10,4 km/u-equivalent / praattempo",10.4),O(25,"marathonpace","Rond 4:58/km",12.1),O(5,"cooling-down","Uitlopen")] },
  ], rest: { "2026-11-02": "Herstellen van W44 heeft prioriteit. Wandelen en mobiliteit alleen ontspannen.", "2026-11-06": "Volledige looprust.", "2026-11-07": "Volledige looprust. Geen training toevoegen omdat de benen goed voelen." }},
  { number: 46, dates: ["2026-11-09", "2026-11-15"], period: "9 t/m 15 november 2026", type: "TAPER 2", phase: "taper-2", focus: "Volume verder verlagen en marathonritme scherp houden", km: 35.07, mpMinutes: 31, planningMode: "calendar", workouts: [
    { title: "2 × 8 min MP", category: "kwaliteit", tone: "mp", labels: ["MARATHONPACE"], date: "2026-11-10", weekday: "Dinsdag", distanceKm: 8.69, durationLabel: "50 min", goal: "Marathonpace kort en gecontroleerd onderhouden.", rpe: "5–6", segments: [T(10,9.5,"warming-up"),T(5,10.5,"steady"),T(8,12.1,"marathonpace"),T(3,9.5,"herstel"),T(8,12.1,"marathonpace"),T(6,10.3,"easy"),T(10,9,"cooling-down")] },
    { title: "Easy", category: "rustige-duur", tone: "easy", labels: ["EASY"], date: "2026-11-11", weekday: "Woensdag", distanceKm: 5.75, durationLabel: "35 min", goal: "Frisheid ondersteunen met een korte easy-run.", rpe: "3–4", segments: [T(5,9.5,"warming-up"),T(25,10.1,"easy"),T(5,9,"cooling-down")] },
    { title: "Easy + strides", category: "interval", tone: "interval", labels: ["EASY", "STRIDES"], date: "2026-11-13", weekday: "Vrijdag", distanceKm: 6.69, durationLabel: "40 min", goal: "Techniek en souplesse wakker houden zonder te sprinten.", rpe: "easy 3–4 · versnellingen kort", orderWarning: "Strides soepel en technisch; géén sprint.", segments: [T(5,9.5,"warming-up"),T(23,10.2,"easy"),T(.5,13,"interval"),T(1.5,9.5,"herstel"),T(.5,13,"interval"),T(1.5,9.5,"herstel"),T(.5,13,"interval"),T(1.5,9.5,"herstel"),T(.5,13,"interval"),T(1.5,9.5,"herstel"),T(4,9,"cooling-down")] },
    { title: "Korte duur + MP", category: "lange-duur", tone: "long", labels: ["MARATHONPACE"], date: "2026-11-15", weekday: "Zondag", distanceKm: 13.94, durationLabel: "80 min", goal: "Laatste langere ritmeprikkel met duidelijk reserve bij de finish.", rpe: "beheerst", segments: [T(10,9.5,"warming-up"),T(50,10.3,"easy"),T(15,12.1,"marathonpace"),T(5,9,"cooling-down")] },
  ], rest: { "2026-11-09": "Volledige looprust na de laatste 120-minutenrun.", "2026-11-12": "Geen looptraining.", "2026-11-14": "Geen looptraining." }},
  { number: 47, dates: ["2026-11-16", "2026-11-22"], period: "16 t/m 22 november 2026", type: "MARATHONWEEK", phase: "marathonweek", focus: "Herstellen, losmaken en het geoefende raceplan uitvoeren", km: 14.01, mpMinutes: 8, planningMode: "calendar", includesMarathon: true, workouts: [
    { title: "Easy", category: "rustige-duur", tone: "easy", labels: ["EASY"], date: "2026-11-17", weekday: "Dinsdag", distanceKm: 4.88, durationLabel: "30 min", goal: "Ontspannen bewegen zonder vermoeidheid te creëren.", rpe: "3", segments: [T(5,9.5,"warming-up"),T(20,10,"easy"),T(5,9,"cooling-down")] },
    { title: "2 × 4 min MP", category: "kwaliteit", tone: "mp", labels: ["MARATHONPACE"], date: "2026-11-19", weekday: "Donderdag", distanceKm: 5.89, durationLabel: "35 min", goal: "Marathonpace nog één keer vertrouwd laten voelen, niet fitheid bewijzen.", rpe: "5–6", segments: [T(10,9.5,"warming-up"),T(5,10.5,"steady"),T(4,12.1,"marathonpace"),T(2,9.5,"herstel"),T(4,12.1,"marathonpace"),T(10,9,"cooling-down")] },
    { title: "Shakeout", category: "interval", tone: "interval", labels: ["SHAKEOUT"], date: "2026-11-21", weekday: "Zaterdag", distanceKm: 3.24, durationLabel: "20 min", goal: "Benen losmaken, ritme voelen en het zenuwstelsel wakker maken.", rpe: "zeer licht", mental: "Iedere versnelling ontspannen; geen vermoeidheid creëren.", segments: [T(5,9.5,"warming-up"),T(7,9.8,"easy"),T(1/3,13,"interval"),T(5/3,9.5,"herstel"),T(1/3,13,"interval"),T(5/3,9.5,"herstel"),T(1/3,13,"interval"),T(5/3,9.5,"herstel"),T(2,9,"cooling-down")] },
    { title: "Marathon", category: "wedstrijd", tone: "race", labels: ["RACE", "MARATHON"], surface: "buiten", date: "2026-11-22", weekday: "Zondag", distanceKm: 42.195, durationLabel: "doel 3:30:00", totalSeconds: 12600, goal: "3:30:00 of sneller met een gecontroleerde start en het volledig geoefende raceplan.", rpe: "wedstrijdinspanning", mental: "Geen tijd bankieren; pas in de slotfase versnellen als benen, ademhaling en techniek dat toelaten.", fueling: true, nutrition: "Circa 80 g koolhydraten per uur met SiS Beta Fuel Neutral en Bulk Electrolytes volgens de geoefende timing. Niets nieuws op racedag.", segments: [D(42.195,"wedstrijd","Buitenmarathon; gemiddeld 12,0557 km/u = 4:58,61/km",12.0557)] },
  ], rest: { "2026-11-16": "Volledige looprust.", "2026-11-18": "Geen looptraining.", "2026-11-20": "Volledige looprust." }},
];

const weekday = (iso) => new Date(`${iso}T12:00:00`).toLocaleDateString("nl-NL", { weekday: "long" });
const titleCase = (value) => value.charAt(0).toUpperCase() + value.slice(1);
const dateRange = (start, end) => {
  const days = [];
  const current = new Date(`${start}T12:00:00`);
  const final = new Date(`${end}T12:00:00`);
  while (current <= final) {
    const iso = [current.getFullYear(), String(current.getMonth() + 1).padStart(2, "0"), String(current.getDate()).padStart(2, "0")].join("-");
    days.push(iso);
    current.setDate(current.getDate() + 1);
  }
  return days;
};

const weeks = weekSpecs.map((spec) => {
  const workouts = spec.workouts.map((workout, index) => makeWorkout(spec.number, index + 1, workout));
  workouts.forEach((workout) => {
    workout.weekId = `marathon-3u30-w${spec.number}`;
    workout.dateLabel = workout.date ? `${titleCase(weekday(workout.date))} ${Number(workout.date.slice(-2))} ${new Date(`${workout.date}T12:00:00`).toLocaleDateString("nl-NL", { month: "long" })}` : spec.period;
    workout.phaseId = spec.phase;
    workout.phaseName = spec.type;
  });
  const days = spec.planningMode === "calendar" ? dateRange(...spec.dates).map((date) => {
    const workout = workouts.find((item) => item.date === date);
    return workout ? { date, weekday: titleCase(weekday(date)), isRestDay: false, workoutId: workout.workoutId } : { date, weekday: titleCase(weekday(date)), isRestDay: true, note: spec.rest?.[date] || "Rust en herstel." };
  }) : [];
  return {
    weekId: `marathon-3u30-w${spec.number}`, weekNumber: spec.number, phaseId: spec.phase, phaseName: spec.type,
    startDate: spec.dates[0], endDate: spec.dates[1], periodLabel: spec.period, weekType: spec.type, focus: spec.focus,
    includesMarathon: Boolean(spec.includesMarathon), planningMode: spec.planningMode, suggestedPattern: spec.pattern || "Vaste kalenderweek",
    plannedDistanceKm: spec.km, plannedDistanceBeforeRaceKm: spec.km, plannedDistanceIncludingRaceKm: spec.includesMarathon ? Number((spec.km + 42.195).toFixed(3)) : spec.km,
    plannedDistanceLabel: `±${nl(spec.km)} km`, mpMinutes: spec.mpMinutes || (spec.number === 39 ? 24 : 0), workouts, days,
    weekPhilosophy: { theme: spec.type, summary: spec.focus, adaptations: [...new Set(workouts.flatMap((workout) => workout.labels))], why: workouts.map((workout) => `${workout.trainingLabel}: ${workout.goal}`), targetLink: "De belasting wordt alleen verhoogd waar die waarschijnlijk bijdraagt aan het vermogen om 12,1 km/u lang en gecontroleerd vol te houden.", whyNotMore: "De hoogste effectieve trainingsbelasting die daadwerkelijk verwerkt kan worden is leidend. Geen extra interval, geforceerde lange duur of ingehaalde kilometers.", confidence: workouts.filter((workout) => workout.confidence).map((workout) => workout.mentalGoal).join(" ") || "Vertrouwen komt uit consistent herstel en beheerste uitvoering." },
  };
});

const phases = weekSpecs.map((spec, index) => ({ phaseId: spec.phase, name: spec.type, shortName: spec.type, number: index + 1, startWeek: spec.number, endWeek: spec.number, startDate: spec.dates[0], endDate: spec.dates[1], description: spec.focus }));
const sourceWeekTotals = Object.fromEntries([...source.matchAll(/^\|\s*(39|40|41|42|43|44|45|46|47 vóór race)\s*\|[^\n]*?\*\*([\d,]+)\*\*/gm)].map((match) => [Number(match[1].match(/\d+/)[0]), Number(match[2].replace(",", "."))]));
for (const week of weeks) if (sourceWeekTotals[week.weekNumber] !== week.plannedDistanceKm) throw new Error(`Weektotaal wijkt af van FINAL V3: W${week.weekNumber}`);
if (!source.includes("# Marathonschema Roy — FINAL V3") || !source.includes("Totaal: circa 328 minuten MP")) throw new Error("Onverwachte FINAL V3-bron");
const preRaceTotal = weeks.reduce((sum, week) => sum + week.plannedDistanceBeforeRaceKm, 0);
if (preRaceTotal.toFixed(2) !== "483.38") throw new Error(`Onjuist programmatotaal: ${preRaceTotal}`);

const plan = {
  config: { planId: PLAN_ID, planVersion: 8, schemaVersion: SCHEMA_VERSION, sourceFile: path.basename(input), planName: "Marathonschema 3:30", planSubtitle: "FINAL V3 · maximaal progressief, maar rationeel", startDate: "2026-09-21", endDate: "2026-11-22", marathonDate: "2026-11-22", targetTime: "3:30:00", targetPace: "4:58,61/km", targetSpeedKmh: 12.0557, practicalMarathonSpeedKmh: 12.1, trainingFrequency: "4–5", primarySurface: "loopband en doelgerichte buitenruns", plannedKmBeforeRace: 483.38, plannedKmIncludingRace: 525.575, programmedMpMinutes: 328 },
  phases, weeks, sourceDiscrepancies: [], previousWorkoutsV7, workoutAliases: {}, strengthDefinitions,
  guidance: {
    philosophy: ["De hoogste effectieve trainingsbelasting die daadwerkelijk verwerkt kan worden, niet de hoogste belasting die op papier mogelijk is.", "Extra belasting komt vooral uit rustige Zone 2; marathonpace is met circa 328 minuten al ruim vertegenwoordigd.", "Controlled-fast blijft beperkt en confidence is bewijs verzamelen, geen maximale test.", "Long runs zijn groot genoeg; er worden geen geforceerde 32–35 km-trainingen toegevoegd.", "De loopband is een voordeel voor exact tempo, gecontroleerde belasting, voeding en ononderbroken lopen.", "Vanaf W45 is de taper kalendergestuurd en zijn rustdagen een verplicht onderdeel van het schema."],
    paces: [{ type: "Herstel", speed: "9,4–9,8 km/u", incline: "0%", rpe: "2–3" }, { type: "Easy / Zone 2", speed: "10,0–10,5 km/u", incline: "0%", rpe: "3–4" }, { type: "Lange easy", speed: "10,3–10,8 km/u", incline: "0%", rpe: "3–4, laat eventueel 5" }, { type: "Marathonpace", speed: "12,1 km/u", incline: "0%", rpe: "5–7" }, { type: "Controlled fast", speed: "12,4–12,8 km/u", incline: "0%", rpe: "7–8" }, { type: "Korte versnelling", speed: "circa 13,0 km/u", incline: "0%", rpe: "kort en soepel" }],
    rpeScale: [{ type: "Herstel", rpe: "2–3", feeling: "Zeer ontspannen." }, { type: "Easy / Zone 2", rpe: "3–4", feeling: "Volledige zinnen mogelijk; praattest is leidend." }, { type: "Marathonpace", rpe: "5–7", feeling: "Doelritme zonder vroeg forceren." }, { type: "Controlled fast", rpe: "7–8", feeling: "Stevig, niet maximaal." }],
    scheduling: ["W39–W44 zijn flexibel: sessievolgorde en herstel zijn belangrijker dan de exacte dag.", "W45–W47 zijn kalendergestuurd; trainingen en rustdagen liggen vast.", recoveryAdvice],
    suggestedSequences: ["Flexibele vijfdaagse week: kwaliteit, easy, middellange Zone 2, recovery, long run. Praktisch vaak di – wo – do – za – zo."],
    incline: ["0% is standaard.", "0,5% wordt alleen bewust gebruikt wanneer een training dat voorschrijft.", "1% is geen automatische buitencorrectie."],
    painRules: ["Groen: schema uitvoeren.", "Oranje: eerst recovery-run, tweede krachttraining en daarna 10–15 minuten middellange Zone 2 schrappen.", "Rood: sleuteltraining stoppen of naar easy omzetten. Gemiste kilometers niet inhalen."],
    fueling: [fullFueling, "Volledige repetities: W42 MP-under-fatigue, W43 30K, W44 Key Marathon Confidence en W45 buiten-long run."],
    raceStrategy: [{ distance: "Start", pace: "bewust gecontroleerd", instruction: "Geen tijd bankieren." }, { distance: "Midden", pace: "rond 4:58,61/km", instruction: "Doelritme stabiliseren." }, { distance: "Slot", pace: "alleen versnellen als alles goed blijft", instruction: "Benen, ademhaling en techniek beslissen." }],
    targetConfirmation: ["Exact vereist: 12,0557 km/u = 4:58,61/km.", "Praktische loopband-MP: 12,1 km/u.", "Confidence is bewijs verzamelen zonder de trainingscyclus te slopen."], officialTests: [], testTimeline: ["Texel HM", "45 min continuous MP", "40 min MP under fatigue", "50 min outdoor MP", "30K Confidence", "2 × 35 min MP under fatigue", "laatste MP-bevestiging in W45"],
  },
};

function installModel() {
  function segmentDurationSeconds(segment) { if (segment.durationSeconds) return segment.durationSeconds; if (segment.distanceKm && segment.speedKmh) return Math.round(segment.distanceKm / segment.speedKmh * 3600); return 0; }
  function flattenWorkoutSegments(workout) { const result = []; (workout?.groups || []).forEach((group) => { const repeats = group.kind === "repeat" ? group.repetitions || 1 : 1; for (let repeat = 1; repeat <= repeats; repeat++) (group.segments || []).forEach((segment, index) => { if (group.omitRecoveryAfterLast && repeat === repeats && index === group.segments.length - 1 && segment.isRecovery) return; result.push({ ...segment, groupLabel: group.label, repeat, repeats, executionId: `${segment.segmentId}-r${repeat}` }); }); }); return result; }
  function calculateWorkoutDistanceKm(workout) { const explicit = Number(workout?.estimatedDistanceKm); if (Number.isFinite(explicit) && explicit >= 0) return explicit; return flattenWorkoutSegments(workout).reduce((sum, segment) => sum + (segment.distanceKm ?? (segment.durationSeconds || 0) * (segment.speedKmh || 0) / 3600), 0); }
  function calculateWeekDistanceKm(week, includeMarathon = true) { if (includeMarathon && Number.isFinite(Number(week?.plannedDistanceIncludingRaceKm))) return Number(week.plannedDistanceIncludingRaceKm); if (!includeMarathon && Number.isFinite(Number(week?.plannedDistanceBeforeRaceKm))) return Number(week.plannedDistanceBeforeRaceKm); return (week?.workouts || []).filter((workout) => includeMarathon || workout.category !== "wedstrijd").reduce((sum, workout) => sum + calculateWorkoutDistanceKm(workout), 0); }
  window.MARATHON_MODEL = { segmentDurationSeconds, flattenWorkoutSegments, calculateWorkoutDistanceKm, calculateWeekDistanceKm };
  window.APP_CONFIG = window.MARATHON_PLAN.config;
  window.TRAINING_WEEKS = window.MARATHON_PLAN.weeks;
  window.TRAINING_PLAN = window.MARATHON_PLAN.phases.map((phase) => ({ ...phase, weeks: window.TRAINING_WEEKS.filter((week) => week.phaseId === phase.phaseId) }));
}

fs.writeFileSync(output, `// Generated from ${path.basename(input)}. Edit the source and generator, then regenerate.\nwindow.MARATHON_PLAN = ${JSON.stringify(plan, null, 2)};\n(${installModel.toString()})();\n`);
console.log(JSON.stringify({ schemaVersion: SCHEMA_VERSION, weeks: weeks.map((week) => [week.weekNumber, week.plannedDistanceKm]), workouts: weeks.flatMap((week) => week.workouts).length, preRaceTotal, includingRace: preRaceTotal + 42.195 }, null, 2));
