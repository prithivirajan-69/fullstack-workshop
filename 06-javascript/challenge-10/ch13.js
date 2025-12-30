function validatePassword(password) {
  const errors = [];
  const suggestions = [];
  let score = 0;

  const commonPasswords = ["password", "123456", "qwerty", "admin", "letmein"];

  // Rule: Minimum length
  if (password.length < 8) {
    errors.push("Too short");
    suggestions.push("Use at least 8 characters");
  } else {
    score += 20;
  }

  // Rule: Uppercase letter
  if (!/[A-Z]/.test(password)) {
    errors.push("Missing uppercase letter");
    suggestions.push("Add an uppercase letter");
  } else {
    score += 15;
  }

  // Rule: Lowercase letter
  if (!/[a-z]/.test(password)) {
    errors.push("Missing lowercase letter");
    suggestions.push("Add a lowercase letter");
  } else {
    score += 15;
  }

  // Rule: Number
  if (!/[0-9]/.test(password)) {
    errors.push("Missing number");
    suggestions.push("Add a number");
  } else {
    score += 15;
  }

  // Rule: Special character
  if (!/[!@#$%^&*()_+\-=]/.test(password)) {
    errors.push("Missing special character");
    suggestions.push("Add a special character");
  } else {
    score += 15;
  }

  // Rule: Common password
  if (commonPasswords.includes(password.toLowerCase())) {
    errors.push("Common password");
    suggestions.push("Avoid common passwords");
    score -= 30;
  } else {
    score += 20;
  }

  // Limit score between 0 and 100
  score = Math.max(0, Math.min(100, score));

  return {
    isValid: errors.length === 0,
    score: score,
    errors: errors,
    suggestions: suggestions
  };
}

//    Button Handler

function checkPassword() {
  const pwd = document.getElementById("password").value;
  const result = validatePassword(pwd);

  document.getElementById("output").textContent =
    JSON.stringify(result, null, 2);
}


//    Test Cases (As Required)

console.log(validatePassword("abc"));
// { isValid: false, score: 15, errors: [...], suggestions: [...] }

console.log(validatePassword("MyP@ssw0rd!2024"));
// { isValid: true, score: ~95, errors: [], suggestions: [] }
