# Marathon 2026 · 3:50

Statische trainingsplanner voor Roy, geoptimaliseerd voor iPhone en GitHub Pages.
Actieve build: **2026.10.08-2**.

## Inhoudelijke Bron

`marathonschema_Roy_FINAL_V9_2_350_GARMIN_OUTDOOR_2026-10-08.md` is de enige actieve schemabron.
Oudere schema's en hun generators blijven historische documenten, niet actieve databronnen.

V9.2 omvat W41–47, 33 genummerde sessies: 31 gewone runs, een fietsrit en de marathon.
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
| 41 | 170 | 170 | 0 | 60 | 0 |
| 42 | 240 | 240 | 0 | 0 | 24 |
| 43 | 285 | 285 | 0 | 0 | 30 |
| 44 | 310 | 310 | 0 | 0 | 40 |
| 45 | 320 | 320 | 0 | 0 | 35 |
| 46 | 195 | 195 | 0 | 0 | 20 |
| 47 vóór race | 65 | 65 | 0 | 0 | 8 |

Alle waarden in minuten; marathonbelasting telt apart. W43/W44/W45 lange duur:
120/140/160 minuten. W45 Training 2 heeft 35 minuten onafgebroken MP binnen 55 minuten.
De run van 7 oktober is een door Roy aangeleverd werkelijk resultaat: 58:56,
10,09 km, 5:51/km, 129 bpm, circa 176 spm en Polar H9. De geplande 60 minuten
en de planstappen worden niet als werkelijk uitgevoerde stappen gepresenteerd.

## Navigatie En Uitvoering

- Vandaag / Week / Schema / Meer.
- Meer bevat Fases, Voeding & herstel, Garmin Reviews, Informatie, marathonoverzicht en Data & app.
- Iedere gewone run heeft directe Garmin- en Loopbandacties en een eigen detailscherm.
- Garmin easy: Geen doel. MP: Tempo 5:24–5:30/km, richtpunt 5:27.
- Repeats bevatten ook herstel na de laatste herhaling; geen losse eerste repeat.
- Loopband: dezelfde minuten/repeats en 0% starthelling. Easy op praattempo/RPE zonder vaste snelheid; MP 11,0 km/u.
- Voorkeursdatums staan bij iedere training; vrije dagkeuze en spreidingsregels blijven behouden.
- Afstandsschattingen gebruiken easy 6:00–6:30/km, midden 6:15/km en MP 5:27/km; nooit als kilometerquotum. De recente 5:51/km is een persoonlijke referentie, geen easy-target. Marathon apart.
- W44 lange duur: gecorrigeerde schatting 21,5–23,3 km, midden 22,4 km. De bekende bronfout wordt alleen in afgeleide apptekst gecorrigeerd; de bron blijft bytegetrouw bewaard.
- Confidence runs hebben een herkenbare badge, doel, voeding en uitvoering. Checkpoints staan in het marathonoverzicht en Informatie.
- Voeding bouwt op via 2/3/4/5 gels van 40 g in W42–45. Voorlopige racetijden: 10, 38, 66, 94, 122, 150, 178 en 206 minuten, alleen volgens geteste tolerantie en waterposten.
- Fietsen: timer/tijdalerts op FR165; geen onbevestigde Connect-workoutsync.
- Race: gewone Hardlopen-activiteit tot officiële finish. Geen GPS-afstand als stopopdracht.
- Statistieken, grafieken en algemene invoer na afloop zijn verwijderd; Garmin registreert activiteiten. Een Garmin Review kan wel optionele ervaringen bevatten.
- Eenvoudig afvinken blijft voor de volgende training en programmavoortgang; geen automatische herstelbeoordeling.
- De timer, Wake Lock, inklapbare meldingen en bestaande pushintegratie blijven behouden.

## Garmin Reviews

W42–45 hebben ieder twee aanbevolen reviews: de woensdagse MP-training en de
zondagse lange duur/confidence run. W46 heeft twee optionele taperreviews zonder
achterstallige herinneringen; W47 heeft alleen een Marathon Race Review.
Alle 11 reviews zijn gekoppeld aan bestaande workout-IDs, zonder dubbele trainingen.

De weekpagina toont reviewvoortgang boven de trainingen. De betreffende kaarten
en details hebben directe reviewacties. Meer → Garmin Reviews groepeert komende,
openstaande, gedeelde en overgeslagen reviews. Alleen gedeelde reviews tellen mee
in de voortgang; een training afronden deelt nooit automatisch een review.

Gedeeld/overgeslagen registreren een tijdstip en geschiedenis. Terugzetten naar
openstaand behoudt optionele ervaringen en geschiedenis. RPE, beengevoel,
bijzonderheden, herstel en bij lange trainingen voeding/vocht worden direct lokaal
bewaard en opgenomen in de kopieerbare reviewtekst. Zonder klembordondersteuning
verschijnt een tekstvak om de tekst zelf te kopieren.

