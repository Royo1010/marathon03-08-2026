import { createCredentials, hashToken, tokenMatches } from "./_lib/auth.js";
import { applyCors, assertOrigin, handleOptions, requestIp, requireMethod, sendError } from "./_lib/http.js";
import { getRedis, installKey, rateLimit } from "./_lib/store.js";
import { validateSubscription } from "./_lib/validation.js";

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  applyCors(req, res);
  try {
    requireMethod(req, "POST");
    assertOrigin(req);
    await rateLimit(`register:${requestIp(req)}`, 10, 3600);
    const subscription = validateSubscription(req.body?.subscription);
    const store = getRedis();
    const requestedInstallId = String(req.body?.installId || "");
    const requestedToken = String(req.body?.authToken || "");
    const existing = requestedInstallId ? await store.get(installKey(requestedInstallId)) : null;
    const canReuse = existing && tokenMatches(requestedToken, existing.tokenHash);
    const credentials = canReuse ? { installId: requestedInstallId, authToken: requestedToken } : createCredentials();
    const now = new Date().toISOString();
    await store.set(installKey(credentials.installId), {
      tokenHash: hashToken(credentials.authToken),
      subscription,
      active: true,
      appVersion: String(req.body?.appVersion || "unknown").slice(0, 80),
      createdAt: canReuse ? existing.createdAt : now,
      updatedAt: now,
    });
    res.status(200).json(credentials);
  } catch (error) {
    sendError(res, error);
  }
}
