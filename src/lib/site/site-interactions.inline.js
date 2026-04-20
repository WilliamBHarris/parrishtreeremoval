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
  let closeTimeout = null;
  let closePhaseTimeout = null;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const itemLeadDuration = prefersReducedMotion.matches ? 0 : 220;
  const closeDuration = prefersReducedMotion.matches ? 0 : 540;

  const clearCloseTimers = () => {
    if (closeTimeout !== null) {
      window.clearTimeout(closeTimeout);
      closeTimeout = null;
    }
    if (closePhaseTimeout !== null) {
      window.clearTimeout(closePhaseTimeout);
      closePhaseTimeout = null;
    }
  };

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
    clearCloseTimers();
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    body.classList.add("menu-closing-items");
    closePhaseTimeout = window.setTimeout(() => {
      body.classList.remove("menu-open");
      body.classList.remove("menu-closing-items");
      body.classList.add("menu-closing");
      closePhaseTimeout = null;
    }, itemLeadDuration);
    closeTimeout = window.setTimeout(() => {
      body.classList.remove("menu-closing");
      body.classList.remove("menu-closing-items");
      drawer.setAttribute("hidden", "");
      drawer.setAttribute("inert", "");
      scrim.setAttribute("hidden", "");
      closeTimeout = null;

      if (lastFocused instanceof HTMLElement) {
        lastFocused.focus();
      }
    }, closeDuration);
  };

  const openMenu = () => {
    clearCloseTimers();
    lastFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    body.classList.remove("menu-closing");
    body.classList.remove("menu-closing-items");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    drawer.removeAttribute("hidden");
    drawer.removeAttribute("inert");
    scrim.removeAttribute("hidden");
    resetSubmenus();

    window.requestAnimationFrame(() => {
      body.classList.add("menu-open");
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

const bindHeaderMenus = (root = document) => {
  if (root instanceof HTMLElement && root.matches("[data-header-root]")) {
    bindHeaderMenu(root);
    return;
  }

  root.querySelectorAll("[data-header-root]").forEach((headerRoot) => {
    bindHeaderMenu(headerRoot);
  });
};

const bindEstimateModal = () => {
  const modal = document.querySelector("[data-estimate-modal]");

  if (!(modal instanceof HTMLElement) || !document.querySelector("[data-open-estimate-modal]") || modal.dataset.bound === "true") {
    return;
  }

  modal.dataset.bound = "true";

  let lastFocused = null;
  let closeTimeout = null;
  let dragStartY = 0;
  let dragOffsetY = 0;
  let isDragging = false;
  let lockedScrollY = 0;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const sheet = modal.querySelector(".estimate-modal-sheet");
  const handleWrap = modal.querySelector(".estimate-modal-handle-wrap");
  const pageContext = modal.querySelector(".estimate-modal-page-context");
  const header = modal.querySelector(".estimate-modal-header");
  const serviceSelect = modal.querySelector('select[name="service"]');
  const closeDuration = prefersReducedMotion.matches ? 0 : 320;

  const clearCloseTimeout = () => {
    if (closeTimeout !== null) {
      window.clearTimeout(closeTimeout);
      closeTimeout = null;
    }
  };

  const resetDrag = () => {
    dragOffsetY = 0;
    isDragging = false;
    if (modal instanceof HTMLElement) {
      modal.style.setProperty("--estimate-modal-drag-y", "0px");
      modal.classList.remove("is-dragging");
    }
  };

  const lockBodyScroll = () => {
    lockedScrollY = window.scrollY;
    body.style.position = "fixed";
    body.style.top = `-${lockedScrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
  };

  const unlockBodyScroll = () => {
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";
    window.scrollTo(0, lockedScrollY);
  };

  const getFocusableElements = () =>
    Array.from(modal.querySelectorAll(focusableSelector)).filter(
      (element) => !element.hasAttribute("hidden"),
    );

  const focusFirstField = () => {
    const target = getFocusableElements()[0];
    if (target instanceof HTMLElement) {
      window.setTimeout(() => target.focus(), 30);
    }
  };

  const syncServiceFromTrigger = (trigger) => {
    if (!(serviceSelect instanceof HTMLSelectElement) || !(trigger instanceof Element)) return;

    const explicitService = trigger.getAttribute("data-estimate-service");
    if (explicitService) {
      serviceSelect.value = explicitService;
      serviceSelect.dispatchEvent(new Event("change", { bubbles: true }));
      return;
    }

    const premiumServicesRoot = trigger.closest("[data-premium-services]");
    const activePane = premiumServicesRoot?.querySelector("[data-ps-pane].is-active");
    const activeService = activePane instanceof HTMLElement ? activePane.dataset.serviceName : "";
    if (!activeService) return;

    serviceSelect.value = activeService;
    serviceSelect.dispatchEvent(new Event("change", { bubbles: true }));
  };

  const openModal = (trigger = null) => {
    clearCloseTimeout();
    resetDrag();
    lastFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    syncServiceFromTrigger(trigger);
    modal.removeAttribute("hidden");
    modal.removeAttribute("inert");
    modal.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");
    lockBodyScroll();
    window.requestAnimationFrame(() => {
      modal.classList.add("is-open");
    });
    focusFirstField();
  };

  const closeModal = () => {
    clearCloseTimeout();
    resetDrag();
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");
    closeTimeout = window.setTimeout(() => {
      modal.setAttribute("hidden", "");
      modal.setAttribute("inert", "");
      unlockBodyScroll();
      closeTimeout = null;

      if (lastFocused instanceof HTMLElement) {
        lastFocused.focus();
      }
    }, closeDuration);
  };

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const openTrigger = target.closest("[data-open-estimate-modal]");
    if (openTrigger) {
      event.preventDefault();
      openModal(openTrigger);
      return;
    }

    if (target === modal || target.closest("[data-close-estimate-modal]")) {
      closeModal();
    }
  });

  modal.addEventListener("keydown", (event) => {
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

  if (handleWrap instanceof HTMLElement && sheet instanceof HTMLElement) {
    const isDragZoneTarget = (target) =>
      target instanceof Element &&
      Boolean(
        target.closest(".estimate-modal-page-context") ||
        target.closest(".estimate-modal-handle-wrap") ||
        target.closest(".estimate-modal-header"),
      );

    const startDrag = (clientY) => {
      if (window.innerWidth >= 900) return;

      dragOffsetY = 0;
      isDragging = true;
      dragStartY = clientY;
      modal.classList.add("is-dragging");
    };

    const moveDrag = (clientY) => {
      if (!isDragging) return;

      dragOffsetY = Math.max(0, clientY - dragStartY);
      modal.style.setProperty("--estimate-modal-drag-y", `${dragOffsetY}px`);
    };

    const finishDrag = () => {
      if (!isDragging) return;
      const shouldClose = dragOffsetY > 110;
      resetDrag();

      if (shouldClose) {
        closeModal();
      }
    };

    sheet.addEventListener("touchstart", (event) => {
      if (!isDragZoneTarget(event.target)) return;
      const touch = event.touches[0];
      if (!touch) return;
      startDrag(touch.clientY);
    }, { passive: true });

    window.addEventListener("touchmove", (event) => {
      if (!isDragging) return;
      const touch = event.touches[0];
      if (!touch) return;
      if (event.cancelable) {
        event.preventDefault();
      }
      moveDrag(touch.clientY);
    }, { passive: false });

    window.addEventListener("touchend", finishDrag);
    window.addEventListener("touchcancel", finishDrag);

    sheet.addEventListener("pointerdown", (event) => {
      if (window.innerWidth >= 900 || event.pointerType === "touch") return;
      if (!isDragZoneTarget(event.target)) return;
      startDrag(event.clientY);
    });

    window.addEventListener("pointermove", (event) => {
      if (!isDragging || event.pointerType === "touch") return;
      if (event.cancelable) {
        event.preventDefault();
      }
      moveDrag(event.clientY);
    });

    window.addEventListener("pointerup", finishDrag);
    window.addEventListener("pointercancel", finishDrag);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
};

const bindEstimateForm = () => {
  if (document.documentElement.dataset.estimateFormBound === "true") return;
  document.documentElement.dataset.estimateFormBound = "true";

  document.addEventListener("submit", async (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || !form.matches("[data-estimate-form]")) return;

    event.preventDefault();

    if (!form.reportValidity()) return;

    const status = form.querySelector("[data-form-status]");
    const submitButton = form.querySelector("[data-submit-button]");
    const defaultLabel = submitButton instanceof HTMLButtonElement ? submitButton.textContent : "";
    const rawAction = form.getAttribute("action") || "/api/estimate.php";
    const submitUrl = new URL(rawAction, window.location.origin);

    if (submitUrl.origin !== window.location.origin) {
      if (status instanceof HTMLElement) {
        status.textContent =
          "The form is pointing to an unexpected URL. Please refresh and try again.";
        status.className = "form-status is-error";
      }
      return;
    }

    const formData = new FormData(form);

    if (submitButton instanceof HTMLButtonElement) {
      submitButton.disabled = true;
      submitButton.setAttribute("aria-busy", "true");
      submitButton.textContent = "Sending...";
    }

    if (status instanceof HTMLElement) {
      status.textContent = "";
      status.className = "form-status";
    }

    try {
      const response = await fetch(submitUrl.pathname, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const text = await response.text();
      let result = {};

      try {
        result = text ? JSON.parse(text) : {};
      } catch {
        result = {
          success: false,
          message: text || "The server returned an unexpected response.",
        };
      }

      if (!response.ok || result.success !== true) {
        throw new Error(result.message || "Unable to send your request right now.");
      }

      form.reset();

      if (status instanceof HTMLElement) {
        status.textContent = result.message || "Your request was submitted successfully.";
        status.className = "form-status is-success";
      }
    } catch (error) {
      let message = "Unable to submit your request right now.";

      if (error instanceof TypeError) {
        message =
          "The request could not reach the server. Please try again in a moment.";
      } else if (error instanceof Error) {
        message = error.message;
      }

      if (status instanceof HTMLElement) {
        status.textContent = message;
        status.className = "form-status is-error";
      }
    } finally {
      if (submitButton instanceof HTMLButtonElement) {
        submitButton.disabled = false;
        submitButton.setAttribute("aria-busy", "false");
        submitButton.textContent = defaultLabel;
      }
    }
  });
};

bindHeaderMenus();
bindEstimateModal();
bindEstimateForm();
