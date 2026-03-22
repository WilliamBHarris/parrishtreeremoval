const body = document.body;
const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const bindHeaderMenu = (root) => {
  if (!(root instanceof HTMLElement) || root.dataset.menuBound === "true") return;

  const toggle = root.querySelector(".menu-toggle");
  const drawerId = toggle instanceof HTMLElement ? toggle.getAttribute("aria-controls") : null;
  const drawer = drawerId ? root.querySelector(`#${drawerId}`) : null;
  const scrim = root.querySelector(".menu-scrim");

  if (!(toggle instanceof HTMLElement) || !(drawer instanceof HTMLElement) || !(scrim instanceof HTMLElement)) {
    return;
  }

  root.dataset.menuBound = "true";

  const submenuToggles = Array.from(drawer.querySelectorAll(".drawer-submenu-toggle"));
  let lastFocused = null;

  const getFocusableElements = () =>
    Array.from(drawer.querySelectorAll(focusableSelector)).filter(
      (element) =>
        !element.hasAttribute("hidden") &&
        element.getAttribute("aria-hidden") !== "true",
    );

  const setSubmenuState = (submenuToggle, isExpanded) => {
    const submenuGroup = submenuToggle.closest(".drawer-submenu-group");
    const submenuId = submenuToggle.getAttribute("aria-controls");
    if (!submenuGroup || !submenuId) return;

    const submenu = submenuGroup.querySelector(`#${submenuId}`);
    if (!(submenu instanceof HTMLElement)) return;

    submenuToggle.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    submenu.hidden = !isExpanded;
  };

  const resetSubmenus = () => {
    submenuToggles.forEach((submenuToggle) => {
      const submenuGroup = submenuToggle.closest(".drawer-submenu-group");
      const shouldOpenByDefault =
        submenuGroup?.getAttribute("data-submenu-default-open") === "true";
      setSubmenuState(submenuToggle, shouldOpenByDefault);
    });
  };

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
    resetSubmenus();

    window.requestAnimationFrame(() => {
      const firstFocusable = getFocusableElements()[0];
      if (firstFocusable instanceof HTMLElement) {
        firstFocusable.focus();
      }
    });
  };

  toggle.addEventListener("click", () => {
    if (body.classList.contains("menu-open") && toggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
    } else {
      openMenu();
    }
  });

  scrim.addEventListener("click", closeMenu);

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  submenuToggles.forEach((submenuToggle) => {
    submenuToggle.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const isExpanded = submenuToggle.getAttribute("aria-expanded") === "true";
      setSubmenuState(submenuToggle, !isExpanded);
    });
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
    if (
      event.key === "Escape" &&
      body.classList.contains("menu-open") &&
      toggle.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
    }
  });
};

export const bindHeaderMenus = (root = document) => {
  if (root instanceof HTMLElement && root.matches("[data-header-root]")) {
    bindHeaderMenu(root);
    return;
  }

  root.querySelectorAll("[data-header-root]").forEach((headerRoot) => {
    bindHeaderMenu(headerRoot);
  });
};

bindHeaderMenus();
