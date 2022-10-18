import "./styles/index.scss";
import App from "./utils/crud";
import Store from "./utils/store";

let todos = new Store().todos;
const app = new App();

const todoList = document.querySelector("[data-todo-list]");
const todoButton = document.querySelector("[data-clear-completed]");
const todoReset = document.querySelector("[data-refresh]");
const todoForm = document.querySelector("[data-form]");

const render = () => {
  todoList.innerHTML = ''
  todos.forEach((todo) => {
    const { completed, description } = todo;
  
    const todoItem = document.createElement("li");
    todoItem.className = "todoItem";
  
    const todoCheckbox = document.createElement("input");
    todoCheckbox.type = "checkbox";
    todoCheckbox.checked = completed;
    const todoDescription = document.createElement("span");
    todoDescription.innerText = description;
    const todoMore = document.createElement("i");
    todoMore.className = "fa fa-ellipsis-v";
  
    todoItem.append(todoCheckbox, todoDescription, todoMore);
    todoList.append(todoItem);
  });
}
render();

const handleCheckboxChange = (event, index) => {
  app.editTask(index + 1, { completed: event.target.checked });
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const description = event.target.elements.description.value;
  event.target.elements.description.value = '';
  app.addTask(todos, description);
}

const listen = () => {
  const todoItems = document.querySelectorAll(".todoItem");
  todoItems.forEach((todo, index) => {
    todo.children[0].addEventListener("change", (e) => {
      handleCheckboxChange(e, index);
    });
  });
}
listen();

todoButton.addEventListener('click', () => {
  todos = app.clearAllCompleted();
  render();
  listen();
})

todoReset.addEventListener('click', (e) => {
  // this helps the refresh button to spin (1 second)
  e.target.classList.add('clicked');
  e.target.style.pointerEvents = 'none';
  setTimeout(() => {
    e.target.classList.remove('clicked');
    e.target.style.pointerEvents = 'all';
  }, 1000)

  todos = app.refresh();
  render();
  listen();
})

todoForm.addEventListener('submit', (e) => {
  handleFormSubmit(e);
  render();
  listen();
});
