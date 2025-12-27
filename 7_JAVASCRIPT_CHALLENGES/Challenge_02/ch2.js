// DOM elements
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");

const usernameMsg = document.getElementById("usernameMsg");
const emailMsg = document.getElementById("emailMsg");
const passwordMsg = document.getElementById("passwordMsg");
const confirmMsg = document.getElementById("confirmMsg");

// Validation flags
let isUsernameValid = false;
let isEmailValid = false;
let isPasswordValid = false;
let isConfirmValid = false;

// Enable / Disable submit button
function checkFormValidity() {
    submitBtn.disabled = !(
        isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmValid
    );
}

// Username Validation


username.addEventListener("blur", () => {
    const regex = /^[a-zA-Z0-9]{3,15}$/;

    if (regex.test(username.value)) {
        usernameMsg.textContent = "✔ Valid username";
        usernameMsg.style.color = "green";
        isUsernameValid = true;
    } else {
        usernameMsg.textContent = "Username must be 3-15 alphanumeric characters";
        usernameMsg.style.color = "red";
        isUsernameValid = false;
    }
    checkFormValidity();
});


// Email Validation

email.addEventListener("blur", () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email.value)) {
        emailMsg.textContent = "✔ Valid email";
        emailMsg.style.color = "green";
        isEmailValid = true;
    } else {
        emailMsg.textContent = "Enter a valid email address";
        emailMsg.style.color = "red";
        isEmailValid = false;
    }
    checkFormValidity();
});

// Password Validation


password.addEventListener("blur", () => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (regex.test(password.value)) {
        passwordMsg.textContent = "✔ Strong password";
        passwordMsg.style.color = "green";
        isPasswordValid = true;
    } else {
        passwordMsg.textContent =
            "Min 8 chars, 1 uppercase, 1 number, 1 special char";
        passwordMsg.style.color = "red";
        isPasswordValid = false;
    }
    checkFormValidity();
});



// Confirm Password Validation

confirmPassword.addEventListener("blur", () => {
    if (confirmPassword.value === password.value && password.value !== "") {
        confirmMsg.textContent = "✔ Passwords match";
        confirmMsg.style.color = "green";
        isConfirmValid = true;
    } else {
        confirmMsg.textContent = "Passwords do not match";
        confirmMsg.style.color = "red";
        isConfirmValid = false;
    }
    checkFormValidity();
});

// Prevent invalid submit

document.getElementById("registerForm").addEventListener("submit", (e) => {
    if (submitBtn.disabled) {
        e.preventDefault();
    }
});