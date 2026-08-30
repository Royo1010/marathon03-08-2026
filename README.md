# Marathon 3:30

Mobiele weekplanner voor het definitieve Marathon 3:30-loopbandschema van
31 augustus tot en met 22 november 2026.

## Actieve versie

- App-versie: `2026.08.30-5`
- Schemaversie: `marathon-schema-3u30-expliciete-helling-2026.08.30-1`
- Bronbestand: `marathon-schema-3u30-expliciete-helling.md`
- Opslagkey: `marathon330TrainingAppData_v1`

## Schema

Het schema bevat week 36 tot en met week 47, steeds vier trainingen per week.
Confidence runs, de drie officiële tests, taper en marathon zijn gemarkeerd in
de interface. Het markdownbestand is de enige inhoudelijke bron; de appdata wordt
er mechanisch uit gegenereerd:

```sh
node scripts/generate-marathon-plan.mjs marathon-schema-3u30-expliciete-helling.md training-data.js
```

Wijzig `training-data.js` daarom niet handmatig wanneer het schema verandert.

Het tabblad **Schema**, de kilometerkaarten en de twee dashboardgrafieken lezen
dezelfde centrale weektotalen uit deze gegenereerde data. Bij bronranges wordt
de originele range getoond en gebruikt de grafiek het midden van die range.
Week 47 wordt berekend uit drie trainingen plus de marathon en wordt zichtbaar
als totaal inclusief marathon gemarkeerd.

## Loopbandmodus

Iedere training heeft een aparte Loopbandmodus. Deze gebruikt rechtstreeks de
uitgewerkte segmenten uit `training-data.js` en berekent cumulatieve start- en
eindtijden. Afstandsblokken krijgen een geschatte duur wanneer afstand en
snelheid bekend zijn. Een blok zonder berekenbare duur blijft zichtbaar, maar
schakelt de optionele trainingstimer uit om onjuiste wisselmomenten te voorkomen.

De timer ondersteunt pauzeren, hervatten en stoppen. Tijdens een actieve timer
wordt de Screen Wake Lock API gebruikt wanneer de browser dit ondersteunt.
Zonder Wake Lock blijft de rest van de Loopbandmodus normaal functioneren.

Via de titel **Marathon 3:30** opent een overzicht met kalendercountdown,
trainings- en kilometervoortgang, week- en cumulatieve grafieken, confidence
runs, tests, lange duurlopen, de volgende training en de volgende mijlpaal.

Alle 254 uitvoerbare loopbandblokken hebben vanuit de bron een expliciete
numerieke helling van `0%`, `0,5%` of `1%`. Alleen de marathon zelf staat als
buitenwedstrijd zonder loopbandhelling in de data.

## Testresultaten

Bij TEST 1, TEST 2 en TEST 3 kan lokaal worden vastgelegd:

- resultaat/tijd;
- gemiddelde snelheid;
- RPE en RPE van het laatste blok;
- ademhaling, benen en pijn/klachten;
- algemene ervaring en vrije notitie.

Deze gegevens worden direct opgeslagen. Ze veranderen nooit automatisch de
voorgeschreven trainingssnelheden.

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
Na deze eerste release is daarom de betrouwbaarste eenmalige stap:

1. verwijder het oude homescreen-icoon;
2. open de actuele GitHub Pages-URL in Safari;
3. controleer onder **Informatie** dat versie `2026.08.30-5` zichtbaar is;
4. kies opnieuw **Zet op beginscherm**.

Daarna worden toekomstige bestanden rechtstreeks vanaf GitHub Pages geladen.

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
