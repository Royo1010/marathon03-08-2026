const APP_VERSION = "2026.08.30-4";
const APP_CACHE_PREFIXES = ["marathon-330-", "marathon-app-"];

// Eenmalige migratieworker: verwijder alleen caches van deze marathonapp.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames
        .filter((name) => APP_CACHE_PREFIXES.some((prefix) => name.startsWith(prefix)))
        .map((name) => caches.delete(name))
    );
    await self.registration.unregister();
    await self.clients.claim();
  })());
});

// Zolang een oud geopend venster nog door deze worker wordt bestuurd, altijd netwerk gebruiken.
self.addEventListener("fetch", (event) => {
  if (event.request.method === "GET") event.respondWith(fetch(event.request));
});
