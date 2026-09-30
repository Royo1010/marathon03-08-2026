# Marathonschema Roy — FINAL V4 — Garmin / Outdoor Edition
## 3:30 of sneller · zelfde trainingsbelasting, nieuwe uitvoeringslaag

**Geldig vanaf:** woensdag 30 september 2026  
**Gebaseerd op:** FINAL V3, inhoudelijke update 25 september 2026  
**Marathon:** zondag 22 november 2026  
**Doel:** **3:30:00 of sneller**  
**Exact vereist gemiddelde:** **12,0557 km/u = 4:58,61/km**  
**Praktische MP:** buiten circa **4:58–4:59/km** · loopband **12,1 km/u**

> **Kernidee V4:** de trainingsinhoud van V3 blijft in principe intact. De grote verandering is de uitvoering: **Outdoor/Garmin is voortaan de standaard**, met de Polar H9 als primaire hartslagbron. Iedere training houdt daarnaast een volledig bruikbaar **loopbandalternatief**.

---

# 1. Wat V4 verandert ten opzichte van V3

- **Buiten lopen is de standaardmodus.** De loopband blijft beschikbaar als volwaardig alternatief.
- Iedere training heeft twee uitvoeringen: **Outdoor / Garmin** en **Loopband**.
- De Outdoor/Garmin-versie is geschreven als een programmeerbare workout: stapduur, targettype, target en cue.
- **Easy, recovery en Zone 2** worden buiten primair door **hartslag + praattest/RPE** gestuurd, niet door een vaste snelheid.
- **Marathonpace en controlled-fast** worden buiten primair door **tempo** gestuurd; hartslag is controle-informatie.
- **Korte strides** krijgen geen strakke GPS-pace-alert: de blokken zijn te kort om instant pace zinvol als primaire sturing te gebruiken.
- De oorspronkelijke V3-belasting, weekvolumes, MP-minuten, long runs, kracht, fueling en taper blijven behouden.
- De app moet per training met één oogopslag laten zien wat je in Garmin Connect moet invoeren én wat je op de loopband moet instellen.

---

# 2. Garmin-regels voor de app

## 2.1 Target-hiërarchie

| Trainingstype | Primaire Garmin-target | Secundair | Waarom |
|---|---|---|---|
| Recovery | HR Zone 1–lage Zone 2 | RPE 2–3 | herstel boven snelheid |
| Easy / Zone 2 | **HR Zone 2** | praattest, RPE 3–4 | fysiologische belasting is het doel |
| Lange easy | **HR Zone 2** | RPE 3–4, laat evt. 5 | gecontroleerde duur |
| Marathonpace | **Pace 4:53–5:03/km** | HR-trend + RPE | specifiek wedstrijdritme |
| Controlled fast | **Pace 4:41–4:48/km** | RPE 7–8 | snelheidsreserve, niet maximaal |
| Strides 20–30 sec | **geen pace-target** | techniek / gevoel | GPS-pace reageert te traag voor zo’n kort blok |
| Warming-up / cooldown | Vrij / easy | HR/RPE | niet onnodig sturen |

## 2.2 Belangrijk: hartslagzones eerst valideren

De **Polar H9** geeft een zeer bruikbare hartslagmeting, maar de sensor bepaalt niet automatisch jouw correcte fysiologische zones. Daarom geldt:

1. Tot de zones zijn gevalideerd, blijven **praattest + RPE** de veiligheidscheck.
2. In de app mag bij Zone-2-trainingen al staan: **Target = HR Zone 2**.
3. Als Garmin-zones nog niet betrouwbaar zijn ingesteld, gebruik buiten tijdelijk **Geen target / Easy** en laat Garmin de hartslag registreren.
4. Zodra de zones zijn gevalideerd, kan de Garmin-workout direct op **Heart Rate Zone 2** worden geprogrammeerd; de app hoeft dan geen los bpm-getal te hardcoden.
5. Bij warmte, wind, hellingen of vermoeidheid mag pace sterk variëren zolang de bedoelde HR/RPE-zone behouden blijft.

## 2.3 Wat de app per training moet tonen

Bij iedere training moet de app minimaal tonen:

- **Outdoor / Garmin** als standaardtab;
- totale geplande duur en schema-afstand;
- elke workoutstap in de juiste volgorde;
- per stap: **duur/afstand**, **targettype** (HR / pace / vrij), **targetrange**, en een korte cue;
- herhaalblokken duidelijk als `x keer`;
- een compacte regel **“Programmeer in Garmin als:”** die exact dezelfde stappen samenvat;
- **Loopband** als tweede tab met tijd, km/u en helling per stap;
- RPE, fueling, schoenen, kracht en herstelnotities waar relevant.

De gebruiker moet de Garmin-workout kunnen instellen **zonder zelf km/u naar min/km te hoeven omrekenen en zonder te hoeven raden welke target bij welk blok hoort**.

