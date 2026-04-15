const form = document.querySelector(".newsletter-form");
const emailInput = document.querySelector("#email");
const card = document.querySelector(".card");
const successCard = document.querySelector(".success-card");
const successEmail = successCard.querySelector(".success-panel strong");
const dismissBtn = successCard.querySelector(".dismiss-btn");

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function createErrorMessage() {
  const error = document.createElement("p");
  error.className = "error-message";
  error.setAttribute("aria-live", "polite");
  emailInput.insertAdjacentElement("afterend", error);
  return error;
}

function showError(message) {
  const error = form.querySelector(".error-message") || createErrorMessage();
  error.textContent = message;
  emailInput.classList.add("input-error");
}

function clearError() {
  const error = form.querySelector(".error-message");
  if (error) {
    error.textContent = "";
  }
  emailInput.classList.remove("input-error");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = emailInput.value.trim();

  if (!emailValue) {
    showError("This field is required");
    return;
  }

  if (!isValidEmail(emailValue)) {
    showError("Please provide a valid email");
    return;
  }

  clearError();
  successEmail.textContent = emailValue;
  card.classList.add("hidden");
  successCard.classList.remove("hidden");
});

dismissBtn.addEventListener("click", () => {
  successCard.classList.add("hidden");
  card.classList.remove("hidden");
  emailInput.value = "";
  emailInput.focus();
  clearError();
});
