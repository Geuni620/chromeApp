const title = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);
