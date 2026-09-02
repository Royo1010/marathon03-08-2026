# Gerichte eindcontrole Marathon 3:30

App- en service-workerversie: **2026.09.02-2**.
Schema-identiteit: `marathon-3u30-definitief-2026.09.02-1`, ongewijzigd.
Opslagkey: `marathon330TrainingAppData_v1`, dataversie 4, ongewijzigd.

## Afbakening en bron

Het volledige definitieve Markdownbestand is opnieuw gelezen. De projectkopie
is vergeleken met `/Users/royvanharten/Desktop/marathon-schema-3u30-definitief-2026.md`.
Er is precies één tekstuele broncorrectie: de samenvatting van W44 Training 2
vermeldt nu 47 minuten. Het aangeleverde Desktop-bestand is niet gewijzigd.

Alle trainingen waren inhoudelijk al aanwezig. Een onafhankelijke tweede parser
heeft alle bronblokken, titels, doelen, RPE, mentale teksten, labels, volgorde,
periodes, veiligheidsregels en locatieadviezen opnieuw vergeleken. Afstanden en
duren zijn onafhankelijk uit de blokken opgeteld, niet overgenomen uit de totalen.

De bestaande app heeft Week, Schema, Informatie, Marathonoverzicht en Loopbandmodus.
Er bestaan in deze versie geen aparte Vandaag-, Fases- of Statistiekenpagina's.
Hun relevante informatie staat in de huidige week/volgende training, faseaanduiding
en het Marathonoverzicht. Deze bestaande indeling is niet veranderd.

## Controletabel

| Onderdeel | Status | Bevinding/correctie |
| --- | --- | --- |
| Schema W36-W47 volledig | PASS | 12 weken, 48 reguliere sessies inclusief marathon, 2 extra checks. |
| Alle trainingsblokken | PASS | 259 blokken uit de bron vergeleken; geen blok toegevoegd of verwijderd. |
| Helling per blok | PASS | 258 loopbandblokken hebben numeriek 0, 0.5 of 1; uitsluitend buitenmarathon heeft geen helling. |
| Weektotalen W36-W47 | PASS | Alle onafhankelijk berekende totalen corresponderen met de bron; zie tabel hieronder. |
| W38 Fitness Check #1 | PASS | Extra check, geen Training 5; exact 40 minuten en 6,958333 km. |
| W40 5K Benchmark | PASS | CUTBACK / RECOVERY zichtbaar; 5,00 km testafstand, variabele testtijd, testregistratie aanwezig. |
| W41 Marathon Rhythm Test | PASS | 60 minuten onafgebroken op 12,0 km/u en 1%; buitenvariant 12 km op 4:59-5:00/km zichtbaar. |
| W42 Fitness Check #2 | PASS | Identiek protocol aan W38; dezelfde registratievelden en vergelijking beschikbaar. |
| W42 MP-under-fatigue | PASS | 20 min 11,5 + 5 min 11,8 + 10 min 12,0; MP begint na 150 min; veiligheidsregel zichtbaar. |
| W43 3 x 15 MP | PASS | Drie blokken van 15 minuten op 12,0 km/u en 1%, met twee herstelblokken van 4 minuten. |
| W43 30K | PASS | 180 minuten, 30,358333 km; langste duurloop, buiten aanbevolen, niet verlengen. |
| W44 Training 2 - 47 minuten | FIXED | Projectbron en bronmetadata gecorrigeerd; bestaande tien blokken en 47-minutentijdlijn behouden. |
| W44 Training 2 - ongeveer 8,35 km | UPDATED | 8,348333 km werd afgerond als 8,3; de samenvatting toont nu 8,35 km. |
| W44 weektotaal | PASS | 53,646667 km, afgerond 53,65 km. |
| W44 2 x 30 min MP | PASS | Na 85 minuten twee MP-blokken; 165 minuten en 29,265 km totaal; loopband aanbevolen. |
| Taper W45-W47 | PASS | Geen extra training, test of volume; marathon 22 november 2026, benodigd gemiddelde 4:58,6/km. |
| Racevoeding | PASS | Alle 12 relevante registraties geopend; 11 velden per formulier; volledige repetitie bij W43/W44. |
| Buiten-/loopbandaanbevelingen | PASS | W41 T2 en W43 T4 buiten; W44 T4 loopband; volledige uitleg zichtbaar. |
| Oude conflicterende trainingsdata | PASS | Geen oude variant in actieve trainingen of deeplinks. Historische migratiemetadata blijft behouden voor gegevensveiligheid. |
| Gerenderde Week-weergave | PASS | Alle 12 weken geopend; periodes, volgorde, labels, fase en weektotalen gecontroleerd. |
| Gerenderde trainingsdetails | PASS | Alle 50 details geopend; alle 259 blokken, uitleg en toepasselijke formulieren vergeleken. |
| Gerenderde Focus Mode | PASS | Alle 49 startbare sessies geopend, alle 245 Focus-rijen vergeleken; benchmark-uitzondering hieronder. |
| Hellingnotatie 0% | UPDATED | Getal 0 met kleinere %-eenheid; wandelen en live blokwissel getest. |
| Hellingnotatie 0,5% | UPDATED | Geen Unicode-fractie in Focus; decimale waarde en kleinere %-eenheid. |
| Hellingnotatie 1% | UPDATED | Dezelfde vaste kolom, baseline en kleinere %-eenheid. |
| Responsive uitlijning | PASS | 96 combinaties op 375, 390, 393 en 430 px; geen overlap, afkapping of horizontale overflow. |
| Bestaande gebruikersdata | PASS | Geen reset of keywijziging. Voltooiing, notities, tests, voeding en migratie-regressietests slagen. |
| Testresultaten | PASS | Alle 44 tests slagen; laatste browserronde met 50 deeplinks: geen consolewaarschuwingen of fouten. |
| App/cacheversie | UPDATED | App, assetverwijzingen, service worker en healthmelding op 2026.09.02-2. |
| Fysieke iPhone / Home Screen | MANUAL IPHONE TEST REQUIRED | Browsercontrole vervangt geen test op een echte iPhone na publicatie. |

