import dragDrop from "./drag-drop";
import handler from "..";
import Store from "./store";

let { todos } = new Store();

export const setTodos = (todosObj) => {
  todos = todosObj;
}

export const renderTodos = () => {
  const todoList = document.querySelector("[data-todo-list]");

  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const { completed, description } = todo;

    const todoItem = document.createElement("li");
    todoItem.className = "todoItem";
    todoItem.setAttribute("data-index", index + 1);
    todoItem.draggable = true;

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

export const addEventListeners = (app) => {
  const todoItems = document.querySelectorAll(".todoItem");
  todoItems.forEach((todo, index) => {
    todo.children[0].addEventListener("change", (e) => {
      handler.changeCheckbox(e, index);
    });
    todo.addEventListener("click", (event) => {
      handler.editTask(event, index);
    });
  });
  dragDrop(app, todoItems);
};