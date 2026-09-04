# MARATHONSCHEMA 3:30 — DEFINITIEVE CODEX-BRON

**Versie:** 2 september 2026 — verfijnde versie na volledige schemavergelijking  
**Schema:** week 36 t/m week 47 van 2026  
**Start:** maandag 31 augustus 2026  
**Marathon:** zondag 22 november 2026  
**A-doel:** 3:30:00  
**Exact benodigd gemiddelde:** 4:58,6 min/km (ongeveer 12,06 km/u)  
**Praktisch trainingsmarathontempo (MP):** 12,0 km/u  
**Reguliere loopdagen:** 4 per week  
**Ondergrond:** primair loopband  

> Dit bestand is de inhoudelijke source of truth voor alle trainingen in de Marathon 3:30-app. Bij een conflict met oudere trainingsdata geldt dit bestand.

---

# 1. Trainingslogica

De opbouw verloopt in drie stappen:

1. voldoende aerobe omvang en snelheidsreserve bouwen;
2. steeds specifieker 12,0 km/u leren beheersen, ook onder vermoeidheid;
3. tijdens de taper vermoeidheid laten verdwijnen zonder de scherpte kwijt te raken.

De vier reguliere trainingen per week zijn:

1. Easy / Zone 2;
2. kwaliteit, marathonpace of test;
3. easy / middellange duur;
4. lange duur / confidence run.

Plan Training 2 en Training 4 bij voorkeur met minimaal één rustdag ertussen. Als twee trainingen op opeenvolgende dagen vallen, moet minimaal één daarvan Training 1 of Training 3 zijn.

Week 38 en week 42 bevatten een gestandaardiseerde **Fitness Check**. In beide weken vervangt die Fitness Check Training 1; er komt dus geen extra vijfde loopdag bij. De week blijft uit exact vier looptrainingen bestaan.

## Kernprincipes

- Easy blijft echt easy: RPE 3–4/10 en volledige zinnen kunnen spreken.
- De praattest en controle zijn belangrijker dan koste wat kost de bovengrens van een snelheidszone lopen.
- Trainingssnelheden worden na tests nooit automatisch verhoogd; resultaten worden eerst beoordeeld.
- Een test is diagnostiek, geen verplichting om jezelf kapot te lopen.
- De taper in week 45–47 is beschermd: geen extra kilometers, extra tests of extra trainingsdagen.
- De langste duurloop blijft de 30K Confidence Run in week 43: ongeveer 30,36 km. Niet verlengen naar 32, 33 of 35 km.
- Bij oplopende plaatselijke pijn, technisch verval of duidelijke controleproblemen wordt een training aangepast of gestopt.

---

# 2. Trainingszones en hellingbeleid

| Type | Snelheid | Loopbandhelling | Richt-RPE |
| --- | ---: | ---: | ---: |
| Herstel | 9,4–9,7 km/u | 0,5% | 2–3/10 |
| Easy | 9,9–10,3 km/u | 0,5% | 3–4/10 |
| Lange rustige duur | 10,0–10,2 km/u | 0,5% | 3–5/10 |
| Steady | 10,6–11,0 km/u | 0,5% | 4–6/10 |
| Sub-MP | 11,5–11,8 km/u | 1% | 5–7/10 |
| Marathonpace (MP) | 12,0 km/u | 1% | contextafhankelijk |
| Drempel / controlled fast | ongeveer 12,6–13,0 km/u | 1% | 7–8/10 |
| Korte snellere prikkel | ongeveer 13,0–13,2 km/u | 1% | 7–9/10 |
| Wandelen | zoals vermeld | 0% | zeer licht |

## Verplichte dataregel voor de app

- Ieder loopbandblok heeft een expliciete helling.
- Herstel, easy, lange rustige duur en steady: `0.5` procent.
- Sub-MP, MP, drempel, controlled fast en intervallen: `1` procent.
- Wandelen: `0` procent.
- Gebruik bij loopbandblokken nooit een leeg veld, `n.v.t.`, een streepje of een impliciete helling.
- Alleen de marathon zelf is een buitenwedstrijd en heeft daarom geen loopbandhelling.
- Vanaf week 39 mag één gewone easytraining per week desgewenst buiten worden uitgevoerd. Dit is optioneel; de loopbandvariant blijft de standaardweergave in de app.
- Week 41 Training 2 en week 43 Training 4 blijven expliciet `BUITEN AANBEVOLEN`; week 44 Training 4 blijft `LOOPBAND AANBEVOLEN`.
- Nederlandse weergave mag `0,5%` tonen; numerieke codedata gebruikt bij voorkeur `0.5`.

---

# 3. Racevoeding en registratie

Iedere lange training van ongeveer 90 minuten of langer krijgt zichtbaar het label:

**RACEVOEDING OEFENEN**

Voor grote lange trainingen kan, indien goed verdragen, richting **60–75 gram koolhydraten per uur** worden geoefend. Bouw dit niet ineens op tijdens de zwaarste sessie en gebruik geen nieuwe producten tijdens de laatste weken.

Week 43 Training 4 en week 44 Training 4 krijgen aanvullend:

**VOLLEDIGE RACEVOEDINGSREPETITIE**

Daarbij gelden dezelfde producten, timing, beoogde koolhydraten per uur en vergelijkbare drinkstrategie als op raceday.

De app registreert bij deze trainingen:

- gebruikte producten;
- aantal gels / servings;
- totale koolhydraten;
- gram koolhydraten per uur;
- timing;
- drinken;
- maag/darmen;
- energieniveau;
- benen;
- voeding volgens plan voltooid: ja/nee;
- vrije notitie.

---

# 4. Tests en testregistratie

Na iedere Fitness Check of prestatietest kan minimaal worden geregistreerd:

- RPE per relevant blok;
- ademhaling;
- benen;
- pijn/klachten;
- overall RPE;
- RPE van het laatste blok;
- algemene ervaring;
- verwacht herstel;
- resultaat / tijd waar van toepassing;
- gemiddelde snelheid waar van toepassing;
- vrije notitie.

## Gestandaardiseerd Fitness Check-protocol

Fitness Check #1 in week 38 en Fitness Check #2 in week 42 zijn exact gelijk:

