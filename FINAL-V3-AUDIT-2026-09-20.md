# FINAL V3 audit - 20 september 2026

## Bron en versie

- Enige actieve inhoudelijke bron: `marathonschema_Roy_FINAL_V3_3u30_2026.md`
- Gegenereerde dataset: `training-data.js`
- App-versie: `2026.09.20-1`
- Schemaversie: `marathon-3u30-final-v3-2026.09.20-1`
- Opslagkey blijft: `marathon330TrainingAppData_v1`
- Dataversie: `6`

Het vorige Markdown-schema is uit de actieve projectmap verwijderd. Historische
voorschriften in `scripts/previous-workouts-v7.json` bestaan uitsluitend om
bestaande lokale registraties veilig te kunnen archiveren tijdens migratie.

## Datacontrole

| Week | Planning | Sessies | Rustdagen | Km voor race | Km incl. race | MP-minuten | Blokken |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 39 | flexibel | 4 | 0 | 53,23 | 53,23 | 24 | 16 |
| 40 | flexibel | 4 | 0 | 45,93 | 45,93 | 0 | 12 |
| 41 | flexibel | 5 | 0 | 65,16 | 65,16 | 45 | 16 |
| 42 | flexibel | 5 | 0 | 72,22 | 72,22 | 40 | 25 |
| 43 | flexibel | 5 | 0 | 77,73 | 77,73 | 50 | 16 |
| 44 | flexibel | 5 | 0 | 68,28 | 68,28 | 70 | 25 |
| 45 | kalender | 4 | 3 | 51,75 | 51,75 | 60 | 15 |
| 46 | kalender | 4 | 3 | 35,07 | 35,07 | 31 | 25 |
| 47 | kalender | 4 | 3 | 14,01 | 56,205 | 8 | 19 |

Gecontroleerde totalen:

- 9 weken;
- 40 sessies inclusief marathon;
- 39 trainingen voor de marathon;
- 169 uitgewerkte loopblokken;
- 483,38 km voor de marathon;
- 525,575 km inclusief marathon;
- 328 minuten marathonpace voor de marathon;
- 9 zichtbare rustdagen in W45-W47;
- 10 geintegreerde krachtsessies;
- 7 confidence-sessies;
- 4 volledige racevoedingsrepetities;
- 3 expliciete schoenadviezen.

Alle 154 loopbandblokken hebben een expliciete numerieke helling van 0%. De 15
buitenblokken hebben bewust geen verzonnen loopbandhelling.

## Gedragscontrole

- W39-W44: flexibele labels Training 1-5; een eventuele wedstrijddatum maakt de
  rest van de week niet kalendergestuurd.
- W45-W47: vaste lokale kalenderdatum met zeven dagkaarten per week.
- Vandaag: eerstvolgende open sessie in flexibele weken; exacte training of rust
  in kalenderweken.
- Kracht: eigen inklapbare kaart na het loopgedeelte, met oefeningen, volume,
  RIR en de volgorde hardlopen -> kracht.
- Fueling: circa 80 g koolhydraten per uur en producten staan op de vier
  volledige repetities.
- Statistiek: rust en kracht tellen niet als looptraining of kilometers.
- Loopbandmodus: dezelfde segmenten als de normale kaart, met cumulatieve tijden.
- Oude Fitness Checks en bijbehorende oude testformulieren zijn niet meer
  bereikbaar of zichtbaar in de actieve interface.

## Opslagmigratie

De storagekey is niet gewijzigd. Bij dataversie 5 of ouder vergelijkt de app de
oude protocolhandtekening met FINAL V3. Data van een gewijzigd of verwijderd
voorschrift wordt eenmalig bewaard onder `legacyData.finalV3Migration`; ze wordt
niet aan een andere training gekoppeld. Overige instellingen en data blijven
staan. Er wordt geen `localStorage.clear()` gebruikt.

## Verificatie

- Generator reproduceert `training-data.js` byte-voor-byte.
- 30 van 30 geautomatiseerde tests geslaagd.
- Browsercontrole op 390 x 844 uitgevoerd voor Vandaag W39, Week W39, Week W45,
  rust op 20 november, shakeout op 21 november, marathon op 22 november,
  Schema, Fases, Statistiek, Loopbandmodus en actieve Focus Mode.
- Geen horizontale overflow of browserconsolefouten gevonden.
- Een presentatieprobleem waarbij een ongestuurde buitenrun als `0 km/u` werd
  samengevat, is gecorrigeerd naar de broninstructie/op gevoel.

Een fysieke iPhone blijft nodig voor de laatste platformcontrole van Wake Lock,
Lock Screen-push en iOS Home Screen-gedrag.
