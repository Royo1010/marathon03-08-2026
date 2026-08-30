(function () {
  "use strict";

  const MARATHON_PLAN = {
  "config": {
    "planId": "marathon-3u30-definitief-2026",
    "planVersion": 3,
    "schemaVersion": "marathon-schema-3u30-expliciete-helling-2026.08.30-1",
    "sourceFile": "marathon-schema-3u30-expliciete-helling.md",
    "planName": "Marathonschema 3:30 — definitieve versie",
    "planSubtitle": "12 weken met confidence runs, drie officiële tests en taper",
    "startDate": "2026-08-31",
    "endDate": "2026-11-22",
    "marathonDate": "2026-11-22",
    "targetTime": "3:30:00",
    "targetPace": "4:58,6/km",
    "targetSpeedKmh": 12,
    "practicalMarathonSpeedKmh": 12,
    "trainingFrequency": 4,
    "primarySurface": "primair loopband"
  },
  "phases": [
    {
      "phaseId": "opbouw-confidence",
      "number": 1,
      "name": "Opbouw en confidence",
      "shortName": "Opbouw",
      "startWeek": 36,
      "endWeek": 39,
      "goal": "Lange afstanden geleidelijk normaler laten voelen en marathonpace gecontroleerd introduceren.",
      "startDate": "2026-08-31",
      "endDate": "2026-09-27"
    },
    {
      "phaseId": "herstel-test",
      "number": 2,
      "name": "Herstel en eerste test",
      "shortName": "Herstel + test",
      "startWeek": 40,
      "endWeek": 40,
      "goal": "Vermoeidheid laten zakken en de ontwikkeling van snelheid en drempel meten met de 5 km-benchmark.",
      "startDate": "2026-09-28",
      "endDate": "2026-10-04"
    },
    {
      "phaseId": "marathonspecifiek",
      "number": 3,
      "name": "Marathonspecifieke confidence-fase",
      "shortName": "Marathonspecifiek",
      "startWeek": 41,
      "endWeek": 44,
      "goal": "Lange afstanden beheersen en marathonpace diep in een lange training leren controleren.",
      "startDate": "2026-10-05",
      "endDate": "2026-11-01"
    },
    {
      "phaseId": "taper",
      "number": 4,
      "name": "Taper",
      "shortName": "Taper",
      "startWeek": 45,
      "endWeek": 46,
      "goal": "Volume verlagen, kwaliteit behouden en fris worden zonder nieuwe vermoeidheid op te bouwen.",
      "startDate": "2026-11-02",
      "endDate": "2026-11-15"
    },
    {
      "phaseId": "marathonweek",
      "number": 5,
      "name": "Marathonweek",
      "shortName": "Marathonweek",
      "startWeek": 47,
      "endWeek": 47,
      "goal": "Fit worden, niet fitter worden, en de geteste wedstrijdstrategie uitvoeren.",
      "startDate": "2026-11-16",
      "endDate": "2026-11-22"
    }
  ],
  "weeks": [
    {
      "weekId": "marathon-3u30-week-36",
      "weekNumber": 36,
      "phaseId": "opbouw-confidence",
      "phaseName": "Opbouw en confidence",
      "title": "",
      "startDate": "2026-08-31",
      "endDate": "2026-09-06",
      "periodLabel": "31 augustus – 6 september",
      "plannedDistanceLabel": "±39 km",
      "plannedDistanceKm": 39,
      "focus": "15 km is een lange training.",
      "mentalGoal": "15 km is een lange training.",
      "workouts": [
        {
          "workoutId": "marathon-3u30-w36-t1",
          "weekNumber": 36,
          "trainingNumber": 1,
          "category": "rustige-duur",
          "title": "Easy",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w36-t1-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w36-t1-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w36-t1-s02",
                  "basis": "time",
                  "durationSeconds": 2100,
                  "display": "35 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w36-t1-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "45 min",
          "totalPlannedSeconds": 2700,
          "estimatedDistanceLabel": "±7,3 km",
          "estimatedDistanceKm": 7.3,
          "goal": "Easy en ontspannen lopen op RPE 3–4/10; volledige zinnen moeten mogelijk blijven.",
          "targetRpe": "3–4/10",
          "mentalGoal": "15 km is een lange training.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [
            {
              "title": "Aanwijzingen",
              "items": [
                "RPE: 3–4/10."
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-36",
          "dateLabel": "31 augustus – 6 september",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence"
        },
        {
          "workoutId": "marathon-3u30-w36-t2",
          "weekNumber": 36,
          "trainingNumber": 2,
          "category": "kwaliteit",
          "title": "Eerste marathonpaceblokken",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w36-t2-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w36-t2-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w36-t2-s02",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w36-t2-s03",
                  "basis": "time",
                  "durationSeconds": 480,
                  "display": "8 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "marathontempo",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w36-t2-s04",
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w36-t2-s05",
                  "basis": "time",
                  "durationSeconds": 480,
                  "display": "8 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "marathontempo",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w36-t2-s06",
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w36-t2-s07",
                  "basis": "time",
                  "durationSeconds": 480,
                  "display": "8 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "marathontempo",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w36-t2-s08",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "55 min",
          "totalPlannedSeconds": 3300,
          "estimatedDistanceLabel": "±9,7 km",
          "estimatedDistanceKm": 9.7,
          "goal": "12 km/u leren kennen zonder uitputting. Laatste blok maximaal ongeveer 7/10.",
          "targetRpe": "maximaal ongeveer 7–8/10",
          "mentalGoal": "15 km is een lange training.",
          "orderWarning": "Plan Training 2 en Training 4 liefst met minimaal één rustdag ertussen.",
          "detailsSections": [
            {
              "title": "Doel",
              "items": [
                "12 km/u leren kennen zonder uitputting.",
                "Laatste blok maximaal ongeveer 7/10."
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "QUALITY",
            "MARATHON SPECIFIC"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-36",
          "dateLabel": "31 augustus – 6 september",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence"
        },
        {
          "workoutId": "marathon-3u30-w36-t3",
          "weekNumber": 36,
          "trainingNumber": 3,
          "category": "herstel",
          "title": "Recovery",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w36-t3-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w36-t3-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w36-t3-s02",
                  "basis": "time",
                  "durationSeconds": 1800,
                  "display": "30 min",
                  "speedKmh": 9.8,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w36-t3-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "40 min",
          "totalPlannedSeconds": 2400,
          "estimatedDistanceLabel": "±6,4 km",
          "estimatedDistanceKm": 6.4,
          "goal": "Herstellen en loopritme behouden met zo weinig mogelijk restvermoeidheid.",
          "targetRpe": "3–4/10",
          "mentalGoal": "15 km is een lange training.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-36",
          "dateLabel": "31 augustus – 6 september",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence"
        },
        {
          "workoutId": "marathon-3u30-w36-t4",
          "weekNumber": 36,
          "trainingNumber": 4,
          "category": "lange-duur",
          "title": "Lange duur",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w36-t4-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w36-t4-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w36-t4-s02",
                  "basis": "time",
                  "durationSeconds": 4800,
                  "display": "80 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w36-t4-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "95 min",
          "totalPlannedSeconds": 5700,
          "estimatedDistanceLabel": "±15,6 km",
          "estimatedDistanceKm": 15.6,
          "goal": "Lange afstanden conditioneel en psychologisch steeds normaler en beter beheersbaar maken.",
          "targetRpe": "4–6/10, tenzij expliciet anders beschreven",
          "mentalGoal": "15 km begint een normale afstand te worden.",
          "orderWarning": "Kom niet direct uit Training 2; houd liefst minimaal één rustdag tussen beide trainingen.",
          "detailsSections": [
            {
              "title": "Mentale boodschap",
              "items": [
                "15 km begint een normale afstand te worden."
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "LONG RUN"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-36",
          "dateLabel": "31 augustus – 6 september",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence"
        }
      ]
    },
    {
      "weekId": "marathon-3u30-week-37",
      "weekNumber": 37,
      "phaseId": "opbouw-confidence",
      "phaseName": "Opbouw en confidence",
      "title": "",
      "startDate": "2026-09-07",
      "endDate": "2026-09-13",
      "periodLabel": "7 – 13 september",
      "plannedDistanceLabel": "±43,7 km",
      "plannedDistanceKm": 43.7,
      "focus": "18 km wordt haalbaar.",
      "mentalGoal": "18 km wordt haalbaar.",
      "workouts": [
        {
          "workoutId": "marathon-3u30-w37-t1",
          "weekNumber": 37,
          "trainingNumber": 1,
          "category": "rustige-duur",
          "title": "Easy",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w37-t1-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w37-t1-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w37-t1-s02",
                  "basis": "time",
                  "durationSeconds": 2400,
                  "display": "40 min",
                  "speedKmh": 10.1,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w37-t1-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "50 min",
          "totalPlannedSeconds": 3000,
          "estimatedDistanceLabel": "±8,2 km",
          "estimatedDistanceKm": 8.2,
          "goal": "Easy en ontspannen lopen op RPE 3–4/10; volledige zinnen moeten mogelijk blijven.",
          "targetRpe": "3–4/10",
          "mentalGoal": "18 km wordt haalbaar.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-37",
          "dateLabel": "7 – 13 september",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence"
        },
        {
          "workoutId": "marathon-3u30-w37-t2",
          "weekNumber": 37,
          "trainingNumber": 2,
          "category": "interval",
          "title": "4 × 6 min drempel",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w37-t2-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w37-t2-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w37-t2-s02",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w37-t2-g2",
              "kind": "repeat",
              "label": "4 ×",
              "repetitions": 4,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w37-t2-s03",
                  "basis": "time",
                  "durationSeconds": 360,
                  "display": "6 min",
                  "speedKmh": 12.3,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "drempel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w37-t2-s04",
                  "basis": "time",
                  "durationSeconds": 150,
                  "display": "2:30",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "Na blok 1–3.",
                  "type": "herstel",
                  "isRecovery": true
                }
              ],
              "omitRecoveryAfterLast": true
            },
            {
              "groupId": "marathon-3u30-w37-t2-g3",
              "kind": "sequence",
              "label": "Cooldown",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w37-t2-s05",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "±56:30",
          "totalPlannedSeconds": 3390,
          "estimatedDistanceLabel": "±10,1 km",
          "estimatedDistanceKm": 10.1,
          "goal": "De voorgeschreven kwaliteitsblokken gecontroleerd uitvoeren zonder de lange duurtraining te ondermijnen.",
          "targetRpe": "maximaal ongeveer 7–8/10",
          "mentalGoal": "18 km wordt haalbaar.",
          "orderWarning": "Plan Training 2 en Training 4 liefst met minimaal één rustdag ertussen.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "QUALITY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-37",
          "dateLabel": "7 – 13 september",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence"
        },
        {
          "workoutId": "marathon-3u30-w37-t3",
          "weekNumber": 37,
          "trainingNumber": 3,
          "category": "rustige-duur",
          "title": "Easy",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w37-t3-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w37-t3-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w37-t3-s02",
                  "basis": "time",
                  "durationSeconds": 2100,
                  "display": "35 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w37-t3-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "45 min",
          "totalPlannedSeconds": 2700,
          "estimatedDistanceLabel": "±7,3 km",
          "estimatedDistanceKm": 7.3,
          "goal": "Easy en ontspannen lopen op RPE 3–4/10; volledige zinnen moeten mogelijk blijven.",
          "targetRpe": "3–4/10",
          "mentalGoal": "18 km wordt haalbaar.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-37",
          "dateLabel": "7 – 13 september",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence"
        },
        {
          "workoutId": "marathon-3u30-w37-t4",
          "weekNumber": 37,
          "trainingNumber": 4,
          "category": "lange-duur",
          "title": "Lange duur",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w37-t4-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w37-t4-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w37-t4-s02",
                  "basis": "time",
                  "durationSeconds": 5700,
                  "display": "95 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w37-t4-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "110 min",
          "totalPlannedSeconds": 6600,
          "estimatedDistanceLabel": "±18,1 km",
          "estimatedDistanceKm": 18.1,
          "goal": "Rustig blijven. Geen race.",
          "targetRpe": "4–6/10, tenzij expliciet anders beschreven",
          "mentalGoal": "18 km wordt haalbaar.",
          "orderWarning": "Kom niet direct uit Training 2; houd liefst minimaal één rustdag tussen beide trainingen.",
          "detailsSections": [
            {
              "title": "Doel",
              "items": [
                "Rustig blijven. Geen race."
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "LONG RUN"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-37",
          "dateLabel": "7 – 13 september",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence"
        }
      ]
    },
    {
      "weekId": "marathon-3u30-week-38",
      "weekNumber": 38,
      "phaseId": "opbouw-confidence",
      "phaseName": "Opbouw en confidence",
      "title": "",
      "startDate": "2026-09-14",
      "endDate": "2026-09-20",
      "periodLabel": "14 – 20 september",
      "plannedDistanceLabel": "±48,8 km",
      "plannedDistanceKm": 48.8,
      "focus": "20 km is mogelijk zonder leeg te gaan.",
      "mentalGoal": "20 km is mogelijk zonder leeg te gaan.",
      "workouts": [
        {
          "workoutId": "marathon-3u30-w38-t1",
          "weekNumber": 38,
          "trainingNumber": 1,
          "category": "rustige-duur",
          "title": "Easy",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w38-t1-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w38-t1-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w38-t1-s02",
                  "basis": "time",
                  "durationSeconds": 2700,
                  "display": "45 min",
                  "speedKmh": 10.1,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w38-t1-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "55 min",
          "totalPlannedSeconds": 3300,
          "estimatedDistanceLabel": "±9,1 km",
          "estimatedDistanceKm": 9.1,
          "goal": "Easy en ontspannen lopen op RPE 3–4/10; volledige zinnen moeten mogelijk blijven.",
          "targetRpe": "3–4/10",
          "mentalGoal": "20 km is mogelijk zonder leeg te gaan.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-38",
          "dateLabel": "14 – 20 september",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence"
        },
        {
          "workoutId": "marathon-3u30-w38-t2",
          "weekNumber": 38,
          "trainingNumber": 2,
          "category": "interval",
          "title": "6 × 4 min snel",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w38-t2-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w38-t2-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w38-t2-s02",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w38-t2-g2",
              "kind": "repeat",
              "label": "6 ×",
              "repetitions": 6,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w38-t2-s03",
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "interval",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w38-t2-s04",
                  "basis": "time",
                  "durationSeconds": 120,
                  "display": "2 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "Na blok 1–5.",
                  "type": "herstel",
                  "isRecovery": true
                }
              ],
              "omitRecoveryAfterLast": true
            },
            {
              "groupId": "marathon-3u30-w38-t2-g3",
              "kind": "sequence",
              "label": "Cooldown",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w38-t2-s05",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "59 min",
          "totalPlannedSeconds": 3540,
          "estimatedDistanceLabel": "±10,7 km",
          "estimatedDistanceKm": 10.7,
          "goal": "De voorgeschreven kwaliteitsblokken gecontroleerd uitvoeren zonder de lange duurtraining te ondermijnen.",
          "targetRpe": "maximaal ongeveer 7–8/10",
          "mentalGoal": "20 km is mogelijk zonder leeg te gaan.",
          "orderWarning": "Plan Training 2 en Training 4 liefst met minimaal één rustdag ertussen.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "QUALITY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-38",
          "dateLabel": "14 – 20 september",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence"
        },
        {
          "workoutId": "marathon-3u30-w38-t3",
          "weekNumber": 38,
          "trainingNumber": 3,
          "category": "rustige-duur",
          "title": "Progressief",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w38-t3-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w38-t3-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w38-t3-s02",
                  "basis": "time",
                  "durationSeconds": 1800,
                  "display": "30 min",
                  "speedKmh": 10.1,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w38-t3-s03",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 10.8,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w38-t3-s04",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "50 min",
          "totalPlannedSeconds": 3000,
          "estimatedDistanceLabel": "±8,3 km",
          "estimatedDistanceKm": 8.3,
          "goal": "Easy en ontspannen lopen op RPE 3–4/10; volledige zinnen moeten mogelijk blijven.",
          "targetRpe": "3–4/10",
          "mentalGoal": "20 km is mogelijk zonder leeg te gaan.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-38",
          "dateLabel": "14 – 20 september",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence"
        },
        {
          "workoutId": "marathon-3u30-w38-t4",
          "weekNumber": 38,
          "trainingNumber": 4,
          "category": "lange-duur",
          "title": "FIRST 20K CONFIDENCE RUN",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w38-t4-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w38-t4-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w38-t4-s02",
                  "basis": "time",
                  "durationSeconds": 6000,
                  "display": "100 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w38-t4-s03",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w38-t4-s04",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "125 min",
          "totalPlannedSeconds": 7500,
          "estimatedDistanceLabel": "±20,7 km",
          "estimatedDistanceKm": 20.7,
          "goal": "Lange afstanden conditioneel en psychologisch steeds normaler en beter beheersbaar maken.",
          "targetRpe": "4–6/10, tenzij expliciet anders beschreven",
          "mentalGoal": "voor het eerst ervaren dat 20 km gewoon een trainingsafstand kan zijn. Je moet na afloop het gevoel hebben dat er nog kilometers mogelijk waren.",
          "orderWarning": "Kom niet direct uit Training 2; houd liefst minimaal één rustdag tussen beide trainingen.",
          "detailsSections": [
            {
              "title": "Aanwijzingen",
              "items": [
                "Dit is geen prestatietest."
              ]
            },
            {
              "title": "Mentale doel",
              "items": [
                "voor het eerst ervaren dat 20 km gewoon een trainingsafstand kan zijn.",
                "Je moet na afloop het gevoel hebben dat er nog kilometers mogelijk waren."
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "LONG RUN",
            "CONFIDENCE RUN"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-38",
          "dateLabel": "14 – 20 september",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence"
        }
      ]
    },
    {
      "weekId": "marathon-3u30-week-39",
      "weekNumber": 39,
      "phaseId": "opbouw-confidence",
      "phaseName": "Opbouw en confidence",
      "title": "",
      "startDate": "2026-09-21",
      "endDate": "2026-09-27",
      "periodLabel": "21 – 27 september",
      "plannedDistanceLabel": "±54,2 km",
      "plannedDistanceKm": 54.2,
      "focus": "Je loopt een halve marathon en gaat daarna verder.",
      "mentalGoal": "Je loopt een halve marathon en gaat daarna verder.",
      "workouts": [
        {
          "workoutId": "marathon-3u30-w39-t1",
          "weekNumber": 39,
          "trainingNumber": 1,
          "category": "rustige-duur",
          "title": "Easy",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w39-t1-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w39-t1-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w39-t1-s02",
                  "basis": "time",
                  "durationSeconds": 2700,
                  "display": "45 min",
                  "speedKmh": 10.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w39-t1-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "55 min",
          "totalPlannedSeconds": 3300,
          "estimatedDistanceLabel": "±9,1 km",
          "estimatedDistanceKm": 9.1,
          "goal": "Easy en ontspannen lopen op RPE 3–4/10; volledige zinnen moeten mogelijk blijven.",
          "targetRpe": "3–4/10",
          "mentalGoal": "Je loopt een halve marathon en gaat daarna verder.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-39",
          "dateLabel": "21 – 27 september",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence"
        },
        {
          "workoutId": "marathon-3u30-w39-t2",
          "weekNumber": 39,
          "trainingNumber": 2,
          "category": "interval",
          "title": "3 × 12 min marathonpace",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w39-t2-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w39-t2-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w39-t2-s02",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w39-t2-g2",
              "kind": "sequence",
              "label": "Daarna",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w39-t2-s03",
                  "basis": "time",
                  "durationSeconds": 720,
                  "display": "12 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "marathontempo",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w39-t2-s04",
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w39-t2-s05",
                  "basis": "time",
                  "durationSeconds": 720,
                  "display": "12 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "marathontempo",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w39-t2-s06",
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w39-t2-s07",
                  "basis": "time",
                  "durationSeconds": 720,
                  "display": "12 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "marathontempo",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w39-t2-g3",
              "kind": "sequence",
              "label": "Cooldown",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w39-t2-s08",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "67 min",
          "totalPlannedSeconds": 4020,
          "estimatedDistanceLabel": "±12,1 km",
          "estimatedDistanceKm": 12.1,
          "goal": "De voorgeschreven kwaliteitsblokken gecontroleerd uitvoeren zonder de lange duurtraining te ondermijnen.",
          "targetRpe": "maximaal ongeveer 7–8/10",
          "mentalGoal": "Je loopt een halve marathon en gaat daarna verder.",
          "orderWarning": "Plan Training 2 en Training 4 liefst met minimaal één rustdag ertussen.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "QUALITY",
            "MARATHON SPECIFIC"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-39",
          "dateLabel": "21 – 27 september",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence"
        },
        {
          "workoutId": "marathon-3u30-w39-t3",
          "weekNumber": 39,
          "trainingNumber": 3,
          "category": "rustige-duur",
          "title": "Steady finish",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w39-t3-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w39-t3-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w39-t3-s02",
                  "basis": "time",
                  "durationSeconds": 2100,
                  "display": "35 min",
                  "speedKmh": 10.1,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w39-t3-s03",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 10.8,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w39-t3-s04",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "55 min",
          "totalPlannedSeconds": 3300,
          "estimatedDistanceLabel": "±9,2 km",
          "estimatedDistanceKm": 9.2,
          "goal": "Easy en ontspannen lopen op RPE 3–4/10; volledige zinnen moeten mogelijk blijven.",
          "targetRpe": "3–4/10",
          "mentalGoal": "Je loopt een halve marathon en gaat daarna verder.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-39",
          "dateLabel": "21 – 27 september",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence"
        },
        {
          "workoutId": "marathon-3u30-w39-t4",
          "weekNumber": 39,
          "trainingNumber": 4,
          "category": "lange-duur",
          "title": "CONFIDENCE RUN #1",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w39-t4-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w39-t4-s01",
                  "basis": "distance",
                  "distanceKm": 3,
                  "display": "3,0 km",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w39-t4-s02",
                  "basis": "distance",
                  "distanceKm": 8,
                  "display": "8,0 km",
                  "speedKmh": 10.3,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w39-t4-s03",
                  "basis": "distance",
                  "distanceKm": 6,
                  "display": "6,0 km",
                  "speedKmh": 10.8,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w39-t4-s04",
                  "basis": "distance",
                  "distanceKm": 4.1,
                  "display": "4,1 km",
                  "speedKmh": 11.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "sub-marathon",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w39-t4-g2",
              "kind": "sequence",
              "label": "Vervolgens",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w39-t4-s05",
                  "basis": "distance",
                  "distanceKm": 2.7,
                  "display": "2,7 km",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "136 min",
          "totalPlannedSeconds": 8166,
          "estimatedDistanceLabel": "23,8 km",
          "estimatedDistanceKm": 23.8,
          "goal": "na 21,1 km nog controle hebben. RPE bij kilometer 21 maximaal ongeveer 6–7/10.",
          "targetRpe": "4–6/10, tenzij expliciet anders beschreven",
          "mentalGoal": "“Ik heb een halve marathon gelopen en kon daarna gewoon verder.”",
          "orderWarning": "Kom niet direct uit Training 2; houd liefst minimaal één rustdag tussen beide trainingen.",
          "detailsSections": [
            {
              "title": "Aanwijzingen",
              "items": [
                "Progressive Half Marathon + uitlopen"
              ]
            },
            {
              "title": "Daarmee bereik je",
              "items": [
                "De halve marathon wordt ongeveer in 2 uur gepasseerd.",
                "Maar de tijd is niet het doel."
              ]
            },
            {
              "title": "Doel",
              "items": [
                "na 21,1 km nog controle hebben.",
                "RPE bij kilometer 21 maximaal ongeveer 6–7/10."
              ]
            },
            {
              "title": "Mentale boodschap",
              "items": [
                "“Ik heb een halve marathon gelopen en kon daarna gewoon verder.”"
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "LONG RUN",
            "CONFIDENCE RUN"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-39",
          "dateLabel": "21 – 27 september",
          "phaseId": "opbouw-confidence",
          "phaseName": "Opbouw en confidence"
        }
      ]
    },
    {
      "weekId": "marathon-3u30-week-40",
      "weekNumber": 40,
      "phaseId": "herstel-test",
      "phaseName": "Herstel en eerste test",
      "title": "HERSTEL + TEST",
      "startDate": "2026-09-28",
      "endDate": "2026-10-04",
      "periodLabel": "28 september – 4 oktober",
      "plannedDistanceLabel": "±42–43 km",
      "plannedDistanceKm": 42,
      "focus": "We controleren je snelheid.",
      "mentalGoal": "We controleren je snelheid.",
      "workouts": [
        {
          "workoutId": "marathon-3u30-w40-t1",
          "weekNumber": 40,
          "trainingNumber": 1,
          "category": "herstel",
          "title": "Recovery",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w40-t1-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w40-t1-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w40-t1-s02",
                  "basis": "time",
                  "durationSeconds": 2100,
                  "display": "35 min",
                  "speedKmh": 9.8,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w40-t1-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "45 min",
          "totalPlannedSeconds": 2700,
          "estimatedDistanceLabel": "±7,2 km",
          "estimatedDistanceKm": 7.2,
          "goal": "Herstellen en loopritme behouden met zo weinig mogelijk restvermoeidheid.",
          "targetRpe": "3–4/10",
          "mentalGoal": "We controleren je snelheid.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-40",
          "dateLabel": "28 september – 4 oktober",
          "phaseId": "herstel-test",
          "phaseName": "Herstel en eerste test"
        },
        {
          "workoutId": "marathon-3u30-w40-t2",
          "weekNumber": 40,
          "trainingNumber": 2,
          "category": "testtraining",
          "title": "TEST 1 — 5 KM BENCHMARK",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w40-t2-g2",
              "kind": "sequence",
              "label": "Warming-up",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w40-t2-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "warming-up",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w40-t2-s02",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "warming-up",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w40-t2-s03",
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "warming-up",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w40-t2-g3",
              "kind": "repeat",
              "label": "Daarna 4 ×",
              "repetitions": 4,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w40-t2-s04",
                  "basis": "time",
                  "durationSeconds": 20,
                  "display": "20 sec",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "interval",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w40-t2-s05",
                  "basis": "time",
                  "durationSeconds": 100,
                  "display": "1:40",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                }
              ],
              "omitRecoveryAfterLast": false
            },
            {
              "groupId": "marathon-3u30-w40-t2-g4",
              "kind": "sequence",
              "label": "Daarna",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w40-t2-s06",
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w40-t2-g5",
              "kind": "sequence",
              "label": "Test",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w40-t2-s07",
                  "basis": "distance",
                  "distanceKm": 5,
                  "display": "5,00 km",
                  "speedKmh": null,
                  "inclinePercent": 1,
                  "instruction": "Begin gecontroleerd rond 12,5 km/u en pas daarna geleidelijk aan.",
                  "type": "test"
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w40-t2-g6",
              "kind": "sequence",
              "label": "Cooldown",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w40-t2-s08",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "Tijd afhankelijk van testresultaat",
          "totalPlannedSeconds": 0,
          "estimatedDistanceLabel": "±11,1 km",
          "estimatedDistanceKm": 11.1,
          "goal": "Meten hoeveel snelheid en drempel zijn verbeterd; deze test beslist nog niet zelfstandig over 3:30.",
          "targetRpe": "maximaal ongeveer 7–8/10",
          "mentalGoal": "We controleren je snelheid.",
          "orderWarning": "Plan Training 2 en Training 4 liefst met minimaal één rustdag ertussen.",
          "detailsSections": [
            {
              "title": "Aanwijzingen",
              "items": [
                "5 KM BENCHMARK",
                "Dit is de eerste echte prestatietest.",
                "Begin gecontroleerd rond 12,5 km/u.",
                "Daarna geleidelijk aanpassen.",
                "De laatste 1–2 km mag maximaal worden.",
                "Niet te snel beginnen."
              ]
            },
            {
              "title": "Interpretatie",
              "items": [
                "<22:00",
                "Zeer sterke ontwikkeling.",
                "22:00–22:45",
                "Goede ontwikkeling.",
                "22:46–23:15",
                "Vooruitgang, maar snelheidsreserve blijft aandachtspunt.",
                ">23:15",
                "Snelheidsontwikkeling blijft achter bij wat we voor 3:30 idealiter willen zien.",
                "Deze test beslist nog niet over 3:30."
              ]
            }
          ],
          "notes": [],
          "isTest": true,
          "testNumber": 1,
          "labels": [
            "QUALITY",
            "TEST"
          ],
          "evaluation": {
            "title": "Beoordeling TEST 1",
            "criteria": [
              "5 KM BENCHMARK",
              "Dit is de eerste echte prestatietest.",
              "Begin gecontroleerd rond 12,5 km/u.",
              "Daarna geleidelijk aanpassen.",
              "De laatste 1–2 km mag maximaal worden.",
              "Niet te snel beginnen.",
              "<22:00",
              "Zeer sterke ontwikkeling.",
              "22:00–22:45",
              "Goede ontwikkeling.",
              "22:46–23:15",
              "Vooruitgang, maar snelheidsreserve blijft aandachtspunt.",
              ">23:15",
              "Snelheidsontwikkeling blijft achter bij wat we voor 3:30 idealiter willen zien.",
              "Deze test beslist nog niet over 3:30."
            ],
            "adjustmentRules": [
              "Sla het resultaat op en beoordeel het totaalbeeld; trainingssnelheden worden niet automatisch aangepast."
            ]
          },
          "weekId": "marathon-3u30-week-40",
          "dateLabel": "28 september – 4 oktober",
          "phaseId": "herstel-test",
          "phaseName": "Herstel en eerste test"
        },
        {
          "workoutId": "marathon-3u30-w40-t3",
          "weekNumber": 40,
          "trainingNumber": 3,
          "category": "herstel",
          "title": "Recovery",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w40-t3-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w40-t3-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w40-t3-s02",
                  "basis": "time",
                  "durationSeconds": 1800,
                  "display": "30 min",
                  "speedKmh": 9.6,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w40-t3-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "40 min",
          "totalPlannedSeconds": 2400,
          "estimatedDistanceLabel": "±6,3 km",
          "estimatedDistanceKm": 6.3,
          "goal": "Herstellen en loopritme behouden met zo weinig mogelijk restvermoeidheid.",
          "targetRpe": "3–4/10",
          "mentalGoal": "We controleren je snelheid.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-40",
          "dateLabel": "28 september – 4 oktober",
          "phaseId": "herstel-test",
          "phaseName": "Herstel en eerste test"
        },
        {
          "workoutId": "marathon-3u30-w40-t4",
          "weekNumber": 40,
          "trainingNumber": 4,
          "category": "lange-duur",
          "title": "Rustige lange duur",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w40-t4-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w40-t4-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w40-t4-s02",
                  "basis": "time",
                  "durationSeconds": 5700,
                  "display": "95 min",
                  "speedKmh": 9.9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w40-t4-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "110 min",
          "totalPlannedSeconds": 6600,
          "estimatedDistanceLabel": "±18 km",
          "estimatedDistanceKm": 18,
          "goal": "Lange afstanden conditioneel en psychologisch steeds normaler en beter beheersbaar maken.",
          "targetRpe": "4–6/10, tenzij expliciet anders beschreven",
          "mentalGoal": "We controleren je snelheid.",
          "orderWarning": "Kom niet direct uit Training 2; houd liefst minimaal één rustdag tussen beide trainingen.",
          "detailsSections": [
            {
              "title": "Aanwijzingen",
              "items": [
                "Dit is bewust een relatief rustige week."
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "LONG RUN"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-40",
          "dateLabel": "28 september – 4 oktober",
          "phaseId": "herstel-test",
          "phaseName": "Herstel en eerste test"
        }
      ]
    },
    {
      "weekId": "marathon-3u30-week-41",
      "weekNumber": 41,
      "phaseId": "marathonspecifiek",
      "phaseName": "Marathonspecifieke confidence-fase",
      "title": "",
      "startDate": "2026-10-05",
      "endDate": "2026-10-11",
      "periodLabel": "5 – 11 oktober",
      "plannedDistanceLabel": "±56–57 km",
      "plannedDistanceKm": 56,
      "focus": "Je loopt een halve marathon steady en gecontroleerd.",
      "mentalGoal": "Je loopt een halve marathon steady en gecontroleerd.",
      "workouts": [
        {
          "workoutId": "marathon-3u30-w41-t1",
          "weekNumber": 41,
          "trainingNumber": 1,
          "category": "rustige-duur",
          "title": "Easy",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w41-t1-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w41-t1-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w41-t1-s02",
                  "basis": "time",
                  "durationSeconds": 3000,
                  "display": "50 min",
                  "speedKmh": 10.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w41-t1-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "60 min",
          "totalPlannedSeconds": 3600,
          "estimatedDistanceLabel": "±10 km",
          "estimatedDistanceKm": 10,
          "goal": "Easy en ontspannen lopen op RPE 3–4/10; volledige zinnen moeten mogelijk blijven.",
          "targetRpe": "3–4/10",
          "mentalGoal": "Je loopt een halve marathon steady en gecontroleerd.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-41",
          "dateLabel": "5 – 11 oktober",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke confidence-fase"
        },
        {
          "workoutId": "marathon-3u30-w41-t2",
          "weekNumber": 41,
          "trainingNumber": 2,
          "category": "interval",
          "title": "3 × 10 min drempel",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w41-t2-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w41-t2-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w41-t2-s02",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w41-t2-g2",
              "kind": "repeat",
              "label": "3 ×",
              "repetitions": 3,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w41-t2-s03",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 12.5,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "drempel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w41-t2-s04",
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "Na blok 1–2.",
                  "type": "herstel",
                  "isRecovery": true
                }
              ],
              "omitRecoveryAfterLast": true
            },
            {
              "groupId": "marathon-3u30-w41-t2-g3",
              "kind": "sequence",
              "label": "Cooldown",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w41-t2-s05",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "61 min",
          "totalPlannedSeconds": 3660,
          "estimatedDistanceLabel": "±11,2 km",
          "estimatedDistanceKm": 11.2,
          "goal": "De voorgeschreven kwaliteitsblokken gecontroleerd uitvoeren zonder de lange duurtraining te ondermijnen.",
          "targetRpe": "maximaal ongeveer 7–8/10",
          "mentalGoal": "Je loopt een halve marathon steady en gecontroleerd.",
          "orderWarning": "Plan Training 2 en Training 4 liefst met minimaal één rustdag ertussen.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "QUALITY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-41",
          "dateLabel": "5 – 11 oktober",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke confidence-fase"
        },
        {
          "workoutId": "marathon-3u30-w41-t3",
          "weekNumber": 41,
          "trainingNumber": 3,
          "category": "rustige-duur",
          "title": "Easy",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w41-t3-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w41-t3-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w41-t3-s02",
                  "basis": "time",
                  "durationSeconds": 3000,
                  "display": "50 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w41-t3-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "60 min",
          "totalPlannedSeconds": 3600,
          "estimatedDistanceLabel": "±9,8 km",
          "estimatedDistanceKm": 9.8,
          "goal": "Easy en ontspannen lopen op RPE 3–4/10; volledige zinnen moeten mogelijk blijven.",
          "targetRpe": "3–4/10",
          "mentalGoal": "Je loopt een halve marathon steady en gecontroleerd.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [
            {
              "title": "Aanwijzingen",
              "items": [
                "Bewust geen snelle finish."
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-41",
          "dateLabel": "5 – 11 oktober",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke confidence-fase"
        },
        {
          "workoutId": "marathon-3u30-w41-t4",
          "weekNumber": 41,
          "trainingNumber": 4,
          "category": "lange-duur",
          "title": "CONFIDENCE RUN #2",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w41-t4-g2",
              "kind": "sequence",
              "label": "Warming-up",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w41-t4-s01",
                  "basis": "distance",
                  "distanceKm": 1.5,
                  "display": "1,5 km",
                  "speedKmh": 9.8,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "warming-up",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w41-t4-g3",
              "kind": "sequence",
              "label": "Hoofdblok",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w41-t4-s02",
                  "basis": "distance",
                  "distanceKm": 21.1,
                  "display": "21,1 km",
                  "speedKmh": 10.7,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w41-t4-g4",
              "kind": "sequence",
              "label": "Uitlopen",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w41-t4-s03",
                  "basis": "distance",
                  "distanceKm": 3.2,
                  "display": "3,2 km",
                  "speedKmh": 9.8,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "147 min",
          "totalPlannedSeconds": 8826,
          "estimatedDistanceLabel": "25,8 km",
          "estimatedDistanceKm": 25.8,
          "goal": "21,1 km onafgebroken op een degelijk steady tempo lopen terwijl je controle houdt.",
          "targetRpe": "4–6/10, tenzij expliciet anders beschreven",
          "mentalGoal": "Je loopt een halve marathon steady en gecontroleerd.",
          "orderWarning": "Kom niet direct uit Training 2; houd liefst minimaal één rustdag tussen beide trainingen.",
          "detailsSections": [
            {
              "title": "Aanwijzingen",
              "items": [
                "HALF MARATHON STEADY",
                "Helling hoofdblok: 0,5%.",
                "Als de eerste 16 km zeer gecontroleerd gaan, mag de laatste 5 km naar:",
                "10,8 km/u — 0,5%",
                "Maar niet harder."
              ]
            },
            {
              "title": "Halve marathon ongeveer",
              "items": [
                "1:58",
                "Doel is NIET om een snelle halve marathon te lopen."
              ]
            },
            {
              "title": "Doel is",
              "items": [
                "21,1 km onafgebroken op een degelijk steady tempo lopen terwijl je controle houdt."
              ]
            },
            {
              "title": "Ideale RPE",
              "items": [
                "km 1–10: 4–5/10",
                "km 10–17: 5/10",
                "km 17–21: ongeveer 5–6/10"
              ]
            },
            {
              "title": "Na 21,1 km moet het gevoel zijn",
              "items": [
                "“Ik ben aan het trainen, maar ik ben absoluut nog geen wedstrijd aan het lopen.”",
                "Daarna loop je nog ruim 3 km uit.",
                "Dit is een belangrijke psychologische mijlpaal."
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "LONG RUN",
            "CONFIDENCE RUN"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-41",
          "dateLabel": "5 – 11 oktober",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke confidence-fase"
        }
      ]
    },
    {
      "weekId": "marathon-3u30-week-42",
      "weekNumber": 42,
      "phaseId": "marathonspecifiek",
      "phaseName": "Marathonspecifieke confidence-fase",
      "title": "",
      "startDate": "2026-10-12",
      "endDate": "2026-10-18",
      "periodLabel": "12 – 18 oktober",
      "plannedDistanceLabel": "±59,5 km",
      "plannedDistanceKm": 59.5,
      "focus": "21 km wordt slechts een tussenpunt tijdens 27–28 km.",
      "mentalGoal": "21 km wordt slechts een tussenpunt tijdens 27–28 km.",
      "workouts": [
        {
          "workoutId": "marathon-3u30-w42-t1",
          "weekNumber": 42,
          "trainingNumber": 1,
          "category": "rustige-duur",
          "title": "Easy",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w42-t1-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w42-t1-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w42-t1-s02",
                  "basis": "time",
                  "durationSeconds": 3000,
                  "display": "50 min",
                  "speedKmh": 10.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w42-t1-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "60 min",
          "totalPlannedSeconds": 3600,
          "estimatedDistanceLabel": "±10 km",
          "estimatedDistanceKm": 10,
          "goal": "Easy en ontspannen lopen op RPE 3–4/10; volledige zinnen moeten mogelijk blijven.",
          "targetRpe": "3–4/10",
          "mentalGoal": "21 km wordt slechts een tussenpunt tijdens 27–28 km.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-42",
          "dateLabel": "12 – 18 oktober",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke confidence-fase"
        },
        {
          "workoutId": "marathon-3u30-w42-t2",
          "weekNumber": 42,
          "trainingNumber": 2,
          "category": "interval",
          "title": "5 × 5 min snel",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w42-t2-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w42-t2-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w42-t2-s02",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w42-t2-g2",
              "kind": "repeat",
              "label": "Blok 1–3",
              "repetitions": 3,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w42-t2-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "interval",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w42-t2-s04",
                  "basis": "time",
                  "durationSeconds": 150,
                  "display": "2:30",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                }
              ],
              "omitRecoveryAfterLast": false
            },
            {
              "groupId": "marathon-3u30-w42-t2-g3",
              "kind": "sequence",
              "label": "Blok 4",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w42-t2-s05",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 13.2,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "interval",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w42-t2-s06",
                  "basis": "time",
                  "durationSeconds": 150,
                  "display": "2:30",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                }
              ],
              "omitRecoveryAfterLast": false
            },
            {
              "groupId": "marathon-3u30-w42-t2-g4",
              "kind": "sequence",
              "label": "Blok 5",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w42-t2-s07",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 13.2,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "interval",
                  "isRecovery": false
                }
              ],
              "omitRecoveryAfterLast": false
            },
            {
              "groupId": "marathon-3u30-w42-t2-g5",
              "kind": "sequence",
              "label": "Cooldown",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w42-t2-s08",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "60 min",
          "totalPlannedSeconds": 3600,
          "estimatedDistanceLabel": "±11 km",
          "estimatedDistanceKm": 11,
          "goal": "De voorgeschreven kwaliteitsblokken gecontroleerd uitvoeren zonder de lange duurtraining te ondermijnen.",
          "targetRpe": "maximaal ongeveer 7–8/10",
          "mentalGoal": "21 km wordt slechts een tussenpunt tijdens 27–28 km.",
          "orderWarning": "Plan Training 2 en Training 4 liefst met minimaal één rustdag ertussen.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "QUALITY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-42",
          "dateLabel": "12 – 18 oktober",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke confidence-fase"
        },
        {
          "workoutId": "marathon-3u30-w42-t3",
          "weekNumber": 42,
          "trainingNumber": 3,
          "category": "rustige-duur",
          "title": "Easy met steady finish",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w42-t3-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w42-t3-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w42-t3-s02",
                  "basis": "time",
                  "durationSeconds": 3000,
                  "display": "50 min",
                  "speedKmh": 10.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w42-t3-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.8,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w42-t3-s04",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "65 min",
          "totalPlannedSeconds": 3900,
          "estimatedDistanceLabel": "±10,9 km",
          "estimatedDistanceKm": 10.9,
          "goal": "Easy en ontspannen lopen op RPE 3–4/10; volledige zinnen moeten mogelijk blijven.",
          "targetRpe": "3–4/10",
          "mentalGoal": "21 km wordt slechts een tussenpunt tijdens 27–28 km.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-42",
          "dateLabel": "12 – 18 oktober",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke confidence-fase"
        },
        {
          "workoutId": "marathon-3u30-w42-t4",
          "weekNumber": 42,
          "trainingNumber": 4,
          "category": "lange-duur",
          "title": "DISTANCE CONFIDENCE RUN",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w42-t4-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w42-t4-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w42-t4-s02",
                  "basis": "time",
                  "durationSeconds": 8400,
                  "display": "140 min",
                  "speedKmh": 10.1,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w42-t4-s03",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 10.8,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w42-t4-s04",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "165 min",
          "totalPlannedSeconds": 9900,
          "estimatedDistanceLabel": "±27,7 km",
          "estimatedDistanceKm": 27.7,
          "goal": "Lange afstanden conditioneel en psychologisch steeds normaler en beter beheersbaar maken.",
          "targetRpe": "4–6/10, tenzij expliciet anders beschreven",
          "mentalGoal": "21,1 km is niet langer een eindpunt.",
          "orderWarning": "Kom niet direct uit Training 2; houd liefst minimaal één rustdag tussen beide trainingen.",
          "detailsSections": [
            {
              "title": "Aanwijzingen",
              "items": [
                "Deze training moet conditioneel relatief comfortabel blijven."
              ]
            },
            {
              "title": "Het psychologische punt",
              "items": [
                "Wanneer je de halve-marathonafstand bereikt, ben je nog lang niet klaar."
              ]
            },
            {
              "title": "Je loopt daarna nog ruim",
              "items": [
                "6,5 km verder."
              ]
            },
            {
              "title": "Mentale boodschap",
              "items": [
                "21,1 km is niet langer een eindpunt."
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "LONG RUN",
            "CONFIDENCE RUN"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-42",
          "dateLabel": "12 – 18 oktober",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke confidence-fase"
        }
      ]
    },
    {
      "weekId": "marathon-3u30-week-43",
      "weekNumber": 43,
      "phaseId": "marathonspecifiek",
      "phaseName": "Marathonspecifieke confidence-fase",
      "title": "PIEKWEEK",
      "startDate": "2026-10-19",
      "endDate": "2026-10-25",
      "periodLabel": "19 – 25 oktober",
      "plannedDistanceLabel": "±64,4 km",
      "plannedDistanceKm": 64.4,
      "focus": "Je loopt 30 km.",
      "mentalGoal": "Je loopt 30 km.",
      "workouts": [
        {
          "workoutId": "marathon-3u30-w43-t1",
          "weekNumber": 43,
          "trainingNumber": 1,
          "category": "rustige-duur",
          "title": "Easy",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w43-t1-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w43-t1-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w43-t1-s02",
                  "basis": "time",
                  "durationSeconds": 3000,
                  "display": "50 min",
                  "speedKmh": 10.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w43-t1-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "60 min",
          "totalPlannedSeconds": 3600,
          "estimatedDistanceLabel": "±10 km",
          "estimatedDistanceKm": 10,
          "goal": "Easy en ontspannen lopen op RPE 3–4/10; volledige zinnen moeten mogelijk blijven.",
          "targetRpe": "3–4/10",
          "mentalGoal": "Je loopt 30 km.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-43",
          "dateLabel": "19 – 25 oktober",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke confidence-fase"
        },
        {
          "workoutId": "marathon-3u30-w43-t2",
          "weekNumber": 43,
          "trainingNumber": 2,
          "category": "testtraining",
          "title": "TEST 2 — 3 × 15 MIN MARATHONPACE",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w43-t2-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w43-t2-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w43-t2-s02",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w43-t2-g2",
              "kind": "sequence",
              "label": "Daarna",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w43-t2-s03",
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "marathontempo",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w43-t2-s04",
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w43-t2-s05",
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "marathontempo",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w43-t2-s06",
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w43-t2-s07",
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "marathontempo",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w43-t2-g3",
              "kind": "sequence",
              "label": "Cooldown",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w43-t2-s08",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "78 min",
          "totalPlannedSeconds": 4680,
          "estimatedDistanceLabel": "±14,2 km",
          "estimatedDistanceKm": 14.2,
          "goal": "Beoordelen hoe comfortabel het beoogde marathonpace van 12,0 km/u is geworden.",
          "targetRpe": "derde blok maximaal ongeveer 7/10 voor groen",
          "mentalGoal": "Je loopt 30 km.",
          "orderWarning": "Plan Training 2 en Training 4 liefst met minimaal één rustdag ertussen.",
          "detailsSections": [
            {
              "title": "Aanwijzingen",
              "items": [
                "3 × 15 MIN MARATHONPACE"
              ]
            },
            {
              "title": "Derde blok",
              "items": [
                "maximaal ongeveer 7/10",
                "snelheid volledig onder controle",
                "ademhaling stevig maar beheersbaar",
                "gevoel dat nog een vierde blok mogelijk zou zijn"
              ]
            },
            {
              "title": "ORANJE",
              "items": [
                "7,5–8/10",
                "laatste minuten duidelijk zwaar",
                "training lukt wel"
              ]
            },
            {
              "title": "ROOD",
              "items": [
                "8/10",
                "laatste blok vrijwel maximaal",
                "snelheid moet eventueel worden verlaagd"
              ]
            },
            {
              "title": "De vraag is hier niet",
              "items": [
                "“Hoe snel ben ik?”"
              ]
            },
            {
              "title": "De vraag is",
              "items": [
                "“Hoe normaal begint 12 km/u te voelen?”"
              ]
            }
          ],
          "notes": [],
          "isTest": true,
          "testNumber": 2,
          "labels": [
            "QUALITY",
            "TEST",
            "MARATHON SPECIFIC"
          ],
          "evaluation": {
            "title": "Beoordeling TEST 2",
            "criteria": [
              "3 × 15 MIN MARATHONPACE",
              "maximaal ongeveer 7/10",
              "snelheid volledig onder controle",
              "ademhaling stevig maar beheersbaar",
              "gevoel dat nog een vierde blok mogelijk zou zijn",
              "7,5–8/10",
              "laatste minuten duidelijk zwaar",
              "training lukt wel",
              "8/10",
              "laatste blok vrijwel maximaal",
              "snelheid moet eventueel worden verlaagd",
              "“Hoe snel ben ik?”",
              "“Hoe normaal begint 12 km/u te voelen?”"
            ],
            "adjustmentRules": [
              "Sla het resultaat op en beoordeel het totaalbeeld; trainingssnelheden worden niet automatisch aangepast."
            ]
          },
          "weekId": "marathon-3u30-week-43",
          "dateLabel": "19 – 25 oktober",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke confidence-fase"
        },
        {
          "workoutId": "marathon-3u30-w43-t3",
          "weekNumber": 43,
          "trainingNumber": 3,
          "category": "rustige-duur",
          "title": "Easy",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w43-t3-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w43-t3-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w43-t3-s02",
                  "basis": "time",
                  "durationSeconds": 3000,
                  "display": "50 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w43-t3-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "60 min",
          "totalPlannedSeconds": 3600,
          "estimatedDistanceLabel": "±9,8 km",
          "estimatedDistanceKm": 9.8,
          "goal": "Easy en ontspannen lopen op RPE 3–4/10; volledige zinnen moeten mogelijk blijven.",
          "targetRpe": "3–4/10",
          "mentalGoal": "Je loopt 30 km.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-43",
          "dateLabel": "19 – 25 oktober",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke confidence-fase"
        },
        {
          "workoutId": "marathon-3u30-w43-t4",
          "weekNumber": 43,
          "trainingNumber": 4,
          "category": "lange-duur",
          "title": "30K CONFIDENCE RUN",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w43-t4-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w43-t4-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w43-t4-s02",
                  "basis": "time",
                  "durationSeconds": 8400,
                  "display": "140 min",
                  "speedKmh": 10.1,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w43-t4-s03",
                  "basis": "time",
                  "durationSeconds": 1500,
                  "display": "25 min",
                  "speedKmh": 10.8,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w43-t4-s04",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "180 min",
          "totalPlannedSeconds": 10800,
          "estimatedDistanceLabel": "±30,4 km",
          "estimatedDistanceKm": 30.4,
          "goal": "drie uur lang lopen en controle houden.",
          "targetRpe": "4–6/10, tenzij expliciet anders beschreven",
          "mentalGoal": "Je loopt 30 km.",
          "orderWarning": "Kom niet direct uit Training 2; houd liefst minimaal één rustdag tussen beide trainingen.",
          "detailsSections": [
            {
              "title": "Aanwijzingen",
              "items": [
                "Dit is de langste duurloop van het programma.",
                "Geen marathonpace.",
                "Geen wedstrijd.",
                "Geen snelle 30 km."
              ]
            },
            {
              "title": "Doel",
              "items": [
                "drie uur lang lopen en controle houden."
              ]
            },
            {
              "title": "21,1 km",
              "items": [
                "“Nu zou een halve marathon klaar zijn.”"
              ]
            },
            {
              "title": "25 km",
              "items": [
                "“Nog steeds controle.”"
              ]
            },
            {
              "title": "27 km",
              "items": [
                "“Ik ben veel verder dan een halve marathon.”"
              ]
            },
            {
              "title": "30 km",
              "items": [
                "“Ik heb dertig kilometer gelopen.”",
                "Na deze training moet 21,1 km psychologisch klein beginnen te voelen."
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "LONG RUN",
            "CONFIDENCE RUN"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-43",
          "dateLabel": "19 – 25 oktober",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke confidence-fase"
        }
      ]
    },
    {
      "weekId": "marathon-3u30-week-44",
      "weekNumber": 44,
      "phaseId": "marathonspecifiek",
      "phaseName": "Marathonspecifieke confidence-fase",
      "title": "",
      "startDate": "2026-10-26",
      "endDate": "2026-11-01",
      "periodLabel": "26 oktober – 1 november",
      "plannedDistanceLabel": "±54,4 km",
      "plannedDistanceKm": 54.4,
      "focus": "Je loopt bijna 29 km én kunt laat in de training nog marathonpace draaien.",
      "mentalGoal": "Je loopt bijna 29 km én kunt laat in de training nog marathonpace draaien.",
      "workouts": [
        {
          "workoutId": "marathon-3u30-w44-t1",
          "weekNumber": 44,
          "trainingNumber": 1,
          "category": "rustige-duur",
          "title": "Easy",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w44-t1-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w44-t1-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w44-t1-s02",
                  "basis": "time",
                  "durationSeconds": 2700,
                  "display": "45 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w44-t1-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "55 min",
          "totalPlannedSeconds": 3300,
          "estimatedDistanceLabel": "±9 km",
          "estimatedDistanceKm": 9,
          "goal": "Easy en ontspannen lopen op RPE 3–4/10; volledige zinnen moeten mogelijk blijven.",
          "targetRpe": "3–4/10",
          "mentalGoal": "Je loopt bijna 29 km én kunt laat in de training nog marathonpace draaien.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-44",
          "dateLabel": "26 oktober – 1 november",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke confidence-fase"
        },
        {
          "workoutId": "marathon-3u30-w44-t2",
          "weekNumber": 44,
          "trainingNumber": 2,
          "category": "interval",
          "title": "Korte snelheid",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w44-t2-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w44-t2-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w44-t2-s02",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w44-t2-g2",
              "kind": "repeat",
              "label": "5 ×",
              "repetitions": 5,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w44-t2-s03",
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min",
                  "speedKmh": 13.2,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "interval",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w44-t2-s04",
                  "basis": "time",
                  "durationSeconds": 120,
                  "display": "2 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "Na blok 1–4.",
                  "type": "herstel",
                  "isRecovery": true
                }
              ],
              "omitRecoveryAfterLast": true
            },
            {
              "groupId": "marathon-3u30-w44-t2-g3",
              "kind": "sequence",
              "label": "Cooldown",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w44-t2-s05",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "53 min",
          "totalPlannedSeconds": 3180,
          "estimatedDistanceLabel": "±9,6 km",
          "estimatedDistanceKm": 9.6,
          "goal": "De voorgeschreven kwaliteitsblokken gecontroleerd uitvoeren zonder de lange duurtraining te ondermijnen.",
          "targetRpe": "maximaal ongeveer 7–8/10",
          "mentalGoal": "Je loopt bijna 29 km én kunt laat in de training nog marathonpace draaien.",
          "orderWarning": "Plan Training 2 en Training 4 liefst met minimaal één rustdag ertussen.",
          "detailsSections": [
            {
              "title": "Aanwijzingen",
              "items": [
                "Deze training moet scherp voelen.",
                "Niet uitputtend."
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "QUALITY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-44",
          "dateLabel": "26 oktober – 1 november",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke confidence-fase"
        },
        {
          "workoutId": "marathon-3u30-w44-t3",
          "weekNumber": 44,
          "trainingNumber": 3,
          "category": "herstel",
          "title": "Recovery",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w44-t3-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w44-t3-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w44-t3-s02",
                  "basis": "time",
                  "durationSeconds": 2100,
                  "display": "35 min",
                  "speedKmh": 9.6,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w44-t3-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "45 min",
          "totalPlannedSeconds": 2700,
          "estimatedDistanceLabel": "±7,1 km",
          "estimatedDistanceKm": 7.1,
          "goal": "Herstellen en loopritme behouden met zo weinig mogelijk restvermoeidheid.",
          "targetRpe": "3–4/10",
          "mentalGoal": "Je loopt bijna 29 km én kunt laat in de training nog marathonpace draaien.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-44",
          "dateLabel": "26 oktober – 1 november",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke confidence-fase"
        },
        {
          "workoutId": "marathon-3u30-w44-t4",
          "weekNumber": 44,
          "trainingNumber": 4,
          "category": "lange-duur",
          "title": "TEST 3 — KEY MARATHON CONFIDENCE RUN",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w44-t4-g2",
              "kind": "sequence",
              "label": "Eerst",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w44-t4-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w44-t4-s02",
                  "basis": "time",
                  "durationSeconds": 4500,
                  "display": "75 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w44-t4-g3",
              "kind": "sequence",
              "label": "Daarna",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w44-t4-s03",
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "marathontempo",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w44-t4-s04",
                  "basis": "time",
                  "durationSeconds": 480,
                  "display": "8 min",
                  "speedKmh": 9.8,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w44-t4-s05",
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "marathontempo",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w44-t4-s06",
                  "basis": "time",
                  "durationSeconds": 480,
                  "display": "8 min",
                  "speedKmh": 9.8,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w44-t4-s07",
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "marathontempo",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w44-t4-g4",
              "kind": "sequence",
              "label": "Daarna",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w44-t4-s08",
                  "basis": "time",
                  "durationSeconds": 840,
                  "display": "14 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w44-t4-s09",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "165 min",
          "totalPlannedSeconds": 9900,
          "estimatedDistanceLabel": "±28,7 km",
          "estimatedDistanceKm": 28.7,
          "goal": "Beoordelen of marathonpace na 85 minuten lopen nog beheerst kan worden.",
          "targetRpe": "derde blok maximaal ±7–7,5/10 voor groen licht",
          "mentalGoal": "“Ik heb bijna 29 km gelopen en kon diep in die training nog meerdere keren mijn marathonpace draaien.” Als dit goed gaat, is dit waarschijnlijk de grootste confidence boost van het hele programma.",
          "orderWarning": "Kom niet direct uit Training 2; houd liefst minimaal één rustdag tussen beide trainingen.",
          "detailsSections": [
            {
              "title": "Aanwijzingen",
              "items": [
                "KEY MARATHON CONFIDENCE RUN",
                "Dit is de belangrijkste training van het volledige schema."
              ]
            },
            {
              "title": "Je hebt nu",
              "items": [
                "85 minuten gelopen."
              ]
            },
            {
              "title": "Waarom dit de sleuteltraining is",
              "items": [
                "We testen niet of je fris 12 km/u kunt lopen."
              ]
            },
            {
              "title": "We testen",
              "items": [
                "kan ik 12 km/u nog beheersen nadat ik al bijna anderhalf uur heb gelopen?"
              ]
            },
            {
              "title": "Ideaal",
              "items": [
                "alle drie de blokken lukken volledig",
                "derde blok maximaal ±7–7,5/10",
                "geen noodzaak snelheid te verlagen",
                "techniek blijft goed",
                "na laatste blok kun je normaal verder lopen",
                "je eindigt moe, maar niet vernietigd"
              ]
            },
            {
              "title": "Psychologische boodschap",
              "items": [
                "“Ik heb bijna 29 km gelopen en kon diep in die training nog meerdere keren mijn marathonpace draaien.”",
                "Als dit goed gaat, is dit waarschijnlijk de grootste confidence boost van het hele programma."
              ]
            }
          ],
          "notes": [],
          "isTest": true,
          "testNumber": 3,
          "labels": [
            "LONG RUN",
            "CONFIDENCE RUN",
            "TEST",
            "MARATHON SPECIFIC"
          ],
          "evaluation": {
            "title": "Beoordeling TEST 3",
            "criteria": [
              "KEY MARATHON CONFIDENCE RUN",
              "Dit is de belangrijkste training van het volledige schema.",
              "85 minuten gelopen.",
              "We testen niet of je fris 12 km/u kunt lopen.",
              "kan ik 12 km/u nog beheersen nadat ik al bijna anderhalf uur heb gelopen?",
              "alle drie de blokken lukken volledig",
              "derde blok maximaal ±7–7,5/10",
              "geen noodzaak snelheid te verlagen",
              "techniek blijft goed",
              "na laatste blok kun je normaal verder lopen",
              "je eindigt moe, maar niet vernietigd",
              "“Ik heb bijna 29 km gelopen en kon diep in die training nog meerdere keren mijn marathonpace draaien.”",
              "Als dit goed gaat, is dit waarschijnlijk de grootste confidence boost van het hele programma."
            ],
            "adjustmentRules": [
              "Sla het resultaat op en beoordeel het totaalbeeld; trainingssnelheden worden niet automatisch aangepast."
            ]
          },
          "weekId": "marathon-3u30-week-44",
          "dateLabel": "26 oktober – 1 november",
          "phaseId": "marathonspecifiek",
          "phaseName": "Marathonspecifieke confidence-fase"
        }
      ]
    },
    {
      "weekId": "marathon-3u30-week-45",
      "weekNumber": 45,
      "phaseId": "taper",
      "phaseName": "Taper",
      "title": "TAPER 1",
      "startDate": "2026-11-02",
      "endDate": "2026-11-08",
      "periodLabel": "2 – 8 november",
      "plannedDistanceLabel": "±47 km",
      "plannedDistanceKm": 47,
      "focus": "Nu niet meer fitter proberen te worden door steeds meer te doen. We behouden kwaliteit en verlagen volume. Je merkt dat marathonpace steeds normaler begint te voelen.",
      "mentalGoal": "Je merkt dat marathonpace steeds normaler begint te voelen.",
      "workouts": [
        {
          "workoutId": "marathon-3u30-w45-t1",
          "weekNumber": 45,
          "trainingNumber": 1,
          "category": "herstel",
          "title": "Easy / herstel",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w45-t1-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w45-t1-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w45-t1-s02",
                  "basis": "time",
                  "durationSeconds": 2400,
                  "display": "40 min",
                  "speedKmh": 9.9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w45-t1-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "50 min",
          "totalPlannedSeconds": 3000,
          "estimatedDistanceLabel": "±8,1 km",
          "estimatedDistanceKm": 8.1,
          "goal": "Herstellen en loopritme behouden met zo weinig mogelijk restvermoeidheid.",
          "targetRpe": "3–4/10",
          "mentalGoal": "Je merkt dat marathonpace steeds normaler begint te voelen.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY",
            "TAPER"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-45",
          "dateLabel": "2 – 8 november",
          "phaseId": "taper",
          "phaseName": "Taper"
        },
        {
          "workoutId": "marathon-3u30-w45-t2",
          "weekNumber": 45,
          "trainingNumber": 2,
          "category": "interval",
          "title": "Drempel onderhouden",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w45-t2-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w45-t2-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w45-t2-s02",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w45-t2-g2",
              "kind": "repeat",
              "label": "3 ×",
              "repetitions": 3,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w45-t2-s03",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 12.4,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "drempel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w45-t2-s04",
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "Na blok 1–2.",
                  "type": "herstel",
                  "isRecovery": true
                }
              ],
              "omitRecoveryAfterLast": true
            },
            {
              "groupId": "marathon-3u30-w45-t2-g3",
              "kind": "sequence",
              "label": "Cooldown",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w45-t2-s05",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "61 min",
          "totalPlannedSeconds": 3660,
          "estimatedDistanceLabel": "±11,1 km",
          "estimatedDistanceKm": 11.1,
          "goal": "Kwaliteit behouden en fris blijven zonder nieuwe vermoeidheid op te bouwen.",
          "targetRpe": "maximaal ongeveer 7–8/10",
          "mentalGoal": "Je merkt dat marathonpace steeds normaler begint te voelen.",
          "orderWarning": "Plan Training 2 en Training 4 liefst met minimaal één rustdag ertussen.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "QUALITY",
            "TAPER"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-45",
          "dateLabel": "2 – 8 november",
          "phaseId": "taper",
          "phaseName": "Taper"
        },
        {
          "workoutId": "marathon-3u30-w45-t3",
          "weekNumber": 45,
          "trainingNumber": 3,
          "category": "rustige-duur",
          "title": "Easy",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w45-t3-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w45-t3-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w45-t3-s02",
                  "basis": "time",
                  "durationSeconds": 2100,
                  "display": "35 min",
                  "speedKmh": 9.6,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w45-t3-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "45 min",
          "totalPlannedSeconds": 2700,
          "estimatedDistanceLabel": "±7,1 km",
          "estimatedDistanceKm": 7.1,
          "goal": "Easy en ontspannen lopen op RPE 3–4/10; volledige zinnen moeten mogelijk blijven.",
          "targetRpe": "3–4/10",
          "mentalGoal": "Je merkt dat marathonpace steeds normaler begint te voelen.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY",
            "TAPER"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-45",
          "dateLabel": "2 – 8 november",
          "phaseId": "taper",
          "phaseName": "Taper"
        },
        {
          "workoutId": "marathon-3u30-w45-t4",
          "weekNumber": 45,
          "trainingNumber": 4,
          "category": "lange-duur",
          "title": "Marathonpace onderhoud",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w45-t4-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w45-t4-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w45-t4-s02",
                  "basis": "time",
                  "durationSeconds": 4200,
                  "display": "70 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w45-t4-s03",
                  "basis": "time",
                  "durationSeconds": 1800,
                  "display": "30 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "marathontempo",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w45-t4-s04",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w45-t4-s05",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "120 min",
          "totalPlannedSeconds": 7200,
          "estimatedDistanceLabel": "±20,8 km",
          "estimatedDistanceKm": 20.8,
          "goal": "Lange afstanden conditioneel en psychologisch steeds normaler en beter beheersbaar maken.",
          "targetRpe": "4–6/10, tenzij expliciet anders beschreven",
          "mentalGoal": "Je merkt dat marathonpace steeds normaler begint te voelen.",
          "orderWarning": "Kom niet direct uit Training 2; houd liefst minimaal één rustdag tussen beide trainingen.",
          "detailsSections": [
            {
              "title": "Aanwijzingen",
              "items": [
                "Geen test.",
                "30 minuten marathonpace moet gecontroleerd voelen."
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "LONG RUN",
            "MARATHON SPECIFIC",
            "TAPER"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-45",
          "dateLabel": "2 – 8 november",
          "phaseId": "taper",
          "phaseName": "Taper"
        }
      ]
    },
    {
      "weekId": "marathon-3u30-week-46",
      "weekNumber": 46,
      "phaseId": "taper",
      "phaseName": "Taper",
      "title": "TAPER 2",
      "startDate": "2026-11-09",
      "endDate": "2026-11-15",
      "periodLabel": "9 – 15 november",
      "plannedDistanceLabel": "±37,7 km",
      "plannedDistanceKm": 37.7,
      "focus": "Je merkt dat marathonpace steeds normaler begint te voelen.",
      "mentalGoal": "Je merkt dat marathonpace steeds normaler begint te voelen.",
      "workouts": [
        {
          "workoutId": "marathon-3u30-w46-t1",
          "weekNumber": 46,
          "trainingNumber": 1,
          "category": "herstel",
          "title": "Easy / herstel",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w46-t1-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w46-t1-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w46-t1-s02",
                  "basis": "time",
                  "durationSeconds": 2100,
                  "display": "35 min",
                  "speedKmh": 9.8,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w46-t1-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "45 min",
          "totalPlannedSeconds": 2700,
          "estimatedDistanceLabel": "±7,2 km",
          "estimatedDistanceKm": 7.2,
          "goal": "Herstellen en loopritme behouden met zo weinig mogelijk restvermoeidheid.",
          "targetRpe": "3–4/10",
          "mentalGoal": "Je merkt dat marathonpace steeds normaler begint te voelen.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY",
            "TAPER"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-46",
          "dateLabel": "9 – 15 november",
          "phaseId": "taper",
          "phaseName": "Taper"
        },
        {
          "workoutId": "marathon-3u30-w46-t2",
          "weekNumber": 46,
          "trainingNumber": 2,
          "category": "kwaliteit",
          "title": "Kwaliteitstraining",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w46-t2-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w46-t2-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w46-t2-s02",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w46-t2-g2",
              "kind": "repeat",
              "label": "3 ×",
              "repetitions": 3,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w46-t2-s03",
                  "basis": "time",
                  "durationSeconds": 480,
                  "display": "8 min",
                  "speedKmh": 12.1,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "marathontempo",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w46-t2-s04",
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "Na blok 1–2.",
                  "type": "herstel",
                  "isRecovery": true
                }
              ],
              "omitRecoveryAfterLast": true
            },
            {
              "groupId": "marathon-3u30-w46-t2-g3",
              "kind": "sequence",
              "label": "Cooldown",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w46-t2-s05",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "55 min",
          "totalPlannedSeconds": 3300,
          "estimatedDistanceLabel": "±9,8 km",
          "estimatedDistanceKm": 9.8,
          "goal": "fris blijven.",
          "targetRpe": "maximaal ongeveer 7–8/10",
          "mentalGoal": "Je merkt dat marathonpace steeds normaler begint te voelen.",
          "orderWarning": "Plan Training 2 en Training 4 liefst met minimaal één rustdag ertussen.",
          "detailsSections": [
            {
              "title": "Doel",
              "items": [
                "fris blijven."
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "QUALITY",
            "TAPER"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-46",
          "dateLabel": "9 – 15 november",
          "phaseId": "taper",
          "phaseName": "Taper"
        },
        {
          "workoutId": "marathon-3u30-w46-t3",
          "weekNumber": 46,
          "trainingNumber": 3,
          "category": "herstel",
          "title": "Losmaken",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w46-t3-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w46-t3-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w46-t3-s02",
                  "basis": "time",
                  "durationSeconds": 900,
                  "display": "15 min",
                  "speedKmh": 9.6,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w46-t3-g2",
              "kind": "repeat",
              "label": "4 ×",
              "repetitions": 4,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w46-t3-s03",
                  "basis": "time",
                  "durationSeconds": 20,
                  "display": "20 sec",
                  "speedKmh": 13.5,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "interval",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w46-t3-s04",
                  "basis": "time",
                  "durationSeconds": 100,
                  "display": "1:40",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                }
              ],
              "omitRecoveryAfterLast": false
            },
            {
              "groupId": "marathon-3u30-w46-t3-g3",
              "kind": "sequence",
              "label": "Daarna",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w46-t3-s05",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w46-t3-s06",
                  "basis": "time",
                  "durationSeconds": 120,
                  "display": "2 min wandelen",
                  "speedKmh": 5.5,
                  "inclinePercent": 0,
                  "instruction": "",
                  "type": "wandelen",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "35 min",
          "totalPlannedSeconds": 2100,
          "estimatedDistanceLabel": "±5,3 km",
          "estimatedDistanceKm": 5.3,
          "goal": "Herstellen en loopritme behouden met zo weinig mogelijk restvermoeidheid.",
          "targetRpe": "3–4/10",
          "mentalGoal": "Je merkt dat marathonpace steeds normaler begint te voelen.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY",
            "TAPER"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-46",
          "dateLabel": "9 – 15 november",
          "phaseId": "taper",
          "phaseName": "Taper"
        },
        {
          "workoutId": "marathon-3u30-w46-t4",
          "weekNumber": 46,
          "trainingNumber": 4,
          "category": "lange-duur",
          "title": "Lange duur",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w46-t4-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w46-t4-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w46-t4-s02",
                  "basis": "time",
                  "durationSeconds": 3300,
                  "display": "55 min",
                  "speedKmh": 10,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "easy",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w46-t4-s03",
                  "basis": "time",
                  "durationSeconds": 1200,
                  "display": "20 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "marathontempo",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w46-t4-s04",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "90 min",
          "totalPlannedSeconds": 5400,
          "estimatedDistanceLabel": "±15,5 km",
          "estimatedDistanceKm": 15.5,
          "goal": "Lange afstanden conditioneel en psychologisch steeds normaler en beter beheersbaar maken.",
          "targetRpe": "4–6/10, tenzij expliciet anders beschreven",
          "mentalGoal": "Je merkt dat marathonpace steeds normaler begint te voelen.",
          "orderWarning": "Kom niet direct uit Training 2; houd liefst minimaal één rustdag tussen beide trainingen.",
          "detailsSections": [
            {
              "title": "Aanwijzingen",
              "items": [
                "20 minuten marathonpace moet bijna vanzelfsprekend voelen."
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "LONG RUN",
            "TAPER"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-46",
          "dateLabel": "9 – 15 november",
          "phaseId": "taper",
          "phaseName": "Taper"
        }
      ]
    },
    {
      "weekId": "marathon-3u30-week-47",
      "weekNumber": 47,
      "phaseId": "marathonweek",
      "phaseName": "Marathonweek",
      "title": "MARATHONWEEK",
      "startDate": "2026-11-16",
      "endDate": "2026-11-22",
      "periodLabel": "16 – 22 november",
      "plannedDistanceLabel": "Marathonweek",
      "plannedDistanceKm": null,
      "focus": "Deze week geldt: FIT WORDEN, NIET FITTER WORDEN. Je hoeft niets meer te bewijzen. Je hebt het werk gedaan.",
      "mentalGoal": "Je hoeft niets meer te bewijzen. Je hebt het werk gedaan.",
      "workouts": [
        {
          "workoutId": "marathon-3u30-w47-t1",
          "weekNumber": 47,
          "trainingNumber": 1,
          "category": "rustige-duur",
          "title": "Easy",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w47-t1-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w47-t1-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w47-t1-s02",
                  "basis": "time",
                  "durationSeconds": 1500,
                  "display": "25 min",
                  "speedKmh": 9.6,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w47-t1-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "35 min",
          "totalPlannedSeconds": 2100,
          "estimatedDistanceLabel": "±5,5 km",
          "estimatedDistanceKm": 5.5,
          "goal": "Easy en ontspannen lopen op RPE 3–4/10; volledige zinnen moeten mogelijk blijven.",
          "targetRpe": "3–4/10",
          "mentalGoal": "Je hoeft niets meer te bewijzen. Je hebt het werk gedaan.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-47",
          "dateLabel": "16 – 22 november",
          "phaseId": "marathonweek",
          "phaseName": "Marathonweek"
        },
        {
          "workoutId": "marathon-3u30-w47-t2",
          "weekNumber": 47,
          "trainingNumber": 2,
          "category": "kwaliteit",
          "title": "Marathonpace aanraken",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w47-t2-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w47-t2-s01",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w47-t2-s02",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 10.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "steady",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w47-t2-s03",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "marathontempo",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w47-t2-s04",
                  "basis": "time",
                  "durationSeconds": 180,
                  "display": "3 min",
                  "speedKmh": 9.2,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w47-t2-s05",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 12,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "marathontempo",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w47-t2-s06",
                  "basis": "time",
                  "durationSeconds": 480,
                  "display": "8 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w47-t2-s07",
                  "basis": "time",
                  "durationSeconds": 240,
                  "display": "4 min wandelen",
                  "speedKmh": 5.5,
                  "inclinePercent": 0,
                  "instruction": "",
                  "type": "wandelen",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "40 min",
          "totalPlannedSeconds": 2400,
          "estimatedDistanceLabel": "±6,5 km",
          "estimatedDistanceKm": 6.5,
          "goal": "Kwaliteit behouden en fris blijven zonder nieuwe vermoeidheid op te bouwen.",
          "targetRpe": "maximaal ongeveer 7–8/10",
          "mentalGoal": "Je hoeft niets meer te bewijzen. Je hebt het werk gedaan.",
          "orderWarning": "Plan Training 2 en Training 4 liefst met minimaal één rustdag ertussen.",
          "detailsSections": [
            {
              "title": "Aanwijzingen",
              "items": [
                "De 12 km/u-blokken moeten gemakkelijk voelen."
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "QUALITY",
            "MARATHON SPECIFIC"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-47",
          "dateLabel": "16 – 22 november",
          "phaseId": "marathonweek",
          "phaseName": "Marathonweek"
        },
        {
          "workoutId": "marathon-3u30-w47-t3",
          "weekNumber": 47,
          "trainingNumber": 3,
          "category": "herstel",
          "title": "Losmaken",
          "surface": "loopband",
          "groups": [
            {
              "groupId": "marathon-3u30-w47-t3-g1",
              "kind": "sequence",
              "label": "Opbouw",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w47-t3-s01",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w47-t3-s02",
                  "basis": "time",
                  "durationSeconds": 600,
                  "display": "10 min",
                  "speedKmh": 9.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                }
              ]
            },
            {
              "groupId": "marathon-3u30-w47-t3-g2",
              "kind": "repeat",
              "label": "3 ×",
              "repetitions": 3,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w47-t3-s03",
                  "basis": "time",
                  "durationSeconds": 20,
                  "display": "20 sec",
                  "speedKmh": 13,
                  "inclinePercent": 1,
                  "instruction": "",
                  "type": "interval",
                  "isRecovery": false
                },
                {
                  "segmentId": "marathon-3u30-w47-t3-s04",
                  "basis": "time",
                  "durationSeconds": 100,
                  "display": "1:40",
                  "speedKmh": 9,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "herstel",
                  "isRecovery": false
                }
              ],
              "omitRecoveryAfterLast": false
            },
            {
              "groupId": "marathon-3u30-w47-t3-g3",
              "kind": "sequence",
              "label": "Daarna",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w47-t3-s05",
                  "basis": "time",
                  "durationSeconds": 300,
                  "display": "5 min",
                  "speedKmh": 8.5,
                  "inclinePercent": 0.5,
                  "instruction": "",
                  "type": "cooling-down",
                  "isRecovery": false
                }
              ]
            }
          ],
          "totalPlannedLabel": "±26 min",
          "totalPlannedSeconds": 1560,
          "estimatedDistanceLabel": "±4 km",
          "estimatedDistanceKm": 4,
          "goal": "Herstellen en loopritme behouden met zo weinig mogelijk restvermoeidheid.",
          "targetRpe": "3–4/10",
          "mentalGoal": "Je hoeft niets meer te bewijzen. Je hebt het werk gedaan.",
          "orderWarning": "Kies je trainingsdagen zelf en bewaak herstel en oplopende pijnklachten.",
          "detailsSections": [
            {
              "title": "Aanwijzingen",
              "items": [
                "Daarna minimaal één volledige rustdag vóór de marathon."
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "EASY"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-47",
          "dateLabel": "16 – 22 november",
          "phaseId": "marathonweek",
          "phaseName": "Marathonweek"
        },
        {
          "workoutId": "marathon-3u30-w47-t4",
          "weekNumber": 47,
          "trainingNumber": 4,
          "category": "wedstrijd",
          "title": "Marathon — 22 NOVEMBER 2026",
          "surface": "buiten",
          "groups": [
            {
              "groupId": "marathon-3u30-w47-t4-g1",
              "kind": "sequence",
              "label": "Marathon",
              "repetitions": 1,
              "segments": [
                {
                  "segmentId": "marathon-3u30-w47-t4-s01",
                  "basis": "distance",
                  "distanceKm": 42.195,
                  "display": "42,195 km",
                  "speedKmh": 12.06,
                  "inclinePercent": null,
                  "type": "wedstrijd",
                  "instruction": "Benodigd gemiddelde 4:58,6/km; start bewust rustiger volgens de wedstrijdstrategie."
                }
              ]
            }
          ],
          "totalPlannedLabel": "Marathon",
          "totalPlannedSeconds": 12596,
          "estimatedDistanceLabel": "42,195 km",
          "estimatedDistanceKm": 42.195,
          "goal": "tempo vasthouden. De wedstrijd begint hier pas echt.",
          "targetRpe": "wedstrijdinspanning",
          "mentalGoal": "Je hoeft niets meer te bewijzen. Je hebt het werk gedaan.",
          "orderWarning": "Kom niet direct uit Training 2; houd liefst minimaal één rustdag tussen beide trainingen.",
          "detailsSections": [
            {
              "title": "MARATHON — 22 NOVEMBER 2026",
              "items": [
                "Helling: niet van toepassing — dit is de buitenwedstrijd, geen loopbandtraining."
              ]
            },
            {
              "title": "Als de ontwikkeling en tests groen licht geven",
              "items": [
                "DOEL: 3:30:00"
              ]
            },
            {
              "title": "Benodigd gemiddelde",
              "items": [
                "4:58,6/km"
              ]
            },
            {
              "title": "Wedstrijdstrategie",
              "items": [
                "0–5 km",
                "5:03–5:05/km",
                "Niet meegaan met mensen die te snel vertrekken.",
                "5–10 km"
              ]
            },
            {
              "title": "Langzaam stabiliseren rond",
              "items": [
                "5:00/km",
                "10–30 km"
              ]
            },
            {
              "title": "Rond",
              "items": [
                "4:59–5:00/km",
                "Dit moet gecontroleerd voelen.",
                "Geen tijd proberen te winnen.",
                "30–35 km"
              ]
            },
            {
              "title": "Doel",
              "items": [
                "tempo vasthouden.",
                "De wedstrijd begint hier pas echt.",
                "35–40 km",
                "Alleen versnellen als er daadwerkelijk controle is.",
                "Laatste 2,2 km",
                "Alles wat nog beschikbaar is."
              ]
            }
          ],
          "notes": [],
          "isTest": false,
          "testNumber": null,
          "labels": [
            "RACE"
          ],
          "evaluation": null,
          "weekId": "marathon-3u30-week-47",
          "dateLabel": "16 – 22 november",
          "phaseId": "marathonweek",
          "phaseName": "Marathonweek"
        }
      ]
    }
  ],
  "guidance": {
    "philosophy": [
      "We trainen niet alleen om fysiologisch klaar te zijn voor de marathon.",
      "We trainen ook om tegen november het gevoel te hebben:",
      "“Ik ken lange afstanden. 21 km is normaal geworden. 25 km is beheersbaar. 30 km is zwaar, maar niet intimiderend.”",
      "Daarom bevat het schema naast normale easy-, kwaliteits- en lange trainingen ook expliciete:",
      "- 5 km Benchmark",
      "- Marathonpace Test",
      "- Marathon Specific Test",
      "- 30K Confidence Run",
      "De vier trainingen per week blijven:",
      "- Easy / Zone 2",
      "- Kwaliteit / test",
      "- Easy / middellange duur",
      "- Lange duur / confidence run"
    ],
    "paces": [
      {
        "type": "Herstel",
        "speed": "9,4–9,7 km/u",
        "incline": "0,5%"
      },
      {
        "type": "Easy",
        "speed": "9,9–10,3 km/u",
        "incline": "0,5%"
      },
      {
        "type": "Lange rustige duur",
        "speed": "10,0–10,2 km/u",
        "incline": "0,5%"
      },
      {
        "type": "Steady",
        "speed": "10,6–11,0 km/u",
        "incline": "0,5%"
      },
      {
        "type": "Sub-marathon",
        "speed": "11,5–11,8 km/u",
        "incline": "1%"
      },
      {
        "type": "Marathonpace",
        "speed": "12,0 km/u",
        "incline": "1%"
      },
      {
        "type": "Drempel",
        "speed": "12,3–12,7 km/u",
        "incline": "1%"
      },
      {
        "type": "Intervallen",
        "speed": "13,0–13,3 km/u",
        "incline": "1%"
      }
    ],
    "scheduling": [
      "Vier loopdagen per week.",
      "Training 2 en Training 4 liefst met minimaal één rustdag ertussen.",
      "Geen structurele vijfde loopdag."
    ],
    "suggestedSequences": [
      "Training 1 → rust of herstel → Training 2 → minimaal één rustdag → Training 4",
      "Training 3 kan flexibel worden geplaatst zolang Training 2 en Training 4 niet direct op elkaar volgen."
    ],
    "rpeScale": [
      {
        "type": "Easy",
        "rpe": "3–4/10",
        "feeling": "Volledige zinnen moeten mogelijk blijven."
      },
      {
        "type": "Confidence/long run",
        "rpe": "meestal 4–6/10",
        "feeling": "Controle en tijd op de benen zijn belangrijker dan snelheid."
      },
      {
        "type": "Kwaliteit/test",
        "rpe": "volgens de specifieke criteria",
        "feeling": "Niet harder dan de beschreven training vraagt."
      }
    ],
    "incline": [
      "Herstel: 0,5%.",
      "Easy: 0,5%.",
      "Lange rustige duur: 0,5%.",
      "Steady: 0,5%.",
      "Sub-marathon: 1%.",
      "Marathonpace: 1%.",
      "Drempel: 1%.",
      "Intervallen: 1%."
    ],
    "painRules": [
      "Geen oplopende pijn- of blessureklachten accepteren.",
      "Herstel tussen trainingen moet goed blijven.",
      "Pas belasting aan bij pijn die tijdens het lopen toeneemt."
    ],
    "fueling": [
      "Gebruik lange duurlopen en confidence runs om voeding en drinken te testen.",
      "Verander trainingssnelheden nooit automatisch op basis van één testresultaat."
    ],
    "raceStrategy": [
      {
        "distance": "0–5 km",
        "pace": "5:03–5:05/km",
        "instruction": "Niet meegaan met mensen die te snel vertrekken."
      },
      {
        "distance": "5–10 km",
        "pace": "stabiliseren rond 5:00/km",
        "instruction": "Langzaam naar het beoogde ritme gaan."
      },
      {
        "distance": "10–30 km",
        "pace": "4:59–5:00/km",
        "instruction": "Gecontroleerd lopen en geen tijd proberen te winnen."
      },
      {
        "distance": "30–35 km",
        "pace": "tempo vasthouden",
        "instruction": "De wedstrijd begint hier pas echt."
      },
      {
        "distance": "35–40 km",
        "pace": "op controle",
        "instruction": "Alleen versnellen als er daadwerkelijk controle is."
      },
      {
        "distance": "Laatste 2,2 km",
        "pace": "op gevoel",
        "instruction": "Alles wat nog beschikbaar is."
      }
    ],
    "targetConfirmation": [
      "10,0–10,3 km/u blijft duidelijk easy",
      "±60 km/week wordt goed verdragen",
      "21 km voelt niet meer intimiderend",
      "25+ km kan gecontroleerd worden gelopen",
      "30 km wordt succesvol voltooid",
      "5 km benchmark laat duidelijke verbetering zien",
      "3 × 15 min @ 12,0 lukt beheerst — 1%",
      "de 28,7 km sleuteltraining lukt",
      "12 km/u voelt niet langer als bijna-drempeltempo",
      "herstel tussen trainingen blijft goed",
      "geen oplopende pijn- of blessureklachten"
    ],
    "officialTests": [
      {
        "week": 40,
        "training": 2,
        "title": "TEST 1 — 5 km benchmark",
        "question": "Hoeveel is mijn snelheid/drempel verbeterd?"
      },
      {
        "week": 43,
        "training": 2,
        "title": "TEST 2 — 3 × 15 min @ 12 km/u",
        "question": "Hoe comfortabel is mijn beoogde marathonpace geworden?"
      },
      {
        "week": 44,
        "training": 4,
        "title": "TEST 3 — 28,7 km met marathonpace na 85 minuten",
        "question": "Kan ik marathonpace ook onder vermoeidheid beheersen?"
      }
    ]
  }
};

  function segmentDurationSeconds(segment) {
    if (segment.durationSeconds) return segment.durationSeconds;
    if (segment.distanceKm && segment.speedKmh) return Math.round((segment.distanceKm / segment.speedKmh) * 3600);
    return 0;
  }

  function flattenWorkoutSegments(workout) {
    const result = [];
    (workout.groups || []).forEach((group) => {
      const repeats = group.kind === "repeat" ? group.repetitions || 1 : 1;
      for (let repeat = 1; repeat <= repeats; repeat += 1) {
        (group.segments || []).forEach((segment, index) => {
          if (group.omitRecoveryAfterLast && repeat === repeats && index === group.segments.length - 1 && segment.isRecovery) return;
          result.push({ ...segment, groupLabel: group.label, repeat, repeats, executionId: segment.segmentId + "-r" + repeat });
        });
      }
    });
    return result;
  }

  function calculateWorkoutDistanceKm(workout) {
    return flattenWorkoutSegments(workout).reduce((total, segment) => {
      if (segment.distanceKm) return total + segment.distanceKm;
      return total + ((segment.durationSeconds || 0) / 3600) * (segment.speedKmh || 0);
    }, 0);
  }

  function calculateWeekDistanceKm(week) {
    return (week.workouts || []).reduce((total, workout) => total + (workout.estimatedDistanceKm || calculateWorkoutDistanceKm(workout)), 0);
  }

  window.MARATHON_PLAN = MARATHON_PLAN;
  window.APP_CONFIG = MARATHON_PLAN.config;
  window.TRAINING_WEEKS = MARATHON_PLAN.weeks;
  window.TRAINING_PLAN = MARATHON_PLAN.phases.map((phase) => ({ ...phase, weeks: MARATHON_PLAN.weeks.filter((week) => week.phaseId === phase.phaseId) }));
  window.MARATHON_MODEL = { segmentDurationSeconds, flattenWorkoutSegments, calculateWorkoutDistanceKm, calculateWeekDistanceKm };
})();
