const btnSubmit = document.querySelector(".btn-submit");
const emailInput = document.querySelector(".input-email");
const errorMessage = document.querySelector(".error-msg");
const errorIcon = document.querySelector(".error-icon");

// function validateEmail(e) {
//   e.preventDefault();
//   if (
//     (emailInput.value.match = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
//   ) {
//     errorMessage.textContent = "Please provide a valid email address";
//   }
// }

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    !emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    errorMessage.textContent = "Please provide a valid email address";
    emailInput.style.border = "2px solid red";
    errorIcon.style.display = "block";
  } else {
    return true;
  }
});
