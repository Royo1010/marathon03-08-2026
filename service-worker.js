const APP_VERSION = "2026.09.02-3";
const APP_CACHE_PREFIXES = ["marathon-330-", "marathon-app-"];

// Blijvende netwerk-eerst worker: oude appcaches worden opgeruimd, maar de worker
// blijft geregistreerd zodat iOS Web Push ook bij een vergrendeld scherm werkt.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames
        .filter((name) => APP_CACHE_PREFIXES.some((prefix) => name.startsWith(prefix)))
        .map((name) => caches.delete(name))
    );
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  if (event.request.method === "GET") event.respondWith(fetch(event.request));
});

self.addEventListener("push", (event) => {
  event.waitUntil((async () => {
    let payload = {};
    try { payload = event.data?.json?.() || {}; }
    catch (_) { payload = { title: "Marathon 3:30", body: event.data?.text?.() || "Nieuwe trainingsmelding" }; }

    const title = String(payload.title || "Marathon 3:30");
    await self.registration.showNotification(title, {
      body: String(payload.body || ""),
      tag: String(payload.tag || `marathon-${Date.now()}`),
      renotify: true,
      silent: payload.silent === true,
      icon: new URL("./apple-touch-icon.png", self.registration.scope).href,
      badge: new URL("./apple-touch-icon.png", self.registration.scope).href,
      data: {
        workoutId: payload.workoutId || null,
        url: payload.url || (payload.workoutId ? `./?treadmill=${encodeURIComponent(payload.workoutId)}` : "./"),
      },
    });
  })());
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil((async () => {
    const data = event.notification.data || {};
    const targetUrl = new URL(data.url || "./", self.registration.scope).href;
    const windows = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    const scopeUrl = new URL(self.registration.scope);
    const existing = windows.find((client) => {
      const clientUrl = new URL(client.url);
      return clientUrl.origin === scopeUrl.origin && clientUrl.pathname.startsWith(scopeUrl.pathname);
    });
    if (existing) {
      if (data.workoutId) existing.postMessage({ type: "OPEN_TREADMILL", workoutId: data.workoutId });
      await existing.focus();
      return;
    }
    await self.clients.openWindow(targetUrl);
  })());
});
