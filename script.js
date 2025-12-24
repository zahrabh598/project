
const form = document.getElementById("signupForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("usernameError");
const strengthText = document.getElementById("Strengthtext");

username.addEventListener("input", () => {
  if (username.value.length < 3 || username.value.length > 15) {
    usernameError.textContent =
      "Username must be between 3 and 15 characters";
  } else {
    usernameError.textContent = "";
  }
});

password.addEventListener("input", () => {
  let strength = "password strength=strong";

  if (
    password.value.length >= 8 &&
    /[0-9!@#$%^&*]/.test(password.value)
    
  ) {
  passwordError.textContent =
    "password strength:weak";
    strength = "Strong";
  }

  strengthText.textContent = "Password Strength: " + strength;
  strengthText.style.color = strength === "Strong" ? "green" : "red";
  

});

form.addEventListener("submit", (e) => {
    e.preventDefault();
 ;
 if(input.value === 'correct') {
  input.classList.add('valid');
  input.classList.remove('invalid');
} else {
  input.classList.add('invalid');
  input.classList.remove('valid');
}

  if (usernameError.textContent !== "") {
    alert("Please fix errors before submitting");
    return;
  }

  
});
const passwordInput = document.getElementById("password");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");


const ruleLength = document.getElementById("rule-length");
const ruleNumber = document.getElementById("rule-number");
const ruleNoName = document.getElementById("rule-no-name");
const ruleNopass = document.getElementById("rule-strength text-pas");
function setRule(element, isValid) {
  const icon = element.querySelector(".icon");

  if (isValid) {
    element.classList.add("valid");
    element.classList.remove("invalid");
    icon.textContent = "✔";
  } else {
    element.classList.add("invalid");
    element.classList.remove("valid");
    icon.textContent = "✖";
  }
 

}
passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const username = usernameInput.value;
  const email = emailInput.value;

  const lengthOk = password.length >= 8;
  const numberOk = /[0-9!@#$%^&*]/.test(password);
  const noNameOk =
    (!username || !password.includes(username)) &&
    (!email || !password.includes(email));

  setRule(ruleLength, lengthOk);
  setRule(ruleNumber, numberOk);
  setRule(ruleNoName, noNameOk);
  setRule(ruleNopass, nopassOk);


  if (lengthOk && numberOk && noNameOk &&  nopassOk) {
    passwordInput.classList.add("success-border");
    passwordInput.classList.remove("error-border");
  }
 alert("Account Created Successfully 🎉");
  form.reset();
});
  


