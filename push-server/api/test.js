import { authenticate } from "./_lib/auth.js";
import { applyCors, assertOrigin, handleOptions, requireMethod, sendError } from "./_lib/http.js";
import { sendPush } from "./_lib/push.js";
import { rateLimit } from "./_lib/store.js";

export default async function handler(req, res) {
  if (handleOptions(req, res)) return;
  applyCors(req, res);
  try {
    requireMethod(req, "POST");
    assertOrigin(req);
    const { installId } = await authenticate(req);
    await rateLimit(`test:${installId}`, 10, 3600);
    const workoutId = String(req.body?.workoutId || "").slice(0, 120) || null;
    const extended = req.body?.extendedEnabled !== false;
    await sendPush(installId, {
      title: "TESTMELDING · SWITCH BIJ 10:00",
      body: extended ? "Snelheid → 10,5 km/u\nHelling → 0,5%\nTot 15:00" : "10,5 km/u · 0,5%\nTot 15:00",
      silent: req.body?.soundEnabled === false,
      tag: `marathon-test-${Date.now()}`,
      workoutId,
    });
    res.status(200).json({ sent: true });
  } catch (error) {
    sendError(res, error);
  }
}
