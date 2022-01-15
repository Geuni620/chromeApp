const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(tomato) {
  tomato.preventDefault();
  const username = loginInput.value;
}

loginForm.addEventListener("submit", onLoginSubmit);