Herinneringen worden vanaf maandag na weekeinde samengevoegd op Vandaag, ook als
de app pas meerdere weken later opent. De kalendergrens gebruikt Europe/Amsterdam,
inclusief wintertijd. De bestaande `?date=`-preview volgt dezelfde kalenderregels.
Afhandelen gebeurt alleen door handmatig delen of bewust overslaan.
Dit zijn **in-app-herinneringen**, geen wekelijkse push of achtergrondtaak.
De bestaande loopbandpush blijft apart en ongewijzigd. De app uploadt of analyseert
geen FIT-bestanden: export uit Garmin Connect en upload naar ChatGPT doe je zelf.

## Opslag En Backups

Vaste hoofdkey: `marathon330TrainingAppData_v1`, dataversie **15**.
De toevoeging `garminReviews` is aanvullend: een bestaande V9.2-dataset krijgt
geen nieuwe schemamigratie. Reviews en ervaringen worden meegenomen in backups.
V9.2 heeft eigen protocol-IDs. Migratie archiveert oudere activiteiten, completion,
notities, testresultaten, voeding en oude plankeuzes in `legacyData.finalV9_2History`.
Ze markeren geen inhoudelijk andere V9.2-training voltooid. Alleen onafhankelijk
geverifieerde, identieke Garmin-protocollen nemen hun vinkje mee met hun oorspronkelijke versie.
De originele uitvoering wordt niet als V9.2-log gekopieerd. Persoonlijke instellingen,
pushregistratie en eerdere archieven blijven behouden; migratie is idempotent.
De expliciet gerapporteerde activiteit van 7 oktober krijgt een stabiel activityId,
een eigen werkelijk resultaat en een voltooid-status. Herladen dupliceert deze niet.
De run wordt niet automatisch uit Garmin opgehaald. Toekomstige trainingen afvinken
vraagt bevestiging van daadwerkelijke uitvoering; de gerapporteerde activiteit kan niet worden teruggezet naar nog te doen.

Data & app werkt onafhankelijk van trainingsberekeningen. Het biedt opslagstatus,
JSON-export, kopieerfallback, bestand/plakimport met validatie en bevestiging,
historische gegevens, appdiagnose en reload/cache-busting zonder reset.
Corrupte JSON blijft onaangeroerd en blokkeert schrijven; raw export blijft mogelijk.

Verander de storage-key nooit zonder migratie. Overschrijf bestaande data niet
met defaults; gebruik geen `localStorage.clear()` bij updates.

## PWA En Publiceren

Publiceer `index.html`, `app.js`, `training-data.js`, `style.css`,
`notification-model.js`, `review-model.js`, `push-config.js`, `service-worker.js`, `manifest.json`,
`icon.svg`, PNG-appiconen en `icons/`. Alle paden zijn relatief voor GitHub Pages.
Geen nieuw framework of backend nodig. De reeds bestaande optionele pushserver
en zijn configuratie blijven intact; zie `PUSH-DEPLOYMENT.md`.
Publiceer ook de gewijzigde bestaande pushserver als je Lock Screen-meldingen
gebruikt en die server nog niet met V8 is bijgewerkt: de validator en meldingstekst
ondersteunen zelfgestuurd easy-tempo naast numerieke MP-targets. V9.2 gebruikt dezelfde ondersteuning.

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

Als het V9.2-bronbestand buiten de werkmap staat, geef het pad mee:

```sh
MARATHON_SCHEMA_SOURCE=/pad/naar/marathonschema_Roy_FINAL_V9_2_350_GARMIN_OUTDOOR_2026-10-08.md node --test tests/*.test.mjs push-server/tests/*.test.mjs
```

De twee historische V6/V8-bronreproductietests worden expliciet overgeslagen
wanneer die oudere bronbestanden niet meer aanwezig zijn. De actieve V9.2-bron,
opslagmigratietests en reviewtests blijven apart gecontroleerd.

Tests controleren bronreproductie, alle tabelrijen, exacte duren, repeats,
weekvolume/MP, wandelen/fietsen, datumgrenzen, Garmin-targets, loopbandtijdlijnen,
detailnavigatie, V5/V6/V8-historiebehoud, idempotente werkelijke resultaten,
completion/autosave, import/validatie,
corruptiefallback, countdown, PWA-paden, pushmodel, kleurcontrast, reviewkoppelingen,
statusopslag/undo, onafhankelijke completion, backupherstel, weekvoortgang,
maandaggrenzen in zomer/wintertijd en meerdere weken achterstallige reviews.
Er is geen automatische medische of marathon-eindtijdvoorspelling.
