// Original functionality: a live "system status" readout, styled like a
// blueprint timestamp stamp. It shows the visitor's local time (updated
// every second) and how long the site has been live, computed from a
// fixed launch date. Purely client-side, no library involved.

const LAUNCH_DATE = new Date("2026-01-15T00:00:00Z");

function formatClock(date) {
  return date.toLocaleTimeString(undefined, {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function formatUptime(date) {
  const diffMs = date.getTime() - LAUNCH_DATE.getTime();
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  return `${days}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m`;
}

/**
 * Starts the live clock and uptime counter, writing into the given
 * elements once per second.
 * @param {HTMLElement} clockElement
 * @param {HTMLElement} uptimeElement
 */
export function startStatusReadout(clockElement, uptimeElement) {
  function tick() {
    const now = new Date();
    if (clockElement) clockElement.textContent = formatClock(now);
    if (uptimeElement) uptimeElement.textContent = formatUptime(now);
  }

  tick();
  const intervalId = window.setInterval(tick, 1000);
  return intervalId;
}
