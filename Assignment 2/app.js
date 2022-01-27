const body = document.querySelector("body");
const colorArray = ["#2E8CD5", "#904FAD", "#EEBC12"];

function handleResize() {
  const windowFrame = window.innerWidth;
  body.innerText = "Hello";
  body.style.color = "white";
  if (windowFrame <= 500) {
    body.style.background = colorArray[0];
  } else if (windowFrame > 500 && windowFrame <= 1000) {
    body.style.background = colorArray[1];
  } else if (windowFrame > 1000) {
    body.style.background = colorArray[2];
  }
}

window.addEventListener("resize", handleResize);