---

# 3. Trainingszones V4

| Type | Outdoor / Garmin | Loopbandreferentie | RPE | Praktische regel |
|---|---|---:|---:|---|
| Herstel | HR Zone 1–lage Zone 2 | 9,4–9,8 km/u | 2–3 | zeer ontspannen |
| Easy / Zone 2 | **HR Zone 2** | 10,0–10,5 km/u | 3–4 | volledige zinnen mogelijk |
| Lange easy | **HR Zone 2** | 10,3–10,8 km/u | 3–4, laat evt. 5 | gecontroleerd |
| Marathonpace | **4:53–5:03/km**; mik 4:58–4:59/km | **12,1 km/u** | 5–7 | doelritme |
| Controlled fast | **4:41–4:48/km** | 12,6–12,8 km/u | 7–8 | stevig, niet maximaal |
| Korte versnelling | geen strakke pace-alert | ~13,0 km/u | kort | soepel, nooit sprinten |


> Outdoor easy-pace is bewust **geen vast getal** meer. Op rustige dagen bepaalt de bedoelde inspanning het tempo; de loopbandsnelheden blijven als alternatief/referentie bestaan.
>
> **Afstanden in V4:** de weekkilometers en sessie-afstanden blijven de **V3-referentie/raming**. Bij tijd + HR gestuurde buitentrainingen is de **geplande tijd en intensiteit bindend**; de werkelijk gelopen afstand mag dus iets hoger of lager uitvallen. Daardoor hoeft het gemeten buitenweekvolume niet exact op twee decimalen gelijk te zijn aan V3.

---

# 4. Loopbandmodus blijft volledig behouden

- **0% helling:** standaard, zoals in V3.
- **0,5%:** alleen wanneer daar bewust een trainingsdoel voor is.
- **1%:** niet automatisch gebruiken als “buitencorrectie”.
- Alle oorspronkelijke V3-snelheden blijven in de trainingsblokken hieronder behouden.
- De gebruiker mag een buitentraining op een willekeurige dag volledig vervangen door de bijbehorende loopbandversie als omstandigheden dat wenselijk maken.
- Geen automatische kilometerkorting of extra kilometers wegens de gekozen modus.

---

# 5. Flexibiliteit en herstel

## W40–W44
De **volgorde van sessies** is belangrijker dan de exacte weekdag. Bij weken met vijf trainingen blijft het standaardpatroon: kwaliteit → easy → middellange duur → recovery → long run. Een praktisch patroon is di – wo – do – za – zo.

## W45–W47
Vanaf maandag 2 november liggen de dagen vast. De taper en afstand tot de marathon krijgen prioriteit boven flexibiliteit.

## Zondag → dinsdag-regel
Na een lange zondagse sleuteltraining is maandag volledige rust. De dinsdagse kwaliteitstraining gaat alleen door als herstel normaal is, er geen lokale pijn is en warming-up/looptechniek normaal voelen. Zo niet: kwaliteit 24 uur verschuiven en een easy-run laten vervallen of later plaatsen; **niet comprimeren**.

## Oranje / rood
- Oranje: twee easy-runs opvallend zwaar, slechtere slaap, meerdere dagen zware benen, MP vroeg RPE 8, terugkerende lokale irritatie → eerst recovery-run schrappen, daarna tweede krachttraining, daarna 10–15 min van middellange Zone 2.
- Rood: scherpe/toenemende lokale pijn, manken/aangepast looppatroon, duidelijke prestatieval → sleuteltraining stoppen of easy maken; gemiste kilometers niet inhalen.

---

# 6. Krachttraining

**Sessie A — 25–35 min:** Bulgarian split squat 2×5–6/been; Romanian deadlift 2×5–6; standing calf raise 2×8. Circa 2–3 RIR.

**Sessie B — 15–20 min:** seated calf raise 2×10–12; Bulgarian split squat licht 1×6/been; side plank 2×20–30 sec/zijde. Circa 3–4 RIR.

**A-light / B-light:** minder sets/volume, circa 3–4 RIR. Altijd na het lopen, nooit ervoor; geen spierfalen; looptraining gaat voor. W46–W47 geen beenkracht.

| Week | Kracht |
|---:|---|
| W40 | A-light |
| W41 | A + B |
| W42 | A + B |
| W43 | A-light + B-light |
| W44 | A-light |
| W45 | A-light — laatste beenkrachtsessie |
| W46 | geen |
| W47 | geen |

---

# 7. Voeding en schoenen