| Blok | Duur | Snelheid | Helling | Type |
| ---: | ---: | ---: | ---: | --- |
| 1 | 5 min | 9,0 km/u | 0,5% | warming-up |
| 2 | 10 min | 10,0 km/u | 0,5% | easy |
| 3 | 10 min | 11,0 km/u | 0,5% | steady |
| 4 | 10 min | 12,0 km/u | 1% | marathonpace |
| 5 | 5 min | 8,5 km/u | 0,5% | cooling-down |

**Totaal:** 40 minuten, exact ongeveer 6,96 km.  
**Doel:** objectief vergelijken hoe dezelfde belasting in week 38 en week 42 wordt ervaren.  
**Belangrijk:** de app verhoogt trainingssnelheden niet automatisch na de uitslag.

---

# 5. Weekschema

## WEEK 36 — BUILD

**Periode:** 31 augustus t/m 6 september 2026  
**Reguliere weekafstand:** exact berekend ongeveer 38,98 km  
**Planning:** vier trainingen, dagen binnen de week vrij te kiezen  

### Training 1 — Easy

**Labels:** `EASY`  
**Blokken:**

1. 5 min @ 9,0 km/u — 0,5%
2. 35 min @ 10,0 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 45 min · ongeveer 7,29 km  
**Doel:** ontspannen aerobe omvang.  
**RPE:** 3–4/10.  
**Mentaal:** rustig lopen is de basis van de progressie.

### Training 2 — Eerste marathonpaceblokken

**Labels:** `QUALITY`, `MARATHON SPECIFIC`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 5 min @ 10,5 km/u — 0,5%
3. 8 min @ 12,0 km/u — 1%
4. 3 min @ 9,5 km/u — 0,5%
5. 8 min @ 12,0 km/u — 1%
6. 3 min @ 9,5 km/u — 0,5%
7. 8 min @ 12,0 km/u — 1%
8. 10 min @ 9,0 km/u — 0,5%

**Totaal:** 55 min · ongeveer 9,71 km  
**Doel:** 12,0 km/u leren kennen zonder uitputting.  
**RPE:** laatste MP-blok maximaal ongeveer 7/10.  
**Mentaal:** doeltempo is stevig, maar geen sprint of eindtest.

### Training 3 — Recovery

**Labels:** `RECOVERY`, `EASY`  
**Blokken:**

1. 5 min @ 9,0 km/u — 0,5%
2. 30 min @ 9,8 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 40 min · ongeveer 6,36 km  
**Doel:** herstellen en rustige kilometers verzamelen.  
**RPE:** 2–3/10.  
**Mentaal:** bewust gemakkelijker dan Training 1.

### Training 4 — Lange duur

**Labels:** `LONG RUN`, `RACEVOEDING OEFENEN`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 80 min @ 10,0 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 95 min · ongeveer 15,63 km  
**Doel:** eerste lange prikkel van dit blok.  
**RPE:** hoofdzakelijk 3–4/10.  
**Mentaal:** 15 km begint een normale trainingsafstand te worden.

---

## WEEK 37 — BUILD

**Periode:** 7 t/m 13 september 2026  
**Reguliere weekafstand:** exact berekend ongeveer 43,71 km  

### Training 1 — Easy

**Labels:** `EASY`  
**Blokken:**

1. 5 min @ 9,2 km/u — 0,5%
2. 40 min @ 10,1 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 50 min · ongeveer 8,21 km  
**Doel:** aerobe omvang.  
**RPE:** 3–4/10.  
**Mentaal:** volledige zinnen blijven mogelijk.

### Training 2 — 4 × 6 min drempel

**Labels:** `QUALITY`, `THRESHOLD`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 5 min @ 10,5 km/u — 0,5%
3. 6 min @ 12,3 km/u — 1%
4. 2:30 min @ 9,5 km/u — 0,5%
5. 6 min @ 12,3 km/u — 1%
6. 2:30 min @ 9,5 km/u — 0,5%
7. 6 min @ 12,3 km/u — 1%
8. 2:30 min @ 9,5 km/u — 0,5%
9. 6 min @ 12,3 km/u — 1%
10. 10 min @ 9,0 km/u — 0,5%

**Totaal:** 56:30 min · ongeveer 10,07 km  
**Doel:** snelheidsreserve en gecontroleerd drempelwerk.  
**RPE:** snelle blokken ongeveer 7/10.  
**Mentaal:** alle herhalingen technisch gelijkmatig lopen.

### Training 3 — Easy

**Labels:** `EASY`  
**Blokken:**

1. 5 min @ 9,2 km/u — 0,5%
2. 35 min @ 10,0 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 45 min · ongeveer 7,31 km  
**Doel:** rustige aanvulling van het weekvolume.  
**RPE:** 3–4/10.  
**Mentaal:** easy niet veranderen in steady.

### Training 4 — Lange duur

**Labels:** `LONG RUN`, `RACEVOEDING OEFENEN`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 95 min @ 10,0 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 110 min · ongeveer 18,13 km  
**Doel:** duurvermogen vergroten zonder wedstrijdinspanning.  
**RPE:** 3–5/10.  
**Mentaal:** 18 km is haalbaar; rustig blijven, geen race.

---

## WEEK 38 — BUILD + FITNESS CHECK #1

**Periode:** 14 t/m 20 september 2026  
**Weekafstand:** exact berekend ongeveer 46,73 km  
**Planning:** vier trainingen; de Fitness Check is Training 1 en vervangt de oorspronkelijke easytraining.

### Training 1 — Fitness Check #1

**Labels:** `FITNESS CHECK`, `TEST`  
**Protocol:** gebruik exact het gestandaardiseerde protocol uit hoofdstuk 4.  
**Totaal:** 40 min · ongeveer 6,96 km.  
**Doel:** nulmeting voor vergelijking met week 42.  
**RPE:** registreren per relevant blok; niet maximaal.  
**Mentaal:** observeren zonder de uitslag tijdens het lopen te dramatiseren.

### Training 2 — 6 × 4 min snel

**Labels:** `QUALITY`, `INTERVAL`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 5 min @ 10,5 km/u — 0,5%
3. 4 min @ 13,0 km/u — 1%
4. 2 min @ 9,5 km/u — 0,5%
5. 4 min @ 13,0 km/u — 1%
6. 2 min @ 9,5 km/u — 0,5%
7. 4 min @ 13,0 km/u — 1%
8. 2 min @ 9,5 km/u — 0,5%
9. 4 min @ 13,0 km/u — 1%
10. 2 min @ 9,5 km/u — 0,5%
11. 4 min @ 13,0 km/u — 1%
12. 2 min @ 9,5 km/u — 0,5%
13. 4 min @ 13,0 km/u — 1%
14. 10 min @ 9,0 km/u — 0,5%

