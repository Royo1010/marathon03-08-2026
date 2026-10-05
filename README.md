# Marathon 2026 · 3:50

Statische trainingsplanner voor Roy, geoptimaliseerd voor iPhone en GitHub Pages.
Actieve build: **2026.10.05-4**.

## Inhoudelijke Bron

`marathonschema_Roy_FINAL_V8_350_GARMIN_OUTDOOR_2026-10-05.md` is de enige actieve schemabron.
Oudere schema's en hun generators blijven historische documenten, niet actieve databronnen.

V8 omvat W41–47, 33 genummerde sessies: 31 gewone runs, een fietsrit en de marathon.
A-doel 3:50:00; B-doel PR onder 3:55:50; C-doel sub 4:00 op 22 november 2026.
Doeltempo 5:27/km, Garmin MP 5:24–5:30/km.
W41 vier runs en een fietsrit; W42–45 vijf runs; W46 vier; W47 drie korte runs plus race.
Vrije dagkeuze, met minimaal 48 uur tussen MP en langere duur (piek liever 72),
een volledige rustdag na langere duur en 6–8 dagen tussen langere duurlopen.
Laatste langere duur uiterlijk 8 november; taper vanaf 9 november.

```sh
node scripts/generate-marathon-plan.mjs
```

De generator leest de bron, controleert iedere duur en herhaalgroep en schrijft
de centrale `training-data.js`. Week, Schema, Fases, details, Garmin en Loopband
gebruiken diezelfde dataset. Er is geen tweede handmatig onderhouden schema.
Afstand is geen trainingsquotum; de app schrijft geen kilometers voor op basis
van indicatieve loopbandstartbereiken.

| Week | Loopsessie | Rentijd | Wandelen | Fiets | MP |
|---|---:|---:|---:|---:|---:|
| 41 | 185 | 164 | 21 | 60 | 0 |
| 42 | 240 | 240 | 0 | 0 | 24 |
| 43 | 295 | 295 | 0 | 0 | 30 |
| 44 | 320 | 320 | 0 | 0 | 40 |
| 45 | 330 | 330 | 0 | 0 | 40 |
| 46 | 195 | 195 | 0 | 0 | 20 |
| 47 vóór race | 65 | 65 | 0 | 0 | 8 |

Alle waarden in minuten; marathonbelasting telt apart.

## Navigatie En Uitvoering

- Vandaag / Week / Schema / Meer.
- Meer bevat Fases, Voeding & herstel, Informatie, marathonoverzicht en Data & app.
- Iedere gewone run heeft directe Garmin- en Loopbandacties en een eigen detailscherm.
- Garmin easy: Geen doel. MP: Tempo 5:24–5:30/km, richtpunt 5:27.
- Repeats bevatten ook herstel na de laatste herhaling; geen losse eerste repeat.
- Loopband: dezelfde minuten/repeats en 0% starthelling. Vanaf W42 easy op praattempo/RPE zonder vaste snelheid; MP 11,0 km/u. Alleen W41 behoudt de bronranges.
- Voorkeursdatums staan bij iedere training; vrije dagkeuze en spreidingsregels blijven behouden.
- Afstandsschattingen gebruiken easy 6:30–7:30/km en MP 5:24–5:30/km, nooit als kilometerquotum. Marathon apart.
- Fietsen: timer/tijdalerts op FR165; geen onbevestigde Connect-workoutsync.
- Race: gewone Hardlopen-activiteit tot officiële finish. Geen GPS-afstand als stopopdracht.
- Statistieken, grafieken en invoer na afloop zijn verwijderd; Garmin registreert activiteiten.
- Eenvoudig afvinken blijft voor de volgende training en programmavoortgang; geen automatische herstelbeoordeling.
- De timer, Wake Lock, inklapbare meldingen en bestaande pushintegratie blijven behouden.

## Opslag En Backups

Vaste hoofdkey: `marathon330TrainingAppData_v1`, dataversie **13**.
V8 heeft eigen protocol-IDs. Migratie archiveert oudere activiteiten, completion,
notities, testresultaten, voeding en oude plankeuzes in `legacyData.finalV8History`.
Ze markeren geen inhoudelijk andere V8-training voltooid. Alleen de onafhankelijk
geverifieerde, identieke W41-protocollen nemen hun vinkje mee, als "Al uitgevoerd (V6)".
De originele uitvoering wordt niet als V8-log gekopieerd. Persoonlijke instellingen,
pushregistratie en eerdere archieven blijven behouden; migratie is idempotent.

Data & app werkt onafhankelijk van trainingsberekeningen. Het biedt opslagstatus,
JSON-export, kopieerfallback, bestand/plakimport met validatie en bevestiging,
historische gegevens, appdiagnose en reload/cache-busting zonder reset.
Corrupte JSON blijft onaangeroerd en blokkeert schrijven; raw export blijft mogelijk.

Verander de storage-key nooit zonder migratie. Overschrijf bestaande data niet
met defaults; gebruik geen `localStorage.clear()` bij updates.

## PWA En Publiceren

Publiceer `index.html`, `app.js`, `training-data.js`, `style.css`,
`notification-model.js`, `push-config.js`, `service-worker.js`, `manifest.json`,
`icon.svg`, PNG-appiconen en `icons/`. Alle paden zijn relatief voor GitHub Pages.
Geen nieuw framework of backend nodig. De reeds bestaande optionele pushserver
en zijn configuratie blijven intact; zie `PUSH-DEPLOYMENT.md`.
Publiceer ook de gewijzigde bestaande pushserver als je Lock Screen-meldingen
gebruikt: de validator en meldingstekst ondersteunen nu ook zelfgestuurd easy-tempo
naast numerieke MP-targets. Zonder die serverupdate werken nieuwe V8-pushwissels niet.

Het nieuwe kalender/hardloperlogo staat in `icon.svg`, `apple-touch-icon.png`,
`app-icon-192.png` en `app-icon-512.png`. Alle iconverwijzingen zijn versioned.

De service worker blijft netwerkgestuurd, verwijdert alleen oude appcaches en
blijft geregistreerd voor push. Safari en beginscherm-app laden dezelfde versie.
Fysieke iPhone-tests van installatie, Wake Lock en Lock Screen-push blijven nodig.

## Controles

```sh
node --test tests/*.test.mjs
node --test push-server/tests/*.test.mjs
```

Tests controleren bronreproductie, alle tabelrijen, exacte duren, repeats,
weekvolume/MP, wandelen/fietsen, datumgrenzen, Garmin-targets, loopbandtijdlijnen,
detailnavigatie, V5-historiebehoud, completion/autosave, import/validatie,
corruptiefallback, countdown, PWA-paden, pushmodel en kleurcontrast.
Er is geen automatische medische of marathon-eindtijdvoorspelling.
