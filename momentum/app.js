const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleBtnClick() {
  console.log("Hello, ", loginInput.value);
  console.log("click");
}

loginButton.addEventListener("click", handleBtnClick);
