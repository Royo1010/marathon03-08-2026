import { applyCors, assertOrigin, handleOptions, requireMethod, sendError } from "./_lib/http.js";

const REQUIRED_ENV = [
  "PUBLIC_APP_ORIGIN",
  "VAPID_SUBJECT",
  "VAPID_PUBLIC_KEY",
  "VAPID_PRIVATE_KEY",
  "UPSTASH_REDIS_REST_URL",
  "UPSTASH_REDIS_REST_TOKEN",
  "QSTASH_TOKEN",
  "QSTASH_CURRENT_SIGNING_KEY",
  "QSTASH_NEXT_SIGNING_KEY",
  "JOB_CALLBACK_URL",
];

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  applyCors(req, res);
  try {
    requireMethod(req, "GET");
    assertOrigin(req);
    const missing = REQUIRED_ENV.filter((name) => !String(process.env[name] || "").trim());
    const ok = missing.length === 0;
    res.status(ok ? 200 : 503).json({
      ok,
      service: "marathon-330-push",
      version: "2026.09.02-1",
      configured: ok,
      missing,
    });
  } catch (error) {
    sendError(res, error);
  }
}
