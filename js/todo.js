const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  todos = todos.filter((todo) => {
    return todo.id !== parseInt(li.id);
  });
  li.remove();
  saveTodos();
}

function isTodosMaximum() {
  const savedTodos = localStorage.getItem(TODOS_KEY);
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
    if (todos.length >= 15) {
      alert("할 일 목록은 최대 15개 까지 입력할 수 있습니다.");
      return true;
    }
  }
  return false;
}

function addTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodo.text;
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  li.id = newTodo.id;
  li.classList.add("flex");
  li.classList.add("justify-between");
  li.classList.add("mt-1");
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  if (isTodosMaximum()) {
    return;
  }
  const newTodo = {
    id: Date.now(),
    text: todoInput.value,
  };
  todoInput.value = "";
  todos.push(newTodo);
  addTodo(newTodo);
  saveTodos();
}

function loadTodos() {
  const savedTodos = localStorage.getItem(TODOS_KEY);
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
    todos.map(addTodo);
  }
}

function setTodosVisible() {
  const user = localStorage.getItem("username");
  if (user) {
    todoForm.classList.remove("hidden");
    todoList.classList.remove("hidden");
  } else {
    todoForm.classList.add("hidden");
    todoList.classList.add("hidden");
  }
}

function todoStart() {
  setTodosVisible();
  loadTodos();
  todoForm.addEventListener("submit", handleTodoSubmit);
}

todoStart();
