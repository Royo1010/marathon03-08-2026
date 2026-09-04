# Verfijnd marathonschema: implementatie en controle

App: `2026.09.04-1`. Planversie: 7. Opslagversie: 5.
Schema: `marathon-3u30-verfijnd-2026.09.02-1`.
Opslagkey ongewijzigd: `marathon330TrainingAppData_v1`.

## Bron en wijzigingen

De actieve dataset wordt uitsluitend gegenereerd uit
`marathon-schema-3u30-definitief-verfijnd-2026.md`.
De projectkopie verschilt op precies een regel van het aangeleverde bestand:
W44 Training 2 is met expliciete bevestiging van Roy gecorrigeerd van 57 naar
47 minuten. Alle tien blokken zijn ongewijzigd; afstand 8,348333 km.
Het oorspronkelijke bestand op het Bureaublad is niet gewijzigd.

- W38 en W42 hebben elk exact vier trainingen. Fitness Check #1/#2 is Training 1.
- De oude aparte easytrainingen zijn niet meer bereikbaar in het actieve schema.
- Beide checks gebruiken identieke vijf blokken: 40 minuten, 6,958333 km.
- W44 Training 4: 10 + 65 minuten voor het eerste MP-blok; daarna 30 + 8 + 30 + 7 + 5 minuten. Totaal 155 minuten, 27,598333 km.
- De oude W44-variant van 165 minuten/29,265 km is geen actieve training meer.
- Vanaf W39 staat de optionele gewone easy-buitenvariant vermeld, zonder extra training.
- De 30K van W43, taper, voeding, veiligheidsregels, tests en wedstrijdstrategie zijn behouden conform de nieuwe bron.
- Halve helling verschijnt als `½` onder Helling in de statische Loopbandmodus en Focus Mode. De toegankelijke tekst is "Helling 0,5 procent". De overige hellingen behouden hun procentteken. Geen CSS, kolombreedtes of andere vormgeving gewijzigd.

## Berekende weekafstanden

Afstand = duur in seconden × snelheid / 3600, of de expliciete blokafstand.
Alle blokken worden ongerond opgeteld. Schema, dashboard en grafieken delen
dezelfde berekening. De bestaande UI rondt weekafstanden op maximaal een decimaal af.

| Week | Berekend, 2 decimalen | Totaal in bron | Opmerking |
| --- | ---: | ---: | --- |
| 36 | 38,98 km | 38,98 km | 4 trainingen |
| 37 | 43,71 km | 43,71 km | 4 trainingen |
| 38 | 46,73 km | 46,73 km | Fitness Check is Training 1 |
| 39 | 54,20 km | 54,20 km | 4 trainingen |
| 40 | 42,55 km | 42,55 km | 5,00 km benchmark, variabele testduur |
| 41 | 64,91 km | 64,91 km | 60 minuten onafgebroken MP |
| 42 | 58,91 km | 58,91 km | Fitness Check is Training 1 |
| 43 | 67,73 km | 67,73 km | Langste duurloop: 30,36 km |
| 44 | 51,98 km | 51,98 km | Verkorte sleuteltraining |
| 45 | 47,03 km | 47,03 km | Taper |
| 46 | 37,72 km | 37,72 km | Taper |
| 47 voor race | 15,95 km | 15,95 km | 3 trainingen |
| 47 incl. race | 58,15 km | 58,15 km | 4 sessies, inclusief 42,195 km marathon |

De eerder vermelde waarden 46,74 / 58,92 / 51,99 km zijn gecorrigeerd.
De exacte ongeronde sommen zijn 46,733333 / 58,908333 / 51,980000 km. Er is
geen trainingsblok gewijzigd. Alle afstanden worden eerst ongerond opgeteld en
alleen het uiteindelijke week- of programmatotaal wordt voor de UI afgerond.
Het volledige schema is 570,409722 km vóór de marathon en 612,604722 km
inclusief de marathon: respectievelijk 570,41 km en 612,60 km op twee decimalen.

## Databehoud

Geen reset, geen nieuwe storagekey en geen `localStorage.clear()`.
De migratie maakt eerst een werkende kopie van de geladen gegevens.