**Totaal:** 59 min · ongeveer 10,74 km  
**Doel:** korte snelheidsreserve.  
**RPE:** laatste snelle blok maximaal ongeveer 8/10.  
**Mentaal:** snel maar herhaalbaar, geen sprint.

### Training 3 — Progressief

**Labels:** `EASY`, `STEADY`  
**Blokken:**

1. 5 min @ 9,2 km/u — 0,5%
2. 30 min @ 10,1 km/u — 0,5%
3. 10 min @ 10,8 km/u — 0,5%
4. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 50 min · ongeveer 8,33 km  
**Doel:** gecontroleerd eindigen zonder er een tempotraining van te maken.  
**RPE:** maximaal ongeveer 5/10.  
**Mentaal:** versnellen met behoud van ontspanning.

### Training 4 — First 20K Confidence Run

**Labels:** `LONG RUN`, `CONFIDENCE RUN`, `20K CONFIDENCE`, `RACEVOEDING OEFENEN`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 100 min @ 10,0 km/u — 0,5%
3. 10 min @ 10,5 km/u — 0,5%
4. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 125 min · ongeveer 20,71 km  
**Doel:** ervaren dat 20 km een trainingsafstand kan zijn. Dit is geen prestatietest.  
**RPE:** bij het einde idealiter maximaal 5–6/10.  
**Mentaal:** na afloop moet het gevoel bestaan dat meer kilometers mogelijk waren.

---

## WEEK 39 — MARATHON SPECIFIC BUILD

**Periode:** 21 t/m 27 september 2026  
**Reguliere weekafstand:** exact berekend ongeveer 54,20 km  

### Training 1 — Easy

**Labels:** `EASY`  
**Blokken:**

1. 5 min @ 9,2 km/u — 0,5%
2. 45 min @ 10,2 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 55 min · ongeveer 9,13 km  
**Doel:** rustige aerobe omvang.  
**RPE:** 3–4/10.  
**Mentaal:** fris genoeg blijven voor de MP-training.

### Training 2 — 3 × 12 min marathonpace

**Labels:** `QUALITY`, `MARATHON SPECIFIC`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 5 min @ 10,5 km/u — 0,5%
3. 12 min @ 12,0 km/u — 1%
4. 3 min @ 9,5 km/u — 0,5%
5. 12 min @ 12,0 km/u — 1%
6. 3 min @ 9,5 km/u — 0,5%
7. 12 min @ 12,0 km/u — 1%
8. 10 min @ 9,0 km/u — 0,5%

**Totaal:** 67 min · ongeveer 12,11 km  
**Doel:** langer totaalvolume op MP met controle.  
**RPE:** derde blok ongeveer 6–7/10.  
**Mentaal:** 12,0 km/u moet geleidelijk vertrouwder worden.

### Training 3 — Steady finish

**Labels:** `EASY`, `STEADY`  
**Blokken:**

1. 5 min @ 9,2 km/u — 0,5%
2. 35 min @ 10,1 km/u — 0,5%
3. 10 min @ 10,8 km/u — 0,5%
4. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 55 min · ongeveer 9,17 km  
**Doel:** middellange duur met beheerste steady finish.  
**RPE:** maximaal ongeveer 5/10.  
**Mentaal:** gecontroleerd versnellen, niet bewijzen.

### Training 4 — Confidence Run #1: progressieve halve marathon + uitlopen

**Labels:** `LONG RUN`, `CONFIDENCE RUN`, `HM CONFIDENCE #1`, `RACEVOEDING OEFENEN`  
**Afstandsblokken:**

1. 3,0 km @ 10,0 km/u — 0,5%
2. 8,0 km @ 10,3 km/u — 0,5%
3. 6,0 km @ 10,8 km/u — 0,5%
4. 4,1 km @ 11,2 km/u — 0,5%
5. 2,7 km @ 10,0 km/u — 0,5%

**Totaal:** exact 23,8 km · berekende duur ongeveer 2:16:06  
**Mijlpaal:** na blok 4 is exact 21,1 km bereikt.  
**Doel:** na een progressieve halve marathon nog gecontroleerd verder kunnen lopen.  
**RPE:** bij 21,1 km maximaal ongeveer 6–7/10.  
**Mentaal:** “Ik heb een halve marathon gelopen en kon daarna gewoon verder.”

---

## WEEK 40 — CUTBACK / RECOVERY + 5K TEST

**Periode:** 28 september t/m 4 oktober 2026  
**Reguliere weekafstand:** afhankelijk van de 5K-testduur exact ongeveer 42,55 km; toon afgerond `±42,5 km`  
**Weektype:** duidelijk zichtbaar als `CUTBACK / RECOVERY` en `TEST`  

### Training 1 — Recovery

**Labels:** `RECOVERY`, `EASY`  
**Blokken:**

1. 5 min @ 9,0 km/u — 0,5%
2. 35 min @ 9,8 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 45 min · ongeveer 7,18 km  
**Doel:** vermoeidheid verminderen.  
**RPE:** 2–3/10.  
**Mentaal:** cutback is doelbewuste training, geen verloren week.

### Training 2 — Test 1: 5K Benchmark

**Labels:** `TEST`, `5K BENCHMARK`, `QUALITY`  
**Warming-up:**

1. 10 min @ 9,5 km/u — 0,5%
2. 5 min @ 10,5 km/u — 0,5%
3. 3 min @ 9,0 km/u — 0,5%

**Strides — 4 herhalingen:**

4. 20 sec @ 13,0 km/u — 1%
5. 1:40 min @ 9,0 km/u — 0,5%
6. 20 sec @ 13,0 km/u — 1%
7. 1:40 min @ 9,0 km/u — 0,5%
8. 20 sec @ 13,0 km/u — 1%
9. 1:40 min @ 9,0 km/u — 0,5%
10. 20 sec @ 13,0 km/u — 1%
11. 1:40 min @ 9,0 km/u — 0,5%

**Voorbereiding en test:**

12. 3 min @ 9,0 km/u — 0,5%
13. 5,00 km test — 1%; start gecontroleerd rond 12,5 km/u en pas geleidelijk aan
14. 10 min @ 9,0 km/u — 0,5%

