const title = document.querySelector(".hello h1");

function handleTitleClick() {
  console.log("title is here!");
}

function handleMouseEnter() {
  title.innerText = "Mouse is here";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("Copier");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("ALL GOODDDD");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
