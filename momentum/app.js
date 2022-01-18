//get range number
const formRangeNumber = document.querySelector(".formRangeNumber");
const inputRangeNumber = document.querySelector(".inputRangeNumber");

//get guess number
const formGuessNumber = document.querySelector(".formGuessNumber");
const inputGuessNumber = document.querySelector(".inputGuessNumber");

function rangeHandleSubmit(event) {
  event.preventDefault();
  const rangeNumber = inputRangeNumber.value;
  console.log(rangeNumber);
}

function guessHandleSubmit(event) {
  event.preventDefault();
  const guessNumber = inputGuessNumber.value;
  console.log(guessNumber);
}

formRangeNumber.addEventListener("submit", rangeHandleSubmit);
formGuessNumber.addEventListener("submit", guessHandleSubmit);
