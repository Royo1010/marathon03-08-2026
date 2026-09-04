# Nauwkeurigheidscontrole 4 september 2026

## Resultaat

De app berekende week- en programmatotalen al correct uit alle ongeronde
trainingsblokken. Alleen negen verouderde afgeronde vermeldingen in het actieve
Markdown-bronbestand zijn gecorrigeerd. Geen training, blok, snelheid, duur,
helling, volgorde, RPE, label, trainings-ID of taperonderdeel is gewijzigd.

| Onderdeel | Exacte ongeronde som | Weergave met 2 decimalen |
| --- | ---: | ---: |
| W36 | 38,983333 km | 38,98 km |
| W37 | 43,707500 km | 43,71 km |
| W38 | 46,733333 km | 46,73 km |
| W39 | 54,200000 km | 54,20 km |
| W40 | 42,547222 km | 42,55 km |
| W41 | 64,908333 km | 64,91 km |
| W42 | 58,908333 km | 58,91 km |
| W43 | 67,733333 km | 67,73 km |
| W44 | 51,980000 km | 51,98 km |
| W45 | 47,033333 km | 47,03 km |
| W46 | 37,723333 km | 37,72 km |
| W47 vóór race | 15,951667 km | 15,95 km |
| W47 incl. marathon | 58,146667 km | 58,15 km |
| Hele schema vóór race | 570,409722 km | 570,41 km |
| Hele schema incl. marathon | 612,604722 km | 612,60 km |

De marathonafstand is ongewijzigd 42,195 km. W44 Training 2 bestaat nog steeds
uit dezelfde tien blokken: 47 minuten en 8,348333 km, weergegeven als ±8,35 km.

## Oude vermeldingen

Gevonden in `marathon-schema-3u30-definitief-verfijnd-2026.md`:

- `46,74` kwam drie keer voor en is `46,73` geworden;
- `58,92` kwam drie keer voor en is `58,91` geworden;
- `51,99` kwam drie keer voor en is `51,98` geworden.

Er stonden geen actieve vermeldingen van `570,43`, `612,63` of `57 min` voor
W44 Training 2. De oude cijfers staan alleen nog in auditdocumentatie als
expliciet benoemde, gecorrigeerde historische waarden.

## Implementatie

- `calculateWorkoutDistanceKm` telt de ongeronde blokafstanden op.
- `getWeekPlannedKm` telt vervolgens die ongeronde trainingsafstanden op.
- Afronding gebeurt pas bij de Nederlandse UI-weergave.
- Week, Schema, Marathonoverzicht en beide kilometerweergaven gebruiken deze
  gedeelde helpers.
- Week 47 toont nu expliciet `±15,95 km vóór race` en
  `±58,15 km incl. marathon`, zowel in Week als Schema.
- De appversie is `2026.09.04-1`; opslagkey, dataversie en training-ID's zijn
  niet gewijzigd. Er is geen opslagmigratie of reset uitgevoerd.

## Verificatie

- 50 van 50 automatische tests geslaagd.
- De tweede bronparser vergelijkt alle 48 sessies en 253 blokken met de bron.
- Reproductietest bevestigt dat de gecorrigeerde bron exact dezelfde actieve
  `training-data.js` genereert: de trainingsinhoud is dus ongewijzigd.
- Nieuwe asserts controleren 570,41 km vóór race, 612,60 km inclusief race,
  W47 15,95/58,15 km en marathonafstand 42,195 km.
- Raceweek is in de echte app gecontroleerd op 390 × 844 px: beide totalen
  zijn zichtbaar, geen horizontale overflow en geen consolefouten.
- Marathonoverzicht toont afgerond 570,4 km vóór race en 612,6 km inclusief
  marathon, conform de bestaande een-decimaalconventie.

## Gewijzigde bestanden

- `marathon-schema-3u30-definitief-verfijnd-2026.md`
- `app.js`
- `index.html`
- `service-worker.js`
- `push-server/api/health.js`
- `tests/plan-model.test.mjs`
- `tests/app-shell.test.mjs`
- `tests/pwa-config.test.mjs`
- `README.md`
- `REFINED-SCHEMA-AUDIT-2026-09-02.md`
- dit rapport

`training-data.js`, `style.css`, de trainingsblokken en gebruikersopslag zijn
ongewijzigd gebleven.
