
const todos = [];
const list = document.querySelector(".todos");
const form = document.querySelector(".add-todo-form");

function addTodo() {
  let input = document.getElementsByName("add-todo");
  form.addEventListener('submit', event => {
    let toDo = {};
    toDo.input = input.value; //toDo[input]
    toDo.done = false;
    todos.push(toDo);
    input.value = "";
  });
}

function populateList () {
  todos.forEach(el => {
    
    const done = document.createElement("input");
    done.setAttribute('type', 'checkbox');
  });
}