- Key-runs: circa **80 g koolhydraten/u**.
- Gebruik dezelfde producten en timing als voor de marathon: **SiS Beta Fuel Neutral** + **Bulk Electrolytes** volgens het geplande drink-/elektrolytenplan.
- Bij 40 g koolhydraten per Beta Fuel-gel komt 80 g/u praktisch neer op circa één gel per 30 min.
- Volledige voedingsrepetitie verplicht bij W42 MP-under-fatigue, W43 30K, W44 Key Marathon Confidence en W45 long run met MP.
- Beoogde marathonschoenen bewust gebruiken bij W43 MP Confidence #3 en W44 Key Marathon Confidence; W45 alleen indien nog een laatste check nodig is.

---

# 8. Weekoverzicht FINAL V4

| Week | Type | Km | Looptijd | MP-min | Belangrijkste prikkel |
|---:|---|---:|---:|---:|---|
| 39 | Texel / build | 53,23 | ~5:02 | 24 | uitgevoerd vóór V4 |
| 40 | Recovery / rebuild | **45,94** | 4:35 | **0** | herstel + aerobe herstart |
| 41 | Overload 1 | **65,42** | 6:15 | **45** | MP Confidence #1 + Z2 + controlled fast |
| 42 | Overload 2 | **72,22** | 6:55 | **40** | MP under fatigue + extra Z2 |
| 43 | PIEKWEEK | **77,73** | 7:25 | **50** | outdoor MP + 30K + extra Z2 |
| 44 | Key marathon specific | **68,28** | 6:30 | **70** | 2 × 35 min MP under fatigue |
| 45 | Taper 1 — dagen vast | **51,75** | 4:55 | **60** | laatste stevige MP-bevestiging |
| 46 | Taper 2 — dagen vast | **35,07** | 3:25 | **31** | frisheid + ritme |
| 47 | Marathonweek — dagen volledig vast | **14,01 vóór race** | 1:25 vóór race | **8** | frisheid + zaterdag-shakeout |

**Totaal W39–W47 vóór marathon:** circa **483,65 km**.  
**Inclusief marathon:** circa **525,85 km**.

---

# 9. WEEK 39 — historisch / afgerond vóór V4

Week 39 blijft voor volume- en trainingsgeschiedenis onderdeel van het schema, maar wordt niet opnieuw geprogrammeerd. De Halve Marathon Texel van 27 september is uitgevoerd. V4 verandert deze afgeronde week niet.

---

# WEEK 40 — Recovery / rebuild
## 28 september t/m 4 oktober 2026

**Weekvolume:** 45,94 km  
**Looptijd:** 4:35  
**Looptrainingen:** 4  
**Planning:** flexibel; behoud volgorde en herstelregels

## Training 1 — Herstel
**7,14 km · 45 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / zeer rustig** | RPE 2–3; hartslag rustig laten oplopen |
| 35 min | **HR Zone 1–lage Zone 2** | zeer ontspannen; geen pace-doel |
| 5 min | **Vrij / uitlopen** | zeer rustig |

**Programmeer in Garmin als:** `5 min [Vrij / zeer rustig] → 35 min [HR Zone 1–lage Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 35 min | **9,6 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

- Doel: herstel van Texel.
- Als de benen nog duidelijk vermoeid zijn: tempo negeren en uitsluitend op herstelgevoel lopen.

## Training 2 — Aerobe herstart
**10,89 km · 65 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | RPE 2–3 |
| 55 min | **HR Zone 2** | volledige zinnen; pace secundair |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / easy] → 55 min [HR Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 55 min | **10,2 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

- Kracht: A-light na het lopen.
- Tot hartslagzones gevalideerd zijn: gebruik praattest + RPE 3–4 en laat Garmin de HR alleen registreren.

## Training 3 — Easy + optionele strides
**9,20 km · 55 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig |
| 33 min | **HR Zone 2** | RPE 3–4 |
| 4 × 20 sec | **Geen pace-target** | ontspannen versnellen; techniek en souplesse |
| na elke stride 70 sec | **Vrij / herstel** | zeer rustig joggen |
| 6 min | **HR Zone 2** | easy |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min easy → 33 min HR Z2 → REPEAT 4× [20 sec stride OPEN + 70 sec easy herstel] → 6 min HR Z2 → 5 min cooldown`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 33 min | **10,2 km/u** | 0% |
| 4 × 20 sec | **circa 13,0 km/u** | 0% |
| na elke stride 70 sec | **9,5 km/u** | 0% |
| 6 min | **10,2 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

- OPTIONEEL — alleen bij volledig herstel van Texel.
- Strides zijn géén sprint en géén conditietest.
- Als niet volledig hersteld: vervang strides + herstel door easy lopen zodat de totale training 55 min blijft.

