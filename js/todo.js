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
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
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

loadTodos();
todoForm.addEventListener("submit", handleTodoSubmit);
