// Constants:
const formElement = document.querySelector("#form");
const validationConfig = {
  formSelector: ".form",
  inputSelector: ".input",
  submitButtonSelector: ".submit-button",
  inputErrorClass: "input_invalid",
  inputValidClass: "input_valid",
  errorClass: "input-error_visible",
};

// Create an instance of the validator class
const formValidator = new FormValidator(validationConfig, formElement);

// Enable for validation
formValidator.enableValidation();

// Event-listeners:
formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputsList = Array.from(formElement.querySelectorAll(".input"));

  inputsList.forEach((input) => console.log({name: input.name, value: input.value}));
});