**Totaal:** ongeveer 11,15 km; tijd afhankelijk van de 5K-uitslag  
**Uitvoering:** laatste 1–2 km mag maximaal; niet te snel beginnen.  
**Doel:** verandering in snelheid en drempel beoordelen.  
**RPE:** test eindigt maximaal; warming-up en cooling-down gecontroleerd.  
**Mentaal:** één test bepaalt het marathondoel niet.

**Interpretatie:**

| 5K-tijd | Duiding |
| --- | --- |
| sneller dan 22:00 | zeer sterke ontwikkeling |
| 22:00–22:45 | goede ontwikkeling |
| 22:46–23:15 | vooruitgang; snelheidsreserve blijft aandachtspunt |
| langzamer dan 23:15 | snelheidsontwikkeling blijft achter bij wat idealiter bij 3:30 past |

### Training 3 — Recovery

**Labels:** `RECOVERY`, `EASY`  
**Blokken:**

1. 5 min @ 9,0 km/u — 0,5%
2. 30 min @ 9,6 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 40 min · ongeveer 6,26 km  
**Doel:** herstellen van de benchmark.  
**RPE:** 2–3/10.  
**Mentaal:** geen extra tempo toevoegen.

### Training 4 — Rustige lange duur

**Labels:** `LONG RUN`, `RACEVOEDING OEFENEN`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 95 min @ 9,9 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 110 min · ongeveer 17,97 km  
**Doel:** lange duur onderhouden in een bewust lichtere week.  
**RPE:** 3–4/10.  
**Mentaal:** beheerst blijven na de test.

---

## WEEK 41 — PEAK / MARATHON SPECIFIC

**Periode:** 5 t/m 11 oktober 2026  
**Reguliere weekafstand:** exact berekend ongeveer 64,91 km  

### Training 1 — Lange easy

**Labels:** `EASY`  
**Blokken:**

1. 5 min @ 9,2 km/u — 0,5%
2. 60 min @ 10,2 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 70 min · ongeveer 11,68 km  
**Doel:** aerobe omvang verhogen zonder extra intensiteit.  
**RPE:** 3–4/10.  
**Mentaal:** lang easy blijft nog steeds easy.

### Training 2 — Marathon Rhythm Test

**Labels:** `TEST`, `MARATHON SPECIFIC`, `BUITEN AANBEVOLEN`  
**Loopbandblokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 5 min @ 10,5 km/u — 0,5%
3. 60 min @ 12,0 km/u — 1%
4. 10 min @ 9,0 km/u — 0,5%

**Loopbandtotaal:** 85 min · ongeveer 15,96 km  
**Buitenvariant:** warming-up en cooling-down blijven rustig; loop als kern **12 km onafgebroken rond 4:59–5:00 min/km op een vlak parcours**.  
**Doel:** een volledig uur of 12 km onafgebroken het marathonritme beheersen.  
**RPE:** laatste 15 min idealiter maximaal ongeveer 7/10.  
**Mentaal:** ritme en beheersing, niet een uur lang vechten.

### Training 3 — Lange easy

**Labels:** `EASY`  
**Blokken:**

1. 5 min @ 9,2 km/u — 0,5%
2. 60 min @ 10,0 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 70 min · ongeveer 11,48 km  
**Doel:** rustige omvang tussen de twee sleuteltrainingen.  
**RPE:** 3–4/10.  
**Mentaal:** bewust geen snelle finish.

### Training 4 — Confidence Run #2: Half Marathon Steady

**Labels:** `LONG RUN`, `CONFIDENCE RUN`, `HM CONFIDENCE #2`, `RACEVOEDING OEFENEN`  
**Afstandsblokken:**

1. 1,5 km @ 9,8 km/u — 0,5%
2. 21,1 km @ 10,7 km/u — 0,5%
3. 3,2 km @ 9,8 km/u — 0,5%

**Optie binnen blok 2:** alleen wanneer de eerste 16,1 km van het hoofdblok volledig gecontroleerd verlopen, mogen de laatste 5,0 km naar 10,8 km/u — 0,5%. Niet harder.  
**Totaal:** exact 25,8 km · berekende duur ongeveer 2:26:50–2:27:06, afhankelijk van de optionele laatste 5 km  
**Doel:** 21,1 km onafgebroken op een degelijk steady tempo lopen en daarna nog ruim 3 km uitlopen.  
**RPE:** km 1–10 ongeveer 4–5/10; km 10–17 ongeveer 5/10; km 17–21 ongeveer 5–6/10.  
**Mentaal:** “Ik ben aan het trainen, maar absoluut nog geen wedstrijd aan het lopen.”

---

## WEEK 42 — PEAK / MARATHON SPECIFIC + FITNESS CHECK #2

**Periode:** 12 t/m 18 oktober 2026  
**Weekafstand:** exact berekend ongeveer 58,91 km  
**Planning:** vier trainingen; de Fitness Check is Training 1 en vervangt de oorspronkelijke easytraining. Hierdoor ontstaat bewust een lichte volumeterugname tussen week 41 en week 43.

### Training 1 — Fitness Check #2

**Labels:** `FITNESS CHECK`, `TEST`  
**Protocol:** exact hetzelfde gestandaardiseerde protocol als Fitness Check #1.  
**Totaal:** 40 min · ongeveer 6,96 km.  
**Doel:** resultaten logisch vergelijken met week 38.  
**RPE:** registreer dezelfde velden als in week 38.  
**Mentaal:** vergelijken; niet proberen de check harder te maken.

### Training 2 — 5 × 5 min controlled fast

**Labels:** `QUALITY`, `CONTROLLED FAST`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 5 min @ 10,5 km/u — 0,5%
3. 5 min @ 12,8 km/u — 1%
4. 2:30 min @ 9,5 km/u — 0,5%
5. 5 min @ 12,8 km/u — 1%
6. 2:30 min @ 9,5 km/u — 0,5%
7. 5 min @ 12,8 km/u — 1%
8. 2:30 min @ 9,5 km/u — 0,5%
9. 5 min @ 13,0 km/u — 1%
10. 2:30 min @ 9,5 km/u — 0,5%
11. 5 min @ 13,0 km/u — 1%
12. 10 min @ 9,0 km/u — 0,5%

