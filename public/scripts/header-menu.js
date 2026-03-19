const body = document.body;
const toggle = document.querySelector(".menu-toggle");
const drawer = document.querySelector("#mobile-drawer");
const scrim = document.querySelector(".menu-scrim");
const closeButton = document.querySelector(".menu-close");

if (toggle && drawer && scrim && closeButton && toggle.dataset.bound !== "true") {
  toggle.dataset.bound = "true";

  let lastFocused = null;
  const focusableSelector =
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

  const getFocusableElements = () =>
    Array.from(drawer.querySelectorAll(focusableSelector)).filter(
      (element) =>
        !element.hasAttribute("hidden") &&
        element.getAttribute("aria-hidden") !== "true",
    );

  const closeMenu = () => {
    body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    drawer.setAttribute("hidden", "");
    drawer.setAttribute("inert", "");
    scrim.setAttribute("hidden", "");

    if (lastFocused instanceof HTMLElement) {
      lastFocused.focus();
    }
  };

  const openMenu = () => {
    lastFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    drawer.removeAttribute("hidden");
    drawer.removeAttribute("inert");
    scrim.removeAttribute("hidden");

    window.requestAnimationFrame(() => {
      const firstFocusable = getFocusableElements()[0];
      if (firstFocusable instanceof HTMLElement) {
        firstFocusable.focus();
      }
    });
  };

  toggle.addEventListener("click", () => {
    if (body.classList.contains("menu-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeButton.addEventListener("click", closeMenu);
  scrim.addEventListener("click", closeMenu);

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  drawer.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;

    const focusableElements = getFocusableElements();
    if (!focusableElements.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && body.classList.contains("menu-open")) {
      closeMenu();
    }
  });
}