## Training 4 — Lange easy
**18,71 km · 110 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig starten |
| 100 min | **HR Zone 2** | gecontroleerd; volledige zinnen; pace vrij |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / easy] → 100 min [HR Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 100 min | **10,3 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

- Voeding: rustig oefenen; geen performance-test.
- Geen fast finish.

---

# WEEK 41 — Overload 1
## 5 t/m 11 oktober 2026

**Weekvolume:** 65,42 km  
**Looptijd:** 6:15  
**Looptrainingen:** 5  
**Planning:** bij voorkeur di – wo – do – za – zo

## Training 1 — MP CONFIDENCE #1
**13,03 km · 70 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 10 min | **Vrij / easy** | warming-up |
| 5 min | **Pace 5:20–5:45/km** | geleidelijk opbouwen |
| 45 min | **Pace 4:53–5:03/km** | marathonpace; mik rond 4:58–4:59/km |
| 10 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `10 min [Vrij / easy] → 5 min [Pace 5:20–5:45/km] → 45 min [Pace 4:53–5:03/km] → 10 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 10 min | **9,5 km/u** | 0% |
| 5 min | **10,5 km/u** | 0% |
| 45 min | **12,1 km/u** | 0% |
| 10 min | **9,0 km/u** | 0% |

- RPE: eerste helft 5–6; einde bij voorkeur maximaal 7.
- HR is hier controle-informatie, niet de primaire target.
- Kracht: Sessie A na het lopen.

## Training 2 — Easy
**7,55 km · 45 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig |
| 35 min | **HR Zone 2** | praattempo; pace vrij |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / easy] → 35 min [HR Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 35 min | **10,3 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

## Training 3 — Middellange Zone 2 + controlled fast
**circa 15,80 km · 90 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig |
| 45 min | **HR Zone 2** | aeroob; pace vrij |
| 3 × 3 min | **Pace 4:41–4:48/km** | controlled fast; stevig, niet maximaal |
| tussen blokken 2 min | **Vrij / herstel** | zeer rustig joggen |
| 22 min | **HR Zone 2** | terug naar gecontroleerd aeroob |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min easy → 45 min HR Z2 → 2× [3 min @4:41–4:48/km + 2 min easy] → 3 min @4:41–4:48/km → 22 min HR Z2 → 5 min cooldown`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 45 min | **10,5 km/u** | 0% |
| 3 × 3 min | **12,6–12,7 km/u** | 0% |
| tussen blokken 2 min | **9,5 km/u** | 0% |
| 22 min | **10,5 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

- Controlled-fast RPE circa 7; maximaal ongeveer 8 aan het einde.
- Kracht: Sessie B na het lopen.
- De totale trainingsduur blijft 90 min.

## Training 4 — Recovery
**4,74 km · 30 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / zeer rustig** | RPE 2 |
| 20 min | **HR Zone 1–lage Zone 2** | herstel; geen pace-doel |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / zeer rustig] → 20 min [HR Zone 1–lage Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 20 min | **9,6 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

## Training 5 — Lange rustige duur
**24,29 km · 140 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig starten |
| 130 min | **HR Zone 2** | gelijkmatig; geen fast finish |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / easy] → 130 min [HR Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 130 min | **10,5 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

- Voeding oefenen, maar nog geen verplichte volledige 80 g/u-repetitie.

---

# WEEK 42 — Overload 2
## 12 t/m 18 oktober 2026

**Weekvolume:** 72,22 km  
**Looptijd:** 6:55  
**Looptrainingen:** 5  
**Planning:** bij voorkeur di – wo – do – za – zo

## Training 1 — 4 × 6 min controlled fast
**12,52 km · 70 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 10 min | **Vrij / easy** | warming-up |
| 5 min | **Pace 5:20–5:45/km** | opbouw |
| 4 × 6 min | **Pace 4:41–4:48/km** | controlled fast |
| tussen blokken 3 min | **Vrij / herstel** | zeer rustig joggen |
| 12 min | **HR Zone 2** | easy/aeroob |
| 10 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `10 min easy → 5 min opbouw → 3× [6 min @4:41–4:48/km + 3 min easy] → 6 min @4:41–4:48/km → 12 min HR Z2 → 10 min cooldown`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 10 min | **9,5 km/u** | 0% |
| 5 min | **10,5 km/u** | 0% |
| 4 × 6 min | **12,7 km/u** | 0% |
| tussen blokken 3 min | **9,5 km/u** | 0% |
| 12 min | **10,3 km/u** | 0% |
| 10 min | **9,0 km/u** | 0% |

- RPE circa 7; maximaal 8 laat.
- Kracht: Sessie A na het lopen.

## Training 2 — Easy
**7,55 km · 45 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig |
| 35 min | **HR Zone 2** | praattempo |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / easy] → 35 min [HR Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 35 min | **10,3 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

## Training 3 — Middellange Zone 2 — VERLENGD
**17,29 km · 100 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig |
| 90 min | **HR Zone 2** | stabiel aeroob; pace vrij |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / easy] → 90 min [HR Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 90 min | **10,5 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

- Kracht: Sessie B na het lopen.

## Training 4 — Recovery
**5,54 km · 35 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / zeer rustig** | RPE 2 |
| 25 min | **HR Zone 1–lage Zone 2** | herstel |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / zeer rustig] → 25 min [HR Zone 1–lage Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 25 min | **9,6 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

## Training 5 — MP-UNDER-FATIGUE CONFIDENCE #2
**29,32 km · 165 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 10 min | **Vrij / easy** | warming-up |
| 100 min | **HR Zone 2** | lange easy voorbelasting |
| 40 min | **Pace 4:53–5:03/km** | marathonpace; mik rond 4:58–4:59/km |
| 5 min | **HR Zone 2 / easy** | afronden |
| 10 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `10 min [Vrij / easy] → 100 min [HR Zone 2] → 40 min [Pace 4:53–5:03/km] → 5 min [HR Zone 2 / easy] → 10 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 10 min | **9,5 km/u** | 0% |
| 100 min | **10,4 km/u** | 0% |
| 40 min | **12,1 km/u** | 0% |
| 5 min | **10,0 km/u** | 0% |
| 10 min | **9,0 km/u** | 0% |

- Confidence-doel: na 110 min lopen nog 40 min onafgebroken doeltempo dragen.
- Voeding: volledige repetitie, circa 80 g koolhydraten/u.
- Outdoor is vanaf V4 de standaard; loopband blijft gelijkwaardig alternatief.

---

# WEEK 43 — PIEKWEEK
## 19 t/m 25 oktober 2026

**Weekvolume:** 77,73 km  
**Looptijd:** 7:25  
**Looptrainingen:** 5  
**Planning:** bij voorkeur di – wo – do – za – zo

## Training 1 — OUTDOOR MP CONFIDENCE #3
**circa 14,04 km · 75 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 10 min | **Vrij / easy** | warming-up |
| 5 min | **Pace 5:20–5:45/km** | opbouw |
| 50 min | **Pace 4:53–5:03/km** | MP; zelfstandig ritme dragen |
| 10 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `10 min [Vrij / easy] → 5 min [Pace 5:20–5:45/km] → 50 min [Pace 4:53–5:03/km] → 10 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 10 min | **9,5 km/u** | 0% |
| 5 min | **10,5 km/u** | 0% |
| 50 min | **12,1 km/u** | 0% |
| 10 min | **9,0 km/u** | 0% |

- RPE einde idealiter maximaal 7.
- Schoenen: beoogde marathonschoenen.
- Kracht: A-light na het lopen.

## Training 2 — Easy
**8,41 km · 50 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig |
| 40 min | **HR Zone 2** | praattempo |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / easy] → 40 min [HR Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 40 min | **10,3 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

## Training 3 — Middellange Zone 2 — VERLENGD
**18,17 km · 105 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig |
| 95 min | **HR Zone 2** | stabiel aeroob |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / easy] → 95 min [HR Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 95 min | **10,5 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

- Kracht: B-light na het lopen.

## Training 4 — Recovery
**5,54 km · 35 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / zeer rustig** | RPE 2 |
| 25 min | **HR Zone 1–lage Zone 2** | herstel |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / zeer rustig] → 25 min [HR Zone 1–lage Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 25 min | **9,6 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

## Training 5 — 30K CONFIDENCE RUN
**31,58 km · 180 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig starten |
| 170 min | **HR Zone 2** | drie uur gecontroleerd; geen snelle finish |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / easy] → 170 min [HR Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 170 min | **10,6 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

- Absolute grens: 180 min; niet verlengen voor een rond getal.
- Voeding: circa 80 g koolhydraten/u met beoogd marathonplan.
- Doel is duur en voedingsrepetitie, niet pace bewijzen.

---

# WEEK 44 — Key marathon specific
## 26 oktober t/m 1 november 2026

**Weekvolume:** 68,28 km  
**Looptijd:** 6:30  
**Looptrainingen:** 5  
**Planning:** bij voorkeur di – wo – do – za – zo

## Training 1 — 3 × 4 min controlled fast
**9,51 km · 55 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 10 min | **Vrij / easy** | warming-up |
| 5 min | **Pace 5:20–5:45/km** | opbouw |
| 3 × 4 min | **Pace 4:41–4:48/km** | controlled fast |
| tussen blokken 3 min | **Vrij / herstel** | zeer rustig joggen |
| 12 min | **HR Zone 2** | easy |
| 10 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `10 min easy → 5 min opbouw → 2× [4 min @4:41–4:48/km + 3 min easy] → 4 min @4:41–4:48/km → 12 min HR Z2 → 10 min cooldown`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 10 min | **9,5 km/u** | 0% |
| 5 min | **10,5 km/u** | 0% |
| 3 × 4 min | **12,7 km/u** | 0% |
| tussen blokken 3 min | **9,5 km/u** | 0% |
| 12 min | **10,3 km/u** | 0% |
| 10 min | **9,0 km/u** | 0% |

- Kracht: A-light na het lopen.

## Training 2 — Easy
**7,55 km · 45 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig |
| 35 min | **HR Zone 2** | praattempo |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / easy] → 35 min [HR Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 35 min | **10,3 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

## Training 3 — Middellange aerobe duur
**15,54 km · 90 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig |
| 80 min | **HR Zone 2** | stabiel aeroob |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / easy] → 80 min [HR Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 80 min | **10,5 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

## Training 4 — Recovery
**4,74 km · 30 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / zeer rustig** | RPE 2 |
| 20 min | **HR Zone 1–lage Zone 2** | herstel |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / zeer rustig] → 20 min [HR Zone 1–lage Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 20 min | **9,6 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

## Training 5 — KEY MARATHON CONFIDENCE — 2 × 35 min MP under fatigue
**30,94 km · 170 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 10 min | **Vrij / easy** | warming-up |
| 65 min | **HR Zone 2** | easy voorbelasting |
| 35 min | **Pace 4:53–5:03/km** | MP blok 1 |
| 8 min | **Vrij / easy** | herstel jog |
| 35 min | **Pace 4:53–5:03/km** | MP blok 2 |
| 7 min | **HR Zone 2 / easy** | afronden |
| 10 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `10 min [Vrij / easy] → 65 min [HR Zone 2] → 35 min [Pace 4:53–5:03/km] → 8 min [Vrij / easy] → 35 min [Pace 4:53–5:03/km] → 7 min [HR Zone 2 / easy] → 10 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 10 min | **9,5 km/u** | 0% |
| 65 min | **10,4 km/u** | 0% |
| 35 min | **12,1 km/u** | 0% |
| 8 min | **9,8 km/u** | 0% |
| 35 min | **12,1 km/u** | 0% |
| 7 min | **10,0 km/u** | 0% |
| 10 min | **9,0 km/u** | 0% |

- Confidence-doel: 70 min totaal MP nadat al 75 min is gelopen.
- RPE tweede MP-blok maximaal circa 7–7,5; techniek blijft goed.
- Voeding: volledige repetitie, circa 80 g/u.
- Schoenen: beoogde marathonschoenen.

---

# WEEK 45 — Taper 1 — dagen vast
## 2 t/m 8 november 2026

**Weekvolume:** 51,75 km  
**Looptijd:** 4:55  
**Looptrainingen:** 4  
**Planning:** dagen liggen vast

**Vaste rustdagen:** maandag 02-11, vrijdag 06-11, zaterdag 07-11.

## Dinsdag 03-11 — 35 min continue MP
**11,88 km · 65 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 10 min | **Vrij / easy** | warming-up |
| 5 min | **Pace 5:20–5:45/km** | opbouw |
| 35 min | **Pace 4:53–5:03/km** | MP |
| 5 min | **HR Zone 2 / easy** | afronden |
| 10 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `10 min [Vrij / easy] → 5 min [Pace 5:20–5:45/km] → 35 min [Pace 4:53–5:03/km] → 5 min [HR Zone 2 / easy] → 10 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 10 min | **9,5 km/u** | 0% |
| 5 min | **10,5 km/u** | 0% |
| 35 min | **12,1 km/u** | 0% |
| 5 min | **10,3 km/u** | 0% |
| 10 min | **9,0 km/u** | 0% |

- Kracht: A-light na het lopen — laatste beenkrachtsessie van het schema.

## Woensdag 04-11 — Easy
**6,69 km · 40 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig |
| 30 min | **HR Zone 2** | praattempo |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / easy] → 30 min [HR Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 30 min | **10,3 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

## Donderdag 05-11 — Aerobe duur
**11,94 km · 70 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig |
| 60 min | **HR Zone 2** | stabiel aeroob |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / easy] → 60 min [HR Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 60 min | **10,4 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

## Zondag 08-11 — Buiten long run met MP
**21,24 km · 120 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 10 min | **Vrij / easy** | rustig |
| 80 min | **HR Zone 2** | easy / praattempo |
| 25 min | **Pace 4:53–5:03/km** | laatste duidelijke MP-bevestiging buiten |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `10 min [Vrij / easy] → 80 min [HR Zone 2] → 25 min [Pace 4:53–5:03/km] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 10 min | **9,5 km/u** | 0% |
| 80 min | **10,4 km/u** | 0% |
| 25 min | **12,1 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

- Voeding: circa 80 g koolhydraten/u; zelfde producten en timing als racedag.
- Schoenen: trainingsschoenen; raceschoenen alleen als nog een laatste specifieke check nodig is.

---

# WEEK 46 — Taper 2 — dagen vast
## 9 t/m 15 november 2026

**Weekvolume:** 35,07 km  
**Looptijd:** 3:25  
**Looptrainingen:** 4  
**Planning:** dagen liggen vast

**Vaste rustdagen:** maandag 09-11, donderdag 12-11, zaterdag 14-11. **Geen beenkracht.**

## Dinsdag 10-11 — 2 × 8 min MP
**8,69 km · 50 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 10 min | **Vrij / easy** | warming-up |
| 5 min | **Pace 5:20–5:45/km** | opbouw |
| 2 × 8 min | **Pace 4:53–5:03/km** | MP |
| tussen blokken 3 min | **Vrij / easy** | herstel jog |
| 6 min | **HR Zone 2** | easy |
| 10 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `10 min easy → 5 min opbouw → 8 min @4:53–5:03/km → 3 min easy → 8 min @4:53–5:03/km → 6 min HR Z2 → 10 min cooldown`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 10 min | **9,5 km/u** | 0% |
| 5 min | **10,5 km/u** | 0% |
| 2 × 8 min | **12,1 km/u** | 0% |
| tussen blokken 3 min | **9,5 km/u** | 0% |
| 6 min | **10,3 km/u** | 0% |
| 10 min | **9,0 km/u** | 0% |

## Woensdag 11-11 — Easy
**5,75 km · 35 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig |
| 25 min | **HR Zone 2** | licht en ontspannen |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / easy] → 25 min [HR Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 25 min | **10,1 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

## Vrijdag 13-11 — Easy + strides
**6,69 km · 40 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig |
| 23 min | **HR Zone 2** | licht |
| 4 × 30 sec | **Geen pace-target** | soepel en technisch; geen sprint |
| na elke stride 90 sec | **Vrij / herstel** | zeer rustig joggen |
| 4 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min easy → 23 min HR Z2 → REPEAT 4× [30 sec stride OPEN + 90 sec easy herstel] → 4 min cooldown`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 23 min | **10,2 km/u** | 0% |
| 4 × 30 sec | **13,0 km/u** | 0% |
| na elke stride 90 sec | **9,5 km/u** | 0% |
| 4 min | **9,0 km/u** | 0% |

- Strides soepel en technisch; géén sprint.

## Zondag 15-11 — Korte duur + MP
**13,94 km · 80 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 10 min | **Vrij / easy** | rustig |
| 50 min | **HR Zone 2** | easy |
| 15 min | **Pace 4:53–5:03/km** | MP |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `10 min [Vrij / easy] → 50 min [HR Zone 2] → 15 min [Pace 4:53–5:03/km] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 10 min | **9,5 km/u** | 0% |
| 50 min | **10,3 km/u** | 0% |
| 15 min | **12,1 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

- Finish met het gevoel dat er duidelijk reserve over is.

---

# WEEK 47 — Marathonweek — dagen volledig vast
## 16 t/m 22 november 2026

**Weekvolume:** 14,01 vóór race km  
**Looptijd:** 1:25 vóór race  
**Looptrainingen:** 3 vóór race  
**Planning:** dagen liggen volledig vast

**Vaste rustdagen:** maandag 16-11, woensdag 18-11, vrijdag 20-11. **Geen kracht.**

## Dinsdag 17-11 — Easy
**4,88 km · 30 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig |
| 20 min | **HR Zone 2** | licht; liever onderin Zone 2 |
| 5 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min [Vrij / easy] → 20 min [HR Zone 2] → 5 min [Vrij / uitlopen]`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 20 min | **10,0 km/u** | 0% |
| 5 min | **9,0 km/u** | 0% |

## Donderdag 19-11 — 2 × 4 min MP
**5,89 km · 35 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 10 min | **Vrij / easy** | warming-up |
| 5 min | **Pace 5:20–5:45/km** | opbouw |
| 2 × 4 min | **Pace 4:53–5:03/km** | MP |
| tussen blokken 2 min | **Vrij / easy** | herstel |
| 10 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `10 min easy → 5 min opbouw → 4 min @4:53–5:03/km → 2 min easy → 4 min @4:53–5:03/km → 10 min cooldown`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 10 min | **9,5 km/u** | 0% |
| 5 min | **10,5 km/u** | 0% |
| 2 × 4 min | **12,1 km/u** | 0% |
| tussen blokken 2 min | **9,5 km/u** | 0% |
| 10 min | **9,0 km/u** | 0% |

- Doel: MP nog één keer vertrouwd laten voelen; niet bewijzen dat je fit bent.

## Zaterdag 21-11 — SHAKEOUT
**3,24 km · 20 min**

### Outdoor / Garmin — standaard

| Stap | Target in Garmin | Cue |
|---|---|---|
| 5 min | **Vrij / easy** | rustig |
| 7 min | **HR Zone 1–lage Zone 2** | heel licht |
| 3 × 20 sec | **Geen pace-target** | ontspannen versnelling |
| na elke versnelling 1:40 | **Vrij / herstel** | zeer rustig |
| 2 min | **Vrij / uitlopen** | rustig |

**Programmeer in Garmin als:** `5 min easy → 7 min zeer licht → REPEAT 3× [20 sec stride OPEN + 1:40 easy herstel] → 2 min cooldown`

### Loopband — alternatief

| Stap | Snelheid | Helling |
|---|---:|---:|
| 5 min | **9,5 km/u** | 0% |
| 7 min | **9,8 km/u** | 0% |
| 3 × 20 sec | **13,0 km/u** | 0% |
| na elke versnelling 1:40 | **9,5 km/u** | 0% |
| 2 min | **9,0 km/u** | 0% |

- Iedere versnelling ontspannen. Geen vermoeidheid creëren.

---

# MARATHON — zondag 22 november 2026

**42,195 km — doel 3:30 of sneller**  
**Exact gemiddeld vereist:** 12,0557 km/u = 4:58,61/km

## Garmin-racescherm / alerts

- Primair: lap pace / gemiddelde pace gebruiken om rond **4:58–4:59/km** te stabiliseren.
- Geen agressieve instant-pace-reacties op GPS-schommelingen; kijk naar lap/average pace en gevoel.
- Eerste kilometers bewust gecontroleerd; geen tijd bankieren.
- HR is ondersteunende informatie en een drift-/belastingcheck, geen harde racecap zolang de trainingsdata geen gevalideerde cap hebben opgeleverd.
- Alleen in de slotfase versnellen als benen, ademhaling en techniek dat toelaten.

## Voeding

- circa **80 g koolhydraten/u**;
- SiS Beta Fuel Neutral volgens geoefende timing;
- Bulk Electrolytes volgens geoefend drinkplan;
- niets nieuws op racedag.

---

# 10. Marathonpace-volume blijft gelijk aan V3

- W39: 24 min
- W40: 0 min
- W41: 45 min
- W42: 40 min
- W43: 50 min
- W44: 70 min
- W45: 60 min
- W46: 31 min
- W47: 8 min

**Totaal: circa 328 minuten MP = 5 uur 28 min.**

V4 voegt dus **geen extra trainingsbelasting** toe vanwege de Garmin of Polar H9. De technologie wordt gebruikt om de bestaande training beter uit te voeren en beter te meten.

---

# 11. Wat bewust niet verandert

- Geen zesde loopdag.
- Geen extra intervaldag.
- Geen extra VO2max- of thresholdsessie.
- Geen extra MP-sessie.
- Geen langere long runs dan V3.
- Geen extra krachtvolume.
- Geen automatische 1% loopbandhelling.
- Geen gemiste kilometers inhalen.
- Geen taperkilometers toevoegen omdat de benen goed voelen.
- Geen vaste buitenpace opleggen aan Zone 2 alleen omdat de oude loopbandversie een vast km/u-getal had.

---

# 12. App-contract voor de latere Codex-aanpassing

De marathon-app moet V4 niet als één statische tekst behandelen, maar als **één training met twee uitvoeringsmodi**:

## Outdoor / Garmin
- standaard geselecteerd;
- stappen exact overneembaar in Garmin Connect;
- targettype zichtbaar: `Heart Rate`, `Pace` of `Open/Free`;
- targets als zone/range, niet alleen als losse toelichting;
- repeat-structuren expliciet; gebruik waar passend een echte **Repeat**-groep en voorkom een onbedoelde extra herstelstap na het laatste snelle blok;
- compacte “Garmin Setup”-kaart bovenaan;
- bij HR-targets tonen: `Polar H9 / HR Zone 2` zodra borstband gekoppeld is;
- pace tonen in **min/km**; optioneel daarnaast km/u ter referentie;
- bij strides expliciet melden: `geen pace-alert; ontspannen versnellen`;
- als Garmin Connect bij een Repeat-groep **Laatste herstel overslaan / Skip Last Recover** aanbiedt, mag dat worden gebruikt voor intervallen waarbij herstel alleen **tussen** de snelle blokken hoort;
## Loopband
- blijft altijd beschikbaar via tab/toggle;
- toont de oorspronkelijke vaste **km/u**, **duur** en **helling** per stap;
- MP = 12,1 km/u; controlled fast = 12,6–12,7 km/u volgens de specifieke sessie;
- geen automatische wijziging van duur of volume bij wisselen van modus.

## Gezamenlijke informatie
- totale trainingstijd en schema-afstand;
- doel van de training;
- RPE;
- voeding;
- schoenen;
- kracht;
- herstel-/stopregels;
- workout-status en notities achteraf;
- werkelijk gelopen pace/HR mag later worden gebruikt om de zones en uitvoering te evalueren, maar mag het schema niet automatisch zwaarder maken.

> **FINAL V4 = dezelfde marathonspecifieke trainingslogica als V3, maar nu ontworpen voor voornamelijk buitenlopen met Garmin Forerunner 165 + Polar H9, terwijl de loopbandmodus volledig behouden blijft.**
