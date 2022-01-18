//get range number
const formRangeNumber = document.querySelector(".formRangeNumber");
const inputRangeNumber = document.querySelector(".inputRangeNumber");

//get guess number
const formGuessNumber = document.querySelector(".formGuessNumber");
const inputGuessNumber = document.querySelector(".inputGuessNumber");

//get Text
const choseResultText = document.getElementById("choseResult");
const randomResultText = document.getElementById("randomResult");
const resultResult = document.getElementById("resultResult");

function guessHandleSubmit(event) {
  event.preventDefault();
  const rangeNumber = inputRangeNumber.value;
  const guessNumber = parseInt(inputGuessNumber.value);
  const randonNumber = Math.ceil(Math.random() * rangeNumber);

  choseResultText.innerText = `You chose ${guessNumber}`;
  randomResultText.innerText = `The machine chose ${randonNumber}`;

  if (guessNumber === randonNumber) {
    resultResult.innerText = "You win!";
  } else {
    resultResult.innerText = "You Lose!";
  }
}

formGuessNumber.addEventListener("submit", guessHandleSubmit);