## Berekende weektotalen

Afstand van tijdsblokken = minuten x km/u / 60. Afstandsblokken behouden hun
opgegeven kilometers. Eerst alle ongeronde blokwaarden optellen, daarna afronden.

| Week | Berekend totaal, km | Toelichting |
| --- | ---: | --- |
| 36 | 38,98 | 4 trainingen |
| 37 | 43,71 | 4 trainingen |
| 38 | 55,78 | 48,83 regulier + Fitness Check #1 |
| 39 | 54,20 | Inclusief afstandsgebaseerde confidence run van 23,8 km |
| 40 | 42,55 | Vaste 5 km testafstand, ongeacht testtijd |
| 41 | 64,91 | Inclusief confidence run van 25,8 km |
| 42 | 68,88 | 61,93 regulier + Fitness Check #2 |
| 43 | 67,73 | Langste duurloop 30,36 km |
| 44 | 53,65 | Training 2: 47 minuten / 8,35 km |
| 45 | 47,03 | Taper |
| 46 | 37,72 | Taper |
| 47 voor marathon | 15,95 | 3 trainingen |
| 47 inclusief marathon | 58,15 | Plus 42,195 km buitenwedstrijd |

Geen significante afstandsafwijkingen gevonden. De bestaande app rondt algemene
samenvattingen af op één decimaal: bijvoorbeeld W44 53,6 km en W47 58,1 km.
Dit zijn dezelfde ongeronde totalen, geen afwijkende datasets. Opgetelde afgeronde
deelafstanden kunnen één honderdste afwijken van het correct afgeronde weektotaal.

## W44 Training 2 definitief

15 minuten warming-up + 4 x 4 minuten snel + 3 x 2 minuten herstel + 10 minuten
cooling-down = **47 minuten**. Afstand: **8,348333 km**. De laatste rij eindigt
zichtbaar op **47:00**. Geen extra tien minuten toegevoegd.

Een vergelijking van de trainingsdataset voor en na deze ronde toont uitsluitend
de gecorrigeerde bron-samenvatting, afstandslabel en het verwijderen van de nu
opgeloste bronafwijking. Alle numerieke blokdata en protocolidentiteiten zijn gelijk.

## Zichtbare browsercontrole

