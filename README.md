# Marathon 3:30

Statische iPhone-first trainingsapp voor het zestienweekse persoonlijke
loopband-marathonschema van 3 augustus tot en met 22 november 2026.

## Actief plan

- Plan-ID: `marathon-330-treadmill-2026`
- Schemaversie: `marathon-plan-2026-v1`
- Zestien trainingsweken
- Vier genummerde looptrainingen per week
- Geen koppeling aan vaste weekdagen
- Tijdsegmenten, afstandssegmenten en herhaalblokken
- Marathon op 22 november 2026

De actieve trainingsinhoud staat volledig centraal in `training-data.js`. Dit
bestand wordt mechanisch gegenereerd uit het aangeleverde bronschema met
`scripts/generate-marathon-plan.mjs`.

## Schermen

- **Vandaag:** eerstvolgende niet-voltooide training en marathoncountdown.
- **Week:** alle vier trainingen, weeknavigatie en voltooiingsstatus.
- **Training:** chronologische loopbandinstellingen, uitvoeringsmodus en logboek.
- **Schema:** alle fases, weken, herstelregels en wedstrijdstrategie.
- **Voortgang:** voltooide trainingen, tijd, afstand, RPE en weekvoortgang.
- **Data:** diagnose, backup/import, app-update en frisse start.

## Opslag

Persoonlijke uitvoeringsgegevens blijven los van het voorgeschreven schema en
worden lokaal opgeslagen onder:

`marathon330TrainingAppData_v1`

Iedere training heeft een stabiel `workoutId`. Een schema-update kan daardoor
worden uitgevoerd zonder voortgang uitsluitend aan een arraypositie te koppelen.
Data van het vorige actieve plan wordt bij de eerste migratie onder `legacyData`
gearchiveerd en telt niet mee in dit marathonschema.

## Publiceren

Publiceer alle bestanden via GitHub Pages onder `/marathon-330/`. Er is geen
buildstap, backend, account of externe database nodig.
