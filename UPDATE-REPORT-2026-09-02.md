# Opleverrapport Marathon 3:30

App- en service-worker-versie: `2026.09.02-1`.
Schema: `marathon-3u30-definitief-2026.09.02-1`.
Opslagkey ongewijzigd: `marathon330TrainingAppData_v1`; dataversie 4.

## Uitkomst

De bestaande app is bijgewerkt, niet opnieuw gebouwd. Het volledige nieuwe
bronbestand is eerst gelezen en na implementatie nogmaals van boven naar beneden
gecontroleerd. Een onafhankelijke tweede parser vergelijkt bovendien alle
trainingsblokken, titels, doelen, RPE- en mentale teksten met de uiteindelijke data.

De oude app gebruikte een basisdataset plus een v5-correctielaag. Dat liet onder
andere verouderde volumes in W38 en W41-W44 bestaan. Nu wordt alle actuele
trainingsdata rechtstreeks uit het nieuwe bronbestand gegenereerd.

**Brontegenstrijdigheid:** W44 Training 2 bevat 47 minuten aan expliciete blokken,
maar de samenvatting in het aangeleverde bestand noemt 57 minuten. De berekende
8,3483 km past bij 47 minuten. De app volgt de exacte blokken. Er zijn geen tien
minuten bij verzonnen. De afwijking is vastgelegd in `sourceDiscrepancies`; het
oorspronkelijke Markdown-bestand is niet aangepast.

## Controletabel

