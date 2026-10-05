// Generated from marathonschema_Roy_FINAL_V6_SUB4_2026-10-05.md. Edit the source/generator, then regenerate.
window.MARATHON_PLAN = {
  "config": {
    "planId": "marathon-final-v6-sub4-2026",
    "planVersion": 14,
    "schemaVersion": "marathon-final-v6-sub4-2026.10.05-1",
    "sourceFile": "marathonschema_Roy_FINAL_V6_SUB4_2026-10-05.md",
    "sourceSha256": "a305dedf42be6f0981dbb7c8367d8350463e091c5720c7bf9fb25fe4d6d53e5c",
    "planName": "Marathon sub 4",
    "planSubtitle": "FINAL V6 · Sub 4 · Garmin / Outdoor",
    "startDate": "2026-10-05",
    "endDate": "2026-11-22",
    "marathonDate": "2026-11-22",
    "raceDistanceKm": 42.195,
    "targetTime": "Sub 4:00",
    "targetPace": "5:41/km",
    "practicalRacePace": "5:40/km",
    "historicalAmbition": "3:30 (historisch)",
    "volumeUnit": "minutes"
  },
  "weeks": [
    {
      "weekNumber": 41,
      "weekId": "marathon-v6-w41",
      "phaseId": "v6-phase-41",
      "phaseName": "Actief herstel",
      "weekType": "Actief herstel",
      "startDate": "2026-10-05",
      "endDate": "2026-10-11",
      "periodLabel": "5 oktober – 11 oktober",
      "focus": "Herstel; geen intensiteit. De 60 min is een comfortabele bovengrens. Vier runs, één fietsrit, twee volledige rustdagen",
      "planningMode": "flexible",
      "includesMarathon": false,
      "plannedSessionMinutes": 185,
      "plannedRunMinutes": 164,
      "plannedWalkMinutes": 21,
      "plannedBikeMinutes": 60,
      "plannedMpMinutes": 0,
      "workouts": [
        {
          "workoutId": "V6-W41-T1",
          "trainingId": "V6-W41-T1",
          "trainingNumber": 1,
          "weekNumber": 41,
          "weekId": "marathon-v6-w41",
          "phaseId": "v6-phase-41",
          "phaseName": "Actief herstel",
          "date": null,
          "title": "Easy herstel",
          "activityType": "run",
          "category": "rustige-duur",
          "role": "easy",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 1800,
          "totalPlannedLabel": "30 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 30,
          "plannedRunMinutes": 30,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Loopritme behouden; eindig met reserve",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "5 + 20 + 5 = 30 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W41-T1-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W41-T1-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W41-T1-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W41-T1-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 1200,
                  "display": "20 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W41-T1-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W41-T1-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W41-T1-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W41-T1-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W41-T1-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W41-T1-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 1200,
                    "display": "20 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W41-T1-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W41-T1-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "5 min easy Vrij → 20 min easy Vrij → 5 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "cba614f5d1b28ace3b28b02a6079737a6f1ea77ea534dc417ca53a94fcb34f49"
        },
        {
          "workoutId": "V6-W41-T2",
          "trainingId": "V6-W41-T2",
          "trainingNumber": 2,
          "weekNumber": 41,
          "weekId": "marathon-v6-w41",
          "phaseId": "v6-phase-41",
          "phaseName": "Actief herstel",
          "date": null,
          "title": "Ontspannen continu",
          "activityType": "run",
          "category": "rustige-duur",
          "role": "easy",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 3600,
          "totalPlannedLabel": "60 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 60,
          "plannedRunMinutes": 60,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Alleen de volledige 60 min als dit comfortabel voelt. Geen test; bij zware benen 30–45 min en zonder tempo-eis afronden",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "5 + 50 + 5 = 60 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W41-T2-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W41-T2-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W41-T2-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W41-T2-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 3000,
                  "display": "50 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W41-T2-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W41-T2-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W41-T2-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W41-T2-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W41-T2-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W41-T2-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 3000,
                    "display": "50 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W41-T2-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W41-T2-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "5 min easy Vrij → 50 min easy Vrij → 5 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "42b5d91831adb26e22e6e80a0ac60cc2fda2edb8fc0d0e100e0a6f75dcbad178"
        },
        {
          "workoutId": "V6-W41-T3",
          "trainingId": "V6-W41-T3",
          "trainingNumber": 3,
          "weekNumber": 41,
          "weekId": "marathon-v6-w41",
          "phaseId": "v6-phase-41",
          "phaseName": "Actief herstel",
          "date": null,
          "title": "Easy herstel",
          "activityType": "run",
          "category": "rustige-duur",
          "role": "easy",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 1800,
          "totalPlannedLabel": "30 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 30,
          "plannedRunMinutes": 30,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Benen soepel houden. Geen strides deze herstelweek",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "5 + 20 + 5 = 30 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W41-T3-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W41-T3-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W41-T3-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W41-T3-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 1200,
                  "display": "20 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W41-T3-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W41-T3-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W41-T3-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W41-T3-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W41-T3-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W41-T3-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 1200,
                    "display": "20 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W41-T3-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W41-T3-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "5 min easy Vrij → 20 min easy Vrij → 5 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "4ce6efcb107c2004fe6672e2a65673ba9f73d1c9262a953d2daf4c046e2dcf68"
        },
        {
          "workoutId": "V6-W41-T4",
          "trainingId": "V6-W41-T4",
          "trainingNumber": 4,
          "weekNumber": 41,
          "weekId": "marathon-v6-w41",
          "phaseId": "v6-phase-41",
          "phaseName": "Actief herstel",
          "date": null,
          "title": "Rustige run-walk",
          "activityType": "run",
          "category": "lange-duur",
          "role": "runwalk",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 3900,
          "totalPlannedLabel": "65 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 65,
          "plannedRunMinutes": 44,
          "plannedWalkMinutes": 21,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "44 min lopen + 21 min wandelen. De 1 min wandelen hoort ook bij de laatste herhaling. Geen extra jogminuten",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Loopblokken 7–9 km/u; alle wandelstappen 4–5,5 km/u, naar comfort. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "5 + 11×(4 + 1) + 5 = 65 min. Herstel ook na het laatste werkblok; geen extra repeats",
          "nutrition": "Water naar behoefte; desgewenst één bekend voedingsmoment, geen hoge inname afdwingen",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [
            "RUN-WALK"
          ],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W41-T4-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W41-T4-s1",
                  "name": "Warming-up",
                  "type": "wandelen",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Wandelen, rustig starten",
                  "instruction": "Wandelen, rustig starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    4,
                    5.5
                  ],
                  "speedKmh": 4.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W41-T4-g2",
              "kind": "repeat",
              "repetitions": 11,
              "label": "Werk + herstel",
              "segments": [
                {
                  "segmentId": "V6-W41-T4-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9
                  ],
                  "speedKmh": 8,
                  "distanceKm": null
                },
                {
                  "segmentId": "V6-W41-T4-s3",
                  "name": "Herstel",
                  "type": "wandelen",
                  "basis": "time",
                  "durationSeconds": 60,
                  "display": "1 min",
                  "isRecovery": true,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Wandelen, ontspannen",
                  "instruction": "Wandelen, ontspannen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    4,
                    5.5
                  ],
                  "speedKmh": 4.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W41-T4-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W41-T4-s4",
                  "name": "Cooldown",
                  "type": "wandelen",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Wandelen, rustig afronden",
                  "instruction": "Wandelen, rustig afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    4,
                    5.5
                  ],
                  "speedKmh": 4.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W41-T4-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W41-T4-s1",
                    "name": "Warming-up",
                    "type": "wandelen",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Wandelen, rustig starten",
                    "instruction": "Wandelen, rustig starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      4,
                      5.5
                    ],
                    "speedKmh": 4.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W41-T4-g2",
                "kind": "repeat",
                "repetitions": 11,
                "label": "Werk + herstel",
                "segments": [
                  {
                    "segmentId": "V6-W41-T4-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9
                    ],
                    "speedKmh": 8,
                    "distanceKm": null
                  },
                  {
                    "segmentId": "V6-W41-T4-s3",
                    "name": "Herstel",
                    "type": "wandelen",
                    "basis": "time",
                    "durationSeconds": 60,
                    "display": "1 min",
                    "isRecovery": true,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Wandelen, ontspannen",
                    "instruction": "Wandelen, ontspannen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      4,
                      5.5
                    ],
                    "speedKmh": 4.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W41-T4-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W41-T4-s4",
                    "name": "Cooldown",
                    "type": "wandelen",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Wandelen, rustig afronden",
                    "instruction": "Wandelen, rustig afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      4,
                      5.5
                    ],
                    "speedKmh": 4.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "5 min wandelen Vrij → REPEAT 11× [4 min easy Vrij + 1 min wandelen Vrij] → 5 min wandelen Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "314e90d5f2fcc21bda84b534facafba080f620afb248f7fe151b8ac9320379e4"
        },
        {
          "workoutId": "V6-W41-T5",
          "trainingId": "V6-W41-T5",
          "trainingNumber": 5,
          "weekNumber": 41,
          "weekId": "marathon-v6-w41",
          "phaseId": "v6-phase-41",
          "phaseName": "Actief herstel",
          "date": null,
          "title": "Rustig fietsen",
          "activityType": "bike",
          "category": "fiets",
          "role": "bike",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": false,
          "totalPlannedSeconds": 3600,
          "totalPlannedLabel": "60 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 60,
          "plannedRunMinutes": 0,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 60,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Aerobe beweging met weinig impact; geen zwaar verzet",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Fietsen / hometrainer",
          "outsideVariant": "Buiten fietsen of binnen op de hometrainer, met dezelfde duur en rustige inspanning.",
          "treadmillInstruction": "",
          "bikeInstruction": "kies Fietsen of Binnen fietsen, target Vrij; stel via activiteitinstellingen → Meldingen → Tijd een terugkerende melding op 10:00 min in. Rijd tot verstreken 10 min zeer licht, van 10 tot 50 min rustig, van 50 tot 60 min uittrappen; stop op 60:00. Bij een overgang zonder 10-min-melding lees je de totale timer en druk je desgewenst LAP. Als het Tijd-menu ontbreekt, gebruik dezelfde totale timer handmatig. Er wordt geen gegarandeerde Connect-fietsworkoutsync geclaimd",
          "hometrainerInstruction": "dezelfde tijden; lichte weerstand en comfortabele cadans, geen snelheidsdoel. Geen loopbandvariant voor fietsen",
          "durationCheck": "10 + 40 + 10 = 60 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W41-T5-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W41-T5-s1",
                  "name": "Warming-up",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Licht verzet; RPE 1–2",
                  "instruction": "Licht verzet; RPE 1–2",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W41-T5-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Fietsen",
              "segments": [
                {
                  "segmentId": "V6-W41-T5-s2",
                  "name": "Fietsen",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 2400,
                  "display": "40 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Rustig RPE 2–3; volledige zinnen",
                  "instruction": "Rustig RPE 2–3; volledige zinnen",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W41-T5-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W41-T5-s3",
                  "name": "Cooldown",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Rustig uittrappen; RPE 1–2",
                  "instruction": "Rustig uittrappen; RPE 1–2",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W41-T5-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W41-T5-s1",
                    "name": "Warming-up",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Licht verzet; RPE 1–2",
                    "instruction": "Licht verzet; RPE 1–2",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W41-T5-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Fietsen",
                "segments": [
                  {
                    "segmentId": "V6-W41-T5-s2",
                    "name": "Fietsen",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 2400,
                    "display": "40 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Rustig RPE 2–3; volledige zinnen",
                    "instruction": "Rustig RPE 2–3; volledige zinnen",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W41-T5-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W41-T5-s3",
                    "name": "Cooldown",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Rustig uittrappen; RPE 1–2",
                    "instruction": "Rustig uittrappen; RPE 1–2",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "10 min zeer rustig fietsen Vrij → 40 min rustig fietsen Vrij → 10 min zeer rustig fietsen Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "1aa9c1976a371b636823048cf0f003c55a80302b0946a4f8b7260b12a9c13465"
        }
      ],
      "weekPhilosophy": {
        "theme": "Actief herstel",
        "summary": "Herstel; geen intensiteit. De 60 min is een comfortabele bovengrens. Vier runs, één fietsrit, twee volledige rustdagen",
        "adaptations": [
          "SUB 4",
          "EIGEN DAGKEUZE"
        ],
        "why": [
          "Herstel; geen intensiteit. De 60 min is een comfortabele bovengrens. Vier runs, één fietsrit, twee volledige rustdagen"
        ],
        "targetLink": "Sub 4:00 blijft het doel; checkpoints verfijnen de uitvoering zonder een eindtijdgarantie.",
        "whyNotMore": "Geen kilometerquotum, extra tests of late inhaalpiek. Langste duur maximaal 150 minuten; taper vanaf 9 november.",
        "confidence": "Vertrouwen komt uit goed verwerkte buitenweken, gecontroleerde MP en passend herstel."
      }
    },
    {
      "weekNumber": 42,
      "weekId": "marathon-v6-w42",
      "phaseId": "v6-phase-42",
      "phaseName": "Heropbouw + eerste MP",
      "weekType": "Heropbouw + eerste MP",
      "startDate": "2026-10-12",
      "endDate": "2026-10-18",
      "periodLabel": "12 oktober – 18 oktober",
      "focus": "Normale heropbouw na herstel; eerste korte MP-blokken. Eerste langere duur blijft geheel easy",
      "planningMode": "flexible",
      "includesMarathon": false,
      "plannedSessionMinutes": 200,
      "plannedRunMinutes": 200,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 60,
      "plannedMpMinutes": 15,
      "workouts": [
        {
          "workoutId": "V6-W42-T1",
          "trainingId": "V6-W42-T1",
          "trainingNumber": 1,
          "weekNumber": 42,
          "weekId": "marathon-v6-w42",
          "phaseId": "v6-phase-42",
          "phaseName": "Heropbouw + eerste MP",
          "date": null,
          "title": "Easy herstart",
          "activityType": "run",
          "category": "rustige-duur",
          "role": "easy",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 2100,
          "totalPlannedLabel": "35 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 35,
          "plannedRunMinutes": 35,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Normaliteit van de benen bevestigen zonder tempo te testen",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "5 + 25 + 5 = 35 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W42-T1-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W42-T1-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W42-T1-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W42-T1-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 1500,
                  "display": "25 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W42-T1-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W42-T1-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W42-T1-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W42-T1-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W42-T1-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W42-T1-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 1500,
                    "display": "25 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W42-T1-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W42-T1-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "5 min easy Vrij → 25 min easy Vrij → 5 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "0d727ee13a63425e0e5861469387829960021c0ae383dec61bffb2c85eb03a26"
        },
        {
          "workoutId": "V6-W42-T2",
          "trainingId": "V6-W42-T2",
          "trainingNumber": 2,
          "weekNumber": 42,
          "weekId": "marathon-v6-w42",
          "phaseId": "v6-phase-42",
          "phaseName": "Heropbouw + eerste MP",
          "date": null,
          "title": "Eerste marathonpacegewenning — 3×5 min",
          "activityType": "run",
          "category": "kwaliteit",
          "role": "marathonpace",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 3000,
          "totalPlannedLabel": "50 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 50,
          "plannedRunMinutes": 50,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 15,
          "targetRpe": "2–3 easy · 4–5 MP",
          "goal": "15 min MP binnen een overwegend rustige sessie; ritme leren. Bij te zware MP resterende werkminuten easy",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. MP 10,3–10,7 km/u (midden 10,5–10,6); warming-up/cooldown/jogherstel 7–8,5 km/u of eigen easy-snelheid. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "15 + 3×(5 + 2) + 14 = 50 min. Herstel ook na het laatste werkblok; geen extra repeats",
          "nutrition": "Normaal gevoed starten; gels niet verplicht",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [
            "MARATHONPACE"
          ],
          "tone": "quality",
          "groups": [
            {
              "groupId": "V6-W42-T2-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W42-T2-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledig warm worden",
                  "instruction": "Easy RPE 2–3; volledig warm worden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W42-T2-g2",
              "kind": "repeat",
              "repetitions": 3,
              "label": "Werk + herstel",
              "segments": [
                {
                  "segmentId": "V6-W42-T2-s2",
                  "name": "Hardlopen",
                  "type": "marathonpace",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Tempo",
                  "targetValue": "5:35–5:50/km",
                  "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                  "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    10.3,
                    10.7
                  ],
                  "speedKmh": 10.5,
                  "distanceKm": null
                },
                {
                  "segmentId": "V6-W42-T2-s3",
                  "name": "Herstel",
                  "type": "herstel",
                  "basis": "time",
                  "durationSeconds": 120,
                  "display": "2 min",
                  "isRecovery": true,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                  "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W42-T2-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W42-T2-s4",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 840,
                  "display": "14 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; geen versnelling",
                  "instruction": "Zeer easy RPE 2; geen versnelling",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W42-T2-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W42-T2-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 900,
                    "display": "15 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledig warm worden",
                    "instruction": "Easy RPE 2–3; volledig warm worden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W42-T2-g2",
                "kind": "repeat",
                "repetitions": 3,
                "label": "Werk + herstel",
                "segments": [
                  {
                    "segmentId": "V6-W42-T2-s2",
                    "name": "Hardlopen",
                    "type": "marathonpace",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Tempo",
                    "targetValue": "5:35–5:50/km",
                    "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                    "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      10.3,
                      10.7
                    ],
                    "speedKmh": 10.5,
                    "distanceKm": null
                  },
                  {
                    "segmentId": "V6-W42-T2-s3",
                    "name": "Herstel",
                    "type": "herstel",
                    "basis": "time",
                    "durationSeconds": 120,
                    "display": "2 min",
                    "isRecovery": true,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                    "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W42-T2-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W42-T2-s4",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 840,
                    "display": "14 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; geen versnelling",
                    "instruction": "Zeer easy RPE 2; geen versnelling",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "15 min easy Vrij → REPEAT 3× [5 min @ 5:35–5:50/km + 2 min easy Vrij] → 14 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "37511e040bfb222dad9cff15871bd2fb6c6a19ad5c71838d62a0c4085d52b456"
        },
        {
          "workoutId": "V6-W42-T3",
          "trainingId": "V6-W42-T3",
          "trainingNumber": 3,
          "weekNumber": 42,
          "weekId": "marathon-v6-w42",
          "phaseId": "v6-phase-42",
          "phaseName": "Heropbouw + eerste MP",
          "date": null,
          "title": "Kort easy",
          "activityType": "run",
          "category": "rustige-duur",
          "role": "easy",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 1800,
          "totalPlannedLabel": "30 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 30,
          "plannedRunMinutes": 30,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Lichte run tussen de belastendere sessies; geen fast finish",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "5 + 20 + 5 = 30 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W42-T3-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W42-T3-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W42-T3-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W42-T3-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 1200,
                  "display": "20 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W42-T3-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W42-T3-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W42-T3-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W42-T3-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W42-T3-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W42-T3-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 1200,
                    "display": "20 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W42-T3-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W42-T3-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "5 min easy Vrij → 20 min easy Vrij → 5 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "7fa0d1c9f0f02be877dab43a57bd8750cfa2f471d39ae47de37269883b2adc3f"
        },
        {
          "workoutId": "V6-W42-T4",
          "trainingId": "V6-W42-T4",
          "trainingNumber": 4,
          "weekNumber": 42,
          "weekId": "marathon-v6-w42",
          "phaseId": "v6-phase-42",
          "phaseName": "Heropbouw + eerste MP",
          "date": null,
          "title": "Langere easy duur",
          "activityType": "run",
          "category": "lange-duur",
          "role": "long",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 5100,
          "totalPlannedLabel": "85 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 85,
          "plannedRunMinutes": 85,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Eerste uitbreiding van continue buitenduur; alle minuten easy. De duurstapregels uit §2 gelden",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "10 + 65 + 10 = 85 min. Geen repeats of apart herstelblok",
          "nutrition": "Oefen circa 30–45 g/u. Twee gels van 40 g op 20 en 60 min zijn samen 80 g = 56,5 g/u over 85 min; kies dit alleen als 50–60 g/u al vertrouwd is. Voor circa 30 g/u past één gel van 40 g tijdens de sessie (28,2 g/u)",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W42-T4-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W42-T4-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W42-T4-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W42-T4-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 3900,
                  "display": "65 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W42-T4-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W42-T4-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W42-T4-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W42-T4-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W42-T4-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W42-T4-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 3900,
                    "display": "65 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W42-T4-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W42-T4-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "10 min easy Vrij → 65 min easy Vrij → 10 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "a928f0b145cbd62048b6dd27bed09fdbf9be7b647372d38f36c361a2b59dcabe"
        },
        {
          "workoutId": "V6-W42-T5",
          "trainingId": "V6-W42-T5",
          "trainingNumber": 5,
          "weekNumber": 42,
          "weekId": "marathon-v6-w42",
          "phaseId": "v6-phase-42",
          "phaseName": "Heropbouw + eerste MP",
          "date": null,
          "title": "Rustig fietsen",
          "activityType": "bike",
          "category": "fiets",
          "role": "bike",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": false,
          "totalPlannedSeconds": 3600,
          "totalPlannedLabel": "60 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 60,
          "plannedRunMinutes": 0,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 60,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Aerobe ondersteuning; soepel fietsen, geen beenvermoeidheid najagen",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Fietsen / hometrainer",
          "outsideVariant": "Buiten fietsen of binnen op de hometrainer, met dezelfde duur en rustige inspanning.",
          "treadmillInstruction": "",
          "bikeInstruction": "kies Fietsen of Binnen fietsen, target Vrij; stel via activiteitinstellingen → Meldingen → Tijd een terugkerende melding op 10:00 min in. Rijd tot verstreken 10 min zeer licht, van 10 tot 50 min rustig, van 50 tot 60 min uittrappen; stop op 60:00. Bij een overgang zonder 10-min-melding lees je de totale timer en druk je desgewenst LAP. Als het Tijd-menu ontbreekt, gebruik dezelfde totale timer handmatig. Er wordt geen gegarandeerde Connect-fietsworkoutsync geclaimd",
          "hometrainerInstruction": "dezelfde tijden; lichte weerstand en comfortabele cadans, geen snelheidsdoel. Geen loopbandvariant voor fietsen",
          "durationCheck": "10 + 40 + 10 = 60 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W42-T5-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W42-T5-s1",
                  "name": "Warming-up",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Licht verzet; RPE 1–2",
                  "instruction": "Licht verzet; RPE 1–2",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W42-T5-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Fietsen",
              "segments": [
                {
                  "segmentId": "V6-W42-T5-s2",
                  "name": "Fietsen",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 2400,
                  "display": "40 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Rustig RPE 2–3; volledige zinnen",
                  "instruction": "Rustig RPE 2–3; volledige zinnen",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W42-T5-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W42-T5-s3",
                  "name": "Cooldown",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Rustig uittrappen; RPE 1–2",
                  "instruction": "Rustig uittrappen; RPE 1–2",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W42-T5-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W42-T5-s1",
                    "name": "Warming-up",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Licht verzet; RPE 1–2",
                    "instruction": "Licht verzet; RPE 1–2",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W42-T5-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Fietsen",
                "segments": [
                  {
                    "segmentId": "V6-W42-T5-s2",
                    "name": "Fietsen",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 2400,
                    "display": "40 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Rustig RPE 2–3; volledige zinnen",
                    "instruction": "Rustig RPE 2–3; volledige zinnen",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W42-T5-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W42-T5-s3",
                    "name": "Cooldown",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Rustig uittrappen; RPE 1–2",
                    "instruction": "Rustig uittrappen; RPE 1–2",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "10 min zeer rustig fietsen Vrij → 40 min rustig fietsen Vrij → 10 min zeer rustig fietsen Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "086c8f189c599b72e25f8957bc0344ba74bae46566e068eed2833843e4efa077"
        }
      ],
      "weekPhilosophy": {
        "theme": "Heropbouw + eerste MP",
        "summary": "Normale heropbouw na herstel; eerste korte MP-blokken. Eerste langere duur blijft geheel easy",
        "adaptations": [
          "SUB 4",
          "EIGEN DAGKEUZE"
        ],
        "why": [
          "Normale heropbouw na herstel; eerste korte MP-blokken. Eerste langere duur blijft geheel easy"
        ],
        "targetLink": "Sub 4:00 blijft het doel; checkpoints verfijnen de uitvoering zonder een eindtijdgarantie.",
        "whyNotMore": "Geen kilometerquotum, extra tests of late inhaalpiek. Langste duur maximaal 150 minuten; taper vanaf 9 november.",
        "confidence": "Vertrouwen komt uit goed verwerkte buitenweken, gecontroleerde MP en passend herstel."
      }
    },
    {
      "weekNumber": 43,
      "weekId": "marathon-v6-w43",
      "phaseId": "v6-phase-43",
      "phaseName": "Duur + specifiek ritme",
      "weekType": "Duur + specifiek ritme",
      "startDate": "2026-10-19",
      "endDate": "2026-10-25",
      "periodLabel": "19 oktober – 25 oktober",
      "focus": "Meer continue duur, iets langere MP-blokken. Deze weekstap alleen uitvoeren wanneer W42 werkelijk goed is verwerkt",
      "planningMode": "flexible",
      "includesMarathon": false,
      "plannedSessionMinutes": 245,
      "plannedRunMinutes": 245,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 50,
      "plannedMpMinutes": 24,
      "workouts": [
        {
          "workoutId": "V6-W43-T1",
          "trainingId": "V6-W43-T1",
          "trainingNumber": 1,
          "weekNumber": 43,
          "weekId": "marathon-v6-w43",
          "phaseId": "v6-phase-43",
          "phaseName": "Duur + specifiek ritme",
          "date": null,
          "title": "Easy duur",
          "activityType": "run",
          "category": "rustige-duur",
          "role": "easy",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 2400,
          "totalPlannedLabel": "40 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 40,
          "plannedRunMinutes": 40,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Rustige extra looptijd; gevoel gaat vóór tempo",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "5 + 30 + 5 = 40 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W43-T1-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W43-T1-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W43-T1-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W43-T1-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 1800,
                  "display": "30 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W43-T1-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W43-T1-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W43-T1-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W43-T1-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W43-T1-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W43-T1-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 1800,
                    "display": "30 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W43-T1-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W43-T1-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "5 min easy Vrij → 30 min easy Vrij → 5 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "7d4ad7fe8884dc20581a9e54b02ba48beecd5ad97ce31fbc0efbbfb83ba69847"
        },
        {
          "workoutId": "V6-W43-T2",
          "trainingId": "V6-W43-T2",
          "trainingNumber": 2,
          "weekNumber": 43,
          "weekId": "marathon-v6-w43",
          "phaseId": "v6-phase-43",
          "phaseName": "Duur + specifiek ritme",
          "date": null,
          "title": "MP opbouwen — 3×8 min",
          "activityType": "run",
          "category": "kwaliteit",
          "role": "marathonpace",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 3600,
          "totalPlannedLabel": "60 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 60,
          "plannedRunMinutes": 60,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 24,
          "targetRpe": "2–3 easy · 4–5 MP",
          "goal": "24 min gecontroleerd MP; houd hetzelfde praktische tempo als W42, geen sneller doel",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. MP 10,3–10,7 km/u (midden 10,5–10,6); warming-up/cooldown/jogherstel 7–8,5 km/u of eigen easy-snelheid. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "15 + 3×(8 + 3) + 12 = 60 min. Herstel ook na het laatste werkblok; geen extra repeats",
          "nutrition": "Desgewenst één gel oefenen tijdens warming-up/easy; tel hem mee bij de dagvoeding",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [
            "MARATHONPACE"
          ],
          "tone": "quality",
          "groups": [
            {
              "groupId": "V6-W43-T2-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W43-T2-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledig warm worden",
                  "instruction": "Easy RPE 2–3; volledig warm worden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W43-T2-g2",
              "kind": "repeat",
              "repetitions": 3,
              "label": "Werk + herstel",
              "segments": [
                {
                  "segmentId": "V6-W43-T2-s2",
                  "name": "Hardlopen",
                  "type": "marathonpace",
                  "basis": "time",
                  "durationSeconds": 480,
                  "display": "8 min",
                  "isRecovery": false,
                  "targetType": "Tempo",
                  "targetValue": "5:35–5:50/km",
                  "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                  "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    10.3,
                    10.7
                  ],
                  "speedKmh": 10.5,
                  "distanceKm": null
                },
                {
                  "segmentId": "V6-W43-T2-s3",
                  "name": "Herstel",
                  "type": "herstel",
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "isRecovery": true,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                  "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W43-T2-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W43-T2-s4",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 720,
                  "display": "12 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; geen versnelling",
                  "instruction": "Zeer easy RPE 2; geen versnelling",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W43-T2-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W43-T2-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 900,
                    "display": "15 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledig warm worden",
                    "instruction": "Easy RPE 2–3; volledig warm worden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W43-T2-g2",
                "kind": "repeat",
                "repetitions": 3,
                "label": "Werk + herstel",
                "segments": [
                  {
                    "segmentId": "V6-W43-T2-s2",
                    "name": "Hardlopen",
                    "type": "marathonpace",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 min",
                    "isRecovery": false,
                    "targetType": "Tempo",
                    "targetValue": "5:35–5:50/km",
                    "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                    "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      10.3,
                      10.7
                    ],
                    "speedKmh": 10.5,
                    "distanceKm": null
                  },
                  {
                    "segmentId": "V6-W43-T2-s3",
                    "name": "Herstel",
                    "type": "herstel",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 min",
                    "isRecovery": true,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                    "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W43-T2-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W43-T2-s4",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 720,
                    "display": "12 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; geen versnelling",
                    "instruction": "Zeer easy RPE 2; geen versnelling",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "15 min easy Vrij → REPEAT 3× [8 min @ 5:35–5:50/km + 3 min easy Vrij] → 12 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "d5640986981ea8be8f1559d02e272e5467eac37a4f93078461e03caec2849bc7"
        },
        {
          "workoutId": "V6-W43-T3",
          "trainingId": "V6-W43-T3",
          "trainingNumber": 3,
          "weekNumber": 43,
          "weekId": "marathon-v6-w43",
          "phaseId": "v6-phase-43",
          "phaseName": "Duur + specifiek ritme",
          "date": null,
          "title": "Kort easy",
          "activityType": "run",
          "category": "rustige-duur",
          "role": "easy",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 2100,
          "totalPlannedLabel": "35 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 35,
          "plannedRunMinutes": 35,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Herstel en frequentie ondersteunen",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "5 + 25 + 5 = 35 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W43-T3-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W43-T3-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W43-T3-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W43-T3-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 1500,
                  "display": "25 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W43-T3-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W43-T3-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W43-T3-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W43-T3-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W43-T3-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W43-T3-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 1500,
                    "display": "25 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W43-T3-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W43-T3-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "5 min easy Vrij → 25 min easy Vrij → 5 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "fc9947e0df21a6d63d556f04bdb7f345ea2cc473e5dd07874825af9ddbc1ea51"
        },
        {
          "workoutId": "V6-W43-T4",
          "trainingId": "V6-W43-T4",
          "trainingNumber": 4,
          "weekNumber": 43,
          "weekId": "marathon-v6-w43",
          "phaseId": "v6-phase-43",
          "phaseName": "Duur + specifiek ritme",
          "date": null,
          "title": "Lange easy duur",
          "activityType": "run",
          "category": "lange-duur",
          "role": "long",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 6600,
          "totalPlannedLabel": "110 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 110,
          "plannedRunMinutes": 110,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "25 min langer dan W42; laatste 20 min moeten technisch ontspannen blijven. Niet versnellen",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "10 + 90 + 10 = 110 min. Geen repeats of apart herstelblok",
          "nutrition": "Oefen circa 45–60 g/u. Twee gels van 40 g op 20 en 60 min = 43,6 g/u; drie op 15, 50 en 85 min = 65,5 g/u, alleen bij al bewezen tolerantie. Gebruik etiket en eventueel kleine geoefende porties drank om de gewenste inname te benaderen",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W43-T4-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W43-T4-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W43-T4-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W43-T4-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 5400,
                  "display": "90 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W43-T4-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W43-T4-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W43-T4-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W43-T4-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W43-T4-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W43-T4-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 5400,
                    "display": "90 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W43-T4-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W43-T4-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "10 min easy Vrij → 90 min easy Vrij → 10 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "bf74b51fefbe4e72fb0e006f615c886dbc9ba5bc4f9b561befb96d16347e0972"
        },
        {
          "workoutId": "V6-W43-T5",
          "trainingId": "V6-W43-T5",
          "trainingNumber": 5,
          "weekNumber": 43,
          "weekId": "marathon-v6-w43",
          "phaseId": "v6-phase-43",
          "phaseName": "Duur + specifiek ritme",
          "date": null,
          "title": "Rustig fietsen",
          "activityType": "bike",
          "category": "fiets",
          "role": "bike",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": false,
          "totalPlannedSeconds": 3000,
          "totalPlannedLabel": "50 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 50,
          "plannedRunMinutes": 0,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 50,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Fietstijd iets lager nu de loopbelasting groeit",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Fietsen / hometrainer",
          "outsideVariant": "Buiten fietsen of binnen op de hometrainer, met dezelfde duur en rustige inspanning.",
          "treadmillInstruction": "",
          "bikeInstruction": "kies Fietsen of Binnen fietsen, target Vrij; stel via activiteitinstellingen → Meldingen → Tijd een terugkerende melding op 10:00 min in. Rijd tot verstreken 10 min zeer licht, van 10 tot 40 min rustig, van 40 tot 50 min uittrappen; stop op 50:00. Bij een overgang zonder 10-min-melding lees je de totale timer en druk je desgewenst LAP. Als het Tijd-menu ontbreekt, gebruik dezelfde totale timer handmatig. Er wordt geen gegarandeerde Connect-fietsworkoutsync geclaimd",
          "hometrainerInstruction": "dezelfde tijden; lichte weerstand en comfortabele cadans, geen snelheidsdoel. Geen loopbandvariant voor fietsen",
          "durationCheck": "10 + 30 + 10 = 50 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W43-T5-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W43-T5-s1",
                  "name": "Warming-up",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Licht verzet; RPE 1–2",
                  "instruction": "Licht verzet; RPE 1–2",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W43-T5-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Fietsen",
              "segments": [
                {
                  "segmentId": "V6-W43-T5-s2",
                  "name": "Fietsen",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 1800,
                  "display": "30 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Rustig RPE 2–3; volledige zinnen",
                  "instruction": "Rustig RPE 2–3; volledige zinnen",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W43-T5-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W43-T5-s3",
                  "name": "Cooldown",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Rustig uittrappen; RPE 1–2",
                  "instruction": "Rustig uittrappen; RPE 1–2",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W43-T5-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W43-T5-s1",
                    "name": "Warming-up",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Licht verzet; RPE 1–2",
                    "instruction": "Licht verzet; RPE 1–2",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W43-T5-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Fietsen",
                "segments": [
                  {
                    "segmentId": "V6-W43-T5-s2",
                    "name": "Fietsen",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 1800,
                    "display": "30 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Rustig RPE 2–3; volledige zinnen",
                    "instruction": "Rustig RPE 2–3; volledige zinnen",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W43-T5-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W43-T5-s3",
                    "name": "Cooldown",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Rustig uittrappen; RPE 1–2",
                    "instruction": "Rustig uittrappen; RPE 1–2",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "10 min zeer rustig fietsen Vrij → 30 min rustig fietsen Vrij → 10 min zeer rustig fietsen Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "096811bfd1d5a13151b58165bea302bc1ee10b6d8099e860939cbc9da9253c0a"
        }
      ],
      "weekPhilosophy": {
        "theme": "Duur + specifiek ritme",
        "summary": "Meer continue duur, iets langere MP-blokken. Deze weekstap alleen uitvoeren wanneer W42 werkelijk goed is verwerkt",
        "adaptations": [
          "SUB 4",
          "EIGEN DAGKEUZE"
        ],
        "why": [
          "Meer continue duur, iets langere MP-blokken. Deze weekstap alleen uitvoeren wanneer W42 werkelijk goed is verwerkt"
        ],
        "targetLink": "Sub 4:00 blijft het doel; checkpoints verfijnen de uitvoering zonder een eindtijdgarantie.",
        "whyNotMore": "Geen kilometerquotum, extra tests of late inhaalpiek. Langste duur maximaal 150 minuten; taper vanaf 9 november.",
        "confidence": "Vertrouwen komt uit goed verwerkte buitenweken, gecontroleerde MP en passend herstel."
      }
    },
    {
      "weekNumber": 44,
      "weekId": "marathon-v6-w44",
      "phaseId": "v6-phase-44",
      "phaseName": "Specifieke opbouw",
      "weekType": "Specifieke opbouw",
      "startDate": "2026-10-26",
      "endDate": "2026-11-01",
      "periodLabel": "26 oktober – 1 november",
      "focus": "Belangrijkste specifieke opbouw: 30 min MP en 135 min lange easy. Houd liefst circa 72 uur tussen die sessies",
      "planningMode": "flexible",
      "includesMarathon": false,
      "plannedSessionMinutes": 275,
      "plannedRunMinutes": 275,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 45,
      "plannedMpMinutes": 30,
      "workouts": [
        {
          "workoutId": "V6-W44-T1",
          "trainingId": "V6-W44-T1",
          "trainingNumber": 1,
          "weekNumber": 44,
          "weekId": "marathon-v6-w44",
          "phaseId": "v6-phase-44",
          "phaseName": "Specifieke opbouw",
          "date": null,
          "title": "Easy duur",
          "activityType": "run",
          "category": "rustige-duur",
          "role": "easy",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 2400,
          "totalPlannedLabel": "40 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 40,
          "plannedRunMinutes": 40,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Rustig volume, niet harder omdat MP goed gaat",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "5 + 30 + 5 = 40 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W44-T1-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W44-T1-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W44-T1-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W44-T1-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 1800,
                  "display": "30 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W44-T1-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W44-T1-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W44-T1-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W44-T1-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W44-T1-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W44-T1-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 1800,
                    "display": "30 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W44-T1-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W44-T1-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "5 min easy Vrij → 30 min easy Vrij → 5 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "d433bc9aa7b8cc4a9b254ec9c7052ae23e00aac9501dc0a632bc59aa70a53b2a"
        },
        {
          "workoutId": "V6-W44-T2",
          "trainingId": "V6-W44-T2",
          "trainingNumber": 2,
          "weekNumber": 44,
          "weekId": "marathon-v6-w44",
          "phaseId": "v6-phase-44",
          "phaseName": "Specifieke opbouw",
          "date": null,
          "title": "Belangrijkste specifieke opbouw — 3×10 min",
          "activityType": "run",
          "category": "kwaliteit",
          "role": "marathonpace",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 3900,
          "totalPlannedLabel": "65 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 65,
          "plannedRunMinutes": 65,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 30,
          "targetRpe": "2–3 easy · 4–5 MP",
          "goal": "30 min totaal op sub-4-ritme; geen test tot uitputting. Vergelijk bloktempo, RPE, techniek en herstel",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. MP 10,3–10,7 km/u (midden 10,5–10,6); warming-up/cooldown/jogherstel 7–8,5 km/u of eigen easy-snelheid. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "15 + 3×(10 + 3) + 11 = 65 min. Herstel ook na het laatste werkblok; geen extra repeats",
          "nutrition": "Oefen één bekend gelmoment, bijvoorbeeld in warming-up; waterinname meenemen",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [
            "MARATHONPACE"
          ],
          "tone": "quality",
          "groups": [
            {
              "groupId": "V6-W44-T2-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W44-T2-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledig warm worden",
                  "instruction": "Easy RPE 2–3; volledig warm worden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W44-T2-g2",
              "kind": "repeat",
              "repetitions": 3,
              "label": "Werk + herstel",
              "segments": [
                {
                  "segmentId": "V6-W44-T2-s2",
                  "name": "Hardlopen",
                  "type": "marathonpace",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Tempo",
                  "targetValue": "5:35–5:50/km",
                  "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                  "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    10.3,
                    10.7
                  ],
                  "speedKmh": 10.5,
                  "distanceKm": null
                },
                {
                  "segmentId": "V6-W44-T2-s3",
                  "name": "Herstel",
                  "type": "herstel",
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "isRecovery": true,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                  "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W44-T2-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W44-T2-s4",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 660,
                  "display": "11 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; geen versnelling",
                  "instruction": "Zeer easy RPE 2; geen versnelling",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W44-T2-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W44-T2-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 900,
                    "display": "15 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledig warm worden",
                    "instruction": "Easy RPE 2–3; volledig warm worden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W44-T2-g2",
                "kind": "repeat",
                "repetitions": 3,
                "label": "Werk + herstel",
                "segments": [
                  {
                    "segmentId": "V6-W44-T2-s2",
                    "name": "Hardlopen",
                    "type": "marathonpace",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Tempo",
                    "targetValue": "5:35–5:50/km",
                    "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                    "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      10.3,
                      10.7
                    ],
                    "speedKmh": 10.5,
                    "distanceKm": null
                  },
                  {
                    "segmentId": "V6-W44-T2-s3",
                    "name": "Herstel",
                    "type": "herstel",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 min",
                    "isRecovery": true,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                    "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W44-T2-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W44-T2-s4",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 660,
                    "display": "11 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; geen versnelling",
                    "instruction": "Zeer easy RPE 2; geen versnelling",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "15 min easy Vrij → REPEAT 3× [10 min @ 5:35–5:50/km + 3 min easy Vrij] → 11 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "50314eb370661bb124d4ee8e54c2cf150eb13ae4a123fb6293a3c70ab31fcb0f"
        },
        {
          "workoutId": "V6-W44-T3",
          "trainingId": "V6-W44-T3",
          "trainingNumber": 3,
          "weekNumber": 44,
          "weekId": "marathon-v6-w44",
          "phaseId": "v6-phase-44",
          "phaseName": "Specifieke opbouw",
          "date": null,
          "title": "Kort easy",
          "activityType": "run",
          "category": "rustige-duur",
          "role": "easy",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 2100,
          "totalPlannedLabel": "35 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 35,
          "plannedRunMinutes": 35,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Soepel blijven; korter als de MP-sessie nadreunt",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "5 + 25 + 5 = 35 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W44-T3-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W44-T3-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W44-T3-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W44-T3-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 1500,
                  "display": "25 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W44-T3-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W44-T3-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W44-T3-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W44-T3-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W44-T3-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W44-T3-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 1500,
                    "display": "25 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W44-T3-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W44-T3-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "5 min easy Vrij → 25 min easy Vrij → 5 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "27da2986187df7741df45ff1a87c88094b3540055ed95a586b83f2f9f9520167"
        },
        {
          "workoutId": "V6-W44-T4",
          "trainingId": "V6-W44-T4",
          "trainingNumber": 4,
          "weekNumber": 44,
          "weekId": "marathon-v6-w44",
          "phaseId": "v6-phase-44",
          "phaseName": "Specifieke opbouw",
          "date": null,
          "title": "Lange easy duur",
          "activityType": "run",
          "category": "lange-duur",
          "role": "long",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 8100,
          "totalPlannedLabel": "135 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 135,
          "plannedRunMinutes": 135,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "2:15 uur tijd op de benen, zonder MP. Belangrijke informatie voor de readiness-evaluatie",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "10 + 115 + 10 = 135 min. Geen repeats of apart herstelblok",
          "nutrition": "Oefen circa 60–70 g/u indien W43 goed ging. Vier gels van 40 g op 15, 45, 75 en 105 min = 160 g / 2,25 uur = 71,1 g/u. Bij lagere tolerantie drie gels = 53,3 g/u; kies de vertrouwde variant",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W44-T4-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W44-T4-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W44-T4-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W44-T4-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 6900,
                  "display": "115 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W44-T4-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W44-T4-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W44-T4-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W44-T4-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W44-T4-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W44-T4-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 6900,
                    "display": "115 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W44-T4-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W44-T4-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "10 min easy Vrij → 115 min easy Vrij → 10 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "176688fe24285da1de71b77f263bf43b892e43e9d92813a97b033f1e5dd64fb0"
        },
        {
          "workoutId": "V6-W44-T5",
          "trainingId": "V6-W44-T5",
          "trainingNumber": 5,
          "weekNumber": 44,
          "weekId": "marathon-v6-w44",
          "phaseId": "v6-phase-44",
          "phaseName": "Specifieke opbouw",
          "date": null,
          "title": "Rustig fietsen",
          "activityType": "bike",
          "category": "fiets",
          "role": "bike",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": false,
          "totalPlannedSeconds": 2700,
          "totalPlannedLabel": "45 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 45,
          "plannedRunMinutes": 0,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 45,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Rustige ondersteuning; geen vervanging van de lange duur of MP",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Fietsen / hometrainer",
          "outsideVariant": "Buiten fietsen of binnen op de hometrainer, met dezelfde duur en rustige inspanning.",
          "treadmillInstruction": "",
          "bikeInstruction": "kies Fietsen of Binnen fietsen, target Vrij; stel via activiteitinstellingen → Meldingen → Tijd een terugkerende melding op 10:00 min in. Rijd tot verstreken 10 min zeer licht, van 10 tot 35 min rustig, van 35 tot 45 min uittrappen; stop op 45:00. Bij een overgang zonder 10-min-melding lees je de totale timer en druk je desgewenst LAP. Als het Tijd-menu ontbreekt, gebruik dezelfde totale timer handmatig. Er wordt geen gegarandeerde Connect-fietsworkoutsync geclaimd",
          "hometrainerInstruction": "dezelfde tijden; lichte weerstand en comfortabele cadans, geen snelheidsdoel. Geen loopbandvariant voor fietsen",
          "durationCheck": "10 + 25 + 10 = 45 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W44-T5-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W44-T5-s1",
                  "name": "Warming-up",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Licht verzet; RPE 1–2",
                  "instruction": "Licht verzet; RPE 1–2",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W44-T5-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Fietsen",
              "segments": [
                {
                  "segmentId": "V6-W44-T5-s2",
                  "name": "Fietsen",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 1500,
                  "display": "25 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Rustig RPE 2–3; volledige zinnen",
                  "instruction": "Rustig RPE 2–3; volledige zinnen",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W44-T5-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W44-T5-s3",
                  "name": "Cooldown",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Rustig uittrappen; RPE 1–2",
                  "instruction": "Rustig uittrappen; RPE 1–2",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W44-T5-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W44-T5-s1",
                    "name": "Warming-up",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Licht verzet; RPE 1–2",
                    "instruction": "Licht verzet; RPE 1–2",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W44-T5-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Fietsen",
                "segments": [
                  {
                    "segmentId": "V6-W44-T5-s2",
                    "name": "Fietsen",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 1500,
                    "display": "25 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Rustig RPE 2–3; volledige zinnen",
                    "instruction": "Rustig RPE 2–3; volledige zinnen",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W44-T5-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W44-T5-s3",
                    "name": "Cooldown",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Rustig uittrappen; RPE 1–2",
                    "instruction": "Rustig uittrappen; RPE 1–2",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "10 min zeer rustig fietsen Vrij → 25 min rustig fietsen Vrij → 10 min zeer rustig fietsen Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "75a5059ccd9cd10b7636bbea99c87311714a24278492f9ed2af291c41f6e338e"
        }
      ],
      "weekPhilosophy": {
        "theme": "Specifieke opbouw",
        "summary": "Belangrijkste specifieke opbouw: 30 min MP en 135 min lange easy. Houd liefst circa 72 uur tussen die sessies",
        "adaptations": [
          "SUB 4",
          "EIGEN DAGKEUZE"
        ],
        "why": [
          "Belangrijkste specifieke opbouw: 30 min MP en 135 min lange easy. Houd liefst circa 72 uur tussen die sessies"
        ],
        "targetLink": "Sub 4:00 blijft het doel; checkpoints verfijnen de uitvoering zonder een eindtijdgarantie.",
        "whyNotMore": "Geen kilometerquotum, extra tests of late inhaalpiek. Langste duur maximaal 150 minuten; taper vanaf 9 november.",
        "confidence": "Vertrouwen komt uit goed verwerkte buitenweken, gecontroleerde MP en passend herstel."
      }
    },
    {
      "weekNumber": 45,
      "weekId": "marathon-v6-w45",
      "phaseId": "v6-phase-45",
      "phaseName": "Consolideren",
      "weekType": "Consolideren",
      "startDate": "2026-11-02",
      "endDate": "2026-11-08",
      "periodLabel": "2 november – 8 november",
      "focus": "Weekvolume consolideren; laatste langere duur uiterlijk 8 november. Houd circa 72 uur tussen MP en lange duur, en 6–8 dagen tussen beide lange duurlopen",
      "planningMode": "flexible",
      "includesMarathon": false,
      "plannedSessionMinutes": 275,
      "plannedRunMinutes": 275,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 40,
      "plannedMpMinutes": 30,
      "workouts": [
        {
          "workoutId": "V6-W45-T1",
          "trainingId": "V6-W45-T1",
          "trainingNumber": 1,
          "weekNumber": 45,
          "weekId": "marathon-v6-w45",
          "phaseId": "v6-phase-45",
          "phaseName": "Consolideren",
          "date": null,
          "title": "Easy herstel",
          "activityType": "run",
          "category": "rustige-duur",
          "role": "easy",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 2100,
          "totalPlannedLabel": "35 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 35,
          "plannedRunMinutes": 35,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Ontspannen herstellen van de laatste opbouwweek",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "5 + 25 + 5 = 35 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W45-T1-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W45-T1-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W45-T1-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W45-T1-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 1500,
                  "display": "25 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W45-T1-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W45-T1-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W45-T1-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W45-T1-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W45-T1-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W45-T1-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 1500,
                    "display": "25 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W45-T1-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W45-T1-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "5 min easy Vrij → 25 min easy Vrij → 5 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "9bf49e385a6b1863e66785eff163537ae93f0db9b8c797c6b5eb9c60b1ad5699"
        },
        {
          "workoutId": "V6-W45-T2",
          "trainingId": "V6-W45-T2",
          "trainingNumber": 2,
          "weekNumber": 45,
          "weekId": "marathon-v6-w45",
          "phaseId": "v6-phase-45",
          "phaseName": "Consolideren",
          "date": null,
          "title": "Specifiek consolideren — 2×15 min",
          "activityType": "run",
          "category": "kwaliteit",
          "role": "marathonpace",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 3600,
          "totalPlannedLabel": "60 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 60,
          "plannedRunMinutes": 60,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 30,
          "targetRpe": "2–3 easy · 4–5 MP",
          "goal": "Nog steeds 30 min MP, nu langere aaneengesloten blokken. Zelfde tempo; totale sessie korter dan W44",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. MP 10,3–10,7 km/u (midden 10,5–10,6); warming-up/cooldown/jogherstel 7–8,5 km/u of eigen easy-snelheid. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "15 + 2×(15 + 3) + 9 = 60 min. Herstel ook na het laatste werkblok; geen extra repeats",
          "nutrition": "Oefen eventueel hetzelfde gelmoment als W44; niets nieuws toevoegen",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [
            "MARATHONPACE"
          ],
          "tone": "quality",
          "groups": [
            {
              "groupId": "V6-W45-T2-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W45-T2-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledig warm worden",
                  "instruction": "Easy RPE 2–3; volledig warm worden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W45-T2-g2",
              "kind": "repeat",
              "repetitions": 2,
              "label": "Werk + herstel",
              "segments": [
                {
                  "segmentId": "V6-W45-T2-s2",
                  "name": "Hardlopen",
                  "type": "marathonpace",
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "isRecovery": false,
                  "targetType": "Tempo",
                  "targetValue": "5:35–5:50/km",
                  "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                  "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    10.3,
                    10.7
                  ],
                  "speedKmh": 10.5,
                  "distanceKm": null
                },
                {
                  "segmentId": "V6-W45-T2-s3",
                  "name": "Herstel",
                  "type": "herstel",
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "isRecovery": true,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                  "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W45-T2-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W45-T2-s4",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 540,
                  "display": "9 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; geen versnelling",
                  "instruction": "Zeer easy RPE 2; geen versnelling",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W45-T2-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W45-T2-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 900,
                    "display": "15 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledig warm worden",
                    "instruction": "Easy RPE 2–3; volledig warm worden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W45-T2-g2",
                "kind": "repeat",
                "repetitions": 2,
                "label": "Werk + herstel",
                "segments": [
                  {
                    "segmentId": "V6-W45-T2-s2",
                    "name": "Hardlopen",
                    "type": "marathonpace",
                    "basis": "time",
                    "durationSeconds": 900,
                    "display": "15 min",
                    "isRecovery": false,
                    "targetType": "Tempo",
                    "targetValue": "5:35–5:50/km",
                    "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                    "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      10.3,
                      10.7
                    ],
                    "speedKmh": 10.5,
                    "distanceKm": null
                  },
                  {
                    "segmentId": "V6-W45-T2-s3",
                    "name": "Herstel",
                    "type": "herstel",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 min",
                    "isRecovery": true,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                    "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W45-T2-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W45-T2-s4",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 540,
                    "display": "9 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; geen versnelling",
                    "instruction": "Zeer easy RPE 2; geen versnelling",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "15 min easy Vrij → REPEAT 2× [15 min @ 5:35–5:50/km + 3 min easy Vrij] → 9 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "5dd8db8cc40495f024ea1d396c2e695186952b5547f316a3b1c8b87561c94979"
        },
        {
          "workoutId": "V6-W45-T3",
          "trainingId": "V6-W45-T3",
          "trainingNumber": 3,
          "weekNumber": 45,
          "weekId": "marathon-v6-w45",
          "phaseId": "v6-phase-45",
          "phaseName": "Consolideren",
          "date": null,
          "title": "Kort easy",
          "activityType": "run",
          "category": "rustige-duur",
          "role": "easy",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 1800,
          "totalPlannedLabel": "30 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 30,
          "plannedRunMinutes": 30,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Bewust kort; houdt het weekvolume gelijk terwijl de lange duur groeit",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "5 + 20 + 5 = 30 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W45-T3-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W45-T3-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W45-T3-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W45-T3-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 1200,
                  "display": "20 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W45-T3-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W45-T3-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W45-T3-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W45-T3-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W45-T3-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W45-T3-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 1200,
                    "display": "20 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W45-T3-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W45-T3-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "5 min easy Vrij → 20 min easy Vrij → 5 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "2588d0604600871c6624eafaaf0a633f50f2f613a645103b5870d6caac815442"
        },
        {
          "workoutId": "V6-W45-T4",
          "trainingId": "V6-W45-T4",
          "trainingNumber": 4,
          "weekNumber": 45,
          "weekId": "marathon-v6-w45",
          "phaseId": "v6-phase-45",
          "phaseName": "Consolideren",
          "date": null,
          "title": "Laatste langere duur — maximaal 2:30 uur",
          "activityType": "run",
          "category": "lange-duur",
          "role": "long",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 9000,
          "totalPlannedLabel": "150 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 150,
          "plannedRunMinutes": 150,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Uiterlijk 8 november. Helemaal easy, geen fast finish, geen verlenging naar 25–30 km. Alleen tot 150 min als 135 min goed is verwerkt",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "10 + 130 + 10 = 150 min. Geen repeats of apart herstelblok",
          "nutrition": "Generale repetitie van geoefend ontbijt, gels, drinken en kleding. Bij passende tolerantie 60–80 g/u. Vier gels van 40 g = 64 g/u; vijf = 80 g/u. Voor 80 g/u: gels op 15, 45, 75, 105 en 135 min. Bij 64 g/u: bijvoorbeeld 20, 55, 90 en 125 min. Sportdrank telt mee; voeg geen vijfde gel toe boven op een al passende drankinname",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W45-T4-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W45-T4-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W45-T4-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W45-T4-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 7800,
                  "display": "130 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W45-T4-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W45-T4-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W45-T4-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W45-T4-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W45-T4-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W45-T4-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 7800,
                    "display": "130 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W45-T4-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W45-T4-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "10 min easy Vrij → 130 min easy Vrij → 10 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "bd8a28fe8c43fb666a233a57605b7b86b3a9720482b9f88503c6461c46dfa4dd",
          "latestDate": "2026-11-08"
        },
        {
          "workoutId": "V6-W45-T5",
          "trainingId": "V6-W45-T5",
          "trainingNumber": 5,
          "weekNumber": 45,
          "weekId": "marathon-v6-w45",
          "phaseId": "v6-phase-45",
          "phaseName": "Consolideren",
          "date": null,
          "title": "Rustig fietsen",
          "activityType": "bike",
          "category": "fiets",
          "role": "bike",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": false,
          "totalPlannedSeconds": 2400,
          "totalPlannedLabel": "40 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 40,
          "plannedRunMinutes": 0,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 40,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Licht verzet; schrap als dit de laatste lange duur beïnvloedt",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Fietsen / hometrainer",
          "outsideVariant": "Buiten fietsen of binnen op de hometrainer, met dezelfde duur en rustige inspanning.",
          "treadmillInstruction": "",
          "bikeInstruction": "kies Fietsen of Binnen fietsen, target Vrij; stel via activiteitinstellingen → Meldingen → Tijd een terugkerende melding op 10:00 min in. Rijd tot verstreken 10 min zeer licht, van 10 tot 30 min rustig, van 30 tot 40 min uittrappen; stop op 40:00. Bij een overgang zonder 10-min-melding lees je de totale timer en druk je desgewenst LAP. Als het Tijd-menu ontbreekt, gebruik dezelfde totale timer handmatig. Er wordt geen gegarandeerde Connect-fietsworkoutsync geclaimd",
          "hometrainerInstruction": "dezelfde tijden; lichte weerstand en comfortabele cadans, geen snelheidsdoel. Geen loopbandvariant voor fietsen",
          "durationCheck": "10 + 20 + 10 = 40 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W45-T5-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W45-T5-s1",
                  "name": "Warming-up",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Licht verzet; RPE 1–2",
                  "instruction": "Licht verzet; RPE 1–2",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W45-T5-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Fietsen",
              "segments": [
                {
                  "segmentId": "V6-W45-T5-s2",
                  "name": "Fietsen",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 1200,
                  "display": "20 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Rustig RPE 2–3; volledige zinnen",
                  "instruction": "Rustig RPE 2–3; volledige zinnen",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W45-T5-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W45-T5-s3",
                  "name": "Cooldown",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Rustig uittrappen; RPE 1–2",
                  "instruction": "Rustig uittrappen; RPE 1–2",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W45-T5-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W45-T5-s1",
                    "name": "Warming-up",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Licht verzet; RPE 1–2",
                    "instruction": "Licht verzet; RPE 1–2",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W45-T5-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Fietsen",
                "segments": [
                  {
                    "segmentId": "V6-W45-T5-s2",
                    "name": "Fietsen",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 1200,
                    "display": "20 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Rustig RPE 2–3; volledige zinnen",
                    "instruction": "Rustig RPE 2–3; volledige zinnen",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W45-T5-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W45-T5-s3",
                    "name": "Cooldown",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Rustig uittrappen; RPE 1–2",
                    "instruction": "Rustig uittrappen; RPE 1–2",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "10 min zeer rustig fietsen Vrij → 20 min rustig fietsen Vrij → 10 min zeer rustig fietsen Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "d54044d3f0bf15904a7ebc1c244faca51b9117b0b53ea4ad50f397e3b1cc7ec1"
        }
      ],
      "weekPhilosophy": {
        "theme": "Consolideren",
        "summary": "Weekvolume consolideren; laatste langere duur uiterlijk 8 november. Houd circa 72 uur tussen MP en lange duur, en 6–8 dagen tussen beide lange duurlopen",
        "adaptations": [
          "SUB 4",
          "EIGEN DAGKEUZE"
        ],
        "why": [
          "Weekvolume consolideren; laatste langere duur uiterlijk 8 november. Houd circa 72 uur tussen MP en lange duur, en 6–8 dagen tussen beide lange duurlopen"
        ],
        "targetLink": "Sub 4:00 blijft het doel; checkpoints verfijnen de uitvoering zonder een eindtijdgarantie.",
        "whyNotMore": "Geen kilometerquotum, extra tests of late inhaalpiek. Langste duur maximaal 150 minuten; taper vanaf 9 november.",
        "confidence": "Vertrouwen komt uit goed verwerkte buitenweken, gecontroleerde MP en passend herstel."
      }
    },
    {
      "weekNumber": 46,
      "weekId": "marathon-v6-w46",
      "phaseId": "v6-phase-46",
      "phaseName": "Taper",
      "weekType": "Taper",
      "startDate": "2026-11-09",
      "endDate": "2026-11-15",
      "periodLabel": "9 november – 15 november",
      "focus": "Taper: vier korte loopcontacten; aanzienlijk minder duur, kleine MP-prikkel. Fietsen mag vervallen",
      "planningMode": "flexible",
      "includesMarathon": false,
      "plannedSessionMinutes": 170,
      "plannedRunMinutes": 170,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 30,
      "plannedMpMinutes": 12,
      "workouts": [
        {
          "workoutId": "V6-W46-T1",
          "trainingId": "V6-W46-T1",
          "trainingNumber": 1,
          "weekNumber": 46,
          "weekId": "marathon-v6-w46",
          "phaseId": "v6-phase-46",
          "phaseName": "Taper",
          "date": null,
          "title": "Easy taper",
          "activityType": "run",
          "category": "rustige-duur",
          "role": "easy",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 1800,
          "totalPlannedLabel": "30 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 30,
          "plannedRunMinutes": 30,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Frisheid belangrijker dan een weektotaal",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "5 + 20 + 5 = 30 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W46-T1-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W46-T1-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W46-T1-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W46-T1-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 1200,
                  "display": "20 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W46-T1-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W46-T1-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W46-T1-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W46-T1-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W46-T1-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W46-T1-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 1200,
                    "display": "20 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W46-T1-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W46-T1-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "5 min easy Vrij → 20 min easy Vrij → 5 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "8af1dba1143d31b96323fdb804788622965292d406300f46ac0496908fdaa920"
        },
        {
          "workoutId": "V6-W46-T2",
          "trainingId": "V6-W46-T2",
          "trainingNumber": 2,
          "weekNumber": 46,
          "weekId": "marathon-v6-w46",
          "phaseId": "v6-phase-46",
          "phaseName": "Taper",
          "date": null,
          "title": "MP onderhouden — 2×6 min",
          "activityType": "run",
          "category": "kwaliteit",
          "role": "marathonpace",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 2700,
          "totalPlannedLabel": "45 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 45,
          "plannedRunMinutes": 45,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 12,
          "targetRpe": "2–3 easy · 4–5 MP",
          "goal": "12 min MP voor ritme; eindig energiek. Niet sneller dan eerdere MP",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. MP 10,3–10,7 km/u (midden 10,5–10,6); warming-up/cooldown/jogherstel 7–8,5 km/u of eigen easy-snelheid. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "12 + 2×(6 + 3) + 15 = 45 min. Herstel ook na het laatste werkblok; geen extra repeats",
          "nutrition": "Geen voedingsproef nodig; vertrouwde routine",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [
            "MARATHONPACE"
          ],
          "tone": "quality",
          "groups": [
            {
              "groupId": "V6-W46-T2-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W46-T2-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 720,
                  "display": "12 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledig warm worden",
                  "instruction": "Easy RPE 2–3; volledig warm worden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W46-T2-g2",
              "kind": "repeat",
              "repetitions": 2,
              "label": "Werk + herstel",
              "segments": [
                {
                  "segmentId": "V6-W46-T2-s2",
                  "name": "Hardlopen",
                  "type": "marathonpace",
                  "basis": "time",
                  "durationSeconds": 360,
                  "display": "6 min",
                  "isRecovery": false,
                  "targetType": "Tempo",
                  "targetValue": "5:35–5:50/km",
                  "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                  "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    10.3,
                    10.7
                  ],
                  "speedKmh": 10.5,
                  "distanceKm": null
                },
                {
                  "segmentId": "V6-W46-T2-s3",
                  "name": "Herstel",
                  "type": "herstel",
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "isRecovery": true,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                  "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W46-T2-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W46-T2-s4",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; geen versnelling",
                  "instruction": "Zeer easy RPE 2; geen versnelling",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W46-T2-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W46-T2-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 720,
                    "display": "12 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledig warm worden",
                    "instruction": "Easy RPE 2–3; volledig warm worden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W46-T2-g2",
                "kind": "repeat",
                "repetitions": 2,
                "label": "Werk + herstel",
                "segments": [
                  {
                    "segmentId": "V6-W46-T2-s2",
                    "name": "Hardlopen",
                    "type": "marathonpace",
                    "basis": "time",
                    "durationSeconds": 360,
                    "display": "6 min",
                    "isRecovery": false,
                    "targetType": "Tempo",
                    "targetValue": "5:35–5:50/km",
                    "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                    "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      10.3,
                      10.7
                    ],
                    "speedKmh": 10.5,
                    "distanceKm": null
                  },
                  {
                    "segmentId": "V6-W46-T2-s3",
                    "name": "Herstel",
                    "type": "herstel",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 min",
                    "isRecovery": true,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                    "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W46-T2-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W46-T2-s4",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 900,
                    "display": "15 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; geen versnelling",
                    "instruction": "Zeer easy RPE 2; geen versnelling",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "12 min easy Vrij → REPEAT 2× [6 min @ 5:35–5:50/km + 3 min easy Vrij] → 15 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "4e894fe2e6e99bacdc2deae003f19404dec83dcc59d0123e703b6628f10e6939"
        },
        {
          "workoutId": "V6-W46-T3",
          "trainingId": "V6-W46-T3",
          "trainingNumber": 3,
          "weekNumber": 46,
          "weekId": "marathon-v6-w46",
          "phaseId": "v6-phase-46",
          "phaseName": "Taper",
          "date": null,
          "title": "Kort easy taper",
          "activityType": "run",
          "category": "rustige-duur",
          "role": "easy",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 1500,
          "totalPlannedLabel": "25 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 25,
          "plannedRunMinutes": 25,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Licht lopen, geen extra versnellingen",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "5 + 15 + 5 = 25 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W46-T3-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W46-T3-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W46-T3-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W46-T3-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W46-T3-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W46-T3-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W46-T3-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W46-T3-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W46-T3-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W46-T3-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 900,
                    "display": "15 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W46-T3-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W46-T3-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "5 min easy Vrij → 15 min easy Vrij → 5 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "e1a8127dd8b321bb06aa1ec994bf137f7a4eb062784df98f5b4f35e56e1caad1"
        },
        {
          "workoutId": "V6-W46-T4",
          "trainingId": "V6-W46-T4",
          "trainingNumber": 4,
          "weekNumber": 46,
          "weekId": "marathon-v6-w46",
          "phaseId": "v6-phase-46",
          "phaseName": "Taper",
          "date": null,
          "title": "Rustige verkorte duur",
          "activityType": "run",
          "category": "lange-duur",
          "role": "long",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 4200,
          "totalPlannedLabel": "70 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 70,
          "plannedRunMinutes": 70,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Onderhoud, geen nieuwe belastbaarheidstest. Zo plannen dat vóór de race voldoende herstel overblijft",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "10 + 50 + 10 = 70 min. Geen repeats of apart herstelblok",
          "nutrition": "Desgewenst één vertrouwde gel en water; geen hoge inname of nieuw product testen",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W46-T4-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W46-T4-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W46-T4-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W46-T4-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 3000,
                  "display": "50 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W46-T4-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W46-T4-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W46-T4-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W46-T4-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W46-T4-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W46-T4-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 3000,
                    "display": "50 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W46-T4-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W46-T4-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "10 min easy Vrij → 50 min easy Vrij → 10 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "d43079b5f84a4626b131c13c98c34db20496127f6ec124be1955abbdbde22d4c"
        },
        {
          "workoutId": "V6-W46-T5",
          "trainingId": "V6-W46-T5",
          "trainingNumber": 5,
          "weekNumber": 46,
          "weekId": "marathon-v6-w46",
          "phaseId": "v6-phase-46",
          "phaseName": "Taper",
          "date": null,
          "title": "Rustig fietsen",
          "activityType": "bike",
          "category": "fiets",
          "role": "bike",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": false,
          "totalPlannedSeconds": 1800,
          "totalPlannedLabel": "30 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 30,
          "plannedRunMinutes": 0,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 30,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Alleen als het ontspant; bij vermoeide benen laten vervallen",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Fietsen / hometrainer",
          "outsideVariant": "Buiten fietsen of binnen op de hometrainer, met dezelfde duur en rustige inspanning.",
          "treadmillInstruction": "",
          "bikeInstruction": "kies Fietsen of Binnen fietsen, target Vrij; stel via activiteitinstellingen → Meldingen → Tijd een terugkerende melding op 10:00 min in. Rijd tot verstreken 10 min zeer licht, van 10 tot 20 min rustig, van 20 tot 30 min uittrappen; stop op 30:00. Bij een overgang zonder 10-min-melding lees je de totale timer en druk je desgewenst LAP. Als het Tijd-menu ontbreekt, gebruik dezelfde totale timer handmatig. Er wordt geen gegarandeerde Connect-fietsworkoutsync geclaimd",
          "hometrainerInstruction": "dezelfde tijden; lichte weerstand en comfortabele cadans, geen snelheidsdoel. Geen loopbandvariant voor fietsen",
          "durationCheck": "10 + 10 + 10 = 30 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W46-T5-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W46-T5-s1",
                  "name": "Warming-up",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Licht verzet; RPE 1–2",
                  "instruction": "Licht verzet; RPE 1–2",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W46-T5-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Fietsen",
              "segments": [
                {
                  "segmentId": "V6-W46-T5-s2",
                  "name": "Fietsen",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Rustig RPE 2–3; volledige zinnen",
                  "instruction": "Rustig RPE 2–3; volledige zinnen",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W46-T5-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W46-T5-s3",
                  "name": "Cooldown",
                  "type": "fiets",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Rustig uittrappen; RPE 1–2",
                  "instruction": "Rustig uittrappen; RPE 1–2",
                  "inclinePercent": null,
                  "speedRangeKmh": null,
                  "speedKmh": null,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W46-T5-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W46-T5-s1",
                    "name": "Warming-up",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Licht verzet; RPE 1–2",
                    "instruction": "Licht verzet; RPE 1–2",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W46-T5-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Fietsen",
                "segments": [
                  {
                    "segmentId": "V6-W46-T5-s2",
                    "name": "Fietsen",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Rustig RPE 2–3; volledige zinnen",
                    "instruction": "Rustig RPE 2–3; volledige zinnen",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W46-T5-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W46-T5-s3",
                    "name": "Cooldown",
                    "type": "fiets",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Rustig uittrappen; RPE 1–2",
                    "instruction": "Rustig uittrappen; RPE 1–2",
                    "inclinePercent": null,
                    "speedRangeKmh": null,
                    "speedKmh": null,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "10 min zeer rustig fietsen Vrij → 10 min rustig fietsen Vrij → 10 min zeer rustig fietsen Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "77e735c14bacc255d7e9b7e7ca74b6d0d572ae672d9d3aa9e1a4373dd5979946"
        }
      ],
      "weekPhilosophy": {
        "theme": "Taper",
        "summary": "Taper: vier korte loopcontacten; aanzienlijk minder duur, kleine MP-prikkel. Fietsen mag vervallen",
        "adaptations": [
          "SUB 4",
          "EIGEN DAGKEUZE"
        ],
        "why": [
          "Taper: vier korte loopcontacten; aanzienlijk minder duur, kleine MP-prikkel. Fietsen mag vervallen"
        ],
        "targetLink": "Sub 4:00 blijft het doel; checkpoints verfijnen de uitvoering zonder een eindtijdgarantie.",
        "whyNotMore": "Geen kilometerquotum, extra tests of late inhaalpiek. Langste duur maximaal 150 minuten; taper vanaf 9 november.",
        "confidence": "Vertrouwen komt uit goed verwerkte buitenweken, gecontroleerde MP en passend herstel."
      }
    },
    {
      "weekNumber": 47,
      "weekId": "marathon-v6-w47",
      "phaseId": "v6-phase-47",
      "phaseName": "Marathonweek",
      "weekType": "Marathonweek",
      "startDate": "2026-11-16",
      "endDate": "2026-11-22",
      "periodLabel": "16 november – 22 november",
      "focus": "Raceweek: drie korte runs vóór de race, geen fietsen. Training 4 is de marathon op zondag 22 november; geen training 5",
      "planningMode": "flexible",
      "includesMarathon": true,
      "plannedSessionMinutes": 70,
      "plannedRunMinutes": 70,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 6,
      "workouts": [
        {
          "workoutId": "V6-W47-T1",
          "trainingId": "V6-W47-T1",
          "trainingNumber": 1,
          "weekNumber": 47,
          "weekId": "marathon-v6-w47",
          "phaseId": "v6-phase-47",
          "phaseName": "Marathonweek",
          "date": null,
          "title": "Easy raceweek",
          "activityType": "run",
          "category": "rustige-duur",
          "role": "easy",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 1500,
          "totalPlannedLabel": "25 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 25,
          "plannedRunMinutes": 25,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "Vroeg in de raceweek, ontspannen en zonder testgevoel",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "5 + 15 + 5 = 25 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W47-T1-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W47-T1-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W47-T1-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W47-T1-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W47-T1-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W47-T1-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W47-T1-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W47-T1-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W47-T1-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W47-T1-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 900,
                    "display": "15 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W47-T1-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W47-T1-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "5 min easy Vrij → 15 min easy Vrij → 5 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "a41875a6d07020ea843bf4d4b149abbb1cb2c21368f9595f061eeb3fcb8a724e"
        },
        {
          "workoutId": "V6-W47-T2",
          "trainingId": "V6-W47-T2",
          "trainingNumber": 2,
          "weekNumber": 47,
          "weekId": "marathon-v6-w47",
          "phaseId": "v6-phase-47",
          "phaseName": "Marathonweek",
          "date": null,
          "title": "Kort MP-ritme — 2×3 min",
          "activityType": "run",
          "category": "kwaliteit",
          "role": "marathonpace",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 1800,
          "totalPlannedLabel": "30 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 30,
          "plannedRunMinutes": 30,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 6,
          "targetRpe": "2–3 easy · 4–5 MP",
          "goal": "Bij voorkeur 3–4 dagen vóór de race, uiterlijk 19 november. Slechts 6 min MP; geen vermoeidheid opbouwen",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. MP 10,3–10,7 km/u (midden 10,5–10,6); warming-up/cooldown/jogherstel 7–8,5 km/u of eigen easy-snelheid. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "10 + 2×(3 + 2) + 10 = 30 min. Herstel ook na het laatste werkblok; geen extra repeats",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [
            "MARATHONPACE"
          ],
          "tone": "quality",
          "groups": [
            {
              "groupId": "V6-W47-T2-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W47-T2-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledig warm worden",
                  "instruction": "Easy RPE 2–3; volledig warm worden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W47-T2-g2",
              "kind": "repeat",
              "repetitions": 2,
              "label": "Werk + herstel",
              "segments": [
                {
                  "segmentId": "V6-W47-T2-s2",
                  "name": "Hardlopen",
                  "type": "marathonpace",
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "isRecovery": false,
                  "targetType": "Tempo",
                  "targetValue": "5:35–5:50/km",
                  "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                  "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    10.3,
                    10.7
                  ],
                  "speedKmh": 10.5,
                  "distanceKm": null
                },
                {
                  "segmentId": "V6-W47-T2-s3",
                  "name": "Herstel",
                  "type": "herstel",
                  "basis": "time",
                  "durationSeconds": 120,
                  "display": "2 min",
                  "isRecovery": true,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                  "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W47-T2-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W47-T2-s4",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; geen versnelling",
                  "instruction": "Zeer easy RPE 2; geen versnelling",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W47-T2-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W47-T2-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledig warm worden",
                    "instruction": "Easy RPE 2–3; volledig warm worden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W47-T2-g2",
                "kind": "repeat",
                "repetitions": 2,
                "label": "Werk + herstel",
                "segments": [
                  {
                    "segmentId": "V6-W47-T2-s2",
                    "name": "Hardlopen",
                    "type": "marathonpace",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 min",
                    "isRecovery": false,
                    "targetType": "Tempo",
                    "targetValue": "5:35–5:50/km",
                    "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                    "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      10.3,
                      10.7
                    ],
                    "speedKmh": 10.5,
                    "distanceKm": null
                  },
                  {
                    "segmentId": "V6-W47-T2-s3",
                    "name": "Herstel",
                    "type": "herstel",
                    "basis": "time",
                    "durationSeconds": 120,
                    "display": "2 min",
                    "isRecovery": true,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                    "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W47-T2-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W47-T2-s4",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; geen versnelling",
                    "instruction": "Zeer easy RPE 2; geen versnelling",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "10 min easy Vrij → REPEAT 2× [3 min @ 5:35–5:50/km + 2 min easy Vrij] → 10 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "bbd587ad7de84b4dc93b1e2d6e186e9f6b00f28044a933271ace804475703e8d",
          "latestDate": "2026-11-19"
        },
        {
          "workoutId": "V6-W47-T3",
          "trainingId": "V6-W47-T3",
          "trainingNumber": 3,
          "weekNumber": 47,
          "weekId": "marathon-v6-w47",
          "phaseId": "v6-phase-47",
          "phaseName": "Marathonweek",
          "date": null,
          "title": "Optionele shakeout",
          "activityType": "run",
          "category": "rustige-duur",
          "role": "easy",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": true,
          "totalPlannedSeconds": 900,
          "totalPlannedLabel": "15 min",
          "estimatedDistanceKm": null,
          "estimatedDistanceLabel": "Geen kilometerdoel",
          "plannedSessionMinutes": 15,
          "plannedRunMinutes": 15,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "2–3",
          "goal": "1–2 dagen vóór de race als dit je prettig laat voelen. Overslaan mag; geen compensatie. Geen verplichte strides",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Outdoor / Garmin · loopband als alternatief",
          "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
          "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "5 + 5 + 5 = 15 min. Geen repeats of apart herstelblok",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [
            "OPTIONEEL"
          ],
          "tone": "easy",
          "groups": [
            {
              "groupId": "V6-W47-T3-g1",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Warming-up",
              "segments": [
                {
                  "segmentId": "V6-W47-T3-s1",
                  "name": "Warming-up",
                  "type": "warming-up",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; soepel starten",
                  "instruction": "Zeer easy RPE 2; soepel starten",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W47-T3-g2",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Hardlopen",
              "segments": [
                {
                  "segmentId": "V6-W47-T3-s2",
                  "name": "Hardlopen",
                  "type": "easy",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Easy RPE 2–3; volledige zinnen",
                  "instruction": "Easy RPE 2–3; volledige zinnen",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    9.5
                  ],
                  "speedKmh": 8.25,
                  "distanceKm": null
                }
              ]
            },
            {
              "groupId": "V6-W47-T3-g3",
              "kind": "sequence",
              "repetitions": 1,
              "label": "Cooldown",
              "segments": [
                {
                  "segmentId": "V6-W47-T3-s3",
                  "name": "Cooldown",
                  "type": "cooling-down",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "isRecovery": false,
                  "targetType": "Vrij",
                  "targetValue": null,
                  "cue": "Zeer easy RPE 2; ontspannen afronden",
                  "instruction": "Zeer easy RPE 2; ontspannen afronden",
                  "inclinePercent": 0,
                  "speedRangeKmh": [
                    7,
                    8.5
                  ],
                  "speedKmh": 7.75,
                  "distanceKm": null
                }
              ]
            }
          ],
          "garmin": {
            "groups": [
              {
                "groupId": "V6-W47-T3-g1",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Warming-up",
                "segments": [
                  {
                    "segmentId": "V6-W47-T3-s1",
                    "name": "Warming-up",
                    "type": "warming-up",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; soepel starten",
                    "instruction": "Zeer easy RPE 2; soepel starten",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W47-T3-g2",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Hardlopen",
                "segments": [
                  {
                    "segmentId": "V6-W47-T3-s2",
                    "name": "Hardlopen",
                    "type": "easy",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Easy RPE 2–3; volledige zinnen",
                    "instruction": "Easy RPE 2–3; volledige zinnen",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      9.5
                    ],
                    "speedKmh": 8.25,
                    "distanceKm": null
                  }
                ]
              },
              {
                "groupId": "V6-W47-T3-g3",
                "kind": "sequence",
                "repetitions": 1,
                "label": "Cooldown",
                "segments": [
                  {
                    "segmentId": "V6-W47-T3-s3",
                    "name": "Cooldown",
                    "type": "cooling-down",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 min",
                    "isRecovery": false,
                    "targetType": "Vrij",
                    "targetValue": null,
                    "cue": "Zeer easy RPE 2; ontspannen afronden",
                    "instruction": "Zeer easy RPE 2; ontspannen afronden",
                    "inclinePercent": 0,
                    "speedRangeKmh": [
                      7,
                      8.5
                    ],
                    "speedKmh": 7.75,
                    "distanceKm": null
                  }
                ]
              }
            ],
            "programSummary": "5 min easy Vrij → 5 min easy Vrij → 5 min easy Vrij",
            "referenceDistanceLabel": "Geen afstandsdoel",
            "isRacePlan": false
          },
          "protocolSignature": "4ffcce110cb85ce365ddfab3c8763ff2bf59baecaa58ac448cb082d52540767b"
        },
        {
          "workoutId": "V6-W47-T4-RACE",
          "trainingId": "V6-W47-T4-RACE",
          "trainingNumber": 4,
          "weekNumber": 47,
          "weekId": "marathon-v6-w47",
          "phaseId": "v6-phase-47",
          "phaseName": "Marathonweek",
          "date": "2026-11-22",
          "title": "Marathon",
          "activityType": "race",
          "category": "wedstrijd",
          "role": "race",
          "surface": "buiten",
          "defaultExecutionMode": "garmin",
          "treadmillAvailable": false,
          "totalPlannedSeconds": null,
          "totalPlannedLabel": "Tot officiële finish",
          "estimatedDistanceKm": 42.195,
          "estimatedDistanceLabel": "42,195 km",
          "plannedSessionMinutes": 0,
          "plannedRunMinutes": 0,
          "plannedWalkMinutes": 0,
          "plannedBikeMinutes": 0,
          "plannedMpMinutes": 0,
          "targetRpe": "Gecontroleerd starten",
          "goal": "Sub 4:00 op de officiële route; uitvoeren wat goed is geoefend.",
          "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
          "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
          "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
          "locationStatus": "Buitenwedstrijd",
          "outsideVariant": "Buiten op de officiële route. De officiële finish beëindigt de race, niet 42,195 GPS-kilometer.",
          "treadmillInstruction": "",
          "bikeInstruction": "",
          "hometrainerInstruction": "",
          "durationCheck": "",
          "nutrition": "",
          "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
          "labels": [
            "RACE"
          ],
          "tone": "race",
          "groups": [],
          "garmin": {
            "groups": [],
            "programSummary": "5 min wandelen Vrij vóór start, apart → Hardlopen-activiteit tot officiële finish; Auto Pause UIT; geen repeats; rondetempo + gemiddelde tempo + verstreken tijd + afstand → STOP op finish → 5 min wandelen Vrij, apart",
            "referenceDistanceLabel": "42,195 km officieel",
            "isRacePlan": true,
            "raceGuidance": [
              "Primair doel: onder 4:00:00 op de officiële 42,195 km; richtpunt 3:59:xx of iets sneller als de training dat ondersteunt. Gebruik de tijdsdefinitie van de organisator (netto/bruto) bij de uiteindelijke beoordeling; neem niet aan dat startvakvertraging gratis is in iedere uitslag. Geen tijd bankieren met een snelle eerste helft.",
              "Exacte vieruursgrens: 5:41,27/km. Onder vier uur vraagt een iets lager gemiddelde, inclusief alle vertragingen.",
              "5:41/km over exact 42,195 km is circa 3:59:49: slechts ongeveer 11 sec marge.",
              "5:40/km over exact 42,195 km is circa 3:59:06: ongeveer 54 sec marge.",
              "De trainingsrange 5:35–5:50/km dient voor bruikbare workoutsturing; hij is veel te ruim als eindtijdstrategie. In gunstige omstandigheden rond 5:40/km werkelijk gemiddeld mikken, met beperkte normale schommelingen.",
              "GPS kan te veel of te weinig afstand meten, en je loopt vaak iets meer dan de kortste gecertificeerde lijn. Daarom gaat verstreken tijd bij officiële afstandsmarkeringen vóór een GPS-gemiddelde dat exact 5:40 toont. Bijvoorbeeld: 42,5 GPS-km op gemiddeld 5:40 geeft al circa 4:00:50. Je hoeft niet voortdurend sneller te rennen om ruis te corrigeren; loop vloeiend, neem nette bochten en controleer periodiek officiële tussentijden.",
              "Rekenvoorbeeld, geen seconde-voor-seconde opdracht: eerste 5 km op 5:43/km, daarna 5:40/km:",
              "Dit voorbeeld heeft maar circa 39 sec marge voor stops en omwegen. Voeding/water pakken daarom vooraf oefenen; niet harder starten om een denkbeeldige stopvoorraad te creëren. Vallen de eerste kilometers duidelijk langzamer uit, beoordeel of het beheerst vervolgen van sub-4 nog verstandig is. Geen grote tempoversnelling om de achterstand onmiddellijk weg te poetsen.",
              "Programmeer in Garmin als: 5 min wandelen Vrij vóór start, apart → Hardlopen-activiteit tot officiële finish; Auto Pause UIT; geen repeats; rondetempo + gemiddelde tempo + verstreken tijd + afstand → STOP op finish → 5 min wandelen Vrij, apart.",
              "Gebruik Auto Lap 1 km voor praktische rondetempo's. Zet meldingen op km indien gewenst; geen zone-alert. Een tempoalert 5:35–5:50 kan als ruime attentiemarge, maar is optioneel en garandeert geen racegemiddelde. Kijk niet steeds naar instant pace. Controleer om de 5 km de officiële afstand en verstreken tijd; handmatige rondeknop bij markeringen kan ook, maar zet dan Auto Lap uit om dubbele/onlogische rondes te voorkomen. Kies één methode die je vóór de race hebt geoefend.",
              "Als je een Connect-workout wilt: maak één stap Hardlopen → Duur: Rondeknop indrukken → Doel: Tempo 5:35–5:50/km, zonder repeats en zonder ingebouwde warming-up/cooldown. Start bij de startlijn en stop de activiteit bij de officiële finish; druk niet onderweg op LAP om deze oneindige racewerkstap te beëindigen. Dit geeft globale sturing, geen automatische fasesplits. Geen GPS-workout die zichzelf bij 42,195 gemeten km beëindigt; de officiële finish is leidend. De gewone activiteit blijft praktisch het eenvoudigst.",
              "Voeding: voer het best geoefende patroon uit §6 uit. Gebruik een geoefende tijdmelding of bekende officiële kilometerpunten als geheugensteun; menu/alertinstelling vóór de race testen. Hartslag via H9 observeren, geen ongeteste universele bovengrens.",
              "Als circa 5:40 al vóór 10–15 km ongewoon zwaar voelt: vertraag direct circa 10–20 sec/km en beoordeel opnieuw. Blijft het te zwaar, laat het tijdsdoel tijdens die race los; niet doorjagen om het trainingsdoel op papier te redden. Het sub-4-doel van de voorbereiding verplicht niet tot een onverstandig racebesluit.",
              "Run-walk is fallback, bijvoorbeeld een geoefende verhouding 4 min rustig lopen / 1 min wandelen wanneer continu lopen niet meer beheerst gaat en er geen stopreden is. Het looptempo is dan niet hetzelfde als het gemiddelde inclusief wandelen; ga niet sneller lopen om wandelverlies te compenseren. Onder deze fallback is sub-4 niet langer de veronderstelling. Bij lokale toenemende pijn, manken of duidelijke verslechtering stoppen en hulp inschakelen; wandelen is geen manier om die stopregel te ontwijken. Geen loopbandmarathon als vervangende race toevoegen."
            ]
          },
          "protocolSignature": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
        }
      ],
      "weekPhilosophy": {
        "theme": "Marathonweek",
        "summary": "Raceweek: drie korte runs vóór de race, geen fietsen. Training 4 is de marathon op zondag 22 november; geen training 5",
        "adaptations": [
          "SUB 4",
          "EIGEN DAGKEUZE"
        ],
        "why": [
          "Raceweek: drie korte runs vóór de race, geen fietsen. Training 4 is de marathon op zondag 22 november; geen training 5"
        ],
        "targetLink": "Sub 4:00 blijft het doel; checkpoints verfijnen de uitvoering zonder een eindtijdgarantie.",
        "whyNotMore": "Geen kilometerquotum, extra tests of late inhaalpiek. Langste duur maximaal 150 minuten; taper vanaf 9 november.",
        "confidence": "Vertrouwen komt uit goed verwerkte buitenweken, gecontroleerde MP en passend herstel."
      }
    }
  ],
  "allWorkouts": [
    {
      "workoutId": "V6-W41-T1",
      "trainingId": "V6-W41-T1",
      "trainingNumber": 1,
      "weekNumber": 41,
      "weekId": "marathon-v6-w41",
      "phaseId": "v6-phase-41",
      "phaseName": "Actief herstel",
      "date": null,
      "title": "Easy herstel",
      "activityType": "run",
      "category": "rustige-duur",
      "role": "easy",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 1800,
      "totalPlannedLabel": "30 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 30,
      "plannedRunMinutes": 30,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Loopritme behouden; eindig met reserve",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "5 + 20 + 5 = 30 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W41-T1-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W41-T1-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W41-T1-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W41-T1-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 1200,
              "display": "20 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W41-T1-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W41-T1-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W41-T1-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W41-T1-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W41-T1-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W41-T1-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 1200,
                "display": "20 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W41-T1-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W41-T1-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "5 min easy Vrij → 20 min easy Vrij → 5 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "cba614f5d1b28ace3b28b02a6079737a6f1ea77ea534dc417ca53a94fcb34f49"
    },
    {
      "workoutId": "V6-W41-T2",
      "trainingId": "V6-W41-T2",
      "trainingNumber": 2,
      "weekNumber": 41,
      "weekId": "marathon-v6-w41",
      "phaseId": "v6-phase-41",
      "phaseName": "Actief herstel",
      "date": null,
      "title": "Ontspannen continu",
      "activityType": "run",
      "category": "rustige-duur",
      "role": "easy",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 3600,
      "totalPlannedLabel": "60 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 60,
      "plannedRunMinutes": 60,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Alleen de volledige 60 min als dit comfortabel voelt. Geen test; bij zware benen 30–45 min en zonder tempo-eis afronden",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "5 + 50 + 5 = 60 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W41-T2-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W41-T2-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W41-T2-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W41-T2-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 3000,
              "display": "50 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W41-T2-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W41-T2-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W41-T2-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W41-T2-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W41-T2-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W41-T2-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 3000,
                "display": "50 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W41-T2-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W41-T2-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "5 min easy Vrij → 50 min easy Vrij → 5 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "42b5d91831adb26e22e6e80a0ac60cc2fda2edb8fc0d0e100e0a6f75dcbad178"
    },
    {
      "workoutId": "V6-W41-T3",
      "trainingId": "V6-W41-T3",
      "trainingNumber": 3,
      "weekNumber": 41,
      "weekId": "marathon-v6-w41",
      "phaseId": "v6-phase-41",
      "phaseName": "Actief herstel",
      "date": null,
      "title": "Easy herstel",
      "activityType": "run",
      "category": "rustige-duur",
      "role": "easy",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 1800,
      "totalPlannedLabel": "30 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 30,
      "plannedRunMinutes": 30,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Benen soepel houden. Geen strides deze herstelweek",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "5 + 20 + 5 = 30 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W41-T3-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W41-T3-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W41-T3-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W41-T3-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 1200,
              "display": "20 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W41-T3-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W41-T3-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W41-T3-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W41-T3-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W41-T3-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W41-T3-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 1200,
                "display": "20 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W41-T3-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W41-T3-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "5 min easy Vrij → 20 min easy Vrij → 5 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "4ce6efcb107c2004fe6672e2a65673ba9f73d1c9262a953d2daf4c046e2dcf68"
    },
    {
      "workoutId": "V6-W41-T4",
      "trainingId": "V6-W41-T4",
      "trainingNumber": 4,
      "weekNumber": 41,
      "weekId": "marathon-v6-w41",
      "phaseId": "v6-phase-41",
      "phaseName": "Actief herstel",
      "date": null,
      "title": "Rustige run-walk",
      "activityType": "run",
      "category": "lange-duur",
      "role": "runwalk",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 3900,
      "totalPlannedLabel": "65 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 65,
      "plannedRunMinutes": 44,
      "plannedWalkMinutes": 21,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "44 min lopen + 21 min wandelen. De 1 min wandelen hoort ook bij de laatste herhaling. Geen extra jogminuten",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Loopblokken 7–9 km/u; alle wandelstappen 4–5,5 km/u, naar comfort. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "5 + 11×(4 + 1) + 5 = 65 min. Herstel ook na het laatste werkblok; geen extra repeats",
      "nutrition": "Water naar behoefte; desgewenst één bekend voedingsmoment, geen hoge inname afdwingen",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [
        "RUN-WALK"
      ],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W41-T4-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W41-T4-s1",
              "name": "Warming-up",
              "type": "wandelen",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Wandelen, rustig starten",
              "instruction": "Wandelen, rustig starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                4,
                5.5
              ],
              "speedKmh": 4.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W41-T4-g2",
          "kind": "repeat",
          "repetitions": 11,
          "label": "Werk + herstel",
          "segments": [
            {
              "segmentId": "V6-W41-T4-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 240,
              "display": "4 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9
              ],
              "speedKmh": 8,
              "distanceKm": null
            },
            {
              "segmentId": "V6-W41-T4-s3",
              "name": "Herstel",
              "type": "wandelen",
              "basis": "time",
              "durationSeconds": 60,
              "display": "1 min",
              "isRecovery": true,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Wandelen, ontspannen",
              "instruction": "Wandelen, ontspannen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                4,
                5.5
              ],
              "speedKmh": 4.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W41-T4-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W41-T4-s4",
              "name": "Cooldown",
              "type": "wandelen",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Wandelen, rustig afronden",
              "instruction": "Wandelen, rustig afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                4,
                5.5
              ],
              "speedKmh": 4.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W41-T4-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W41-T4-s1",
                "name": "Warming-up",
                "type": "wandelen",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Wandelen, rustig starten",
                "instruction": "Wandelen, rustig starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  4,
                  5.5
                ],
                "speedKmh": 4.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W41-T4-g2",
            "kind": "repeat",
            "repetitions": 11,
            "label": "Werk + herstel",
            "segments": [
              {
                "segmentId": "V6-W41-T4-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 240,
                "display": "4 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9
                ],
                "speedKmh": 8,
                "distanceKm": null
              },
              {
                "segmentId": "V6-W41-T4-s3",
                "name": "Herstel",
                "type": "wandelen",
                "basis": "time",
                "durationSeconds": 60,
                "display": "1 min",
                "isRecovery": true,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Wandelen, ontspannen",
                "instruction": "Wandelen, ontspannen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  4,
                  5.5
                ],
                "speedKmh": 4.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W41-T4-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W41-T4-s4",
                "name": "Cooldown",
                "type": "wandelen",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Wandelen, rustig afronden",
                "instruction": "Wandelen, rustig afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  4,
                  5.5
                ],
                "speedKmh": 4.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "5 min wandelen Vrij → REPEAT 11× [4 min easy Vrij + 1 min wandelen Vrij] → 5 min wandelen Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "314e90d5f2fcc21bda84b534facafba080f620afb248f7fe151b8ac9320379e4"
    },
    {
      "workoutId": "V6-W41-T5",
      "trainingId": "V6-W41-T5",
      "trainingNumber": 5,
      "weekNumber": 41,
      "weekId": "marathon-v6-w41",
      "phaseId": "v6-phase-41",
      "phaseName": "Actief herstel",
      "date": null,
      "title": "Rustig fietsen",
      "activityType": "bike",
      "category": "fiets",
      "role": "bike",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": false,
      "totalPlannedSeconds": 3600,
      "totalPlannedLabel": "60 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 60,
      "plannedRunMinutes": 0,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 60,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Aerobe beweging met weinig impact; geen zwaar verzet",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Fietsen / hometrainer",
      "outsideVariant": "Buiten fietsen of binnen op de hometrainer, met dezelfde duur en rustige inspanning.",
      "treadmillInstruction": "",
      "bikeInstruction": "kies Fietsen of Binnen fietsen, target Vrij; stel via activiteitinstellingen → Meldingen → Tijd een terugkerende melding op 10:00 min in. Rijd tot verstreken 10 min zeer licht, van 10 tot 50 min rustig, van 50 tot 60 min uittrappen; stop op 60:00. Bij een overgang zonder 10-min-melding lees je de totale timer en druk je desgewenst LAP. Als het Tijd-menu ontbreekt, gebruik dezelfde totale timer handmatig. Er wordt geen gegarandeerde Connect-fietsworkoutsync geclaimd",
      "hometrainerInstruction": "dezelfde tijden; lichte weerstand en comfortabele cadans, geen snelheidsdoel. Geen loopbandvariant voor fietsen",
      "durationCheck": "10 + 40 + 10 = 60 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W41-T5-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W41-T5-s1",
              "name": "Warming-up",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Licht verzet; RPE 1–2",
              "instruction": "Licht verzet; RPE 1–2",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W41-T5-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Fietsen",
          "segments": [
            {
              "segmentId": "V6-W41-T5-s2",
              "name": "Fietsen",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 2400,
              "display": "40 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Rustig RPE 2–3; volledige zinnen",
              "instruction": "Rustig RPE 2–3; volledige zinnen",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W41-T5-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W41-T5-s3",
              "name": "Cooldown",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Rustig uittrappen; RPE 1–2",
              "instruction": "Rustig uittrappen; RPE 1–2",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W41-T5-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W41-T5-s1",
                "name": "Warming-up",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Licht verzet; RPE 1–2",
                "instruction": "Licht verzet; RPE 1–2",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W41-T5-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Fietsen",
            "segments": [
              {
                "segmentId": "V6-W41-T5-s2",
                "name": "Fietsen",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 2400,
                "display": "40 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Rustig RPE 2–3; volledige zinnen",
                "instruction": "Rustig RPE 2–3; volledige zinnen",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W41-T5-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W41-T5-s3",
                "name": "Cooldown",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Rustig uittrappen; RPE 1–2",
                "instruction": "Rustig uittrappen; RPE 1–2",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "10 min zeer rustig fietsen Vrij → 40 min rustig fietsen Vrij → 10 min zeer rustig fietsen Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "1aa9c1976a371b636823048cf0f003c55a80302b0946a4f8b7260b12a9c13465"
    },
    {
      "workoutId": "V6-W42-T1",
      "trainingId": "V6-W42-T1",
      "trainingNumber": 1,
      "weekNumber": 42,
      "weekId": "marathon-v6-w42",
      "phaseId": "v6-phase-42",
      "phaseName": "Heropbouw + eerste MP",
      "date": null,
      "title": "Easy herstart",
      "activityType": "run",
      "category": "rustige-duur",
      "role": "easy",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 2100,
      "totalPlannedLabel": "35 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 35,
      "plannedRunMinutes": 35,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Normaliteit van de benen bevestigen zonder tempo te testen",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "5 + 25 + 5 = 35 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W42-T1-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W42-T1-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W42-T1-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W42-T1-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 1500,
              "display": "25 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W42-T1-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W42-T1-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W42-T1-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W42-T1-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W42-T1-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W42-T1-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 1500,
                "display": "25 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W42-T1-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W42-T1-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "5 min easy Vrij → 25 min easy Vrij → 5 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "0d727ee13a63425e0e5861469387829960021c0ae383dec61bffb2c85eb03a26"
    },
    {
      "workoutId": "V6-W42-T2",
      "trainingId": "V6-W42-T2",
      "trainingNumber": 2,
      "weekNumber": 42,
      "weekId": "marathon-v6-w42",
      "phaseId": "v6-phase-42",
      "phaseName": "Heropbouw + eerste MP",
      "date": null,
      "title": "Eerste marathonpacegewenning — 3×5 min",
      "activityType": "run",
      "category": "kwaliteit",
      "role": "marathonpace",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 3000,
      "totalPlannedLabel": "50 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 50,
      "plannedRunMinutes": 50,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 15,
      "targetRpe": "2–3 easy · 4–5 MP",
      "goal": "15 min MP binnen een overwegend rustige sessie; ritme leren. Bij te zware MP resterende werkminuten easy",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. MP 10,3–10,7 km/u (midden 10,5–10,6); warming-up/cooldown/jogherstel 7–8,5 km/u of eigen easy-snelheid. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "15 + 3×(5 + 2) + 14 = 50 min. Herstel ook na het laatste werkblok; geen extra repeats",
      "nutrition": "Normaal gevoed starten; gels niet verplicht",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [
        "MARATHONPACE"
      ],
      "tone": "quality",
      "groups": [
        {
          "groupId": "V6-W42-T2-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W42-T2-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 900,
              "display": "15 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledig warm worden",
              "instruction": "Easy RPE 2–3; volledig warm worden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W42-T2-g2",
          "kind": "repeat",
          "repetitions": 3,
          "label": "Werk + herstel",
          "segments": [
            {
              "segmentId": "V6-W42-T2-s2",
              "name": "Hardlopen",
              "type": "marathonpace",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Tempo",
              "targetValue": "5:35–5:50/km",
              "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
              "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
              "inclinePercent": 0,
              "speedRangeKmh": [
                10.3,
                10.7
              ],
              "speedKmh": 10.5,
              "distanceKm": null
            },
            {
              "segmentId": "V6-W42-T2-s3",
              "name": "Herstel",
              "type": "herstel",
              "basis": "time",
              "durationSeconds": 120,
              "display": "2 min",
              "isRecovery": true,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
              "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W42-T2-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W42-T2-s4",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 840,
              "display": "14 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; geen versnelling",
              "instruction": "Zeer easy RPE 2; geen versnelling",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W42-T2-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W42-T2-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 900,
                "display": "15 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledig warm worden",
                "instruction": "Easy RPE 2–3; volledig warm worden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W42-T2-g2",
            "kind": "repeat",
            "repetitions": 3,
            "label": "Werk + herstel",
            "segments": [
              {
                "segmentId": "V6-W42-T2-s2",
                "name": "Hardlopen",
                "type": "marathonpace",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Tempo",
                "targetValue": "5:35–5:50/km",
                "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  10.3,
                  10.7
                ],
                "speedKmh": 10.5,
                "distanceKm": null
              },
              {
                "segmentId": "V6-W42-T2-s3",
                "name": "Herstel",
                "type": "herstel",
                "basis": "time",
                "durationSeconds": 120,
                "display": "2 min",
                "isRecovery": true,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W42-T2-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W42-T2-s4",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 840,
                "display": "14 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; geen versnelling",
                "instruction": "Zeer easy RPE 2; geen versnelling",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "15 min easy Vrij → REPEAT 3× [5 min @ 5:35–5:50/km + 2 min easy Vrij] → 14 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "37511e040bfb222dad9cff15871bd2fb6c6a19ad5c71838d62a0c4085d52b456"
    },
    {
      "workoutId": "V6-W42-T3",
      "trainingId": "V6-W42-T3",
      "trainingNumber": 3,
      "weekNumber": 42,
      "weekId": "marathon-v6-w42",
      "phaseId": "v6-phase-42",
      "phaseName": "Heropbouw + eerste MP",
      "date": null,
      "title": "Kort easy",
      "activityType": "run",
      "category": "rustige-duur",
      "role": "easy",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 1800,
      "totalPlannedLabel": "30 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 30,
      "plannedRunMinutes": 30,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Lichte run tussen de belastendere sessies; geen fast finish",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "5 + 20 + 5 = 30 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W42-T3-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W42-T3-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W42-T3-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W42-T3-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 1200,
              "display": "20 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W42-T3-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W42-T3-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W42-T3-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W42-T3-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W42-T3-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W42-T3-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 1200,
                "display": "20 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W42-T3-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W42-T3-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "5 min easy Vrij → 20 min easy Vrij → 5 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "7fa0d1c9f0f02be877dab43a57bd8750cfa2f471d39ae47de37269883b2adc3f"
    },
    {
      "workoutId": "V6-W42-T4",
      "trainingId": "V6-W42-T4",
      "trainingNumber": 4,
      "weekNumber": 42,
      "weekId": "marathon-v6-w42",
      "phaseId": "v6-phase-42",
      "phaseName": "Heropbouw + eerste MP",
      "date": null,
      "title": "Langere easy duur",
      "activityType": "run",
      "category": "lange-duur",
      "role": "long",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 5100,
      "totalPlannedLabel": "85 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 85,
      "plannedRunMinutes": 85,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Eerste uitbreiding van continue buitenduur; alle minuten easy. De duurstapregels uit §2 gelden",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "10 + 65 + 10 = 85 min. Geen repeats of apart herstelblok",
      "nutrition": "Oefen circa 30–45 g/u. Twee gels van 40 g op 20 en 60 min zijn samen 80 g = 56,5 g/u over 85 min; kies dit alleen als 50–60 g/u al vertrouwd is. Voor circa 30 g/u past één gel van 40 g tijdens de sessie (28,2 g/u)",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W42-T4-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W42-T4-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W42-T4-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W42-T4-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 3900,
              "display": "65 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W42-T4-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W42-T4-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W42-T4-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W42-T4-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W42-T4-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W42-T4-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 3900,
                "display": "65 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W42-T4-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W42-T4-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "10 min easy Vrij → 65 min easy Vrij → 10 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "a928f0b145cbd62048b6dd27bed09fdbf9be7b647372d38f36c361a2b59dcabe"
    },
    {
      "workoutId": "V6-W42-T5",
      "trainingId": "V6-W42-T5",
      "trainingNumber": 5,
      "weekNumber": 42,
      "weekId": "marathon-v6-w42",
      "phaseId": "v6-phase-42",
      "phaseName": "Heropbouw + eerste MP",
      "date": null,
      "title": "Rustig fietsen",
      "activityType": "bike",
      "category": "fiets",
      "role": "bike",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": false,
      "totalPlannedSeconds": 3600,
      "totalPlannedLabel": "60 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 60,
      "plannedRunMinutes": 0,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 60,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Aerobe ondersteuning; soepel fietsen, geen beenvermoeidheid najagen",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Fietsen / hometrainer",
      "outsideVariant": "Buiten fietsen of binnen op de hometrainer, met dezelfde duur en rustige inspanning.",
      "treadmillInstruction": "",
      "bikeInstruction": "kies Fietsen of Binnen fietsen, target Vrij; stel via activiteitinstellingen → Meldingen → Tijd een terugkerende melding op 10:00 min in. Rijd tot verstreken 10 min zeer licht, van 10 tot 50 min rustig, van 50 tot 60 min uittrappen; stop op 60:00. Bij een overgang zonder 10-min-melding lees je de totale timer en druk je desgewenst LAP. Als het Tijd-menu ontbreekt, gebruik dezelfde totale timer handmatig. Er wordt geen gegarandeerde Connect-fietsworkoutsync geclaimd",
      "hometrainerInstruction": "dezelfde tijden; lichte weerstand en comfortabele cadans, geen snelheidsdoel. Geen loopbandvariant voor fietsen",
      "durationCheck": "10 + 40 + 10 = 60 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W42-T5-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W42-T5-s1",
              "name": "Warming-up",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Licht verzet; RPE 1–2",
              "instruction": "Licht verzet; RPE 1–2",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W42-T5-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Fietsen",
          "segments": [
            {
              "segmentId": "V6-W42-T5-s2",
              "name": "Fietsen",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 2400,
              "display": "40 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Rustig RPE 2–3; volledige zinnen",
              "instruction": "Rustig RPE 2–3; volledige zinnen",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W42-T5-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W42-T5-s3",
              "name": "Cooldown",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Rustig uittrappen; RPE 1–2",
              "instruction": "Rustig uittrappen; RPE 1–2",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W42-T5-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W42-T5-s1",
                "name": "Warming-up",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Licht verzet; RPE 1–2",
                "instruction": "Licht verzet; RPE 1–2",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W42-T5-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Fietsen",
            "segments": [
              {
                "segmentId": "V6-W42-T5-s2",
                "name": "Fietsen",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 2400,
                "display": "40 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Rustig RPE 2–3; volledige zinnen",
                "instruction": "Rustig RPE 2–3; volledige zinnen",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W42-T5-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W42-T5-s3",
                "name": "Cooldown",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Rustig uittrappen; RPE 1–2",
                "instruction": "Rustig uittrappen; RPE 1–2",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "10 min zeer rustig fietsen Vrij → 40 min rustig fietsen Vrij → 10 min zeer rustig fietsen Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "086c8f189c599b72e25f8957bc0344ba74bae46566e068eed2833843e4efa077"
    },
    {
      "workoutId": "V6-W43-T1",
      "trainingId": "V6-W43-T1",
      "trainingNumber": 1,
      "weekNumber": 43,
      "weekId": "marathon-v6-w43",
      "phaseId": "v6-phase-43",
      "phaseName": "Duur + specifiek ritme",
      "date": null,
      "title": "Easy duur",
      "activityType": "run",
      "category": "rustige-duur",
      "role": "easy",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 2400,
      "totalPlannedLabel": "40 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 40,
      "plannedRunMinutes": 40,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Rustige extra looptijd; gevoel gaat vóór tempo",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "5 + 30 + 5 = 40 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W43-T1-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W43-T1-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W43-T1-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W43-T1-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 1800,
              "display": "30 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W43-T1-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W43-T1-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W43-T1-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W43-T1-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W43-T1-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W43-T1-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 1800,
                "display": "30 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W43-T1-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W43-T1-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "5 min easy Vrij → 30 min easy Vrij → 5 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "7d4ad7fe8884dc20581a9e54b02ba48beecd5ad97ce31fbc0efbbfb83ba69847"
    },
    {
      "workoutId": "V6-W43-T2",
      "trainingId": "V6-W43-T2",
      "trainingNumber": 2,
      "weekNumber": 43,
      "weekId": "marathon-v6-w43",
      "phaseId": "v6-phase-43",
      "phaseName": "Duur + specifiek ritme",
      "date": null,
      "title": "MP opbouwen — 3×8 min",
      "activityType": "run",
      "category": "kwaliteit",
      "role": "marathonpace",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 3600,
      "totalPlannedLabel": "60 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 60,
      "plannedRunMinutes": 60,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 24,
      "targetRpe": "2–3 easy · 4–5 MP",
      "goal": "24 min gecontroleerd MP; houd hetzelfde praktische tempo als W42, geen sneller doel",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. MP 10,3–10,7 km/u (midden 10,5–10,6); warming-up/cooldown/jogherstel 7–8,5 km/u of eigen easy-snelheid. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "15 + 3×(8 + 3) + 12 = 60 min. Herstel ook na het laatste werkblok; geen extra repeats",
      "nutrition": "Desgewenst één gel oefenen tijdens warming-up/easy; tel hem mee bij de dagvoeding",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [
        "MARATHONPACE"
      ],
      "tone": "quality",
      "groups": [
        {
          "groupId": "V6-W43-T2-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W43-T2-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 900,
              "display": "15 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledig warm worden",
              "instruction": "Easy RPE 2–3; volledig warm worden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W43-T2-g2",
          "kind": "repeat",
          "repetitions": 3,
          "label": "Werk + herstel",
          "segments": [
            {
              "segmentId": "V6-W43-T2-s2",
              "name": "Hardlopen",
              "type": "marathonpace",
              "basis": "time",
              "durationSeconds": 480,
              "display": "8 min",
              "isRecovery": false,
              "targetType": "Tempo",
              "targetValue": "5:35–5:50/km",
              "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
              "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
              "inclinePercent": 0,
              "speedRangeKmh": [
                10.3,
                10.7
              ],
              "speedKmh": 10.5,
              "distanceKm": null
            },
            {
              "segmentId": "V6-W43-T2-s3",
              "name": "Herstel",
              "type": "herstel",
              "basis": "time",
              "durationSeconds": 180,
              "display": "3 min",
              "isRecovery": true,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
              "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W43-T2-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W43-T2-s4",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 720,
              "display": "12 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; geen versnelling",
              "instruction": "Zeer easy RPE 2; geen versnelling",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W43-T2-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W43-T2-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 900,
                "display": "15 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledig warm worden",
                "instruction": "Easy RPE 2–3; volledig warm worden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W43-T2-g2",
            "kind": "repeat",
            "repetitions": 3,
            "label": "Werk + herstel",
            "segments": [
              {
                "segmentId": "V6-W43-T2-s2",
                "name": "Hardlopen",
                "type": "marathonpace",
                "basis": "time",
                "durationSeconds": 480,
                "display": "8 min",
                "isRecovery": false,
                "targetType": "Tempo",
                "targetValue": "5:35–5:50/km",
                "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  10.3,
                  10.7
                ],
                "speedKmh": 10.5,
                "distanceKm": null
              },
              {
                "segmentId": "V6-W43-T2-s3",
                "name": "Herstel",
                "type": "herstel",
                "basis": "time",
                "durationSeconds": 180,
                "display": "3 min",
                "isRecovery": true,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W43-T2-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W43-T2-s4",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 720,
                "display": "12 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; geen versnelling",
                "instruction": "Zeer easy RPE 2; geen versnelling",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "15 min easy Vrij → REPEAT 3× [8 min @ 5:35–5:50/km + 3 min easy Vrij] → 12 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "d5640986981ea8be8f1559d02e272e5467eac37a4f93078461e03caec2849bc7"
    },
    {
      "workoutId": "V6-W43-T3",
      "trainingId": "V6-W43-T3",
      "trainingNumber": 3,
      "weekNumber": 43,
      "weekId": "marathon-v6-w43",
      "phaseId": "v6-phase-43",
      "phaseName": "Duur + specifiek ritme",
      "date": null,
      "title": "Kort easy",
      "activityType": "run",
      "category": "rustige-duur",
      "role": "easy",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 2100,
      "totalPlannedLabel": "35 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 35,
      "plannedRunMinutes": 35,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Herstel en frequentie ondersteunen",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "5 + 25 + 5 = 35 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W43-T3-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W43-T3-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W43-T3-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W43-T3-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 1500,
              "display": "25 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W43-T3-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W43-T3-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W43-T3-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W43-T3-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W43-T3-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W43-T3-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 1500,
                "display": "25 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W43-T3-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W43-T3-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "5 min easy Vrij → 25 min easy Vrij → 5 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "fc9947e0df21a6d63d556f04bdb7f345ea2cc473e5dd07874825af9ddbc1ea51"
    },
    {
      "workoutId": "V6-W43-T4",
      "trainingId": "V6-W43-T4",
      "trainingNumber": 4,
      "weekNumber": 43,
      "weekId": "marathon-v6-w43",
      "phaseId": "v6-phase-43",
      "phaseName": "Duur + specifiek ritme",
      "date": null,
      "title": "Lange easy duur",
      "activityType": "run",
      "category": "lange-duur",
      "role": "long",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 6600,
      "totalPlannedLabel": "110 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 110,
      "plannedRunMinutes": 110,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "25 min langer dan W42; laatste 20 min moeten technisch ontspannen blijven. Niet versnellen",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "10 + 90 + 10 = 110 min. Geen repeats of apart herstelblok",
      "nutrition": "Oefen circa 45–60 g/u. Twee gels van 40 g op 20 en 60 min = 43,6 g/u; drie op 15, 50 en 85 min = 65,5 g/u, alleen bij al bewezen tolerantie. Gebruik etiket en eventueel kleine geoefende porties drank om de gewenste inname te benaderen",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W43-T4-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W43-T4-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W43-T4-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W43-T4-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 5400,
              "display": "90 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W43-T4-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W43-T4-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W43-T4-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W43-T4-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W43-T4-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W43-T4-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 5400,
                "display": "90 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W43-T4-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W43-T4-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "10 min easy Vrij → 90 min easy Vrij → 10 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "bf74b51fefbe4e72fb0e006f615c886dbc9ba5bc4f9b561befb96d16347e0972"
    },
    {
      "workoutId": "V6-W43-T5",
      "trainingId": "V6-W43-T5",
      "trainingNumber": 5,
      "weekNumber": 43,
      "weekId": "marathon-v6-w43",
      "phaseId": "v6-phase-43",
      "phaseName": "Duur + specifiek ritme",
      "date": null,
      "title": "Rustig fietsen",
      "activityType": "bike",
      "category": "fiets",
      "role": "bike",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": false,
      "totalPlannedSeconds": 3000,
      "totalPlannedLabel": "50 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 50,
      "plannedRunMinutes": 0,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 50,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Fietstijd iets lager nu de loopbelasting groeit",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Fietsen / hometrainer",
      "outsideVariant": "Buiten fietsen of binnen op de hometrainer, met dezelfde duur en rustige inspanning.",
      "treadmillInstruction": "",
      "bikeInstruction": "kies Fietsen of Binnen fietsen, target Vrij; stel via activiteitinstellingen → Meldingen → Tijd een terugkerende melding op 10:00 min in. Rijd tot verstreken 10 min zeer licht, van 10 tot 40 min rustig, van 40 tot 50 min uittrappen; stop op 50:00. Bij een overgang zonder 10-min-melding lees je de totale timer en druk je desgewenst LAP. Als het Tijd-menu ontbreekt, gebruik dezelfde totale timer handmatig. Er wordt geen gegarandeerde Connect-fietsworkoutsync geclaimd",
      "hometrainerInstruction": "dezelfde tijden; lichte weerstand en comfortabele cadans, geen snelheidsdoel. Geen loopbandvariant voor fietsen",
      "durationCheck": "10 + 30 + 10 = 50 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W43-T5-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W43-T5-s1",
              "name": "Warming-up",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Licht verzet; RPE 1–2",
              "instruction": "Licht verzet; RPE 1–2",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W43-T5-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Fietsen",
          "segments": [
            {
              "segmentId": "V6-W43-T5-s2",
              "name": "Fietsen",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 1800,
              "display": "30 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Rustig RPE 2–3; volledige zinnen",
              "instruction": "Rustig RPE 2–3; volledige zinnen",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W43-T5-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W43-T5-s3",
              "name": "Cooldown",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Rustig uittrappen; RPE 1–2",
              "instruction": "Rustig uittrappen; RPE 1–2",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W43-T5-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W43-T5-s1",
                "name": "Warming-up",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Licht verzet; RPE 1–2",
                "instruction": "Licht verzet; RPE 1–2",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W43-T5-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Fietsen",
            "segments": [
              {
                "segmentId": "V6-W43-T5-s2",
                "name": "Fietsen",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 1800,
                "display": "30 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Rustig RPE 2–3; volledige zinnen",
                "instruction": "Rustig RPE 2–3; volledige zinnen",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W43-T5-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W43-T5-s3",
                "name": "Cooldown",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Rustig uittrappen; RPE 1–2",
                "instruction": "Rustig uittrappen; RPE 1–2",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "10 min zeer rustig fietsen Vrij → 30 min rustig fietsen Vrij → 10 min zeer rustig fietsen Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "096811bfd1d5a13151b58165bea302bc1ee10b6d8099e860939cbc9da9253c0a"
    },
    {
      "workoutId": "V6-W44-T1",
      "trainingId": "V6-W44-T1",
      "trainingNumber": 1,
      "weekNumber": 44,
      "weekId": "marathon-v6-w44",
      "phaseId": "v6-phase-44",
      "phaseName": "Specifieke opbouw",
      "date": null,
      "title": "Easy duur",
      "activityType": "run",
      "category": "rustige-duur",
      "role": "easy",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 2400,
      "totalPlannedLabel": "40 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 40,
      "plannedRunMinutes": 40,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Rustig volume, niet harder omdat MP goed gaat",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "5 + 30 + 5 = 40 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W44-T1-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W44-T1-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W44-T1-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W44-T1-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 1800,
              "display": "30 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W44-T1-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W44-T1-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W44-T1-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W44-T1-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W44-T1-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W44-T1-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 1800,
                "display": "30 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W44-T1-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W44-T1-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "5 min easy Vrij → 30 min easy Vrij → 5 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "d433bc9aa7b8cc4a9b254ec9c7052ae23e00aac9501dc0a632bc59aa70a53b2a"
    },
    {
      "workoutId": "V6-W44-T2",
      "trainingId": "V6-W44-T2",
      "trainingNumber": 2,
      "weekNumber": 44,
      "weekId": "marathon-v6-w44",
      "phaseId": "v6-phase-44",
      "phaseName": "Specifieke opbouw",
      "date": null,
      "title": "Belangrijkste specifieke opbouw — 3×10 min",
      "activityType": "run",
      "category": "kwaliteit",
      "role": "marathonpace",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 3900,
      "totalPlannedLabel": "65 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 65,
      "plannedRunMinutes": 65,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 30,
      "targetRpe": "2–3 easy · 4–5 MP",
      "goal": "30 min totaal op sub-4-ritme; geen test tot uitputting. Vergelijk bloktempo, RPE, techniek en herstel",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. MP 10,3–10,7 km/u (midden 10,5–10,6); warming-up/cooldown/jogherstel 7–8,5 km/u of eigen easy-snelheid. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "15 + 3×(10 + 3) + 11 = 65 min. Herstel ook na het laatste werkblok; geen extra repeats",
      "nutrition": "Oefen één bekend gelmoment, bijvoorbeeld in warming-up; waterinname meenemen",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [
        "MARATHONPACE"
      ],
      "tone": "quality",
      "groups": [
        {
          "groupId": "V6-W44-T2-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W44-T2-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 900,
              "display": "15 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledig warm worden",
              "instruction": "Easy RPE 2–3; volledig warm worden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W44-T2-g2",
          "kind": "repeat",
          "repetitions": 3,
          "label": "Werk + herstel",
          "segments": [
            {
              "segmentId": "V6-W44-T2-s2",
              "name": "Hardlopen",
              "type": "marathonpace",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Tempo",
              "targetValue": "5:35–5:50/km",
              "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
              "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
              "inclinePercent": 0,
              "speedRangeKmh": [
                10.3,
                10.7
              ],
              "speedKmh": 10.5,
              "distanceKm": null
            },
            {
              "segmentId": "V6-W44-T2-s3",
              "name": "Herstel",
              "type": "herstel",
              "basis": "time",
              "durationSeconds": 180,
              "display": "3 min",
              "isRecovery": true,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
              "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W44-T2-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W44-T2-s4",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 660,
              "display": "11 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; geen versnelling",
              "instruction": "Zeer easy RPE 2; geen versnelling",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W44-T2-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W44-T2-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 900,
                "display": "15 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledig warm worden",
                "instruction": "Easy RPE 2–3; volledig warm worden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W44-T2-g2",
            "kind": "repeat",
            "repetitions": 3,
            "label": "Werk + herstel",
            "segments": [
              {
                "segmentId": "V6-W44-T2-s2",
                "name": "Hardlopen",
                "type": "marathonpace",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Tempo",
                "targetValue": "5:35–5:50/km",
                "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  10.3,
                  10.7
                ],
                "speedKmh": 10.5,
                "distanceKm": null
              },
              {
                "segmentId": "V6-W44-T2-s3",
                "name": "Herstel",
                "type": "herstel",
                "basis": "time",
                "durationSeconds": 180,
                "display": "3 min",
                "isRecovery": true,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W44-T2-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W44-T2-s4",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 660,
                "display": "11 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; geen versnelling",
                "instruction": "Zeer easy RPE 2; geen versnelling",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "15 min easy Vrij → REPEAT 3× [10 min @ 5:35–5:50/km + 3 min easy Vrij] → 11 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "50314eb370661bb124d4ee8e54c2cf150eb13ae4a123fb6293a3c70ab31fcb0f"
    },
    {
      "workoutId": "V6-W44-T3",
      "trainingId": "V6-W44-T3",
      "trainingNumber": 3,
      "weekNumber": 44,
      "weekId": "marathon-v6-w44",
      "phaseId": "v6-phase-44",
      "phaseName": "Specifieke opbouw",
      "date": null,
      "title": "Kort easy",
      "activityType": "run",
      "category": "rustige-duur",
      "role": "easy",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 2100,
      "totalPlannedLabel": "35 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 35,
      "plannedRunMinutes": 35,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Soepel blijven; korter als de MP-sessie nadreunt",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "5 + 25 + 5 = 35 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W44-T3-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W44-T3-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W44-T3-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W44-T3-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 1500,
              "display": "25 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W44-T3-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W44-T3-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W44-T3-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W44-T3-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W44-T3-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W44-T3-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 1500,
                "display": "25 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W44-T3-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W44-T3-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "5 min easy Vrij → 25 min easy Vrij → 5 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "27da2986187df7741df45ff1a87c88094b3540055ed95a586b83f2f9f9520167"
    },
    {
      "workoutId": "V6-W44-T4",
      "trainingId": "V6-W44-T4",
      "trainingNumber": 4,
      "weekNumber": 44,
      "weekId": "marathon-v6-w44",
      "phaseId": "v6-phase-44",
      "phaseName": "Specifieke opbouw",
      "date": null,
      "title": "Lange easy duur",
      "activityType": "run",
      "category": "lange-duur",
      "role": "long",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 8100,
      "totalPlannedLabel": "135 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 135,
      "plannedRunMinutes": 135,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "2:15 uur tijd op de benen, zonder MP. Belangrijke informatie voor de readiness-evaluatie",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "10 + 115 + 10 = 135 min. Geen repeats of apart herstelblok",
      "nutrition": "Oefen circa 60–70 g/u indien W43 goed ging. Vier gels van 40 g op 15, 45, 75 en 105 min = 160 g / 2,25 uur = 71,1 g/u. Bij lagere tolerantie drie gels = 53,3 g/u; kies de vertrouwde variant",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W44-T4-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W44-T4-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W44-T4-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W44-T4-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 6900,
              "display": "115 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W44-T4-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W44-T4-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W44-T4-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W44-T4-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W44-T4-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W44-T4-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 6900,
                "display": "115 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W44-T4-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W44-T4-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "10 min easy Vrij → 115 min easy Vrij → 10 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "176688fe24285da1de71b77f263bf43b892e43e9d92813a97b033f1e5dd64fb0"
    },
    {
      "workoutId": "V6-W44-T5",
      "trainingId": "V6-W44-T5",
      "trainingNumber": 5,
      "weekNumber": 44,
      "weekId": "marathon-v6-w44",
      "phaseId": "v6-phase-44",
      "phaseName": "Specifieke opbouw",
      "date": null,
      "title": "Rustig fietsen",
      "activityType": "bike",
      "category": "fiets",
      "role": "bike",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": false,
      "totalPlannedSeconds": 2700,
      "totalPlannedLabel": "45 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 45,
      "plannedRunMinutes": 0,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 45,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Rustige ondersteuning; geen vervanging van de lange duur of MP",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Fietsen / hometrainer",
      "outsideVariant": "Buiten fietsen of binnen op de hometrainer, met dezelfde duur en rustige inspanning.",
      "treadmillInstruction": "",
      "bikeInstruction": "kies Fietsen of Binnen fietsen, target Vrij; stel via activiteitinstellingen → Meldingen → Tijd een terugkerende melding op 10:00 min in. Rijd tot verstreken 10 min zeer licht, van 10 tot 35 min rustig, van 35 tot 45 min uittrappen; stop op 45:00. Bij een overgang zonder 10-min-melding lees je de totale timer en druk je desgewenst LAP. Als het Tijd-menu ontbreekt, gebruik dezelfde totale timer handmatig. Er wordt geen gegarandeerde Connect-fietsworkoutsync geclaimd",
      "hometrainerInstruction": "dezelfde tijden; lichte weerstand en comfortabele cadans, geen snelheidsdoel. Geen loopbandvariant voor fietsen",
      "durationCheck": "10 + 25 + 10 = 45 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W44-T5-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W44-T5-s1",
              "name": "Warming-up",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Licht verzet; RPE 1–2",
              "instruction": "Licht verzet; RPE 1–2",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W44-T5-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Fietsen",
          "segments": [
            {
              "segmentId": "V6-W44-T5-s2",
              "name": "Fietsen",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 1500,
              "display": "25 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Rustig RPE 2–3; volledige zinnen",
              "instruction": "Rustig RPE 2–3; volledige zinnen",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W44-T5-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W44-T5-s3",
              "name": "Cooldown",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Rustig uittrappen; RPE 1–2",
              "instruction": "Rustig uittrappen; RPE 1–2",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W44-T5-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W44-T5-s1",
                "name": "Warming-up",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Licht verzet; RPE 1–2",
                "instruction": "Licht verzet; RPE 1–2",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W44-T5-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Fietsen",
            "segments": [
              {
                "segmentId": "V6-W44-T5-s2",
                "name": "Fietsen",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 1500,
                "display": "25 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Rustig RPE 2–3; volledige zinnen",
                "instruction": "Rustig RPE 2–3; volledige zinnen",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W44-T5-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W44-T5-s3",
                "name": "Cooldown",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Rustig uittrappen; RPE 1–2",
                "instruction": "Rustig uittrappen; RPE 1–2",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "10 min zeer rustig fietsen Vrij → 25 min rustig fietsen Vrij → 10 min zeer rustig fietsen Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "75a5059ccd9cd10b7636bbea99c87311714a24278492f9ed2af291c41f6e338e"
    },
    {
      "workoutId": "V6-W45-T1",
      "trainingId": "V6-W45-T1",
      "trainingNumber": 1,
      "weekNumber": 45,
      "weekId": "marathon-v6-w45",
      "phaseId": "v6-phase-45",
      "phaseName": "Consolideren",
      "date": null,
      "title": "Easy herstel",
      "activityType": "run",
      "category": "rustige-duur",
      "role": "easy",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 2100,
      "totalPlannedLabel": "35 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 35,
      "plannedRunMinutes": 35,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Ontspannen herstellen van de laatste opbouwweek",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "5 + 25 + 5 = 35 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W45-T1-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W45-T1-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W45-T1-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W45-T1-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 1500,
              "display": "25 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W45-T1-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W45-T1-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W45-T1-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W45-T1-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W45-T1-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W45-T1-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 1500,
                "display": "25 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W45-T1-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W45-T1-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "5 min easy Vrij → 25 min easy Vrij → 5 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "9bf49e385a6b1863e66785eff163537ae93f0db9b8c797c6b5eb9c60b1ad5699"
    },
    {
      "workoutId": "V6-W45-T2",
      "trainingId": "V6-W45-T2",
      "trainingNumber": 2,
      "weekNumber": 45,
      "weekId": "marathon-v6-w45",
      "phaseId": "v6-phase-45",
      "phaseName": "Consolideren",
      "date": null,
      "title": "Specifiek consolideren — 2×15 min",
      "activityType": "run",
      "category": "kwaliteit",
      "role": "marathonpace",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 3600,
      "totalPlannedLabel": "60 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 60,
      "plannedRunMinutes": 60,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 30,
      "targetRpe": "2–3 easy · 4–5 MP",
      "goal": "Nog steeds 30 min MP, nu langere aaneengesloten blokken. Zelfde tempo; totale sessie korter dan W44",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. MP 10,3–10,7 km/u (midden 10,5–10,6); warming-up/cooldown/jogherstel 7–8,5 km/u of eigen easy-snelheid. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "15 + 2×(15 + 3) + 9 = 60 min. Herstel ook na het laatste werkblok; geen extra repeats",
      "nutrition": "Oefen eventueel hetzelfde gelmoment als W44; niets nieuws toevoegen",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [
        "MARATHONPACE"
      ],
      "tone": "quality",
      "groups": [
        {
          "groupId": "V6-W45-T2-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W45-T2-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 900,
              "display": "15 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledig warm worden",
              "instruction": "Easy RPE 2–3; volledig warm worden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W45-T2-g2",
          "kind": "repeat",
          "repetitions": 2,
          "label": "Werk + herstel",
          "segments": [
            {
              "segmentId": "V6-W45-T2-s2",
              "name": "Hardlopen",
              "type": "marathonpace",
              "basis": "time",
              "durationSeconds": 900,
              "display": "15 min",
              "isRecovery": false,
              "targetType": "Tempo",
              "targetValue": "5:35–5:50/km",
              "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
              "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
              "inclinePercent": 0,
              "speedRangeKmh": [
                10.3,
                10.7
              ],
              "speedKmh": 10.5,
              "distanceKm": null
            },
            {
              "segmentId": "V6-W45-T2-s3",
              "name": "Herstel",
              "type": "herstel",
              "basis": "time",
              "durationSeconds": 180,
              "display": "3 min",
              "isRecovery": true,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
              "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W45-T2-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W45-T2-s4",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 540,
              "display": "9 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; geen versnelling",
              "instruction": "Zeer easy RPE 2; geen versnelling",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W45-T2-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W45-T2-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 900,
                "display": "15 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledig warm worden",
                "instruction": "Easy RPE 2–3; volledig warm worden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W45-T2-g2",
            "kind": "repeat",
            "repetitions": 2,
            "label": "Werk + herstel",
            "segments": [
              {
                "segmentId": "V6-W45-T2-s2",
                "name": "Hardlopen",
                "type": "marathonpace",
                "basis": "time",
                "durationSeconds": 900,
                "display": "15 min",
                "isRecovery": false,
                "targetType": "Tempo",
                "targetValue": "5:35–5:50/km",
                "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  10.3,
                  10.7
                ],
                "speedKmh": 10.5,
                "distanceKm": null
              },
              {
                "segmentId": "V6-W45-T2-s3",
                "name": "Herstel",
                "type": "herstel",
                "basis": "time",
                "durationSeconds": 180,
                "display": "3 min",
                "isRecovery": true,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W45-T2-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W45-T2-s4",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 540,
                "display": "9 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; geen versnelling",
                "instruction": "Zeer easy RPE 2; geen versnelling",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "15 min easy Vrij → REPEAT 2× [15 min @ 5:35–5:50/km + 3 min easy Vrij] → 9 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "5dd8db8cc40495f024ea1d396c2e695186952b5547f316a3b1c8b87561c94979"
    },
    {
      "workoutId": "V6-W45-T3",
      "trainingId": "V6-W45-T3",
      "trainingNumber": 3,
      "weekNumber": 45,
      "weekId": "marathon-v6-w45",
      "phaseId": "v6-phase-45",
      "phaseName": "Consolideren",
      "date": null,
      "title": "Kort easy",
      "activityType": "run",
      "category": "rustige-duur",
      "role": "easy",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 1800,
      "totalPlannedLabel": "30 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 30,
      "plannedRunMinutes": 30,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Bewust kort; houdt het weekvolume gelijk terwijl de lange duur groeit",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "5 + 20 + 5 = 30 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W45-T3-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W45-T3-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W45-T3-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W45-T3-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 1200,
              "display": "20 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W45-T3-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W45-T3-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W45-T3-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W45-T3-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W45-T3-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W45-T3-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 1200,
                "display": "20 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W45-T3-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W45-T3-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "5 min easy Vrij → 20 min easy Vrij → 5 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "2588d0604600871c6624eafaaf0a633f50f2f613a645103b5870d6caac815442"
    },
    {
      "workoutId": "V6-W45-T4",
      "trainingId": "V6-W45-T4",
      "trainingNumber": 4,
      "weekNumber": 45,
      "weekId": "marathon-v6-w45",
      "phaseId": "v6-phase-45",
      "phaseName": "Consolideren",
      "date": null,
      "title": "Laatste langere duur — maximaal 2:30 uur",
      "activityType": "run",
      "category": "lange-duur",
      "role": "long",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 9000,
      "totalPlannedLabel": "150 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 150,
      "plannedRunMinutes": 150,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Uiterlijk 8 november. Helemaal easy, geen fast finish, geen verlenging naar 25–30 km. Alleen tot 150 min als 135 min goed is verwerkt",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "10 + 130 + 10 = 150 min. Geen repeats of apart herstelblok",
      "nutrition": "Generale repetitie van geoefend ontbijt, gels, drinken en kleding. Bij passende tolerantie 60–80 g/u. Vier gels van 40 g = 64 g/u; vijf = 80 g/u. Voor 80 g/u: gels op 15, 45, 75, 105 en 135 min. Bij 64 g/u: bijvoorbeeld 20, 55, 90 en 125 min. Sportdrank telt mee; voeg geen vijfde gel toe boven op een al passende drankinname",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W45-T4-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W45-T4-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W45-T4-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W45-T4-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 7800,
              "display": "130 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W45-T4-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W45-T4-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W45-T4-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W45-T4-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W45-T4-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W45-T4-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 7800,
                "display": "130 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W45-T4-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W45-T4-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "10 min easy Vrij → 130 min easy Vrij → 10 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "bd8a28fe8c43fb666a233a57605b7b86b3a9720482b9f88503c6461c46dfa4dd",
      "latestDate": "2026-11-08"
    },
    {
      "workoutId": "V6-W45-T5",
      "trainingId": "V6-W45-T5",
      "trainingNumber": 5,
      "weekNumber": 45,
      "weekId": "marathon-v6-w45",
      "phaseId": "v6-phase-45",
      "phaseName": "Consolideren",
      "date": null,
      "title": "Rustig fietsen",
      "activityType": "bike",
      "category": "fiets",
      "role": "bike",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": false,
      "totalPlannedSeconds": 2400,
      "totalPlannedLabel": "40 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 40,
      "plannedRunMinutes": 0,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 40,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Licht verzet; schrap als dit de laatste lange duur beïnvloedt",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Fietsen / hometrainer",
      "outsideVariant": "Buiten fietsen of binnen op de hometrainer, met dezelfde duur en rustige inspanning.",
      "treadmillInstruction": "",
      "bikeInstruction": "kies Fietsen of Binnen fietsen, target Vrij; stel via activiteitinstellingen → Meldingen → Tijd een terugkerende melding op 10:00 min in. Rijd tot verstreken 10 min zeer licht, van 10 tot 30 min rustig, van 30 tot 40 min uittrappen; stop op 40:00. Bij een overgang zonder 10-min-melding lees je de totale timer en druk je desgewenst LAP. Als het Tijd-menu ontbreekt, gebruik dezelfde totale timer handmatig. Er wordt geen gegarandeerde Connect-fietsworkoutsync geclaimd",
      "hometrainerInstruction": "dezelfde tijden; lichte weerstand en comfortabele cadans, geen snelheidsdoel. Geen loopbandvariant voor fietsen",
      "durationCheck": "10 + 20 + 10 = 40 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W45-T5-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W45-T5-s1",
              "name": "Warming-up",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Licht verzet; RPE 1–2",
              "instruction": "Licht verzet; RPE 1–2",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W45-T5-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Fietsen",
          "segments": [
            {
              "segmentId": "V6-W45-T5-s2",
              "name": "Fietsen",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 1200,
              "display": "20 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Rustig RPE 2–3; volledige zinnen",
              "instruction": "Rustig RPE 2–3; volledige zinnen",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W45-T5-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W45-T5-s3",
              "name": "Cooldown",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Rustig uittrappen; RPE 1–2",
              "instruction": "Rustig uittrappen; RPE 1–2",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W45-T5-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W45-T5-s1",
                "name": "Warming-up",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Licht verzet; RPE 1–2",
                "instruction": "Licht verzet; RPE 1–2",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W45-T5-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Fietsen",
            "segments": [
              {
                "segmentId": "V6-W45-T5-s2",
                "name": "Fietsen",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 1200,
                "display": "20 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Rustig RPE 2–3; volledige zinnen",
                "instruction": "Rustig RPE 2–3; volledige zinnen",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W45-T5-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W45-T5-s3",
                "name": "Cooldown",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Rustig uittrappen; RPE 1–2",
                "instruction": "Rustig uittrappen; RPE 1–2",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "10 min zeer rustig fietsen Vrij → 20 min rustig fietsen Vrij → 10 min zeer rustig fietsen Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "d54044d3f0bf15904a7ebc1c244faca51b9117b0b53ea4ad50f397e3b1cc7ec1"
    },
    {
      "workoutId": "V6-W46-T1",
      "trainingId": "V6-W46-T1",
      "trainingNumber": 1,
      "weekNumber": 46,
      "weekId": "marathon-v6-w46",
      "phaseId": "v6-phase-46",
      "phaseName": "Taper",
      "date": null,
      "title": "Easy taper",
      "activityType": "run",
      "category": "rustige-duur",
      "role": "easy",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 1800,
      "totalPlannedLabel": "30 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 30,
      "plannedRunMinutes": 30,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Frisheid belangrijker dan een weektotaal",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "5 + 20 + 5 = 30 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W46-T1-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W46-T1-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W46-T1-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W46-T1-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 1200,
              "display": "20 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W46-T1-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W46-T1-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W46-T1-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W46-T1-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W46-T1-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W46-T1-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 1200,
                "display": "20 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W46-T1-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W46-T1-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "5 min easy Vrij → 20 min easy Vrij → 5 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "8af1dba1143d31b96323fdb804788622965292d406300f46ac0496908fdaa920"
    },
    {
      "workoutId": "V6-W46-T2",
      "trainingId": "V6-W46-T2",
      "trainingNumber": 2,
      "weekNumber": 46,
      "weekId": "marathon-v6-w46",
      "phaseId": "v6-phase-46",
      "phaseName": "Taper",
      "date": null,
      "title": "MP onderhouden — 2×6 min",
      "activityType": "run",
      "category": "kwaliteit",
      "role": "marathonpace",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 2700,
      "totalPlannedLabel": "45 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 45,
      "plannedRunMinutes": 45,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 12,
      "targetRpe": "2–3 easy · 4–5 MP",
      "goal": "12 min MP voor ritme; eindig energiek. Niet sneller dan eerdere MP",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. MP 10,3–10,7 km/u (midden 10,5–10,6); warming-up/cooldown/jogherstel 7–8,5 km/u of eigen easy-snelheid. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "12 + 2×(6 + 3) + 15 = 45 min. Herstel ook na het laatste werkblok; geen extra repeats",
      "nutrition": "Geen voedingsproef nodig; vertrouwde routine",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [
        "MARATHONPACE"
      ],
      "tone": "quality",
      "groups": [
        {
          "groupId": "V6-W46-T2-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W46-T2-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 720,
              "display": "12 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledig warm worden",
              "instruction": "Easy RPE 2–3; volledig warm worden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W46-T2-g2",
          "kind": "repeat",
          "repetitions": 2,
          "label": "Werk + herstel",
          "segments": [
            {
              "segmentId": "V6-W46-T2-s2",
              "name": "Hardlopen",
              "type": "marathonpace",
              "basis": "time",
              "durationSeconds": 360,
              "display": "6 min",
              "isRecovery": false,
              "targetType": "Tempo",
              "targetValue": "5:35–5:50/km",
              "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
              "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
              "inclinePercent": 0,
              "speedRangeKmh": [
                10.3,
                10.7
              ],
              "speedKmh": 10.5,
              "distanceKm": null
            },
            {
              "segmentId": "V6-W46-T2-s3",
              "name": "Herstel",
              "type": "herstel",
              "basis": "time",
              "durationSeconds": 180,
              "display": "3 min",
              "isRecovery": true,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
              "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W46-T2-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W46-T2-s4",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 900,
              "display": "15 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; geen versnelling",
              "instruction": "Zeer easy RPE 2; geen versnelling",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W46-T2-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W46-T2-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 720,
                "display": "12 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledig warm worden",
                "instruction": "Easy RPE 2–3; volledig warm worden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W46-T2-g2",
            "kind": "repeat",
            "repetitions": 2,
            "label": "Werk + herstel",
            "segments": [
              {
                "segmentId": "V6-W46-T2-s2",
                "name": "Hardlopen",
                "type": "marathonpace",
                "basis": "time",
                "durationSeconds": 360,
                "display": "6 min",
                "isRecovery": false,
                "targetType": "Tempo",
                "targetValue": "5:35–5:50/km",
                "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  10.3,
                  10.7
                ],
                "speedKmh": 10.5,
                "distanceKm": null
              },
              {
                "segmentId": "V6-W46-T2-s3",
                "name": "Herstel",
                "type": "herstel",
                "basis": "time",
                "durationSeconds": 180,
                "display": "3 min",
                "isRecovery": true,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W46-T2-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W46-T2-s4",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 900,
                "display": "15 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; geen versnelling",
                "instruction": "Zeer easy RPE 2; geen versnelling",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "12 min easy Vrij → REPEAT 2× [6 min @ 5:35–5:50/km + 3 min easy Vrij] → 15 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "4e894fe2e6e99bacdc2deae003f19404dec83dcc59d0123e703b6628f10e6939"
    },
    {
      "workoutId": "V6-W46-T3",
      "trainingId": "V6-W46-T3",
      "trainingNumber": 3,
      "weekNumber": 46,
      "weekId": "marathon-v6-w46",
      "phaseId": "v6-phase-46",
      "phaseName": "Taper",
      "date": null,
      "title": "Kort easy taper",
      "activityType": "run",
      "category": "rustige-duur",
      "role": "easy",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 1500,
      "totalPlannedLabel": "25 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 25,
      "plannedRunMinutes": 25,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Licht lopen, geen extra versnellingen",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "5 + 15 + 5 = 25 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W46-T3-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W46-T3-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W46-T3-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W46-T3-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 900,
              "display": "15 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W46-T3-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W46-T3-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W46-T3-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W46-T3-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W46-T3-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W46-T3-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 900,
                "display": "15 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W46-T3-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W46-T3-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "5 min easy Vrij → 15 min easy Vrij → 5 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "e1a8127dd8b321bb06aa1ec994bf137f7a4eb062784df98f5b4f35e56e1caad1"
    },
    {
      "workoutId": "V6-W46-T4",
      "trainingId": "V6-W46-T4",
      "trainingNumber": 4,
      "weekNumber": 46,
      "weekId": "marathon-v6-w46",
      "phaseId": "v6-phase-46",
      "phaseName": "Taper",
      "date": null,
      "title": "Rustige verkorte duur",
      "activityType": "run",
      "category": "lange-duur",
      "role": "long",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 4200,
      "totalPlannedLabel": "70 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 70,
      "plannedRunMinutes": 70,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Onderhoud, geen nieuwe belastbaarheidstest. Zo plannen dat vóór de race voldoende herstel overblijft",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "10 + 50 + 10 = 70 min. Geen repeats of apart herstelblok",
      "nutrition": "Desgewenst één vertrouwde gel en water; geen hoge inname of nieuw product testen",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W46-T4-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W46-T4-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W46-T4-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W46-T4-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 3000,
              "display": "50 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W46-T4-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W46-T4-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W46-T4-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W46-T4-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W46-T4-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W46-T4-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 3000,
                "display": "50 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W46-T4-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W46-T4-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "10 min easy Vrij → 50 min easy Vrij → 10 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "d43079b5f84a4626b131c13c98c34db20496127f6ec124be1955abbdbde22d4c"
    },
    {
      "workoutId": "V6-W46-T5",
      "trainingId": "V6-W46-T5",
      "trainingNumber": 5,
      "weekNumber": 46,
      "weekId": "marathon-v6-w46",
      "phaseId": "v6-phase-46",
      "phaseName": "Taper",
      "date": null,
      "title": "Rustig fietsen",
      "activityType": "bike",
      "category": "fiets",
      "role": "bike",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": false,
      "totalPlannedSeconds": 1800,
      "totalPlannedLabel": "30 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 30,
      "plannedRunMinutes": 0,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 30,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Alleen als het ontspant; bij vermoeide benen laten vervallen",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Fietsen / hometrainer",
      "outsideVariant": "Buiten fietsen of binnen op de hometrainer, met dezelfde duur en rustige inspanning.",
      "treadmillInstruction": "",
      "bikeInstruction": "kies Fietsen of Binnen fietsen, target Vrij; stel via activiteitinstellingen → Meldingen → Tijd een terugkerende melding op 10:00 min in. Rijd tot verstreken 10 min zeer licht, van 10 tot 20 min rustig, van 20 tot 30 min uittrappen; stop op 30:00. Bij een overgang zonder 10-min-melding lees je de totale timer en druk je desgewenst LAP. Als het Tijd-menu ontbreekt, gebruik dezelfde totale timer handmatig. Er wordt geen gegarandeerde Connect-fietsworkoutsync geclaimd",
      "hometrainerInstruction": "dezelfde tijden; lichte weerstand en comfortabele cadans, geen snelheidsdoel. Geen loopbandvariant voor fietsen",
      "durationCheck": "10 + 10 + 10 = 30 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W46-T5-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W46-T5-s1",
              "name": "Warming-up",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Licht verzet; RPE 1–2",
              "instruction": "Licht verzet; RPE 1–2",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W46-T5-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Fietsen",
          "segments": [
            {
              "segmentId": "V6-W46-T5-s2",
              "name": "Fietsen",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Rustig RPE 2–3; volledige zinnen",
              "instruction": "Rustig RPE 2–3; volledige zinnen",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W46-T5-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W46-T5-s3",
              "name": "Cooldown",
              "type": "fiets",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Rustig uittrappen; RPE 1–2",
              "instruction": "Rustig uittrappen; RPE 1–2",
              "inclinePercent": null,
              "speedRangeKmh": null,
              "speedKmh": null,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W46-T5-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W46-T5-s1",
                "name": "Warming-up",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Licht verzet; RPE 1–2",
                "instruction": "Licht verzet; RPE 1–2",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W46-T5-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Fietsen",
            "segments": [
              {
                "segmentId": "V6-W46-T5-s2",
                "name": "Fietsen",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Rustig RPE 2–3; volledige zinnen",
                "instruction": "Rustig RPE 2–3; volledige zinnen",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W46-T5-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W46-T5-s3",
                "name": "Cooldown",
                "type": "fiets",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Rustig uittrappen; RPE 1–2",
                "instruction": "Rustig uittrappen; RPE 1–2",
                "inclinePercent": null,
                "speedRangeKmh": null,
                "speedKmh": null,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "10 min zeer rustig fietsen Vrij → 10 min rustig fietsen Vrij → 10 min zeer rustig fietsen Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "77e735c14bacc255d7e9b7e7ca74b6d0d572ae672d9d3aa9e1a4373dd5979946"
    },
    {
      "workoutId": "V6-W47-T1",
      "trainingId": "V6-W47-T1",
      "trainingNumber": 1,
      "weekNumber": 47,
      "weekId": "marathon-v6-w47",
      "phaseId": "v6-phase-47",
      "phaseName": "Marathonweek",
      "date": null,
      "title": "Easy raceweek",
      "activityType": "run",
      "category": "rustige-duur",
      "role": "easy",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 1500,
      "totalPlannedLabel": "25 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 25,
      "plannedRunMinutes": 25,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "Vroeg in de raceweek, ontspannen en zonder testgevoel",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "5 + 15 + 5 = 25 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W47-T1-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W47-T1-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W47-T1-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W47-T1-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 900,
              "display": "15 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W47-T1-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W47-T1-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W47-T1-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W47-T1-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W47-T1-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W47-T1-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 900,
                "display": "15 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W47-T1-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W47-T1-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "5 min easy Vrij → 15 min easy Vrij → 5 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "a41875a6d07020ea843bf4d4b149abbb1cb2c21368f9595f061eeb3fcb8a724e"
    },
    {
      "workoutId": "V6-W47-T2",
      "trainingId": "V6-W47-T2",
      "trainingNumber": 2,
      "weekNumber": 47,
      "weekId": "marathon-v6-w47",
      "phaseId": "v6-phase-47",
      "phaseName": "Marathonweek",
      "date": null,
      "title": "Kort MP-ritme — 2×3 min",
      "activityType": "run",
      "category": "kwaliteit",
      "role": "marathonpace",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 1800,
      "totalPlannedLabel": "30 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 30,
      "plannedRunMinutes": 30,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 6,
      "targetRpe": "2–3 easy · 4–5 MP",
      "goal": "Bij voorkeur 3–4 dagen vóór de race, uiterlijk 19 november. Slechts 6 min MP; geen vermoeidheid opbouwen",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. MP 10,3–10,7 km/u (midden 10,5–10,6); warming-up/cooldown/jogherstel 7–8,5 km/u of eigen easy-snelheid. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "10 + 2×(3 + 2) + 10 = 30 min. Herstel ook na het laatste werkblok; geen extra repeats",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [
        "MARATHONPACE"
      ],
      "tone": "quality",
      "groups": [
        {
          "groupId": "V6-W47-T2-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W47-T2-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledig warm worden",
              "instruction": "Easy RPE 2–3; volledig warm worden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W47-T2-g2",
          "kind": "repeat",
          "repetitions": 2,
          "label": "Werk + herstel",
          "segments": [
            {
              "segmentId": "V6-W47-T2-s2",
              "name": "Hardlopen",
              "type": "marathonpace",
              "basis": "time",
              "durationSeconds": 180,
              "display": "3 min",
              "isRecovery": false,
              "targetType": "Tempo",
              "targetValue": "5:35–5:50/km",
              "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
              "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
              "inclinePercent": 0,
              "speedRangeKmh": [
                10.3,
                10.7
              ],
              "speedKmh": 10.5,
              "distanceKm": null
            },
            {
              "segmentId": "V6-W47-T2-s3",
              "name": "Herstel",
              "type": "herstel",
              "basis": "time",
              "durationSeconds": 120,
              "display": "2 min",
              "isRecovery": true,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
              "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W47-T2-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W47-T2-s4",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 600,
              "display": "10 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; geen versnelling",
              "instruction": "Zeer easy RPE 2; geen versnelling",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W47-T2-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W47-T2-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledig warm worden",
                "instruction": "Easy RPE 2–3; volledig warm worden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W47-T2-g2",
            "kind": "repeat",
            "repetitions": 2,
            "label": "Werk + herstel",
            "segments": [
              {
                "segmentId": "V6-W47-T2-s2",
                "name": "Hardlopen",
                "type": "marathonpace",
                "basis": "time",
                "durationSeconds": 180,
                "display": "3 min",
                "isRecovery": false,
                "targetType": "Tempo",
                "targetValue": "5:35–5:50/km",
                "cue": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                "instruction": "Mik 5:40–5:45; RPE 4–5; gecontroleerd",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  10.3,
                  10.7
                ],
                "speedKmh": 10.5,
                "distanceKm": null
              },
              {
                "segmentId": "V6-W47-T2-s3",
                "name": "Herstel",
                "type": "herstel",
                "basis": "time",
                "durationSeconds": 120,
                "display": "2 min",
                "isRecovery": true,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy jog RPE 2; weer comfortabel praten",
                "instruction": "Zeer easy jog RPE 2; weer comfortabel praten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W47-T2-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W47-T2-s4",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 600,
                "display": "10 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; geen versnelling",
                "instruction": "Zeer easy RPE 2; geen versnelling",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "10 min easy Vrij → REPEAT 2× [3 min @ 5:35–5:50/km + 2 min easy Vrij] → 10 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "bbd587ad7de84b4dc93b1e2d6e186e9f6b00f28044a933271ace804475703e8d",
      "latestDate": "2026-11-19"
    },
    {
      "workoutId": "V6-W47-T3",
      "trainingId": "V6-W47-T3",
      "trainingNumber": 3,
      "weekNumber": 47,
      "weekId": "marathon-v6-w47",
      "phaseId": "v6-phase-47",
      "phaseName": "Marathonweek",
      "date": null,
      "title": "Optionele shakeout",
      "activityType": "run",
      "category": "rustige-duur",
      "role": "easy",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": true,
      "totalPlannedSeconds": 900,
      "totalPlannedLabel": "15 min",
      "estimatedDistanceKm": null,
      "estimatedDistanceLabel": "Geen kilometerdoel",
      "plannedSessionMinutes": 15,
      "plannedRunMinutes": 15,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "2–3",
      "goal": "1–2 dagen vóór de race als dit je prettig laat voelen. Overslaan mag; geen compensatie. Geen verplichte strides",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Outdoor / Garmin · loopband als alternatief",
      "outsideVariant": "Outdoor is de standaard. MP-sessies en langere duur in W43–45 bij voorkeur buiten; een bandrun bewijst niet automatisch dezelfde buitenbelastbaarheid.",
      "treadmillInstruction": "dezelfde stapduren en repeats, 0% starthelling. Easy 7–9,5 km/u; warming-up/cooldown/herstel 7–8,5 km/u, aangepast aan RPE. Tempo op de band zelf instellen; gevoel gaat voor",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "5 + 5 + 5 = 15 min. Geen repeats of apart herstelblok",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [
        "OPTIONEEL"
      ],
      "tone": "easy",
      "groups": [
        {
          "groupId": "V6-W47-T3-g1",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Warming-up",
          "segments": [
            {
              "segmentId": "V6-W47-T3-s1",
              "name": "Warming-up",
              "type": "warming-up",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; soepel starten",
              "instruction": "Zeer easy RPE 2; soepel starten",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W47-T3-g2",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Hardlopen",
          "segments": [
            {
              "segmentId": "V6-W47-T3-s2",
              "name": "Hardlopen",
              "type": "easy",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Easy RPE 2–3; volledige zinnen",
              "instruction": "Easy RPE 2–3; volledige zinnen",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                9.5
              ],
              "speedKmh": 8.25,
              "distanceKm": null
            }
          ]
        },
        {
          "groupId": "V6-W47-T3-g3",
          "kind": "sequence",
          "repetitions": 1,
          "label": "Cooldown",
          "segments": [
            {
              "segmentId": "V6-W47-T3-s3",
              "name": "Cooldown",
              "type": "cooling-down",
              "basis": "time",
              "durationSeconds": 300,
              "display": "5 min",
              "isRecovery": false,
              "targetType": "Vrij",
              "targetValue": null,
              "cue": "Zeer easy RPE 2; ontspannen afronden",
              "instruction": "Zeer easy RPE 2; ontspannen afronden",
              "inclinePercent": 0,
              "speedRangeKmh": [
                7,
                8.5
              ],
              "speedKmh": 7.75,
              "distanceKm": null
            }
          ]
        }
      ],
      "garmin": {
        "groups": [
          {
            "groupId": "V6-W47-T3-g1",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Warming-up",
            "segments": [
              {
                "segmentId": "V6-W47-T3-s1",
                "name": "Warming-up",
                "type": "warming-up",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; soepel starten",
                "instruction": "Zeer easy RPE 2; soepel starten",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W47-T3-g2",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Hardlopen",
            "segments": [
              {
                "segmentId": "V6-W47-T3-s2",
                "name": "Hardlopen",
                "type": "easy",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Easy RPE 2–3; volledige zinnen",
                "instruction": "Easy RPE 2–3; volledige zinnen",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  9.5
                ],
                "speedKmh": 8.25,
                "distanceKm": null
              }
            ]
          },
          {
            "groupId": "V6-W47-T3-g3",
            "kind": "sequence",
            "repetitions": 1,
            "label": "Cooldown",
            "segments": [
              {
                "segmentId": "V6-W47-T3-s3",
                "name": "Cooldown",
                "type": "cooling-down",
                "basis": "time",
                "durationSeconds": 300,
                "display": "5 min",
                "isRecovery": false,
                "targetType": "Vrij",
                "targetValue": null,
                "cue": "Zeer easy RPE 2; ontspannen afronden",
                "instruction": "Zeer easy RPE 2; ontspannen afronden",
                "inclinePercent": 0,
                "speedRangeKmh": [
                  7,
                  8.5
                ],
                "speedKmh": 7.75,
                "distanceKm": null
              }
            ]
          }
        ],
        "programSummary": "5 min easy Vrij → 5 min easy Vrij → 5 min easy Vrij",
        "referenceDistanceLabel": "Geen afstandsdoel",
        "isRacePlan": false
      },
      "protocolSignature": "4ffcce110cb85ce365ddfab3c8763ff2bf59baecaa58ac448cb082d52540767b"
    },
    {
      "workoutId": "V6-W47-T4-RACE",
      "trainingId": "V6-W47-T4-RACE",
      "trainingNumber": 4,
      "weekNumber": 47,
      "weekId": "marathon-v6-w47",
      "phaseId": "v6-phase-47",
      "phaseName": "Marathonweek",
      "date": "2026-11-22",
      "title": "Marathon",
      "activityType": "race",
      "category": "wedstrijd",
      "role": "race",
      "surface": "buiten",
      "defaultExecutionMode": "garmin",
      "treadmillAvailable": false,
      "totalPlannedSeconds": null,
      "totalPlannedLabel": "Tot officiële finish",
      "estimatedDistanceKm": 42.195,
      "estimatedDistanceLabel": "42,195 km",
      "plannedSessionMinutes": 0,
      "plannedRunMinutes": 0,
      "plannedWalkMinutes": 0,
      "plannedBikeMinutes": 0,
      "plannedMpMinutes": 0,
      "targetRpe": "Gecontroleerd starten",
      "goal": "Sub 4:00 op de officiële route; uitvoeren wat goed is geoefend.",
      "mentalGoal": "Gecontroleerd uitvoeren; gevoel en herstel gaan vóór het afmaken van een getal.",
      "recoveryAdvice": "Een volledige rustdag na de langere duur, ook over een weekgrens heen. Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur. Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur. Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen. Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen. Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november.",
      "orderWarning": "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit. Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren. Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen. MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen. Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan.",
      "locationStatus": "Buitenwedstrijd",
      "outsideVariant": "Buiten op de officiële route. De officiële finish beëindigt de race, niet 42,195 GPS-kilometer.",
      "treadmillInstruction": "",
      "bikeInstruction": "",
      "hometrainerInstruction": "",
      "durationCheck": "",
      "nutrition": "",
      "shoes": "Vertrouwde trainingschoenen. Test raceschoenen, kleding en gels in bestaande W44/45-sessies; geen extra kilometers of nieuw model vlak voor de race.",
      "labels": [
        "RACE"
      ],
      "tone": "race",
      "groups": [],
      "garmin": {
        "groups": [],
        "programSummary": "5 min wandelen Vrij vóór start, apart → Hardlopen-activiteit tot officiële finish; Auto Pause UIT; geen repeats; rondetempo + gemiddelde tempo + verstreken tijd + afstand → STOP op finish → 5 min wandelen Vrij, apart",
        "referenceDistanceLabel": "42,195 km officieel",
        "isRacePlan": true,
        "raceGuidance": [
          "Primair doel: onder 4:00:00 op de officiële 42,195 km; richtpunt 3:59:xx of iets sneller als de training dat ondersteunt. Gebruik de tijdsdefinitie van de organisator (netto/bruto) bij de uiteindelijke beoordeling; neem niet aan dat startvakvertraging gratis is in iedere uitslag. Geen tijd bankieren met een snelle eerste helft.",
          "Exacte vieruursgrens: 5:41,27/km. Onder vier uur vraagt een iets lager gemiddelde, inclusief alle vertragingen.",
          "5:41/km over exact 42,195 km is circa 3:59:49: slechts ongeveer 11 sec marge.",
          "5:40/km over exact 42,195 km is circa 3:59:06: ongeveer 54 sec marge.",
          "De trainingsrange 5:35–5:50/km dient voor bruikbare workoutsturing; hij is veel te ruim als eindtijdstrategie. In gunstige omstandigheden rond 5:40/km werkelijk gemiddeld mikken, met beperkte normale schommelingen.",
          "GPS kan te veel of te weinig afstand meten, en je loopt vaak iets meer dan de kortste gecertificeerde lijn. Daarom gaat verstreken tijd bij officiële afstandsmarkeringen vóór een GPS-gemiddelde dat exact 5:40 toont. Bijvoorbeeld: 42,5 GPS-km op gemiddeld 5:40 geeft al circa 4:00:50. Je hoeft niet voortdurend sneller te rennen om ruis te corrigeren; loop vloeiend, neem nette bochten en controleer periodiek officiële tussentijden.",
          "Rekenvoorbeeld, geen seconde-voor-seconde opdracht: eerste 5 km op 5:43/km, daarna 5:40/km:",
          "Dit voorbeeld heeft maar circa 39 sec marge voor stops en omwegen. Voeding/water pakken daarom vooraf oefenen; niet harder starten om een denkbeeldige stopvoorraad te creëren. Vallen de eerste kilometers duidelijk langzamer uit, beoordeel of het beheerst vervolgen van sub-4 nog verstandig is. Geen grote tempoversnelling om de achterstand onmiddellijk weg te poetsen.",
          "Programmeer in Garmin als: 5 min wandelen Vrij vóór start, apart → Hardlopen-activiteit tot officiële finish; Auto Pause UIT; geen repeats; rondetempo + gemiddelde tempo + verstreken tijd + afstand → STOP op finish → 5 min wandelen Vrij, apart.",
          "Gebruik Auto Lap 1 km voor praktische rondetempo's. Zet meldingen op km indien gewenst; geen zone-alert. Een tempoalert 5:35–5:50 kan als ruime attentiemarge, maar is optioneel en garandeert geen racegemiddelde. Kijk niet steeds naar instant pace. Controleer om de 5 km de officiële afstand en verstreken tijd; handmatige rondeknop bij markeringen kan ook, maar zet dan Auto Lap uit om dubbele/onlogische rondes te voorkomen. Kies één methode die je vóór de race hebt geoefend.",
          "Als je een Connect-workout wilt: maak één stap Hardlopen → Duur: Rondeknop indrukken → Doel: Tempo 5:35–5:50/km, zonder repeats en zonder ingebouwde warming-up/cooldown. Start bij de startlijn en stop de activiteit bij de officiële finish; druk niet onderweg op LAP om deze oneindige racewerkstap te beëindigen. Dit geeft globale sturing, geen automatische fasesplits. Geen GPS-workout die zichzelf bij 42,195 gemeten km beëindigt; de officiële finish is leidend. De gewone activiteit blijft praktisch het eenvoudigst.",
          "Voeding: voer het best geoefende patroon uit §6 uit. Gebruik een geoefende tijdmelding of bekende officiële kilometerpunten als geheugensteun; menu/alertinstelling vóór de race testen. Hartslag via H9 observeren, geen ongeteste universele bovengrens.",
          "Als circa 5:40 al vóór 10–15 km ongewoon zwaar voelt: vertraag direct circa 10–20 sec/km en beoordeel opnieuw. Blijft het te zwaar, laat het tijdsdoel tijdens die race los; niet doorjagen om het trainingsdoel op papier te redden. Het sub-4-doel van de voorbereiding verplicht niet tot een onverstandig racebesluit.",
          "Run-walk is fallback, bijvoorbeeld een geoefende verhouding 4 min rustig lopen / 1 min wandelen wanneer continu lopen niet meer beheerst gaat en er geen stopreden is. Het looptempo is dan niet hetzelfde als het gemiddelde inclusief wandelen; ga niet sneller lopen om wandelverlies te compenseren. Onder deze fallback is sub-4 niet langer de veronderstelling. Bij lokale toenemende pijn, manken of duidelijke verslechtering stoppen en hulp inschakelen; wandelen is geen manier om die stopregel te ontwijken. Geen loopbandmarathon als vervangende race toevoegen."
        ]
      },
      "protocolSignature": "4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"
    }
  ],
  "phases": [
    {
      "phaseId": "v6-phase-41",
      "name": "Actief herstel",
      "shortName": "Actief herstel",
      "number": 1,
      "startWeek": 41,
      "endWeek": 41,
      "startDate": "2026-10-05",
      "endDate": "2026-10-11",
      "description": "Herstel; geen intensiteit. De 60 min is een comfortabele bovengrens. Vier runs, één fietsrit, twee volledige rustdagen"
    },
    {
      "phaseId": "v6-phase-42",
      "name": "Heropbouw + eerste MP",
      "shortName": "Heropbouw + eerste MP",
      "number": 2,
      "startWeek": 42,
      "endWeek": 42,
      "startDate": "2026-10-12",
      "endDate": "2026-10-18",
      "description": "Normale heropbouw na herstel; eerste korte MP-blokken. Eerste langere duur blijft geheel easy"
    },
    {
      "phaseId": "v6-phase-43",
      "name": "Duur + specifiek ritme",
      "shortName": "Duur + specifiek ritme",
      "number": 3,
      "startWeek": 43,
      "endWeek": 43,
      "startDate": "2026-10-19",
      "endDate": "2026-10-25",
      "description": "Meer continue duur, iets langere MP-blokken. Deze weekstap alleen uitvoeren wanneer W42 werkelijk goed is verwerkt"
    },
    {
      "phaseId": "v6-phase-44",
      "name": "Specifieke opbouw",
      "shortName": "Specifieke opbouw",
      "number": 4,
      "startWeek": 44,
      "endWeek": 44,
      "startDate": "2026-10-26",
      "endDate": "2026-11-01",
      "description": "Belangrijkste specifieke opbouw: 30 min MP en 135 min lange easy. Houd liefst circa 72 uur tussen die sessies"
    },
    {
      "phaseId": "v6-phase-45",
      "name": "Consolideren",
      "shortName": "Consolideren",
      "number": 5,
      "startWeek": 45,
      "endWeek": 45,
      "startDate": "2026-11-02",
      "endDate": "2026-11-08",
      "description": "Weekvolume consolideren; laatste langere duur uiterlijk 8 november. Houd circa 72 uur tussen MP en lange duur, en 6–8 dagen tussen beide lange duurlopen"
    },
    {
      "phaseId": "v6-phase-46",
      "name": "Taper",
      "shortName": "Taper",
      "number": 6,
      "startWeek": 46,
      "endWeek": 46,
      "startDate": "2026-11-09",
      "endDate": "2026-11-15",
      "description": "Taper: vier korte loopcontacten; aanzienlijk minder duur, kleine MP-prikkel. Fietsen mag vervallen"
    },
    {
      "phaseId": "v6-phase-47",
      "name": "Marathonweek",
      "shortName": "Marathonweek",
      "number": 7,
      "startWeek": 47,
      "endWeek": 47,
      "startDate": "2026-11-16",
      "endDate": "2026-11-22",
      "description": "Raceweek: drie korte runs vóór de race, geen fietsen. Training 4 is de marathon op zondag 22 november; geen training 5"
    }
  ],
  "guidance": {
    "sections": {
      "1": {
        "title": "Uitgangspunt, behouden geschiedenis en realisme",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Deze zelfstandige V6 herziet de toekomstige planning uit het aangeleverde marathonschema_Roy_FINAL_V5_GARMIN_OUTDOOR_2026-10-03(2).md. V5 blijft behouden. De in de opdracht genoemde kopie met (1) is niet apart aangeleverd; deze revisie gebruikt de daadwerkelijk bijgevoegde kopie met (2). Een gepland trainingsblok wordt nooit als uitgevoerd geboekt."
          },
          {
            "type": "paragraph",
            "text": "Standaardscenario: de herstelweek werkt, je benen voelen bij aanvang van week 42 weer normaal en je kunt de rustige sessies goed verwerken. Vanuit dat scenario gaat de onderstaande opbouw door. Herstel wordt niet zes weken lang als verondersteld probleem ingebouwd; klachten kunnen een afzonderlijke training of duurstap wel overrulen."
          },
          {
            "type": "heading",
            "text": "Bekende activiteiten en relevante context"
          },
          {
            "type": "table",
            "headers": [
              "Datum / periode",
              "Bekend gegeven",
              "Betekenis voor V6"
            ],
            "rows": [
              [
                "2025",
                "Halve marathon Utrecht circa 1:37; Florence-marathon 30 november 3:55:50, volgens eerdere gebruikersinformatie",
                "Marathonervaring en eerder sub-4 zijn relevant, maar bewijzen geen actuele vorm"
              ],
              [
                "18 september 2026",
                "21,1 km op de loopband op 11 km/u, circa 1:55:05, volgens eerdere gebruikersinformatie",
                "Recente langdurige aerobe belasting; geen automatische gelijkstelling aan buitenbelastbaarheid"
              ],
              [
                "27 september 2026",
                "Texel bevatte run-walk; buitentrainingen verliepen daarna moeizaam",
                "Aanleiding voor de herstelweek; hier geen ontbrekende wedstrijddata bij verzonnen"
              ],
              [
                "3 oktober 2026",
                "Geplande 110 min voortijdig afgebroken; 1:26:00 geregistreerd, 58:24 rentijd, 26:34 wandeltijd; gemiddeld 7:05/km, 117 bpm gemiddeld, 137 bpm maximaal",
                "Behouden uit V5; door Roy aangeleverde data, niet opnieuw uit een FIT-bestand berekend"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Rentijd en wandeltijd op 3 oktober tellen op tot 1:24:58. De overige 1:02 blijft ongeclassificeerd. Zware/vermoeide benen waren de voornaamste beperking, met ook enige conditiebeperking. Een lage gemiddelde hartslag tijdens run-walk bewijst geen voldoende spierbelastbaarheid. De oorzaak van de vermoeidheid staat niet vast; dit schema stelt geen diagnose."
          },
          {
            "type": "paragraph",
            "text": "Sub-4 is een ambitie, geen voorspelling. Het eerdere marathonresultaat ondersteunt de ambitie, maar de recente buitentrainingen maken de huidige haalbaarheid onzeker. Er zijn na herstel slechts vier opbouwweken vóór de taper. Een klassieke maandenlange voorbereiding met meerdere comfortabele duurlopen van 25–32 km kan daarmee niet verantwoord worden gereconstrueerd. De langste geplande sessie is 2:30 uur: bij 6:30–7:30/km ongeveer 20–23 km, bij een rustiger tempo minder. Dat verbetert de duurbelasting aanzienlijk tegenover V5, maar laat een ongetest gat naar vier uur racen. We verlengen niet naar drie uur om een kilometergetal te halen."
          },
          {
            "type": "paragraph",
            "text": "De oude V4-weken van 65,42 → 72,22 → 77,73 km en zware 29–31-km-trainingen keren niet terug. Het historische 3:30-doel is geen actief doel. Geen krachttraining, extra testwedstrijd of gemiste kilometers inhalen."
          }
        ]
      },
      "2": {
        "title": "Intensiteit, spreiding en eenvoudige overrides",
        "blocks": [
          {
            "type": "table",
            "headers": [
              "Trainingstype",
              "Target in Garmin",
              "Gevoel / cue"
            ],
            "rows": [
              [
                "Easy en lange duur",
                "Geen doel / Open / Vrij",
                "RPE 2–3/10; volledige zinnen, soepele pas, reserve houden"
              ],
              [
                "Warming-up, cooldown en jogherstel",
                "Geen doel / Open / Vrij",
                "RPE circa 2; herstel naar comfortabel praten"
              ],
              [
                "Marathonpace (MP)",
                "Tempo: 5:35–5:50 min/km",
                "Mik op circa 5:40–5:45; RPE meestal 4–5, gecontroleerd; geen drempeltest"
              ],
              [
                "Wandelstappen in W41",
                "Geen doel / Open / Vrij",
                "Ontspannen wandelen; sneller lopen om te compenseren is niet nodig"
              ],
              [
                "Rustig fietsen",
                "Vrij; geen hartslag-, snelheids- of vermogensdoel",
                "RPE 2–3; licht verzet, volledige zinnen"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "De MP-range is een praktische trainingsmarge rond het doeltempo, geen racegemiddelde: 5:50/km gemiddeld zou ruim boven vier uur uitkomen. Ga bij wind, warmte of hellingen op inspanning af; maak van een alert geen sprintopdracht. Voelt MP als RPE 6 of hoger, of wordt het duidelijk zwaarder per blok, vervang resterende MP-minuten door easy. Voeg geen sneller tempo toe omdat de korte blokken gemakkelijk voelen. Geen zware intervallen of fast finish in deze korte voorbereiding; de grootste behoefte is duurbelastbaarheid, met bescheiden specifieke prikkels."
          },
          {
            "type": "heading",
            "text": "Zelf dagen kiezen"
          },
          {
            "type": "paragraph",
            "text": "W41–46: vier loopsessies + één fietsrit + twee volledige rustdagen. Training 1 is easy, 2 is de middellange/MP-sessie, 3 is kort easy, 4 is de langere duur, 5 is fietsen. Nummers identificeren sessies; training 5 hoeft niet als laatste."
          },
          {
            "type": "item",
            "text": "Neem minimaal één volledige rustdag na training 4, ook over een weekgrens heen. De eerstvolgende run is training 1 of een andere korte easy-run."
          },
          {
            "type": "item",
            "text": "Houd minimaal 48 uur tussen MP-sessie en langere duur, in beide richtingen. In W44–45 liever circa 72 uur. Alleen lichte sessies of rust ertussen."
          },
          {
            "type": "item",
            "text": "Houd langere duurlopen circa 6–8 dagen uit elkaar. Vrije dagkeuze betekent niet dat een late duurloop en de volgende vroege duurloop dicht op elkaar mogen staan."
          },
          {
            "type": "item",
            "text": "Training 3 mag de dag vóór training 4 als hij werkelijk licht voelt; anders plaats hem eerder. Maak van fietsen geen verborgen zware beentraining. Zet de fietsrit bij voorkeur op afstand van de lange duur."
          },
          {
            "type": "item",
            "text": "Een passende verdeling over zeven vrije plaatsen is: rust → training 1 → training 2 → training 5 → training 3 → training 4 → rust. Dit is geen verplichte weekdagindeling; schuif de hele volgorde waar nodig. Easy direct vóór MP is hier kort en laagintensief."
          },
          {
            "type": "item",
            "text": "Schrap bij tijdgebrek eerst fietsen, daarna een korte easy-run; prop de twee belastende sessies niet naast elkaar. Geen twee trainingen op één dag om het totaal te halen."
          },
          {
            "type": "heading",
            "text": "Overrides: alleen toepassen wanneer nodig"
          },
          {
            "type": "table",
            "headers": [
              "Situatie",
              "Actie"
            ],
            "rows": [
              [
                "Normale benen, geen toenemende pijn, herstel normaal",
                "Geplande training uitvoeren"
              ],
              [
                "Onverwacht zware benen of slechter herstel",
                "Eerst 10 min zeer easy beoordelen; verwijder MP of verkort de sessie ongeveer 20–30%. Bij geen verbetering stoppen. Geen compensatie later"
              ],
              [
                "Lokale toenemende pijn, manken of gewijzigde techniek",
                "Stop de training; geen intensiteit en geen vervangende belasting door pijn heen. Laat aanhoudende klachten beoordelen"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Bij herhaald moeizame easy-runs of onverklaarde vermoeidheid ondanks de herstelweek: beoordeel de oorzaak met huisarts/sportfysiotherapeut voordat de opbouw wordt voortgezet. Herstel terug naar normaal binnen ongeveer 24–36 uur is een praktisch signaal; na een langere duur kan het langer duren, maar duidelijk aanhoudende zwaarte na 48 uur is reden om de volgende belasting te verlagen. Dit zijn coachingsregels, geen diagnostische grenswaarden."
          },
          {
            "type": "heading",
            "text": "De lange duurstappen beoordelen"
          },
          {
            "type": "paragraph",
            "text": "85 → 110 → 135 → 150 min is de planning bij geslaagde opbouw, geen garantie dat iedere stap bij jou past. Vooral W42 verandert de continue loopbelasting sterker dan het weektotaal doet vermoeden. De herstelweek bewijst niet ineens dat de lokale belastbaarheid volledig hersteld is."
          },
          {
            "type": "paragraph",
            "text": "Gebruik de laatst werkelijk goed verdragen continue buitenduur, afstand, laatste 20 minuten en herstel als referentie. De eerste 85 min gaat alleen volledig door wanneer W41-training 2 comfortabel verliep en W42-easy duidelijk normaal voelt. Blijkt na 60–70 min dat de benen terugvallen, rond af; maximaal 85 is geen minimale prestatie. Bij een gemiste/verkorte duurstap: de volgende langere sessie hoogstens ongeveer 15–25 min boven de laatst goed verdragen continue duur, zo nodig dezelfde duur herhalen. Een duidelijke afstandssprong ten opzichte van de langste buitenrun in de afgelopen 30 dagen is een extra reden om de stap te verkleinen. Geen gelijktijdige extra MP in de lange duur."
          },
          {
            "type": "paragraph",
            "text": "Er geldt geen automatische wekelijkse 10%-regel. Recent onderzoek naar blessurerisico bij sprongen in één sessie is wel relevant; een bescheiden weektotaal maakt een grote individuele duurstap niet vanzelf veilig (bron 2). De voorgestelde stappen zijn individuele afwegingen onder onzekerheid. Als de opbouw daardoor achterblijft, houden we de taperdatum aan en gebruiken we dat als informatie voor de race, zonder de achterstand in te halen."
          }
        ]
      },
      "3": {
        "title": "Garmin Forerunner 165 en loopband",
        "blocks": [
          {
            "type": "heading",
            "text": "Invoer in Garmin Connect"
          },
          {
            "type": "paragraph",
            "text": "Ga naar Meer → Training en planning → Workouts → Maak een workout → Hardlopen. Kies per stap het staptype uit de tabel, duurtype Tijd en de exacte tijd. Kies bij Vrij Geen doel; RPE/praattest zijn beschrijvingen, geen invoerbare targets. Bij MP: targettype Tempo, snelste grens 5:35/km, langzaamste grens 5:50/km. Voeg een herhaalgroep toe met het genoemde totale aantal herhalingen en sleep alleen werk + herstel binnen de groep. Stuur de workout naar de FR165, synchroniseer en controleer de stapweergave vóór vertrek."
          },
          {
            "type": "paragraph",
            "text": "Alle herstelstappen in repeats blijven óók na de laatste herhaling staan. Daarom zijn ze meegerekend. Geen eerste herhaling los toevoegen en daarna hetzelfde aantal repeats instellen. Warming-up/cooldown hebben vaste tijd; kies niet ‘tot rondeknop’ in plaats van de genoemde minuten. Easy heeft geen aparte herstelgroep. Er zijn geen verplichte strides in V6."
          },
          {
            "type": "paragraph",
            "text": "Gebruik stapwisselmeldingen; bij MP ook de workout-tempoindicatie. Zet afzonderlijke zone- en tempoalerts uit als die met de workout botsen. Houd 1-km Auto Lap voor gewone runs als dat prettig werkt; tijdens tijdgestuurde workouts kunnen workoutstappen je rondeweergave beïnvloeden. Lees bij MP zo mogelijk gemiddeld staptempo, en bij gewone runs rondetempo; reageer niet op iedere instant-pacefluctuatie."
          },
          {
            "type": "paragraph",
            "text": "Polar H9 registreert hartslag als observatie; controleer verbinding en GPS-lock. Een borstband kalibreert je zones niet. Geen universele hartslagcap of verplicht zone-2-target. Een lage hartslag heft de stopregels niet op."
          },
          {
            "type": "paragraph",
            "text": "Fietsen: de FR165 ondersteunt fietsregistratie en tijdalerts; ondersteuning van een vanuit Connect verzonden gestructureerde fietsworkout wordt hier niet verondersteld. Iedere fietstraining geeft daarom ook een volledige, uitvoerbare tijdalertvariant op het horloge. Gebruik Fietsen/Binnen fietsen met een terugkerende tijdmelding van 10 min en de genoemde overgangstijden. De meldingen zijn geheugensteuntjes; geen intensiteitsopdracht. Dit is geen hardloopworkout die als fietsen wordt vermomd."
          },
          {
            "type": "heading",
            "text": "Loopbandmodus per hardlooptraining"
          },
          {
            "type": "paragraph",
            "text": "Outdoor is de standaard, vooral voor langere duur en MP. Op de band blijven alle stapduren en repeats gelijk. Start op 0% helling; 1% is geen universele verplichting. Zet een ventilator aan waar mogelijk."
          },
          {
            "type": "item",
            "text": "Easy: start bijvoorbeeld op 7–9,5 km/u, warming-up/cooldown/herstel 7–8,5 km/u; pas aan op RPE en praatcomfort. Dit zijn startbereiken, geen trainingsdoelen of limieten."
          },
          {
            "type": "item",
            "text": "MP 5:35–5:50/km komt overeen met 10,29–10,75 km/u. Praktisch 10,3–10,7 km/u, midden circa 10,5–10,6 km/u. De bandsnelheid en inspanning zijn leidend, niet een onjuist gekalibreerde horloge-pace."
          },
          {
            "type": "item",
            "text": "Wandelen: 4–5,5 km/u, zo nodig rustiger."
          },
          {
            "type": "item",
            "text": "Programmeer dezelfde run-workout en kies bij starten Loopband als jouw menu dit aanbiedt. Anders gebruik Loopband-registratie met de tabel als tijdschema; voer tempo op de band in. Geen extra minuten om een afstandsverschil te corrigeren."
          },
          {
            "type": "paragraph",
            "text": "Minstens de MP-sessies en langere duurlopen in W43–45 bij voorkeur buiten voor relevante race-informatie. Een loopbandvervanging is training, maar een probleemloze bandrun bewijst niet automatisch hetzelfde buiten."
          }
        ]
      },
      "4": {
        "title": "Weekoverzicht",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Alle tijden zijn totale sessietijden, inclusief warming-up, herstel, wandelen en cooldown. Fietsminuten blijven apart. Afstand wordt geregistreerd als resultaat; er is geen kilometerquotum. W41 heeft 164 min geplande rentijd en 21 min wandelen. W42–46 hebben bij uitvoering zonder extra wandelpauzes rentijd gelijk aan loopsessietijd."
          },
          {
            "type": "table",
            "headers": [
              "Week / periode",
              "Functie",
              "T1 / T2 / T3 / T4 (min)",
              "Looptotaal",
              "MP-minuten",
              "Fiets T5",
              "Alles samen"
            ],
            "rows": [
              [
                "41 · 5–11 okt",
                "Actief herstel",
                "30 / 60 / 30 / 65",
                "185",
                "0",
                "60",
                "245"
              ],
              [
                "42 · 12–18 okt",
                "Heropbouw + eerste MP",
                "35 / 50 / 30 / 85",
                "200",
                "15",
                "60",
                "260"
              ],
              [
                "43 · 19–25 okt",
                "Duur vergroten + specifiek ritme",
                "40 / 60 / 35 / 110",
                "245",
                "24",
                "50",
                "295"
              ],
              [
                "44 · 26 okt–1 nov",
                "Belangrijkste specifieke opbouwweek",
                "40 / 65 / 35 / 135",
                "275",
                "30",
                "45",
                "320"
              ],
              [
                "45 · 2–8 nov",
                "Consolideren + laatste langere duur",
                "35 / 60 / 30 / 150",
                "275",
                "30",
                "40",
                "315"
              ],
              [
                "46 · 9–15 nov",
                "Taper 1",
                "30 / 45 / 25 / 70",
                "170",
                "12",
                "30",
                "200"
              ],
              [
                "47 · 16–22 nov",
                "Raceweek",
                "25 / 30 / 15 / race",
                "70 vóór race",
                "6 vóór race",
                "geen",
                "70 vóór race"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Race apart: 42,195 km; doeltijd onder 240 min. Bij circa 239 min race wordt W47 circa 309 min lopen, plus eventuele afzonderlijke wandelwarming-up/cooldown. Die racebelasting telt niet mee bij de taperpercentages."
          },
          {
            "type": "paragraph",
            "text": "Loopsessietijd W41→45: 185 → 200 (+8,1%) → 245 (+22,5%) → 275 (+12,2%) → 275 (0%). De +22,5% in W43 is geen algemene aanbeveling: hij volgt op een bewust gereduceerde herstelweek en W42-herstart. Hij komt vooral uit +25 min lange duur en +10 min middellange sessie, met korte runs +5 min elk. W45 houdt het loopvolume gelijk: +15 min lange duur wordt gecompenseerd door minder minuten elders; MP blijft 30 min. Fietsen daalt na W42. Het weektotaal in minuten onderschat daarbij dat MP zwaarder is dan easy; beoordeel dus ook inspanning en herstel."
          },
          {
            "type": "paragraph",
            "text": "Van W42 t/m W45 is slechts circa 7,5–10,9% van de loopminuten MP; de rest blijft rustig. De piek van 275 min is bij easy 6:30–7:30/km en 30 min MP ongeveer 38–43 km, alleen ter oriëntatie. Loop rustiger als dat nodig is; voeg geen kilometers toe om deze schatting te behalen."
          },
          {
            "type": "heading",
            "text": "Taperkeuze"
          },
          {
            "type": "paragraph",
            "text": "Laatste langere duur uiterlijk 8 november, bij voorkeur 7 november als dat de spreiding verbetert. Vanaf 9 november circa twee weken taper. W46 is 170/275 = 61,8% van het piekvolume, dus 38,2% minder; W47 vóór de race 70/275 = 25,5%, dus 74,5% minder. Beide taperweken samen: 240 versus 550 min in twee piekweken, gemiddeld 56,4% reductie. Korte MP-prikkels blijven, hun duur neemt sterk af. Vier loopcontacten inclusief race in W47; fietsen vervalt dan."
          },
          {
            "type": "paragraph",
            "text": "Twee weken is een praktische keuze bij deze korte opbouw en relatief bescheiden piek, geen bewezen individueel optimum. Langere tapers kunnen ook gunstig zijn; bij vertraagd herstel mag de afbouw eerder of sterker. Geen nieuwe piek na 8 november. Als W44/45 door terugval veel lager uitvallen, zijn de taperduren geen minimum: verlaag ze passend bij de werkelijk verdragen basis en actuele frisheid."
          }
        ]
      },
      "5": {
        "title": "Checkpoints: voortgang naar het bestaande sub-4-doel",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Deze beoordelingen vervangen geen trainingen en voegen geen maximale test toe. Sub-4 blijft het doel; de gegevens bepalen of de geplande belasting passend blijft en hoe verstandig een sub-4-starttempo is."
          },
          {
            "type": "table",
            "headers": [
              "Moment",
              "Waarnaar kijken",
              "Praktische consequentie"
            ],
            "rows": [
              [
                "Einde W41, herstel van de laatste sessie meenemen",
                "Normale benen; 60 min easy comfortabel of duidelijk verbeterend; geen toenemende pijn; herstel normaliseert",
                "Bij het standaardscenario W42 starten. Bij blijvende zware benen eerst korter easy en MP uitstellen; geen herstelweek automatisch als geslaagd afvinken"
              ],
              [
                "Einde W42",
                "3×5 min MP gecontroleerd, geen oplopende zware inspanning; 85 min easy verwerkt; herstel volgende dag",
                "W43-opbouw uitvoeren of de langste duurstap verkleinen. Geen extra MP omdat het goed ging"
              ],
              [
                "Rond 1–3 november, na W44",
                "Werkelijke consistentie W42–44; 3×10 min MP; laatste deel van 110/135 min easy; herstel 24–48 uur; gel- en drinktolerantie",
                "Belangrijkste voorlopige sub-4-readiness-evaluatie. W45 consolideren; zo nodig 2×15 verkorten of lange duur niet verhogen"
              ],
              [
                "Rond 9–10 november, na de laatste langere duur; bevestigen vóór 15 november",
                "2×15 min MP beheerst; 135–150 min easy zonder instorten; voeding haalbaar; geen nieuwe klachten; normale hersteltrend",
                "Definitief raceplan verfijnen. Geen nieuwe lange test in de taper. Besluit bij duidelijke tegenvallende data tot een rustiger raceplan of heroverweeg starten"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Sterkere ondersteuning voor sub-4: meerdere opeenvolgende goed verwerkte weken, stabiele techniek, MP-blokken rond doeltempo bij RPE circa 4–5 zonder forceren, langere easy-duur zonder uitgesproken verval, voeding verdragen en herstel passend. Zwakkere ondersteuning: MP voelt herhaald als drempelwerk, ongeplande wandelpauzes wegens uitgeputte benen, sterk verval aan het eind van duurlopen of aanhoudend slecht herstel. Geen enkele 30-min-MP-sessie of 150-min-easy-run bewijst een sub-4-marathon. Een vaste kans of voorspelde eindtijd uit deze criteria zou schijnprecisie zijn."
          },
          {
            "type": "paragraph",
            "text": "Log per sessie: geplande/werkelijke totale tijd, rentijd, wandeltijd, afstand, verstreken versus bewegende tijd, gemiddeld tempo met eenheid, MP-staptempo, RPE, praattest, beenzwaarte 0–10, pijnlocatie/trend, route/weer, H9-gemiddelde/maximale hartslag en herstel de volgende ochtend en na 24–48 uur. Vergelijk hartslag alleen tussen vergelijkbare sessies en omstandigheden. Hartslagdrift kan informatie geven, maar warmte, drinken, route en meetfouten beïnvloeden hem; geen vaste driftgrens als startbewijs. Garmin-voorspellingen en oude prestaties zijn aanvullende context."
          }
        ]
      },
      "6": {
        "title": "Voeding, drinken, herstel en materiaal",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Gebruik vertrouwde SiS Beta Fuel Neutral en Bulk Electrolytes, indien goed verdragen. Reken met het daadwerkelijke koolhydraatgehalte op jouw verpakking: de voorbeelden hieronder nemen 40 g per gel aan. Er is hier geen specifieke verpakking opnieuw geïnspecteerd. Hogere inname alleen na oefening; geen nieuw geltype, supplement of cafeïneplan op racedag."
          },
          {
            "type": "table",
            "headers": [
              "Situatie",
              "Richting / uitvoering"
            ],
            "rows": [
              [
                "Easy tot circa 60 min",
                "Normaal gevoed starten; gels niet verplicht. Water naar dorst/weer"
              ],
              [
                "W42 · 85 min",
                "Vertrouwde, lage tot matige inname oefenen; circa 30–45 g/u als startpunt, of reeds bewezen 50–60 g/u"
              ],
              [
                "W43 · 110 min",
                "Circa 45–60 g/u oefenen, naar tolerantie"
              ],
              [
                "W44 · 135 min",
                "Circa 60–70 g/u als vooraf goed verdragen; anders lager"
              ],
              [
                "W45 · 150 min",
                "Geoefende racestrategie, circa 60–80 g/u; 80 alleen als de voorgaande oefening goed ging"
              ],
              [
                "Marathon rond 4 uur",
                "Circa 60–80 g/u, zo nodig 80–90 g/u uitsluitend als al geoefend en verdragen; kies het best bewezen niveau, niet de hoogste theoretische inname"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "De trainingsspecifieke gelvoorbeelden staan bij training 4. Rond een gewenste inname af naar een praktisch, verdragen patroon; een hele gel maakt een kortere sessie niet precies gelijk aan een gemiddeld aantal gram per uur. Koolhydraten in sportdrank tellen mee."
          },
          {
            "type": "heading",
            "text": "Racevoorraad en voedingsmomenten"
          },
          {
            "type": "paragraph",
            "text": "Bij 40 g per gel en ongeveer vier uur race:"
          },
          {
            "type": "table",
            "headers": [
              "Inname",
              "Koolhydraten totaal",
              "Gels als enige koolhydraatbron",
              "Voorbeeld tijdens de race"
            ],
            "rows": [
              [
                "60 g/u",
                "circa 240 g",
                "6",
                "op 20, 60, 100, 140, 180 en 220 min"
              ],
              [
                "70 g/u",
                "circa 280 g",
                "7",
                "op 15, 50, 85, 120, 155, 190 en 225 min"
              ],
              [
                "80 g/u",
                "circa 320 g",
                "8",
                "op 15, 45, 75, 105, 135, 165, 195 en 225 min"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Deze patronen beginnen vroeg en spreiden de inname; het gemiddelde over de hele race is een voorraadberekening. Kies één geoefend patroon. Bij een tragere race zijn extra voeding en langere bevoorrading nodig; bijvoorbeeld een reservegel meenemen als dat praktisch past. Een gel vóór de start hoort bij de voorstartvoeding en telt niet als één van de tijdens-racegels in deze tabel. Sportdrank vermindert het aantal benodigde gels; tel geen volledige 80 g/u aan gels plus ongemerkt extra koolhydraten uit drank op."
          },
          {
            "type": "paragraph",
            "text": "Met maximaal 250 ml eigen vloeistof ben je afhankelijk van waterposten. Leg vóór vertrek uit de laatste langere training en de race-informatie vast waar drinken verkrijgbaar is en hoe gelmomenten daarop aansluiten. Drink volgens je geoefende behoefte, dorst en weersomstandigheden; geen geforceerd literschema. Gelwater volgens productinstructie en eigen tolerantie. Elektrolyten volgens etiket en beproefd plan; ze vervangen water en koolhydraten niet. Geen universele zoutdosering op basis van alleen lichaamsgewicht. De actuele posten, tijdslimiet en producten van de organisator zijn in deze V6 niet vastgesteld: controleer de definitieve deelnemersinformatie. De datum uit de opdracht is de plandatum."
          },
          {
            "type": "heading",
            "text": "Dagelijkse uitvoering"
          },
          {
            "type": "paragraph",
            "text": "Eet voldoende tijdens herstel en opbouw; geen bewust energietekort om lichter aan de start te komen. Neem voor langere training een vertrouwde koolhydraatrijke maaltijd en oefen het ontbijttijdstip in W44/45. Na de training een gewone maaltijd met koolhydraten en eiwit; slaap en rustig herstel tellen mee. Meer gels kunnen ontbrekende loopbelastbaarheid niet oplossen. Bij maagklachten in de oefening: pas hoeveelheid, timing en drinken aan, niet vlak voor de marathon plots verhogen."
          },
          {
            "type": "paragraph",
            "text": "Gebruik standaard trainingschoenen. Test raceschoenen, kleding en het dragen van gels in de bestaande sessies van W44/45, zonder extra kilometers. Geen nieuw schoenmodel vlak voor de race. Controleer H9, horlogebatterij en GPS; voeding klaarleggen vóór vertrek."
          }
        ]
      },
      "7": {
        "title": "Voorlopig sub-4-raceplan — zondag 22 november",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Primair doel: onder 4:00:00 op de officiële 42,195 km; richtpunt 3:59:xx of iets sneller als de training dat ondersteunt. Gebruik de tijdsdefinitie van de organisator (netto/bruto) bij de uiteindelijke beoordeling; neem niet aan dat startvakvertraging gratis is in iedere uitslag. Geen tijd bankieren met een snelle eerste helft."
          },
          {
            "type": "heading",
            "text": "Doeltempo en werkelijk gemiddelde"
          },
          {
            "type": "item",
            "text": "Exacte vieruursgrens: 5:41,27/km. Onder vier uur vraagt een iets lager gemiddelde, inclusief alle vertragingen."
          },
          {
            "type": "item",
            "text": "5:41/km over exact 42,195 km is circa 3:59:49: slechts ongeveer 11 sec marge."
          },
          {
            "type": "item",
            "text": "5:40/km over exact 42,195 km is circa 3:59:06: ongeveer 54 sec marge."
          },
          {
            "type": "item",
            "text": "De trainingsrange 5:35–5:50/km dient voor bruikbare workoutsturing; hij is veel te ruim als eindtijdstrategie. In gunstige omstandigheden rond 5:40/km werkelijk gemiddeld mikken, met beperkte normale schommelingen."
          },
          {
            "type": "paragraph",
            "text": "GPS kan te veel of te weinig afstand meten, en je loopt vaak iets meer dan de kortste gecertificeerde lijn. Daarom gaat verstreken tijd bij officiële afstandsmarkeringen vóór een GPS-gemiddelde dat exact 5:40 toont. Bijvoorbeeld: 42,5 GPS-km op gemiddeld 5:40 geeft al circa 4:00:50. Je hoeft niet voortdurend sneller te rennen om ruis te corrigeren; loop vloeiend, neem nette bochten en controleer periodiek officiële tussentijden."
          },
          {
            "type": "heading",
            "text": "Uitvoering per racefase"
          },
          {
            "type": "table",
            "headers": [
              "Fase",
              "Richting",
              "Uitvoering"
            ],
            "rows": [
              [
                "Voorstart",
                "5 min ontspannen wandelen en losmaken, zo nodig iets langer",
                "Geen vermoeiende hardloopwarming-up; vertrouwd ontbijt en drinken"
              ],
              [
                "0–5 km",
                "Circa 5:43/km, geen versnelling om startdrukte te compenseren",
                "Rustig in ritme komen; korte opstoppingen accepteren. Bij onverwacht zware inspanning direct bijsturen"
              ],
              [
                "5–21,1 km",
                "Circa 5:39–5:40/km wanneer gecontroleerd",
                "Vlak ritme; voeding starten. Niet structureel 5:30 lopen om tijd te sparen"
              ],
              [
                "21,1–30 km",
                "Hetzelfde beheersbare ritme",
                "Check benen, voeding en ademhaling; geen geplande versnelling halverwege"
              ],
              [
                "30–35 km",
                "Inspanning mag oplopen; techniek en beheersbaarheid blijven leidend",
                "Als het tempo haalbaar blijft, vasthouden; bij duidelijk verval geen paniekinhaalactie"
              ],
              [
                "Vanaf 35 km",
                "Alleen beperkt versnellen als reserve duidelijk aanwezig is",
                "Anders ritme vasthouden of vertragen. Toenemende lokale pijn/gewijzigde techniek = stopregel"
              ],
              [
                "Finish",
                "Stop bij de officiële finish",
                "Daarna circa 5 min rustig wandelen indien comfortabel; geen extra loopkilometers"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Rekenvoorbeeld, geen seconde-voor-seconde opdracht: eerste 5 km op 5:43/km, daarna 5:40/km:"
          },
          {
            "type": "table",
            "headers": [
              "Officiële afstand",
              "Verstreken tijd ongeveer"
            ],
            "rows": [
              [
                "5 km",
                "0:28:35"
              ],
              [
                "10 km",
                "0:56:55"
              ],
              [
                "Halve marathon (21,0975 km)",
                "1:59:48"
              ],
              [
                "30 km",
                "2:50:15"
              ],
              [
                "40 km",
                "3:46:55"
              ],
              [
                "42,195 km",
                "3:59:21"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Dit voorbeeld heeft maar circa 39 sec marge voor stops en omwegen. Voeding/water pakken daarom vooraf oefenen; niet harder starten om een denkbeeldige stopvoorraad te creëren. Vallen de eerste kilometers duidelijk langzamer uit, beoordeel of het beheerst vervolgen van sub-4 nog verstandig is. Geen grote tempoversnelling om de achterstand onmiddellijk weg te poetsen."
          },
          {
            "type": "heading",
            "text": "Garmin op racedag — exact uitvoerbaar"
          },
          {
            "type": "table",
            "headers": [
              "Onderdeel",
              "Duurtype / target",
              "Invoer / cue"
            ],
            "rows": [
              [
                "Voorstart warming-up, apart",
                "5 min wandelen; Vrij",
                "Apart van de racetimer; geen GPS-afstand aan de race toevoegen"
              ],
              [
                "Race",
                "Open duur tot officiële finish; doelritme circa 5:40/km",
                "Gewone Hardlopen-activiteit is de standaard. Auto Pause uit; geen stop van de timer bij waterposten"
              ],
              [
                "Repeats / herstel",
                "Geen geplande repeats of herstelstappen",
                "Aaneengesloten race is het basisscenario"
              ],
              [
                "Na finish, apart",
                "5 min wandelen indien comfortabel; Vrij",
                "Racetimer stoppen op finish; los van officiële racetijd"
              ]
            ]
          },
          {
            "type": "paragraph",
            "text": "Programmeer in Garmin als: 5 min wandelen Vrij vóór start, apart → Hardlopen-activiteit tot officiële finish; Auto Pause UIT; geen repeats; rondetempo + gemiddelde tempo + verstreken tijd + afstand → STOP op finish → 5 min wandelen Vrij, apart."
          },
          {
            "type": "paragraph",
            "text": "Gebruik Auto Lap 1 km voor praktische rondetempo's. Zet meldingen op km indien gewenst; geen zone-alert. Een tempoalert 5:35–5:50 kan als ruime attentiemarge, maar is optioneel en garandeert geen racegemiddelde. Kijk niet steeds naar instant pace. Controleer om de 5 km de officiële afstand en verstreken tijd; handmatige rondeknop bij markeringen kan ook, maar zet dan Auto Lap uit om dubbele/onlogische rondes te voorkomen. Kies één methode die je vóór de race hebt geoefend."
          },
          {
            "type": "paragraph",
            "text": "Als je een Connect-workout wilt: maak één stap Hardlopen → Duur: Rondeknop indrukken → Doel: Tempo 5:35–5:50/km, zonder repeats en zonder ingebouwde warming-up/cooldown. Start bij de startlijn en stop de activiteit bij de officiële finish; druk niet onderweg op LAP om deze oneindige racewerkstap te beëindigen. Dit geeft globale sturing, geen automatische fasesplits. Geen GPS-workout die zichzelf bij 42,195 gemeten km beëindigt; de officiële finish is leidend. De gewone activiteit blijft praktisch het eenvoudigst."
          },
          {
            "type": "paragraph",
            "text": "Voeding: voer het best geoefende patroon uit §6 uit. Gebruik een geoefende tijdmelding of bekende officiële kilometerpunten als geheugensteun; menu/alertinstelling vóór de race testen. Hartslag via H9 observeren, geen ongeteste universele bovengrens."
          },
          {
            "type": "heading",
            "text": "Wanneer het tempo onverwacht zwaar voelt"
          },
          {
            "type": "paragraph",
            "text": "Als circa 5:40 al vóór 10–15 km ongewoon zwaar voelt: vertraag direct circa 10–20 sec/km en beoordeel opnieuw. Blijft het te zwaar, laat het tijdsdoel tijdens die race los; niet doorjagen om het trainingsdoel op papier te redden. Het sub-4-doel van de voorbereiding verplicht niet tot een onverstandig racebesluit."
          },
          {
            "type": "paragraph",
            "text": "Run-walk is fallback, bijvoorbeeld een geoefende verhouding 4 min rustig lopen / 1 min wandelen wanneer continu lopen niet meer beheerst gaat en er geen stopreden is. Het looptempo is dan niet hetzelfde als het gemiddelde inclusief wandelen; ga niet sneller lopen om wandelverlies te compenseren. Onder deze fallback is sub-4 niet langer de veronderstelling. Bij lokale toenemende pijn, manken of duidelijke verslechtering stoppen en hulp inschakelen; wandelen is geen manier om die stopregel te ontwijken. Geen loopbandmarathon als vervangende race toevoegen."
          }
        ]
      },
      "8": {
        "title": "Onderbouwing en bronnen",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Wetenschap ondersteunt de uitgangspunten; de exacte minuten, repeats, RPE-grenzen en checkpoints zijn individuele planningskeuzes, geen gevalideerd voorschrift voor jouw sub-4-kans. Bronnen gecontroleerd voor deze revisie op 5 oktober 2026."
          },
          {
            "type": "paragraph",
            "text": "1. Duur en marathonvolume: Fokkema e.a. (2020), observationeel onderzoek bij recreatieve halve-/hele-marathonlopers. Lagere weekomvang en een langste duurloop onder 25 km hingen bij marathonlopers samen met tragere eindtijden. Dit bewijst geen minimum dat iedereen moet halen, of dat extra volume bij actuele vermoeidheid veilig is. V6 voegt daarom relevante duur toe, maar erkent de beperking van de korte voorbereiding. [Artikel en DOI](https://onlinelibrary.wiley.com/doi/10.1111/sms.13725)."
          },
          {
            "type": "paragraph",
            "text": "2. Geen blinde weekregel, wél sessiesprongen serieus nemen: Frandsen e.a. (2025), cohort van 5.205 lopers. Een sessieafstand meer dan 10% boven de langste run in de voorgaande 30 dagen was geassocieerd met meer overbelastingsblessures. Dit gaat over individuele afstandssprongen, niet een universele wekelijkse 10%-wet; het observationele ontwerp bewijst geen harde veilige grens. De 85/110/135/150-min-progressie is niet uit dit onderzoek afgeleid of daardoor ‘bewezen veilig’. [BJSM](https://bjsm.bmj.com/content/59/17/1203) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/40623829/)."
          },
          {
            "type": "paragraph",
            "text": "3. Taper: Wang e.a. (2023), meta-analyse van 14 studies: minder trainingsvolume met behoud van intensiteit en frequentie kan duurprestaties verbeteren; reducties rond 41–60% en tapers tot 21 dagen werden ondersteund. De populaties/sporten verschillen van deze voorbereiding. Twee weken taper, korte MP-prikkels en circa 56% gemiddelde reductie vóór de race zijn de praktische vertaling; geen verplichte overload vooraf. [PLOS ONE](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0282838)."
          },
          {
            "type": "paragraph",
            "text": "4. Sportvoeding: Thomas, Erdman & Burke (2016), gezamenlijke position statement. Koolhydraatstrategie afstemmen op duur, belasting en tolerantie; bij langdurige inspanning kunnen hogere innames passen. De 60–80 g/u-racerichting is geen persoonlijke absorptietest. [Publicatie](https://pubmed.ncbi.nlm.nih.gov/26920240/) · [DOI](https://doi.org/10.1016/j.jand.2015.12.006)."
          },
          {
            "type": "paragraph",
            "text": "5. Voeding oefenen: Jeukendrup (2017), review over trainbaarheid van het maag-darmstelsel; en systematische review over GI-strategieën (2025, 29 geïncludeerde studies). Oefening is veelbelovend, maar uitkomsten en tolerantie verschillen. Daarom vaste producten en stapsgewijze oefening, geen automatische 90 g/u. [Review 2017](https://link.springer.com/article/10.1007/s40279-017-0690-6) · [Systematische review 2025](https://pubmed.ncbi.nlm.nih.gov/40650376/)."
          },
          {
            "type": "paragraph",
            "text": "6. Praktische koolhydraatrichtingen: Wallis, overzicht van voeding voor duursport: 30–60 g/u bij matige duur en hogere glucose-fructose-innames bij langere belasting. Dit overzicht ondersteunt de oefenbereiken, maar legt jouw ideale dosis niet vast. [GSSI-overzicht](https://www.gssiweb.org/sports-science-exchange/article/dietary-carbohydrate-and-the-endurance-athlete-contemporary-perspectives)."
          },
          {
            "type": "paragraph",
            "text": "7. Garmin-uitvoering: officiële FR165-handleiding voor eigen workouts, verzending naar het horloge en activiteitmeldingen; officiële productspecificaties voor fietsregistratie/tijdalerts. Per model en software kan het menu verschillen. [FR165-handleiding](https://www8.garmin.com/manuals/webhelp/GUID-607F08F6-33FC-40BF-9727-84E54043D82D/EN-US/Forerunner_165_Series_OM_EN-US.pdf) · [Officiële functies](https://www.garmin.com.sg/products/wearables/forerunner-165-black/)."
          }
        ]
      },
      "9": {
        "title": "Kwaliteitscontrole V6",
        "blocks": [
          {
            "type": "item",
            "text": "Doel consequent: sub-4 is actief; 3:30 alleen historische context. Een racefallback staat los van de hoofdplanning."
          },
          {
            "type": "item",
            "text": "W41 werkelijk herstel: 185 min sessietijd, 164 min lopen + 21 min wandelen, 60 min licht fietsen, geen MP of strides."
          },
          {
            "type": "item",
            "text": "Alle trainingstijden gecontroleerd: warming-up + alle werk-/herstelherhalingen + cooldown = opgegeven totaal. MP-duur per week 0 / 15 / 24 / 30 / 30 / 12 / 6 min vóór race."
          },
          {
            "type": "item",
            "text": "Weektotalen gecontroleerd: looptijd 185 / 200 / 245 / 275 / 275 / 170 / 70 min vóór race; fietsen 60 / 60 / 50 / 45 / 40 / 30 / 0 min."
          },
          {
            "type": "item",
            "text": "Repeats gecontroleerd: aantallen zijn totale herhalingen; herstel inclusief laatste herhaling. Geen dubbele eerste herhaling."
          },
          {
            "type": "item",
            "text": "Herstelspreiding: minimaal 48 uur tussen MP en langere duur, bij piek liever circa 72 uur; volledige rustdag na langere duur; circa 6–8 dagen tussen langere duurlopen. Dit moet bij eigen dagkeuze bewaakt worden."
          },
          {
            "type": "item",
            "text": "Belasting: geen geforceerd kilometerquotum; langste duur maximaal 150 min, volledig easy. Gemiste duurstappen verkleinen de volgende stap; geen late inhaalpiek."
          },
          {
            "type": "item",
            "text": "Taper: laatste langere duur uiterlijk 8 november; taper vanaf 9 november, MP behouden in korte vorm, fietsrit verminderd/verwijderd."
          },
          {
            "type": "item",
            "text": "Garmin: hardlopen heeft concrete tijdstappen en targets; fietsen heeft exacte timer/tijdalertuitvoering zonder onbevestigde sync-belofte; race eindigt bij officiële finish."
          },
          {
            "type": "item",
            "text": "Race en voeding: theoretische tijden, tussentijden, gram-per-uur en gelvoorraad rekenkundig gecontroleerd. Een pace-range is geen gemiddelde-eindtijdgarantie."
          },
          {
            "type": "item",
            "text": "Geschiedenis behouden: Texel en 3 oktober blijven werkelijk gerapporteerde activiteiten, inclusief de ongeclassificeerde 1:02; toekomstige sessies staan uitsluitend als planning."
          },
          {
            "type": "paragraph",
            "text": "Conclusie van deze revisie: gericht trainen voor sub-4, met een echte herstelweek, daarna doelgerichte maar beperkte marathonopbouw. De haalbaarheid blijft onzeker totdat actuele buitenbelasting, MP-controle en herstel meer bewijs geven; het schema bevat geen finish- of blessurevrijgarantie."
          }
        ]
      }
    },
    "scheduling": [
      "Een volledige rustdag na de langere duur, ook over een weekgrens heen.",
      "Minimaal 48 uur tussen MP en langere duur, in beide richtingen; W44–45 bij voorkeur circa 72 uur.",
      "Langere duurlopen circa 6–8 dagen uit elkaar. Fietsen bij voorkeur op afstand van de lange duur.",
      "Training 5 hoeft niet als laatste. Rust → T1 → T2 → T5 → T3 → T4 → rust is een mogelijke volgorde, geen vaste weekdagen.",
      "Geen trainingen samenpersen, twee sessies op één dag of gemiste kilometers inhalen.",
      "Laatste langere duur uiterlijk 8 november; taper vanaf 9 november. Race op 22 november."
    ],
    "painRules": [
      "Normale benen en herstel, geen toenemende pijn: voer de geplande training uit.",
      "Onverwacht zware benen: beoordeel eerst 10 minuten zeer easy. Verwijder MP of verkort circa 20–30%; stop als het niet verbetert. Niet compenseren.",
      "Lokale toenemende pijn, manken of veranderde techniek: stoppen, niet door pijn heen vervangen. Laat aanhoudende klachten beoordelen.",
      "MP voelt als RPE 6 of hoger of wordt zwaarder per blok: resterende MP-minuten easy. Geen sneller doel toevoegen.",
      "Gemiste of verkorte lange duur: volgende stap hoogstens circa 15–25 minuten boven de laatst goed verdragen continue buitenduur. Zo nodig herhalen; taper blijft staan."
    ],
    "philosophy": [
      "Sub 4:00 is het actieve uitgangspunt, geen voorspelling of startgarantie.",
      "Herstelweek, daarna gecontroleerde aerobe duur en 15–30 minuten MP per week. De lange duur blijft volledig easy.",
      "W45 consolideert; vanaf 9 november taper. Geen krachttraining, extra tests of gemiste kilometers inhalen."
    ],
    "paces": [
      {
        "type": "Easy",
        "speed": "Vrij buiten · band 7–9,5 km/u als startbereik",
        "incline": "0%",
        "rpe": "2–3"
      },
      {
        "type": "Marathonpace",
        "speed": "5:35–5:50/km · band 10,3–10,7 km/u",
        "incline": "0%",
        "rpe": "4–5"
      },
      {
        "type": "Wandelen",
        "speed": "Vrij buiten · band 4–5,5 km/u",
        "incline": "0%",
        "rpe": "ontspannen"
      }
    ],
    "surfaceStrategy": {
      "title": "Outdoor / Garmin of Loopband",
      "explanation": "Zelfde duren en repeats; outdoor is de standaard. Vooral MP en lange duur in W43–45 bij voorkeur buiten.",
      "treadmill": [
        "0% starthelling",
        "Easy op RPE",
        "MP 10,3–10,7 km/u"
      ],
      "outside": [
        "Easy: Geen doel",
        "MP: Tempo 5:35–5:50/km",
        "H9 als observatie"
      ]
    }
  }
};
(function installModel() {
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
})();
