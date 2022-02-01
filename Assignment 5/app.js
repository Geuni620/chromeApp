const body = document.querySelector("body");
const button = document.querySelector(".BtnClick");

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

function onClickBtn() {
  let randomColorsArray = [];
  for (let i = 0; i < 2; i++) {
    randomColors = colors[Math.floor(Math.random() * colors.length)];
    if (randomColorsArray.indexOf(randomColors) === -1) {
      randomColorsArray.push(randomColors);
    } else {
      i--;
    }
  }
  body.style.background = `linear-gradient(to right, ${randomColorsArray[0]}, ${randomColorsArray[1]})`;
  console.log(randomColorsArray);
}

button.addEventListener("click", onClickBtn);
