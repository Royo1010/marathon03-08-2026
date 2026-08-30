import { authenticate } from "../_lib/auth.js";
import { applyCors, assertOrigin, handleOptions, requireMethod, sendError } from "../_lib/http.js";
import { getRedis, sessionKey } from "../_lib/store.js";
import { validateCancel } from "../_lib/validation.js";

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  applyCors(req, res);
  try {
    requireMethod(req, "POST");
    assertOrigin(req);
    const { installId } = await authenticate(req);
    const { sessionId, generation } = validateCancel(req.body);
    const store = getRedis();
    const key = sessionKey(installId, sessionId);
    const session = await store.get(key);
    if (session && Number(session.generation) === generation) {
      await store.set(key, { ...session, status: "canceled", canceledAt: new Date().toISOString() }, { ex: 12 * 3600 });
    }
    res.status(200).json({ canceled: true });
  } catch (error) {
    sendError(res, error);
  }
}
