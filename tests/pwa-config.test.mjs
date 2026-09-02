import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";

const read = (file) => fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");

test("manifest en assets gebruiken GitHub Pages-veilige relatieve paden", () => {
  const manifest = JSON.parse(read("manifest.json"));
  const html = read("index.html");

  assert.equal(manifest.id, "./");
  assert.equal(manifest.start_url, "./");
  assert.equal(manifest.scope, "./");
  assert.equal(manifest.display, "standalone");
  assert.ok(manifest.icons.every((icon) => icon.src.startsWith("./")));
  assert.match(html, /apple-mobile-web-app-capable/);
  assert.match(html, /apple-touch-icon\.png\?v=2026\.09\.02-2/);
  assert.match(html, /manifest\.json\?v=2026\.09\.02-2/);
  assert.match(html, /training-data\.js\?v=2026\.09\.02-2/);
  assert.match(html, /notification-model\.js\?v=2026\.09\.02-2/);
  assert.match(html, /push-config\.js\?v=2026\.09\.02-2/);
  assert.match(read("app.js"), /APP_VERSION = "2026\.09\.02-2"/);
  assert.match(read("service-worker.js"), /APP_VERSION = "2026\.09\.02-2"/);
  assert.doesNotMatch(html, /(?:href|src)="\//);
  assert.match(html, /<strong>Marathon 3:30<\/strong>/);
  assert.doesNotMatch(html, /header-brand[\s\S]*?<strong>Marathon 3:30\s*<i/);
});

test("service worker blijft netwerkgestuurd en ondersteunt push", () => {
  const worker = read("service-worker.js");
  const app = read("app.js");

  assert.match(worker, /self\.skipWaiting/);
  assert.match(worker, /self\.clients\.claim/);
  assert.match(worker, /marathon-330-/);
  assert.match(worker, /respondWith\(fetch\(event\.request\)\)/);
  assert.match(worker, /addEventListener\("push"/);
  assert.match(worker, /showNotification/);
  assert.match(worker, /addEventListener\("notificationclick"/);
  assert.doesNotMatch(worker, /caches\.open|cache\.put|addAll/);
  assert.doesNotMatch(worker, /registration\.unregister/);

  assert.match(app, /serviceWorker\.register/);
  assert.match(app, /updateViaCache: "none"/);
  assert.doesNotMatch(app, /registration\.unregister/);
  assert.doesNotMatch(app, /localStorage\.clear/);
});

test("nieuwe pushworker verwijdert oude appcaches, blijft actief en gebruikt netwerk", async () => {
  const handlers = {};
  const deleted = [];
  const notifications = [];
  const messages = [];
  let claimed = false;
  let focused = false;
  const existingClient = {
    url: "https://example.test/marathon-330/",
    postMessage(message) { messages.push(message); },
    async focus() { focused = true; },
  };
  const self = {
    addEventListener(type, handler) { handlers[type] = handler; },
    skipWaiting() {},
    registration: { scope: "https://example.test/marathon-330/", async showNotification(title, options) { notifications.push({ title, options }); } },
    clients: {
      async claim() { claimed = true; },
      async matchAll() { return [existingClient]; },
      async openWindow() { throw new Error("bestaand venster had gebruikt moeten worden"); },
    },
  };
  const caches = {
    async keys() { return ["marathon-330-release-a", "marathon-app-ouder", "andere-site-cache"]; },
    async delete(name) { deleted.push(name); return true; },
  };
  const context = vm.createContext({ self, caches, fetch: async () => "release-b-network", URL, Date, encodeURIComponent });
  vm.runInContext(read("service-worker.js"), context);

  let activation;
  handlers.activate({ waitUntil(promise) { activation = promise; } });
  await activation;

  assert.deepEqual(deleted.sort(), ["marathon-330-release-a", "marathon-app-ouder"]);
  assert.equal(claimed, true);

  let response;
  handlers.fetch({ request: { method: "GET" }, respondWith(promise) { response = promise; } });
  assert.equal(await response, "release-b-network");

  let pushWork;
  handlers.push({
    data: { json() { return { title: "SWITCH BIJ 10:00", body: "10,5 km/u", workoutId: "week36-training2", silent: true }; } },
    waitUntil(promise) { pushWork = promise; },
  });
  await pushWork;
  assert.equal(notifications[0].title, "SWITCH BIJ 10:00");
  assert.equal(notifications[0].options.silent, true);

  let clickWork;
  handlers.notificationclick({
    notification: { data: notifications[0].options.data, close() {} },
    waitUntil(promise) { clickWork = promise; },
  });
  await clickWork;
  assert.equal(focused, true);
  assert.equal(messages.length, 1);
  assert.equal(messages[0].type, "OPEN_TREADMILL");
  assert.equal(messages[0].workoutId, "week36-training2");
});

test("definitieve bron is direct gegenereerd zonder oude schemacorrectielaag", () => {
  const markdown = read("marathon-schema-3u30-definitief-2026.md");
  const data = read("training-data.js");
  assert.match(markdown, /MARATHONSCHEMA 3:30 — DEFINITIEVE CODEX-BRON/);
  assert.match(markdown, /## WEEK 47 — RACE WEEK/);
  assert.match(data, /"sourceFile": "marathon-schema-3u30-definitief-2026\.md"/);
  assert.match(data, /"schemaVersion": "marathon-3u30-definitief-2026\.09\.02-1"/);
  assert.doesNotMatch(read("index.html"), /training-plan-v5/);
});
