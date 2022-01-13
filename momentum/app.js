const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.innerText = `Hello ${username}`;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${saveUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const saveUsername = localStorage.getItem(USERNAME_KEY);

console.log(saveUsername);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreeting(saveUsername);
}
