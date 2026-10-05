# FINAL V8: implementatie en controles

Build: **2026.10.05-4**. Dataversie: **13**.
Bron: `marathonschema_Roy_FINAL_V8_350_GARMIN_OUTDOOR_2026-10-05.md`.
De projectkopie is byte-identiek aan het aangeleverde Desktop-bestand.

## Gecontroleerde inhoud

- A: 3:50:00. B: PR onder 3:55:50. C: sub 4:00.
- Doeltempo 5:27/km; Garmin MP 5:24–5:30/km.
- 7 weken, 33 sessies: 31 gewone runs, 1 fietsrit en 1 marathon.
- 32 tijdprotocollen zijn onafhankelijk met alle brontabelrijen vergeleken.
- 138 loopbandblokken plus 3 fietsblokken; tijden, herhalingen en herstel kloppen.
- Alle gewone loopbandblokken hebben expliciet 0% helling.
- Vanaf W42 is easy zelfgestuurd op praattempo/RPE 2–3, zonder verzonnen snelheid.
- W41 behoudt de opgegeven loopbandranges. MP is 11,0 km/u.
- Voorkeursdatums, vrije dagkeuze, spreiding en taper zijn overgenomen.
- Geen standaard fietsritten vanaf W42. Laatste lange duur uiterlijk 8 november.
- Race-tussentijden, A/B/C-grenzen en het volledige voedingsplan zijn gecontroleerd.
- Kilometerwaarden blijven aannames, geen verplichte afstandsdoelen.

| Week | Loopsessietijd | Rentijd | Wandelen | Fietsen | MP | Lange duur |
|---|---:|---:|---:|---:|---:|---|
| W41 | 185 | 164 | 21 | 60 | 0 | 65 min run/walk |
| W42 | 240 | 240 | 0 | 0 | 24 | 95 min |
| W43 | 295 | 295 | 0 | 0 | 30 | 120 min |
| W44 | 320 | 320 | 0 | 0 | 40 | 145 min |
| W45 | 330 | 330 | 0 | 0 | 40 | 165 min |
| W46 | 195 | 195 | 0 | 0 | 20 | 80 min |
| W47 voor race | 65 | 65 | 0 | 0 | 8 | Marathon apart |

Alle tijdkolommen zijn minuten. W47 telt de marathon niet als korte trainingsrun.

## Gegevensbehoud

De hoofdkey blijft `marathon330TrainingAppData_v1`. Geen reset uitgevoerd.
Oudere logs, vinkjes, notities, tests, voeding en plankeuzes blijven in de
historie staan. Persoonlijke instellingen en pushregistratie blijven behouden.

Alleen W41-protocollen die onafhankelijk identiek zijn bevonden aan V6 nemen
het oude vinkje mee. De app noemt dit **Al uitgevoerd (V6)**. De originele
uitvoering blijft historisch; er wordt geen nieuwe V8-uitvoering verzonnen.
Inhoudelijk gewijzigde oude trainingen vinken nieuwe V8-trainingen niet af.

Getest: idempotente migratie, oude archiefvormen, direct bewaren, refresh,
navigatie, importvalidatie, bevestiging en annuleren. Corrupte JSON wordt niet
overschreven; de Data-pagina blijft toegankelijk en schrijven wordt geblokkeerd.
In de bestaande browser zijn 6 historische archieven behouden en is de actuele
V8-backup via de tekstfunctie gecontroleerd. Kopieren werd door de UI bevestigd.

## Logo en publicatie

Nieuw blauw/teal kalenderlogo met hardloper in `icon.svg`, gebruikt in de header.
Daaruit zijn de lokale iPhone- en PWA-iconen gemaakt: `apple-touch-icon.png`,
`app-icon-192.png` en `app-icon-512.png`. Alle iconverwijzingen zijn versioned.

Relatieve manifest- en assetpaden zijn getest voor GitHub Pages. De bestaande
netwerkgestuurde service worker en oude-appcache-opruiming blijven behouden.
De worker is in de lokale browser actief. Geen gebruikersopslag wordt gewist.

De bestaande optionele pushserver is aangepast voor wissels tussen praattempo
en numerieke MP. Voor Lock Screen-push moet ook deze serverupdate worden
gepubliceerd; zonder serverupdate werken nieuwe V8-pushwissels niet correct.

## Uitgevoerde tests

`node --test tests/*.test.mjs push-server/tests/*.test.mjs`:
**47 geslaagd, 0 mislukt**. Syntaxcontrole van app en dataset geslaagd.
De waarschuwing in de corrupte-JSON-test is bewust opgewekt; normale navigatie
leverde in de browser geen console errors op.

In de daadwerkelijke lokale browser:

- Alle 7 weken en alle 33 trainingsdetails geopend en gecontroleerd.
- Alle 31 gewone loopbandweergaven, met 138 cumulatieve blokken gecontroleerd.
- Actieve Focus Mode gestart; praattempo, MP, helling en verborgen navigatie getest.
- Breedtes 375, 390, 393 en 430 px: geen horizontale overflow of botsende waarden.
- Schema, marathonoverzicht, Fases, voeding, Informatie en Data gecontroleerd.
- Alle 7 informatie-accordions open op 375 px, inclusief 9 tabellen: geen overflow.
- Backup als tekst geopend en gecontroleerd; diagnose toont build en vaste key.
- Geen opgeslagen completion tijdens browsertests gewijzigd.

Timerpauze, hervatten, stop en de actuele cockpitwissel easy/MP/easy zijn ook
met een gecontroleerde klok in geisoleerde tests gecontroleerd. De mobiele
voorvertoning staat in `test-artifacts/v8-marathon-mobile.jpg`.

## Resterende toestelcontroles

Er is niet live naar GitHub Pages of de optionele pushserver gepubliceerd.
Een fysieke iPhone-test van het beginschermicoon, de actuele build na deployment,
Wake Lock, Garmin Connect-invoer/synchronisatie en Lock Screen-push blijft nodig.
De bestaande downloadknop gaf in de browser een gestart-status, maar de
downloadgebeurtenis kon niet worden vastgelegd. De JSON-export en tekstfallback
zijn wel gecontroleerd; de daadwerkelijke bestanddownload op iPhone nog niet.
