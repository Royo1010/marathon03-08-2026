# FINAL V6 - Implementatiecontrole

Build: **2026.10.05-3**. Bron: `marathonschema_Roy_FINAL_V6_SUB4_2026-10-05.md`.
De bronkopie is byte-identiek aan het aangeleverde Desktop-bestand.

## Schema

34 unieke sessies: 27 gewone runs, 6 fietsritten en de marathon.
33 tijdprotocollen; marathon eindigt bij de officiele finish.
Alle bron-tabelrijen, cues, duren, repeats en instructievelden zijn onafhankelijk
vergeleken. Herstel blijft na de laatste herhaling aanwezig.

| Week | Loopsessies | Rentijd | Wandelen | Fiets | MP |
|---|---:|---:|---:|---:|---:|
| 41 | 185 | 164 | 21 | 60 | 0 |
| 42 | 200 | 200 | 0 | 60 | 15 |
| 43 | 245 | 245 | 0 | 50 | 24 |
| 44 | 275 | 275 | 0 | 45 | 30 |
| 45 | 275 | 275 | 0 | 40 | 30 |
| 46 | 170 | 170 | 0 | 30 | 12 |
| 47 voor race | 70 | 70 | 0 | 0 | 6 |

Minuten, niet kilometerquota. Race telt apart. Loopbandstartbereiken worden
niet omgezet in een nieuw verplicht afstandsdoel.

## Uitgevoerde Controles

- 39 automatische tests geslaagd; 0 mislukt.
- Alle 34 sessies werkelijk geopend in de browser.
- Alle 27 loopbandtijdlijnen gecontroleerd: 126 blokken, juiste start/eindtijden en 0% helling.
- Alle hoofd- en naslagpagina's gecontroleerd op 375, 390, 430 en 1280 px: geen horizontale overflow.
- Actieve/ gepauzeerde Focus Mode gecontroleerd op 375, 390, 393, 430 en 1280 px: snelheidsranges passen.
- Garmin / Loopband blijven aparte uitvoeringskeuzes voor gewone runs.
- Timer start/pauze/hervatten/stop en switchmeldingen getest; completion wordt niet automatisch gewijzigd.
- Backup-export, kopieerfallback, ongeldige import, geldige importbevestiging en annuleren gecontroleerd.
- Normaal herladen en cache-busting via Data & app gecontroleerd; geen reset.
- Autosave/refresh, V5-historiemigratie, herhaalde migratie, corrupte JSON en archiefbehoud getest.
- Alle doelen en actieve pagina's gebruiken V6/sub-4; oude kleurregels veranderen het schema niet.
- Geen browser-console-errors bij de uitgevoerde navigatie en timercontrole.
- Manifestpaden, netwerkgestuurde service worker, versieconsistentie en pushlogica getest.
- Bronreproductie en JavaScript-syntaxcontrole geslaagd.

De waarschuwing tijdens de automatische corruptietest is verwacht: bewust
ongeldige JSON blijft onaangeroerd, met schrijven geblokkeerd en raw export beschikbaar.

## Bewuste Vereenvoudigingen

Statistieken, grafieken en logformulieren na trainingen zijn verwijderd op
verzoek van Roy. Ook voeding blijft read-only. Eenvoudig afvinken blijft voor
programmavoortgang. Oude notities, tests, voeding en completion zijn historisch
behouden; oude protocol-IDs maken nieuwe V6-trainingen niet voltooid.
Navigatie: Vandaag / Week / Schema / Meer. Meer bevat onder andere Fases,
Voeding & herstel, Informatie en zelfstandig Data & app.

## Handmatige Vervolgcontrole

Niet op een fysieke iPhone getest: Home Screen-installatie/update, Screen Wake
Lock, Garmin-synchronisatie, en daadwerkelijke Lock Screen-pushbezorging.
De bestaande pushserver moet opnieuw worden gepubliceerd om V6-snelheidsranges
ook in servermeldingen te tonen. GitHub Pages is lokaal gecontroleerd via
relatieve paden; publicatie naar de live website is niet uitgevoerd.

Preview: `test-artifacts/v6-today-mobile.jpg`.