| Onderdeel | Status | Toelichting |
| --- | --- | --- |
| Marathonschema W36-W47 | UPDATED | 50 sessies rechtstreeks uit het nieuwe bestand; tweede volledige audit uitgevoerd. |
| W38 Fitness Check | PASS | Vast 40-minutenprotocol; extra check, geen Training 5. |
| W40 5K Benchmark | PASS | Vaste 5 km, variabele testtijd; interpretatie en startinstructie aanwezig. |
| W41 Marathon Rhythm Test | PASS | 60 min onafgebroken 12,0 km/u op 1%; buitenvariant aanwezig. |
| W41 weekvolume | UPDATED | 64,91 km uit de ongeronde blokken. |
| W42 Fitness Check | PASS | Identiek protocol; opgeslagen W38-blokresultaten zichtbaar ter vergelijking. |
| W42 weekvolume | UPDATED | 68,88 km inclusief extra check. |
| W42 MP-under-fatigue | UPDATED | 20 min 11,5 + 5 min 11,8 + 10 min 12,0; MP start na 150 min. |
| W43 3x15 MP | PASS | Drie blokken van 15 min op 12,0/1%; afzonderlijke RPE-registratie. |
| W43 30K | PASS | 180 min, 30,36 km; geen verlenging; buitenaanbeveling. |
| W43 weekvolume | UPDATED | 67,73 km. |
| W44 2x30 MP | PASS | Twee blokken van 30 min op 12,0/1%, eerste na 85 min. |
| W44 weekvolume | UPDATED | 53,65 km; bronfout bij T2 expliciet vermeld. |
| Taper | PASS | W45-W47 exact behouden; geen extra dagen, tests of kilometers. |
| Racevoeding | UPDATED | Alle twaalf lange sessies; elf registratievelden; volledige repetitie W43/W44. |
| Buiten-aanbevelingen | UPDATED | W41 T2 en W43 T4 groenachtig; W44 T4 loopband blauw. |
| Hellingdata | PASS | 258 numerieke loopbandhellingen; alleen buitenmarathon zonder helling. |
| Afstandsvalidatie | PASS | Afstand uit duur x snelheid, of expliciete afstand; afronding pas in UI. |
| Weekvolumevalidatie | PASS | Alle twaalf weektotalen onafhankelijk gecontroleerd. |
| Trainingtype-kleuren | UPDATED | Semantische tokens voor easy, recovery, steady, MP, quality, long, test, taper, race en voeding. |
| Trainingskaarten | UPDATED | Accentlijn, getinte labels, duidelijke titel en ruimere opbouw. |
| Weekoverzicht | UPDATED | Weektype en totaalvolume; extra checks apart herkenbaar. |
| Algemene spacing | UPDATED | Meer ruimte tussen kaarten en betere scheiding van hoofd- en detailtekst. |
| Mobiele leesbaarheid | PASS | Echte browsercontrole; alle 50 detailweergaven en loopbandoverzichten geopend. |
| Countdown | UPDATED | 80 px, vaste cijfers; geen verspringen in de laatste seconden. |
| Huidige snelheid | UPDATED | 56 px met leesbare km/u-eenheid; vaste eigen zone. |
| Huidige helling | FIXED | Rechts uitgelijnde vaste kolom, 56 px; 0%, 1/2% en 1% passen. |
| Daarna verwijderd | FIXED | Geen DAARNA-sectie meer in de actieve cockpit. |
| Cockpit layout | UPDATED | Countdown, actuele waarden, voortgang en bediening; queue sluit direct aan. |
| Grid alignment | FIXED | Eigen kolommen voor tijd, snelheid en helling; ook gewone loopbandkaarten gecorrigeerd. |
| Queue typography | UPDATED | Grotere tijden, snelheid en helling; lange tijdvakken mogen netjes over twee regels. |
| Active highlight | PASS | Blauwe rand, rustige tint, linker accentlijn en ACTIEF-label. |
| Progressiebalk | UPDATED | Dikkere segmentbalk, voltooid/actief/toekomstig en bloknummer zichtbaar. |
| Auto-follow | FIXED | Automatisch naar nieuwe actieve kaart, tenzij de gebruiker zelf vooruit kijkt. |
| Terug naar NU visibility | FIXED | Alleen zichtbaar wanneer de actieve kaart buiten de vrije kijkruimte ligt. |
| Terug naar NU behavior | FIXED | Actieve kaart komt onder de sticky cockpit; knop verdwijnt, volgen hervat. |
| Handmatig scrollen | FIXED | Blokwissel houdt cockpit live zonder scrollpositie of zichtbare voorgaande rij weg te nemen. |
| 390px responsive | PASS | Ook 375, 393, 430, 768 en 1024 px gecontroleerd. |
| 10,5 km/u + 1/2% | PASS | Onderdeel van 144 gemeten combinaties; geen botsing of afkapping. |
| 13,5 km/u + 1% | PASS | Zelfde combinatietest en visuele screenshotcontrole. |
| Pauze | PASS | Tijd blijft staan; automatische en echte browsercontrole. |
| Hervatten | PASS | Verder vanaf verstreken tijd; nieuwe meldingssessie behouden. |
| Stop | PASS | Timer stopt en voorbereiding wordt zichtbaar; unit- en browsercontrole. |
| Notificaties | BLOCKED | In-app logica en servertests slagen. Echte push vereist nog backend-URL en publieke VAPID-sleutel in de bestaande configuratie. |
| Wake Lock | MANUAL IPHONE TEST REQUIRED | Start/pauze/hervatten/stop getest met API-stub; fysiek schermgedrag nog te testen. |
| PWA | MANUAL IPHONE TEST REQUIRED | Manifest, relatieve paden, workerregistratie en versies gecontroleerd; Safari/beginscherm na deployment vergelijken. |
| Offline/cache | PASS | Bestaande netwerk-only strategie intact. Geen offline herstart beloofd; geen nieuwe cachinglaag toegevoegd. |
| User data | PASS | Geen reset; stabiele IDs/key, historische afstand en compatibele registraties behouden; migratie getest. |
| Console errors | PASS | Geen consolefouten of waarschuwingen tijdens de gecontroleerde normale browserflows. |
| App/cacheversie | UPDATED | App, assets, worker en push-healthversie: 2026.09.02-1. |

De tabel gebruikt 1/2% als tekstnotatie; de app toont de echte fractionele glyph
`½%`. Alle opgeslagen hellingen zijn numeriek.

## Weekvolumes

| Week | Berekend totaal | Bijzonderheid |
| --- | ---: | --- |
| 36 | 38,98 km | Vier trainingen |
| 37 | 43,71 km | Vier trainingen |
| 38 | 55,78 km | Inclusief 6,96 km extra check |
| 39 | 54,20 km | Confidence-afstandsblokken |
| 40 | 42,55 km | Testafstand vast; testtijd variabel |
| 41 | 64,91 km | Buitenvariant en optionele steadyversnelling blijven uitleg |
| 42 | 68,88 km | Inclusief 6,96 km extra check |
| 43 | 67,73 km | Langste training 30,36 km |
| 44 | 53,65 km | T2 berekend als 47 minuten |
| 45 | 47,03 km | Beschermde taper |
| 46 | 37,72 km | Beschermde taper |
| 47 | 58,15 km | 15,95 km voorbereiding + 42,195 km marathon |

