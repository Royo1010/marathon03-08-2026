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

### 1. Upstash voorbereiden

1. Open `https://console.upstash.com/` en meld je aan.
2. Kies **Redis** → **Create database**. Kies een Europese regio en maak de database.
3. Open de database en kopieer bij **REST API**:
   - `UPSTASH_REDIS_REST_URL`;
   - `UPSTASH_REDIS_REST_TOKEN`.
4. Kies in de Upstash-zijbalk **QStash** en open **Details**.
5. Kopieer:
   - `QSTASH_TOKEN`;
   - `QSTASH_CURRENT_SIGNING_KEY`;
   - `QSTASH_NEXT_SIGNING_KEY`.

### 2. VAPID-sleutels maken

Open een terminal in `push-server/`, installeer de packages en maak één sleutelpaar:

   ```sh
   npm install
   npm run generate-vapid
   ```

Bewaar de publieke en private sleutel apart. De private sleutel komt uitsluitend
in Vercel te staan.

### 3. Pushserver op Vercel deployen

1. Open `https://vercel.com/new` en importeer de GitHub-repository van de app.
2. Open **Root Directory** en kies `push-server`.
3. Open **Environment Variables** en voeg deze namen exact toe:
   - `PUBLIC_APP_ORIGIN`: de origin van GitHub Pages, bijvoorbeeld `https://royvanharten.github.io` zonder `/marathon-330/`;
   - `VAPID_SUBJECT`: bijvoorbeeld `mailto:jouw-email@example.com`;
   - `VAPID_PUBLIC_KEY`: de zojuist gemaakte publieke sleutel;
   - `VAPID_PRIVATE_KEY`: de zojuist gemaakte private sleutel;
   - `UPSTASH_REDIS_REST_URL`: waarde uit Upstash Redis;
   - `UPSTASH_REDIS_REST_TOKEN`: waarde uit Upstash Redis;
   - `QSTASH_TOKEN`: waarde uit QStash;
   - `QSTASH_CURRENT_SIGNING_KEY`: waarde uit QStash;
   - `QSTASH_NEXT_SIGNING_KEY`: waarde uit QStash;
   - `JOB_CALLBACK_URL`: `https://<jouw-vercel-project>.vercel.app/api/jobs/send-switch`.
4. Klik **Deploy**. Als Vercel eerst een andere project-URL kiest, pas daarna
   `JOB_CALLBACK_URL` aan onder **Settings** → **Environment Variables** en kies
   **Deployments** → **Redeploy**.
5. Open `https://<jouw-vercel-project>.vercel.app/api/health`. Een complete
   configuratie toont `{"ok":true,...}`. Een `503` toont exact welke
   variabelen nog ontbreken.
6. Open `/api/status` zonder app-token. Een `401` is hier correct: de route leeft,
   maar beschermt abonnementsgegevens.

### 4. GitHub Pages-client koppelen

Vul in `push-config.js` alleen de publieke waarden in:

```js
window.MARATHON_PUSH_CONFIG = Object.freeze({
  backendUrl: "https://<jouw-vercel-project>.vercel.app",
  vapidPublicKey: "<dezelfde-publieke-vapid-sleutel>",
});
```

Daarna:

1. Publiceer de bijgewerkte bestanden op GitHub Pages.
2. Controleer dat de zichtbare appversie `2026.08.31-6` is.
3. Zet nooit de private VAPID-sleutel, Redis-token, QStash-token of signing keys
   in de apprepository.

## Op iPhone activeren

1. Gebruik iOS 16.4 of nieuwer en voeg de site via Safari toe aan het beginscherm.
2. Open de app vanaf het beginscherm, niet als gewone Safari-tab.
3. Open een training en kies **Loopbandmodus**.
4. Tik op de compacte knop **Meldingen**, controleer de instellingen en tik bewust op
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
- **Pushserver instellen**: vul de twee publieke waarden in `push-config.js` in; de timer blijft werken.
- **Pushserver onvolledig**: `/api/health` is bereikbaar, maar één of meer Vercel-variabelen ontbreken.
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
