const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleBtnClick() {
  const username = loginInput.value;
  if (username === "") {
    console.log("Please write your name");
  } else if (username.length > 15) {
    console.log("Your name is too long");
  }
}

loginButton.addEventListener("click", handleBtnClick);
