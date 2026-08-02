# Marathon 3:30

Eenvoudige, mobiele weekplanner voor het persoonlijke zestienweekse
loopband-marathonschema van 3 augustus tot en met 22 november 2026.

## Gebruik

- **Week:** opent standaard en toont alle trainingen van de gekozen week.
- **Schema:** compact overzicht van alle zestien trainingsweken.
- **Informatie:** uitleg over planning, RPE, helling, pijnregels, voeding en wedstrijdstrategie.

Trainingen zijn bewust genummerd en niet aan vaste weekdagen gekoppeld. Tik op
een trainingskaart voor de volledige opbouw. De aparte voltooidknop bewaart de
status direct lokaal en bepaalt automatisch welke training als volgende wordt
getoond.

## Trainingsdata

De voorgeschreven inhoud staat centraal in `training-data.js`:

- Plan-ID: `marathon-330-treadmill-2026`
- Schemaversie: `marathon-plan-2026-v1`
- Zestien trainingsweken
- Drie of vier genummerde trainingen per week
- Tijd-, afstands- en herhaalblokken
- Marathon op 22 november 2026

De interface rendert deze data dynamisch en dupliceert het schema niet in HTML
of JavaScript.

## Lokale voortgang

Voltooiingsstatus wordt lokaal opgeslagen onder:

`marathon330TrainingAppData_v1`

Iedere training gebruikt een stabiel `workoutId`. Ongeldige of oude gegevens
kunnen de planner daardoor niet laten vastlopen; relevante bestaande status voor
het actieve plan blijft behouden.

## Publiceren

Zet alle bestanden samen in de GitHub Pages-map `/marathon-330/`. De app gebruikt
relatieve paden, heeft geen buildstap of backend nodig en blijft via de bestaande
service worker offline beschikbaar.
