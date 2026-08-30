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
  assert.match(html, /apple-touch-icon\.png\?v=2026\.08\.30-1/);
  assert.match(html, /manifest\.json\?v=2026\.08\.30-1/);
  assert.match(html, /training-data\.js\?v=2026\.08\.30-1/);
  assert.doesNotMatch(html, /(?:href|src)="\//);
});

test("service worker is alleen een netwerkgestuurde cleanupmigratie", () => {
  const worker = read("service-worker.js");
  const app = read("app.js");

  assert.match(worker, /self\.skipWaiting/);
  assert.match(worker, /self\.clients\.claim/);
  assert.match(worker, /registration\.unregister/);
  assert.match(worker, /marathon-330-/);
  assert.match(worker, /respondWith\(fetch\(event\.request\)\)/);
  assert.doesNotMatch(worker, /caches\.open|cache\.put|addAll/);

  assert.match(app, /getRegistrations/);
  assert.match(app, /registration\.unregister/);
  assert.match(app, /marathon-pwa-cleanup-/);
  assert.doesNotMatch(app, /serviceWorker\.register/);
  assert.doesNotMatch(app, /localStorage\.clear/);
});

test("Release B verwijdert een Release A-appcache maar geen andere cache", async () => {
  const handlers = {};
  const deleted = [];
  let unregistered = false;
  let claimed = false;
  const self = {
    addEventListener(type, handler) { handlers[type] = handler; },
    skipWaiting() {},
    registration: { async unregister() { unregistered = true; } },
    clients: { async claim() { claimed = true; } },
  };
  const caches = {
    async keys() { return ["marathon-330-release-a", "marathon-app-ouder", "andere-site-cache"]; },
    async delete(name) { deleted.push(name); return true; },
  };
  const context = vm.createContext({ self, caches, fetch: async () => "release-b-network" });
  vm.runInContext(read("service-worker.js"), context);

  let activation;
  handlers.activate({ waitUntil(promise) { activation = promise; } });
  await activation;

  assert.deepEqual(deleted.sort(), ["marathon-330-release-a", "marathon-app-ouder"]);
  assert.equal(unregistered, true);
  assert.equal(claimed, true);

  let response;
  handlers.fetch({ request: { method: "GET" }, respondWith(promise) { response = promise; } });
  assert.equal(await response, "release-b-network");
});

test("meegeleverde markdownbron is exact de bron van de gegenereerde dataset", () => {
  const markdown = read("marathon-schema-3u30.md");
  const data = read("training-data.js");

  assert.match(markdown, /MARATHONSCHEMA 3:30 — DEFINITIEVE VERSIE/);
  assert.match(markdown, /# WEEK 36/);
  assert.match(markdown, /# WEEK 47 — MARATHONWEEK/);
  assert.match(data, /"sourceFile": "marathon-schema-3u30\.md"/);
  assert.match(data, /"schemaVersion": "marathon-schema-3u30-2026\.08\.30-1"/);
});
