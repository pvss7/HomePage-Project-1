// Handles the mobile nav toggle button shared across all pages.

export function initNavToggle(toggleButton, navElement) {
  if (!toggleButton || !navElement) return;

  toggleButton.addEventListener("click", () => {
    const isOpen = navElement.classList.toggle("is-open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });
}
