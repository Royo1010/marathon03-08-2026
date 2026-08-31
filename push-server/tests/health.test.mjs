import assert from "node:assert/strict";
import test from "node:test";
import handler from "../api/health.js";

const requiredEnv = {
  PUBLIC_APP_ORIGIN: "https://example.test",
  VAPID_SUBJECT: "mailto:test@example.test",
  VAPID_PUBLIC_KEY: "public-key",
  VAPID_PRIVATE_KEY: "private-key",
  UPSTASH_REDIS_REST_URL: "https://redis.example.test",
  UPSTASH_REDIS_REST_TOKEN: "redis-token",
  QSTASH_TOKEN: "qstash-token",
  QSTASH_CURRENT_SIGNING_KEY: "current-key",
  QSTASH_NEXT_SIGNING_KEY: "next-key",
  JOB_CALLBACK_URL: "https://push.example.test/api/jobs/send-switch",
};

function responseHarness() {
  return {
    statusCode: null,
    payload: null,
    headers: {},
    setHeader(name, value) { this.headers[name] = value; },
    status(code) { this.statusCode = code; return this; },
    json(payload) { this.payload = payload; return this; },
    end() { return this; },
  };
}

test("health meldt gereed wanneer alle serverinstellingen bestaan", async () => {
  const previous = Object.fromEntries(Object.keys(requiredEnv).map((key) => [key, process.env[key]]));
  Object.assign(process.env, requiredEnv);
  const res = responseHarness();
  await handler({ method: "GET", headers: { origin: requiredEnv.PUBLIC_APP_ORIGIN } }, res);
  assert.equal(res.statusCode, 200);
  assert.equal(res.payload.ok, true);
  assert.deepEqual(res.payload.missing, []);
  for (const [key, value] of Object.entries(previous)) value == null ? delete process.env[key] : process.env[key] = value;
});

test("health noemt ontbrekende configuratie zonder secrets terug te sturen", async () => {
  const previous = Object.fromEntries(Object.keys(requiredEnv).map((key) => [key, process.env[key]]));
  Object.assign(process.env, requiredEnv);
  delete process.env.QSTASH_TOKEN;
  const res = responseHarness();
  await handler({ method: "GET", headers: { origin: requiredEnv.PUBLIC_APP_ORIGIN } }, res);
  assert.equal(res.statusCode, 503);
  assert.equal(res.payload.ok, false);
  assert.deepEqual(res.payload.missing, ["QSTASH_TOKEN"]);
  assert.equal(JSON.stringify(res.payload).includes("qstash-token"), false);
  for (const [key, value] of Object.entries(previous)) value == null ? delete process.env[key] : process.env[key] = value;
});