- De twee bestaande Fitness Checks verhuizen naar `marathon-3u30-w38-t1-fitness-check-1` en `marathon-3u30-w42-t1-fitness-check-2`, inclusief voltooiing, notities, testresultaten, eventuele voeding en meldingsinstellingen.
- Het ongewijzigde protocol wordt gecontroleerd voordat deze koppeling wordt gemaakt.
- Oude easytrainingen W38/W42 en de langere W44-test blijven met alle registraties bewaard onder `legacyData.refinedPlanMigration.workouts`. Ze tellen niet als de nieuwe training of als nieuw testbewijs.
- Het archief bevat ook de historische protocolsignatuur, titel, afstand en duur.
- Conflicterende resultaten op een oud en nieuw ID blijven bewaard; de nieuwe registratie wordt niet overschreven.
- Andere trainingen, instellingen en notities blijven actief. Oudere migratie vanuit de eerdere planversie blijft getest en ondersteund.
- Opnieuw openen migreert niet opnieuw. Nieuwe W44-resultaten blijven na refresh staan en overschrijven het archief niet.
- Oude Fitness Check-deeplinks en doorklikken vanuit pushberichten worden naar het nieuwe, gelijkwaardige ID vertaald.

`previous-workouts-v5.json` en `previous-workouts-v6.json` bevatten uitsluitend
historische migratiemetadata. Oudere Markdown-schema's en auditrapporten zijn
niet aangesloten op de app. Er is geen oude correctielaag of tweede actieve dataset.

## Uitgevoerde controles

| Onderdeel | Resultaat |
| --- | --- |
| Onafhankelijke vergelijking van bronblokken en metadata | PASS: alle 12 weken en 48 sessies |
| Blokken, volgorde, snelheid, tijd, afstand en helling | PASS: 253 blokken, waarvan 252 expliciete loopbandhellingen |
| Reproduceerbare generatie vanuit nieuwe Markdown | PASS: exact dezelfde training-data.js |
| Weekweergave en alle uitgeklapte details in browser | PASS: 48 details, alle 253 blokken en broninstructies zichtbaar gecontroleerd |
| Voeding en testregistratie | PASS: 12 voedingsformulieren met 11 velden; alle zes testformulieren bereikbaar |
| Statische Loopbandmodus | PASS: alle 48 trainingen en cumulatieve tijdvakken |
| Actieve Focus Mode | PASS: 47 trainingen, 239 weergegeven blokken |
| Variabele 5K-test | PASS: afstand staat vast; geen onbetrouwbare automatische timer |
| Helling, snelheid en mobiele uitlijning | PASS: 24 combinaties op 375/390/393/430 px, 96 controles zonder overlap of afkappen |
| Schema en dashboard | PASS: identieke weektotalen, 47 voorbereidende trainingen plus marathon |
| Browserconsole | PASS: geen waarschuwingen of fouten tijdens de controles |
| Automatische regressiesuite | PASS: 50 van 50 tests |
| Opslag, migratie en herhaald openen | PASS: getest met representatieve opgeslagen logs, voeding, notities, instellingen en testresultaten |
| Timer, pauze/hervatten, auto-follow, meldingen en Wake Lock | PASS: bestaande regressietests |
| Manifest, assetpaden en netwerkgestuurde service worker | PASS: bestaande PWA-tests, versie 2026.09.04-1 zichtbaar na browserreload |
| Fysieke iPhone / Home Screen na GitHub-deployment | MANUAL IPHONE TEST REQUIRED |

Commando: `node --test tests/*.test.mjs push-server/tests/*.test.mjs`.
Browsercontrole uitgevoerd met de echte lokale app, niet alleen de datasource.
Testdata voor de opslagmigratie draaide in een geisoleerde testomgeving; de
persoonlijke iPhone-opslag is niet gereset of op afstand benaderd.

## Bestanden

Gewijzigd of toegevoegd:

- `marathon-schema-3u30-definitief-verfijnd-2026.md`
- `scripts/generate-marathon-plan.mjs`
- `scripts/previous-workouts-v6.json`
- `training-data.js`
- `app.js`
- `index.html`
- `service-worker.js`
- `push-server/api/health.js` (versienummer)
- `tests/plan-model.test.mjs`
- `tests/app-shell.test.mjs`
- `tests/pwa-config.test.mjs`
- `README.md`
- dit rapport

`style.css`, manifest, pushconfiguratie en notificatiemodel zijn ongewijzigd.
De map is geen Git-repository; de controle is gedaan op de aanwezige bestanden,
bronvergelijking, reproduceerbare generatie en tests.

## Publiceren en beperkingen

Publiceer de appbestanden gezamenlijk zoals vermeld in README. De wijzigingen
zijn lokaal uitgevoerd, niet naar GitHub gepubliceerd. Controleer na deployment
in Safari en het bestaande beginscherm-icoon onder Informatie versie
`2026.09.04-1`. Verwijder daarvoor geen gebruikersdata of installatie.

De bestaande netwerkstrategie blijft behouden: geen offline herstart van de app.
Echte vergrendelschermmeldingen vereisen nog steeds een geconfigureerde pushserver
en toestemming op de iPhone. De lokale pushconfiguratie bevat geen backend/VAPID;
deze update configureert geen server en kan fysieke iOS-push niet bevestigen.
