const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS_NAME = "hidden";
const GREETING_SAY = "Hello";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS_NAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  setGreetings(username);
}

function setGreetings(username) {
  greeting.innerText = `${GREETING_SAY} ${username}`;
  greeting.classList.remove(HIDDEN_CLASS_NAME);
}

function checkLocalStorageIsEmpty() {
  const username = localStorage.getItem(USERNAME_KEY);
  if (username) {
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    setGreetings(username);
  } else {
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.addEventListener("submit", onLoginSubmit);
  }
}

checkLocalStorageIsEmpty();
