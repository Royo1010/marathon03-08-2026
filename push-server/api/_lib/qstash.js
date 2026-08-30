import { Client } from "@upstash/qstash";

let client;

export async function scheduleJob(body, sendAtMs) {
  const token = process.env.QSTASH_TOKEN;
  const callbackUrl = process.env.JOB_CALLBACK_URL;
  if (!token || !/^https:\/\//.test(String(callbackUrl || ""))) throw new Error("QSTASH_NOT_CONFIGURED");
  if (!client) client = new Client({ token });
  const delaySeconds = Math.max(0, Math.ceil((sendAtMs - Date.now()) / 1000));
  const result = await client.publishJSON({
    url: callbackUrl,
    body,
    retries: 3,
    ...(delaySeconds > 0 ? { delay: `${delaySeconds}s` } : {}),
  });
  return result.messageId || null;
}
