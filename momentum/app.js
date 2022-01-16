const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(tomato) {
  tomato.preventDefault();
  const username = loginInput.value;
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

link.addEventListener("click", handleLinkClick);
