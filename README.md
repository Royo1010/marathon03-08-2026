# Marathon 2026

Mobiele, statische trainingsplanner voor Roys herstelgestuurde voorbereiding op
de marathon van 22 november 2026. De app werkt zonder backend op GitHub Pages en
is geoptimaliseerd voor iPhone en gebruik als beginscherm-app.

## Actief schema

De enige inhoudelijke bron is:

`marathonschema_Roy_FINAL_V5_GARMIN_OUTDOOR_2026-10-03.md`

FINAL V5 omvat week 41 tot en met 47. Outdoor/Garmin is standaard, de loopband
blijft beschikbaar met dezelfde tijdstructuur en 0% helling. Alle Garmin-doelen
zijn Open / Vrij; RPE, praatcomfort, techniek en herstel zijn leidend. De oude
3:30-ambitie is uitsluitend historische context en geen actief tempo- of
eindtijddoel.

Genereer de centrale dataset opnieuw met:

```sh
node scripts/generate-marathon-plan.mjs
```

De generator leest de Markdownbron en schrijft `training-data.js`. Schermen,
Garmin-stappen, loopbandblokken, varianten en totalen gebruiken daarna dezelfde
dataset.

## Herstelbesluit

- Ontbrekende gegevens betekenen ORANGE.
- RED heeft voorrang en schort lopen op.
- GREEN vereist alle herstelcriteria en bevestiging na de zondagse sessie.
- W42 vraagt daarnaast minimaal 90% werkelijk verdragen W41-belasting.
- W43 en W44 blijven begrensd door de werkelijk verdragen voorgaande week.
- W45–W47 worden met `s = B / 240` geschaald en per sessie begrensd op de
  laatst verdragen vergelijkbare duur.
- De optionele ritmeproef op 5 november vervangt de easy-run en wordt alleen
  vrijgegeven bij alle bronvoorwaarden.

Geplande minuten zijn maxima, geen verplicht uit te voeren volume. Werkelijke
totale tijd, rentijd, wandeltijd, fietsduur, afstand en herstel worden apart
gelogd.

## Opslag en migratie

Gebruikersdata staat onder de bestaande hoofdkey:

`marathon330TrainingAppData_v1`

Dataversie 11 archiveert niet-passende V4-workouts in `legacyData` in plaats
van ze aan inhoudelijk andere V5-trainingen te koppelen. Notities en historische
resultaten blijven bewaard. Gebruik nooit `localStorage.clear()` voor een
schema-update.

## PWA

Versie `2026.10.03-1` gebruikt relatieve GitHub Pages-paden. De service worker
blijft netwerkgestuurd, ruimt oude appcaches op en blijft geregistreerd voor
pushmeldingen. Daardoor gebruikt de beginscherm-app dezelfde actuele bestanden
als Safari zonder een aparte offline plansnapshot.

## Tests

```sh
node --test tests/*.test.mjs
```

De tests controleren onder meer:

- V5-bronreproductie en weekmaxima;
- GREEN/ORANGE/RED en vertraagde opbouw;
- taperbasis B, schaalfactor s en sessiecaps;
- run-walk- en striderepeats;
- Open / Vrij en 0% loopbandhelling;
- centrale opslag en V4→V5-archivering;
- appschermen, logging, PWA-paden en pushmodel.