**Totaal:** 60 min · ongeveer 10,91 km  
**Doel:** snelheidsreserve onderhouden zonder maximale intervaltraining.  
**RPE:** laatste twee blokken maximaal ongeveer 8/10.  
**Mentaal:** controlled fast betekent hard én beheerst.

### Training 3 — Middellange duur met steady finish

**Labels:** `EASY`, `STEADY`  
**Blokken:**

1. 5 min @ 9,2 km/u — 0,5%
2. 60 min @ 10,2 km/u — 0,5%
3. 5 min @ 10,8 km/u — 0,5%
4. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 75 min · ongeveer 12,58 km  
**Doel:** middellange omvang met een korte beheerste finish.  
**RPE:** easydeel 3–4/10; finish maximaal 5/10.  
**Mentaal:** volume verhogen zonder van deze training een tweede kwaliteitssessie te maken.

### Training 4 — Progressive MP-under-fatigue

**Labels:** `LONG RUN`, `MARATHON SPECIFIC`, `MP UNDER FATIGUE`, `RACEVOEDING OEFENEN`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 115 min @ 10,1 km/u — 0,5%
3. 20 min @ 11,5 km/u — 1%
4. 5 min @ 11,8 km/u — 1%
5. 10 min @ 12,0 km/u — 1%
6. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 165 min · ongeveer 28,47 km  
**Specificiteit:** het echte MP-blok begint pas na ongeveer 150 minuten lopen.  
**Doel:** progressief leren versnellen en uiteindelijk MP beheersen onder diepe vermoeidheid.  
**RPE:** vóór de progressie gecontroleerd; slotblok stevig maar technisch intact.  
**Mentaal:** 21,1 km is onderweg slechts een tussenpunt.  
**Veiligheidsregel:** bij pijn, technisch verval of duidelijke controleproblemen hoeft het laatste MP-blok niet koste wat kost te worden afgemaakt.

---

## WEEK 43 — PEAK / 30K CONFIDENCE

**Periode:** 19 t/m 25 oktober 2026  
**Reguliere weekafstand:** exact berekend ongeveer 67,73 km  

### Training 1 — Lange easy

**Labels:** `EASY`  
**Blokken:**

1. 5 min @ 9,2 km/u — 0,5%
2. 60 min @ 10,2 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 70 min · ongeveer 11,68 km  
**Doel:** aerobe omvang.  
**RPE:** 3–4/10.  
**Mentaal:** gemakkelijk genoeg om de sleuteltrainingen mogelijk te maken.

### Training 2 — Test: 3 × 15 min marathonpace

**Labels:** `TEST`, `MARATHON SPECIFIC`, `3 × 15 MP`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 5 min @ 10,5 km/u — 0,5%
3. 15 min @ 12,0 km/u — 1%
4. 4 min @ 9,5 km/u — 0,5%
5. 15 min @ 12,0 km/u — 1%
6. 4 min @ 9,5 km/u — 0,5%
7. 15 min @ 12,0 km/u — 1%
8. 10 min @ 9,0 km/u — 0,5%

**Totaal:** 78 min · ongeveer 14,23 km  
**Doel:** beoordelen hoe normaal en beheersbaar 12,0 km/u is geworden.  
**RPE:** groen = derde blok maximaal ongeveer 7/10 en gevoel dat een vierde blok mogelijk was; oranje = 7,5–8/10 en duidelijk zwaar; rood = vrijwel maximaal of snelheid moet omlaag.  
**Mentaal:** de vraag is niet “hoe snel ben ik?”, maar “hoe normaal voelt MP?”

### Training 3 — Lange easy

**Labels:** `EASY`  
**Blokken:**

1. 5 min @ 9,2 km/u — 0,5%
2. 60 min @ 10,0 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 70 min · ongeveer 11,48 km  
**Doel:** rustige omvang.  
**RPE:** 3–4/10.  
**Mentaal:** geen extra snelle finish toevoegen.

### Training 4 — 30K Confidence Run

**Labels:** `LONG RUN`, `CONFIDENCE RUN`, `30K CONFIDENCE`, `BUITEN AANBEVOLEN`, `RACEVOEDING OEFENEN`, `VOLLEDIGE RACEVOEDINGSREPETITIE`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 140 min @ 10,1 km/u — 0,5%
3. 25 min @ 10,8 km/u — 0,5%
4. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 180 min · ongeveer 30,36 km; toon afgerond `±30,4 km`  
**Buitenvariant:** aanbevolen op een vlak en praktisch parcours; houd de inspanning rustig tot steady en gebruik bij voorkeur een route waarop voeding en drinken realistisch geoefend kunnen worden.  
**Doel:** drie uur lopen met controle; geen marathonpace, wedstrijd of snelle 30 km.  
**RPE:** geleidelijk oplopend, maar de eerste 150 min duidelijk gecontroleerd.  
**Mentaal:** 21,1 km is een tussenpunt; bij 25 km is er nog controle; 30 km is voltooid.  
**Absolute grens:** dit is de langste duurloop. Niet verlengen.

---

## WEEK 44 — BELANGRIJKSTE MARATHONSPECIFIEKE WEEK

**Periode:** 26 oktober t/m 1 november 2026  
**Reguliere weekafstand:** exact berekend ongeveer 51,98 km  
**Weektype:** `MARATHON SPECIFIC`; volume bewust lager dan week 43  

### Training 1 — Easy

**Labels:** `EASY`  
**Blokken:**

1. 5 min @ 9,2 km/u — 0,5%
2. 45 min @ 10,0 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 55 min · ongeveer 8,98 km  
**Doel:** herstellen van de 30K en aerobe routine behouden.  
**RPE:** 3–4/10.  
**Mentaal:** geen kilometers of snelheid toevoegen.

### Training 2 — Korte snelheidsreserve

**Labels:** `QUALITY`, `CONTROLLED FAST`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 5 min @ 10,5 km/u — 0,5%
3. 4 min @ 12,9 km/u — 1%
4. 2 min @ 9,5 km/u — 0,5%
5. 4 min @ 12,9 km/u — 1%
6. 2 min @ 9,5 km/u — 0,5%
7. 4 min @ 12,9 km/u — 1%
8. 2 min @ 9,5 km/u — 0,5%
9. 4 min @ 12,9 km/u — 1%
10. 10 min @ 9,0 km/u — 0,5%

