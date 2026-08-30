import { authenticate } from "./_lib/auth.js";
import { applyCors, assertOrigin, handleOptions, requireMethod, sendError } from "./_lib/http.js";

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  applyCors(req, res);
  try {
    requireMethod(req, "GET");
    assertOrigin(req);
    const { install } = await authenticate(req);
    res.status(200).json({ active: Boolean(install.active && install.subscription), updatedAt: install.updatedAt });
  } catch (error) {
    sendError(res, error);
  }
}
