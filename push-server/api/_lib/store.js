import { Redis } from "@upstash/redis";

let redis;

export function getRedis() {
  if (!redis) redis = Redis.fromEnv();
  return redis;
}

export async function rateLimit(key, maximum, windowSeconds) {
  const store = getRedis();
  const count = await store.incr(`rate:${key}`);
  if (count === 1) await store.expire(`rate:${key}`, windowSeconds);
  if (count > maximum) {
    const error = new Error("RATE_LIMITED");
    error.statusCode = 429;
    throw error;
  }
}

export function installKey(installId) {
  return `install:${installId}`;
}

export function sessionKey(installId, sessionId) {
  return `session:${installId}:${sessionId}`;
}
