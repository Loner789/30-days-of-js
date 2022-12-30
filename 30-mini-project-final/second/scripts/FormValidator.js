// Form-validation class
class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._inputValidClass = config.inputValidClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._inputsList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  _showInputError(inputElement) {
    inputElement.classList.add(this._inputErrorClass);
    this._errorElement.classList.add(this._errorClass);
    this._errorElement.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    inputElement.classList.remove(this._inputErrorClass);
    inputElement.classList.add(this._inputValidClass);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _checkInvalidInputs() {
    return this._inputsList.some(
      (inputElement) => !inputElement.validity.valid
    );
  }

  _toggleButtonState() {
    if (this._checkInvalidInputs()) {
      this.disableButton();
    } else {
      this.enableButton();
    }
  }

  _setEventListeners() {
    this._toggleButtonState();

    this._inputsList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._errorElement = this._formElement.querySelector(
          `.${inputElement.id}-error`
        );
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  clearErrors() {
    this._inputsList.forEach((inputElement) => {
      this._errorElement = this._formElement.querySelector(
        `.${inputElement.id}-error`
      );
      this._hideInputError(inputElement);
    });
  }

  enableButton() {
    this._buttonElement.disabled = false;
  }

  disableButton() {
    this._buttonElement.disabled = true;
  }

  enableValidation() {
    this._setEventListeners();
  }
}
