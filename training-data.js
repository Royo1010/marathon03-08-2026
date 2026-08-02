(function () {
  "use strict";

  const MARATHON_PLAN = {
    "config": {
      "planId": "marathon-330-treadmill-2026",
      "planVersion": 1,
      "schemaVersion": "marathon-plan-2026-v1",
      "planName": "Persoonlijk loopband-marathonschema",
      "planSubtitle": "16 weken richting een ambitieuze marathon rond 3:30",
      "startDate": "2026-08-03",
      "endDate": "2026-11-22",
      "marathonDate": "2026-11-22",
      "previousMarathonTime": "3:55:50",
      "targetTime": "3:30:00",
      "targetPace": "4:58,6 min/km",
      "targetSpeedKmh": 12.06,
      "practicalMarathonSpeedKmh": 12,
      "trainingFrequency": 4,
      "primarySurface": "Gemotoriseerde loopband"
    },
    "phases": [
      {
        "phaseId": "loopbestendig",
        "number": 1,
        "name": "Opnieuw loopbestendig worden",
        "shortName": "Loopbestendig",
        "startWeek": 1,
        "endWeek": 4,
        "goal": "Vier loopmomenten leren verdragen en de duur geleidelijk opbouwen zonder onnodige vermoeidheid.",
        "startDate": "2026-08-03",
        "endDate": "2026-08-30"
      },
      {
        "phaseId": "marathonbasis",
        "number": 2,
        "name": "Marathonbasis opbouwen",
        "shortName": "Marathonbasis",
        "startWeek": 5,
        "endWeek": 8,
        "goal": "Weekvolume, lange duur en gecontroleerde blokken rond doeltempo verder uitbouwen.",
        "startDate": "2026-08-31",
        "endDate": "2026-09-27"
      },
      {
        "phaseId": "marathonspecifiek",
        "number": 3,
        "name": "Marathonspecifieke periode",
        "shortName": "Marathonspecifiek",
        "startWeek": 9,
        "endWeek": 13,
        "goal": "Marathontempo leren vasthouden met vermoeide benen en voeding onder wedstrijdachtige belasting testen.",
        "startDate": "2026-09-28",
        "endDate": "2026-11-01"
      },
      {
        "phaseId": "taper",
        "number": 4,
        "name": "Taper",
        "shortName": "Taper",
        "startWeek": 14,
        "endWeek": 15,
        "goal": "Trainingsvolume afbouwen, ritme behouden en opgebouwde vermoeidheid laten zakken.",
        "startDate": "2026-11-02",
        "endDate": "2026-11-15"
      },
      {
        "phaseId": "wedstrijdweek",
        "number": 5,
        "name": "Wedstrijdweek",
        "shortName": "Wedstrijdweek",
        "startWeek": 16,
        "endWeek": 16,
        "goal": "Fris blijven, niets nieuws proberen en het geteste marathonplan gecontroleerd uitvoeren.",
        "startDate": "2026-11-16",
        "endDate": "2026-11-22"
      }
    ],
    "weeks": [
      {
        "weekId": "marathon-2026-w01",
        "weekNumber": 1,
        "label": "Week 1",
        "periodLabel": "3 t/m 9 augustus",
        "startDate": "2026-08-03",
        "endDate": "2026-08-09",
        "phaseId": "loopbestendig",
        "phaseName": "Opnieuw loopbestendig worden",
        "sourcePhaseName": "opnieuw loopbestendig worden",
        "plannedDistanceKm": 22.3,
        "focus": "Voer alle vier trainingen in volgorde uit en laat herstel leidend zijn binnen opnieuw loopbestendig worden.",
        "workouts": [
          {
            "workoutId": "marathon-2026-w01-t1",
            "weekId": "marathon-2026-w01",
            "weekNumber": 1,
            "trainingNumber": 1,
            "title": "rustige start",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w01-t1-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w01-t1-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w01-t1-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w01-t1-s03",
                    "basis": "time",
                    "durationSeconds": 1020,
                    "display": "17 minuten",
                    "speedKmh": 9,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w01-t1-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w01-t1-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "35 minuten",
            "totalPlannedSeconds": 2100,
            "estimatedDistanceLabel": "circa 4,6 km",
            "estimatedDistanceKm": 4.6,
            "goal": "eenvoudige eerste loopprikkel",
            "targetRpe": "3/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w01-t2",
            "weekId": "marathon-2026-w01",
            "weekNumber": 1,
            "trainingNumber": 2,
            "title": "rustig met korte versnellingen",
            "category": "kwaliteit",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w01-t2-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w01-t2-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w01-t2-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w01-t2-s03",
                    "basis": "time",
                    "durationSeconds": 840,
                    "display": "14 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w01-t2-g2",
                "kind": "repeat",
                "label": "Daarna viermaal",
                "repetitions": 4,
                "segments": [
                  {
                    "segmentId": "marathon-2026-w01-t2-s04",
                    "basis": "time",
                    "durationSeconds": 20,
                    "display": "20 seconden",
                    "speedKmh": 12,
                    "inclinePercent": 1,
                    "type": "tempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w01-t2-s05",
                    "basis": "time",
                    "durationSeconds": 100,
                    "display": "1 minuut 40 seconden",
                    "speedKmh": 8.8,
                    "inclinePercent": 0.5,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w01-t2-g3",
                "kind": "sequence",
                "label": "Afsluiten",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w01-t2-s06",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w01-t2-s07",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "40 minuten",
            "totalPlannedSeconds": 2400,
            "estimatedDistanceLabel": "circa 5,5 km",
            "estimatedDistanceKm": 5.5,
            "goal": "souplesse en kennismaking met een hogere bandsnelheid",
            "targetRpe": "maximaal 6/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Plan deze kwaliteitstraining niet op de dag direct vóór Training 4."
          },
          {
            "workoutId": "marathon-2026-w01-t3",
            "weekId": "marathon-2026-w01",
            "weekNumber": 1,
            "trainingNumber": 3,
            "title": "korte hersteltraining",
            "category": "herstel",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w01-t3-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w01-t3-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w01-t3-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w01-t3-s03",
                    "basis": "time",
                    "durationSeconds": 420,
                    "display": "7 minuten",
                    "speedKmh": 9,
                    "inclinePercent": 0.5,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w01-t3-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w01-t3-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "25 minuten",
            "totalPlannedSeconds": 1500,
            "estimatedDistanceLabel": "circa 3,1 km",
            "estimatedDistanceKm": 3.1,
            "goal": "wennen aan vier loopmomenten zonder veel extra vermoeidheid",
            "targetRpe": "2–3/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w01-t4",
            "weekId": "marathon-2026-w01",
            "weekNumber": 1,
            "trainingNumber": 4,
            "title": "lange duur met wandelpauzes",
            "category": "lange-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w01-t4-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w01-t4-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w01-t4-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w01-t4-g2",
                "kind": "repeat",
                "label": "Daarna viermaal",
                "repetitions": 4,
                "segments": [
                  {
                    "segmentId": "marathon-2026-w01-t4-s03",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w01-t4-s04",
                    "basis": "time",
                    "durationSeconds": 60,
                    "display": "1 minuut wandelen",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w01-t4-g3",
                "kind": "sequence",
                "label": "Vervolgens",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w01-t4-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w01-t4-s06",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w01-t4-s07",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "65 minuten",
            "totalPlannedSeconds": 3900,
            "estimatedDistanceLabel": "circa 9,0 km",
            "estimatedDistanceKm": 9,
            "goal": "tijd op de benen met beperkte aaneengesloten belasting",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Training 4 is de belangrijkste duurprikkel. Plan hem niet direct na Training 2 en houd bij voorkeur ongeveer 48 uur tussen beide."
          }
        ]
      },
      {
        "weekId": "marathon-2026-w02",
        "weekNumber": 2,
        "label": "Week 2",
        "periodLabel": "10 t/m 16 augustus",
        "startDate": "2026-08-10",
        "endDate": "2026-08-16",
        "phaseId": "loopbestendig",
        "phaseName": "Opnieuw loopbestendig worden",
        "sourcePhaseName": "opnieuw loopbestendig worden",
        "plannedDistanceKm": 25.8,
        "focus": "Voer alle vier trainingen in volgorde uit en laat herstel leidend zijn binnen opnieuw loopbestendig worden.",
        "workouts": [
          {
            "workoutId": "marathon-2026-w02-t1",
            "weekId": "marathon-2026-w02",
            "weekNumber": 2,
            "trainingNumber": 1,
            "title": "rustige duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w02-t1-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w02-t1-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w02-t1-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w02-t1-s03",
                    "basis": "time",
                    "durationSeconds": 1320,
                    "display": "22 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w02-t1-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w02-t1-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "40 minuten",
            "totalPlannedSeconds": 2400,
            "estimatedDistanceLabel": "circa 5,5 km",
            "estimatedDistanceKm": 5.5,
            "goal": "aerobe gewenning",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w02-t2",
            "weekId": "marathon-2026-w02",
            "weekNumber": 2,
            "trainingNumber": 2,
            "title": "korte tempowisselingen",
            "category": "kwaliteit",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w02-t2-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w02-t2-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w02-t2-s02",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w02-t2-g2",
                "kind": "repeat",
                "label": "Daarna zesmaal",
                "repetitions": 6,
                "segments": [
                  {
                    "segmentId": "marathon-2026-w02-t2-s03",
                    "basis": "time",
                    "durationSeconds": 60,
                    "display": "1 minuut",
                    "speedKmh": 11.2,
                    "inclinePercent": 1,
                    "type": "steady",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w02-t2-s04",
                    "basis": "time",
                    "durationSeconds": 120,
                    "display": "2 minuten",
                    "speedKmh": 9,
                    "inclinePercent": 0.5,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w02-t2-g3",
                "kind": "sequence",
                "label": "Afsluiten",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w02-t2-s05",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 8.8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w02-t2-s06",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "45 minuten",
            "totalPlannedSeconds": 2700,
            "estimatedDistanceLabel": "circa 6,5 km",
            "estimatedDistanceKm": 6.5,
            "goal": "lichte tempoprikkel zonder verzuring",
            "targetRpe": "maximaal 6/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Plan deze kwaliteitstraining niet op de dag direct vóór Training 4."
          },
          {
            "workoutId": "marathon-2026-w02-t3",
            "weekId": "marathon-2026-w02",
            "weekNumber": 2,
            "trainingNumber": 3,
            "title": "korte hersteltraining",
            "category": "herstel",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w02-t3-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w02-t3-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w02-t3-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w02-t3-s03",
                    "basis": "time",
                    "durationSeconds": 420,
                    "display": "7 minuten",
                    "speedKmh": 9.1,
                    "inclinePercent": 0.5,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w02-t3-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w02-t3-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "25 minuten",
            "totalPlannedSeconds": 1500,
            "estimatedDistanceLabel": "circa 3,1 km",
            "estimatedDistanceKm": 3.1,
            "goal": "Extra loopfrequentie toevoegen met weinig restvermoeidheid.",
            "targetRpe": "2–3/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w02-t4",
            "weekId": "marathon-2026-w02",
            "weekNumber": 2,
            "trainingNumber": 4,
            "title": "lange duur met wandelpauzes",
            "category": "lange-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w02-t4-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w02-t4-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w02-t4-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w02-t4-g2",
                "kind": "repeat",
                "label": "Daarna driemaal",
                "repetitions": 3,
                "segments": [
                  {
                    "segmentId": "marathon-2026-w02-t4-s03",
                    "basis": "time",
                    "durationSeconds": 960,
                    "display": "16 minuten",
                    "speedKmh": 9.3,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w02-t4-s04",
                    "basis": "time",
                    "durationSeconds": 60,
                    "display": "1 minuut wandelen",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w02-t4-g3",
                "kind": "sequence",
                "label": "Vervolgens",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w02-t4-s05",
                    "basis": "time",
                    "durationSeconds": 360,
                    "display": "6 minuten",
                    "speedKmh": 9.3,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w02-t4-s06",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w02-t4-s07",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "75 minuten",
            "totalPlannedSeconds": 4500,
            "estimatedDistanceLabel": "circa 10,7 km",
            "estimatedDistanceKm": 10.7,
            "goal": "Tijd op de benen, duurvermogen en wedstrijdspecifieke belastbaarheid opbouwen.",
            "targetRpe": "3–5/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Training 4 is de belangrijkste duurprikkel. Plan hem niet direct na Training 2 en houd bij voorkeur ongeveer 48 uur tussen beide."
          }
        ]
      },
      {
        "weekId": "marathon-2026-w03",
        "weekNumber": 3,
        "label": "Week 3",
        "periodLabel": "17 t/m 23 augustus",
        "startDate": "2026-08-17",
        "endDate": "2026-08-23",
        "phaseId": "loopbestendig",
        "phaseName": "Opnieuw loopbestendig worden",
        "sourcePhaseName": "opnieuw loopbestendig worden",
        "plannedDistanceKm": 29.2,
        "focus": "Voer alle vier trainingen in volgorde uit en laat herstel leidend zijn binnen opnieuw loopbestendig worden.",
        "workouts": [
          {
            "workoutId": "marathon-2026-w03-t1",
            "weekId": "marathon-2026-w03",
            "weekNumber": 3,
            "trainingNumber": 1,
            "title": "rustig",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w03-t1-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w03-t1-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t1-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t1-s03",
                    "basis": "time",
                    "durationSeconds": 1620,
                    "display": "27 minuten",
                    "speedKmh": 9.3,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t1-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t1-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "45 minuten",
            "totalPlannedSeconds": 2700,
            "estimatedDistanceLabel": "circa 6,3 km",
            "estimatedDistanceKm": 6.3,
            "goal": "Rustig aeroob volume opbouwen en technisch ontspannen lopen.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w03-t2",
            "weekId": "marathon-2026-w03",
            "weekNumber": 3,
            "trainingNumber": 2,
            "title": "gecontroleerde tempoblokken",
            "category": "kwaliteit",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w03-t2-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w03-t2-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t2-s02",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t2-s03",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 11.4,
                    "inclinePercent": 1,
                    "type": "steady",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t2-s04",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 9,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t2-s05",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 11.4,
                    "inclinePercent": 1,
                    "type": "steady",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t2-s06",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 9,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t2-s07",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 11.4,
                    "inclinePercent": 1,
                    "type": "steady",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t2-s08",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 8.8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t2-s09",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "48 minuten",
            "totalPlannedSeconds": 2880,
            "estimatedDistanceLabel": "circa 7,3 km",
            "estimatedDistanceKm": 7.3,
            "goal": "aerobe tempobestendigheid",
            "targetRpe": "maximaal 6–7/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Plan deze kwaliteitstraining niet op de dag direct vóór Training 4."
          },
          {
            "workoutId": "marathon-2026-w03-t3",
            "weekId": "marathon-2026-w03",
            "weekNumber": 3,
            "trainingNumber": 3,
            "title": "korte hersteltraining",
            "category": "herstel",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w03-t3-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w03-t3-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t3-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t3-s03",
                    "basis": "time",
                    "durationSeconds": 420,
                    "display": "7 minuten",
                    "speedKmh": 9,
                    "inclinePercent": 0.5,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t3-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t3-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "25 minuten",
            "totalPlannedSeconds": 1500,
            "estimatedDistanceLabel": "circa 3,1 km",
            "estimatedDistanceKm": 3.1,
            "goal": "Extra loopfrequentie toevoegen met weinig restvermoeidheid.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w03-t4",
            "weekId": "marathon-2026-w03",
            "weekNumber": 3,
            "trainingNumber": 4,
            "title": "lange duurloop",
            "category": "lange-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w03-t4-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w03-t4-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t4-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t4-s03",
                    "basis": "time",
                    "durationSeconds": 1980,
                    "display": "33 minuten",
                    "speedKmh": 9.4,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t4-s04",
                    "basis": "time",
                    "durationSeconds": 60,
                    "display": "1 minuut wandelen",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t4-s05",
                    "basis": "time",
                    "durationSeconds": 1980,
                    "display": "33 minuten",
                    "speedKmh": 9.4,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t4-s06",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w03-t4-s07",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "85 minuten",
            "totalPlannedSeconds": 5100,
            "estimatedDistanceLabel": "circa 12,5 km",
            "estimatedDistanceKm": 12.5,
            "goal": "Tijd op de benen, duurvermogen en wedstrijdspecifieke belastbaarheid opbouwen.",
            "targetRpe": "3–5/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Training 4 is de belangrijkste duurprikkel. Plan hem niet direct na Training 2 en houd bij voorkeur ongeveer 48 uur tussen beide."
          }
        ]
      },
      {
        "weekId": "marathon-2026-w04",
        "weekNumber": 4,
        "label": "Week 4",
        "periodLabel": "24 t/m 30 augustus",
        "startDate": "2026-08-24",
        "endDate": "2026-08-30",
        "phaseId": "loopbestendig",
        "phaseName": "Opnieuw loopbestendig worden",
        "sourcePhaseName": "opnieuw loopbestendig worden",
        "plannedDistanceKm": 33.8,
        "focus": "Voer alle vier trainingen in volgorde uit en laat herstel leidend zijn binnen opnieuw loopbestendig worden.",
        "workouts": [
          {
            "workoutId": "marathon-2026-w04-t1",
            "weekId": "marathon-2026-w04",
            "weekNumber": 4,
            "trainingNumber": 1,
            "title": "rustige duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w04-t1-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w04-t1-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w04-t1-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w04-t1-s03",
                    "basis": "time",
                    "durationSeconds": 1620,
                    "display": "27 minuten",
                    "speedKmh": 9.3,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w04-t1-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w04-t1-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "45 minuten",
            "totalPlannedSeconds": 2700,
            "estimatedDistanceLabel": "circa 6,3 km",
            "estimatedDistanceKm": 6.3,
            "goal": "Rustig aeroob volume opbouwen en technisch ontspannen lopen.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w04-t2",
            "weekId": "marathon-2026-w04",
            "weekNumber": 4,
            "trainingNumber": 2,
            "title": "vier tempoblokken",
            "category": "kwaliteit",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w04-t2-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w04-t2-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w04-t2-s02",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w04-t2-g2",
                "kind": "repeat",
                "label": "Daarna viermaal",
                "repetitions": 4,
                "segments": [
                  {
                    "segmentId": "marathon-2026-w04-t2-s03",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 11.6,
                    "inclinePercent": 1,
                    "type": "tempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w04-t2-s04",
                    "basis": "time",
                    "durationSeconds": 150,
                    "display": "2 minuten 30 seconden",
                    "speedKmh": 9,
                    "inclinePercent": 0.5,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ],
                "context": "Na de eerste drie blokken",
                "omitRecoveryAfterLast": true
              },
              {
                "groupId": "marathon-2026-w04-t2-g3",
                "kind": "sequence",
                "label": "Afsluiten",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w04-t2-s05",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 8.8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w04-t2-s06",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "54 minuten 30 seconden",
            "totalPlannedSeconds": 3270,
            "estimatedDistanceLabel": "circa 8,5 km",
            "estimatedDistanceKm": 8.5,
            "goal": "De geplande kwaliteitsprikkel gecontroleerd uitvoeren zonder sprinten of totale uitputting.",
            "targetRpe": "6–8/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Plan deze kwaliteitstraining niet op de dag direct vóór Training 4."
          },
          {
            "workoutId": "marathon-2026-w04-t3",
            "weekId": "marathon-2026-w04",
            "weekNumber": 4,
            "trainingNumber": 3,
            "title": "korte rustige duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w04-t3-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w04-t3-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w04-t3-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w04-t3-s03",
                    "basis": "time",
                    "durationSeconds": 1020,
                    "display": "17 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w04-t3-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w04-t3-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "35 minuten",
            "totalPlannedSeconds": 2100,
            "estimatedDistanceLabel": "circa 4,7 km",
            "estimatedDistanceKm": 4.7,
            "goal": "Extra loopfrequentie toevoegen met weinig restvermoeidheid.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w04-t4",
            "weekId": "marathon-2026-w04",
            "weekNumber": 4,
            "trainingNumber": 4,
            "title": "lange duurloop",
            "category": "lange-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w04-t4-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w04-t4-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w04-t4-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w04-t4-s03",
                    "basis": "time",
                    "durationSeconds": 4620,
                    "display": "77 minuten",
                    "speedKmh": 9.5,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Gebruik meestal deze helling; de algemene hellingsvariatie blijft optioneel."
                  },
                  {
                    "segmentId": "marathon-2026-w04-t4-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w04-t4-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "95 minuten",
            "totalPlannedSeconds": 5700,
            "estimatedDistanceLabel": "circa 14,3 km",
            "estimatedDistanceKm": 14.3,
            "goal": "Tijd op de benen, duurvermogen en wedstrijdspecifieke belastbaarheid opbouwen.",
            "targetRpe": "3–5/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Training 4 is de belangrijkste duurprikkel. Plan hem niet direct na Training 2 en houd bij voorkeur ongeveer 48 uur tussen beide."
          }
        ]
      },
      {
        "weekId": "marathon-2026-w05",
        "weekNumber": 5,
        "label": "Week 5",
        "periodLabel": "31 augustus t/m 6 september",
        "startDate": "2026-08-31",
        "endDate": "2026-09-06",
        "phaseId": "marathonbasis",
        "phaseName": "Marathonbasis opbouwen",
        "sourcePhaseName": "marathonbasis opbouwen",
        "plannedDistanceKm": 37.5,
        "focus": "Voer alle vier trainingen in volgorde uit en laat herstel leidend zijn binnen marathonbasis opbouwen.",
        "workouts": [
          {
            "workoutId": "marathon-2026-w05-t1",
            "weekId": "marathon-2026-w05",
            "weekNumber": 5,
            "trainingNumber": 1,
            "title": "rustige duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w05-t1-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w05-t1-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t1-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t1-s03",
                    "basis": "time",
                    "durationSeconds": 1620,
                    "display": "27 minuten",
                    "speedKmh": 9.4,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t1-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t1-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "45 minuten",
            "totalPlannedSeconds": 2700,
            "estimatedDistanceLabel": "circa 6,3 km",
            "estimatedDistanceKm": 6.3,
            "goal": "Rustig aeroob volume opbouwen en technisch ontspannen lopen.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w05-t2",
            "weekId": "marathon-2026-w05",
            "weekNumber": 5,
            "trainingNumber": 2,
            "title": "langere aerobe tempoblokken",
            "category": "kwaliteit",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w05-t2-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w05-t2-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t2-s02",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t2-s03",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 11.8,
                    "inclinePercent": 1,
                    "type": "tempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t2-s04",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t2-s05",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 11.8,
                    "inclinePercent": 1,
                    "type": "tempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t2-s06",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t2-s07",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 11.8,
                    "inclinePercent": 1,
                    "type": "tempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t2-s08",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 8.8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t2-s09",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "57 minuten",
            "totalPlannedSeconds": 3420,
            "estimatedDistanceLabel": "circa 9,2 km",
            "estimatedDistanceKm": 9.2,
            "goal": "De geplande kwaliteitsprikkel gecontroleerd uitvoeren zonder sprinten of totale uitputting.",
            "targetRpe": "6–7/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Plan deze kwaliteitstraining niet op de dag direct vóór Training 4."
          },
          {
            "workoutId": "marathon-2026-w05-t3",
            "weekId": "marathon-2026-w05",
            "weekNumber": 5,
            "trainingNumber": 3,
            "title": "rustige duur met steady afsluiting",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w05-t3-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w05-t3-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t3-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t3-s03",
                    "basis": "time",
                    "durationSeconds": 1080,
                    "display": "18 minuten",
                    "speedKmh": 9.6,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t3-s04",
                    "basis": "time",
                    "durationSeconds": 540,
                    "display": "9 minuten",
                    "speedKmh": 10.4,
                    "inclinePercent": 0.5,
                    "type": "steady",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t3-s05",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t3-s06",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "45 minuten",
            "totalPlannedSeconds": 2700,
            "estimatedDistanceLabel": "circa 6,5 km",
            "estimatedDistanceKm": 6.5,
            "goal": "Extra loopfrequentie toevoegen met weinig restvermoeidheid.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w05-t4",
            "weekId": "marathon-2026-w05",
            "weekNumber": 5,
            "trainingNumber": 4,
            "title": "lange duurloop",
            "category": "lange-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w05-t4-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w05-t4-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t4-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t4-s03",
                    "basis": "time",
                    "durationSeconds": 5040,
                    "display": "84 minuten",
                    "speedKmh": 9.6,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Gebruik meestal deze helling; de algemene hellingsvariatie blijft optioneel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t4-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w05-t4-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "102 minuten",
            "totalPlannedSeconds": 6120,
            "estimatedDistanceLabel": "circa 15,5 km",
            "estimatedDistanceKm": 15.5,
            "goal": "Tijd op de benen, duurvermogen en wedstrijdspecifieke belastbaarheid opbouwen.",
            "targetRpe": "3–5/10",
            "nutrition": "begin met ongeveer 30 gram koolhydraten per uur",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Training 4 is de belangrijkste duurprikkel. Plan hem niet direct na Training 2 en houd bij voorkeur ongeveer 48 uur tussen beide."
          }
        ]
      },
      {
        "weekId": "marathon-2026-w06",
        "weekNumber": 6,
        "label": "Week 6",
        "periodLabel": "7 t/m 13 september",
        "startDate": "2026-09-07",
        "endDate": "2026-09-13",
        "phaseId": "marathonbasis",
        "phaseName": "Marathonbasis opbouwen",
        "sourcePhaseName": "marathonbasis opbouwen",
        "plannedDistanceKm": 41.9,
        "focus": "Voer alle vier trainingen in volgorde uit en laat herstel leidend zijn binnen marathonbasis opbouwen.",
        "workouts": [
          {
            "workoutId": "marathon-2026-w06-t1",
            "weekId": "marathon-2026-w06",
            "weekNumber": 6,
            "trainingNumber": 1,
            "title": "rustige duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w06-t1-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w06-t1-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w06-t1-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w06-t1-s03",
                    "basis": "time",
                    "durationSeconds": 1920,
                    "display": "32 minuten",
                    "speedKmh": 9.4,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w06-t1-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w06-t1-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "50 minuten",
            "totalPlannedSeconds": 3000,
            "estimatedDistanceLabel": "circa 7,1 km",
            "estimatedDistanceKm": 7.1,
            "goal": "Rustig aeroob volume opbouwen en technisch ontspannen lopen.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w06-t2",
            "weekId": "marathon-2026-w06",
            "weekNumber": 6,
            "trainingNumber": 2,
            "title": "vier blokken rond doelmarathontempo",
            "category": "kwaliteit",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w06-t2-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w06-t2-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w06-t2-s02",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w06-t2-g2",
                "kind": "repeat",
                "label": "Daarna viermaal",
                "repetitions": 4,
                "segments": [
                  {
                    "segmentId": "marathon-2026-w06-t2-s03",
                    "basis": "time",
                    "durationSeconds": 420,
                    "display": "7 minuten",
                    "speedKmh": 12,
                    "inclinePercent": 1,
                    "type": "marathontempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w06-t2-s04",
                    "basis": "time",
                    "durationSeconds": 150,
                    "display": "2 minuten 30 seconden",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ],
                "context": "Na de eerste drie blokken",
                "omitRecoveryAfterLast": true
              },
              {
                "groupId": "marathon-2026-w06-t2-g3",
                "kind": "sequence",
                "label": "Afsluiten",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w06-t2-s05",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 8.8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w06-t2-s06",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "62 minuten 30 seconden",
            "totalPlannedSeconds": 3750,
            "estimatedDistanceLabel": "circa 10,3 km",
            "estimatedDistanceKm": 10.3,
            "goal": "De geplande kwaliteitsprikkel gecontroleerd uitvoeren zonder sprinten of totale uitputting.",
            "targetRpe": "6–8/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Plan deze kwaliteitstraining niet op de dag direct vóór Training 4."
          },
          {
            "workoutId": "marathon-2026-w06-t3",
            "weekId": "marathon-2026-w06",
            "weekNumber": 6,
            "trainingNumber": 3,
            "title": "rustige duur met steady afsluiting",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w06-t3-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w06-t3-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w06-t3-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w06-t3-s03",
                    "basis": "time",
                    "durationSeconds": 1380,
                    "display": "23 minuten",
                    "speedKmh": 9.7,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w06-t3-s04",
                    "basis": "time",
                    "durationSeconds": 540,
                    "display": "9 minuten",
                    "speedKmh": 10.5,
                    "inclinePercent": 0.5,
                    "type": "steady",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w06-t3-s05",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w06-t3-s06",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "50 minuten",
            "totalPlannedSeconds": 3000,
            "estimatedDistanceLabel": "circa 7,4 km",
            "estimatedDistanceKm": 7.4,
            "goal": "Extra loopfrequentie toevoegen met weinig restvermoeidheid.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w06-t4",
            "weekId": "marathon-2026-w06",
            "weekNumber": 6,
            "trainingNumber": 4,
            "title": "lange duurloop",
            "category": "lange-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w06-t4-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w06-t4-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w06-t4-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w06-t4-s03",
                    "basis": "time",
                    "durationSeconds": 5640,
                    "display": "94 minuten",
                    "speedKmh": 9.6,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Gebruik meestal deze helling; de algemene hellingsvariatie blijft optioneel."
                  },
                  {
                    "segmentId": "marathon-2026-w06-t4-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w06-t4-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "112 minuten",
            "totalPlannedSeconds": 6720,
            "estimatedDistanceLabel": "circa 17,1 km",
            "estimatedDistanceKm": 17.1,
            "goal": "Tijd op de benen, duurvermogen en wedstrijdspecifieke belastbaarheid opbouwen.",
            "targetRpe": "3–5/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Training 4 is de belangrijkste duurprikkel. Plan hem niet direct na Training 2 en houd bij voorkeur ongeveer 48 uur tussen beide."
          }
        ]
      },
      {
        "weekId": "marathon-2026-w07",
        "weekNumber": 7,
        "label": "Week 7",
        "periodLabel": "14 t/m 20 september",
        "startDate": "2026-09-14",
        "endDate": "2026-09-20",
        "phaseId": "marathonbasis",
        "phaseName": "Marathonbasis opbouwen",
        "sourcePhaseName": "marathonbasis opbouwen",
        "plannedDistanceKm": 46.9,
        "focus": "Voer alle vier trainingen in volgorde uit en laat herstel leidend zijn binnen marathonbasis opbouwen.",
        "workouts": [
          {
            "workoutId": "marathon-2026-w07-t1",
            "weekId": "marathon-2026-w07",
            "weekNumber": 7,
            "trainingNumber": 1,
            "title": "rustige duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w07-t1-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w07-t1-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t1-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t1-s03",
                    "basis": "time",
                    "durationSeconds": 2220,
                    "display": "37 minuten",
                    "speedKmh": 9.5,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t1-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t1-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "55 minuten",
            "totalPlannedSeconds": 3300,
            "estimatedDistanceLabel": "circa 7,9 km",
            "estimatedDistanceKm": 7.9,
            "goal": "Rustig aeroob volume opbouwen en technisch ontspannen lopen.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w07-t2",
            "weekId": "marathon-2026-w07",
            "weekNumber": 7,
            "trainingNumber": 2,
            "title": "doeltempoblokken",
            "category": "kwaliteit",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w07-t2-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w07-t2-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t2-s02",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t2-s03",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 12.1,
                    "inclinePercent": 1,
                    "type": "marathontempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t2-s04",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t2-s05",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 12.1,
                    "inclinePercent": 1,
                    "type": "marathontempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t2-s06",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t2-s07",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 12.1,
                    "inclinePercent": 1,
                    "type": "marathontempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t2-s08",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 8.8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t2-s09",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "63 minuten",
            "totalPlannedSeconds": 3780,
            "estimatedDistanceLabel": "circa 10,5 km",
            "estimatedDistanceKm": 10.5,
            "goal": "De geplande kwaliteitsprikkel gecontroleerd uitvoeren zonder sprinten of totale uitputting.",
            "targetRpe": "6–8/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Plan deze kwaliteitstraining niet op de dag direct vóór Training 4."
          },
          {
            "workoutId": "marathon-2026-w07-t3",
            "weekId": "marathon-2026-w07",
            "weekNumber": 7,
            "trainingNumber": 3,
            "title": "middellange duur met steady afsluiting",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w07-t3-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w07-t3-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t3-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t3-s03",
                    "basis": "time",
                    "durationSeconds": 1800,
                    "display": "30 minuten",
                    "speedKmh": 9.8,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t3-s04",
                    "basis": "time",
                    "durationSeconds": 720,
                    "display": "12 minuten",
                    "speedKmh": 10.6,
                    "inclinePercent": 0.5,
                    "type": "steady",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t3-s05",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t3-s06",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "60 minuten",
            "totalPlannedSeconds": 3600,
            "estimatedDistanceLabel": "circa 9,1 km",
            "estimatedDistanceKm": 9.1,
            "goal": "Extra loopfrequentie toevoegen met weinig restvermoeidheid.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w07-t4",
            "weekId": "marathon-2026-w07",
            "weekNumber": 7,
            "trainingNumber": 4,
            "title": "lange duurloop",
            "category": "lange-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w07-t4-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w07-t4-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t4-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t4-s03",
                    "basis": "time",
                    "durationSeconds": 6420,
                    "display": "107 minuten",
                    "speedKmh": 9.7,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Gebruik meestal deze helling; de algemene hellingsvariatie blijft optioneel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t4-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w07-t4-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "125 minuten",
            "totalPlannedSeconds": 7500,
            "estimatedDistanceLabel": "circa 19,4 km",
            "estimatedDistanceKm": 19.4,
            "goal": "Tijd op de benen, duurvermogen en wedstrijdspecifieke belastbaarheid opbouwen.",
            "targetRpe": "3–5/10",
            "nutrition": "40–50 gram koolhydraten per uur",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Training 4 is de belangrijkste duurprikkel. Plan hem niet direct na Training 2 en houd bij voorkeur ongeveer 48 uur tussen beide."
          }
        ]
      },
      {
        "weekId": "marathon-2026-w08",
        "weekNumber": 8,
        "label": "Week 8",
        "periodLabel": "21 t/m 27 september",
        "startDate": "2026-09-21",
        "endDate": "2026-09-27",
        "phaseId": "marathonbasis",
        "phaseName": "Marathonbasis opbouwen",
        "sourcePhaseName": "marathonbasis opbouwen",
        "plannedDistanceKm": 41.1,
        "focus": "Herstel- en testweek",
        "workouts": [
          {
            "workoutId": "marathon-2026-w08-t1",
            "weekId": "marathon-2026-w08",
            "weekNumber": 8,
            "trainingNumber": 1,
            "title": "rustige duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w08-t1-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w08-t1-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t1-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t1-s03",
                    "basis": "time",
                    "durationSeconds": 1620,
                    "display": "27 minuten",
                    "speedKmh": 9.3,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t1-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t1-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "45 minuten",
            "totalPlannedSeconds": 2700,
            "estimatedDistanceLabel": "circa 6,3 km",
            "estimatedDistanceKm": 6.3,
            "goal": "Rustig aeroob volume opbouwen en technisch ontspannen lopen.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w08-t2",
            "weekId": "marathon-2026-w08",
            "weekNumber": 8,
            "trainingNumber": 2,
            "title": "progressieve 10-kilometertraining",
            "category": "testtraining",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w08-t2-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w08-t2-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t2-s02",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w08-t2-g2",
                "kind": "sequence",
                "label": "Daarna zonder herstelpauze",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w08-t2-s03",
                    "basis": "distance",
                    "distanceKm": 2,
                    "display": "2,0 km",
                    "speedKmh": 11.8,
                    "inclinePercent": 1,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t2-s04",
                    "basis": "distance",
                    "distanceKm": 3,
                    "display": "3,0 km",
                    "speedKmh": 12.2,
                    "inclinePercent": 1,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t2-s05",
                    "basis": "distance",
                    "distanceKm": 3,
                    "display": "3,0 km",
                    "speedKmh": 12.5,
                    "inclinePercent": 1,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t2-s06",
                    "basis": "distance",
                    "distanceKm": 0.5,
                    "display": "500 meter",
                    "speedKmh": 12.5,
                    "inclinePercent": 1,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t2-s07",
                    "basis": "distance",
                    "distanceKm": 0.5,
                    "display": "500 meter",
                    "speedKmh": 12.7,
                    "inclinePercent": 1,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t2-s08",
                    "basis": "distance",
                    "distanceKm": 0.5,
                    "display": "500 meter",
                    "speedKmh": 12.9,
                    "inclinePercent": 1,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t2-s09",
                    "basis": "distance",
                    "distanceKm": 0.5,
                    "display": "500 meter",
                    "speedKmh": 13.1,
                    "inclinePercent": 1,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w08-t2-g3",
                "kind": "sequence",
                "label": "Afsluiten",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w08-t2-s10",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 8.8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t2-s11",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "circa 76 minuten",
            "totalPlannedSeconds": 4560,
            "estimatedDistanceLabel": "circa 13,5 km",
            "estimatedDistanceKm": 13.5,
            "goal": "De geplande kwaliteitsprikkel gecontroleerd uitvoeren zonder sprinten of totale uitputting.",
            "targetRpe": "6–8/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [
              "Ga verder met de geplande snelheden wanneer",
              "Wanneer je vóór kilometer 8 moet stoppen of vroeg RPE 9 bereikt"
            ],
            "evaluation": {
              "title": "Evaluatie na deze training",
              "criteria": [
                "Voltooi alle tien progressieve kilometers",
                "Laat het laatste deel niet zwaarder worden dan RPE 8",
                "Hang niet aan de handgrepen",
                "Houd je techniek stabiel",
                "Geen duidelijke verergering van klachten de volgende dag"
              ],
              "adjustmentRules": [
                "Stop je vóór kilometer 8 of bereik je vroeg RPE 9, trek dan vanaf week 9 0,3 km/u af van de snelle blokken",
                "Gebruik voorlopig 11,7–11,8 km/u voor marathontempo",
                "Verander de rustige snelheden niet"
              ]
            },
            "orderWarning": "Plan deze kwaliteitstraining niet op de dag direct vóór Training 4."
          },
          {
            "workoutId": "marathon-2026-w08-t3",
            "weekId": "marathon-2026-w08",
            "weekNumber": 8,
            "trainingNumber": 3,
            "title": "hersteltraining",
            "category": "herstel",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w08-t3-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w08-t3-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t3-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t3-s03",
                    "basis": "time",
                    "durationSeconds": 1320,
                    "display": "22 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t3-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t3-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "40 minuten",
            "totalPlannedSeconds": 2400,
            "estimatedDistanceLabel": "circa 5,5 km",
            "estimatedDistanceKm": 5.5,
            "goal": "Extra loopfrequentie toevoegen met weinig restvermoeidheid.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w08-t4",
            "weekId": "marathon-2026-w08",
            "weekNumber": 8,
            "trainingNumber": 4,
            "title": "rustige lange duur",
            "category": "lange-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w08-t4-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w08-t4-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t4-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t4-s03",
                    "basis": "time",
                    "durationSeconds": 5220,
                    "display": "87 minuten",
                    "speedKmh": 9.5,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Gebruik meestal deze helling; de algemene hellingsvariatie blijft optioneel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t4-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w08-t4-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "105 minuten",
            "totalPlannedSeconds": 6300,
            "estimatedDistanceLabel": "circa 15,9 km",
            "estimatedDistanceKm": 15.9,
            "goal": "Tijd op de benen, duurvermogen en wedstrijdspecifieke belastbaarheid opbouwen.",
            "targetRpe": "3–5/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Training 4 is de belangrijkste duurprikkel. Plan hem niet direct na Training 2 en houd bij voorkeur ongeveer 48 uur tussen beide."
          }
        ]
      },
      {
        "weekId": "marathon-2026-w09",
        "weekNumber": 9,
        "label": "Week 9",
        "periodLabel": "28 september t/m 4 oktober",
        "startDate": "2026-09-28",
        "endDate": "2026-10-04",
        "phaseId": "marathonspecifiek",
        "phaseName": "Marathonspecifieke periode",
        "sourcePhaseName": "marathonspecifieke periode",
        "plannedDistanceKm": 47.4,
        "focus": "Voer alle vier trainingen in volgorde uit en laat herstel leidend zijn binnen marathonspecifieke periode.",
        "workouts": [
          {
            "workoutId": "marathon-2026-w09-t1",
            "weekId": "marathon-2026-w09",
            "weekNumber": 9,
            "trainingNumber": 1,
            "title": "rustige duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w09-t1-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w09-t1-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w09-t1-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w09-t1-s03",
                    "basis": "time",
                    "durationSeconds": 2220,
                    "display": "37 minuten",
                    "speedKmh": 9.5,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w09-t1-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w09-t1-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "55 minuten",
            "totalPlannedSeconds": 3300,
            "estimatedDistanceLabel": "circa 7,9 km",
            "estimatedDistanceKm": 7.9,
            "goal": "Rustig aeroob volume opbouwen en technisch ontspannen lopen.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w09-t2",
            "weekId": "marathon-2026-w09",
            "weekNumber": 9,
            "trainingNumber": 2,
            "title": "drempelachtige blokken",
            "category": "kwaliteit",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w09-t2-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w09-t2-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w09-t2-s02",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w09-t2-g2",
                "kind": "repeat",
                "label": "Daarna viermaal",
                "repetitions": 4,
                "segments": [
                  {
                    "segmentId": "marathon-2026-w09-t2-s03",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 12.4,
                    "inclinePercent": 1,
                    "type": "interval",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w09-t2-s04",
                    "basis": "time",
                    "durationSeconds": 150,
                    "display": "2 minuten 30 seconden",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ],
                "context": "Na de eerste drie blokken",
                "omitRecoveryAfterLast": true
              },
              {
                "groupId": "marathon-2026-w09-t2-g3",
                "kind": "sequence",
                "label": "Afsluiten",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w09-t2-s05",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 8.8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w09-t2-s06",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "66 minuten 30 seconden",
            "totalPlannedSeconds": 3990,
            "estimatedDistanceLabel": "circa 11,3 km",
            "estimatedDistanceKm": 11.3,
            "goal": "De geplande kwaliteitsprikkel gecontroleerd uitvoeren zonder sprinten of totale uitputting.",
            "targetRpe": "7–8/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Plan deze kwaliteitstraining niet op de dag direct vóór Training 4."
          },
          {
            "workoutId": "marathon-2026-w09-t3",
            "weekId": "marathon-2026-w09",
            "weekNumber": 9,
            "trainingNumber": 3,
            "title": "volledig rustig",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w09-t3-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w09-t3-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w09-t3-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w09-t3-s03",
                    "basis": "time",
                    "durationSeconds": 1920,
                    "display": "32 minuten",
                    "speedKmh": 9.6,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w09-t3-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w09-t3-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "50 minuten",
            "totalPlannedSeconds": 3000,
            "estimatedDistanceLabel": "circa 7,2 km",
            "estimatedDistanceKm": 7.2,
            "goal": "Extra loopfrequentie toevoegen met weinig restvermoeidheid.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w09-t4",
            "weekId": "marathon-2026-w09",
            "weekNumber": 9,
            "trainingNumber": 4,
            "title": "lange rustige duur",
            "category": "lange-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w09-t4-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w09-t4-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w09-t4-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w09-t4-s03",
                    "basis": "time",
                    "durationSeconds": 7020,
                    "display": "117 minuten",
                    "speedKmh": 9.7,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Gebruik meestal deze helling; de algemene hellingsvariatie blijft optioneel."
                  },
                  {
                    "segmentId": "marathon-2026-w09-t4-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w09-t4-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "135 minuten",
            "totalPlannedSeconds": 8100,
            "estimatedDistanceLabel": "circa 21,0 km",
            "estimatedDistanceKm": 21,
            "goal": "Tijd op de benen, duurvermogen en wedstrijdspecifieke belastbaarheid opbouwen.",
            "targetRpe": "3–5/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Training 4 is de belangrijkste duurprikkel. Plan hem niet direct na Training 2 en houd bij voorkeur ongeveer 48 uur tussen beide."
          }
        ]
      },
      {
        "weekId": "marathon-2026-w10",
        "weekNumber": 10,
        "label": "Week 10",
        "periodLabel": "5 t/m 11 oktober",
        "startDate": "2026-10-05",
        "endDate": "2026-10-11",
        "phaseId": "marathonspecifiek",
        "phaseName": "Marathonspecifieke periode",
        "sourcePhaseName": "marathonspecifieke periode",
        "plannedDistanceKm": 49,
        "focus": "Voer alle vier trainingen in volgorde uit en laat herstel leidend zijn binnen marathonspecifieke periode.",
        "workouts": [
          {
            "workoutId": "marathon-2026-w10-t1",
            "weekId": "marathon-2026-w10",
            "weekNumber": 10,
            "trainingNumber": 1,
            "title": "rustige duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w10-t1-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w10-t1-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t1-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t1-s03",
                    "basis": "time",
                    "durationSeconds": 2220,
                    "display": "37 minuten",
                    "speedKmh": 9.4,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t1-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t1-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "55 minuten",
            "totalPlannedSeconds": 3300,
            "estimatedDistanceLabel": "circa 7,9 km",
            "estimatedDistanceKm": 7.9,
            "goal": "Rustig aeroob volume opbouwen en technisch ontspannen lopen.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w10-t2",
            "weekId": "marathon-2026-w10",
            "weekNumber": 10,
            "trainingNumber": 2,
            "title": "korte intervallen",
            "category": "interval",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w10-t2-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w10-t2-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t2-s02",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w10-t2-g2",
                "kind": "repeat",
                "label": "Daarna zesmaal",
                "repetitions": 6,
                "segments": [
                  {
                    "segmentId": "marathon-2026-w10-t2-s03",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 13,
                    "inclinePercent": 1,
                    "type": "interval",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t2-s04",
                    "basis": "time",
                    "durationSeconds": 120,
                    "display": "2 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ],
                "context": "Na de eerste vijf blokken",
                "omitRecoveryAfterLast": true
              },
              {
                "groupId": "marathon-2026-w10-t2-g3",
                "kind": "sequence",
                "label": "Afsluiten",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w10-t2-s05",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 8.8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t2-s06",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "61 minuten",
            "totalPlannedSeconds": 3660,
            "estimatedDistanceLabel": "circa 10,3 km",
            "estimatedDistanceKm": 10.3,
            "goal": "De geplande kwaliteitsprikkel gecontroleerd uitvoeren zonder sprinten of totale uitputting.",
            "targetRpe": "maximaal 8/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Plan deze kwaliteitstraining niet op de dag direct vóór Training 4."
          },
          {
            "workoutId": "marathon-2026-w10-t3",
            "weekId": "marathon-2026-w10",
            "weekNumber": 10,
            "trainingNumber": 3,
            "title": "rustige duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w10-t3-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w10-t3-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t3-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t3-s03",
                    "basis": "time",
                    "durationSeconds": 1920,
                    "display": "32 minuten",
                    "speedKmh": 9.6,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t3-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t3-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "50 minuten",
            "totalPlannedSeconds": 3000,
            "estimatedDistanceLabel": "circa 7,2 km",
            "estimatedDistanceKm": 7.2,
            "goal": "Extra loopfrequentie toevoegen met weinig restvermoeidheid.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w10-t4",
            "weekId": "marathon-2026-w10",
            "weekNumber": 10,
            "trainingNumber": 4,
            "title": "lange duur met sub-marathontempo",
            "category": "lange-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w10-t4-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w10-t4-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t4-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t4-s03",
                    "basis": "time",
                    "durationSeconds": 2700,
                    "display": "45 minuten",
                    "speedKmh": 9.7,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Gebruik meestal deze helling; de algemene hellingsvariatie blijft optioneel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t4-s04",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 11.8,
                    "inclinePercent": 1,
                    "type": "marathontempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t4-s05",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 9.5,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t4-s06",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 11.8,
                    "inclinePercent": 1,
                    "type": "marathontempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t4-s07",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 9.5,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t4-s08",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 11.8,
                    "inclinePercent": 1,
                    "type": "marathontempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t4-s09",
                    "basis": "time",
                    "durationSeconds": 2520,
                    "display": "42 minuten",
                    "speedKmh": 9.7,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Gebruik meestal deze helling; de algemene hellingsvariatie blijft optioneel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t4-s10",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w10-t4-s11",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "145 minuten",
            "totalPlannedSeconds": 8700,
            "estimatedDistanceLabel": "circa 23,6 km",
            "estimatedDistanceKm": 23.6,
            "goal": "Tijd op de benen, duurvermogen en wedstrijdspecifieke belastbaarheid opbouwen.",
            "targetRpe": "3–5/10",
            "nutrition": "50–60 gram koolhydraten per uur",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Training 4 is de belangrijkste duurprikkel. Plan hem niet direct na Training 2 en houd bij voorkeur ongeveer 48 uur tussen beide."
          }
        ]
      },
      {
        "weekId": "marathon-2026-w11",
        "weekNumber": 11,
        "label": "Week 11",
        "periodLabel": "12 t/m 18 oktober",
        "startDate": "2026-10-12",
        "endDate": "2026-10-18",
        "phaseId": "marathonspecifiek",
        "phaseName": "Marathonspecifieke periode",
        "sourcePhaseName": "marathonspecifieke periode",
        "plannedDistanceKm": 52.9,
        "focus": "Voer alle vier trainingen in volgorde uit en laat herstel leidend zijn binnen marathonspecifieke periode.",
        "workouts": [
          {
            "workoutId": "marathon-2026-w11-t1",
            "weekId": "marathon-2026-w11",
            "weekNumber": 11,
            "trainingNumber": 1,
            "title": "rustige duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w11-t1-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w11-t1-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t1-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t1-s03",
                    "basis": "time",
                    "durationSeconds": 2520,
                    "display": "42 minuten",
                    "speedKmh": 9.5,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t1-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t1-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "60 minuten",
            "totalPlannedSeconds": 3600,
            "estimatedDistanceLabel": "circa 8,7 km",
            "estimatedDistanceKm": 8.7,
            "goal": "Rustig aeroob volume opbouwen en technisch ontspannen lopen.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w11-t2",
            "weekId": "marathon-2026-w11",
            "weekNumber": 11,
            "trainingNumber": 2,
            "title": "langere stevige blokken",
            "category": "kwaliteit",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w11-t2-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w11-t2-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t2-s02",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t2-s03",
                    "basis": "time",
                    "durationSeconds": 720,
                    "display": "12 minuten",
                    "speedKmh": 12.5,
                    "inclinePercent": 1,
                    "type": "interval",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t2-s04",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t2-s05",
                    "basis": "time",
                    "durationSeconds": 720,
                    "display": "12 minuten",
                    "speedKmh": 12.5,
                    "inclinePercent": 1,
                    "type": "interval",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t2-s06",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t2-s07",
                    "basis": "time",
                    "durationSeconds": 720,
                    "display": "12 minuten",
                    "speedKmh": 12.5,
                    "inclinePercent": 1,
                    "type": "interval",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t2-s08",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 8.8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t2-s09",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "69 minuten",
            "totalPlannedSeconds": 4140,
            "estimatedDistanceLabel": "circa 12,0 km",
            "estimatedDistanceKm": 12,
            "goal": "De geplande kwaliteitsprikkel gecontroleerd uitvoeren zonder sprinten of totale uitputting.",
            "targetRpe": "6–8/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Plan deze kwaliteitstraining niet op de dag direct vóór Training 4."
          },
          {
            "workoutId": "marathon-2026-w11-t3",
            "weekId": "marathon-2026-w11",
            "weekNumber": 11,
            "trainingNumber": 3,
            "title": "korte herstelduur",
            "category": "herstel",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w11-t3-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w11-t3-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t3-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t3-s03",
                    "basis": "time",
                    "durationSeconds": 1620,
                    "display": "27 minuten",
                    "speedKmh": 9.5,
                    "inclinePercent": 0.5,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t3-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t3-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "45 minuten",
            "totalPlannedSeconds": 2700,
            "estimatedDistanceLabel": "circa 6,4 km",
            "estimatedDistanceKm": 6.4,
            "goal": "Extra loopfrequentie toevoegen met weinig restvermoeidheid.",
            "targetRpe": "3/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w11-t4",
            "weekId": "marathon-2026-w11",
            "weekNumber": 11,
            "trainingNumber": 4,
            "title": "lange rustige duurloop",
            "category": "lange-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w11-t4-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w11-t4-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t4-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t4-s03",
                    "basis": "time",
                    "durationSeconds": 8820,
                    "display": "147 minuten",
                    "speedKmh": 9.7,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Gebruik meestal deze helling; de algemene hellingsvariatie blijft optioneel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t4-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w11-t4-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "165 minuten",
            "totalPlannedSeconds": 9900,
            "estimatedDistanceLabel": "circa 25,9 km",
            "estimatedDistanceKm": 25.9,
            "goal": "Tijd op de benen, duurvermogen en wedstrijdspecifieke belastbaarheid opbouwen.",
            "targetRpe": "3–5/10",
            "nutrition": "ongeveer 60 gram koolhydraten per uur",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Training 4 is de belangrijkste duurprikkel. Plan hem niet direct na Training 2 en houd bij voorkeur ongeveer 48 uur tussen beide."
          }
        ]
      },
      {
        "weekId": "marathon-2026-w12",
        "weekNumber": 12,
        "label": "Week 12",
        "periodLabel": "19 t/m 25 oktober",
        "startDate": "2026-10-19",
        "endDate": "2026-10-25",
        "phaseId": "marathonspecifiek",
        "phaseName": "Marathonspecifieke periode",
        "sourcePhaseName": "marathonspecifieke periode",
        "plannedDistanceKm": 45.5,
        "focus": "Herstel- en evaluatieweek",
        "workouts": [
          {
            "workoutId": "marathon-2026-w12-t1",
            "weekId": "marathon-2026-w12",
            "weekNumber": 12,
            "trainingNumber": 1,
            "title": "rustige duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w12-t1-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w12-t1-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t1-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t1-s03",
                    "basis": "time",
                    "durationSeconds": 1620,
                    "display": "27 minuten",
                    "speedKmh": 9.3,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t1-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t1-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "45 minuten",
            "totalPlannedSeconds": 2700,
            "estimatedDistanceLabel": "circa 6,3 km",
            "estimatedDistanceKm": 6.3,
            "goal": "Rustig aeroob volume opbouwen en technisch ontspannen lopen.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w12-t2",
            "weekId": "marathon-2026-w12",
            "weekNumber": 12,
            "trainingNumber": 2,
            "title": "doeltempo-evaluatie",
            "category": "testtraining",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w12-t2-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w12-t2-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t2-s02",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t2-s03",
                    "basis": "time",
                    "durationSeconds": 900,
                    "display": "15 minuten",
                    "speedKmh": 12,
                    "inclinePercent": 1,
                    "type": "marathontempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t2-s04",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t2-s05",
                    "basis": "time",
                    "durationSeconds": 900,
                    "display": "15 minuten",
                    "speedKmh": 12,
                    "inclinePercent": 1,
                    "type": "marathontempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t2-s06",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t2-s07",
                    "basis": "time",
                    "durationSeconds": 900,
                    "display": "15 minuten",
                    "speedKmh": 12,
                    "inclinePercent": 1,
                    "type": "marathontempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t2-s08",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 8.8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t2-s09",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "80 minuten",
            "totalPlannedSeconds": 4800,
            "estimatedDistanceLabel": "circa 13,8 km",
            "estimatedDistanceKm": 13.8,
            "goal": "De geplande kwaliteitsprikkel gecontroleerd uitvoeren zonder sprinten of totale uitputting.",
            "targetRpe": "6–8/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [
              "3.30 blijft serieus in beeld wanneer",
              "Wanneer het tweede blok al RPE 8–9 is of je het laatste blok niet afmaakt, gebruik je in week 13 **11,7–11,8 km/u** in plaats van 12,0 km/u voor de marathontempoblokken."
            ],
            "evaluation": {
              "title": "Doeltempo-evaluatie",
              "criteria": [
                "Het laatste blok blijft maximaal RPE 7–8",
                "Je looptechniek blijft stabiel",
                "Je hoeft niet aan de handgrepen te hangen",
                "Je kunt de volgende dag normaal bewegen",
                "Geen duidelijke heup-, enkel-, kuit- of achillesreactie"
              ],
              "adjustmentRules": [
                "Is het tweede blok al RPE 8–9 of maak je het laatste blok niet af, gebruik dan in week 13 11,7–11,8 km/u voor de marathontempoblokken"
              ]
            },
            "orderWarning": "Plan deze kwaliteitstraining niet op de dag direct vóór Training 4."
          },
          {
            "workoutId": "marathon-2026-w12-t3",
            "weekId": "marathon-2026-w12",
            "weekNumber": 12,
            "trainingNumber": 3,
            "title": "korte rustige duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w12-t3-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w12-t3-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t3-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t3-s03",
                    "basis": "time",
                    "durationSeconds": 1620,
                    "display": "27 minuten",
                    "speedKmh": 9.3,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t3-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t3-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "45 minuten",
            "totalPlannedSeconds": 2700,
            "estimatedDistanceLabel": "circa 6,3 km",
            "estimatedDistanceKm": 6.3,
            "goal": "Extra loopfrequentie toevoegen met weinig restvermoeidheid.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w12-t4",
            "weekId": "marathon-2026-w12",
            "weekNumber": 12,
            "trainingNumber": 4,
            "title": "lange rustige duur",
            "category": "lange-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w12-t4-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w12-t4-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t4-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t4-s03",
                    "basis": "time",
                    "durationSeconds": 6420,
                    "display": "107 minuten",
                    "speedKmh": 9.6,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Gebruik meestal deze helling; de algemene hellingsvariatie blijft optioneel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t4-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w12-t4-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "125 minuten",
            "totalPlannedSeconds": 7500,
            "estimatedDistanceLabel": "circa 19,2 km",
            "estimatedDistanceKm": 19.2,
            "goal": "Tijd op de benen, duurvermogen en wedstrijdspecifieke belastbaarheid opbouwen.",
            "targetRpe": "3–5/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Training 4 is de belangrijkste duurprikkel. Plan hem niet direct na Training 2 en houd bij voorkeur ongeveer 48 uur tussen beide."
          }
        ]
      },
      {
        "weekId": "marathon-2026-w13",
        "weekNumber": 13,
        "label": "Week 13",
        "periodLabel": "26 oktober t/m 1 november",
        "startDate": "2026-10-26",
        "endDate": "2026-11-01",
        "phaseId": "marathonspecifiek",
        "phaseName": "Marathonspecifieke periode",
        "sourcePhaseName": "marathonspecifieke periode",
        "plannedDistanceKm": 49,
        "focus": "Belangrijkste marathonspecifieke week",
        "workouts": [
          {
            "workoutId": "marathon-2026-w13-t1",
            "weekId": "marathon-2026-w13",
            "weekNumber": 13,
            "trainingNumber": 1,
            "title": "rustige aerobe duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w13-t1-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w13-t1-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t1-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t1-s03",
                    "basis": "time",
                    "durationSeconds": 2520,
                    "display": "42 minuten",
                    "speedKmh": 9.4,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t1-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t1-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "60 minuten",
            "totalPlannedSeconds": 3600,
            "estimatedDistanceLabel": "circa 8,7 km",
            "estimatedDistanceKm": 8.7,
            "goal": "Rustig aeroob volume opbouwen en technisch ontspannen lopen.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w13-t2",
            "weekId": "marathon-2026-w13",
            "weekNumber": 13,
            "trainingNumber": 2,
            "title": "korte kwaliteitstraining",
            "category": "kwaliteit",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w13-t2-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w13-t2-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t2-s02",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w13-t2-g2",
                "kind": "repeat",
                "label": "Daarna viermaal",
                "repetitions": 4,
                "segments": [
                  {
                    "segmentId": "marathon-2026-w13-t2-s03",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 12.8,
                    "inclinePercent": 1,
                    "type": "interval",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t2-s04",
                    "basis": "time",
                    "durationSeconds": 120,
                    "display": "2 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ],
                "context": "Na de eerste drie blokken",
                "omitRecoveryAfterLast": true
              },
              {
                "groupId": "marathon-2026-w13-t2-g3",
                "kind": "sequence",
                "label": "Afsluiten",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w13-t2-s05",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 8.8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t2-s06",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "49 minuten",
            "totalPlannedSeconds": 2940,
            "estimatedDistanceLabel": "circa 7,9 km",
            "estimatedDistanceKm": 7.9,
            "goal": "snelheid onderhouden zonder zware restvermoeidheid",
            "targetRpe": "6–8/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Plan deze kwaliteitstraining niet op de dag direct vóór Training 4."
          },
          {
            "workoutId": "marathon-2026-w13-t3",
            "weekId": "marathon-2026-w13",
            "weekNumber": 13,
            "trainingNumber": 3,
            "title": "zeer korte herstelduur",
            "category": "herstel",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w13-t3-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w13-t3-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t3-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t3-s03",
                    "basis": "time",
                    "durationSeconds": 1320,
                    "display": "22 minuten",
                    "speedKmh": 9.3,
                    "inclinePercent": 0.5,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t3-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t3-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "40 minuten",
            "totalPlannedSeconds": 2400,
            "estimatedDistanceLabel": "circa 5,5 km",
            "estimatedDistanceKm": 5.5,
            "goal": "Extra loopfrequentie toevoegen met weinig restvermoeidheid.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [
              "Geen beentraining na deze sessie."
            ],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w13-t4",
            "weekId": "marathon-2026-w13",
            "weekNumber": 13,
            "trainingNumber": 4,
            "title": "belangrijkste lange duurloop",
            "category": "lange-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w13-t4-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w13-t4-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t4-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t4-s03",
                    "basis": "time",
                    "durationSeconds": 5400,
                    "display": "90 minuten",
                    "speedKmh": 9.7,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Gebruik meestal deze helling; de algemene hellingsvariatie blijft optioneel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t4-s04",
                    "basis": "time",
                    "durationSeconds": 900,
                    "display": "15 minuten",
                    "speedKmh": 12,
                    "inclinePercent": 1,
                    "type": "tempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t4-s05",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 9.5,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t4-s06",
                    "basis": "time",
                    "durationSeconds": 900,
                    "display": "15 minuten",
                    "speedKmh": 12,
                    "inclinePercent": 1,
                    "type": "tempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t4-s07",
                    "basis": "time",
                    "durationSeconds": 1140,
                    "display": "19 minuten",
                    "speedKmh": 9.6,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t4-s08",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w13-t4-s09",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "165 minuten",
            "totalPlannedSeconds": 9900,
            "estimatedDistanceLabel": "circa 26,9 km",
            "estimatedDistanceKm": 26.9,
            "goal": "Tijd op de benen, duurvermogen en wedstrijdspecifieke belastbaarheid opbouwen.",
            "targetRpe": "3–5/10",
            "nutrition": "60–75 gram koolhydraten per uur, uitsluitend wanneer dit eerder goed ging",
            "marathonPaceVolume": "totaal 30 minuten",
            "notes": [
              "De tweede vijftien minuten op 12,0 km/u mag stevig voelen. Je moet daarna nog gecontroleerd negentien minuten rustig kunnen lopen."
            ],
            "evaluation": null,
            "orderWarning": "Training 4 is de belangrijkste duurprikkel. Plan hem niet direct na Training 2 en houd bij voorkeur ongeveer 48 uur tussen beide."
          }
        ]
      },
      {
        "weekId": "marathon-2026-w14",
        "weekNumber": 14,
        "label": "Week 14",
        "periodLabel": "2 t/m 8 november",
        "startDate": "2026-11-02",
        "endDate": "2026-11-08",
        "phaseId": "taper",
        "phaseName": "Taper",
        "sourcePhaseName": "taper",
        "plannedDistanceKm": 46.5,
        "focus": "Voer alle vier trainingen in volgorde uit en laat herstel leidend zijn binnen taper.",
        "workouts": [
          {
            "workoutId": "marathon-2026-w14-t1",
            "weekId": "marathon-2026-w14",
            "weekNumber": 14,
            "trainingNumber": 1,
            "title": "rustige duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w14-t1-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w14-t1-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t1-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t1-s03",
                    "basis": "time",
                    "durationSeconds": 1920,
                    "display": "32 minuten",
                    "speedKmh": 9.4,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t1-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t1-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "50 minuten",
            "totalPlannedSeconds": 3000,
            "estimatedDistanceLabel": "circa 7,1 km",
            "estimatedDistanceKm": 7.1,
            "goal": "Rustig aeroob volume opbouwen en technisch ontspannen lopen.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w14-t2",
            "weekId": "marathon-2026-w14",
            "weekNumber": 14,
            "trainingNumber": 2,
            "title": "stevige blokken",
            "category": "kwaliteit",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w14-t2-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w14-t2-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t2-s02",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t2-s03",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 12.4,
                    "inclinePercent": 1,
                    "type": "interval",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t2-s04",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t2-s05",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 12.4,
                    "inclinePercent": 1,
                    "type": "interval",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t2-s06",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t2-s07",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 12.4,
                    "inclinePercent": 1,
                    "type": "interval",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t2-s08",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 8.8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t2-s09",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "63 minuten",
            "totalPlannedSeconds": 3780,
            "estimatedDistanceLabel": "circa 10,7 km",
            "estimatedDistanceKm": 10.7,
            "goal": "De geplande kwaliteitsprikkel gecontroleerd uitvoeren zonder sprinten of totale uitputting.",
            "targetRpe": "6–8/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Plan deze kwaliteitstraining niet op de dag direct vóór Training 4."
          },
          {
            "workoutId": "marathon-2026-w14-t3",
            "weekId": "marathon-2026-w14",
            "weekNumber": 14,
            "trainingNumber": 3,
            "title": "rustige duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w14-t3-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w14-t3-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t3-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t3-s03",
                    "basis": "time",
                    "durationSeconds": 2220,
                    "display": "37 minuten",
                    "speedKmh": 9.5,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t3-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t3-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "55 minuten",
            "totalPlannedSeconds": 3300,
            "estimatedDistanceLabel": "circa 7,9 km",
            "estimatedDistanceKm": 7.9,
            "goal": "Extra loopfrequentie toevoegen met weinig restvermoeidheid.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w14-t4",
            "weekId": "marathon-2026-w14",
            "weekNumber": 14,
            "trainingNumber": 4,
            "title": "afbouwende lange duur",
            "category": "lange-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w14-t4-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w14-t4-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t4-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t4-s03",
                    "basis": "time",
                    "durationSeconds": 5520,
                    "display": "92 minuten",
                    "speedKmh": 9.7,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Gebruik meestal deze helling; de algemene hellingsvariatie blijft optioneel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t4-s04",
                    "basis": "time",
                    "durationSeconds": 1200,
                    "display": "20 minuten",
                    "speedKmh": 11.5,
                    "inclinePercent": 1,
                    "type": "tempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t4-s05",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w14-t4-s06",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "130 minuten",
            "totalPlannedSeconds": 7800,
            "estimatedDistanceLabel": "circa 20,8 km",
            "estimatedDistanceKm": 20.8,
            "goal": "Tijd op de benen, duurvermogen en wedstrijdspecifieke belastbaarheid opbouwen.",
            "targetRpe": "3–5/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Training 4 is de belangrijkste duurprikkel. Plan hem niet direct na Training 2 en houd bij voorkeur ongeveer 48 uur tussen beide."
          }
        ]
      },
      {
        "weekId": "marathon-2026-w15",
        "weekNumber": 15,
        "label": "Week 15",
        "periodLabel": "9 t/m 15 november",
        "startDate": "2026-11-09",
        "endDate": "2026-11-15",
        "phaseId": "taper",
        "phaseName": "Taper",
        "sourcePhaseName": "taper",
        "plannedDistanceKm": 35.5,
        "focus": "Voer alle vier trainingen in volgorde uit en laat herstel leidend zijn binnen taper.",
        "workouts": [
          {
            "workoutId": "marathon-2026-w15-t1",
            "weekId": "marathon-2026-w15",
            "weekNumber": 15,
            "trainingNumber": 1,
            "title": "rustige duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w15-t1-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w15-t1-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t1-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t1-s03",
                    "basis": "time",
                    "durationSeconds": 1620,
                    "display": "27 minuten",
                    "speedKmh": 9.3,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t1-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t1-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "45 minuten",
            "totalPlannedSeconds": 2700,
            "estimatedDistanceLabel": "circa 6,3 km",
            "estimatedDistanceKm": 6.3,
            "goal": "Rustig aeroob volume opbouwen en technisch ontspannen lopen.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w15-t2",
            "weekId": "marathon-2026-w15",
            "weekNumber": 15,
            "trainingNumber": 2,
            "title": "korte doeltempoblokken",
            "category": "kwaliteit",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w15-t2-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w15-t2-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t2-s02",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t2-s03",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 12.1,
                    "inclinePercent": 1,
                    "type": "marathontempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t2-s04",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t2-s05",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 12.1,
                    "inclinePercent": 1,
                    "type": "marathontempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t2-s06",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t2-s07",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 12.1,
                    "inclinePercent": 1,
                    "type": "marathontempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t2-s08",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 8.8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t2-s09",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "57 minuten",
            "totalPlannedSeconds": 3420,
            "estimatedDistanceLabel": "circa 9,3 km",
            "estimatedDistanceKm": 9.3,
            "goal": "De geplande kwaliteitsprikkel gecontroleerd uitvoeren zonder sprinten of totale uitputting.",
            "targetRpe": "6–8/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Plan deze kwaliteitstraining niet op de dag direct vóór Training 4."
          },
          {
            "workoutId": "marathon-2026-w15-t3",
            "weekId": "marathon-2026-w15",
            "weekNumber": 15,
            "trainingNumber": 3,
            "title": "losmaaktraining",
            "category": "herstel",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w15-t3-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w15-t3-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t3-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t3-s03",
                    "basis": "time",
                    "durationSeconds": 840,
                    "display": "14 minuten",
                    "speedKmh": 9.3,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w15-t3-g2",
                "kind": "repeat",
                "label": "Daarna viermaal",
                "repetitions": 4,
                "segments": [
                  {
                    "segmentId": "marathon-2026-w15-t3-s04",
                    "basis": "time",
                    "durationSeconds": 20,
                    "display": "20 seconden",
                    "speedKmh": 13,
                    "inclinePercent": 1,
                    "type": "interval",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t3-s05",
                    "basis": "time",
                    "durationSeconds": 100,
                    "display": "1 minuut 40 seconden",
                    "speedKmh": 8.8,
                    "inclinePercent": 0.5,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w15-t3-g3",
                "kind": "sequence",
                "label": "Afsluiten",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w15-t3-s06",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t3-s07",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "40 minuten",
            "totalPlannedSeconds": 2400,
            "estimatedDistanceLabel": "circa 5,5 km",
            "estimatedDistanceKm": 5.5,
            "goal": "Extra loopfrequentie toevoegen met weinig restvermoeidheid.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w15-t4",
            "weekId": "marathon-2026-w15",
            "weekNumber": 15,
            "trainingNumber": 4,
            "title": "verkorte lange duur met marathontempo",
            "category": "lange-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w15-t4-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w15-t4-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t4-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t4-s03",
                    "basis": "time",
                    "durationSeconds": 3120,
                    "display": "52 minuten",
                    "speedKmh": 9.6,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t4-s04",
                    "basis": "time",
                    "durationSeconds": 1200,
                    "display": "20 minuten",
                    "speedKmh": 12,
                    "inclinePercent": 1,
                    "type": "marathontempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t4-s05",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w15-t4-s06",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "90 minuten",
            "totalPlannedSeconds": 5400,
            "estimatedDistanceLabel": "circa 14,4 km",
            "estimatedDistanceKm": 14.4,
            "goal": "Tijd op de benen, duurvermogen en wedstrijdspecifieke belastbaarheid opbouwen.",
            "targetRpe": "3–5/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Training 4 is de belangrijkste duurprikkel. Plan hem niet direct na Training 2 en houd bij voorkeur ongeveer 48 uur tussen beide."
          }
        ]
      },
      {
        "weekId": "marathon-2026-w16",
        "weekNumber": 16,
        "label": "Week 16",
        "periodLabel": "16 t/m 22 november",
        "startDate": "2026-11-16",
        "endDate": "2026-11-22",
        "phaseId": "wedstrijdweek",
        "phaseName": "Wedstrijdweek",
        "sourcePhaseName": "taper",
        "plannedDistanceKm": 13.9,
        "focus": "Wedstrijdweek: fris blijven en alleen uitvoeren wat al is getest.",
        "workouts": [
          {
            "workoutId": "marathon-2026-w16-t1",
            "weekId": "marathon-2026-w16",
            "weekNumber": 16,
            "trainingNumber": 1,
            "title": "rustige duur",
            "category": "rustige-duur",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w16-t1-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w16-t1-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w16-t1-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w16-t1-s03",
                    "basis": "time",
                    "durationSeconds": 1020,
                    "display": "17 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w16-t1-s04",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w16-t1-s05",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "35 minuten",
            "totalPlannedSeconds": 2100,
            "estimatedDistanceLabel": "circa 4,7 km",
            "estimatedDistanceKm": 4.7,
            "goal": "Rustig aeroob volume opbouwen en technisch ontspannen lopen.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w16-t2",
            "weekId": "marathon-2026-w16",
            "weekNumber": 16,
            "trainingNumber": 2,
            "title": "korte doeltempoprikkel",
            "category": "kwaliteit",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w16-t2-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w16-t2-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w16-t2-s02",
                    "basis": "time",
                    "durationSeconds": 600,
                    "display": "10 minuten",
                    "speedKmh": 9.2,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w16-t2-s03",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 12,
                    "inclinePercent": 1,
                    "type": "marathontempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w16-t2-s04",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 9,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w16-t2-s05",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 12,
                    "inclinePercent": 1,
                    "type": "marathontempo",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w16-t2-s06",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 8.8,
                    "inclinePercent": 0.5,
                    "type": "cooling-down",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w16-t2-s07",
                    "basis": "time",
                    "durationSeconds": 240,
                    "display": "4 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "40 minuten",
            "totalPlannedSeconds": 2400,
            "estimatedDistanceLabel": "circa 6,0 km",
            "estimatedDistanceKm": 6,
            "goal": "De geplande kwaliteitsprikkel gecontroleerd uitvoeren zonder sprinten of totale uitputting.",
            "targetRpe": "6–8/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [],
            "evaluation": null,
            "orderWarning": "Plan deze kwaliteitstraining niet op de dag direct vóór Training 4."
          },
          {
            "workoutId": "marathon-2026-w16-t3",
            "weekId": "marathon-2026-w16",
            "weekNumber": 16,
            "trainingNumber": 3,
            "title": "zeer korte losmaaktraining",
            "category": "herstel",
            "surface": "loopband",
            "groups": [
              {
                "groupId": "marathon-2026-w16-t3-g1",
                "kind": "sequence",
                "label": "Opbouw",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w16-t3-s01",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 5.5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w16-t3-s02",
                    "basis": "time",
                    "durationSeconds": 300,
                    "display": "5 minuten",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "warming-up",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w16-t3-s03",
                    "basis": "time",
                    "durationSeconds": 480,
                    "display": "8 minuten",
                    "speedKmh": 9,
                    "inclinePercent": 0.5,
                    "type": "rustig",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w16-t3-g2",
                "kind": "repeat",
                "label": "Daarna driemaal",
                "repetitions": 3,
                "segments": [
                  {
                    "segmentId": "marathon-2026-w16-t3-s04",
                    "basis": "time",
                    "durationSeconds": 20,
                    "display": "20 seconden",
                    "speedKmh": 13,
                    "inclinePercent": 1,
                    "type": "interval",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  },
                  {
                    "segmentId": "marathon-2026-w16-t3-s05",
                    "basis": "time",
                    "durationSeconds": 60,
                    "display": "1 minuut",
                    "speedKmh": 8.5,
                    "inclinePercent": 0.5,
                    "type": "herstel",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              },
              {
                "groupId": "marathon-2026-w16-t3-g3",
                "kind": "sequence",
                "label": "Afsluiten",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w16-t3-s06",
                    "basis": "time",
                    "durationSeconds": 180,
                    "display": "3 minuten",
                    "speedKmh": 5,
                    "inclinePercent": 0,
                    "type": "wandelen",
                    "instruction": "Stel snelheid en helling rustig in en houd je pas technisch stabiel."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "25 minuten",
            "totalPlannedSeconds": 1500,
            "estimatedDistanceLabel": "circa 3,3 km",
            "estimatedDistanceKm": 3.3,
            "goal": "Extra loopfrequentie toevoegen met weinig restvermoeidheid.",
            "targetRpe": "3–4/10",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [
              "Voer deze minimaal één volledige dag vóór de marathon uit."
            ],
            "evaluation": null,
            "orderWarning": "Volg bij voorkeur de trainingsvolgorde, maar kies je kalenderdagen zelf."
          },
          {
            "workoutId": "marathon-2026-w16-t4",
            "weekId": "marathon-2026-w16",
            "weekNumber": 16,
            "trainingNumber": 4,
            "title": "marathon",
            "category": "wedstrijd",
            "surface": "buiten",
            "groups": [
              {
                "groupId": "marathon-2026-w16-t4-g1",
                "kind": "sequence",
                "label": "Marathon",
                "segments": [
                  {
                    "segmentId": "marathon-2026-w16-t4-s01",
                    "basis": "distance",
                    "distanceKm": 42.195,
                    "display": "42,195 km",
                    "speedKmh": 12.06,
                    "inclinePercent": null,
                    "type": "wedstrijd",
                    "instruction": "Start beheerst en volg de wedstrijdstrategie; de aangegeven snelheid is het gemiddelde voor 3:30, niet het verplichte starttempo."
                  }
                ]
              }
            ],
            "totalPlannedLabel": "Marathon",
            "totalPlannedSeconds": 0,
            "estimatedDistanceLabel": "42,195 km",
            "estimatedDistanceKm": 42.195,
            "goal": "De marathon gecontroleerd uitvoeren volgens de geteste tempo-, voedings- en herstelstrategie.",
            "targetRpe": "Wedstrijdinspanning",
            "nutrition": "",
            "marathonPaceVolume": "",
            "notes": [
              "Voer de dag vóór de marathon geen training uit. Normaal wandelen is prima. Geen jiu-jitsu, zware beentraining, lange wandeling of extra testloop."
            ],
            "evaluation": null,
            "orderWarning": "Training 4 is de belangrijkste duurprikkel. Plan hem niet direct na Training 2 en houd bij voorkeur ongeveer 48 uur tussen beide."
          }
        ]
      }
    ],
    "guidance": {
      "scheduling": [
        "Plan Training 2 en Training 4 nooit op opeenvolgende dagen.",
        "Plan na Training 4 bij voorkeur minstens één dag zonder hardlopen.",
        "Training 3 mag de dag vóór Training 4, omdat hij bewust rustig en kort is.",
        "Loop maximaal twee dagen achter elkaar.",
        "Combineer twee opeenvolgende loopdagen alleen wanneer minstens één daarvan Training 1 of Training 3 is.",
        "Plan geen zware beentraining op de dag vóór Training 2 of Training 4.",
        "Houd bij voorkeur ongeveer 48 uur tussen Training 2 en Training 4.",
        "Een gemiste training haal je niet in; ga verder met de volgende geplande training."
      ],
      "suggestedSequences": [
        "Training 1 → rust → Training 2 → rust → Training 3 → Training 4",
        "Training 1 → Training 3 → rust → Training 2 → rust → Training 4"
      ],
      "rpeScale": [
        {
          "type": "Herstel/rustig",
          "rpe": "3–4/10",
          "feeling": "Gemakkelijk volledige zinnen spreken"
        },
        {
          "type": "Steady",
          "rpe": "5/10",
          "feeling": "Duidelijk werken, maar volledig beheerst"
        },
        {
          "type": "Marathontempo",
          "rpe": "6–7/10",
          "feeling": "Stevig, geconcentreerd en controleerbaar"
        },
        {
          "type": "Drempelachtig",
          "rpe": "7–8/10",
          "feeling": "Zwaar, maar technisch stabiel"
        },
        {
          "type": "Korte intervallen",
          "rpe": "maximaal 8/10",
          "feeling": "Geen sprint en geen totale uitputting"
        }
      ],
      "incline": [
        "Wandelen: 0%.",
        "Rustig lopen: 0,5%.",
        "Marathontempo en snellere blokken: 1%.",
        "Bij rustige blokken langer dan 60 minuten mag je 25 minuten op 0,5%, 5 minuten op 0% en daarna opnieuw 25 minuten op 0,5% gebruiken.",
        "Verander de helling niet midden in een snel tempo- of marathontempoblok.",
        "Gebruik bij lange loopbandtrainingen bij voorkeur een krachtige ventilator."
      ],
      "painRules": [
        "0–2/10 pijn en stabiel: doorgaan.",
        "3/10 pijn: helling naar 0% en snelheid 0,5 km/u verlagen.",
        "Na vijf minuten niet verminderd: training stoppen.",
        "Scherpe pijn, mank lopen of veranderde pas: direct stoppen.",
        "Duidelijk erger de volgende ochtend: vervang de eerstvolgende kwaliteitstraining door 30–40 minuten op 9,0–9,3 km/u en 0%.",
        "Dezelfde klacht tijdens twee trainingen: geen interval- of lange training uitvoeren totdat de klacht is beoordeeld."
      ],
      "fueling": [
        {
          "duration": "Korter dan 75 minuten",
          "carbs": "Meestal niet nodig"
        },
        {
          "duration": "75–120 minuten",
          "carbs": "30–40 gram per uur"
        },
        {
          "duration": "120–150 minuten",
          "carbs": "45–60 gram per uur"
        },
        {
          "duration": "Langer dan 150 minuten",
          "carbs": "60–75 gram per uur indien verdragen"
        }
      ],
      "raceStrategy": [
        {
          "distance": "0–5 km",
          "pace": "5:03–5:05 min/km",
          "instruction": "Begin bewust iets langzamer dan doeltempo en haal geen seconden geforceerd terug."
        },
        {
          "distance": "5–30 km",
          "pace": "4:59–5:00 min/km",
          "instruction": "Stabiliseer rond 12,0–12,1 km/u."
        },
        {
          "distance": "30–35 km",
          "pace": "4:59–5:00 min/km",
          "instruction": "Houd hetzelfde tempo vast en versnel nog niet bewust."
        },
        {
          "distance": "35–42,2 km",
          "pace": "op gevoel",
          "instruction": "Versnel alleen bij een stabiele pas, rustige maag, geen beginnende kramp en beheersbare ademhaling."
        }
      ],
      "targetConfirmation": [
        "Voltooi de progressieve training van week 8 beheerst.",
        "Voltooi in week 12 driemaal 15 minuten op 12,0 km/u.",
        "Voltooi in week 13 na 90 rustige minuten tweemaal 15 minuten op 12,0 km/u.",
        "Verdraag meerdere weken tussen ongeveer 45 en 53 kilometer.",
        "Herstel binnen ongeveer 48 uur van de zwaarste trainingen.",
        "Ontwikkel geen oplopende heup-, enkel-, knie-, kuit- of achillesklachten.",
        "Verdraag tijdens lange trainingen ongeveer 60 gram koolhydraten per uur."
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
        group.segments.forEach((segment, index) => {
          if (group.omitRecoveryAfterLast && repeat === repeats && index === group.segments.length - 1 && /herstel/i.test(segment.type)) return;
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
