import webpush from "web-push";
import { getRedis, installKey } from "./store.js";

let configured = false;

function configure() {
  if (configured) return;
  const subject = process.env.VAPID_SUBJECT;
  const publicKey = process.env.VAPID_PUBLIC_KEY;
  const privateKey = process.env.VAPID_PRIVATE_KEY;
  if (!subject || !publicKey || !privateKey) throw new Error("VAPID_NOT_CONFIGURED");
  webpush.setVapidDetails(subject, publicKey, privateKey);
  configured = true;
}

export async function sendPush(installId, payload) {
  configure();
  const store = getRedis();
  const key = installKey(installId);
  const install = await store.get(key);
  if (!install?.active || !install.subscription) {
    const error = new Error("SUBSCRIPTION_NOT_ACTIVE");
    error.statusCode = 404;
    throw error;
  }
  try {
    await webpush.sendNotification(install.subscription, JSON.stringify(payload), { TTL: 300, urgency: "high" });
  } catch (error) {
    if ([404, 410].includes(error.statusCode)) await store.set(key, { ...install, active: false, invalidatedAt: new Date().toISOString() });
    throw error;
  }
}
