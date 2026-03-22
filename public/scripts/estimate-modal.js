const modal = document.querySelector("[data-estimate-modal]");
const body = document.body;

if (modal instanceof HTMLElement && document.querySelector("[data-open-estimate-modal]") && modal.dataset.bound !== "true") {
  modal.dataset.bound = "true";

  let lastFocused = null;
  const focusableSelector =
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

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

  const openModal = () => {
    lastFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    modal.removeAttribute("hidden");
    modal.removeAttribute("inert");
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");
    focusFirstField();
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modal.setAttribute("hidden", "");
    modal.setAttribute("inert", "");
    body.classList.remove("modal-open");

    if (lastFocused instanceof HTMLElement) {
      lastFocused.focus();
    }
  };

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const openTrigger = target.closest("[data-open-estimate-modal]");
    if (openTrigger) {
      event.preventDefault();
      openModal();
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

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}
