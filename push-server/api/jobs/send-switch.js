import { Receiver } from "@upstash/qstash";
import { switchNotification } from "../_lib/notification.js";
import { sendPush } from "../_lib/push.js";
import { getRedis, sessionKey } from "../_lib/store.js";
import { sessionDeliveryState } from "../_lib/session.js";

export const config = { api: { bodyParser: false } };

async function rawBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(Buffer.from(chunk));
  return Buffer.concat(chunks).toString("utf8");
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "METHOD_NOT_ALLOWED" });
  try {
    const bodyText = await rawBody(req);
    const receiver = new Receiver({
      currentSigningKey: process.env.QSTASH_CURRENT_SIGNING_KEY,
      nextSigningKey: process.env.QSTASH_NEXT_SIGNING_KEY,
    });
    const valid = await receiver.verify({
      signature: req.headers["upstash-signature"],
      body: bodyText,
      url: process.env.JOB_CALLBACK_URL,
    });
    if (!valid) return res.status(401).json({ error: "INVALID_QSTASH_SIGNATURE" });
    const job = JSON.parse(bodyText);
    const store = getRedis();
    const session = await store.get(sessionKey(job.installId, job.sessionId));
    const deliveryState = sessionDeliveryState(session, job);
    if (deliveryState === "retry") {
      return res.status(503).json({ error: "SESSION_STILL_SCHEDULING" });
    }
    if (deliveryState === "skip") {
      return res.status(200).json({ skipped: true, reason: "SESSION_INACTIVE" });
    }
    const content = switchNotification(job.item, job.extendedEnabled !== false);
    await sendPush(job.installId, {
      ...content,
      silent: job.soundEnabled === false,
      tag: `${job.sessionId}-${job.item.switchId}`,
      workoutId: job.workoutId,
    });
    res.status(200).json({ sent: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "SEND_FAILED" });
  }
}
