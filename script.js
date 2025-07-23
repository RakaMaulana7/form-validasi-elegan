const form = document.getElementById("form");
const inputs = form.querySelectorAll("input");
const popup = document.getElementById("popup");

function showError(input, message) {
  const small = input.nextElementSibling;
  small.innerText = message;
  small.style.display = "block";
  input.classList.add("invalid");
  input.classList.remove("valid");
}

function showSuccess(input) {
  const small = input.nextElementSibling;
  small.innerText = "";
  small.style.display = "none";
  input.classList.remove("invalid");
  input.classList.add("valid");
}

function checkInputs() {
  let valid = true;

  inputs.forEach((input) => {
    const value = input.value.trim();

    if (input.id === "name") {
      if (value.length < 3) {
        showError(input, "Nama minimal 3 karakter.");
        valid = false;
      } else {
        showSuccess(input);
      }
    }

    if (input.id === "email") {
      const regex = /^\S+@\S+\.\S+$/;
      if (!regex.test(value)) {
        showError(input, "Format email salah.");
        valid = false;
      } else {
        showSuccess(input);
      }
    }

    if (input.id === "password") {
      if (value.length < 6) {
        showError(input, "Password minimal 6 karakter.");
        valid = false;
      } else {
        showSuccess(input);
      }
    }

    if (input.id === "confirmPassword") {
      const passwordValue = document.getElementById("password").value;
      if (value !== passwordValue) {
        showError(input, "Password tidak cocok.");
        valid = false;
      } else {
        showSuccess(input);
      }
    }
  });

  return valid;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (checkInputs()) {
    popup.style.display = "block";
    form.reset();
    inputs.forEach(input => input.classList.remove("valid"));
  }
});

function closePopup() {
  popup.style.display = "none";
}
