# Marathon 2026 · Sub 4

Statische trainingsplanner voor Roy, geoptimaliseerd voor iPhone en GitHub Pages.
Actieve build: **2026.10.05-3**.

## Inhoudelijke Bron

`marathonschema_Roy_FINAL_V6_SUB4_2026-10-05.md` is de enige actieve schemabron.
V4/V5-bestanden blijven historische documenten, niet actieve databronnen.

V6 omvat W41–47, 34 genummerde sessies inclusief zes fietsritten en de marathon.
Doel: sub 4:00 op 22 november 2026; praktisch raceritme circa 5:40/km.
Vier runs en een fietsrit per week, drie korte runs plus race in W47.
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
| 42 | 200 | 200 | 0 | 60 | 15 |
| 43 | 245 | 245 | 0 | 50 | 24 |
| 44 | 275 | 275 | 0 | 45 | 30 |
| 45 | 275 | 275 | 0 | 40 | 30 |
| 46 | 170 | 170 | 0 | 30 | 12 |
| 47 vóór race | 70 | 70 | 0 | 0 | 6 |

Alle waarden in minuten; marathonbelasting telt apart.

## Navigatie En Uitvoering

- Vandaag / Week / Schema / Meer.
- Meer bevat Fases, Voeding & herstel, Informatie, marathonoverzicht en Data & app.
- Iedere gewone run heeft directe Garmin- en Loopbandacties en een eigen detailscherm.
- Garmin easy: Geen doel. MP: Tempo 5:35–5:50/km, richtpunt 5:40–5:45.
- Repeats bevatten ook herstel na de laatste herhaling; geen losse eerste repeat.
- Loopband: dezelfde minuten/repeats, 0% starthelling, snelheidsranges volgens V6.
- Fietsen: timer/tijdalerts op FR165; geen onbevestigde Connect-workoutsync.
- Race: gewone Hardlopen-activiteit tot officiële finish. Geen GPS-afstand als stopopdracht.
- Statistieken, grafieken en invoer na afloop zijn verwijderd; Garmin registreert activiteiten.
- Eenvoudig afvinken blijft voor de volgende training en programmavoortgang; geen automatische herstelbeoordeling.
- De timer, Wake Lock, inklapbare meldingen en bestaande pushintegratie blijven behouden.

## Opslag En Backups

Vaste hoofdkey: `marathon330TrainingAppData_v1`, dataversie **12**.
V6 heeft eigen protocol-IDs. Migratie archiveert oudere activiteiten, completion,
notities, testresultaten, voeding en oude plankeuzes in `legacyData.finalV6History`.
Ze markeren geen inhoudelijk andere V6-training voltooid. Persoonlijke instellingen,
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
gebruikt: de validator en meldingstekst ondersteunen nu V6-snelheidsranges.

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
