export function sessionDeliveryState(session, job) {
  if (session?.status === "scheduling") return "retry";
  if (!session || session.status !== "active") return "skip";
  if (Number(session.generation) !== Number(job?.generation)) return "skip";
  return "deliver";
}

export function switchSendAtMs(startedAtMs, switchAtSeconds, warningSeconds) {
  return Number(startedAtMs) + (Number(switchAtSeconds) - Number(warningSeconds)) * 1000;
}
