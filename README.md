# Marathon 3:30

Mobiele weekplanner voor het definitieve Marathon 3:30-loopbandschema van
31 augustus tot en met 22 november 2026.

## Actieve versie

- App-versie: `2026.08.30-1`
- Schemaversie: `marathon-schema-3u30-2026.08.30-1`
- Bronbestand: `marathon-schema-3u30.md`
- Opslagkey: `marathon330TrainingAppData_v1`

## Schema

Het schema bevat week 36 tot en met week 47, steeds vier trainingen per week.
Confidence runs, de drie officiële tests, taper en marathon zijn gemarkeerd in
de interface. Het markdownbestand is de enige inhoudelijke bron; de appdata wordt
er mechanisch uit gegenereerd:

```sh
node scripts/generate-marathon-plan.mjs marathon-schema-3u30.md training-data.js
```

Wijzig `training-data.js` daarom niet handmatig wanneer het schema verandert.

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

`service-worker.js` is nu alleen een eenmalige migratieworker. Hij verwijdert
uitsluitend caches met de oude marathon-app-prefixen, schrijft zichzelf uit en
gebruikt ondertussen altijd het netwerk. `app.js` ruimt dezelfde oude registratie
en caches op wanneer de nieuwe app al is geladen. `localStorage` en persoonlijke
trainingsgegevens worden hierbij niet verwijderd.

Een al bestaand iPhone-homescreen-icoon kan zijn oude start-URL in iOS bewaren.
Na deze eerste release is daarom de betrouwbaarste eenmalige stap:

1. verwijder het oude homescreen-icoon;
2. open de actuele GitHub Pages-URL in Safari;
3. controleer onder **Informatie** dat versie `2026.08.30-1` zichtbaar is;
4. kies opnieuw **Zet op beginscherm**.

Daarna worden toekomstige bestanden rechtstreeks vanaf GitHub Pages geladen.

## Publiceren

Publiceer alle bestanden samen in dezelfde GitHub Pages-projectmap. De app heeft
geen buildstap, framework, backend of externe database nodig.
