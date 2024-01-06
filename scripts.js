var inputName = document.getElementById("name");
var inputNumber = document.getElementById("number");
var inputMonth = document.getElementById("month");
var inputYear = document.getElementById("year");
var inputCvc = document.getElementById("cvc");

var cardName = document.querySelector(".card-name");
var cardNumber = document.querySelector(".card-number");
var cardDate = document.querySelector(".card-date");
var cardCvc = document.querySelector(".card-cvc");

var formElement = document.querySelector(".form");
var confirmButton = document.querySelector(".confirm");
var completeElement = document.querySelector(".complete");
var continueButton = document.querySelector(".continue");

var warningName = document.querySelector(".warning-name");
var warningNumber = document.querySelector(".warning-number");
var warningMonth = document.querySelector(".warning-month");
var warningYear = document.querySelector(".warning-year");
var warningCvc = document.querySelector(".warning-cvc");

inputName.addEventListener("input", function () {
  if (!isAlphabetic(this.value)) {
    warningName.style.display = "block";
    inputName.style.border = "1px solid red";
  } else {
    warningName.style.display = "none";
    inputName.style.border = "1px solid var(--light-grayish-violet)";
  }

  if (this.value === "") {
    cardName.innerHTML = "JANE APPLESEED";
  } else {
    cardName.innerHTML = this.value.toUpperCase();
  }
});

inputNumber.addEventListener("input", function () {
  if (!isNumeric(this.value, 16)) {
    warningNumber.style.display = "block";
    inputNumber.style.border = "1px solid red";
  } else {
    warningNumber.style.display = "none";
    inputNumber.style.border = "1px solid var(--light-grayish-violet)";
  }

  this.value = formatNumber(this.value.replaceAll(" ", ""));
  if (this.value === "") {
    cardNumber.innerHTML = "0000 0000 0000 0000";
  } else {
    cardNumber.innerHTML = this.value;
  }
});

const formatNumber = (number) =>
  number.split("").reduce((seed, next, index) => {
    if (index !== 0 && !(index % 4)) seed += " ";
    return seed + next;
  }, "");

inputMonth.addEventListener("input", function () {
  if (!isNumeric(this.value, 2) || this.value < 1 || this.value > 12) {
    warningMonth.style.display = "block";
    inputMonth.style.border = "1px solid red";
  } else {
    warningMonth.style.display = "none";
    inputMonth.style.border = "1px solid var(--light-grayish-violet)";
  }

  yearValue = inputYear.value === "" ? "00" : inputYear.value;
  if (this.value === "") {
    cardDate.innerHTML = `00/${yearValue}`;
  } else {
    cardDate.innerHTML = `${this.value}/${yearValue}`;
  }
});

inputYear.addEventListener("input", function () {
  if (!isNumeric(this.value, 2) || this.value < 24) {
    warningYear.style.display = "block";
    inputYear.style.border = "1px solid red";
  } else {
    warningYear.style.display = "none";
    inputYear.style.border = "1px solid var(--light-grayish-violet)";
  }

  monthValue = inputMonth.value === "" ? "00" : inputMonth.value;
  if (this.value === "") {
    cardDate.innerHTML = `${monthValue}/${this.value}`;
  } else {
    cardDate.innerHTML = `${monthValue}/${this.value}`;
  }
});

inputCvc.addEventListener("input", function () {
  if (!isNumeric(this.value, 3)) {
    warningCvc.style.display = "block";
    inputCvc.style.border = "1px solid red";
  } else {
    warningCvc.style.display = "none";
    inputCvc.style.border = "1px solid var(--light-grayish-violet)";
  }

  if (this.value === "") {
    cardCvc.innerHTML = "000";
  } else {
    cardCvc.innerHTML = this.value;
  }
});

formElement.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    warningName.style.display === "none" &&
    warningNumber.style.display === "none" &&
    warningMonth.style.display === "none" &&
    warningYear.style.display === "none" &&
    warningCvc.style.display === "none"
  ) {
    formElement.style.display = "none";
    completeElement.style.display = "flex";
  }
});

continueButton.addEventListener("click", function () {
  formElement.style.display = "block";
  completeElement.style.display = "none";
});

function isAlphabetic(inputValue) {
  const trimmedValue = inputValue.replaceAll(" ", "");
  if (/^[a-zA-Z]+$/.test(trimmedValue)) return true;
  return false;
}

function isNumeric(inputValue, inputLength) {
  const trimmedValue = inputValue.replaceAll(" ", "");

  if (/^\d+$/.test(trimmedValue) && trimmedValue.length === inputLength)
    return true;
  return false;
}

// ANIMATIONS

anime({
  targets: ".card-front-group",
  opacity: [0, 1],
  translateY: [-15, 0],
  duration: 500,
  easing: "easeInOutQuad",
});

anime({
  targets: ".card-back-group",
  opacity: [0, 1],
  translateY: [15, 0],
  duration: 500,
  easing: "easeInOutQuad",
});

anime({
  targets: ".name-group",
  opacity: [0, 1],
  translateY: [-15, 0],
  duration: 500,
  delay: 100,
  easing: "easeInOutQuad",
});

anime({
  targets: ".number-group",
  opacity: [0, 1],
  translateY: [-15, 0],
  duration: 500,
  delay: 300,
  easing: "easeInOutQuad",
});

anime({
  targets: ".form-group",
  opacity: [0, 1],
  translateY: [-15, 0],
  duration: 500,
  delay: 500,
  easing: "easeInOutQuad",
});

anime({
  targets: ".confirm",
  opacity: [0, 1],
  translateY: [-15, 0],
  duration: 500,
  delay: 700,
  easing: "easeInOutQuad",
});
