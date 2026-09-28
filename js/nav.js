// Handles the mobile nav toggle button shared across all pages.

export function initNavToggle(toggleButton, navElement) {
  if (!toggleButton || !navElement) return;

  // Code review (Srujan Kothuri): Nice accessibility detail. classList.toggle()
  // returns the new open state, and that value goes straight into
  // aria-expanded, so the visual menu state and what screen readers announce
  // can never get out of sync.
  toggleButton.addEventListener("click", () => {
    const isOpen = navElement.classList.toggle("is-open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });
}
