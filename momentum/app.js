const body = document.querySelector("body");

function handleResize() {
  const windowFrame = window.innerWidth;
  if (windowFrame <= 500) {
    body.classList.add("blue");
    body.classList.remove("purple");
    body.classList.remove("yellow");
  } else if (windowFrame > 500 && windowFrame <= 1000) {
    body.classList.remove("blue");
    body.classList.remove("yellow");
    body.classList.add("purple");
  } else if (windowFrame > 1000) {
    body.classList.remove("purple");
    body.classList.remove("blue");
    body.classList.add("yellow");
  }
}

window.addEventListener("resize", handleResize);
