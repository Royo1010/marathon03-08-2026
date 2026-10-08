# Garmin Reviews - oplevering 2026.10.08-2

## Implementatie

- 11 reviews, gekoppeld aan bestaande V9.2-workout-IDs; geen dubbele trainingen.
- W42-45: twee aanbevolen reviews per week. W46: twee optionele taperreviews.
- W47: alleen een Marathon Race Review.
- Reviewvoortgang bovenaan Week, directe acties in trainingskaarten en details.
- Meer > Garmin Reviews: komende, openstaande, gedeelde en overgeslagen reviews.
- Handmatig gedeeld en overgeslagen met tijdstip/geschiedenis; terugzetten blijft mogelijk.
- Training voltooid en review gedeeld zijn onafhankelijk. Overslaan telt niet als gedeeld.
- Optionele RPE, beengevoel, bijzonderheden, herstel, voeding en vocht; directe autosave.
- Trainingsspecifieke kopieertekst met ervaringen, plus tekstvakfallback.
- Uitklapbare Garmin-exportinstructies met link naar officiele Garmin-support.

| Week | Woensdag | Zondag | Aanbevolen |
|---|---|---|---|
| 42 | 14 oktober - MP 4x6 min | 18 oktober - 95 min lange duur | Ja |
| 43 | 21 oktober - MP 3x10 min | 25 oktober - 120 min Confidence | Ja |
| 44 | 28 oktober - MP 2x20 min | 1 november - 140 min Confidence | Ja |
| 45 | 4 november - 35 min continu MP | 8 november - 160 min Confidence | Ja |
| 46 | 11 november - korte MP | 15 november - korte duur | Optioneel |
| 47 | Geen extra review | 22 november - marathon | Race Review |

Titels, minuten, programma en datums komen uit de bestaande centrale dataset.

## Herinneringen

Vanaf maandag na weekeinde toont Vandaag een samengevoegde herinnering. Oudere
open reviews blijven staan totdat ze bewust gedeeld of overgeslagen zijn.
Europe/Amsterdam bepaalt de datumgrens, inclusief zomer-/wintertijd. Taperreviews
worden nooit achterstallig. De bestaande datum-preview volgt dezelfde logica.

Dit is in-app, niet een nieuwe wekelijkse achtergrondtaak of pushdienst.
De bestaande pushserver dient loopbandwissels en is niet gewijzigd.
FIT-export en upload naar ChatGPT blijven handmatig; geen automatische analyse.

## Opslag En Schema

Hoofdkey blijft `marathon330TrainingAppData_v1`. Dataversie 15 voegt `garminReviews`
toe. Een bestaande V9.2-dataset wordt niet opnieuw als nieuw schema gemigreerd.
Notities, voedingsregistraties, testresultaten, uitvoeringen en instellingen blijven
behouden. Reviews zitten in de bestaande JSON-export/import.
Onverwachte oudere reviewvormen worden bewaard in legacyData.

`training-data.js` en het actieve V9.2-schema zijn inhoudelijk niet gewijzigd.
De bestaande protocol-IDs en schemaVersion blijven hetzelfde. App, pagina,
manifest en netwerkgestuurde service worker gebruiken build `2026.10.08-2`.

## Controles

65 tests uitgevoerd: **63 geslaagd, 0 mislukt, 2 expliciet overgeslagen**.
De overgeslagen tests vergelijken historische V6/V8-bronnen die niet meer in de
werkmap staan. De actieve V9.2-bron is wel volledig gecontroleerd via het
Desktop-bronbestand en exact reproduceerbaar bevonden.

Getest: alle 11 koppelingen en reviewdetails, alle 33 trainingsdetails, status na
refresh, annuleren/undo/overslaan, weekvoortgang 0/2-1/2-2/2, backup/import,
onafhankelijke completion, wintertijdgrens, meerdere weken achterstallig,
optionele taper, brongetrouwe tekst, invoervalidatie, PWA en loopband/pushregressies.
Syntaxcontrole van app.js, review-model.js en service-worker.js is geslaagd.
Dit statische project heeft geen afzonderlijke lint-, typecheck- of buildpipeline.
De corrupte-JSON-test veroorzaakt bewust een waarschuwing; dit is geen normale fout.

Browser: Week 42, beide reviewrijen, reviewdetail, ervaringsvelden en alle zeven
uploadstappen zichtbaar gecontroleerd. November-preview toont een enkele melding
met acht openstaande reviews uit W42-45. Geen consolefouten in de testtab.
Gemeten contentbreedtes 360/375/415/1009 px zonder horizontale overflow; acties
minimaal 44 px hoog. Mobiele weekweergave en mobiele/desktopherinnering vastgelegd
in `test-artifacts/garmin-reviews-*.png`.

De native bevestiging blokkeerde verdere browserinteractie tijdens de controle;
deze is niet geaccepteerd. Geen fictieve gedeelde review in echte gebruikersopslag
geregistreerd. Status en annuleren zijn automatisch getest, maar de complete
afvinkflow en klembord op een fysieke iPhone blijven handmatig te controleren.

## Bestanden En Publiceren

Gewijzigd: app.js, style.css, index.html, manifest.json, service-worker.js,
README.md, tests/app-shell.test.mjs, tests/plan-model.test.mjs en
tests/pwa-config.test.mjs.
Nieuw: review-model.js, icons/file-up.svg, tests/review-model.test.mjs en dit rapport.

Publiceer de normale appbestanden, inclusief het nieuwe review-model.js en de
volledige icons-map. Geen backendwijziging voor deze functionaliteit nodig.
Lokale preview: http://127.0.0.1:4173/?date=2026-10-08
