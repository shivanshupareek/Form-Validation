"use strict";

document
  .getElementById("usernameInput")
  .addEventListener("input", usernameValidation);

document
  .getElementById("passwordInput")
  .addEventListener("input", passwordValidation);

document
  .getElementById("confirmPasswordInput")
  .addEventListener("input", confirmPasswordValidation);

document
  .getElementById("emailInput")
  .addEventListener("input", emailValidation);

document.getElementById("ageInput").addEventListener("input", ageValidation);

document
  .getElementById("numberInput")
  .addEventListener("input", numberValidation);

function usernameValidation() {
  const username = document.getElementById("usernameInput").value;

  let hasSpecialChar = false;
  let hasNumber = false;
  let hasLetter = false;

  const specialChar = /[.@]/;
  const number = /[0-9]/;
  const letter = /[a-zA-Z]/;

  for (let i = 0; i < username.length; i++) {
    if (letter.test(username[i])) {
      hasLetter = true;
    }
    if (specialChar.test(username[i])) {
      hasSpecialChar = true;
    }
    if (number.test(username[i])) {
      hasNumber = true;
    }
  }

  if (!hasLetter) {
    document.getElementById("usernameValidation").innerHTML =
      "requires at least one letter";
    document.getElementById("usernameValidation").classList.add("invalid");
    return false;
  } else if (!hasNumber) {
    document.getElementById("usernameValidation").innerHTML =
      "requires at least one number";
    document.getElementById("usernameValidation").classList.add("invalid");
    return false;
  } else if (!hasSpecialChar) {
    document.getElementById(
      "usernameValidation"
    ).innerHTML = `requires either "@" or  "."`;
    document.getElementById("usernameValidation").classList.add("invalid");
    return false;
  } else {
    document.getElementById("usernameValidation").innerHTML =
      "username is valid";
    document.getElementById("usernameValidation").classList.add("valid");
    document.getElementById("usernameValidation").classList.remove("invalid");
    document.getElementById("emailInput").disabled = false;
    return true;
  }
}

function emailValidation() {
  const email = document.getElementById("emailInput").value;

  const at = /[@]/;
  const commerce = /\.com$/;

  if (!at.test(email)) {
    document.getElementById("emailValidation").innerHTML = `requires "@"`;
    document.getElementById("emailValidation").classList.add("invalid");
    return false;
  } else if (!commerce.test(email)) {
    document.getElementById("emailValidation").innerHTML = `requires ".com"`;
    document.getElementById("emailValidation").classList.add("invalid");
    return false;
  } else {
    document.getElementById("emailValidation").innerHTML = `email is valid`;
    document.getElementById("emailValidation").classList.remove("invalid");
    document.getElementById("emailValidation").classList.add("valid");
    document.getElementById("passwordInput").disabled = false;
    return true;
  }
}

