(function () {
  "use strict";

  const plan = window.MARATHON_PLAN;
  const model = window.MARATHON_MODEL;
  if (!plan || !model) throw new Error("Het basisschema moet voor training-plan-v5.js worden geladen.");

  const byWeek = (weekNumber) => plan.weeks.find((week) => week.weekNumber === weekNumber);
  const byWorkout = (weekNumber, trainingNumber) => byWeek(weekNumber)?.workouts.find((workout) => workout.trainingNumber === trainingNumber);
  const numberLabel = (value) => Number(value).toLocaleString("nl-NL", { maximumFractionDigits: 1 });
  const durationLabel = (minutes) => `${minutes} min`;

  function segment(workoutId, index, minutes, speedKmh, inclinePercent, type, instruction = "") {
    return {
      segmentId: `${workoutId}-v5-s${String(index + 1).padStart(2, "0")}`,
      basis: "time",
      durationSeconds: minutes * 60,
      display: durationLabel(minutes),
      speedKmh,
      inclinePercent,
      instruction,
      type,
      isRecovery: type === "recovery" || type === "herstel",
    };
  }

  function sequence(workoutId, specs, label = "Exacte opbouw") {
    return [{
      groupId: `${workoutId}-v5-g1`,
      kind: "sequence",
      label,
      repetitions: 1,
      segments: specs.map((spec, index) => segment(workoutId, index, ...spec)),
    }];
  }

  function refreshWorkout(workout) {
    const flat = model.flattenWorkoutSegments(workout);
    const durations = flat.map((item) => Number(model.segmentDurationSeconds(item)));
    workout.totalPlannedSeconds = durations.every((value) => value > 0)
      ? durations.reduce((total, value) => total + value, 0)
      : null;
    if (workout.totalPlannedSeconds) workout.totalPlannedLabel = `${Math.round(workout.totalPlannedSeconds / 60)} min`;
    const distance = model.calculateWorkoutDistanceKm(workout);
    workout.estimatedDistanceKm = Math.round(distance * 1000) / 1000;
    workout.estimatedDistanceLabel = `±${numberLabel(distance)} km`;
    return workout;
  }

  function replaceWorkout(weekNumber, trainingNumber, update) {
    const workout = byWorkout(weekNumber, trainingNumber);
    if (!workout) throw new Error(`Training ${weekNumber}.${trainingNumber} ontbreekt.`);
    Object.assign(workout, update);
    refreshWorkout(workout);
    return workout;
  }

  function createFitnessCheck(weekNumber, checkNumber) {
    const week = byWeek(weekNumber);
    const workoutId = `marathon-3u30-w${weekNumber}-fitness-check-${checkNumber}`;
    const workout = {
      workoutId,
      weekNumber,
      trainingNumber: null,
      trainingLabel: `Fitness Check #${checkNumber}`,
      isExtra: true,
      category: "testtraining",
      title: `Marathon Fitness Check #${checkNumber}`,
      surface: "loopband",
      groups: sequence(workoutId, [
        [5, 9, 0.5, "warming-up"],
        [10, 10, 0.5, "easy", "Noteer na dit blok RPE, ademhaling en benen."],
        [10, 11, 0.5, "steady", "Noteer na dit blok RPE, ademhaling en benen."],
        [10, 12, 1, "test", "Noteer na dit blok RPE, ademhaling en benen."],
        [5, 8.5, 0.5, "cooling-down"],
      ], "Vast vergelijkingsprotocol"),
      goal: checkNumber === 1
        ? "Een herhaalbare nulmeting van easy, steady en marathontempo maken zonder maximale inspanning."
        : "Exact hetzelfde protocol als week 38 uitvoeren en de respons vergelijken, zonder er een wedstrijd van te maken.",
      targetRpe: "submaximaal; laatste blok beheerst",
      mentalGoal: "Eerlijk registreren wat hetzelfde tempo vandaag kost; niets bewijzen.",
      orderWarning: "Plan deze korte check niet direct na zware training en niet naast Training 2 of Training 4.",
      detailsSections: [{
        title: "Registratieprotocol",
        items: [
          "Noteer na elk blok van 10 minuten RPE, ademhaling en gevoel in de benen.",
          "Noteer na afloop: totale RPE, RPE van het laatste blok, ademhaling, benen, pijn/klachten, algemeen gevoel en verwachte hersteltijd.",
          checkNumber === 2 ? "Vergelijk de uitkomst met Fitness Check #1 uit week 38; een lagere ervaren belasting bij hetzelfde protocol is positief." : "Deze eerste meting is de referentie voor Fitness Check #2 in week 42.",
        ],
      }],
      notes: [],
      isTest: true,
      isFitnessCheck: true,
      fitnessCheckNumber: checkNumber,
      testNumber: `fitness-${checkNumber}`,
      labels: ["FITNESS CHECK", "EXTRA SESSIE"],
      evaluation: "Geen eindtijdscore: vergelijk dezelfde snelheden op RPE, ademhaling, benen, klachten en herstel.",
      weekId: week.weekId,
      dateLabel: week.periodLabel,
      phaseId: week.phaseId,
      phaseName: week.phaseName,
      recoveryStatus: "recommended",
      recoveryLabel: "Herstel aanbevolen",
      recoveryAdvice: "Een rustige of vrije dag ervoor heeft de voorkeur; dit blijft een submaximale meettraining.",
      locationStatus: "Loopband vereist",
      outsideVariant: "Geen buitenvariant: voor een eerlijke vergelijking moeten snelheid en helling identiek blijven.",
      rationale: "Deze korte check meet niet hoe hard je maximaal kunt lopen, maar hoeveel moeite vaste, relevante snelheden kosten. Daardoor ontstaat een bruikbare vergelijking tussen week 38 en 42 zonder de hoofdtrainingen te verstoren. Maak hier geen vijfde zware trainingsdag van.",
    };
    return refreshWorkout(workout);
  }

  plan.config.planVersion = 5;
  plan.config.schemaVersion = "marathon-3u30-definitief-2026.09.01-1";
  plan.config.sourceFile = "definitief nieuw trainingsschema (v5)";
  plan.config.planSubtitle = "12 weken, vier kerntrainingen en twee submaximale fitnesschecks";
  plan.config.targetPace = "4:58,6/km";
  plan.config.exactTargetSpeedKmh = 12.056;
  plan.config.targetSpeedKmh = 12.056;
  plan.config.practicalMarathonSpeedKmh = 12;

  replaceWorkout(38, 1, {
    groups: sequence("marathon-3u30-w38-t1", [[5, 9.2, 0.5, "herstel"], [30, 10.1, 0.5, "easy"], [5, 8.5, 0.5, "cooling-down"]]),
    goal: "Easy volume bewust kort houden zodat de fitnesscheck en de 20K confidence run samen goed herstelbaar blijven.",
  });
  replaceWorkout(38, 3, {
    groups: sequence("marathon-3u30-w38-t3", [[5, 9.2, 0.5, "herstel"], [20, 10.1, 0.5, "easy"], [10, 10.8, 0.5, "steady"], [5, 8.5, 0.5, "cooling-down"]]),
    goal: "Een compacte middellange prikkel met een gecontroleerd steady slot, zonder de lange duurloop te ondermijnen.",
  });
  replaceWorkout(39, 2, {
    title: "3 × 15 min marathonpace",
    groups: sequence("marathon-3u30-w39-t2", [
      [10, 9.5, 0.5, "warming-up"], [5, 10.5, 0.5, "steady"], [15, 12, 1, "marathonpace"],
      [3, 9.5, 0.5, "recovery"], [15, 12, 1, "marathonpace"], [3, 9.5, 0.5, "recovery"],
      [15, 12, 1, "marathonpace"], [10, 9, 0.5, "cooling-down"],
    ]),
    goal: "Drie lange, beheerste blokken op praktisch marathontempo lopen en tussen de blokken volledig opnieuw controle vinden.",
    targetRpe: "6–7/10, laatste blok gecontroleerd",
    labels: ["MARATHONPACE", "3 × 15 MIN"],
  });
  replaceWorkout(41, 2, {
    title: "Marathon Rhythm — 60 min continu",
    groups: sequence("marathon-3u30-w41-t2", [[10, 9.5, 0.5, "warming-up"], [5, 10.5, 0.5, "steady"], [60, 12, 1, "marathonpace"], [10, 9, 0.5, "cooling-down"]]),
    goal: "Twaalf kilometer onafgebroken op praktisch marathontempo lopen met stabiele ademhaling en een gelijkmatig gevoel.",
    targetRpe: "6–7/10; na 60 min nog 15–20 min denkbaar",
    labels: ["MARATHON RHYTHM", "12 KM MP"],
    isTest: true,
    testNumber: "rhythm",
    evaluation: "Registreer RPE na 20, 40 en 60 minuten, ademhaling, benen, klachten en of nog 15–20 minuten mogelijk voelde.",
  });
  replaceWorkout(42, 1, {
    groups: sequence("marathon-3u30-w42-t1", [[5, 9.2, 0.5, "herstel"], [40, 10.2, 0.5, "easy"], [5, 8.5, 0.5, "cooling-down"]]),
    goal: "Easy kilometers verzamelen, maar ruimte bewaren voor Fitness Check #2 en de progressieve 28 km.",
  });
  replaceWorkout(42, 4, {
    title: "Progressieve 28 km",
    groups: sequence("marathon-3u30-w42-t4", [[10, 9.5, 0.5, "warming-up"], [115, 10.1, 0.5, "easy"], [20, 11.5, 1, "sub-marathon"], [15, 11.8, 1, "marathonpace"], [5, 8.5, 0.5, "cooling-down"]]),
    goal: "Na bijna twee uur rustig lopen gecontroleerd versnellen en onder vermoeidheid technisch en energetisch stabiel blijven.",
    targetRpe: "4–6/10, progressief zonder forceren",
    labels: ["PROGRESSIEVE LONG RUN", "28 KM"],
  });
  replaceWorkout(44, 4, {
    title: "Key Marathon Confidence — 2 × 30 min MP",
    groups: sequence("marathon-3u30-w44-t4", [[10, 9.5, 0.5, "warming-up"], [75, 10, 0.5, "easy"], [30, 12, 1, "marathonpace"], [8, 9.8, 0.5, "recovery"], [30, 12, 1, "marathonpace"], [7, 10, 0.5, "easy"], [5, 8.5, 0.5, "cooling-down"]]),
    goal: "Na 85 minuten voorbelasting twee uitgebreide marathonpaceblokken beheersen en herstel tussen beide blokken aantonen.",
    targetRpe: "eerste MP-blok 6–7/10; tweede idealiter ≤7–7,5/10",
    labels: ["KEY TEST", "FATIGUE RESISTANCE", "2 × 30 MIN MP"],
    isTest: true,
    testNumber: 3,
    evaluation: "Groen wanneer beide blokken technisch stabiel blijven en het tweede blok maximaal ongeveer 7–7,5/10 kost; één mindere indicator beslist nooit alleen over het marathondoel.",
  });

  byWorkout(40, 2).evaluation = "Onder 22:00 sterk; 22:00–22:45 goed; 22:46–23:15 aandachtspunt; boven 23:15 achter de ideale snelheidsindicatie. Lees dit altijd samen met duurvermogen, herstel en latere marathontests.";
  byWorkout(40, 2).detailsSections.push({
    title: "Interpretatie 5 km-benchmark",
    items: ["< 22:00: sterk.", "22:00–22:45: goed.", "22:46–23:15: aandachtspunt.", "> 23:15: achter de ideale indicatie; geen losstaand eindoordeel over 3:30."],
  });

  byWeek(38).workouts.splice(1, 0, createFitnessCheck(38, 1));
  byWeek(42).workouts.splice(1, 0, createFitnessCheck(42, 2));

  const weekPhilosophy = {
    36: {
      theme: "Opbouw",
      summary: "Basisvolume verhogen en marathontempo voor het eerst kort en beheerst aanraken.",
      why: [
        "De eerste week legt een rustige, bruikbare basis. De easy trainingen maken regelmatig lopen normaal, terwijl de kwaliteitstraining het doeltempo introduceert zonder dat het al een langdurige prestatieproef wordt.",
        "De 15 km lange duurloop is bewust gewoon een serieuze lange training. Tijd op de benen en herstel tellen nu zwaarder dan indrukwekkende tempo's.",
      ],
      adaptations: ["Aerobe basis", "Loopritme", "Eerste MP-herkenning"],
      targetLink: "Voor 3:30 moet 12,0 km/u later economisch voelen; deze week leert het lichaam dat ritme kort herkennen.",
      whyNotMore: "Meer volume of langer marathontempo zou in week één vooral extra vermoeidheid toevoegen, nog zonder voldoende onderbouwde belastbaarheid.",
      confidence: "Vertrouwen komt deze week uit controle: alle vier sessies afronden en de 15 km normaal laten voelen is precies de winst.",
    },
    37: {
      theme: "Duur + drempel",
      summary: "De drempelblokken worden langer en het duurvolume schuift een beheerste stap omhoog.",
      why: [
        "Drempelwerk geeft snelheidsreserve boven marathontempo. Daardoor hoeft 12,0 km/u relatief minder zwaar te worden, terwijl easy en lange duur het aerobe fundament verder verbreden.",
        "De combinatie is bewust verdeeld: de kwaliteitstraining en lange duurloop horen niet naast elkaar te staan. Herstel tussen beide is onderdeel van de trainingsprikkel.",
      ],
      adaptations: ["Snelheidsreserve", "Drempel", "Duurvermogen"],
      targetLink: "Een hogere, stabiele drempel vergroot de marge tussen je wedstrijdtempo en je maximale duurzame snelheid.",
      whyNotMore: "De drempelprikkel is al stevig. Extra hard volume zou herstel kosten en de lange duurloop minder waardevol maken.",
      confidence: "Een gelijkmatig laatste drempelblok en een beheerste lange duurloop zijn sterker bewijs dan één snelle uitschieter.",
    },
    38: {
      theme: "Fitness + 20K",
      summary: "Een vaste fitnessmeting combineren met de eerste 20K confidence run, terwijl de overige trainingen bewust korter zijn.",
      why: [
        "Fitness Check #1 maakt de respons op 10, 11 en 12 km/u meetbaar zonder maximale test. De kortere easy sessies voorkomen dat deze extra loopdag stiekem een zware vijfde training wordt.",
        "De 20K confidence run bouwt afstandsvertrouwen en geeft tegelijk een eerste serieuze gelegenheid om drinken en voeding praktisch te oefenen.",
      ],
      adaptations: ["Submaximale nulmeting", "20K-confidence", "Voedingsroutine"],
      targetLink: "De check legt vast wat doeltempo nu kost; de 20K bouwt het duurvermogen waarmee dat tempo later langer gedragen kan worden.",
      whyNotMore: "Dit is al een vijfloopsessie-week. Daarom zijn Training 1 en 3 ingekort en blijft de fitnesscheck nadrukkelijk submaximaal.",
      confidence: "Betrouwbare registratie en een rustige 20K geven meer informatie dan de fitnesscheck te hard uitvoeren.",
    },
    39: {
      theme: "Confidence + MP",
      summary: "Drie lange marathonpaceblokken koppelen aan een halve-marathonconfidence-mijlpaal.",
      why: [
        "Met 3 × 15 minuten krijgt marathontempo voldoende duur om ritme, ademhaling en loopeconomie te testen, maar blijven er herstelstukken om de kwaliteit zuiver te houden.",
        "De lange training maakt de halve marathonafstand mentaal en lichamelijk vertrouwd. Samen vormen ze een eerste duidelijke marathonspecifieke week.",
      ],
      adaptations: ["MP-controle", "Halve-marathonconfidence", "Herstel tussen blokken"],
      targetLink: "3:30 vraagt dat 12 km/u repeteerbaar blijft en een halve marathonafstand niet meer intimiderend voelt.",
      whyNotMore: "Een continu lang MP-blok én deze lange duurloop zou de week onnodig pieken. De herstelblokken bewaren controle.",
      confidence: "Het derde blok even technisch uitvoeren als het eerste en de lange duurloop beheerst afronden is het gewenste bewijs.",
    },
    40: {
      theme: "Herstel + 5K-test",
      summary: "Vermoeidheid laten zakken en met een 5 km-benchmark de snelheidsreserve objectief controleren.",
      why: [
        "Na drie opbouwweken daalt het duurvolume. Daardoor kan de benchmark iets zeggen over actuele snelheid in plaats van alleen over opgehoopte vermoeidheid.",
        "De 5 km is een meetpunt, geen voorspeller die het hele marathondoel beslist. Het resultaat krijgt pas betekenis naast duurvermogen, herstel en latere marathonspecifieke tests.",
      ],
      adaptations: ["Herstelabsorptie", "Snelheidsmeting", "Technische scherpte"],
      targetLink: "Een sterke 5 km ondersteunt voldoende snelheidsreserve voor 3:30, maar bewijst nog geen marathonduurvermogen.",
      whyNotMore: "Meer kilometers zouden het herstelweekdoel en de interpreteerbaarheid van de benchmark ondermijnen.",
      confidence: "Een gecontroleerde test en frisse benen aan het einde van de week zijn beide succescriteria.",
    },
    41: {
      theme: "Marathonritme",
      summary: "Zestig minuten onafgebroken op 12,0 km/u en een lange steady confidence run maken ritme duurzaam.",
      why: [
        "De Marathon Rhythm-training vervangt kortere herhalingen door één continu uur. Daardoor worden pacing, aandacht en brandstofgebruik realistischer zonder al diep in een lange duurloop te zitten.",
        "De lange confidence run vergroot de tijd op de benen. De twee hoofdprikkels vragen daarom expliciete rust ertussen.",
      ],
      adaptations: ["Continu MP", "Pacingdiscipline", "Steady duurvermogen"],
      targetLink: "Twaalf kilometer continu op doeltempo is belangrijk ondersteunend bewijs wanneer het beheerst blijft en nog reserve laat.",
      whyNotMore: "Langer dan zestig minuten MP zou te dicht tegen een test aan schuiven en de lange duurloop onnodig belasten.",
      confidence: "Stabiele RPE na 20, 40 en 60 minuten geeft veel meer informatie dan alleen het voltooien van de afstand.",
    },
    42: {
      theme: "Vergelijken + 28K",
      summary: "Fitness Check #2 vergelijkt de ontwikkeling; de progressieve 28 km traint controle onder toenemende vermoeidheid.",
      why: [
        "Het identieke fitnessprotocol maakt verandering zichtbaar zonder andere snelheden of hellingen te introduceren. Een lagere belasting bij hetzelfde werk is positief, maar wordt altijd samen met herstel en klachten gelezen.",
        "De 28 km blijft lang rustig en wordt pas laat progressief. Dat leert het lichaam sneller lopen wanneer glycogeen en spierfrisheid al minder vanzelfsprekend zijn.",
      ],
      adaptations: ["Vergelijkbare fitnessmeting", "Progressieve 28K", "Vermoeidheidsbestendigheid"],
      targetLink: "Voor 3:30 moet het ritme ook na veel rustige kilometers technisch beschikbaar blijven.",
      whyNotMore: "De extra check maakt dit opnieuw een vijfloopsessie-week; Training 1 is daarom korter en de lange duur blijft onder volledig marathontempo.",
      confidence: "Een verbeterde check en een beheerste versnelling in de 28 km vormen samen breed bewijs, zonder dat één uitkomst doorslaggevend is.",
    },
    43: {
      theme: "Piekvolume",
      summary: "De grootste week combineert 3 × 15 minuten marathontempo met de 30K confidence run.",
      why: [
        "Deze week bundelt het hoogste volume en de langste confidence run. De marathonpace-test controleert of het doeltempo repeteerbaar blijft, terwijl 30 km vooral afstand, voeding en mentale rust traint.",
        "De sessies hebben verschillende rollen: Training 2 toetst tempo, Training 4 toetst duur. De 30K hoeft daarom niet ook een marathontempowedstrijd te worden.",
      ],
      adaptations: ["Piekvolume", "MP-herhaalbaarheid", "30K-confidence"],
      targetLink: "Duur en tempo worden afzonderlijk stevig onderbouwd voordat ze in week 44 uitgebreider samenkomen.",
      whyNotMore: "Dit is al de volumepiek. Extra tempo in de 30K zou herstel en de volgende sleutelweek riskeren.",
      confidence: "De week beheerst doorstaan, goed herstellen en zonder oplopende klachten blijven is zelf een belangrijke test.",
    },
    44: {
      theme: "Sleutelweek",
      summary: "De belangrijkste fatigue-resistance-test: twee keer 30 minuten marathontempo na 85 minuten voorbelasting.",
      why: [
        "De sleuteltraining brengt doeltempo laat in een lange sessie, met een gecontroleerde herstelperiode tussen beide blokken. Zo wordt niet alleen snelheid, maar vooral herhaalbaarheid onder vermoeidheid onderzocht.",
        "Het tweede blok is belangrijk, maar de interpretatie blijft breed: RPE, ademhaling, techniek, klachten en herstel tellen samen.",
      ],
      adaptations: ["Fatigue resistance", "Uitgebreid MP", "Racefueling-repetitie"],
      targetLink: "Dit is het meest marathonspecifieke bewijs voor het vermogen om 12 km/u op vermoeide benen te controleren.",
      whyNotMore: "De test bevat al zestig minuten MP na lange voorbelasting. Verder uitbreiden zou meer schade dan extra informatie geven.",
      confidence: "Twee stabiele blokken met een beheerst tweede RPE ondersteunen 3:30; een mindere losse indicator beslist het doel niet alleen.",
    },
    45: {
      theme: "Taperstart",
      summary: "Volume terugbrengen, opgebouwde fitheid laten landen en korte kwaliteit herkenbaar houden.",
      why: [
        "De zwaarste trainingsarbeid is gedaan. Minder kilometers verlagen vermoeidheid, terwijl enkele gerichte stukken voorkomen dat het loopgevoel vlak wordt.",
        "Vanaf nu levert bewijzen weinig op. Herstel, slaap, normale voeding en klachtenvrij blijven zijn de grootste prestatiehefbomen.",
      ],
      adaptations: ["Vermoeidheid afbouwen", "Ritme behouden", "Herstel"],
      targetLink: "Fitheid wordt in taper niet meer gebouwd maar zichtbaar gemaakt doordat vermoeidheid zakt.",
      whyNotMore: "Extra kilometers kunnen de piekfitheid niet meer betekenisvol vergroten, maar wel frisheid wegnemen.",
      confidence: "Lichter willen trainen is geen verlies van vorm; het is de geplande overgang naar wedstrijdbereidheid.",
    },
    46: {
      theme: "Taper + scherpte",
      summary: "Het volume daalt verder terwijl korte marathonpaceprikkels het ritme levendig houden.",
      why: [
        "Korte, precieze prikkels herinneren het lichaam aan tempo zonder noemenswaardige restvermoeidheid te maken. Easy trainingen blijven echt easy.",
        "De grootste fout zou nu zijn om onzekerheid met extra werk te beantwoorden. Het programma verschuift bewust van belasting naar frisheid.",
      ],
      adaptations: ["Frisheid", "Neuromusculaire scherpte", "Tempovertrouwen"],
      targetLink: "Marathontempo moet bekend blijven voelen, maar het lichaam moet vooral energie overhouden voor de wedstrijddag.",
      whyNotMore: "Een laatste zware test is te laat om nog fitheid op te leveren en vroeg genoeg om de marathon te verstoren.",
      confidence: "Controle, goede slaap en normale benen zijn nu waardevoller dan een snelle trainingsscore.",
    },
    47: {
      theme: "Marathonweek",
      summary: "Herstellen, losmaken en de geteste race-uitvoering op zondag toepassen.",
      why: [
        "De korte sessies houden het lichaam soepel en geven ritme, maar mogen nooit spierpijn of bewijsdrang oproepen. De marathon is de enige hoofdprikkel van deze week.",
        "Tempo, voeding en materiaal zijn eerder getest. Marathonweek draait om eenvoud: niets nieuws, niet compenseren en het starttempo gedisciplineerd bewaken.",
      ],
      adaptations: ["Glycogeen aanvullen", "Frisheid", "Race-uitvoering"],
      targetLink: "Het 3:30-plan wordt nu niet meer getraind maar uitgevoerd rond gemiddeld 4:58,6 per kilometer.",
      whyNotMore: "Nieuwe trainingsvermoeidheid kan niet meer worden omgezet in fitheid vóór de race en heeft dus alleen neerwaarts potentieel.",
      confidence: "De voorbereiding is het bewijs. Rustig starten en het plan uitvoeren is sterker dan in de laatste dagen nog iets willen afdwingen.",
    },
  };

  const specialRationales = {
    "marathon-3u30-w39-t2": "Deze training verlengt de totale tijd op praktisch marathontempo tot 45 minuten, verdeeld over drie blokken. De korte herstelstukken maken het mogelijk om pacing en techniek drie keer opnieuw te bevestigen. Het doel is repeteerbare controle, niet een steeds sneller laatste blok.",
    "marathon-3u30-w41-t2": "Een aaneengesloten uur op 12,0 km/u test ritme en loopeconomie zonder herstelpauzes. Noteer het verloop van RPE na 20, 40 en 60 minuten: een stabiele ontwikkeling zegt meer dan alleen voltooien. Versnel niet boven het voorschrift; er moet nog 15–20 minuten denkbare reserve zijn.",
    "marathon-3u30-w42-t4": "De eerste 125 minuten bouwen rustige voorbelasting op, waarna het tempo in twee stappen stijgt. Zo oefen je technisch en energetisch schakelen met vermoeide benen zonder de training in een wedstrijd te veranderen. De late versnelling hoort gecontroleerd te blijven.",
    "marathon-3u30-w43-t4": "De 30K confidence run maakt de langste trainingsafstand vertrouwd en biedt een volledige repetitie van voeding en drinken. De waarde zit in beheersing, niet in een snelle eindtijd. Voeg geen verplicht marathontempo toe aan deze duurloop.",
    "marathon-3u30-w44-t4": "Dit is de meest specifieke fatigue-resistance-prikkel van het programma: zestig minuten marathontempo na 85 minuten voorbelasting. Het herstelblok tussen beide delen laat zien of je opnieuw controle kunt vinden. Houd het tweede blok technisch stabiel; harder lopen levert geen relevanter 3:30-bewijs op.",
    "marathon-3u30-w47-t4": "De marathon is de uitvoering van het opgebouwde duurvermogen, tempovertrouwen en voedingsplan. De vroege kilometers moeten bewust iets behoudender voelen dan je ambitie. Probeer geen tijd te winnen voor 30 km; controle houdt het doel levend.",
  };

  function genericRationale(workout) {
    const title = String(workout.title || "deze training").toLowerCase();
    if (workout.category === "rustige-duur" || workout.category === "herstel") {
      return `Deze ${title} vergroot aerobe belastbaarheid en ondersteunt herstel tussen de zwaardere sessies. De voorgeschreven snelheid en 0,5% helling houden de belasting laag genoeg om consistent te kunnen trainen. Maak er geen progressieve tempo-run van.`;
    }
    if (workout.category === "lange-duur") {
      return `Deze ${title} traint tijd op de benen, duurvermogen, voeding en mentale rust. De overwegend rustige snelheid beschermt herstel terwijl de afstand specifiek genoeg wordt voor de marathon. Maak de training niet harder dan de beschreven steady- of marathonpacedelen.`;
    }
    if (workout.category === "wedstrijd") {
      return specialRationales[workout.workoutId];
    }
    return `Deze ${title} bouwt snelheidsreserve of controle rond marathontempo, zodat 12,0 km/u economischer kan worden. De herstelstukken en voorgeschreven helling zijn onderdeel van de training en bewaken de kwaliteit. Maak er geen maximale test van tenzij de sessie expliciet als test is beschreven.`;
  }

  const longOutside = {
    38: "Buiten aanbevolen: 90 min easy op praattempo, 30 min steady gecontroleerd en 5 min easy uitlopen.",
    39: "Buiten mogelijk: voer de training eenvoudig progressief uit op tijd en gevoel; het laatste deel blijft gecontroleerd.",
    41: "Buiten aanbevolen: 15 min easy, 2 uur steady gecontroleerd en 15 min easy uitlopen.",
    42: "Buiten mogelijk, maar de loopband wordt aanbevolen voor de precieze late progressie op 11,5 en 11,8 km/u.",
    43: "Buiten aanbevolen: 10 min easy, 140 min praattempo, 25 min steady en 5 min easy uitlopen.",
    44: "Loopband aanbevolen: de twee marathonpaceblokken en het herstel ertussen moeten precies vergelijkbaar blijven.",
  };

  for (const week of plan.weeks) {
    week.weekPhilosophy = weekPhilosophy[week.weekNumber];
    week.focus = week.weekPhilosophy.summary;
    for (const workout of week.workouts) {
      if (workout.surface === "loopband") {
        const halfPercentTypes = new Set(["recovery", "herstel", "easy", "steady", "lange-duur", "warming-up", "cooling-down"]);
        const onePercentTypes = new Set(["sub-marathon", "marathonpace", "marathontempo", "drempel", "interval", "test"]);
        for (const group of workout.groups || []) {
          for (const item of group.segments || []) {
            if (item.type === "wandelen") item.inclinePercent = 0;
            else if (halfPercentTypes.has(item.type)) item.inclinePercent = 0.5;
            else if (onePercentTypes.has(item.type)) item.inclinePercent = 1;
          }
        }
      }
      workout.trainingLabel ||= workout.trainingNumber ? `Training ${workout.trainingNumber}` : "Extra sessie";
      workout.rationale ||= specialRationales[workout.workoutId] || genericRationale(workout);
      if (!workout.recoveryStatus) {
        const longOrRace = workout.category === "lange-duur" || workout.category === "wedstrijd";
        const hardQuality = workout.trainingNumber === 2 && ![45, 46, 47].includes(workout.weekNumber);
        workout.recoveryStatus = longOrRace || hardQuality ? "required" : workout.category === "testtraining" ? "recommended" : "none";
      }
      workout.recoveryLabel = workout.recoveryStatus === "required" ? "Volledige rust vereist" : workout.recoveryStatus === "recommended" ? "Herstel aanbevolen" : "Geen extra rust vereist";
      workout.recoveryAdvice = workout.recoveryStatus === "required"
        ? "Plan een volledige rustdag of uitsluitend zeer licht herstel vóór deze sessie. Training 2 en Training 4 horen niet direct naast elkaar."
        : workout.recoveryStatus === "recommended"
          ? "Een rustige dag ervoor heeft de voorkeur; vermijd zware beenbelasting."
          : "Volg de normale weekvolgorde en houd easy ook daadwerkelijk easy.";
      if (!workout.locationStatus) {
        workout.locationStatus = workout.surface === "buiten"
          ? "Buiten"
          : workout.category === "kwaliteit" || workout.category === "interval" || workout.category === "testtraining"
            ? "Loopband aanbevolen"
            : "Loopband of buiten";
      }
      workout.outsideVariant ||= workout.trainingNumber === 4 && longOutside[workout.weekNumber]
        ? longOutside[workout.weekNumber]
        : workout.surface === "loopband"
          ? "Buiten mogelijk op dezelfde duur en inspanning; gebruik tempo als richtlijn en forceer geen GPS-perfectie."
          : "Voer buiten uit volgens afstand, gevoel en het beschreven tempoplan.";
      refreshWorkout(workout);
    }
    const total = week.workouts.reduce((sum, workout) => sum + workout.estimatedDistanceKm, 0);
    week.plannedDistanceKm = Math.round(total * 1000) / 1000;
    week.calculatedWorkoutDistanceKm = week.plannedDistanceKm;
    week.plannedDistanceMinKm = week.plannedDistanceKm;
    week.plannedDistanceMaxKm = week.plannedDistanceKm;
    week.plannedDistanceLabel = `±${numberLabel(total)} km`;
  }

  const raceWeekPrimer = byWorkout(47, 3);
  raceWeekPrimer.recoveryStatus = "required";
  raceWeekPrimer.recoveryLabel = "Daarna volledige rust";
  raceWeekPrimer.recoveryAdvice = "Na deze korte losmaaksessie volgt geen training meer vóór de marathon. Frisheid is belangrijker dan extra werk.";

  plan.guidance.scheduling = [
    "Normaal vier kerntrainingen per week; alleen week 38 en 42 hebben een extra, korte submaximale Marathon Fitness Check.",
    "Training 2 en Training 4 nooit op opeenvolgende dagen plannen.",
    "Bij ‘Volledige rust vereist’ hoort vooraf een rustdag of uitsluitend zeer licht herstel.",
    "Testresultaten veranderen de voorgeschreven snelheden nooit automatisch.",
  ];
  plan.guidance.incline = [
    "Wandelen: 0%.",
    "Herstel, easy, lange rustige duur en steady: 0,5%.",
    "Sub-marathon, marathonpace, drempel en interval: 1%.",
    "Alleen de marathon buiten heeft geen loopbandhelling.",
  ];
  plan.guidance.raceStrategy = [
    { distance: "0–5 km", pace: "5:01/km", instruction: "Bewust gereserveerd openen; verwachte doorkomst ongeveer 25:05." },
    { distance: "5–10 km", pace: "geleidelijk naar 4:59/km", instruction: "Ritme vinden zonder tijd terug te winnen; 10 km rond 50:00." },
    { distance: "10–30 km", pace: "4:58–4:59/km", instruction: "Voeding, houding en controle bewaken; 30 km rond 2:29:30." },
    { distance: "30–35 km", pace: "vasthouden", instruction: "Niet reageren op losse kilometerafwijkingen." },
    { distance: "35–40 km", pace: "4:58–4:59/km als gecontroleerd", instruction: "Alleen vasthouden of licht versnellen wanneer ademhaling en benen stabiel blijven." },
    { distance: "Laatste 2,195 km", pace: "op gevoel", instruction: "Gebruik resterende reserve; projectie bij dit plan is ongeveer 3:30:00." },
  ];
  plan.guidance.officialTests = [
    { week: 38, training: "extra", title: "Marathon Fitness Check #1", question: "Wat kost 10, 11 en 12 km/u nu?" },
    { week: 40, training: 2, title: "5 km benchmark", question: "Hoeveel snelheidsreserve is beschikbaar?" },
    { week: 42, training: "extra", title: "Marathon Fitness Check #2", question: "Is dezelfde belasting lager dan in week 38?" },
    { week: 43, training: 2, title: "3 × 15 min marathonpace", question: "Is doeltempo herhaalbaar en beheerst?" },
    { week: 44, training: 4, title: "Key Marathon Confidence", question: "Blijft marathontempo controleerbaar onder vermoeidheid?" },
  ];
  plan.guidance.testTimeline = [
    "Augustus: bestaande baseline als context.",
    "Week 38: Fitness Check #1 — submaximale nulmeting.",
    "Week 40: 5 km benchmark — snelheidsreserve.",
    "Week 42: Fitness Check #2 — identieke vergelijking.",
    "Week 43: 3 × 15 min MP — tempoherhaalbaarheid.",
    "Week 44: Key Marathon Confidence — fatigue resistance.",
    "Vanaf week 45: niet meer bewijzen; taper en frisheid bewaken.",
  ];

  window.APP_CONFIG = plan.config;
  window.TRAINING_WEEKS = plan.weeks;
  window.TRAINING_PLAN = plan.phases.map((phase) => ({ ...phase, weeks: plan.weeks.filter((week) => week.phaseId === phase.phaseId) }));
})();
