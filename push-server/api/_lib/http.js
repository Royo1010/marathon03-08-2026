export function allowedOrigin() {
  return String(process.env.PUBLIC_APP_ORIGIN || "").replace(/\/$/, "");
}

export function applyCors(req, res) {
  const configured = allowedOrigin();
  const origin = String(req.headers.origin || "").replace(/\/$/, "");
  if (configured && origin === configured) res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Install-Id");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
}

export function handleOptions(req, res) {
  if (req.method !== "OPTIONS") return false;
  applyCors(req, res);
  res.status(204).end();
  return true;
}

export function assertOrigin(req) {
  const configured = allowedOrigin();
  const origin = String(req.headers.origin || "").replace(/\/$/, "");
  if (configured && origin && origin !== configured) {
    const error = new Error("ORIGIN_NOT_ALLOWED");
    error.statusCode = 403;
    throw error;
  }
}

export function sendError(res, error) {
  const status = Number(error?.statusCode) || 500;
  if (status >= 500) console.error(error);
  res.status(status).json({ error: status >= 500 ? "SERVER_ERROR" : error.message });
}

export function requireMethod(req, method) {
  if (req.method === method) return;
  const error = new Error("METHOD_NOT_ALLOWED");
  error.statusCode = 405;
  throw error;
}

export function requestIp(req) {
  return String(req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown").split(",")[0].trim();
}