**Totaal:** 47 min · ongeveer 8,35 km  
**Doel:** scherpte en snelheidsreserve onderhouden, niet uitputten.  
**RPE:** laatste blok maximaal ongeveer 7–8/10.  
**Mentaal:** krachtig maar netjes; stoppen met reserve.

### Training 3 — Recovery

**Labels:** `RECOVERY`, `EASY`  
**Blokken:**

1. 5 min @ 9,0 km/u — 0,5%
2. 35 min @ 9,6 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 45 min · ongeveer 7,06 km  
**Doel:** herstellen vóór de belangrijkste specifieke test.  
**RPE:** 2–3/10.  
**Mentaal:** doelbewust zeer gemakkelijk.

### Training 4 — Key Marathon Specific Test: 2 × 30 min MP under fatigue

**Labels:** `TEST`, `LONG RUN`, `KEY MARATHON SPECIFIC`, `MP UNDER FATIGUE`, `LOOPBAND AANBEVOLEN`, `RACEVOEDING OEFENEN`, `VOLLEDIGE RACEVOEDINGSREPETITIE`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 65 min @ 10,0 km/u — 0,5%
3. 30 min @ 12,0 km/u — 1%
4. 8 min @ 9,8 km/u — 0,5%
5. 30 min @ 12,0 km/u — 1%
6. 7 min @ 10,0 km/u — 0,5%
7. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 155 min · ongeveer 27,60 km; toon afgerond `±27,6 km`  
**Ondergrond:** loopband aanbevolen voor exacte controle van beide MP-blokken.  
**Doel:** testen of MP beheerst blijft nadat al 75 minuten is gelopen, zonder een week na de 30K opnieuw bijna 30 km te hoeven lopen.  
**RPE:** tweede MP-blok idealiter maximaal ongeveer 7–7,5/10; techniek blijft goed; daarna normaal kunnen doorlopen.  
**Mentaal:** “Ik heb ruim 27 km gelopen en kon diep in de training tweemaal 30 minuten MP draaien.”  
**Veiligheidsregel:** bij pijn, technisch verval of duidelijke controleproblemen wordt het MP-blok afgebroken of verlaagd; deze training wordt niet koste wat kost voltooid.

---

## WEEK 45 — TAPER 1

**Periode:** 2 t/m 8 november 2026  
**Reguliere weekafstand:** exact berekend ongeveer 47,03 km  
**Bescherming:** geen extra volume of test toevoegen  

### Training 1 — Easy

**Labels:** `EASY`, `TAPER`  
**Blokken:**

1. 5 min @ 9,2 km/u — 0,5%
2. 40 min @ 9,9 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 50 min · ongeveer 8,08 km  
**Doel:** omvang verlagen, routine behouden.  
**RPE:** 3/10.  
**Mentaal:** minder trainen is nu onderdeel van beter worden.

### Training 2 — Drempel onderhouden

**Labels:** `QUALITY`, `TAPER`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 5 min @ 10,5 km/u — 0,5%
3. 10 min @ 12,4 km/u — 1%
4. 3 min @ 9,5 km/u — 0,5%
5. 10 min @ 12,4 km/u — 1%
6. 3 min @ 9,5 km/u — 0,5%
7. 10 min @ 12,4 km/u — 1%
8. 10 min @ 9,0 km/u — 0,5%

**Totaal:** 61 min · ongeveer 11,11 km  
**Doel:** kwaliteit behouden zonder nieuwe fitheid na te jagen.  
**RPE:** ongeveer 6–7/10.  
**Mentaal:** vlot en gecontroleerd eindigen.

### Training 3 — Easy / recovery

**Labels:** `EASY`, `RECOVERY`, `TAPER`  
**Blokken:**

1. 5 min @ 9,0 km/u — 0,5%
2. 35 min @ 9,6 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 45 min · ongeveer 7,06 km  
**Doel:** herstel en soepelheid.  
**RPE:** 2–3/10.  
**Mentaal:** niets bewijzen.

### Training 4 — Marathonpace-onderhoud

**Labels:** `LONG RUN`, `MARATHON SPECIFIC`, `TAPER`, `RACEVOEDING OEFENEN`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 70 min @ 10,0 km/u — 0,5%
3. 30 min @ 12,0 km/u — 1%
4. 5 min @ 10,0 km/u — 0,5%
5. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 120 min · ongeveer 20,79 km  
**Doel:** één gecontroleerd MP-blok behouden terwijl het volume daalt.  
**RPE:** MP ongeveer 6–7/10; geen test.  
**Mentaal:** 30 minuten MP voelt bekend en beheerst.  
**Voeding:** laatste verkorte long run waarop racevoeding nog wordt geoefend; geen nieuwe producten.

---

## WEEK 46 — TAPER 2

**Periode:** 9 t/m 15 november 2026  
**Reguliere weekafstand:** exact berekend ongeveer 37,72 km  
**Bescherming:** geen extra training, test of long-runvolume toevoegen  

### Training 1 — Easy

**Labels:** `EASY`, `TAPER`  
**Blokken:**

1. 5 min @ 9,0 km/u — 0,5%
2. 35 min @ 9,8 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 45 min · ongeveer 7,18 km  
**Doel:** soepel blijven.  
**RPE:** 2–3/10.  
**Mentaal:** frisheid krijgt prioriteit.

### Training 2 — 3 × 8 min MP-plus

**Labels:** `QUALITY`, `MARATHON SPECIFIC`, `TAPER`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 5 min @ 10,5 km/u — 0,5%
3. 8 min @ 12,1 km/u — 1%
4. 3 min @ 9,5 km/u — 0,5%
5. 8 min @ 12,1 km/u — 1%
6. 3 min @ 9,5 km/u — 0,5%
7. 8 min @ 12,1 km/u — 1%
8. 10 min @ 9,0 km/u — 0,5%

**Totaal:** 55 min · ongeveer 9,75 km  
**Doel:** scherp blijven met weinig totale belasting.  
**RPE:** ongeveer 6/10.  
**Mentaal:** vlot, kort en vertrouwd.

### Training 3 — Losmaken

**Labels:** `EASY`, `STRIDES`, `TAPER`  
**Blokken:**

