# Lock Screen-meldingen installeren

De hoofdapp blijft een statische GitHub Pages-app. Een browser-timer kan op iOS
niet betrouwbaar blijven plannen nadat het scherm is vergrendeld. Daarom stuurt
de app bij **Start training** de volledige switchplanning naar een kleine
serverless pushdienst:

`GitHub Pages PWA → Vercel → QStash → Web Push → iPhone`

Upstash Redis bewaart het pushabonnement en de actieve sessiegeneratie. QStash
voert de toekomstige jobs uit. Een job verzendt alleen wanneer de sessie nog
actief is; oude jobs na pauze, stop of herstart worden overgeslagen.

## Eenmalig instellen

1. Maak een gratis Upstash Redis-database en een QStash-account/project aan.
2. Open een terminal in `push-server/`, installeer de packages en maak VAPID-sleutels:

   ```sh
   npm install
   npm run generate-vapid
   ```

3. Importeer `push-server/` als afzonderlijk Vercel-project.
4. Voeg in Vercel de variabelen uit `push-server/.env.example` toe.
5. Zet `PUBLIC_APP_ORIGIN` op alleen de origin van GitHub Pages, bijvoorbeeld
   `https://royvanharten.github.io` (dus zonder `/marathon-330/`).
6. Zet `JOB_CALLBACK_URL` op de publieke callback van dit Vercel-project:
   `https://<project>.vercel.app/api/jobs/send-switch`.
7. Deploy de pushserver en controleer dat `https://<project>.vercel.app/api/status`
   zonder app-token terecht `401` retourneert. Dat bevestigt dat de route leeft
   en niet publiek bruikbaar is.
8. Vul in `push-config.js` alleen de publieke waarden in:
   - `backendUrl`: de Vercel-URL;
   - `vapidPublicKey`: de publieke VAPID-sleutel.
9. Publiceer de bijgewerkte GitHub Pages-bestanden. Zet nooit de private
   VAPID-sleutel, Redis-token, QStash-token of signing keys in de apprepository.

## Op iPhone activeren

1. Gebruik iOS 16.4 of nieuwer en voeg de site via Safari toe aan het beginscherm.
2. Open de app vanaf het beginscherm, niet als gewone Safari-tab.
3. Open een training en kies **Loopbandmodus**.
4. Controleer de instellingen onder **Meldingen** en tik bewust op
   **Notificaties toestaan**. De app vraagt nooit toestemming bij paginalaad.
5. Wacht tot de status **Push actief** toont.
6. Tik op **Test melding**. Dit loopt via Vercel en Web Push; het is geen lokale
   browsermelding.
7. Start daarna eerst een korte testtraining. Vergrendel het scherm en controleer
   de absolute switchtijd, snelheid, helling en `Tot`-tijd.

Geluid aan/uit wordt als `silent`-voorkeur aan Web Push doorgegeven. De uiteindelijke
geluidsweergave blijft afhankelijk van iOS Silent Mode, Focus en de systeeminstelling
voor meldingen.

## Gedrag en foutstatussen

- **Toestemming nodig**: tik op de expliciete toestemmingsknop.
- **Beginscherm-app nodig**: installeer/open de PWA vanaf het beginscherm.
- **Pushserver niet ingesteld**: vul `push-config.js` in; de timer blijft werken.
- **Geen pushabonnement**: registreer het apparaat opnieuw.
- **Pushserver niet bereikbaar**: controleer Vercel/Upstash en internet.
- **Notificaties uit**: er worden geen serverjobs gepland; de training blijft werken.

Pauze en stop sturen een annulering naar de server. Hervatten maakt een nieuwe
sessie en plant alleen toekomstige switches opnieuw. Als de telefoon exact op dat
moment offline is, kan de server de annulering niet bevestigen; de app meldt dat
zichtbaar zodat je niet ten onrechte op de oude planning vertrouwt.

## Validatie na deployment

- Test 30 seconden: switches op `10:00`, `15:00`, `23:00` waarschuwen rond
  `09:30`, `14:30`, `22:30`.
- Test 45 seconden: dezelfde switches waarschuwen rond `09:15`, `14:15`, `22:15`.
- Start, stop en start opnieuw: alleen de nieuwe sessie mag melden.
- Pauzeer vóór een switch en hervat: geen melding op de oude klok; de nieuwe
  planning volgt de hervatte timer.
- Tik op een melding: de bestaande PWA wordt gefocust en de betreffende
  Loopbandmodus wordt geopend.
