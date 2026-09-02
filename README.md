# Marathon 3:30

Mobiele weekplanner voor het definitieve Marathon 3:30-loopbandschema van
31 augustus tot en met 22 november 2026.

## Actieve versie

- App-versie: `2026.09.02-3`
- Schemaversie: `marathon-3u30-verfijnd-2026.09.02-1`
- Inhoudelijke bron: `marathon-schema-3u30-definitief-verfijnd-2026.md`
- Enige actieve trainingsdataset: het hieruit gegenereerde `training-data.js`
- Opslagkey: `marathon330TrainingAppData_v1`

## Schema

Het schema bevat week 36 tot en met week 47, exact vier trainingen per week.
In week 38 en 42 vervangt de submaximale Fitness Check de oorspronkelijke
easytraining: het is Training 1, geen extra vijfde sessie.
Confidence runs, meetmomenten, taper en marathon zijn gemarkeerd in de interface.
De dataset, inclusief uitleg en registratiemetadata, wordt rechtstreeks uit het
nieuwe bronbestand gegenereerd. De oude correctielaag `training-plan-v5.js` is
verwijderd. Het programma bevat 48 sessies inclusief de twee checks en de race.
W44 Training 4 duurt 155 minuten en bevat 65 minuten op 10 km/u voor de
twee MP-blokken. De eerste MP start na 75 minuten; totale afstand 27,5983 km.
Vanaf W39 mag een gewone easytraining optioneel buiten, zonder extra sessie.

```sh
node scripts/generate-marathon-plan.mjs
```

Wijzig de bestaande workout-ID's niet zonder opslagmigratie.

Het tabblad **Schema**, de kilometerkaarten en de twee dashboardgrafieken lezen
dezelfde centrale weektotalen. Alle afstanden worden opgeteld vanuit de
ongeronde blokwaarden; afronden gebeurt uitsluitend voor de presentatie.
Week 47 wordt berekend uit drie trainingen plus de marathon en wordt zichtbaar
als totaal inclusief marathon gemarkeerd.

W44 Training 2 is definitief bevestigd: 47 minuten, 8,3483 km (weergave 8,35 km).
De samenvatting in het projectbronbestand is gecorrigeerd. De tien bestaande
blokken zijn ongewijzigd; `plan.sourceDiscrepancies` is leeg.

## Loopbandmodus

Iedere training heeft een aparte Loopbandmodus. Deze gebruikt rechtstreeks de
uitgewerkte segmenten uit `training-data.js` en berekent cumulatieve start- en
eindtijden. Afstandsblokken krijgen een geschatte duur wanneer afstand en
snelheid bekend zijn. Een blok zonder berekenbare duur blijft zichtbaar, maar
schakelt de optionele trainingstimer uit om onjuiste wisselmomenten te voorkomen.

De timer ondersteunt pauzeren, hervatten en stoppen. Tijdens een actieve timer
wordt de Screen Wake Lock API gebruikt wanneer de browser dit ondersteunt.
Zonder Wake Lock blijft de rest van de Loopbandmodus normaal functioneren.

De actieve Focus Mode toont een grote countdown, snelheid en een vaste,
rechts uitgelijnde hellingkolom. De dubbele DAARNA-sectie is verwijderd.
De queue volgt blokwissels automatisch, behalve wanneer de gebruiker wegscrollt.
Terug naar NU plaatst de actieve kaart onder de sticky cockpit en herstelt volgen.

Via de titel **Marathon 3:30** opent een overzicht met kalendercountdown,
trainings- en kilometervoortgang, week- en cumulatieve grafieken, confidence
runs, tests, lange duurlopen, de volgende training en de volgende mijlpaal.

Alle 252 loopbandblokken hebben een expliciete
numerieke helling van `0%`, `0,5%` of `1%`. Alleen de marathon zelf staat als
buitenwedstrijd zonder loopbandhelling in de data.
In Loopbandmodus en Focus Mode verschijnt 0,5% als `½`, onder het label
Helling. De toegankelijke tekst blijft "Helling 0,5 procent". Numerieke
data, kolombreedtes, timers en overige vormgeving zijn niet veranderd.

## Testresultaten

Bij de fitnesschecks, Marathon Rhythm en officiële tests kan lokaal worden vastgelegd:

- resultaat/tijd;
- gemiddelde snelheid;
- RPE en RPE van het laatste blok;
- ademhaling, benen en pijn/klachten;
- algemene ervaring en vrije notitie.

Deze gegevens worden direct opgeslagen. Ze veranderen nooit automatisch de
voorgeschreven trainingssnelheden.

De W42 Fitness Check toont de opgeslagen W38-blokresultaten ter vergelijking.
Alle twaalf lange sessies hebben een racevoedingsregistratie. W43 en W44 hebben
de extra volledige racevoedingsrepetitie. Voedingsvelden worden direct opgeslagen.

## Gegevens behouden