1. 5 min @ 9,0 km/u — 0,5%
2. 15 min @ 9,6 km/u — 0,5%
3. 20 sec @ 13,5 km/u — 1%
4. 1:40 min @ 9,0 km/u — 0,5%
5. 20 sec @ 13,5 km/u — 1%
6. 1:40 min @ 9,0 km/u — 0,5%
7. 20 sec @ 13,5 km/u — 1%
8. 1:40 min @ 9,0 km/u — 0,5%
9. 20 sec @ 13,5 km/u — 1%
10. 1:40 min @ 9,0 km/u — 0,5%
11. 5 min @ 8,5 km/u — 0,5%
12. 2 min wandelen @ 5,5 km/u — 0%

**Totaal:** 35 min · ongeveer 5,34 km  
**Doel:** soepelheid en pasfrequentie, zonder vermoeidheid.  
**RPE:** laag; strides snel maar ontspannen.  
**Mentaal:** eindigen met meer energie dan waarmee je begon.

### Training 4 — Verkorte MP-duur

**Labels:** `MARATHON SPECIFIC`, `TAPER`, `RACEVOEDING OEFENEN`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 55 min @ 10,0 km/u — 0,5%
3. 20 min @ 12,0 km/u — 1%
4. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 90 min · ongeveer 15,46 km  
**Doel:** MP aanraken zonder restvermoeidheid op te bouwen.  
**RPE:** MP ongeveer 6/10.  
**Mentaal:** 20 minuten MP moet bijna vanzelfsprekend voelen.  
**Voeding:** alleen vertrouwde producten; geen experimenten.

---

## WEEK 47 — RACE WEEK

**Periode:** 16 t/m 22 november 2026  
**Volume vóór de marathon:** exact berekend ongeveer 15,95 km  
**Inclusief marathon:** ongeveer 58,15 km  
**Hoofdregel:** fit worden, niet fitter worden  

### Training 1 — Easy

**Labels:** `EASY`, `TAPER`, `RACE WEEK`  
**Blokken:**

1. 5 min @ 9,0 km/u — 0,5%
2. 25 min @ 9,6 km/u — 0,5%
3. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 35 min · ongeveer 5,46 km  
**Doel:** soepel en ontspannen blijven.  
**RPE:** 2–3/10.  
**Mentaal:** de training levert vertrouwen, geen fitnesswinst.

### Training 2 — Marathonpace aanraken

**Labels:** `MARATHON SPECIFIC`, `TAPER`, `RACE WEEK`  
**Blokken:**

1. 10 min @ 9,5 km/u — 0,5%
2. 5 min @ 10,5 km/u — 0,5%
3. 5 min @ 12,0 km/u — 1%
4. 3 min @ 9,2 km/u — 0,5%
5. 5 min @ 12,0 km/u — 1%
6. 8 min @ 9,0 km/u — 0,5%
7. 4 min wandelen @ 5,5 km/u — 0%

**Totaal:** 40 min · ongeveer 6,49 km  
**Doel:** MP kort en gemakkelijk voelen.  
**RPE:** MP maximaal ongeveer 5–6/10.  
**Mentaal:** niet testen; stoppen terwijl je meer zou kunnen.

### Training 3 — Losmaken

**Labels:** `EASY`, `STRIDES`, `TAPER`, `RACE WEEK`  
**Blokken:**

1. 5 min @ 9,0 km/u — 0,5%
2. 10 min @ 9,5 km/u — 0,5%
3. 20 sec @ 13,0 km/u — 1%
4. 1:40 min @ 9,0 km/u — 0,5%
5. 20 sec @ 13,0 km/u — 1%
6. 1:40 min @ 9,0 km/u — 0,5%
7. 20 sec @ 13,0 km/u — 1%
8. 1:40 min @ 9,0 km/u — 0,5%
9. 5 min @ 8,5 km/u — 0,5%

**Totaal:** 26 min · ongeveer 4,01 km  
**Planning:** uiterlijk de dag vóór de volledige rustdag uitvoeren; minimaal één volledige rustdag vóór de marathon.  
**Doel:** benen losmaken.  
**RPE:** zeer laag buiten de korte strides.  
**Mentaal:** het werk is gedaan.

### Training 4 — Marathon

**Datum:** zondag 22 november 2026  
**Labels:** `RACE`, `MARATHON`, `RACEVOEDING`  
**Afstand:** 42,195 km  
**Ondergrond:** buitenwedstrijd; loopbandhelling is hier niet van toepassing  
**A-doel indien het totaalbeeld groen licht geeft:** 3:30:00  
**Benodigd gemiddelde:** 4:58,6 min/km  

#### Gecorrigeerde pacingstrategie voor 3:30

Een gemiddelde van exact 5:00 min/km resulteert in ongeveer 3:30:59 en is dus niet voldoende voor 3:30:00. Na een beheerste start moet het tempo daarom hoofdzakelijk rond 4:58–4:59 min/km liggen.

| Wedstrijddeel | Richttempo | Opdracht |
| --- | ---: | --- |
| 0–3 km | ongeveer 5:02–5:03/km | bewust gecontroleerd starten; geen grote achterstand opbouwen |
| 3–10 km | ongeveer 4:58–4:59/km | soepel naar doelritme stabiliseren |
| 10–30 km | ongeveer 4:57–4:59/km | constante inspanning; niets forceren om seconden te winnen |
| 30–35 km | ongeveer 4:58–4:59/km indien beheerst | tempo en techniek vasthouden |
| 35–40 km | op controle | alleen versnellen als de benen en ademhaling dit werkelijk toelaten |
| 40–42,195 km | alles wat verantwoord beschikbaar is | geconcentreerd uitlopen |

**Halverwege-richtpunt:** rond 1:44:50–1:45:00, rekening houdend met de werkelijk gelopen lijn en officiële kilometermarkeringen.  
**Voeding:** voer het volledig geoefende racevoedingsplan uit; begin op tijd en wacht niet tot energieverlies optreedt.  
**B-doel:** de uiteindelijke keuze tussen 3:30 en een behoudender doel wordt gemaakt op basis van het totaalbeeld uit training, tests, herstel en klachten — niet op basis van één sessie.

---

# 6. Weekvolumecontrole

Afstanden voor tijdsblokken zijn berekend als:

`afstand in km = minuten × snelheid in km/u ÷ 60`

Bij afstandsblokken is de vermelde afstand leidend en wordt de tijd uit afstand en snelheid afgeleid. De 5K Benchmark heeft een vaste testafstand maar een variabele testtijd.