function passwordValidation() {
  const password = document.getElementById("passwordInput").value;

  let hasUppercase = false;
  let hasSpecialChar = false;
  let hasNumber = false;

  const upperCase = /[A-Z]/;
  const specialChar = /[!@#$%^&*()_+=\-{};:"<>,./?]/;
  const number = /[0-9]/;

  for (let i = 0; i < password.length; i++) {
    if (upperCase.test(password[i])) {
      hasUppercase = true;
    }
    if (specialChar.test(password[i])) {
      hasSpecialChar = true;
    }
    if (number.test(password[i])) {
      hasNumber = true;
    }
  }

  if (password.length < 8) {
    document.getElementById("passwordValidation").innerHTML =
      "requires 8 characters";
    document.getElementById("passwordValidation").classList.add("invalid");
    return false;
  } else if (!hasUppercase) {
    document.getElementById("passwordValidation").innerHTML =
      "requires an uppercase letter";
    document.getElementById("passwordValidation").classList.add("invalid");
    return false;
  } else if (!hasSpecialChar) {
    document.getElementById("passwordValidation").innerHTML =
      "requires a special character";
    document.getElementById("passwordValidation").classList.add("invalid");
    return false;
  } else if (!hasNumber) {
    document.getElementById("passwordValidation").innerHTML =
      "requires a number";
    document.getElementById("passwordValidation").classList.add("invalid");
    return false;
  } else {
    document.getElementById("passwordValidation").innerHTML =
      "password is valid";
    document.getElementById("passwordValidation").classList.remove("invalid");
    document.getElementById("passwordValidation").classList.add("valid");
    document.getElementById("confirmPasswordInput").disabled = false;
    return true;
  }
}

function confirmPasswordValidation() {
  const confirmPassword = document.getElementById("confirmPasswordInput").value;
  const password = document.getElementById("passwordInput").value;

  console.log(confirmPassword);
  console.log(password);

  if (confirmPassword !== password) {
    document.getElementById("confirmPasswordValidation").innerHTML =
      "passwords do not match";
    document
      .getElementById("confirmPasswordValidation")
      .classList.add("invalid");
    return false;
  } else {
    document.getElementById("confirmPasswordValidation").innerHTML =
      "passwords match";
    document
      .getElementById("confirmPasswordValidation")
      .classList.remove("invalid");
    document.getElementById("confirmPasswordValidation").classList.add("valid");
    document.getElementById("ageInput").disabled = false;
    return true;
  }
}

function ageValidation() {
  const age = document.getElementById("ageInput").value;

  const currentYear = new Date().getFullYear();
  const ageYear = new Date(age);
  const inputYear = ageYear.getFullYear();

  if (currentYear - inputYear < 18) {
    document.getElementById(
      "ageValidation"
    ).innerHTML = `You must be above 18 years `;
    document.getElementById("ageValidation").classList.add("invalid");
    return false;
  } else {
    document.getElementById("ageValidation").innerHTML = `You are eligible`;
    document.getElementById("ageValidation").classList.remove("invalid");
    document.getElementById("ageValidation").classList.add("valid");
    document.getElementById("numberInput").disabled = false;
    return true;
  }
}

function numberValidation() {
  const number = document.getElementById("numberInput").value;

  const minNumbers = 5;
  const maxNumbers = 15;

  if (number.length < minNumbers) {
    document.getElementById("numberValidation").innerHTML = "minimum 5 digits";
    document.getElementById("numberValidation").classList.add("invalid");
    document.getElementById("submit").disabled = true;
    return false;
  } else if (number.length > maxNumbers) {
    document.getElementById("numberValidation").innerHTML =
      "maximum 15 digits ";
    document.getElementById("numberValidation").classList.add("invalid");
    document.getElementById("submit").disabled = true;
    return false;
  } else {
    document.getElementById("numberValidation").innerHTML =
      "number is in valid range";
    document.getElementById("numberValidation").classList.remove("invalid");
    document.getElementById("numberValidation").classList.add("valid");
    document.getElementById("submit").disabled = false;
    return true;
  }
}

function clickValidation() {
  const clickUsername = usernameValidation();
  const clickPassword = passwordValidation();
  const clickConfirmPassword = confirmPasswordValidation();
  const clickEmail = emailValidation();
  const clickAge = ageValidation();
  const clickNumber = numberValidation();

  return (
    clickPassword &&
    clickUsername &&
    clickEmail &&
    clickAge &&
    clickNumber &&
    clickConfirmPassword
  );
}

function countryCodes() {
  const countryCodesSelect = document.getElementById("countryCodes");

  fetch("/public/countryCodes.json")
    .then((response) => response.json())
    .then((countryCodesData) => {
      countryCodesData.forEach((codes) => {
        const option = document.createElement("option");
        option.value = codes.dial_code;
        option.textContent = `${codes.dial_code}`;
        countryCodesSelect.appendChild(option);
      });
    });
}

function passwordIconToggle() {
  const passwordInput = document.getElementById("passwordInput");
  const toggleIcon = document.getElementById("toggleIcon");
  const eyeIcon = document.getElementById("eyeIcon");

  let passwordIsVisible = true;
  let passwordIsInvisible = true;

  toggleIcon.addEventListener("click", function () {
    if (passwordIsVisible) {
      passwordInput.type = "text";
      eyeIcon.src = "/public/shown.svg";
      eyeIcon.alt = "password is shown";
    } else if (passwordIsInvisible) {
      passwordIsVisible = false;
      passwordInput.type = "password";
      eyeIcon.src = "/public/hidden.svg";
      eyeIcon.alt = "password is hidden";
    } else {
      ("");
    }
    passwordIsVisible = !passwordIsVisible;
  });
}

function confirmPasswordIconToggle() {
  const confirmPasswordInput = document.getElementById("confirmPasswordInput");
  const confirmToggleIcon = document.getElementById("confirmToggleIcon");
  const confirmEyeIcon = document.getElementById("confirmEyeIcon");

  let confirmPasswordIsVisible = true;
  let confirmPasswordIsInvisible = true;

  confirmToggleIcon.addEventListener("click", function () {
    if (confirmPasswordIsVisible) {
      confirmPasswordInput.type = "text";
      confirmEyeIcon.src = "/public/shown.svg";
      confirmEyeIcon.alt = "password is shown";
    } else if (confirmPasswordIsInvisible) {
      confirmPasswordIsVisible = false;
      confirmPasswordInput.type = "password";
      confirmEyeIcon.src = "/public/hidden.svg";
      confirmEyeIcon.alt = "password is hidden";
    } else {
      ("");
    }
    confirmPasswordIsVisible = !confirmPasswordIsVisible;
  });
}

window.onload = function () {
  countryCodes();
  passwordIconToggle();
  confirmPasswordIconToggle();
};
