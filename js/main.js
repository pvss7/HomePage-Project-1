import { initNavToggle } from "./nav.js";
import { startStatusReadout } from "./uptime.js";
import { renderHoneycomb } from "./honeycomb.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle(
    document.querySelector(".nav-toggle"),
    document.querySelector(".main-nav"),
  );

  startStatusReadout(
    document.getElementById("live-clock"),
    document.getElementById("uptime-counter"),
  );

  // Homepage only: the honeycomb project grid
  const honeycombList = document.querySelector(".honeycomb");
  if (honeycombList) {
    renderHoneycomb(honeycombList);
  }
});
