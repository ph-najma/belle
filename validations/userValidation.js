let username = false;
let useremail = false;
let userpassword = false;

function updateSubmitButton() {
  const submitButton = document.getElementById("submitButton");

  if (username && useremail && userpassword) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "disabled");
  }
}
function updateSubmitButton() {
  const submitButton = document.getElementById("submitButtonlogin");

  if (useremail && userpassword) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "disabled");
  }
}

function validateName() {
  let name = document.getElementById("name").value;
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!name) {
    username = false;
    document.getElementById("nameError").innerText = "Name is required";
  } else if (!name.match(nameRegex)) {
    username = false;
    document.getElementById("nameError").innerText =
      "Name can only contain letters and spaces";
  } else {
    username = true;
    document.getElementById("nameError").innerText = "";
    updateSubmitButton();
  }
}

function validateEmail() {
  let email = document.getElementById("email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    useremail = false;
    document.getElementById("emailError").innerText = "Email is required";
  } else if (!email.match(emailRegex)) {
    useremail = false;
    document.getElementById("emailError").innerText =
      "Please enter a valid email address";
  } else {
    useremail = true;
    document.getElementById("emailError").innerText = "";
    updateSubmitButton();
  }
}

function validatePassword() {
  let password = document.getElementById("password").value;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
  if (!password) {
    userpassword = false;
    document.getElementById("passwordError").innerText = "Password is required";
  } else if (!password.match(passwordRegex)) {
    userpassword = false;
    document.getElementById("passwordError").innerText =
      "Password must contain at least 6 characters, including at least one uppercase letter, one lowercase letter, and one digit";
  } else {
    userpassword = true;
    document.getElementById("passwordError").innerText = "";
    updateSubmitButton();
  }
}