| Week | Type | Reguliere afstand | Extra check | Totaal voor app |
| ---: | --- | ---: | ---: | ---: |
| 36 | Build | 38,98 km | — | 38,98 km |
| 37 | Build | 43,71 km | — | 43,71 km |
| 38 | Build + Fitness Check | 46,73 km | — | 46,73 km |
| 39 | Marathon-specific build | 54,20 km | — | 54,20 km |
| 40 | Cutback + test | 42,55 km | — | 42,55 km |
| 41 | Peak / marathon specific | 64,91 km | — | 64,91 km |
| 42 | Peak + Fitness Check / lichte volumeterugname | 58,91 km | — | 58,91 km |
| 43 | Peak / 30K | 67,73 km | — | 67,73 km |
| 44 | Key marathon specific | 51,98 km | — | 51,98 km |
| 45 | Taper 1 | 47,03 km | — | 47,03 km |
| 46 | Taper 2 | 37,72 km | — | 37,72 km |
| 47 | Race week vóór race | 15,95 km | — | 15,95 km |
| 47 incl. race | Race week | 58,15 km | — | 58,15 km |

Kleine verschillen van maximaal enkele honderdsten kunnen ontstaan door afronding in de presentatie. De codedata moet rekenen met de ongeronde blokwaarden.

---

# 7. Verplichte app-interpretatie

## Weektypes

| Week | Te tonen weektype |
| ---: | --- |
| 36 | BUILD |
| 37 | BUILD |
| 38 | BUILD + FITNESS CHECK |
| 39 | MARATHON SPECIFIC BUILD |
| 40 | CUTBACK / RECOVERY + TEST |
| 41 | PEAK / MARATHON SPECIFIC |
| 42 | PEAK / MARATHON SPECIFIC + FITNESS CHECK |
| 43 | PEAK / 30K CONFIDENCE |
| 44 | BELANGRIJKSTE MARATHONSPECIFIEKE WEEK |
| 45 | TAPER |
| 46 | TAPER |
| 47 | RACE WEEK |

## Ondergrondbadges

- Week 41 Training 2: `BUITEN AANBEVOLEN`.
- Week 43 Training 4: `BUITEN AANBEVOLEN`.
- Week 44 Training 4: `LOOPBAND AANBEVOLEN`.
- Vanaf week 39 mag één gewone easytraining per week optioneel buiten worden uitgevoerd.
- De app blijft voor alle overige trainingen primair de loopbandvariant tonen.
- Gebruik voor `BUITEN AANBEVOLEN` en `LOOPBAND AANBEVOLEN` verschillende badgekleuren.

## Racevoedingsbadges

Toon `RACEVOEDING OEFENEN` bij:

- W36 Training 4;
- W37 Training 4;
- W38 Training 4;
- W39 Training 4;
- W40 Training 4;
- W41 Training 4;
- W42 Training 4;
- W43 Training 4;
- W44 Training 4;
- W45 Training 4;
- W46 Training 4;
- de marathon in W47 met de aangepaste race-uitvoering.

Toon daarnaast `VOLLEDIGE RACEVOEDINGSREPETITIE` bij:

- W43 Training 4;
- W44 Training 4.

## Stabiele identiteit en datamigratie

- Gebruik stabiele trainings-ID's op basis van weeknummer plus trainingsnummer/type.
- De Fitness Checks zijn reguliere Training 1-sessies in week 38 en week 42 en krijgen stabiele ID's, bijvoorbeeld `w38-t1-fitness-check-1` en `w42-t1-fitness-check-2`.
- Behoud bestaande voltooiingsstatus, notities en registraties alleen wanneer de oude en nieuwe training logisch dezelfde identiteit hebben.
- Koppel geen oud testresultaat blind aan een inhoudelijk andere test.

---

# 8. Definitieve dubbele controle voor Codex

De implementatie is pas inhoudelijk gereed nadat al het onderstaande is gecontroleerd:

- [ ] W36 t/m W47 staan volledig in de codedata.
- [ ] Iedere loopbandblok heeft een expliciete helling.
- [ ] Easy blijft 0,5% en MP/quality 1% volgens het hellingbeleid.
- [ ] W38 Fitness Check #1 gebruikt exact het standaardprotocol.
- [ ] W38 is ongeveer 46,73 km totaal.
- [ ] W42 Fitness Check #2 gebruikt exact hetzelfde protocol.
- [ ] W38 en W42 bevatten elk exact vier looptrainingen; Fitness Check #1/#2 is telkens Training 1 en er is geen extra vijfde loopdag.
- [ ] W40 is zichtbaar een cutbackweek en bevat de 5K Benchmark.
- [ ] W41 bevat 60 minuten onafgebroken MP en de buitenaanbeveling.
- [ ] W41 is ongeveer 64,91 km.
- [ ] W42 Training 4 eindigt progressief met 20 min @ 11,5 — 1%, 5 min @ 11,8 — 1% en 10 min @ 12,0 — 1%.
- [ ] Het echte MP-blok van W42 begint pas na ongeveer 150 minuten.
- [ ] W42 is ongeveer 58,91 km totaal en vormt bewust een lichte volumeterugname tussen W41 en W43.
- [ ] W43 bevat de test 3 × 15 min MP.
- [ ] W43 bevat de langste duurloop van ongeveer 30,36 km en is buiten aanbevolen.
- [ ] W43 is ongeveer 67,73 km.
- [ ] W44 bevat 2 × 30 min @ 12,0 km/u — 1% na 75 minuten voorafgaand lopen.
- [ ] W44 Training 4 is loopband aanbevolen.
- [ ] W44 Training 4 is ongeveer 27,60 km en W44 totaal ongeveer 51,98 km.
- [ ] W43 en W44 hebben de volledige racevoedingsrepetitie.
- [ ] De taper W45–W47 bevat geen extra volume, test of trainingsdag.
- [ ] De marathon staat op zondag 22 november 2026.
- [ ] De racepacing erkent dat 3:30 gemiddeld 4:58,6/km vereist.
- [ ] Trainingssnelheden veranderen niet automatisch na tests.
- [ ] Afstanden worden onafhankelijk uit de blokken berekend en met bovenstaande totalen vergeleken.

Lees na implementatie dit volledige bestand nogmaals van boven naar beneden en vergelijk iedere week met de uiteindelijke codedata.