- Alle 12 weekpagina's en 50 trainingsdetails daadwerkelijk geopend.
- Per detail de zichtbare blokwaarden en metadata met de gecontroleerde brondata vergeleken.
- Alle 6 testregistraties en 12 voedingsformulieren geopend en gecontroleerd.
- Alle 50 loopbandoverzichten en deeplinks geopend, inclusief buitenmarathon.
- Alle 49 startbare Focus-views geopend; 245 rijwaarden met onafhankelijke cumulatieve tijden vergeleken.
- W40 T2 blijft bewust een statisch overzicht van 14 blokken: de 5K-test heeft geen voorspelbare tijd. Geen automatische Focus-timer of verzonnen testduur toegevoegd.
- Afstandstijden blijven als schatting gemarkeerd; de buitenmarathon blijft als Buiten herkenbaar.
- Schema en beide dashboardgrafieken gebruiken dezelfde weekkilometers; marathon blijft apart herkenbaar.
- 24 snelheid/hellingcombinaties x 4 schermbreedtes getest, inclusief 10,5 naast 0,5 en 13,5 naast 1.
- Cockpitgetal 56 px, %-eenheid 23 px; rijen 34 px en 15 px. Vaste kolommen zijn alleen verbreed waar nodig: cockpit 118 px, rij 72 px.
- Toegankelijke hellingsnaam gecontroleerd; live updates behouden de losse procent-eenheid.
- Geen fouten of waarschuwingen in de laatste browserronde met alle 50 trainingslinks.

## Tests en behoud

`node --test tests/*.test.mjs push-server/tests/*.test.mjs`: **44/44 PASS**.

Dit omvat bronvergelijking, onafhankelijke afstands- en duurcontrole, metadata,
alle timergrenzen, pauze/hervatten/stop, auto-follow en Terug naar NU, Wake Lock,
meldingen, lokale opslag, corruptiefallback, migratie, testresultaten en racevoeding.
Nieuwe regressiechecks bewaken volledige bronmetadata en de losse hellingseenheid
bij wissels tussen 0,5%, 1% en 0%.

De opslagcode, sleutel, dataversie, protocolidentiteiten en numerieke schemawaarden
zijn niet veranderd. Bestaande gegevens zijn niet gewist. De echte iPhone-opslag is
niet op afstand geïnspecteerd; gegevensbehoud is gecontroleerd met opslagfixtures.
Manifest en relatieve GitHub Pages-paden zijn ongewijzigd. De bestaande netwerkstrategie
van de service worker is behouden en getest. Werkelijke ontvangst van deze build
op Safari en het beginscherm moet na deployment op de iPhone worden bevestigd.

## Aangepaste bestanden

- `app.js`: Focus-formatter, losse eenheid, toegankelijke tekst, live update en appversie.
- `style.css`: uitsluitend de noodzakelijke Focus-hellingskolommen en eenheidstijl.
- `marathon-schema-3u30-definitief-2026.md`: uitsluitend W44-samenvatting naar 47 minuten.
- `scripts/generate-marathon-plan.mjs`: W44 T2-afstandslabel op twee decimalen.
- `training-data.js`: opnieuw gegenereerde samenvattingsmetadata, geen gewijzigde blokken.
- `index.html`, `service-worker.js`, `push-server/api/health.js`: buildversie.
- `tests/plan-model.test.mjs`, `tests/app-shell.test.mjs`, `tests/pwa-config.test.mjs`: regressiecontroles en versieverwachtingen.
- `README.md`, `UPDATE-REPORT-2026-09-02.md`: opgeloste W44-tegenstrijdigheid vastgelegd.
- `FINAL-AUDIT-2026-09-02.md`: dit rapport.

## Eindbevestiging

Gecontroleerd: **12 weken, 48 reguliere sessies inclusief de marathon, 2 Extra
Fitness Checks en 259 blokken**. Daarvan zijn 258 loopbandblokken met expliciete
helling en één buitenmarathonblok. **W44 Training 2 duurt correct 47 minuten.**
De data is niet alleen intern gecontroleerd: de appweergaven zijn daadwerkelijk
geopend en hun zichtbare trainingswaarden zijn met die data vergeleken.