Schema, dashboard en beide kilometergrafieken lezen dezelfde centrale berekening.
De app presenteert doorgaans een decimaal; dit rapport gebruikt er twee.
W38/W42 tellen ongeronde onderdelen op: los afgeronde onderdelen kunnen samen
0,01 km verschillen van het afgeronde totaal. Geen inhoudelijk afstandsverschil.

## Gewijzigde bestanden

- `app.js`: data-integratie, veilige migratie, racevoeding, tests, Focus Mode en volglogica.
- `style.css`: semantische kleuren, kaartspacing, cockpit/queue-kolommen en uitzonderingen voor tekstwaarden.
- `training-data.js`: volledig opnieuw gegenereerd uit de nieuwe bron.
- `scripts/generate-marathon-plan.mjs`: directe bronparser, berekening en validatie.
- `scripts/previous-workouts-v5.json`: historische protocolmomentopname voor databehoud, geen actieve dataset.
- `marathon-schema-3u30-definitief-2026.md`: identieke lokale kopie van het aangeleverde bestand.
- `index.html`: nieuwe assetversies, oude correctielaag verwijderd, opslagwaarschuwing uitsluitend bij fouten.
- `service-worker.js` en `push-server/api/health.js`: versie bijgewerkt.
- `tests/app-shell.test.mjs`, `tests/plan-model.test.mjs`, `tests/pwa-config.test.mjs`: regressie- en broncontroles.
- `README.md` en dit rapport: actuele bron, publicatie en beperkingen.
- `training-plan-v5.js`: verwijderd; niet meer geladen.

## Bewust behouden

Navigatie Week/Schema/Informatie, klikbare Marathon 3:30-titel, dashboard,
countdown, voltooiingsacties, stabiele trainings-ID's, opgeslagen instellingen,
meldingsinstellingen per training, pushbackend-architectuur, manifestscope,
relatieve GitHub Pages-paden en netwerkgestuurde updateaanpak blijven bestaan.
Geen framework toegevoegd. Geen localStorage.clear of verwijdering van IndexedDB.
De app gebruikt localStorage; er is geen actieve IndexedDB-opslaglaag.

Actieve timers blijven, zoals voorheen, in geheugen. Een volledige paginaherlading
begint geen oude timer automatisch opnieuw. Opgeslagen training- en testdata blijven wel staan.
Gewijzigde testprotocollen worden gearchiveerd in de opgeslagen data, niet als
vergelijkbare uitslag hergebruikt. Deze archieven hebben geen nieuwe aparte UI gekregen.

## Uitgevoerde controles

- 42/42 automatische tests geslaagd, inclusief zes pushservertests.
- JavaScript-syntax gecontroleerd; opnieuw genereren levert byte-identieke trainingsdata op.
- Aangeleverde Markdown en lokale kopie zijn byte-identiek.
- Alle weken en 50 sessies onafhankelijk vergeleken; 258 expliciete hellingen.
- 24 snelheid/helling-combinaties op zes breedtes: 144 controles zonder overlap of overflow.
- Alle 50 trainingsdetails op 390 px geopend; alle 50 gewone loopbandviews na correctie op 375 px zonder overflow.
- 24 hoofdnavigatiecontroles op zes breedtes zonder overflow of lege pagina's.
- Timerblokgrenzen, live cockpit, handmatig scrollen, auto-follow en sticky offset getest.
- Pauze, hervatten, stoppen en Terug naar NU daadwerkelijk in de browser bediend.
- Racevoeding ingevuld en na herladen teruggevonden; testinvoer daarna via de UI leeggemaakt.
- Voltooiing aangevinkt, herladen en in dashboard teruggevonden; testvoltooiing daarna ongedaan gemaakt.
- Migratie, historische kilometers, compatibele fitnessresultaten, gewijzigde protocollen, corrupte JSON en opslagquota getest met geisoleerde testopslag.
- Geen consolefouten tijdens normale navigatie. Browsercontroles gebruiken alleen de lokale testapp, niet de opslag op de iPhone.

## Nog op een fysieke iPhone

1. Na publicatie versie 2026.09.02-1 in Safari en het bestaande beginscherm-icoon vergelijken.
2. Pushbackend en publieke sleutel configureren, dan echte 30/45-secondenmeldingen bij vergrendeld scherm testen.
3. Geluid, scherm wakker houden, schermvergrendeling en terugkeren naar de app testen.
4. Safe areas en leesbaarheid op de daadwerkelijke loopband controleren.

Er is niet naar GitHub Pages gedeployed. De lokale preview draait op
`http://127.0.0.1:4173/`. De precieze uploadlijst staat onder Publiceren in README.md.
