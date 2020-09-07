// Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
todoList.addEventListener("click", completeTodo)

//Functions

function addTodo(event) {
  // Prevent form from submiting
  event.preventDefault();

  //Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Check Mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Check Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //Append To List
  todoList.appendChild(todoDiv);
  //Clear Todo Input Value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall")
    todo.addEventListener('transitionend', () =>{
      todo.remove()
    })
  }
}

function completeTodo(e) {
  const item = e.target;
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.style.textDecoration = "line-through";
    todo.style.opacity = "0.2";
  }
}