De opslagkey blijft `marathon330TrainingAppData_v1`; dataversie is nu 5.
Voltooiingen, notities, instellingen en registraties worden niet gereset.
`scripts/previous-workouts-v5.json` en `scripts/previous-workouts-v6.json` zijn
uitsluitend historische protocolmetadata voor migratie, geen actieve schema's.
De ongewijzigde Fitness Checks verhuizen naar hun nieuwe Training 1-ID, inclusief
resultaten, notities, voltooiing en meldingsinstellingen. Oude deeplinks blijven werken.
De verwijderde easytrainingen en de langere W44-test worden met alle registraties
bewaard onder `legacyData.refinedPlanMigration`, niet afgevinkt of als resultaat
van een andere training gebruikt. Nieuwe registraties overschrijven dit archief niet.
De migratie is eenmalig en herhalen verandert geen data. Bij oudere voltooide trainingen blijft
hun historische afstand/duur behouden. Resultaten van een gewijzigd of onbekend
testprotocol worden bewaard onder `legacyData.previousTestProtocols`, niet als
uitslag van een andere test gebruikt. Bekende ongewijzigde protocollen blijven actief.

Wijzig de opslagkey nooit zonder migratie en schrijf geen lege defaults over
bestaande data. Onleesbare opslag blijft onaangeroerd en blokkeert nieuwe saves
met een zichtbare waarschuwing. Bij een schrijffout blijft leesbare data zichtbaar.

## PWA en iPhone

De vorige versie gebruikte de cache `marathon-330-simple-week-v2` en daarvoor
`marathon-330-marathon-plan-2026-v1`. Het manifest verwees bovendien absoluut
naar `/marathon-330/`. Dat kon bij een GitHub Pages-projectsite of een bestaand
iOS-homescreen-icoon een andere installatie-URL of oude appcache opleveren.

De huidige versie gebruikt:

- manifest `start_url: "./"`;
- manifest `scope: "./"`;
- uitsluitend relatieve assetpaden;
- versienummers op CSS, JavaScript, manifest, trainingsdata en touch-icon;
- geen permanente offline-cache.

`service-worker.js` blijft nu geregistreerd voor Web Push, maar gebruikt voor
appbestanden nog steeds altijd het netwerk. Tijdens activatie verwijdert hij
uitsluitend caches met de oude marathon-app-prefixen. Zo blijft de eerdere
cache-updatefix intact zonder de pushregistratie weer te verwijderen.
`localStorage` en persoonlijke trainingsgegevens worden hierbij niet verwijderd.

Een al bestaand iPhone-homescreen-icoon kan zijn oude start-URL in iOS bewaren.
Controleer daarom na deployment in zowel Safari als het bestaande beginscherm-icoon
onder **Informatie** of versie `2026.09.02-3` actief is. Verwijder geen installatie
of browsergegevens om een update af te dwingen. Deze app ondersteunt bewust geen
offline herstart: bestanden komen van het netwerk. Een al geladen lokale timer
heeft voor het aftellen zelf geen netwerk nodig. Dit bestaande cachebeleid is behouden.

## Trainingsmeldingen

Loopbandmodus bevat per training onafhankelijke instellingen voor meldingen,
geluid, 30/45 seconden voorwaarschuwing en compacte/uitgebreide tekst. De
in-app waarschuwing werkt zonder server. Echte Lock Screen-meldingen gebruiken
Web Push en vereisen de meegeleverde kleine serverless app in `push-server/`.

Starten maakt één unieke meldingssessie. Pauzeren of stoppen maakt de oude
sessie server-side ongeldig; hervatten plant de resterende switches opnieuw.
Alle switchmomenten worden uit dezelfde cumulatieve tijdlijn afgeleid als de
zichtbare Loopbandmodus. Zie `PUSH-DEPLOYMENT.md` voor installatie en fysieke
iPhone-tests.

## Publiceren

Publiceer de appbestanden samen in dezelfde GitHub Pages-projectmap. De planner,
timer en in-app waarschuwingen hebben geen buildstap of backend nodig. Alleen
Lock Screen-push gebruikt het afzonderlijke `push-server/`-project.

Upload samen: `index.html`, `style.css`, `app.js`, `training-data.js`,
`notification-model.js`, `push-config.js`, `service-worker.js`, `manifest.json`,
`apple-touch-icon.png` en `icon.svg`. Behoud je bestaande publieke pushconfiguratie.
`training-plan-v5.js` is niet meer nodig. Bronbestanden, scripts, tests en rapport
zijn voor beheer; ze zijn niet nodig om de statische app uit te voeren.

## Verificatie

```sh
node --test tests/*.test.mjs push-server/tests/*.test.mjs
```

De tests vergelijken alle bronblokken onafhankelijk met de dataset, controleren
afstanden, tijden, hellingen, migratie, registratie, timer, meldingen en PWA-paden.
Een gegenereerde `tests/focus-fixtures.html` gebruikt de echte renderer voor
24 snelheid/helling-combinaties; dit is uitsluitend een lokale visuele testpagina.
Zie `REFINED-SCHEMA-AUDIT-2026-09-02.md` voor de huidige controle en rekenverschillen.
Eerdere auditrapporten en oudere Markdown-schema's zijn uitsluitend historisch;
de app laadt alleen `training-data.js` uit de hierboven genoemde verfijnde bron.
