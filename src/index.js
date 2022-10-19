import "./styles/index.scss";
import App from "./utils/crud";
import Store from "./utils/store";

let todos = new Store().todos;
const app = new App();

const todoList = document.querySelector("[data-todo-list]");
const todoButton = document.querySelector("[data-clear-completed]");
const todoReset = document.querySelector("[data-refresh]");
const todoForm = document.querySelector("[data-form]");
const todoInput = document.querySelector("[data-form-input]");
todoInput.focus();

const render = () => {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const { completed, description } = todo;

    const todoItem = document.createElement("li");
    todoItem.className = "todoItem";

    const todoCheckbox = document.createElement("input");
    todoCheckbox.type = "checkbox";
    todoCheckbox.checked = completed;
    todoCheckbox.className = "todoCheckbox";
    const todoDescription = document.createElement("span");
    todoDescription.innerText = description;
    todoDescription.className = "todoDescription";
    const todoMore = document.createElement("i");
    todoMore.className = "fa fa-ellipsis-v";

    todoItem.append(todoCheckbox, todoDescription, todoMore);
    todoList.append(todoItem);
  });
};
render();

const handleCheckboxChange = (event, index) => {
  app.editTask(index + 1, { completed: event.target.checked });
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const description = event.target.elements.description.value;
  event.target.elements.description.value = "";
  if (description.trim().length) {
    app.addTask(todos, description);
  }
};

const handleDeleteTask = (e, todoItemIndex) => {
  if (e.target.classList.contains("fa-trash")) {
    todos = app.deleteTask(todos, todoItemIndex + 1);
    render();
    listen();
  }
};

const getElementIndex = (element) => {
  if (!element?.parentNode) return;
  return Array.from(element.parentNode.children).indexOf(element);
};

const disablePrevEditTaskFor = (index) => {
  const prevInput = document.querySelector(".tempInput");
  const prevInputParent = prevInput?.parentElement;
  let prevIndex = getElementIndex(prevInputParent);
  const newNode = document.createElement("span");
  newNode.className = "todoDescription";
  newNode.innerText = prevInput?.value;
  if (prevIndex !== index) {
    prevInputParent?.replaceChild(newNode, prevInput);
    if (prevInput) {
      prevInputParent.children[2].className = "fa fa-ellipsis-v";
      app.editTask(prevIndex + 1, { description: prevInput.value });
    }
    return true;
  }
  return false;
};

const handleEditTask = (event, index) => {
  const { target } = event;

  const disabled = disablePrevEditTaskFor(index);

  if (
    !target.classList.contains("todoCheckbox") &&
    !target.classList.contains("fa-ellipsis-v") &&
    disabled
  ) {
    const todoItem = target.closest(".todoItem");
    const todoItemIndex = getElementIndex(todoItem);
    const tempInput = document.createElement("input");
    const trashCan = document.createElement('i');
    trashCan.className = "fa fa-trash"
    tempInput.className = "tempInput";
    tempInput.value = todoItem.children[1].innerText;
    todoItem.replaceChild(tempInput, todoItem.children[1]);
    todoItem.replaceChild(trashCan, todoItem.children[2]);
    tempInput.focus();

    tempInput.addEventListener("keyup", (e) => {
      if (e.code === "Enter") {
        const description = e.target.value;
        todos = app.editTask(index + 1, { description });
        render();
        listen();
      }
    });

    todoItem.children[2].addEventListener(
      "click",
      (e) => handleDeleteTask(e, todoItemIndex)
    );
  }
};

const listen = () => {
  const todoItems = document.querySelectorAll(".todoItem");
  todoItems.forEach((todo, index) => {
    todo.children[0].addEventListener("change", (e) => {
      handleCheckboxChange(e, index);
    });
    todo.addEventListener("click", (event) => {
      handleEditTask(event, index);
    });
  });
};
listen();

todoButton.addEventListener("click", () => {
  todos = app.clearAllCompleted();
  render();
  listen();
});

todoReset.addEventListener("click", (e) => {
  // this helps the refresh button to spin (1 second)
  e.target.classList.add("clicked");
  e.target.style.pointerEvents = "none";
  setTimeout(() => {
    e.target.classList.remove("clicked");
    e.target.style.pointerEvents = "all";
  }, 1000);

  todos = app.refresh();
  render();
  listen();
});

todoForm.addEventListener("submit", (e) => {
  handleFormSubmit(e);
  render();
  listen();
});
