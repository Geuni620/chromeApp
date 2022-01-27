// 숫자값 읽어들이기
const form = document.querySelector("#form");
const inputRange = document.querySelector("#inputRange");
const inputGuess = document.querySelector("#inputGuess");

const printChose = document.querySelector("#printChose");
const printRandom = document.querySelector("#printRandom");
const resultResult = document.querySelector("#resultResult");

function handleSubmitBtn(event) {
  event.preventDefault();
  const inputRangeValue = parseInt(inputRange.value);
  const inputGuessValue = parseInt(inputGuess.value);
  const RandomNumber = Math.ceil(Math.random() * inputRangeValue);

  printChose.innerText = `You chose: ${inputGuessValue}`;
  printChose.innerText = `the machine chose: ${RandomNumber}`;

  console.log(typeof inputGuessValue);
  console.log(typeof RandomNumber);

  if (RandomNumber === inputGuessValue) {
    resultResult.innerText = `You win`;
  } else {
    resultResult.innerText = `You lost`;
  }
}

form.addEventListener("submit", handleSubmitBtn);
