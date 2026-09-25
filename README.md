# Marathon 3:30

Mobiele trainingsplanner voor Roys definitieve Marathon 3:30-schema richting
zondag 22 november 2026.

## Actieve versie

- App-versie: `2026.09.25-2`
- Schemaversie: `marathon-3u30-final-v3-2026.09.25-2`
- Enige inhoudelijke bron: `marathonschema_Roy_FINAL_V3_3u30_2026.md`
- Gegenereerde appdata: `training-data.js`
- Opslagkey: `marathon330TrainingAppData_v1`
- Dataversie: `8`

Genereer de trainingsdata opnieuw met:

```sh
node scripts/generate-marathon-plan.mjs
```

## FINAL V3

Het actieve schema bevat week 39 tot en met week 47. Week 39–44 gebruikt een
flexibele sessievolgorde; week 45–47 volgt vaste kalenderdagen en toont ook
rustdagen. Krachttraining A, B, A-light en B-light is onderdeel van de relevante
loopdag en telt niet mee als extra looptraining of kilometers.

De centrale bronwaarden zijn:

- 39 trainingen vóór de marathon, plus de marathon;
- circa 483,65 km vóór de marathon;
- circa 525,85 km inclusief de marathon;
- 328 geprogrammeerde marathonpace-minuten vóór de race;
- 0% als standaard loopbandhelling, tenzij de bron expliciet anders vermeldt;
- geen Fitness Checks uit oudere versies.

Week-, Schema-, Statistiek- en marathondashboardweergaven lezen dezelfde
trainingsdataset en dezelfde centrale kilometerhelpers.

## Vandaag en Week

In flexibele weken toont Vandaag de eerste nog niet voltooide sessie. Week blijft
de sessies benoemen als Training 1–5 en toont de aanbevolen volgorde alleen als
advies. In week 45–47 volgt Vandaag de lokale kalenderdatum exact. Week toont dan
zeven dagkaarten, inclusief compacte rustdagen, de shakeout en de marathon.

## Loopbandmodus

Loopbandmodus gebruikt rechtstreeks de segmenten uit `training-data.js` en
berekent cumulatieve start- en eindtijden. De normale kaart en de focusmodus
kunnen daardoor niet verschillende tempo's, blokken of hellingen tonen.

De timer ondersteunt pauzeren, hervatten en stoppen. Screen Wake Lock wordt als
progressive enhancement gebruikt. Trainingsmeldingen en de bestaande pushserver
blijven gekoppeld aan dezelfde berekende tijdlijn.

## Opslag en migratie

Wijzig `marathon330TrainingAppData_v1` nooit zonder migratie. Bij de overgang
naar FINAL V3 worden registraties van gewijzigde of verwijderde voorschriften
niet aan een andere training gekoppeld. Ze worden bewaard onder
`legacyData.finalV3Migration`. De gerichte W40/W41-protocolwijziging gebruikt
dezelfde bescherming via `legacyData.speedReserveMigration`. De vijf naar het
Máximapark verplaatste easy-runs gebruiken `legacyData.maximaparkMigration`.
Ongewijzigde
trainingen, instellingen en overige lokale data blijven intact. De app gebruikt
nergens `localStorage.clear()`.

Onleesbare opslag wordt niet overschreven. In dat geval blokkeert de app nieuwe
saves en blijft de ruwe browserdata behouden.

## PWA en GitHub Pages

Manifest, start-URL, scope en assets gebruiken relatieve paden. De service worker
blijft netwerkgestuurd voor appbestanden, ondersteunt Web Push en verwijdert
alleen oude appcache-prefixen. LocalStorage wordt daarbij nooit verwijderd.

Publiceer samen: `index.html`, `style.css`, `app.js`, `training-data.js`,
`notification-model.js`, `push-config.js`, `service-worker.js`, `manifest.json`,
`apple-touch-icon.png` en `icon.svg`.

## Verificatie

```sh
node --test tests/*.test.mjs push-server/tests/*.test.mjs
```

De tests controleren de FINAL V3-bron, alle weken en sessies, week- en
programmatotalen, flexibele versus kalenderplanning, krachtkoppelingen, voeding,
schoenen, confidence-sessies, Today/Week/Schema/Fases/Statistiek, opslagmigratie,
Loopbandmodus, meldingen en PWA-paden.
