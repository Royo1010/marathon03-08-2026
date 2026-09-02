// Generated from marathon-schema-3u30-definitief-2026.md. Edit the source, then regenerate.
window.MARATHON_PLAN = {
  "config": {
    "planId": "marathon-3u30-definitief-2026",
    "planVersion": 6,
    "schemaVersion": "marathon-3u30-definitief-2026.09.02-1",
    "sourceFile": "marathon-schema-3u30-definitief-2026.md",
    "planName": "Marathonschema 3:30",
    "planSubtitle": "Vier kerntrainingen per week en twee extra fitnesschecks",
    "startDate": "2026-08-31",
    "endDate": "2026-11-22",
    "marathonDate": "2026-11-22",
    "targetTime": "3:30:00",
    "targetPace": "4:58,6/km",
    "targetSpeedKmh": 12.055714285714286,
    "practicalMarathonSpeedKmh": 12,
    "trainingFrequency": 4,
    "primarySurface": "primair loopband"
  },
  "phases": [
    {
      "phaseId": "opbouw-confidence",
      "name": "Opbouw en confidence",
      "shortName": "Opbouw en confidence",
      "number": 1,
      "startWeek": 36,
      "endWeek": 39,
      "startDate": "2026-08-31",
      "endDate": "2026-09-27"
    },
    {
      "phaseId": "herstel-test",
      "name": "Herstel en eerste test",
      "shortName": "Herstel en eerste test",
      "number": 2,
      "startWeek": 40,
      "endWeek": 40,
      "startDate": "2026-09-28",
      "endDate": "2026-10-04"
    },
    {
      "phaseId": "marathonspecifiek",
      "name": "Marathonspecifieke piekfase",
      "shortName": "Marathonspecifieke piekfase",
      "number": 3,
      "startWeek": 41,
      "endWeek": 44,
      "startDate": "2026-10-05",
      "endDate": "2026-11-01"
    },
    {
      "phaseId": "taper",
      "name": "Taper",
      "shortName": "Taper",
      "number": 4,
      "startWeek": 45,
      "endWeek": 46,
      "startDate": "2026-11-02",
      "endDate": "2026-11-15"
    },
    {
      "phaseId": "marathonweek",
      "name": "Marathonweek",
      "shortName": "Marathonweek",
      "number": 5,
      "startWeek": 47,
      "endWeek": 47,
      "startDate": "2026-11-16",
      "endDate": "2026-11-22"
    }
  ],
  "weeks": [
    {
      "weekId": "marathon-3u30-w36",
      "weekNumber": 36,
      "phaseId": "opbouw-confidence",
      "phaseName": "Opbouw en confidence",
      "startDate": "2026-08-31",
      "endDate": "2026-09-06",
      "periodLabel": "31 augustus t/m 6 september 2026",
      "weekType": "BUILD",
      "focus": "Basisvolume en eerste beheerste marathonpaceblokken",
      "includesMarathon": false,
      "workouts": [
        {
          "workoutId": "marathon-3u30-w36-t1",
          "weekNumber": 36,
          "trainingNumber": 1,
          "trainingLabel": "Training 1",
          "weekId": "marathon-3u30-w36",
          "dateLabel": "31 augustus t/m 6 september 2026",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence",
          "title": "Easy",
          "category": "rustige-duur",
          "tone": "easy",
          "labels": [
            "EASY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w36-t1-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w36-t1-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 2100,
                  "display": "35 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w36-t1-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w36-t1-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 2700,
          "totalPlannedLabel": "45 min",
          "estimatedDistanceKm": 7.291666666666666,
          "estimatedDistanceLabel": "±7,3 km",
          "sourceSummary": "45 min · ongeveer 7,29 km",
          "goal": "ontspannen aerobe omvang.",
          "targetRpe": "3–4/10.",
          "mentalGoal": "rustig lopen is de basis van de progressie.",
          "rationale": "ontspannen aerobe omvang. rustig lopen is de basis van de progressie.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9,0.5],[2100,null,10,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w36-t2",
          "weekNumber": 36,
          "trainingNumber": 2,
          "trainingLabel": "Training 2",
          "weekId": "marathon-3u30-w36",
          "dateLabel": "31 augustus t/m 6 september 2026",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence",
          "title": "Eerste marathonpaceblokken",
          "category": "kwaliteit",
          "tone": "mp",
          "labels": [
            "QUALITY",
            "MARATHON SPECIFIC"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w36-t2-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w36-t2-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w36-t2-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 480,
                  "display": "8 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w36-t2-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w36-t2-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 480,
                  "display": "8 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w36-t2-s05"
                },
                {
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w36-t2-s06"
                },
                {
                  "basis": "time",
                  "durationSeconds": 480,
                  "display": "8 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w36-t2-s07"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w36-t2-s08"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 3300,
          "totalPlannedLabel": "55 min",
          "estimatedDistanceKm": 9.708333333333332,
          "estimatedDistanceLabel": "±9,7 km",
          "sourceSummary": "55 min · ongeveer 9,71 km",
          "goal": "12,0 km/u leren kennen zonder uitputting.",
          "targetRpe": "laatste MP-blok maximaal ongeveer 7/10.",
          "mentalGoal": "doeltempo is stevig, maar geen sprint of eindtest.",
          "rationale": "12,0 km/u leren kennen zonder uitputting. doeltempo is stevig, maar geen sprint of eindtest.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[480,null,12,1],[180,null,9.5,0.5],[480,null,12,1],[180,null,9.5,0.5],[480,null,12,1],[600,null,9,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w36-t3",
          "weekNumber": 36,
          "trainingNumber": 3,
          "trainingLabel": "Training 3",
          "weekId": "marathon-3u30-w36",
          "dateLabel": "31 augustus t/m 6 september 2026",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence",
          "title": "Recovery",
          "category": "herstel",
          "tone": "recovery",
          "labels": [
            "RECOVERY",
            "EASY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w36-t3-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w36-t3-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 1800,
                  "display": "30 min",
                  "speedKmh": 9.8,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w36-t3-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w36-t3-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 2400,
          "totalPlannedLabel": "40 min",
          "estimatedDistanceKm": 6.358333333333333,
          "estimatedDistanceLabel": "±6,4 km",
          "sourceSummary": "40 min · ongeveer 6,36 km",
          "goal": "herstellen en rustige kilometers verzamelen.",
          "targetRpe": "2–3/10.",
          "mentalGoal": "bewust gemakkelijker dan Training 1.",
          "rationale": "herstellen en rustige kilometers verzamelen. bewust gemakkelijker dan Training 1.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9,0.5],[1800,null,9.8,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w36-t4",
          "weekNumber": 36,
          "trainingNumber": 4,
          "trainingLabel": "Training 4",
          "weekId": "marathon-3u30-w36",
          "dateLabel": "31 augustus t/m 6 september 2026",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence",
          "title": "Lange duur",
          "category": "lange-duur",
          "tone": "long",
          "labels": [
            "LONG RUN",
            "RACEVOEDING OEFENEN"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w36-t4-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w36-t4-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 4800,
                  "display": "80 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w36-t4-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w36-t4-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 5700,
          "totalPlannedLabel": "95 min",
          "estimatedDistanceKm": 15.625000000000002,
          "estimatedDistanceLabel": "±15,6 km",
          "sourceSummary": "95 min · ongeveer 15,63 km",
          "goal": "eerste lange prikkel van dit blok.",
          "targetRpe": "hoofdzakelijk 3–4/10.",
          "mentalGoal": "15 km begint een normale trainingsafstand te worden.",
          "rationale": "eerste lange prikkel van dit blok. 15 km begint een normale trainingsafstand te worden.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": true,
          "fullFuelRehearsal": false,
          "nutrition": "Oefen voor grote lange trainingen geleidelijk richting 60–75 gram koolhydraten per uur, indien goed verdragen. Bouw dit niet ineens op in de zwaarste sessie; gebruik in de laatste weken geen nieuwe producten.",
          "evaluation": null,
          "protocolSignature": "[[600,null,9.5,0.5],[4800,null,10,0.5],[300,null,8.5,0.5]]"
        }
      ],
      "plannedDistanceKm": 38.983333333333334,
      "plannedDistanceLabel": "±39 km",
      "weekPhilosophy": {
        "theme": "BUILD",
        "summary": "Basisvolume en eerste beheerste marathonpaceblokken",
        "adaptations": [
          "EASY",
          "QUALITY",
          "MARATHON SPECIFIC",
          "RECOVERY",
          "LONG RUN"
        ],
        "why": [
          "Training 1: ontspannen aerobe omvang.",
          "Training 2: 12,0 km/u leren kennen zonder uitputting.",
          "Training 3: herstellen en rustige kilometers verzamelen.",
          "Training 4: eerste lange prikkel van dit blok."
        ],
        "targetLink": "Van aerobe omvang en snelheidsreserve naar controle op 12,0 km/u onder vermoeidheid, gevolgd door taper en frisheid.",
        "whyNotMore": "Easy blijft echt easy: RPE 3–4/10 en volledige zinnen kunnen spreken. Een test is diagnostiek, geen verplichting om jezelf kapot te lopen. De taper in week 45–47 is beschermd: geen extra kilometers, extra tests of extra trainingsdagen. De langste duurloop blijft de 30K Confidence Run in week 43: ongeveer 30,36 km. Niet verlengen naar 32, 33 of 35 km. Bij oplopende plaatselijke pijn, technisch verval of duidelijke controleproblemen wordt een training aangepast of gestopt.",
        "confidence": "15 km begint een normale trainingsafstand te worden."
      }
    },
    {
      "weekId": "marathon-3u30-w37",
      "weekNumber": 37,
      "phaseId": "opbouw-confidence",
      "phaseName": "Opbouw en confidence",
      "startDate": "2026-09-07",
      "endDate": "2026-09-13",
      "periodLabel": "7 t/m 13 september 2026",
      "weekType": "BUILD",
      "focus": "Drempelwerk en lange duur richting 18 km",
      "includesMarathon": false,
      "workouts": [
        {
          "workoutId": "marathon-3u30-w37-t1",
          "weekNumber": 37,
          "trainingNumber": 1,
          "trainingLabel": "Training 1",
          "weekId": "marathon-3u30-w37",
          "dateLabel": "7 t/m 13 september 2026",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence",
          "title": "Easy",
          "category": "rustige-duur",
          "tone": "easy",
          "labels": [
            "EASY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w37-t1-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t1-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 2400,
                  "display": "40 min",
                  "speedKmh": 10.1,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t1-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t1-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 3000,
          "totalPlannedLabel": "50 min",
          "estimatedDistanceKm": 8.208333333333334,
          "estimatedDistanceLabel": "±8,2 km",
          "sourceSummary": "50 min · ongeveer 8,21 km",
          "goal": "aerobe omvang.",
          "targetRpe": "3–4/10.",
          "mentalGoal": "volledige zinnen blijven mogelijk.",
          "rationale": "aerobe omvang. volledige zinnen blijven mogelijk.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9.2,0.5],[2400,null,10.1,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w37-t2",
          "weekNumber": 37,
          "trainingNumber": 2,
          "trainingLabel": "Training 2",
          "weekId": "marathon-3u30-w37",
          "dateLabel": "7 t/m 13 september 2026",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence",
          "title": "4 × 6 min drempel",
          "category": "kwaliteit",
          "tone": "threshold",
          "labels": [
            "QUALITY",
            "THRESHOLD"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w37-t2-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t2-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t2-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 360,
                  "display": "6 min",
                  "speedKmh": 12.3,
                  "inclinePercent": 1,
                  "type": "drempel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t2-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 150,
                  "display": "2:30 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t2-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 360,
                  "display": "6 min",
                  "speedKmh": 12.3,
                  "inclinePercent": 1,
                  "type": "drempel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t2-s05"
                },
                {
                  "basis": "time",
                  "durationSeconds": 150,
                  "display": "2:30 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t2-s06"
                },
                {
                  "basis": "time",
                  "durationSeconds": 360,
                  "display": "6 min",
                  "speedKmh": 12.3,
                  "inclinePercent": 1,
                  "type": "drempel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t2-s07"
                },
                {
                  "basis": "time",
                  "durationSeconds": 150,
                  "display": "2:30 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t2-s08"
                },
                {
                  "basis": "time",
                  "durationSeconds": 360,
                  "display": "6 min",
                  "speedKmh": 12.3,
                  "inclinePercent": 1,
                  "type": "drempel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t2-s09"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t2-s10"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 3390,
          "totalPlannedLabel": "56:30 min",
          "estimatedDistanceKm": 10.065833333333332,
          "estimatedDistanceLabel": "±10,1 km",
          "sourceSummary": "56:30 min · ongeveer 10,07 km",
          "goal": "snelheidsreserve en gecontroleerd drempelwerk.",
          "targetRpe": "snelle blokken ongeveer 7/10.",
          "mentalGoal": "alle herhalingen technisch gelijkmatig lopen.",
          "rationale": "snelheidsreserve en gecontroleerd drempelwerk. alle herhalingen technisch gelijkmatig lopen.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[360,null,12.3,1],[150,null,9.5,0.5],[360,null,12.3,1],[150,null,9.5,0.5],[360,null,12.3,1],[150,null,9.5,0.5],[360,null,12.3,1],[600,null,9,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w37-t3",
          "weekNumber": 37,
          "trainingNumber": 3,
          "trainingLabel": "Training 3",
          "weekId": "marathon-3u30-w37",
          "dateLabel": "7 t/m 13 september 2026",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence",
          "title": "Easy",
          "category": "rustige-duur",
          "tone": "easy",
          "labels": [
            "EASY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w37-t3-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t3-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 2100,
                  "display": "35 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t3-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t3-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 2700,
          "totalPlannedLabel": "45 min",
          "estimatedDistanceKm": 7.308333333333333,
          "estimatedDistanceLabel": "±7,3 km",
          "sourceSummary": "45 min · ongeveer 7,31 km",
          "goal": "rustige aanvulling van het weekvolume.",
          "targetRpe": "3–4/10.",
          "mentalGoal": "easy niet veranderen in steady.",
          "rationale": "rustige aanvulling van het weekvolume. easy niet veranderen in steady.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9.2,0.5],[2100,null,10,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w37-t4",
          "weekNumber": 37,
          "trainingNumber": 4,
          "trainingLabel": "Training 4",
          "weekId": "marathon-3u30-w37",
          "dateLabel": "7 t/m 13 september 2026",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence",
          "title": "Lange duur",
          "category": "lange-duur",
          "tone": "long",
          "labels": [
            "LONG RUN",
            "RACEVOEDING OEFENEN"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w37-t4-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t4-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 5700,
                  "display": "95 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t4-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w37-t4-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 6600,
          "totalPlannedLabel": "110 min",
          "estimatedDistanceKm": 18.125,
          "estimatedDistanceLabel": "±18,1 km",
          "sourceSummary": "110 min · ongeveer 18,13 km",
          "goal": "duurvermogen vergroten zonder wedstrijdinspanning.",
          "targetRpe": "3–5/10.",
          "mentalGoal": "18 km is haalbaar; rustig blijven, geen race.",
          "rationale": "duurvermogen vergroten zonder wedstrijdinspanning. 18 km is haalbaar; rustig blijven, geen race.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": true,
          "fullFuelRehearsal": false,
          "nutrition": "Oefen voor grote lange trainingen geleidelijk richting 60–75 gram koolhydraten per uur, indien goed verdragen. Bouw dit niet ineens op in de zwaarste sessie; gebruik in de laatste weken geen nieuwe producten.",
          "evaluation": null,
          "protocolSignature": "[[600,null,9.5,0.5],[5700,null,10,0.5],[300,null,8.5,0.5]]"
        }
      ],
      "plannedDistanceKm": 43.707499999999996,
      "plannedDistanceLabel": "±43,7 km",
      "weekPhilosophy": {
        "theme": "BUILD",
        "summary": "Drempelwerk en lange duur richting 18 km",
        "adaptations": [
          "EASY",
          "QUALITY",
          "THRESHOLD",
          "LONG RUN"
        ],
        "why": [
          "Training 1: aerobe omvang.",
          "Training 2: snelheidsreserve en gecontroleerd drempelwerk.",
          "Training 3: rustige aanvulling van het weekvolume.",
          "Training 4: duurvermogen vergroten zonder wedstrijdinspanning."
        ],
        "targetLink": "Van aerobe omvang en snelheidsreserve naar controle op 12,0 km/u onder vermoeidheid, gevolgd door taper en frisheid.",
        "whyNotMore": "Easy blijft echt easy: RPE 3–4/10 en volledige zinnen kunnen spreken. Een test is diagnostiek, geen verplichting om jezelf kapot te lopen. De taper in week 45–47 is beschermd: geen extra kilometers, extra tests of extra trainingsdagen. De langste duurloop blijft de 30K Confidence Run in week 43: ongeveer 30,36 km. Niet verlengen naar 32, 33 of 35 km. Bij oplopende plaatselijke pijn, technisch verval of duidelijke controleproblemen wordt een training aangepast of gestopt.",
        "confidence": "18 km is haalbaar; rustig blijven, geen race."
      }
    },
    {
      "weekId": "marathon-3u30-w38",
      "weekNumber": 38,
      "phaseId": "opbouw-confidence",
      "phaseName": "Opbouw en confidence",
      "startDate": "2026-09-14",
      "endDate": "2026-09-20",
      "periodLabel": "14 t/m 20 september 2026",
      "weekType": "BUILD + FITNESS CHECK #1",
      "focus": "Eerste 20K confidence run en submaximale nulmeting",
      "includesMarathon": false,
      "workouts": [
        {
          "workoutId": "marathon-3u30-w38-t1",
          "weekNumber": 38,
          "trainingNumber": 1,
          "trainingLabel": "Training 1",
          "weekId": "marathon-3u30-w38",
          "dateLabel": "14 t/m 20 september 2026",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence",
          "title": "Easy",
          "category": "rustige-duur",
          "tone": "easy",
          "labels": [
            "EASY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w38-t1-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t1-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 2700,
                  "display": "45 min",
                  "speedKmh": 10.1,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t1-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t1-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 3300,
          "totalPlannedLabel": "55 min",
          "estimatedDistanceKm": 9.05,
          "estimatedDistanceLabel": "±9,1 km",
          "sourceSummary": "55 min · ongeveer 9,05 km",
          "goal": "rustige omvang.",
          "targetRpe": "3–4/10.",
          "mentalGoal": "controle bewaren vóór de snelle training.",
          "rationale": "rustige omvang. controle bewaren vóór de snelle training.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9.2,0.5],[2700,null,10.1,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w38-fitness-check-1",
          "weekNumber": 38,
          "trainingNumber": null,
          "trainingLabel": "Extra Fitness Check #1",
          "weekId": "marathon-3u30-w38",
          "dateLabel": "14 t/m 20 september 2026",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence",
          "title": "Extra Fitness Check #1",
          "category": "testtraining",
          "tone": "test",
          "labels": [
            "EXTRA FITNESS CHECK",
            "TEST"
          ],
          "surface": "loopband",
          "isExtra": true,
          "isFitnessCheck": true,
          "fitnessCheckNumber": 1,
          "isTest": true,
          "testNumber": "fitness-1",
          "groups": [
            {
              "groupId": "marathon-3u30-w38-fitness-check-1-g1",
              "kind": "sequence",
              "label": "Vast vergelijkingsprotocol",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-fitness-check-1-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-fitness-check-1-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 11,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-fitness-check-1-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-fitness-check-1-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-fitness-check-1-s05"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 2400,
          "totalPlannedLabel": "40 min",
          "estimatedDistanceKm": 6.958333333333333,
          "estimatedDistanceLabel": "±7 km",
          "sourceSummary": "40 min · ongeveer 6,96 km.",
          "goal": "nulmeting voor vergelijking met week 42.",
          "targetRpe": "registreren per relevant blok; niet maximaal.",
          "mentalGoal": "observeren zonder de uitslag tijdens het lopen te dramatiseren.",
          "rationale": "nulmeting voor vergelijking met week 42. observeren zonder de uitslag tijdens het lopen te dramatiseren.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "recommended",
          "recoveryLabel": "Rustige dag aanbevolen",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Gebruik dezelfde loopband, snelheden en hellingen als bij de andere check; geen automatische snelheidsaanpassing.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": "registreren per relevant blok; niet maximaal.",
          "protocolSignature": "[[300,null,9,0.5],[600,null,10,0.5],[600,null,11,0.5],[600,null,12,1],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w38-t2",
          "weekNumber": 38,
          "trainingNumber": 2,
          "trainingLabel": "Training 2",
          "weekId": "marathon-3u30-w38",
          "dateLabel": "14 t/m 20 september 2026",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence",
          "title": "6 × 4 min snel",
          "category": "interval",
          "tone": "interval",
          "labels": [
            "QUALITY",
            "INTERVAL"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w38-t2-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t2-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t2-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t2-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 120,
                  "display": "2 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t2-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t2-s05"
                },
                {
                  "basis": "time",
                  "durationSeconds": 120,
                  "display": "2 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t2-s06"
                },
                {
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t2-s07"
                },
                {
                  "basis": "time",
                  "durationSeconds": 120,
                  "display": "2 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t2-s08"
                },
                {
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t2-s09"
                },
                {
                  "basis": "time",
                  "durationSeconds": 120,
                  "display": "2 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t2-s10"
                },
                {
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t2-s11"
                },
                {
                  "basis": "time",
                  "durationSeconds": 120,
                  "display": "2 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t2-s12"
                },
                {
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t2-s13"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t2-s14"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 3540,
          "totalPlannedLabel": "59 min",
          "estimatedDistanceKm": 10.741666666666667,
          "estimatedDistanceLabel": "±10,7 km",
          "sourceSummary": "59 min · ongeveer 10,74 km",
          "goal": "korte snelheidsreserve.",
          "targetRpe": "laatste snelle blok maximaal ongeveer 8/10.",
          "mentalGoal": "snel maar herhaalbaar, geen sprint.",
          "rationale": "korte snelheidsreserve. snel maar herhaalbaar, geen sprint.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[240,null,13,1],[120,null,9.5,0.5],[240,null,13,1],[120,null,9.5,0.5],[240,null,13,1],[120,null,9.5,0.5],[240,null,13,1],[120,null,9.5,0.5],[240,null,13,1],[120,null,9.5,0.5],[240,null,13,1],[600,null,9,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w38-t3",
          "weekNumber": 38,
          "trainingNumber": 3,
          "trainingLabel": "Training 3",
          "weekId": "marathon-3u30-w38",
          "dateLabel": "14 t/m 20 september 2026",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence",
          "title": "Progressief",
          "category": "rustige-duur",
          "tone": "steady",
          "labels": [
            "EASY",
            "STEADY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w38-t3-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t3-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 1800,
                  "display": "30 min",
                  "speedKmh": 10.1,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t3-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 10.8,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t3-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t3-s04"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 3000,
          "totalPlannedLabel": "50 min",
          "estimatedDistanceKm": 8.325,
          "estimatedDistanceLabel": "±8,3 km",
          "sourceSummary": "50 min · ongeveer 8,33 km",
          "goal": "gecontroleerd eindigen zonder er een tempotraining van te maken.",
          "targetRpe": "maximaal ongeveer 5/10.",
          "mentalGoal": "versnellen met behoud van ontspanning.",
          "rationale": "gecontroleerd eindigen zonder er een tempotraining van te maken. versnellen met behoud van ontspanning.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9.2,0.5],[1800,null,10.1,0.5],[600,null,10.8,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w38-t4",
          "weekNumber": 38,
          "trainingNumber": 4,
          "trainingLabel": "Training 4",
          "weekId": "marathon-3u30-w38",
          "dateLabel": "14 t/m 20 september 2026",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence",
          "title": "First 20K Confidence Run",
          "category": "lange-duur",
          "tone": "long",
          "labels": [
            "LONG RUN",
            "CONFIDENCE RUN",
            "20K CONFIDENCE",
            "RACEVOEDING OEFENEN"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w38-t4-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t4-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 6000,
                  "display": "100 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t4-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t4-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w38-t4-s04"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 7500,
          "totalPlannedLabel": "125 min",
          "estimatedDistanceKm": 20.708333333333332,
          "estimatedDistanceLabel": "±20,7 km",
          "sourceSummary": "125 min · ongeveer 20,71 km",
          "goal": "ervaren dat 20 km een trainingsafstand kan zijn. Dit is geen prestatietest.",
          "targetRpe": "bij het einde idealiter maximaal 5–6/10.",
          "mentalGoal": "na afloop moet het gevoel bestaan dat meer kilometers mogelijk waren.",
          "rationale": "ervaren dat 20 km een trainingsafstand kan zijn. Dit is geen prestatietest. na afloop moet het gevoel bestaan dat meer kilometers mogelijk waren.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": true,
          "fullFuelRehearsal": false,
          "nutrition": "Oefen voor grote lange trainingen geleidelijk richting 60–75 gram koolhydraten per uur, indien goed verdragen. Bouw dit niet ineens op in de zwaarste sessie; gebruik in de laatste weken geen nieuwe producten.",
          "evaluation": null,
          "protocolSignature": "[[600,null,9.5,0.5],[6000,null,10,0.5],[600,null,10.5,0.5],[300,null,8.5,0.5]]"
        }
      ],
      "plannedDistanceKm": 55.78333333333333,
      "plannedDistanceLabel": "±55,8 km",
      "weekPhilosophy": {
        "theme": "BUILD + FITNESS CHECK #1",
        "summary": "Eerste 20K confidence run en submaximale nulmeting",
        "adaptations": [
          "EASY",
          "EXTRA FITNESS CHECK",
          "TEST",
          "QUALITY",
          "INTERVAL",
          "STEADY",
          "LONG RUN",
          "CONFIDENCE RUN",
          "20K CONFIDENCE"
        ],
        "why": [
          "Training 1: rustige omvang.",
          "Extra Fitness Check #1: nulmeting voor vergelijking met week 42.",
          "Training 2: korte snelheidsreserve.",
          "Training 3: gecontroleerd eindigen zonder er een tempotraining van te maken.",
          "Training 4: ervaren dat 20 km een trainingsafstand kan zijn. Dit is geen prestatietest."
        ],
        "targetLink": "Van aerobe omvang en snelheidsreserve naar controle op 12,0 km/u onder vermoeidheid, gevolgd door taper en frisheid.",
        "whyNotMore": "Easy blijft echt easy: RPE 3–4/10 en volledige zinnen kunnen spreken. Een test is diagnostiek, geen verplichting om jezelf kapot te lopen. De taper in week 45–47 is beschermd: geen extra kilometers, extra tests of extra trainingsdagen. De langste duurloop blijft de 30K Confidence Run in week 43: ongeveer 30,36 km. Niet verlengen naar 32, 33 of 35 km. Bij oplopende plaatselijke pijn, technisch verval of duidelijke controleproblemen wordt een training aangepast of gestopt.",
        "confidence": "observeren zonder de uitslag tijdens het lopen te dramatiseren. na afloop moet het gevoel bestaan dat meer kilometers mogelijk waren."
      }
    },
    {
      "weekId": "marathon-3u30-w39",
      "weekNumber": 39,
      "phaseId": "opbouw-confidence",
      "phaseName": "Opbouw en confidence",
      "startDate": "2026-09-21",
      "endDate": "2026-09-27",
      "periodLabel": "21 t/m 27 september 2026",
      "weekType": "MARATHON SPECIFIC BUILD",
      "focus": "3 × 12 min MP en progressieve halve-marathonconfidence",
      "includesMarathon": false,
      "workouts": [
        {
          "workoutId": "marathon-3u30-w39-t1",
          "weekNumber": 39,
          "trainingNumber": 1,
          "trainingLabel": "Training 1",
          "weekId": "marathon-3u30-w39",
          "dateLabel": "21 t/m 27 september 2026",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence",
          "title": "Easy",
          "category": "rustige-duur",
          "tone": "easy",
          "labels": [
            "EASY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w39-t1-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t1-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 2700,
                  "display": "45 min",
                  "speedKmh": 10.2,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t1-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t1-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 3300,
          "totalPlannedLabel": "55 min",
          "estimatedDistanceKm": 9.125,
          "estimatedDistanceLabel": "±9,1 km",
          "sourceSummary": "55 min · ongeveer 9,13 km",
          "goal": "rustige aerobe omvang.",
          "targetRpe": "3–4/10.",
          "mentalGoal": "fris genoeg blijven voor de MP-training.",
          "rationale": "rustige aerobe omvang. fris genoeg blijven voor de MP-training.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9.2,0.5],[2700,null,10.2,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w39-t2",
          "weekNumber": 39,
          "trainingNumber": 2,
          "trainingLabel": "Training 2",
          "weekId": "marathon-3u30-w39",
          "dateLabel": "21 t/m 27 september 2026",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence",
          "title": "3 × 12 min marathonpace",
          "category": "kwaliteit",
          "tone": "mp",
          "labels": [
            "QUALITY",
            "MARATHON SPECIFIC"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w39-t2-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t2-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t2-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 720,
                  "display": "12 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t2-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t2-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 720,
                  "display": "12 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t2-s05"
                },
                {
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t2-s06"
                },
                {
                  "basis": "time",
                  "durationSeconds": 720,
                  "display": "12 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t2-s07"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t2-s08"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 4020,
          "totalPlannedLabel": "67 min",
          "estimatedDistanceKm": 12.108333333333333,
          "estimatedDistanceLabel": "±12,1 km",
          "sourceSummary": "67 min · ongeveer 12,11 km",
          "goal": "langer totaalvolume op MP met controle.",
          "targetRpe": "derde blok ongeveer 6–7/10.",
          "mentalGoal": "12,0 km/u moet geleidelijk vertrouwder worden.",
          "rationale": "langer totaalvolume op MP met controle. 12,0 km/u moet geleidelijk vertrouwder worden.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[720,null,12,1],[180,null,9.5,0.5],[720,null,12,1],[180,null,9.5,0.5],[720,null,12,1],[600,null,9,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w39-t3",
          "weekNumber": 39,
          "trainingNumber": 3,
          "trainingLabel": "Training 3",
          "weekId": "marathon-3u30-w39",
          "dateLabel": "21 t/m 27 september 2026",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence",
          "title": "Steady finish",
          "category": "rustige-duur",
          "tone": "steady",
          "labels": [
            "EASY",
            "STEADY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w39-t3-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t3-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 2100,
                  "display": "35 min",
                  "speedKmh": 10.1,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t3-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 10.8,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t3-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t3-s04"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 3300,
          "totalPlannedLabel": "55 min",
          "estimatedDistanceKm": 9.166666666666668,
          "estimatedDistanceLabel": "±9,2 km",
          "sourceSummary": "55 min · ongeveer 9,17 km",
          "goal": "middellange duur met beheerste steady finish.",
          "targetRpe": "maximaal ongeveer 5/10.",
          "mentalGoal": "gecontroleerd versnellen, niet bewijzen.",
          "rationale": "middellange duur met beheerste steady finish. gecontroleerd versnellen, niet bewijzen.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9.2,0.5],[2100,null,10.1,0.5],[600,null,10.8,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w39-t4",
          "weekNumber": 39,
          "trainingNumber": 4,
          "trainingLabel": "Training 4",
          "weekId": "marathon-3u30-w39",
          "dateLabel": "21 t/m 27 september 2026",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence",
          "title": "Confidence Run #1: progressieve halve marathon + uitlopen",
          "category": "lange-duur",
          "tone": "long",
          "labels": [
            "LONG RUN",
            "CONFIDENCE RUN",
            "HM CONFIDENCE #1",
            "RACEVOEDING OEFENEN"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w39-t4-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "distance",
                  "distanceKm": 3,
                  "display": "3,0 km",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t4-s01"
                },
                {
                  "basis": "distance",
                  "distanceKm": 8,
                  "display": "8,0 km",
                  "speedKmh": 10.3,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t4-s02"
                },
                {
                  "basis": "distance",
                  "distanceKm": 6,
                  "display": "6,0 km",
                  "speedKmh": 10.8,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t4-s03"
                },
                {
                  "basis": "distance",
                  "distanceKm": 4.1,
                  "display": "4,1 km",
                  "speedKmh": 11.2,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t4-s04"
                },
                {
                  "basis": "distance",
                  "distanceKm": 2.7,
                  "display": "2,7 km",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w39-t4-s05"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 8166,
          "totalPlannedLabel": "136:06 min",
          "estimatedDistanceKm": 23.8,
          "estimatedDistanceLabel": "±23,8 km",
          "sourceSummary": "exact 23,8 km · berekende duur ongeveer 2:16:06",
          "goal": "na een progressieve halve marathon nog gecontroleerd verder kunnen lopen.",
          "targetRpe": "bij 21,1 km maximaal ongeveer 6–7/10.",
          "mentalGoal": "“Ik heb een halve marathon gelopen en kon daarna gewoon verder.”",
          "rationale": "na een progressieve halve marathon nog gecontroleerd verder kunnen lopen. “Ik heb een halve marathon gelopen en kon daarna gewoon verder.”",
          "detailsSections": [
            {
              "title": "Mijlpaal",
              "items": [
                "na blok 4 is exact 21,1 km bereikt."
              ]
            }
          ],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": true,
          "fullFuelRehearsal": false,
          "nutrition": "Oefen voor grote lange trainingen geleidelijk richting 60–75 gram koolhydraten per uur, indien goed verdragen. Bouw dit niet ineens op in de zwaarste sessie; gebruik in de laatste weken geen nieuwe producten.",
          "evaluation": null,
          "protocolSignature": "[[null,3,10,0.5],[null,8,10.3,0.5],[null,6,10.8,0.5],[null,4.1,11.2,0.5],[null,2.7,10,0.5]]"
        }
      ],
      "plannedDistanceKm": 54.2,
      "plannedDistanceLabel": "±54,2 km",
      "weekPhilosophy": {
        "theme": "MARATHON SPECIFIC BUILD",
        "summary": "3 × 12 min MP en progressieve halve-marathonconfidence",
        "adaptations": [
          "EASY",
          "QUALITY",
          "MARATHON SPECIFIC",
          "STEADY",
          "LONG RUN",
          "CONFIDENCE RUN",
          "HM CONFIDENCE #1"
        ],
        "why": [
          "Training 1: rustige aerobe omvang.",
          "Training 2: langer totaalvolume op MP met controle.",
          "Training 3: middellange duur met beheerste steady finish.",
          "Training 4: na een progressieve halve marathon nog gecontroleerd verder kunnen lopen."
        ],
        "targetLink": "Van aerobe omvang en snelheidsreserve naar controle op 12,0 km/u onder vermoeidheid, gevolgd door taper en frisheid.",
        "whyNotMore": "Easy blijft echt easy: RPE 3–4/10 en volledige zinnen kunnen spreken. Een test is diagnostiek, geen verplichting om jezelf kapot te lopen. De taper in week 45–47 is beschermd: geen extra kilometers, extra tests of extra trainingsdagen. De langste duurloop blijft de 30K Confidence Run in week 43: ongeveer 30,36 km. Niet verlengen naar 32, 33 of 35 km. Bij oplopende plaatselijke pijn, technisch verval of duidelijke controleproblemen wordt een training aangepast of gestopt.",
        "confidence": "“Ik heb een halve marathon gelopen en kon daarna gewoon verder.”"
      }
    },
    {
      "weekId": "marathon-3u30-w40",
      "weekNumber": 40,
      "phaseId": "herstel-test",
      "phaseName": "Herstel en eerste test",
      "startDate": "2026-09-28",
      "endDate": "2026-10-04",
      "periodLabel": "28 september t/m 4 oktober 2026",
      "weekType": "CUTBACK / RECOVERY + 5K TEST",
      "focus": "Vermoeidheid laten zakken en 5K-snelheidsreserve meten",
      "includesMarathon": false,
      "workouts": [
        {
          "workoutId": "marathon-3u30-w40-t1",
          "weekNumber": 40,
          "trainingNumber": 1,
          "trainingLabel": "Training 1",
          "weekId": "marathon-3u30-w40",
          "dateLabel": "28 september t/m 4 oktober 2026",
          "phaseId": "herstel-test",
          "phaseName": "Herstel en eerste test",
          "title": "Recovery",
          "category": "herstel",
          "tone": "recovery",
          "labels": [
            "RECOVERY",
            "EASY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w40-t1-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t1-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 2100,
                  "display": "35 min",
                  "speedKmh": 9.8,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t1-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t1-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 2700,
          "totalPlannedLabel": "45 min",
          "estimatedDistanceKm": 7.175,
          "estimatedDistanceLabel": "±7,2 km",
          "sourceSummary": "45 min · ongeveer 7,18 km",
          "goal": "vermoeidheid verminderen.",
          "targetRpe": "2–3/10.",
          "mentalGoal": "cutback is doelbewuste training, geen verloren week.",
          "rationale": "vermoeidheid verminderen. cutback is doelbewuste training, geen verloren week.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9,0.5],[2100,null,9.8,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w40-t2",
          "weekNumber": 40,
          "trainingNumber": 2,
          "trainingLabel": "Training 2",
          "weekId": "marathon-3u30-w40",
          "dateLabel": "28 september t/m 4 oktober 2026",
          "phaseId": "herstel-test",
          "phaseName": "Herstel en eerste test",
          "title": "Test 1: 5K Benchmark",
          "category": "testtraining",
          "tone": "test",
          "labels": [
            "TEST",
            "5K BENCHMARK",
            "QUALITY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": true,
          "testNumber": 1,
          "groups": [
            {
              "groupId": "marathon-3u30-w40-t2-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t2-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t2-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t2-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 20,
                  "display": "20 sec",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t2-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 100,
                  "display": "1:40 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t2-s05"
                },
                {
                  "basis": "time",
                  "durationSeconds": 20,
                  "display": "20 sec",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t2-s06"
                },
                {
                  "basis": "time",
                  "durationSeconds": 100,
                  "display": "1:40 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t2-s07"
                },
                {
                  "basis": "time",
                  "durationSeconds": 20,
                  "display": "20 sec",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t2-s08"
                },
                {
                  "basis": "time",
                  "durationSeconds": 100,
                  "display": "1:40 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t2-s09"
                },
                {
                  "basis": "time",
                  "durationSeconds": 20,
                  "display": "20 sec",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t2-s10"
                },
                {
                  "basis": "time",
                  "durationSeconds": 100,
                  "display": "1:40 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t2-s11"
                },
                {
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t2-s12"
                },
                {
                  "basis": "distance",
                  "distanceKm": 5,
                  "speedKmh": null,
                  "inclinePercent": 1,
                  "display": "5,00 km",
                  "type": "test",
                  "instruction": "start gecontroleerd rond 12,5 km/u en pas geleidelijk aan",
                  "segmentId": "marathon-3u30-w40-t2-s13"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t2-s14"
                }
              ]
            }
          ],
          "totalPlannedSeconds": null,
          "totalPlannedLabel": "39 min + 5 km test",
          "estimatedDistanceKm": 11.147222222222222,
          "estimatedDistanceLabel": "±11,1 km",
          "sourceSummary": "ongeveer 11,15 km; tijd afhankelijk van de 5K-uitslag",
          "goal": "verandering in snelheid en drempel beoordelen.",
          "targetRpe": "test eindigt maximaal; warming-up en cooling-down gecontroleerd.",
          "mentalGoal": "één test bepaalt het marathondoel niet.",
          "rationale": "verandering in snelheid en drempel beoordelen. één test bepaalt het marathondoel niet.",
          "detailsSections": [
            {
              "title": "Uitvoering",
              "items": [
                "laatste 1–2 km mag maximaal; niet te snel beginnen."
              ]
            },
            {
              "title": "Interpretatie",
              "items": [
                "sneller dan 22:00 · zeer sterke ontwikkeling",
                "22:00–22:45 · goede ontwikkeling",
                "22:46–23:15 · vooruitgang; snelheidsreserve blijft aandachtspunt",
                "langzamer dan 23:15 · snelheidsontwikkeling blijft achter bij wat idealiter bij 3:30 past"
              ]
            }
          ],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": "test eindigt maximaal; warming-up en cooling-down gecontroleerd. sneller dan 22:00 · zeer sterke ontwikkeling 22:00–22:45 · goede ontwikkeling 22:46–23:15 · vooruitgang; snelheidsreserve blijft aandachtspunt langzamer dan 23:15 · snelheidsontwikkeling blijft achter bij wat idealiter bij 3:30 past",
          "protocolSignature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[180,null,9,0.5],[20,null,13,1],[100,null,9,0.5],[20,null,13,1],[100,null,9,0.5],[20,null,13,1],[100,null,9,0.5],[20,null,13,1],[100,null,9,0.5],[180,null,9,0.5],[null,5,null,1],[600,null,9,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w40-t3",
          "weekNumber": 40,
          "trainingNumber": 3,
          "trainingLabel": "Training 3",
          "weekId": "marathon-3u30-w40",
          "dateLabel": "28 september t/m 4 oktober 2026",
          "phaseId": "herstel-test",
          "phaseName": "Herstel en eerste test",
          "title": "Recovery",
          "category": "herstel",
          "tone": "recovery",
          "labels": [
            "RECOVERY",
            "EASY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w40-t3-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t3-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 1800,
                  "display": "30 min",
                  "speedKmh": 9.6,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t3-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t3-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 2400,
          "totalPlannedLabel": "40 min",
          "estimatedDistanceKm": 6.258333333333333,
          "estimatedDistanceLabel": "±6,3 km",
          "sourceSummary": "40 min · ongeveer 6,26 km",
          "goal": "herstellen van de benchmark.",
          "targetRpe": "2–3/10.",
          "mentalGoal": "geen extra tempo toevoegen.",
          "rationale": "herstellen van de benchmark. geen extra tempo toevoegen.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9,0.5],[1800,null,9.6,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w40-t4",
          "weekNumber": 40,
          "trainingNumber": 4,
          "trainingLabel": "Training 4",
          "weekId": "marathon-3u30-w40",
          "dateLabel": "28 september t/m 4 oktober 2026",
          "phaseId": "herstel-test",
          "phaseName": "Herstel en eerste test",
          "title": "Rustige lange duur",
          "category": "lange-duur",
          "tone": "long",
          "labels": [
            "LONG RUN",
            "RACEVOEDING OEFENEN"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w40-t4-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t4-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 5700,
                  "display": "95 min",
                  "speedKmh": 9.9,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t4-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w40-t4-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 6600,
          "totalPlannedLabel": "110 min",
          "estimatedDistanceKm": 17.966666666666665,
          "estimatedDistanceLabel": "±18 km",
          "sourceSummary": "110 min · ongeveer 17,97 km",
          "goal": "lange duur onderhouden in een bewust lichtere week.",
          "targetRpe": "3–4/10.",
          "mentalGoal": "beheerst blijven na de test.",
          "rationale": "lange duur onderhouden in een bewust lichtere week. beheerst blijven na de test.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": true,
          "fullFuelRehearsal": false,
          "nutrition": "Oefen voor grote lange trainingen geleidelijk richting 60–75 gram koolhydraten per uur, indien goed verdragen. Bouw dit niet ineens op in de zwaarste sessie; gebruik in de laatste weken geen nieuwe producten.",
          "evaluation": null,
          "protocolSignature": "[[600,null,9.5,0.5],[5700,null,9.9,0.5],[300,null,8.5,0.5]]"
        }
      ],
      "plannedDistanceKm": 42.54722222222222,
      "plannedDistanceLabel": "±42,5 km",
      "weekPhilosophy": {
        "theme": "CUTBACK / RECOVERY + 5K TEST",
        "summary": "Vermoeidheid laten zakken en 5K-snelheidsreserve meten",
        "adaptations": [
          "RECOVERY",
          "EASY",
          "TEST",
          "5K BENCHMARK",
          "QUALITY",
          "LONG RUN"
        ],
        "why": [
          "Training 1: vermoeidheid verminderen.",
          "Training 2: verandering in snelheid en drempel beoordelen.",
          "Training 3: herstellen van de benchmark.",
          "Training 4: lange duur onderhouden in een bewust lichtere week."
        ],
        "targetLink": "Van aerobe omvang en snelheidsreserve naar controle op 12,0 km/u onder vermoeidheid, gevolgd door taper en frisheid.",
        "whyNotMore": "Easy blijft echt easy: RPE 3–4/10 en volledige zinnen kunnen spreken. Een test is diagnostiek, geen verplichting om jezelf kapot te lopen. De taper in week 45–47 is beschermd: geen extra kilometers, extra tests of extra trainingsdagen. De langste duurloop blijft de 30K Confidence Run in week 43: ongeveer 30,36 km. Niet verlengen naar 32, 33 of 35 km. Bij oplopende plaatselijke pijn, technisch verval of duidelijke controleproblemen wordt een training aangepast of gestopt.",
        "confidence": "één test bepaalt het marathondoel niet. beheerst blijven na de test."
      }
    },
    {
      "weekId": "marathon-3u30-w41",
      "weekNumber": 41,
      "phaseId": "marathonspecifiek",
      "phaseName": "Marathonspecifieke piekfase",
      "startDate": "2026-10-05",
      "endDate": "2026-10-11",
      "periodLabel": "5 t/m 11 oktober 2026",
      "weekType": "PEAK / MARATHON SPECIFIC",
      "focus": "Een uur marathonritme en steady halve-marathonconfidence",
      "includesMarathon": false,
      "workouts": [
        {
          "workoutId": "marathon-3u30-w41-t1",
          "weekNumber": 41,
          "trainingNumber": 1,
          "trainingLabel": "Training 1",
          "weekId": "marathon-3u30-w41",
          "dateLabel": "5 t/m 11 oktober 2026",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke piekfase",
          "title": "Lange easy",
          "category": "rustige-duur",
          "tone": "easy",
          "labels": [
            "EASY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w41-t1-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w41-t1-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 3600,
                  "display": "60 min",
                  "speedKmh": 10.2,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w41-t1-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w41-t1-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 4200,
          "totalPlannedLabel": "70 min",
          "estimatedDistanceKm": 11.675,
          "estimatedDistanceLabel": "±11,7 km",
          "sourceSummary": "70 min · ongeveer 11,68 km",
          "goal": "aerobe omvang verhogen zonder extra intensiteit.",
          "targetRpe": "3–4/10.",
          "mentalGoal": "lang easy blijft nog steeds easy.",
          "rationale": "aerobe omvang verhogen zonder extra intensiteit. lang easy blijft nog steeds easy.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9.2,0.5],[3600,null,10.2,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w41-t2",
          "weekNumber": 41,
          "trainingNumber": 2,
          "trainingLabel": "Training 2",
          "weekId": "marathon-3u30-w41",
          "dateLabel": "5 t/m 11 oktober 2026",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke piekfase",
          "title": "Marathon Rhythm Test",
          "category": "testtraining",
          "tone": "test",
          "labels": [
            "TEST",
            "MARATHON SPECIFIC",
            "BUITEN AANBEVOLEN"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": true,
          "testNumber": "rhythm",
          "groups": [
            {
              "groupId": "marathon-3u30-w41-t2-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w41-t2-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w41-t2-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 3600,
                  "display": "60 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w41-t2-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w41-t2-s04"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 5100,
          "totalPlannedLabel": "85 min",
          "estimatedDistanceKm": 15.958333333333332,
          "estimatedDistanceLabel": "±16 km",
          "sourceSummary": "85 min · ongeveer 15,96 km",
          "goal": "een volledig uur of 12 km onafgebroken het marathonritme beheersen.",
          "targetRpe": "laatste 15 min idealiter maximaal ongeveer 7/10.",
          "mentalGoal": "ritme en beheersing, niet een uur lang vechten.",
          "rationale": "een volledig uur of 12 km onafgebroken het marathonritme beheersen. ritme en beheersing, niet een uur lang vechten.",
          "detailsSections": [
            {
              "title": "Buitenvariant",
              "items": [
                "warming-up en cooling-down blijven rustig; loop als kern 12 km onafgebroken rond 4:59–5:00 min/km op een vlak parcours."
              ]
            }
          ],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Buiten aanbevolen",
          "outsideVariant": "warming-up en cooling-down blijven rustig; loop als kern 12 km onafgebroken rond 4:59–5:00 min/km op een vlak parcours.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": "laatste 15 min idealiter maximaal ongeveer 7/10.",
          "protocolSignature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[3600,null,12,1],[600,null,9,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w41-t3",
          "weekNumber": 41,
          "trainingNumber": 3,
          "trainingLabel": "Training 3",
          "weekId": "marathon-3u30-w41",
          "dateLabel": "5 t/m 11 oktober 2026",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke piekfase",
          "title": "Lange easy",
          "category": "rustige-duur",
          "tone": "easy",
          "labels": [
            "EASY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w41-t3-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w41-t3-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 3600,
                  "display": "60 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w41-t3-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w41-t3-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 4200,
          "totalPlannedLabel": "70 min",
          "estimatedDistanceKm": 11.475000000000001,
          "estimatedDistanceLabel": "±11,5 km",
          "sourceSummary": "70 min · ongeveer 11,48 km",
          "goal": "rustige omvang tussen de twee sleuteltrainingen.",
          "targetRpe": "3–4/10.",
          "mentalGoal": "bewust geen snelle finish.",
          "rationale": "rustige omvang tussen de twee sleuteltrainingen. bewust geen snelle finish.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9.2,0.5],[3600,null,10,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w41-t4",
          "weekNumber": 41,
          "trainingNumber": 4,
          "trainingLabel": "Training 4",
          "weekId": "marathon-3u30-w41",
          "dateLabel": "5 t/m 11 oktober 2026",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke piekfase",
          "title": "Confidence Run #2: Half Marathon Steady",
          "category": "lange-duur",
          "tone": "long",
          "labels": [
            "LONG RUN",
            "CONFIDENCE RUN",
            "HM CONFIDENCE #2",
            "RACEVOEDING OEFENEN"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w41-t4-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "distance",
                  "distanceKm": 1.5,
                  "display": "1,5 km",
                  "speedKmh": 9.8,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w41-t4-s01"
                },
                {
                  "basis": "distance",
                  "distanceKm": 21.1,
                  "display": "21,1 km",
                  "speedKmh": 10.7,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w41-t4-s02"
                },
                {
                  "basis": "distance",
                  "distanceKm": 3.2,
                  "display": "3,2 km",
                  "speedKmh": 9.8,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w41-t4-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 8826,
          "totalPlannedLabel": "147:06 min",
          "estimatedDistanceKm": 25.8,
          "estimatedDistanceLabel": "±25,8 km",
          "sourceSummary": "exact 25,8 km · berekende duur ongeveer 2:26:50–2:27:06, afhankelijk van de optionele laatste 5 km",
          "goal": "21,1 km onafgebroken op een degelijk steady tempo lopen en daarna nog ruim 3 km uitlopen.",
          "targetRpe": "km 1–10 ongeveer 4–5/10; km 10–17 ongeveer 5/10; km 17–21 ongeveer 5–6/10.",
          "mentalGoal": "“Ik ben aan het trainen, maar absoluut nog geen wedstrijd aan het lopen.”",
          "rationale": "21,1 km onafgebroken op een degelijk steady tempo lopen en daarna nog ruim 3 km uitlopen. “Ik ben aan het trainen, maar absoluut nog geen wedstrijd aan het lopen.”",
          "detailsSections": [
            {
              "title": "Optie binnen blok 2",
              "items": [
                "alleen wanneer de eerste 16,1 km van het hoofdblok volledig gecontroleerd verlopen, mogen de laatste 5,0 km naar 10,8 km/u — 0,5%. Niet harder."
              ]
            }
          ],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": true,
          "fullFuelRehearsal": false,
          "nutrition": "Oefen voor grote lange trainingen geleidelijk richting 60–75 gram koolhydraten per uur, indien goed verdragen. Bouw dit niet ineens op in de zwaarste sessie; gebruik in de laatste weken geen nieuwe producten.",
          "evaluation": null,
          "protocolSignature": "[[null,1.5,9.8,0.5],[null,21.1,10.7,0.5],[null,3.2,9.8,0.5]]"
        }
      ],
      "plannedDistanceKm": 64.90833333333333,
      "plannedDistanceLabel": "±64,9 km",
      "weekPhilosophy": {
        "theme": "PEAK / MARATHON SPECIFIC",
        "summary": "Een uur marathonritme en steady halve-marathonconfidence",
        "adaptations": [
          "EASY",
          "TEST",
          "MARATHON SPECIFIC",
          "LONG RUN",
          "CONFIDENCE RUN",
          "HM CONFIDENCE #2"
        ],
        "why": [
          "Training 1: aerobe omvang verhogen zonder extra intensiteit.",
          "Training 2: een volledig uur of 12 km onafgebroken het marathonritme beheersen.",
          "Training 3: rustige omvang tussen de twee sleuteltrainingen.",
          "Training 4: 21,1 km onafgebroken op een degelijk steady tempo lopen en daarna nog ruim 3 km uitlopen."
        ],
        "targetLink": "Van aerobe omvang en snelheidsreserve naar controle op 12,0 km/u onder vermoeidheid, gevolgd door taper en frisheid.",
        "whyNotMore": "Easy blijft echt easy: RPE 3–4/10 en volledige zinnen kunnen spreken. Een test is diagnostiek, geen verplichting om jezelf kapot te lopen. De taper in week 45–47 is beschermd: geen extra kilometers, extra tests of extra trainingsdagen. De langste duurloop blijft de 30K Confidence Run in week 43: ongeveer 30,36 km. Niet verlengen naar 32, 33 of 35 km. Bij oplopende plaatselijke pijn, technisch verval of duidelijke controleproblemen wordt een training aangepast of gestopt.",
        "confidence": "ritme en beheersing, niet een uur lang vechten. “Ik ben aan het trainen, maar absoluut nog geen wedstrijd aan het lopen.”"
      }
    },
    {
      "weekId": "marathon-3u30-w42",
      "weekNumber": 42,
      "phaseId": "marathonspecifiek",
      "phaseName": "Marathonspecifieke piekfase",
      "startDate": "2026-10-12",
      "endDate": "2026-10-18",
      "periodLabel": "12 t/m 18 oktober 2026",
      "weekType": "PEAK / MARATHON SPECIFIC + FITNESS CHECK #2",
      "focus": "Identieke fitnesscheck en marathonpace na 150 minuten",
      "includesMarathon": false,
      "workouts": [
        {
          "workoutId": "marathon-3u30-w42-t1",
          "weekNumber": 42,
          "trainingNumber": 1,
          "trainingLabel": "Training 1",
          "weekId": "marathon-3u30-w42",
          "dateLabel": "12 t/m 18 oktober 2026",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke piekfase",
          "title": "Easy",
          "category": "rustige-duur",
          "tone": "easy",
          "labels": [
            "EASY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w42-t1-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t1-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 3000,
                  "display": "50 min",
                  "speedKmh": 10.2,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t1-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t1-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 3600,
          "totalPlannedLabel": "60 min",
          "estimatedDistanceKm": 9.975,
          "estimatedDistanceLabel": "±10 km",
          "sourceSummary": "60 min · ongeveer 9,98 km",
          "goal": "rustige aerobe omvang.",
          "targetRpe": "3–4/10.",
          "mentalGoal": "fris genoeg blijven voor de kwaliteit en lange duur.",
          "rationale": "rustige aerobe omvang. fris genoeg blijven voor de kwaliteit en lange duur.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9.2,0.5],[3000,null,10.2,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w42-fitness-check-2",
          "weekNumber": 42,
          "trainingNumber": null,
          "trainingLabel": "Extra Fitness Check #2",
          "weekId": "marathon-3u30-w42",
          "dateLabel": "12 t/m 18 oktober 2026",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke piekfase",
          "title": "Extra Fitness Check #2",
          "category": "testtraining",
          "tone": "test",
          "labels": [
            "EXTRA FITNESS CHECK",
            "TEST"
          ],
          "surface": "loopband",
          "isExtra": true,
          "isFitnessCheck": true,
          "fitnessCheckNumber": 2,
          "isTest": true,
          "testNumber": "fitness-2",
          "groups": [
            {
              "groupId": "marathon-3u30-w42-fitness-check-2-g1",
              "kind": "sequence",
              "label": "Vast vergelijkingsprotocol",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-fitness-check-2-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-fitness-check-2-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 11,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-fitness-check-2-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-fitness-check-2-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-fitness-check-2-s05"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 2400,
          "totalPlannedLabel": "40 min",
          "estimatedDistanceKm": 6.958333333333333,
          "estimatedDistanceLabel": "±7 km",
          "sourceSummary": "40 min · ongeveer 6,96 km.",
          "goal": "resultaten logisch vergelijken met week 38.",
          "targetRpe": "registreer dezelfde velden als in week 38.",
          "mentalGoal": "vergelijken; niet proberen de check harder te maken.",
          "rationale": "resultaten logisch vergelijken met week 38. vergelijken; niet proberen de check harder te maken.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "recommended",
          "recoveryLabel": "Rustige dag aanbevolen",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Gebruik dezelfde loopband, snelheden en hellingen als bij de andere check; geen automatische snelheidsaanpassing.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": "registreer dezelfde velden als in week 38.",
          "protocolSignature": "[[300,null,9,0.5],[600,null,10,0.5],[600,null,11,0.5],[600,null,12,1],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w42-t2",
          "weekNumber": 42,
          "trainingNumber": 2,
          "trainingLabel": "Training 2",
          "weekId": "marathon-3u30-w42",
          "dateLabel": "12 t/m 18 oktober 2026",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke piekfase",
          "title": "5 × 5 min controlled fast",
          "category": "kwaliteit",
          "tone": "threshold",
          "labels": [
            "QUALITY",
            "CONTROLLED FAST"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w42-t2-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t2-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t2-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 12.8,
                  "inclinePercent": 1,
                  "type": "drempel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t2-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 150,
                  "display": "2:30 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t2-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 12.8,
                  "inclinePercent": 1,
                  "type": "drempel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t2-s05"
                },
                {
                  "basis": "time",
                  "durationSeconds": 150,
                  "display": "2:30 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t2-s06"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 12.8,
                  "inclinePercent": 1,
                  "type": "drempel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t2-s07"
                },
                {
                  "basis": "time",
                  "durationSeconds": 150,
                  "display": "2:30 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t2-s08"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t2-s09"
                },
                {
                  "basis": "time",
                  "durationSeconds": 150,
                  "display": "2:30 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t2-s10"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t2-s11"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t2-s12"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 3600,
          "totalPlannedLabel": "60 min",
          "estimatedDistanceKm": 10.908333333333333,
          "estimatedDistanceLabel": "±10,9 km",
          "sourceSummary": "60 min · ongeveer 10,91 km",
          "goal": "snelheidsreserve onderhouden zonder maximale intervaltraining.",
          "targetRpe": "laatste twee blokken maximaal ongeveer 8/10.",
          "mentalGoal": "controlled fast betekent hard én beheerst.",
          "rationale": "snelheidsreserve onderhouden zonder maximale intervaltraining. controlled fast betekent hard én beheerst.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[300,null,12.8,1],[150,null,9.5,0.5],[300,null,12.8,1],[150,null,9.5,0.5],[300,null,12.8,1],[150,null,9.5,0.5],[300,null,13,1],[150,null,9.5,0.5],[300,null,13,1],[600,null,9,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w42-t3",
          "weekNumber": 42,
          "trainingNumber": 3,
          "trainingLabel": "Training 3",
          "weekId": "marathon-3u30-w42",
          "dateLabel": "12 t/m 18 oktober 2026",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke piekfase",
          "title": "Middellange duur met steady finish",
          "category": "rustige-duur",
          "tone": "steady",
          "labels": [
            "EASY",
            "STEADY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w42-t3-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t3-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 3600,
                  "display": "60 min",
                  "speedKmh": 10.2,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t3-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.8,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t3-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t3-s04"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 4500,
          "totalPlannedLabel": "75 min",
          "estimatedDistanceKm": 12.575000000000001,
          "estimatedDistanceLabel": "±12,6 km",
          "sourceSummary": "75 min · ongeveer 12,58 km",
          "goal": "middellange omvang met een korte beheerste finish.",
          "targetRpe": "easydeel 3–4/10; finish maximaal 5/10.",
          "mentalGoal": "volume verhogen zonder van deze training een tweede kwaliteitssessie te maken.",
          "rationale": "middellange omvang met een korte beheerste finish. volume verhogen zonder van deze training een tweede kwaliteitssessie te maken.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9.2,0.5],[3600,null,10.2,0.5],[300,null,10.8,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w42-t4",
          "weekNumber": 42,
          "trainingNumber": 4,
          "trainingLabel": "Training 4",
          "weekId": "marathon-3u30-w42",
          "dateLabel": "12 t/m 18 oktober 2026",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke piekfase",
          "title": "Progressive MP-under-fatigue",
          "category": "lange-duur",
          "tone": "long",
          "labels": [
            "LONG RUN",
            "MARATHON SPECIFIC",
            "MP UNDER FATIGUE",
            "RACEVOEDING OEFENEN"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w42-t4-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t4-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 6900,
                  "display": "115 min",
                  "speedKmh": 10.1,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t4-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 1200,
                  "display": "20 min",
                  "speedKmh": 11.5,
                  "inclinePercent": 1,
                  "type": "sub-marathon",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t4-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 11.8,
                  "inclinePercent": 1,
                  "type": "sub-marathon",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t4-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t4-s05"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w42-t4-s06"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 9900,
          "totalPlannedLabel": "165 min",
          "estimatedDistanceKm": 28.466666666666665,
          "estimatedDistanceLabel": "±28,5 km",
          "sourceSummary": "165 min · ongeveer 28,47 km",
          "goal": "progressief leren versnellen en uiteindelijk MP beheersen onder diepe vermoeidheid.",
          "targetRpe": "vóór de progressie gecontroleerd; slotblok stevig maar technisch intact.",
          "mentalGoal": "21,1 km is onderweg slechts een tussenpunt.",
          "rationale": "progressief leren versnellen en uiteindelijk MP beheersen onder diepe vermoeidheid. 21,1 km is onderweg slechts een tussenpunt.",
          "detailsSections": [
            {
              "title": "Specificiteit",
              "items": [
                "het echte MP-blok begint pas na ongeveer 150 minuten lopen."
              ]
            },
            {
              "title": "Veiligheidsregel",
              "items": [
                "bij pijn, technisch verval of duidelijke controleproblemen hoeft het laatste MP-blok niet koste wat kost te worden afgemaakt."
              ]
            }
          ],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": true,
          "fullFuelRehearsal": false,
          "nutrition": "Oefen voor grote lange trainingen geleidelijk richting 60–75 gram koolhydraten per uur, indien goed verdragen. Bouw dit niet ineens op in de zwaarste sessie; gebruik in de laatste weken geen nieuwe producten.",
          "evaluation": null,
          "protocolSignature": "[[600,null,9.5,0.5],[6900,null,10.1,0.5],[1200,null,11.5,1],[300,null,11.8,1],[600,null,12,1],[300,null,8.5,0.5]]"
        }
      ],
      "plannedDistanceKm": 68.88333333333334,
      "plannedDistanceLabel": "±68,9 km",
      "weekPhilosophy": {
        "theme": "PEAK / MARATHON SPECIFIC + FITNESS CHECK #2",
        "summary": "Identieke fitnesscheck en marathonpace na 150 minuten",
        "adaptations": [
          "EASY",
          "EXTRA FITNESS CHECK",
          "TEST",
          "QUALITY",
          "CONTROLLED FAST",
          "STEADY",
          "LONG RUN",
          "MARATHON SPECIFIC",
          "MP UNDER FATIGUE"
        ],
        "why": [
          "Training 1: rustige aerobe omvang.",
          "Extra Fitness Check #2: resultaten logisch vergelijken met week 38.",
          "Training 2: snelheidsreserve onderhouden zonder maximale intervaltraining.",
          "Training 3: middellange omvang met een korte beheerste finish.",
          "Training 4: progressief leren versnellen en uiteindelijk MP beheersen onder diepe vermoeidheid."
        ],
        "targetLink": "Van aerobe omvang en snelheidsreserve naar controle op 12,0 km/u onder vermoeidheid, gevolgd door taper en frisheid.",
        "whyNotMore": "Easy blijft echt easy: RPE 3–4/10 en volledige zinnen kunnen spreken. Een test is diagnostiek, geen verplichting om jezelf kapot te lopen. De taper in week 45–47 is beschermd: geen extra kilometers, extra tests of extra trainingsdagen. De langste duurloop blijft de 30K Confidence Run in week 43: ongeveer 30,36 km. Niet verlengen naar 32, 33 of 35 km. Bij oplopende plaatselijke pijn, technisch verval of duidelijke controleproblemen wordt een training aangepast of gestopt.",
        "confidence": "vergelijken; niet proberen de check harder te maken. 21,1 km is onderweg slechts een tussenpunt."
      }
    },
    {
      "weekId": "marathon-3u30-w43",
      "weekNumber": 43,
      "phaseId": "marathonspecifiek",
      "phaseName": "Marathonspecifieke piekfase",
      "startDate": "2026-10-19",
      "endDate": "2026-10-25",
      "periodLabel": "19 t/m 25 oktober 2026",
      "weekType": "PEAK / 30K CONFIDENCE",
      "focus": "3 × 15 min MP-test en de langste duurloop van 30,4 km",
      "includesMarathon": false,
      "workouts": [
        {
          "workoutId": "marathon-3u30-w43-t1",
          "weekNumber": 43,
          "trainingNumber": 1,
          "trainingLabel": "Training 1",
          "weekId": "marathon-3u30-w43",
          "dateLabel": "19 t/m 25 oktober 2026",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke piekfase",
          "title": "Lange easy",
          "category": "rustige-duur",
          "tone": "easy",
          "labels": [
            "EASY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w43-t1-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t1-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 3600,
                  "display": "60 min",
                  "speedKmh": 10.2,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t1-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t1-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 4200,
          "totalPlannedLabel": "70 min",
          "estimatedDistanceKm": 11.675,
          "estimatedDistanceLabel": "±11,7 km",
          "sourceSummary": "70 min · ongeveer 11,68 km",
          "goal": "aerobe omvang.",
          "targetRpe": "3–4/10.",
          "mentalGoal": "gemakkelijk genoeg om de sleuteltrainingen mogelijk te maken.",
          "rationale": "aerobe omvang. gemakkelijk genoeg om de sleuteltrainingen mogelijk te maken.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9.2,0.5],[3600,null,10.2,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w43-t2",
          "weekNumber": 43,
          "trainingNumber": 2,
          "trainingLabel": "Training 2",
          "weekId": "marathon-3u30-w43",
          "dateLabel": "19 t/m 25 oktober 2026",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke piekfase",
          "title": "Test: 3 × 15 min marathonpace",
          "category": "testtraining",
          "tone": "test",
          "labels": [
            "TEST",
            "MARATHON SPECIFIC",
            "3 × 15 MP"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": true,
          "testNumber": 2,
          "groups": [
            {
              "groupId": "marathon-3u30-w43-t2-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t2-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t2-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t2-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t2-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t2-s05"
                },
                {
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t2-s06"
                },
                {
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t2-s07"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t2-s08"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 4680,
          "totalPlannedLabel": "78 min",
          "estimatedDistanceKm": 14.225,
          "estimatedDistanceLabel": "±14,2 km",
          "sourceSummary": "78 min · ongeveer 14,23 km",
          "goal": "beoordelen hoe normaal en beheersbaar 12,0 km/u is geworden.",
          "targetRpe": "groen = derde blok maximaal ongeveer 7/10 en gevoel dat een vierde blok mogelijk was; oranje = 7,5–8/10 en duidelijk zwaar; rood = vrijwel maximaal of snelheid moet omlaag.",
          "mentalGoal": "de vraag is niet “hoe snel ben ik?”, maar “hoe normaal voelt MP?”",
          "rationale": "beoordelen hoe normaal en beheersbaar 12,0 km/u is geworden. de vraag is niet “hoe snel ben ik?”, maar “hoe normaal voelt MP?”",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": "groen = derde blok maximaal ongeveer 7/10 en gevoel dat een vierde blok mogelijk was; oranje = 7,5–8/10 en duidelijk zwaar; rood = vrijwel maximaal of snelheid moet omlaag.",
          "protocolSignature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[900,null,12,1],[240,null,9.5,0.5],[900,null,12,1],[240,null,9.5,0.5],[900,null,12,1],[600,null,9,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w43-t3",
          "weekNumber": 43,
          "trainingNumber": 3,
          "trainingLabel": "Training 3",
          "weekId": "marathon-3u30-w43",
          "dateLabel": "19 t/m 25 oktober 2026",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke piekfase",
          "title": "Lange easy",
          "category": "rustige-duur",
          "tone": "easy",
          "labels": [
            "EASY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w43-t3-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t3-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 3600,
                  "display": "60 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t3-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t3-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 4200,
          "totalPlannedLabel": "70 min",
          "estimatedDistanceKm": 11.475000000000001,
          "estimatedDistanceLabel": "±11,5 km",
          "sourceSummary": "70 min · ongeveer 11,48 km",
          "goal": "rustige omvang.",
          "targetRpe": "3–4/10.",
          "mentalGoal": "geen extra snelle finish toevoegen.",
          "rationale": "rustige omvang. geen extra snelle finish toevoegen.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9.2,0.5],[3600,null,10,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w43-t4",
          "weekNumber": 43,
          "trainingNumber": 4,
          "trainingLabel": "Training 4",
          "weekId": "marathon-3u30-w43",
          "dateLabel": "19 t/m 25 oktober 2026",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke piekfase",
          "title": "30K Confidence Run",
          "category": "lange-duur",
          "tone": "long",
          "labels": [
            "LONG RUN",
            "CONFIDENCE RUN",
            "30K CONFIDENCE",
            "BUITEN AANBEVOLEN",
            "RACEVOEDING OEFENEN",
            "VOLLEDIGE RACEVOEDINGSREPETITIE"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w43-t4-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t4-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 8400,
                  "display": "140 min",
                  "speedKmh": 10.1,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t4-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 1500,
                  "display": "25 min",
                  "speedKmh": 10.8,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t4-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w43-t4-s04"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 10800,
          "totalPlannedLabel": "180 min",
          "estimatedDistanceKm": 30.35833333333333,
          "estimatedDistanceLabel": "±30,4 km",
          "sourceSummary": "180 min · ongeveer 30,36 km; toon afgerond ±30,4 km",
          "goal": "drie uur lopen met controle; geen marathonpace, wedstrijd of snelle 30 km.",
          "targetRpe": "geleidelijk oplopend, maar de eerste 150 min duidelijk gecontroleerd.",
          "mentalGoal": "21,1 km is een tussenpunt; bij 25 km is er nog controle; 30 km is voltooid.",
          "rationale": "drie uur lopen met controle; geen marathonpace, wedstrijd of snelle 30 km. 21,1 km is een tussenpunt; bij 25 km is er nog controle; 30 km is voltooid.",
          "detailsSections": [
            {
              "title": "Buitenvariant",
              "items": [
                "aanbevolen op een vlak en praktisch parcours; houd de inspanning rustig tot steady en gebruik bij voorkeur een route waarop voeding en drinken realistisch geoefend kunnen worden."
              ]
            },
            {
              "title": "Absolute grens",
              "items": [
                "dit is de langste duurloop. Niet verlengen."
              ]
            }
          ],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Buiten aanbevolen",
          "outsideVariant": "aanbevolen op een vlak en praktisch parcours; houd de inspanning rustig tot steady en gebruik bij voorkeur een route waarop voeding en drinken realistisch geoefend kunnen worden.",
          "fueling": true,
          "fullFuelRehearsal": true,
          "nutrition": "Oefen voor grote lange trainingen geleidelijk richting 60–75 gram koolhydraten per uur, indien goed verdragen. Bouw dit niet ineens op in de zwaarste sessie; gebruik in de laatste weken geen nieuwe producten. Gebruik dezelfde producten, timing, beoogde hoeveelheid per uur en een vergelijkbare drinkstrategie als op raceday.",
          "evaluation": null,
          "protocolSignature": "[[600,null,9.5,0.5],[8400,null,10.1,0.5],[1500,null,10.8,0.5],[300,null,8.5,0.5]]"
        }
      ],
      "plannedDistanceKm": 67.73333333333333,
      "plannedDistanceLabel": "±67,7 km",
      "weekPhilosophy": {
        "theme": "PEAK / 30K CONFIDENCE",
        "summary": "3 × 15 min MP-test en de langste duurloop van 30,4 km",
        "adaptations": [
          "EASY",
          "TEST",
          "MARATHON SPECIFIC",
          "3 × 15 MP",
          "LONG RUN",
          "CONFIDENCE RUN",
          "30K CONFIDENCE"
        ],
        "why": [
          "Training 1: aerobe omvang.",
          "Training 2: beoordelen hoe normaal en beheersbaar 12,0 km/u is geworden.",
          "Training 3: rustige omvang.",
          "Training 4: drie uur lopen met controle; geen marathonpace, wedstrijd of snelle 30 km."
        ],
        "targetLink": "Van aerobe omvang en snelheidsreserve naar controle op 12,0 km/u onder vermoeidheid, gevolgd door taper en frisheid.",
        "whyNotMore": "Easy blijft echt easy: RPE 3–4/10 en volledige zinnen kunnen spreken. Een test is diagnostiek, geen verplichting om jezelf kapot te lopen. De taper in week 45–47 is beschermd: geen extra kilometers, extra tests of extra trainingsdagen. De langste duurloop blijft de 30K Confidence Run in week 43: ongeveer 30,36 km. Niet verlengen naar 32, 33 of 35 km. Bij oplopende plaatselijke pijn, technisch verval of duidelijke controleproblemen wordt een training aangepast of gestopt.",
        "confidence": "de vraag is niet “hoe snel ben ik?”, maar “hoe normaal voelt MP?” 21,1 km is een tussenpunt; bij 25 km is er nog controle; 30 km is voltooid."
      }
    },
    {
      "weekId": "marathon-3u30-w44",
      "weekNumber": 44,
      "phaseId": "marathonspecifiek",
      "phaseName": "Marathonspecifieke piekfase",
      "startDate": "2026-10-26",
      "endDate": "2026-11-01",
      "periodLabel": "26 oktober t/m 1 november 2026",
      "weekType": "BELANGRIJKSTE MARATHONSPECIFIEKE WEEK",
      "focus": "Minder volume, met 2 × 30 min MP onder vermoeidheid",
      "includesMarathon": false,
      "workouts": [
        {
          "workoutId": "marathon-3u30-w44-t1",
          "weekNumber": 44,
          "trainingNumber": 1,
          "trainingLabel": "Training 1",
          "weekId": "marathon-3u30-w44",
          "dateLabel": "26 oktober t/m 1 november 2026",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke piekfase",
          "title": "Easy",
          "category": "rustige-duur",
          "tone": "easy",
          "labels": [
            "EASY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w44-t1-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t1-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 2700,
                  "display": "45 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t1-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t1-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 3300,
          "totalPlannedLabel": "55 min",
          "estimatedDistanceKm": 8.975000000000001,
          "estimatedDistanceLabel": "±9 km",
          "sourceSummary": "55 min · ongeveer 8,98 km",
          "goal": "herstellen van de 30K en aerobe routine behouden.",
          "targetRpe": "3–4/10.",
          "mentalGoal": "geen kilometers of snelheid toevoegen.",
          "rationale": "herstellen van de 30K en aerobe routine behouden. geen kilometers of snelheid toevoegen.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9.2,0.5],[2700,null,10,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w44-t2",
          "weekNumber": 44,
          "trainingNumber": 2,
          "trainingLabel": "Training 2",
          "weekId": "marathon-3u30-w44",
          "dateLabel": "26 oktober t/m 1 november 2026",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke piekfase",
          "title": "Korte snelheidsreserve",
          "category": "kwaliteit",
          "tone": "threshold",
          "labels": [
            "QUALITY",
            "CONTROLLED FAST"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w44-t2-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t2-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t2-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "speedKmh": 12.9,
                  "inclinePercent": 1,
                  "type": "drempel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t2-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 120,
                  "display": "2 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t2-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "speedKmh": 12.9,
                  "inclinePercent": 1,
                  "type": "drempel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t2-s05"
                },
                {
                  "basis": "time",
                  "durationSeconds": 120,
                  "display": "2 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t2-s06"
                },
                {
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "speedKmh": 12.9,
                  "inclinePercent": 1,
                  "type": "drempel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t2-s07"
                },
                {
                  "basis": "time",
                  "durationSeconds": 120,
                  "display": "2 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t2-s08"
                },
                {
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "speedKmh": 12.9,
                  "inclinePercent": 1,
                  "type": "drempel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t2-s09"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t2-s10"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 2820,
          "totalPlannedLabel": "47 min",
          "estimatedDistanceKm": 8.348333333333333,
          "estimatedDistanceLabel": "±8,35 km",
          "sourceSummary": "47 min · ongeveer 8,35 km",
          "goal": "scherpte en snelheidsreserve onderhouden, niet uitputten.",
          "targetRpe": "laatste blok maximaal ongeveer 7–8/10.",
          "mentalGoal": "krachtig maar netjes; stoppen met reserve.",
          "rationale": "scherpte en snelheidsreserve onderhouden, niet uitputten. krachtig maar netjes; stoppen met reserve.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[240,null,12.9,1],[120,null,9.5,0.5],[240,null,12.9,1],[120,null,9.5,0.5],[240,null,12.9,1],[120,null,9.5,0.5],[240,null,12.9,1],[600,null,9,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w44-t3",
          "weekNumber": 44,
          "trainingNumber": 3,
          "trainingLabel": "Training 3",
          "weekId": "marathon-3u30-w44",
          "dateLabel": "26 oktober t/m 1 november 2026",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke piekfase",
          "title": "Recovery",
          "category": "herstel",
          "tone": "recovery",
          "labels": [
            "RECOVERY",
            "EASY"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w44-t3-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t3-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 2100,
                  "display": "35 min",
                  "speedKmh": 9.6,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t3-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t3-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 2700,
          "totalPlannedLabel": "45 min",
          "estimatedDistanceKm": 7.058333333333333,
          "estimatedDistanceLabel": "±7,1 km",
          "sourceSummary": "45 min · ongeveer 7,06 km",
          "goal": "herstellen vóór de belangrijkste specifieke test.",
          "targetRpe": "2–3/10.",
          "mentalGoal": "doelbewust zeer gemakkelijk.",
          "rationale": "herstellen vóór de belangrijkste specifieke test. doelbewust zeer gemakkelijk.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9,0.5],[2100,null,9.6,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w44-t4",
          "weekNumber": 44,
          "trainingNumber": 4,
          "trainingLabel": "Training 4",
          "weekId": "marathon-3u30-w44",
          "dateLabel": "26 oktober t/m 1 november 2026",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke piekfase",
          "title": "Key Marathon Specific Test: 2 × 30 min MP under fatigue",
          "category": "lange-duur",
          "tone": "test",
          "labels": [
            "TEST",
            "LONG RUN",
            "KEY MARATHON SPECIFIC",
            "MP UNDER FATIGUE",
            "LOOPBAND AANBEVOLEN",
            "RACEVOEDING OEFENEN",
            "VOLLEDIGE RACEVOEDINGSREPETITIE"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": true,
          "testNumber": 3,
          "groups": [
            {
              "groupId": "marathon-3u30-w44-t4-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t4-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 4500,
                  "display": "75 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t4-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 1800,
                  "display": "30 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t4-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 480,
                  "display": "8 min",
                  "speedKmh": 9.8,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t4-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 1800,
                  "display": "30 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t4-s05"
                },
                {
                  "basis": "time",
                  "durationSeconds": 420,
                  "display": "7 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t4-s06"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w44-t4-s07"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 9900,
          "totalPlannedLabel": "165 min",
          "estimatedDistanceKm": 29.265,
          "estimatedDistanceLabel": "±29,3 km",
          "sourceSummary": "165 min · ongeveer 29,27 km; toon afgerond ±29,3 km",
          "goal": "testen of MP beheerst blijft nadat al 85 minuten is gelopen.",
          "targetRpe": "tweede MP-blok idealiter maximaal ongeveer 7–7,5/10; techniek blijft goed; daarna normaal kunnen doorlopen.",
          "mentalGoal": "“Ik heb ruim 29 km gelopen en kon diep in de training tweemaal 30 minuten MP draaien.”",
          "rationale": "testen of MP beheerst blijft nadat al 85 minuten is gelopen. “Ik heb ruim 29 km gelopen en kon diep in de training tweemaal 30 minuten MP draaien.”",
          "detailsSections": [
            {
              "title": "Ondergrond",
              "items": [
                "loopband aanbevolen voor exacte controle van beide MP-blokken."
              ]
            },
            {
              "title": "Veiligheidsregel",
              "items": [
                "bij pijn, technisch verval of duidelijke controleproblemen wordt het MP-blok afgebroken of verlaagd; deze training wordt niet koste wat kost voltooid."
              ]
            }
          ],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Bij oplopende plaatselijke pijn, technisch verval of controleverlies: aanpassen of stoppen.",
          "locationStatus": "Loopband aanbevolen",
          "outsideVariant": "loopband aanbevolen voor exacte controle van beide MP-blokken.",
          "fueling": true,
          "fullFuelRehearsal": true,
          "nutrition": "Oefen voor grote lange trainingen geleidelijk richting 60–75 gram koolhydraten per uur, indien goed verdragen. Bouw dit niet ineens op in de zwaarste sessie; gebruik in de laatste weken geen nieuwe producten. Gebruik dezelfde producten, timing, beoogde hoeveelheid per uur en een vergelijkbare drinkstrategie als op raceday.",
          "evaluation": "tweede MP-blok idealiter maximaal ongeveer 7–7,5/10; techniek blijft goed; daarna normaal kunnen doorlopen.",
          "protocolSignature": "[[600,null,9.5,0.5],[4500,null,10,0.5],[1800,null,12,1],[480,null,9.8,0.5],[1800,null,12,1],[420,null,10,0.5],[300,null,8.5,0.5]]"
        }
      ],
      "plannedDistanceKm": 53.64666666666667,
      "plannedDistanceLabel": "±53,6 km",
      "weekPhilosophy": {
        "theme": "BELANGRIJKSTE MARATHONSPECIFIEKE WEEK",
        "summary": "Minder volume, met 2 × 30 min MP onder vermoeidheid",
        "adaptations": [
          "EASY",
          "QUALITY",
          "CONTROLLED FAST",
          "RECOVERY",
          "TEST",
          "LONG RUN",
          "KEY MARATHON SPECIFIC",
          "MP UNDER FATIGUE"
        ],
        "why": [
          "Training 1: herstellen van de 30K en aerobe routine behouden.",
          "Training 2: scherpte en snelheidsreserve onderhouden, niet uitputten.",
          "Training 3: herstellen vóór de belangrijkste specifieke test.",
          "Training 4: testen of MP beheerst blijft nadat al 85 minuten is gelopen."
        ],
        "targetLink": "Van aerobe omvang en snelheidsreserve naar controle op 12,0 km/u onder vermoeidheid, gevolgd door taper en frisheid.",
        "whyNotMore": "Easy blijft echt easy: RPE 3–4/10 en volledige zinnen kunnen spreken. Een test is diagnostiek, geen verplichting om jezelf kapot te lopen. De taper in week 45–47 is beschermd: geen extra kilometers, extra tests of extra trainingsdagen. De langste duurloop blijft de 30K Confidence Run in week 43: ongeveer 30,36 km. Niet verlengen naar 32, 33 of 35 km. Bij oplopende plaatselijke pijn, technisch verval of duidelijke controleproblemen wordt een training aangepast of gestopt.",
        "confidence": "“Ik heb ruim 29 km gelopen en kon diep in de training tweemaal 30 minuten MP draaien.”"
      }
    },
    {
      "weekId": "marathon-3u30-w45",
      "weekNumber": 45,
      "phaseId": "taper",
      "phaseName": "Taper",
      "startDate": "2026-11-02",
      "endDate": "2026-11-08",
      "periodLabel": "2 t/m 8 november 2026",
      "weekType": "TAPER 1",
      "focus": "Taper starten en kwaliteit behouden zonder nieuwe tests",
      "includesMarathon": false,
      "workouts": [
        {
          "workoutId": "marathon-3u30-w45-t1",
          "weekNumber": 45,
          "trainingNumber": 1,
          "trainingLabel": "Training 1",
          "weekId": "marathon-3u30-w45",
          "dateLabel": "2 t/m 8 november 2026",
          "phaseId": "taper",
          "phaseName": "Taper",
          "title": "Easy",
          "category": "rustige-duur",
          "tone": "easy",
          "labels": [
            "EASY",
            "TAPER"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w45-t1-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t1-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 2400,
                  "display": "40 min",
                  "speedKmh": 9.9,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t1-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t1-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 3000,
          "totalPlannedLabel": "50 min",
          "estimatedDistanceKm": 8.075,
          "estimatedDistanceLabel": "±8,1 km",
          "sourceSummary": "50 min · ongeveer 8,08 km",
          "goal": "omvang verlagen, routine behouden.",
          "targetRpe": "3/10.",
          "mentalGoal": "minder trainen is nu onderdeel van beter worden.",
          "rationale": "omvang verlagen, routine behouden. minder trainen is nu onderdeel van beter worden.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Taper beschermd: geen extra volume, tests of trainingsdagen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9.2,0.5],[2400,null,9.9,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w45-t2",
          "weekNumber": 45,
          "trainingNumber": 2,
          "trainingLabel": "Training 2",
          "weekId": "marathon-3u30-w45",
          "dateLabel": "2 t/m 8 november 2026",
          "phaseId": "taper",
          "phaseName": "Taper",
          "title": "Drempel onderhouden",
          "category": "kwaliteit",
          "tone": "threshold",
          "labels": [
            "QUALITY",
            "TAPER"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w45-t2-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t2-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t2-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 12.4,
                  "inclinePercent": 1,
                  "type": "drempel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t2-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t2-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 12.4,
                  "inclinePercent": 1,
                  "type": "drempel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t2-s05"
                },
                {
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t2-s06"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 12.4,
                  "inclinePercent": 1,
                  "type": "drempel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t2-s07"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t2-s08"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 3660,
          "totalPlannedLabel": "61 min",
          "estimatedDistanceKm": 11.108333333333333,
          "estimatedDistanceLabel": "±11,1 km",
          "sourceSummary": "61 min · ongeveer 11,11 km",
          "goal": "kwaliteit behouden zonder nieuwe fitheid na te jagen.",
          "targetRpe": "ongeveer 6–7/10.",
          "mentalGoal": "vlot en gecontroleerd eindigen.",
          "rationale": "kwaliteit behouden zonder nieuwe fitheid na te jagen. vlot en gecontroleerd eindigen.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Taper beschermd: geen extra volume, tests of trainingsdagen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[600,null,12.4,1],[180,null,9.5,0.5],[600,null,12.4,1],[180,null,9.5,0.5],[600,null,12.4,1],[600,null,9,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w45-t3",
          "weekNumber": 45,
          "trainingNumber": 3,
          "trainingLabel": "Training 3",
          "weekId": "marathon-3u30-w45",
          "dateLabel": "2 t/m 8 november 2026",
          "phaseId": "taper",
          "phaseName": "Taper",
          "title": "Easy / recovery",
          "category": "herstel",
          "tone": "recovery",
          "labels": [
            "EASY",
            "RECOVERY",
            "TAPER"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w45-t3-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t3-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 2100,
                  "display": "35 min",
                  "speedKmh": 9.6,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t3-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t3-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 2700,
          "totalPlannedLabel": "45 min",
          "estimatedDistanceKm": 7.058333333333333,
          "estimatedDistanceLabel": "±7,1 km",
          "sourceSummary": "45 min · ongeveer 7,06 km",
          "goal": "herstel en soepelheid.",
          "targetRpe": "2–3/10.",
          "mentalGoal": "niets bewijzen.",
          "rationale": "herstel en soepelheid. niets bewijzen.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Taper beschermd: geen extra volume, tests of trainingsdagen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9,0.5],[2100,null,9.6,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w45-t4",
          "weekNumber": 45,
          "trainingNumber": 4,
          "trainingLabel": "Training 4",
          "weekId": "marathon-3u30-w45",
          "dateLabel": "2 t/m 8 november 2026",
          "phaseId": "taper",
          "phaseName": "Taper",
          "title": "Marathonpace-onderhoud",
          "category": "lange-duur",
          "tone": "long",
          "labels": [
            "LONG RUN",
            "MARATHON SPECIFIC",
            "TAPER",
            "RACEVOEDING OEFENEN"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w45-t4-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t4-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 4200,
                  "display": "70 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t4-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 1800,
                  "display": "30 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t4-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t4-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w45-t4-s05"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 7200,
          "totalPlannedLabel": "120 min",
          "estimatedDistanceKm": 20.791666666666664,
          "estimatedDistanceLabel": "±20,8 km",
          "sourceSummary": "120 min · ongeveer 20,79 km",
          "goal": "één gecontroleerd MP-blok behouden terwijl het volume daalt.",
          "targetRpe": "MP ongeveer 6–7/10; geen test.",
          "mentalGoal": "30 minuten MP voelt bekend en beheerst.",
          "rationale": "één gecontroleerd MP-blok behouden terwijl het volume daalt. 30 minuten MP voelt bekend en beheerst.",
          "detailsSections": [
            {
              "title": "Voeding",
              "items": [
                "laatste verkorte long run waarop racevoeding nog wordt geoefend; geen nieuwe producten."
              ]
            }
          ],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Taper beschermd: geen extra volume, tests of trainingsdagen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": true,
          "fullFuelRehearsal": false,
          "nutrition": "Oefen voor grote lange trainingen geleidelijk richting 60–75 gram koolhydraten per uur, indien goed verdragen. Bouw dit niet ineens op in de zwaarste sessie; gebruik in de laatste weken geen nieuwe producten.  laatste verkorte long run waarop racevoeding nog wordt geoefend; geen nieuwe producten.",
          "evaluation": null,
          "protocolSignature": "[[600,null,9.5,0.5],[4200,null,10,0.5],[1800,null,12,1],[300,null,10,0.5],[300,null,8.5,0.5]]"
        }
      ],
      "plannedDistanceKm": 47.03333333333333,
      "plannedDistanceLabel": "±47 km",
      "weekPhilosophy": {
        "theme": "TAPER 1",
        "summary": "Taper starten en kwaliteit behouden zonder nieuwe tests",
        "adaptations": [
          "EASY",
          "TAPER",
          "QUALITY",
          "RECOVERY",
          "LONG RUN",
          "MARATHON SPECIFIC"
        ],
        "why": [
          "Training 1: omvang verlagen, routine behouden.",
          "Training 2: kwaliteit behouden zonder nieuwe fitheid na te jagen.",
          "Training 3: herstel en soepelheid.",
          "Training 4: één gecontroleerd MP-blok behouden terwijl het volume daalt."
        ],
        "targetLink": "Van aerobe omvang en snelheidsreserve naar controle op 12,0 km/u onder vermoeidheid, gevolgd door taper en frisheid.",
        "whyNotMore": "Easy blijft echt easy: RPE 3–4/10 en volledige zinnen kunnen spreken. Een test is diagnostiek, geen verplichting om jezelf kapot te lopen. De taper in week 45–47 is beschermd: geen extra kilometers, extra tests of extra trainingsdagen. De langste duurloop blijft de 30K Confidence Run in week 43: ongeveer 30,36 km. Niet verlengen naar 32, 33 of 35 km. Bij oplopende plaatselijke pijn, technisch verval of duidelijke controleproblemen wordt een training aangepast of gestopt.",
        "confidence": "30 minuten MP voelt bekend en beheerst."
      }
    },
    {
      "weekId": "marathon-3u30-w46",
      "weekNumber": 46,
      "phaseId": "taper",
      "phaseName": "Taper",
      "startDate": "2026-11-09",
      "endDate": "2026-11-15",
      "periodLabel": "9 t/m 15 november 2026",
      "weekType": "TAPER 2",
      "focus": "Frisheid opbouwen en marathonpace kort onderhouden",
      "includesMarathon": false,
      "workouts": [
        {
          "workoutId": "marathon-3u30-w46-t1",
          "weekNumber": 46,
          "trainingNumber": 1,
          "trainingLabel": "Training 1",
          "weekId": "marathon-3u30-w46",
          "dateLabel": "9 t/m 15 november 2026",
          "phaseId": "taper",
          "phaseName": "Taper",
          "title": "Easy",
          "category": "rustige-duur",
          "tone": "easy",
          "labels": [
            "EASY",
            "TAPER"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w46-t1-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t1-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 2100,
                  "display": "35 min",
                  "speedKmh": 9.8,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t1-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t1-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 2700,
          "totalPlannedLabel": "45 min",
          "estimatedDistanceKm": 7.175,
          "estimatedDistanceLabel": "±7,2 km",
          "sourceSummary": "45 min · ongeveer 7,18 km",
          "goal": "soepel blijven.",
          "targetRpe": "2–3/10.",
          "mentalGoal": "frisheid krijgt prioriteit.",
          "rationale": "soepel blijven. frisheid krijgt prioriteit.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Taper beschermd: geen extra volume, tests of trainingsdagen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9,0.5],[2100,null,9.8,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w46-t2",
          "weekNumber": 46,
          "trainingNumber": 2,
          "trainingLabel": "Training 2",
          "weekId": "marathon-3u30-w46",
          "dateLabel": "9 t/m 15 november 2026",
          "phaseId": "taper",
          "phaseName": "Taper",
          "title": "3 × 8 min MP-plus",
          "category": "kwaliteit",
          "tone": "mp",
          "labels": [
            "QUALITY",
            "MARATHON SPECIFIC",
            "TAPER"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w46-t2-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t2-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t2-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 480,
                  "display": "8 min",
                  "speedKmh": 12.1,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t2-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t2-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 480,
                  "display": "8 min",
                  "speedKmh": 12.1,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t2-s05"
                },
                {
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t2-s06"
                },
                {
                  "basis": "time",
                  "durationSeconds": 480,
                  "display": "8 min",
                  "speedKmh": 12.1,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t2-s07"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t2-s08"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 3300,
          "totalPlannedLabel": "55 min",
          "estimatedDistanceKm": 9.748333333333331,
          "estimatedDistanceLabel": "±9,7 km",
          "sourceSummary": "55 min · ongeveer 9,75 km",
          "goal": "scherp blijven met weinig totale belasting.",
          "targetRpe": "ongeveer 6/10.",
          "mentalGoal": "vlot, kort en vertrouwd.",
          "rationale": "scherp blijven met weinig totale belasting. vlot, kort en vertrouwd.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Taper beschermd: geen extra volume, tests of trainingsdagen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[480,null,12.1,1],[180,null,9.5,0.5],[480,null,12.1,1],[180,null,9.5,0.5],[480,null,12.1,1],[600,null,9,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w46-t3",
          "weekNumber": 46,
          "trainingNumber": 3,
          "trainingLabel": "Training 3",
          "weekId": "marathon-3u30-w46",
          "dateLabel": "9 t/m 15 november 2026",
          "phaseId": "taper",
          "phaseName": "Taper",
          "title": "Losmaken",
          "category": "interval",
          "tone": "interval",
          "labels": [
            "EASY",
            "STRIDES",
            "TAPER"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w46-t3-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t3-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "speedKmh": 9.6,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t3-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 20,
                  "display": "20 sec",
                  "speedKmh": 13.5,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t3-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 100,
                  "display": "1:40 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t3-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 20,
                  "display": "20 sec",
                  "speedKmh": 13.5,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t3-s05"
                },
                {
                  "basis": "time",
                  "durationSeconds": 100,
                  "display": "1:40 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t3-s06"
                },
                {
                  "basis": "time",
                  "durationSeconds": 20,
                  "display": "20 sec",
                  "speedKmh": 13.5,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t3-s07"
                },
                {
                  "basis": "time",
                  "durationSeconds": 100,
                  "display": "1:40 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t3-s08"
                },
                {
                  "basis": "time",
                  "durationSeconds": 20,
                  "display": "20 sec",
                  "speedKmh": 13.5,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t3-s09"
                },
                {
                  "basis": "time",
                  "durationSeconds": 100,
                  "display": "1:40 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t3-s10"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t3-s11"
                },
                {
                  "basis": "time",
                  "durationSeconds": 120,
                  "display": "2 min",
                  "speedKmh": 5.5,
                  "inclinePercent": 0,
                  "type": "wandelen",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t3-s12"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 2100,
          "totalPlannedLabel": "35 min",
          "estimatedDistanceKm": 5.341666666666667,
          "estimatedDistanceLabel": "±5,3 km",
          "sourceSummary": "35 min · ongeveer 5,34 km",
          "goal": "soepelheid en pasfrequentie, zonder vermoeidheid.",
          "targetRpe": "laag; strides snel maar ontspannen.",
          "mentalGoal": "eindigen met meer energie dan waarmee je begon.",
          "rationale": "soepelheid en pasfrequentie, zonder vermoeidheid. eindigen met meer energie dan waarmee je begon.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Taper beschermd: geen extra volume, tests of trainingsdagen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9,0.5],[900,null,9.6,0.5],[20,null,13.5,1],[100,null,9,0.5],[20,null,13.5,1],[100,null,9,0.5],[20,null,13.5,1],[100,null,9,0.5],[20,null,13.5,1],[100,null,9,0.5],[300,null,8.5,0.5],[120,null,5.5,0]]"
        },
        {
          "workoutId": "marathon-3u30-w46-t4",
          "weekNumber": 46,
          "trainingNumber": 4,
          "trainingLabel": "Training 4",
          "weekId": "marathon-3u30-w46",
          "dateLabel": "9 t/m 15 november 2026",
          "phaseId": "taper",
          "phaseName": "Taper",
          "title": "Verkorte MP-duur",
          "category": "lange-duur",
          "tone": "long",
          "labels": [
            "MARATHON SPECIFIC",
            "TAPER",
            "RACEVOEDING OEFENEN"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w46-t4-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t4-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 3300,
                  "display": "55 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "type": "easy",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t4-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 1200,
                  "display": "20 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t4-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w46-t4-s04"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 5400,
          "totalPlannedLabel": "90 min",
          "estimatedDistanceKm": 15.458333333333334,
          "estimatedDistanceLabel": "±15,5 km",
          "sourceSummary": "90 min · ongeveer 15,46 km",
          "goal": "MP aanraken zonder restvermoeidheid op te bouwen.",
          "targetRpe": "MP ongeveer 6/10.",
          "mentalGoal": "20 minuten MP moet bijna vanzelfsprekend voelen.",
          "rationale": "MP aanraken zonder restvermoeidheid op te bouwen. 20 minuten MP moet bijna vanzelfsprekend voelen.",
          "detailsSections": [
            {
              "title": "Voeding",
              "items": [
                "alleen vertrouwde producten; geen experimenten."
              ]
            }
          ],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Taper beschermd: geen extra volume, tests of trainingsdagen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": true,
          "fullFuelRehearsal": false,
          "nutrition": "Oefen voor grote lange trainingen geleidelijk richting 60–75 gram koolhydraten per uur, indien goed verdragen. Bouw dit niet ineens op in de zwaarste sessie; gebruik in de laatste weken geen nieuwe producten.  alleen vertrouwde producten; geen experimenten.",
          "evaluation": null,
          "protocolSignature": "[[600,null,9.5,0.5],[3300,null,10,0.5],[1200,null,12,1],[300,null,8.5,0.5]]"
        }
      ],
      "plannedDistanceKm": 37.723333333333336,
      "plannedDistanceLabel": "±37,7 km",
      "weekPhilosophy": {
        "theme": "TAPER 2",
        "summary": "Frisheid opbouwen en marathonpace kort onderhouden",
        "adaptations": [
          "EASY",
          "TAPER",
          "QUALITY",
          "MARATHON SPECIFIC",
          "STRIDES"
        ],
        "why": [
          "Training 1: soepel blijven.",
          "Training 2: scherp blijven met weinig totale belasting.",
          "Training 3: soepelheid en pasfrequentie, zonder vermoeidheid.",
          "Training 4: MP aanraken zonder restvermoeidheid op te bouwen."
        ],
        "targetLink": "Van aerobe omvang en snelheidsreserve naar controle op 12,0 km/u onder vermoeidheid, gevolgd door taper en frisheid.",
        "whyNotMore": "Easy blijft echt easy: RPE 3–4/10 en volledige zinnen kunnen spreken. Een test is diagnostiek, geen verplichting om jezelf kapot te lopen. De taper in week 45–47 is beschermd: geen extra kilometers, extra tests of extra trainingsdagen. De langste duurloop blijft de 30K Confidence Run in week 43: ongeveer 30,36 km. Niet verlengen naar 32, 33 of 35 km. Bij oplopende plaatselijke pijn, technisch verval of duidelijke controleproblemen wordt een training aangepast of gestopt.",
        "confidence": "20 minuten MP moet bijna vanzelfsprekend voelen."
      }
    },
    {
      "weekId": "marathon-3u30-w47",
      "weekNumber": 47,
      "phaseId": "marathonweek",
      "phaseName": "Marathonweek",
      "startDate": "2026-11-16",
      "endDate": "2026-11-22",
      "periodLabel": "16 t/m 22 november 2026",
      "weekType": "RACE WEEK",
      "focus": "Losmaken, volledig herstellen en de marathon uitvoeren",
      "includesMarathon": true,
      "workouts": [
        {
          "workoutId": "marathon-3u30-w47-t1",
          "weekNumber": 47,
          "trainingNumber": 1,
          "trainingLabel": "Training 1",
          "weekId": "marathon-3u30-w47",
          "dateLabel": "16 t/m 22 november 2026",
          "phaseId": "marathonweek",
          "phaseName": "Marathonweek",
          "title": "Easy",
          "category": "rustige-duur",
          "tone": "easy",
          "labels": [
            "EASY",
            "TAPER",
            "RACE WEEK"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w47-t1-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t1-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 1500,
                  "display": "25 min",
                  "speedKmh": 9.6,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t1-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t1-s03"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 2100,
          "totalPlannedLabel": "35 min",
          "estimatedDistanceKm": 5.458333333333333,
          "estimatedDistanceLabel": "±5,5 km",
          "sourceSummary": "35 min · ongeveer 5,46 km",
          "goal": "soepel en ontspannen blijven.",
          "targetRpe": "2–3/10.",
          "mentalGoal": "de training levert vertrouwen, geen fitnesswinst.",
          "rationale": "soepel en ontspannen blijven. de training levert vertrouwen, geen fitnesswinst.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "none",
          "recoveryLabel": "Easy blijft easy",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Taper beschermd: geen extra volume, tests of trainingsdagen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9,0.5],[1500,null,9.6,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w47-t2",
          "weekNumber": 47,
          "trainingNumber": 2,
          "trainingLabel": "Training 2",
          "weekId": "marathon-3u30-w47",
          "dateLabel": "16 t/m 22 november 2026",
          "phaseId": "marathonweek",
          "phaseName": "Marathonweek",
          "title": "Marathonpace aanraken",
          "category": "kwaliteit",
          "tone": "mp",
          "labels": [
            "MARATHON SPECIFIC",
            "TAPER",
            "RACE WEEK"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w47-t2-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t2-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "type": "steady",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t2-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t2-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t2-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "type": "marathonpace",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t2-s05"
                },
                {
                  "basis": "time",
                  "durationSeconds": 480,
                  "display": "8 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t2-s06"
                },
                {
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "speedKmh": 5.5,
                  "inclinePercent": 0,
                  "type": "wandelen",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t2-s07"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 2400,
          "totalPlannedLabel": "40 min",
          "estimatedDistanceKm": 6.484999999999999,
          "estimatedDistanceLabel": "±6,5 km",
          "sourceSummary": "40 min · ongeveer 6,49 km",
          "goal": "MP kort en gemakkelijk voelen.",
          "targetRpe": "MP maximaal ongeveer 5–6/10.",
          "mentalGoal": "niet testen; stoppen terwijl je meer zou kunnen.",
          "rationale": "MP kort en gemakkelijk voelen. niet testen; stoppen terwijl je meer zou kunnen.",
          "detailsSections": [],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Taper beschermd: geen extra volume, tests of trainingsdagen.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[300,null,12,1],[180,null,9.2,0.5],[300,null,12,1],[480,null,9,0.5],[240,null,5.5,0]]"
        },
        {
          "workoutId": "marathon-3u30-w47-t3",
          "weekNumber": 47,
          "trainingNumber": 3,
          "trainingLabel": "Training 3",
          "weekId": "marathon-3u30-w47",
          "dateLabel": "16 t/m 22 november 2026",
          "phaseId": "marathonweek",
          "phaseName": "Marathonweek",
          "title": "Losmaken",
          "category": "interval",
          "tone": "interval",
          "labels": [
            "EASY",
            "STRIDES",
            "TAPER",
            "RACE WEEK"
          ],
          "surface": "loopband",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w47-t3-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "warming-up",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t3-s01"
                },
                {
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t3-s02"
                },
                {
                  "basis": "time",
                  "durationSeconds": 20,
                  "display": "20 sec",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t3-s03"
                },
                {
                  "basis": "time",
                  "durationSeconds": 100,
                  "display": "1:40 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t3-s04"
                },
                {
                  "basis": "time",
                  "durationSeconds": 20,
                  "display": "20 sec",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t3-s05"
                },
                {
                  "basis": "time",
                  "durationSeconds": 100,
                  "display": "1:40 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t3-s06"
                },
                {
                  "basis": "time",
                  "durationSeconds": 20,
                  "display": "20 sec",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "type": "interval",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t3-s07"
                },
                {
                  "basis": "time",
                  "durationSeconds": 100,
                  "display": "1:40 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "type": "herstel",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t3-s08"
                },
                {
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "type": "cooling-down",
                  "instruction": "",
                  "segmentId": "marathon-3u30-w47-t3-s09"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 1560,
          "totalPlannedLabel": "26 min",
          "estimatedDistanceKm": 4.008333333333334,
          "estimatedDistanceLabel": "±4 km",
          "sourceSummary": "26 min · ongeveer 4,01 km",
          "goal": "benen losmaken.",
          "targetRpe": "zeer laag buiten de korte strides.",
          "mentalGoal": "het werk is gedaan.",
          "rationale": "benen losmaken. het werk is gedaan.",
          "detailsSections": [
            {
              "title": "Planning",
              "items": [
                "uiterlijk de dag vóór de volledige rustdag uitvoeren; minimaal één volledige rustdag vóór de marathon."
              ]
            }
          ],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Daarna volledige rust",
          "recoveryAdvice": "uiterlijk de dag vóór de volledige rustdag uitvoeren; minimaal één volledige rustdag vóór de marathon.",
          "orderWarning": "uiterlijk de dag vóór de volledige rustdag uitvoeren; minimaal één volledige rustdag vóór de marathon.",
          "locationStatus": "Primair loopband",
          "outsideVariant": "Primair loopband. Houd buiten de voorgeschreven duur of afstand en inspanning aan, zonder de training zwaarder te maken.",
          "fueling": false,
          "fullFuelRehearsal": false,
          "nutrition": "",
          "evaluation": null,
          "protocolSignature": "[[300,null,9,0.5],[600,null,9.5,0.5],[20,null,13,1],[100,null,9,0.5],[20,null,13,1],[100,null,9,0.5],[20,null,13,1],[100,null,9,0.5],[300,null,8.5,0.5]]"
        },
        {
          "workoutId": "marathon-3u30-w47-t4",
          "weekNumber": 47,
          "trainingNumber": 4,
          "trainingLabel": "Training 4",
          "weekId": "marathon-3u30-w47",
          "dateLabel": "16 t/m 22 november 2026",
          "phaseId": "marathonweek",
          "phaseName": "Marathonweek",
          "title": "Marathon",
          "category": "wedstrijd",
          "tone": "race",
          "labels": [
            "RACE",
            "MARATHON",
            "RACEVOEDING",
            "RACEVOEDING OEFENEN"
          ],
          "surface": "buiten",
          "isExtra": false,
          "isFitnessCheck": false,
          "fitnessCheckNumber": null,
          "isTest": false,
          "testNumber": null,
          "groups": [
            {
              "groupId": "marathon-3u30-w47-t4-g1",
              "kind": "sequence",
              "label": "Exacte opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "basis": "distance",
                  "distanceKm": 42.195,
                  "speedKmh": 12.055714285714286,
                  "inclinePercent": null,
                  "type": "wedstrijd",
                  "display": "42,195 km",
                  "instruction": "Buitenwedstrijd: volg de pacingstrategie; 3:30 is een doel, geen vaste voorspelling.",
                  "segmentId": "marathon-3u30-w47-t4-s01"
                }
              ]
            }
          ],
          "totalPlannedSeconds": 12600,
          "totalPlannedLabel": "Marathon",
          "estimatedDistanceKm": 42.195,
          "estimatedDistanceLabel": "42,195 km",
          "sourceSummary": "",
          "goal": "Het geteste raceplan uitvoeren wanneer het totaalbeeld groen licht geeft.",
          "targetRpe": "Wedstrijdinspanning volgens controle",
          "mentalGoal": "de uiteindelijke keuze tussen 3:30 en een behoudender doel wordt gemaakt op basis van het totaalbeeld uit training, tests, herstel en klachten — niet op basis van één sessie.",
          "rationale": "Het geteste raceplan uitvoeren wanneer het totaalbeeld groen licht geeft. de uiteindelijke keuze tussen 3:30 en een behoudender doel wordt gemaakt op basis van het totaalbeeld uit training, tests, herstel en klachten — niet op basis van één sessie.",
          "detailsSections": [
            {
              "title": "Pacing",
              "items": [
                "Exact 5:00/km geeft ongeveer 3:30:59. Voor 3:30:00 is gemiddeld 4:58,6/km nodig; na de beheerste start ligt het tempo hoofdzakelijk rond 4:58–4:59/km."
              ]
            },
            {
              "title": "Datum",
              "items": [
                "zondag 22 november 2026"
              ]
            },
            {
              "title": "Afstand",
              "items": [
                "42,195 km"
              ]
            },
            {
              "title": "Ondergrond",
              "items": [
                "buitenwedstrijd; loopbandhelling is hier niet van toepassing"
              ]
            },
            {
              "title": "A-doel indien het totaalbeeld groen licht geeft",
              "items": [
                "3:30:00"
              ]
            },
            {
              "title": "Benodigd gemiddelde",
              "items": [
                "4:58,6 min/km"
              ]
            },
            {
              "title": "Halverwege-richtpunt",
              "items": [
                "rond 1:44:50–1:45:00, rekening houdend met de werkelijk gelopen lijn en officiële kilometermarkeringen."
              ]
            },
            {
              "title": "Voeding",
              "items": [
                "voer het volledig geoefende racevoedingsplan uit; begin op tijd en wacht niet tot energieverlies optreedt."
              ]
            },
            {
              "title": "B-doel",
              "items": [
                "de uiteindelijke keuze tussen 3:30 en een behoudender doel wordt gemaakt op basis van het totaalbeeld uit training, tests, herstel en klachten — niet op basis van één sessie."
              ]
            },
            {
              "title": "Wedstrijdstrategie",
              "items": [
                "0–3 km · ongeveer 5:02–5:03/km · bewust gecontroleerd starten; geen grote achterstand opbouwen",
                "3–10 km · ongeveer 4:58–4:59/km · soepel naar doelritme stabiliseren",
                "10–30 km · ongeveer 4:57–4:59/km · constante inspanning; niets forceren om seconden te winnen",
                "30–35 km · ongeveer 4:58–4:59/km indien beheerst · tempo en techniek vasthouden",
                "35–40 km · op controle · alleen versnellen als de benen en ademhaling dit werkelijk toelaten",
                "40–42,195 km · alles wat verantwoord beschikbaar is · geconcentreerd uitlopen"
              ]
            }
          ],
          "notes": [],
          "recoveryStatus": "required",
          "recoveryLabel": "Herstelruimte bewaken",
          "recoveryAdvice": "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3.",
          "orderWarning": "Taper beschermd: geen extra volume, tests of trainingsdagen.",
          "locationStatus": "Buitenwedstrijd",
          "outsideVariant": "buitenwedstrijd; loopbandhelling is hier niet van toepassing",
          "fueling": true,
          "fullFuelRehearsal": false,
          "nutrition": "Oefen voor grote lange trainingen geleidelijk richting 60–75 gram koolhydraten per uur, indien goed verdragen. Bouw dit niet ineens op in de zwaarste sessie; gebruik in de laatste weken geen nieuwe producten.  voer het volledig geoefende racevoedingsplan uit; begin op tijd en wacht niet tot energieverlies optreedt.",
          "evaluation": null,
          "protocolSignature": "[[null,42.195,12.055714285714286,null]]"
        }
      ],
      "plannedDistanceKm": 58.14666666666666,
      "plannedDistanceLabel": "±58,1 km",
      "weekPhilosophy": {
        "theme": "RACE WEEK",
        "summary": "Losmaken, volledig herstellen en de marathon uitvoeren",
        "adaptations": [
          "EASY",
          "TAPER",
          "RACE WEEK",
          "MARATHON SPECIFIC",
          "STRIDES",
          "RACE",
          "MARATHON"
        ],
        "why": [
          "Training 1: soepel en ontspannen blijven.",
          "Training 2: MP kort en gemakkelijk voelen.",
          "Training 3: benen losmaken.",
          "Training 4: Het geteste raceplan uitvoeren wanneer het totaalbeeld groen licht geeft."
        ],
        "targetLink": "Van aerobe omvang en snelheidsreserve naar controle op 12,0 km/u onder vermoeidheid, gevolgd door taper en frisheid.",
        "whyNotMore": "Easy blijft echt easy: RPE 3–4/10 en volledige zinnen kunnen spreken. Een test is diagnostiek, geen verplichting om jezelf kapot te lopen. De taper in week 45–47 is beschermd: geen extra kilometers, extra tests of extra trainingsdagen. De langste duurloop blijft de 30K Confidence Run in week 43: ongeveer 30,36 km. Niet verlengen naar 32, 33 of 35 km. Bij oplopende plaatselijke pijn, technisch verval of duidelijke controleproblemen wordt een training aangepast of gestopt.",
        "confidence": "de uiteindelijke keuze tussen 3:30 en een behoudender doel wordt gemaakt op basis van het totaalbeeld uit training, tests, herstel en klachten — niet op basis van één sessie."
      }
    }
  ],
  "sourceDiscrepancies": [],
  "previousWorkouts": {
    "marathon-3u30-w36-t1": {
      "signature": "[[300,null,9,0.5],[2100,null,10,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 7.291666666666667,
      "durationSeconds": 2700,
      "title": "Easy"
    },
    "marathon-3u30-w36-t2": {
      "signature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[480,null,12,1],[180,null,9.5,0.5],[480,null,12,1],[180,null,9.5,0.5],[480,null,12,1],[600,null,9,0.5]]",
      "distanceKm": 9.708333333333332,
      "durationSeconds": 3300,
      "title": "Eerste marathonpaceblokken"
    },
    "marathon-3u30-w36-t3": {
      "signature": "[[300,null,9,0.5],[1800,null,9.8,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 6.358333333333333,
      "durationSeconds": 2400,
      "title": "Recovery"
    },
    "marathon-3u30-w36-t4": {
      "signature": "[[600,null,9.5,0.5],[4800,null,10,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 15.625,
      "durationSeconds": 5700,
      "title": "Lange duur"
    },
    "marathon-3u30-w37-t1": {
      "signature": "[[300,null,9.2,0.5],[2400,null,10.1,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 8.208333333333332,
      "durationSeconds": 3000,
      "title": "Easy"
    },
    "marathon-3u30-w37-t2": {
      "signature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[360,null,12.3,1],[150,null,9.5,0.5],[360,null,12.3,1],[150,null,9.5,0.5],[360,null,12.3,1],[150,null,9.5,0.5],[360,null,12.3,1],[600,null,9,0.5]]",
      "distanceKm": 10.065833333333334,
      "durationSeconds": 3390,
      "title": "4 × 6 min drempel"
    },
    "marathon-3u30-w37-t3": {
      "signature": "[[300,null,9.2,0.5],[2100,null,10,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 7.308333333333334,
      "durationSeconds": 2700,
      "title": "Easy"
    },
    "marathon-3u30-w37-t4": {
      "signature": "[[600,null,9.5,0.5],[5700,null,10,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 18.124999999999996,
      "durationSeconds": 6600,
      "title": "Lange duur"
    },
    "marathon-3u30-w38-t1": {
      "signature": "[[300,null,9.2,0.5],[1800,null,10.1,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 6.5249999999999995,
      "durationSeconds": 2400,
      "title": "Easy"
    },
    "marathon-3u30-w38-fitness-check-1": {
      "signature": "[[300,null,9,0.5],[600,null,10,0.5],[600,null,11,0.5],[600,null,12,1],[300,null,8.5,0.5]]",
      "distanceKm": 6.958333333333333,
      "durationSeconds": 2400,
      "title": "Marathon Fitness Check #1"
    },
    "marathon-3u30-w38-t2": {
      "signature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[240,null,13,1],[120,null,9.5,0.5],[240,null,13,1],[120,null,9.5,0.5],[240,null,13,1],[120,null,9.5,0.5],[240,null,13,1],[120,null,9.5,0.5],[240,null,13,1],[120,null,9.5,0.5],[240,null,13,1],[600,null,9,0.5]]",
      "distanceKm": 10.741666666666667,
      "durationSeconds": 3540,
      "title": "6 × 4 min snel"
    },
    "marathon-3u30-w38-t3": {
      "signature": "[[300,null,9.2,0.5],[1200,null,10.1,0.5],[600,null,10.8,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 6.641666666666666,
      "durationSeconds": 2400,
      "title": "Progressief"
    },
    "marathon-3u30-w38-t4": {
      "signature": "[[600,null,9.5,0.5],[6000,null,10,0.5],[600,null,10.5,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 20.708333333333332,
      "durationSeconds": 7500,
      "title": "FIRST 20K CONFIDENCE RUN"
    },
    "marathon-3u30-w39-t1": {
      "signature": "[[300,null,9.2,0.5],[2700,null,10.2,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 9.125,
      "durationSeconds": 3300,
      "title": "Easy"
    },
    "marathon-3u30-w39-t2": {
      "signature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[900,null,12,1],[180,null,9.5,0.5],[900,null,12,1],[180,null,9.5,0.5],[900,null,12,1],[600,null,9,0.5]]",
      "distanceKm": 13.908333333333333,
      "durationSeconds": 4560,
      "title": "3 × 15 min marathonpace"
    },
    "marathon-3u30-w39-t3": {
      "signature": "[[300,null,9.2,0.5],[2100,null,10.1,0.5],[600,null,10.8,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 9.166666666666668,
      "durationSeconds": 3300,
      "title": "Steady finish"
    },
    "marathon-3u30-w39-t4": {
      "signature": "[[null,3,10,0.5],[null,8,10.3,0.5],[null,6,10.8,0.5],[null,4.1,11.2,1],[null,2.7,10,0.5]]",
      "distanceKm": 23.8,
      "durationSeconds": 8166,
      "title": "CONFIDENCE RUN #1"
    },
    "marathon-3u30-w40-t1": {
      "signature": "[[300,null,9,0.5],[2100,null,9.8,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 7.175000000000001,
      "durationSeconds": 2700,
      "title": "Recovery"
    },
    "marathon-3u30-w40-t2": {
      "signature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[180,null,9,0.5],[20,null,13,1],[100,null,9,0.5],[20,null,13,1],[100,null,9,0.5],[20,null,13,1],[100,null,9,0.5],[20,null,13,1],[100,null,9,0.5],[180,null,9,0.5],[null,5,null,1],[600,null,9,0.5]]",
      "distanceKm": 11.147222222222222,
      "durationSeconds": null,
      "title": "TEST 1 — 5 KM BENCHMARK"
    },
    "marathon-3u30-w40-t3": {
      "signature": "[[300,null,9,0.5],[1800,null,9.6,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 6.258333333333333,
      "durationSeconds": 2400,
      "title": "Recovery"
    },
    "marathon-3u30-w40-t4": {
      "signature": "[[600,null,9.5,0.5],[5700,null,9.9,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 17.966666666666665,
      "durationSeconds": 6600,
      "title": "Rustige lange duur"
    },
    "marathon-3u30-w41-t1": {
      "signature": "[[300,null,9.2,0.5],[3000,null,10.2,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 9.975,
      "durationSeconds": 3600,
      "title": "Easy"
    },
    "marathon-3u30-w41-t2": {
      "signature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[3600,null,12,1],[600,null,9,0.5]]",
      "distanceKm": 15.958333333333332,
      "durationSeconds": 5100,
      "title": "Marathon Rhythm — 60 min continu"
    },
    "marathon-3u30-w41-t3": {
      "signature": "[[300,null,9.2,0.5],[3000,null,10,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 9.808333333333335,
      "durationSeconds": 3600,
      "title": "Easy"
    },
    "marathon-3u30-w41-t4": {
      "signature": "[[null,1.5,9.8,0.5],[null,21.1,10.7,0.5],[null,3.2,9.8,0.5]]",
      "distanceKm": 25.8,
      "durationSeconds": 8826,
      "title": "CONFIDENCE RUN #2"
    },
    "marathon-3u30-w42-t1": {
      "signature": "[[300,null,9.2,0.5],[2400,null,10.2,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 8.274999999999999,
      "durationSeconds": 3000,
      "title": "Easy"
    },
    "marathon-3u30-w42-fitness-check-2": {
      "signature": "[[300,null,9,0.5],[600,null,10,0.5],[600,null,11,0.5],[600,null,12,1],[300,null,8.5,0.5]]",
      "distanceKm": 6.958333333333333,
      "durationSeconds": 2400,
      "title": "Marathon Fitness Check #2"
    },
    "marathon-3u30-w42-t2": {
      "signature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[300,null,13,1],[150,null,9.5,0.5],[300,null,13,1],[150,null,9.5,0.5],[300,null,13,1],[150,null,9.5,0.5],[300,null,13.2,1],[150,null,9.5,0.5],[300,null,13.2,1],[600,null,9,0.5]]",
      "distanceKm": 10.991666666666665,
      "durationSeconds": 3600,
      "title": "5 × 5 min snel"
    },
    "marathon-3u30-w42-t3": {
      "signature": "[[300,null,9.2,0.5],[3000,null,10.2,0.5],[300,null,10.8,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 10.875,
      "durationSeconds": 3900,
      "title": "Easy met steady finish"
    },
    "marathon-3u30-w42-t4": {
      "signature": "[[600,null,9.5,0.5],[6900,null,10.1,0.5],[1200,null,11.5,1],[900,null,11.8,1],[300,null,8.5,0.5]]",
      "distanceKm": 28.43333333333333,
      "durationSeconds": 9900,
      "title": "Progressieve 28 km"
    },
    "marathon-3u30-w43-t1": {
      "signature": "[[300,null,9.2,0.5],[3000,null,10.2,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 9.975,
      "durationSeconds": 3600,
      "title": "Easy"
    },
    "marathon-3u30-w43-t2": {
      "signature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[900,null,12,1],[240,null,9.5,0.5],[900,null,12,1],[240,null,9.5,0.5],[900,null,12,1],[600,null,9,0.5]]",
      "distanceKm": 14.225,
      "durationSeconds": 4680,
      "title": "TEST 2 — 3 × 15 MIN MARATHONPACE"
    },
    "marathon-3u30-w43-t3": {
      "signature": "[[300,null,9.2,0.5],[3000,null,10,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 9.808333333333335,
      "durationSeconds": 3600,
      "title": "Easy"
    },
    "marathon-3u30-w43-t4": {
      "signature": "[[600,null,9.5,0.5],[8400,null,10.1,0.5],[1500,null,10.8,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 30.35833333333333,
      "durationSeconds": 10800,
      "title": "30K CONFIDENCE RUN"
    },
    "marathon-3u30-w44-t1": {
      "signature": "[[300,null,9.2,0.5],[2700,null,10,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 8.975,
      "durationSeconds": 3300,
      "title": "Easy"
    },
    "marathon-3u30-w44-t2": {
      "signature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[240,null,13.2,1],[120,null,9.5,0.5],[240,null,13.2,1],[120,null,9.5,0.5],[240,null,13.2,1],[120,null,9.5,0.5],[240,null,13.2,1],[120,null,9.5,0.5],[240,null,13.2,1],[600,null,9,0.5]]",
      "distanceKm": 9.624999999999998,
      "durationSeconds": 3180,
      "title": "Korte snelheid"
    },
    "marathon-3u30-w44-t3": {
      "signature": "[[300,null,9,0.5],[2100,null,9.6,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 7.058333333333334,
      "durationSeconds": 2700,
      "title": "Recovery"
    },
    "marathon-3u30-w44-t4": {
      "signature": "[[600,null,9.5,0.5],[4500,null,10,0.5],[1800,null,12,1],[480,null,9.8,0.5],[1800,null,12,1],[420,null,10,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 29.265,
      "durationSeconds": 9900,
      "title": "Key Marathon Confidence — 2 × 30 min MP"
    },
    "marathon-3u30-w45-t1": {
      "signature": "[[300,null,9.2,0.5],[2400,null,9.9,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 8.075,
      "durationSeconds": 3000,
      "title": "Easy / herstel"
    },
    "marathon-3u30-w45-t2": {
      "signature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[600,null,12.4,1],[180,null,9.5,0.5],[600,null,12.4,1],[180,null,9.5,0.5],[600,null,12.4,1],[600,null,9,0.5]]",
      "distanceKm": 11.10833333333333,
      "durationSeconds": 3660,
      "title": "Drempel onderhouden"
    },
    "marathon-3u30-w45-t3": {
      "signature": "[[300,null,9,0.5],[2100,null,9.6,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 7.058333333333334,
      "durationSeconds": 2700,
      "title": "Easy"
    },
    "marathon-3u30-w45-t4": {
      "signature": "[[600,null,9.5,0.5],[4200,null,10,0.5],[1800,null,12,1],[300,null,10,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 20.791666666666664,
      "durationSeconds": 7200,
      "title": "Marathonpace onderhoud"
    },
    "marathon-3u30-w46-t1": {
      "signature": "[[300,null,9,0.5],[2100,null,9.8,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 7.175000000000001,
      "durationSeconds": 2700,
      "title": "Easy / herstel"
    },
    "marathon-3u30-w46-t2": {
      "signature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[480,null,12.1,1],[180,null,9.5,0.5],[480,null,12.1,1],[180,null,9.5,0.5],[480,null,12.1,1],[600,null,9,0.5]]",
      "distanceKm": 9.748333333333331,
      "durationSeconds": 3300,
      "title": "Kwaliteitstraining"
    },
    "marathon-3u30-w46-t3": {
      "signature": "[[300,null,9,0.5],[900,null,9.6,0.5],[20,null,13.5,1],[100,null,9,0.5],[20,null,13.5,1],[100,null,9,0.5],[20,null,13.5,1],[100,null,9,0.5],[20,null,13.5,1],[100,null,9,0.5],[300,null,8.5,0.5],[120,null,5.5,0]]",
      "distanceKm": 5.341666666666667,
      "durationSeconds": 2100,
      "title": "Losmaken"
    },
    "marathon-3u30-w46-t4": {
      "signature": "[[600,null,9.5,0.5],[3300,null,10,0.5],[1200,null,12,1],[300,null,8.5,0.5]]",
      "distanceKm": 15.458333333333334,
      "durationSeconds": 5400,
      "title": "Lange duur"
    },
    "marathon-3u30-w47-t1": {
      "signature": "[[300,null,9,0.5],[1500,null,9.6,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 5.458333333333333,
      "durationSeconds": 2100,
      "title": "Easy"
    },
    "marathon-3u30-w47-t2": {
      "signature": "[[600,null,9.5,0.5],[300,null,10.5,0.5],[300,null,12,1],[180,null,9.2,0.5],[300,null,12,1],[480,null,9,0.5],[240,null,5.5,0]]",
      "distanceKm": 6.484999999999999,
      "durationSeconds": 2400,
      "title": "Marathonpace aanraken"
    },
    "marathon-3u30-w47-t3": {
      "signature": "[[300,null,9,0.5],[600,null,9.5,0.5],[20,null,13,1],[100,null,9,0.5],[20,null,13,1],[100,null,9,0.5],[20,null,13,1],[100,null,9,0.5],[300,null,8.5,0.5]]",
      "distanceKm": 4.008333333333334,
      "durationSeconds": 1560,
      "title": "Losmaken"
    },
    "marathon-3u30-w47-t4": {
      "signature": "[[null,42.195,12.06,null]]",
      "distanceKm": 42.195,
      "durationSeconds": 12596,
      "title": "Marathon — 22 NOVEMBER 2026"
    }
  },
  "guidance": {
    "philosophy": [
      "Easy blijft echt easy: RPE 3–4/10 en volledige zinnen kunnen spreken.",
      "De praattest en controle zijn belangrijker dan koste wat kost de bovengrens van een snelheidszone lopen.",
      "Trainingssnelheden worden na tests nooit automatisch verhoogd; resultaten worden eerst beoordeeld.",
      "Een test is diagnostiek, geen verplichting om jezelf kapot te lopen.",
      "De taper in week 45–47 is beschermd: geen extra kilometers, extra tests of extra trainingsdagen.",
      "De langste duurloop blijft de 30K Confidence Run in week 43: ongeveer 30,36 km. Niet verlengen naar 32, 33 of 35 km.",
      "Bij oplopende plaatselijke pijn, technisch verval of duidelijke controleproblemen wordt een training aangepast of gestopt."
    ],
    "paces": [
      {
        "type": "Herstel",
        "speed": "9,4–9,7 km/u",
        "incline": "0,5%",
        "rpe": "2–3/10"
      },
      {
        "type": "Easy",
        "speed": "9,9–10,3 km/u",
        "incline": "0,5%",
        "rpe": "3–4/10"
      },
      {
        "type": "Lange rustige duur",
        "speed": "10,0–10,2 km/u",
        "incline": "0,5%",
        "rpe": "3–5/10"
      },
      {
        "type": "Steady",
        "speed": "10,6–11,0 km/u",
        "incline": "0,5%",
        "rpe": "4–6/10"
      },
      {
        "type": "Sub-MP",
        "speed": "11,5–11,8 km/u",
        "incline": "1%",
        "rpe": "5–7/10"
      },
      {
        "type": "Marathonpace (MP)",
        "speed": "12,0 km/u",
        "incline": "1%",
        "rpe": "contextafhankelijk"
      },
      {
        "type": "Drempel / controlled fast",
        "speed": "ongeveer 12,6–13,0 km/u",
        "incline": "1%",
        "rpe": "7–8/10"
      },
      {
        "type": "Korte snellere prikkel",
        "speed": "ongeveer 13,0–13,2 km/u",
        "incline": "1%",
        "rpe": "7–9/10"
      },
      {
        "type": "Wandelen",
        "speed": "zoals vermeld",
        "incline": "0%",
        "rpe": "zeer licht"
      }
    ],
    "rpeScale": [
      {
        "type": "Herstel",
        "rpe": "2–3/10",
        "feeling": "Volg de specifieke training en houd controle."
      },
      {
        "type": "Easy",
        "rpe": "3–4/10",
        "feeling": "Volledige zinnen mogelijk."
      },
      {
        "type": "Lange rustige duur",
        "rpe": "3–5/10",
        "feeling": "Volg de specifieke training en houd controle."
      },
      {
        "type": "Steady",
        "rpe": "4–6/10",
        "feeling": "Volg de specifieke training en houd controle."
      },
      {
        "type": "Sub-MP",
        "rpe": "5–7/10",
        "feeling": "Volg de specifieke training en houd controle."
      },
      {
        "type": "Marathonpace (MP)",
        "rpe": "contextafhankelijk",
        "feeling": "Volg de specifieke training en houd controle."
      },
      {
        "type": "Drempel / controlled fast",
        "rpe": "7–8/10",
        "feeling": "Volg de specifieke training en houd controle."
      },
      {
        "type": "Korte snellere prikkel",
        "rpe": "7–9/10",
        "feeling": "Volg de specifieke training en houd controle."
      },
      {
        "type": "Wandelen",
        "rpe": "zeer licht",
        "feeling": "Volg de specifieke training en houd controle."
      }
    ],
    "scheduling": [
      "Vier reguliere loopdagen per week. Alleen W38 en W42 hebben een extra Fitness Check, geen structurele vijfde loopdag.",
      "Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Op opeenvolgende trainingsdagen is minimaal één sessie Training 1 of Training 3."
    ],
    "suggestedSequences": [
      "Trainingsdagen zijn vrij te kiezen. Plaats minimaal één rustdag tussen Training 2 en Training 4; laat op opeenvolgende loopdagen één sessie easy zijn."
    ],
    "incline": [
      "Herstel: 0,5%.",
      "Easy: 0,5%.",
      "Lange rustige duur: 0,5%.",
      "Steady: 0,5%.",
      "Sub-MP: 1%.",
      "Marathonpace (MP): 1%.",
      "Drempel / controlled fast: 1%.",
      "Korte snellere prikkel: 1%.",
      "Wandelen: 0%."
    ],
    "painRules": [
      "De praattest en controle zijn belangrijker dan koste wat kost de bovengrens van een snelheidszone lopen.",
      "Een test is diagnostiek, geen verplichting om jezelf kapot te lopen.",
      "Bij oplopende plaatselijke pijn, technisch verval of duidelijke controleproblemen wordt een training aangepast of gestopt."
    ],
    "fueling": [
      "Oefen voor grote lange trainingen geleidelijk richting 60–75 gram koolhydraten per uur, indien goed verdragen. Bouw dit niet ineens op in de zwaarste sessie; gebruik in de laatste weken geen nieuwe producten.",
      "Gebruik dezelfde producten, timing, beoogde hoeveelheid per uur en een vergelijkbare drinkstrategie als op raceday."
    ],
    "raceStrategy": [
      {
        "distance": "0–3 km",
        "pace": "ongeveer 5:02–5:03/km",
        "instruction": "bewust gecontroleerd starten; geen grote achterstand opbouwen"
      },
      {
        "distance": "3–10 km",
        "pace": "ongeveer 4:58–4:59/km",
        "instruction": "soepel naar doelritme stabiliseren"
      },
      {
        "distance": "10–30 km",
        "pace": "ongeveer 4:57–4:59/km",
        "instruction": "constante inspanning; niets forceren om seconden te winnen"
      },
      {
        "distance": "30–35 km",
        "pace": "ongeveer 4:58–4:59/km indien beheerst",
        "instruction": "tempo en techniek vasthouden"
      },
      {
        "distance": "35–40 km",
        "pace": "op controle",
        "instruction": "alleen versnellen als de benen en ademhaling dit werkelijk toelaten"
      },
      {
        "distance": "40–42,195 km",
        "pace": "alles wat verantwoord beschikbaar is",
        "instruction": "geconcentreerd uitlopen"
      }
    ],
    "targetConfirmation": [
      "Exact 5:00/km geeft 3:30:59, niet 3:30:00. Het benodigde gemiddelde is 4:58,6/km.",
      "Halverwege-richtpunt: 1:44:50–1:45:00, rekening houdend met gelopen lijn en officiële markeringen.",
      "de uiteindelijke keuze tussen 3:30 en een behoudender doel wordt gemaakt op basis van het totaalbeeld uit training, tests, herstel en klachten — niet op basis van één sessie."
    ],
    "officialTests": [
      {
        "week": 38,
        "training": "extra",
        "title": "Extra Fitness Check #1",
        "question": "nulmeting voor vergelijking met week 42."
      },
      {
        "week": 40,
        "training": 2,
        "title": "Test 1: 5K Benchmark",
        "question": "verandering in snelheid en drempel beoordelen."
      },
      {
        "week": 41,
        "training": 2,
        "title": "Marathon Rhythm Test",
        "question": "een volledig uur of 12 km onafgebroken het marathonritme beheersen."
      },
      {
        "week": 42,
        "training": "extra",
        "title": "Extra Fitness Check #2",
        "question": "resultaten logisch vergelijken met week 38."
      },
      {
        "week": 43,
        "training": 2,
        "title": "Test: 3 × 15 min marathonpace",
        "question": "beoordelen hoe normaal en beheersbaar 12,0 km/u is geworden."
      },
      {
        "week": 44,
        "training": 4,
        "title": "Key Marathon Specific Test: 2 × 30 min MP under fatigue",
        "question": "testen of MP beheerst blijft nadat al 85 minuten is gelopen."
      }
    ],
    "testTimeline": [
      "Vanaf week 45: geen nieuwe test, volume of trainingsdag. Frisheid heeft voorrang."
    ]
  }
};
(function installModel() {
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
})();
