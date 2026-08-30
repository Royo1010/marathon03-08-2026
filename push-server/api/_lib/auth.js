import { createHash, randomBytes, randomUUID, timingSafeEqual } from "node:crypto";
import { getRedis, installKey } from "./store.js";

export function createCredentials() {
  return { installId: randomUUID(), authToken: randomBytes(32).toString("base64url") };
}

export function hashToken(token) {
  return createHash("sha256").update(String(token || "")).digest("hex");
}

export function tokenMatches(token, hash) {
  const actual = Buffer.from(hashToken(token));
  const expected = Buffer.from(String(hash || ""));
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export async function authenticate(req) {
  const installId = String(req.headers["x-install-id"] || "");
  const authToken = String(req.headers.authorization || "").replace(/^Bearer\s+/i, "");
  if (!installId || !authToken) {
    const error = new Error("AUTH_REQUIRED");
    error.statusCode = 401;
    throw error;
  }
  const install = await getRedis().get(installKey(installId));
  if (!install || !tokenMatches(authToken, install.tokenHash)) {
    const error = new Error("AUTH_INVALID");
    error.statusCode = 401;
    throw error;
  }
  return { installId, install };
}
