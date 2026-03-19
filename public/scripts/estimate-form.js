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
