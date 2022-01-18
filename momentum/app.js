//get range number
const formRangeNumber = document.querySelector(".formRangeNumber");
const inputRangeNumber = document.querySelector(".inputRangeNumber");

//get guess number
const formGuessNumber = document.querySelector(".formGuessNumber");
const inputGuessNumber = document.querySelector(".inputGuessNumber");

function guessHandleSubmit(event) {
  event.preventDefault();
  const rangeNumber = inputRangeNumber.value;
  const guessNumber = inputGuessNumber.value;
  const test = Math.floor(Math.random() * rangeNumber);
}

formGuessNumber.addEventListener("submit", guessHandleSubmit);

//number random create
