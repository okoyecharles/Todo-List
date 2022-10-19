import { addEventListeners, renderTodos, setTodos } from "./update.js";

const dragDrop = (app, todoItems) => {
  let dragStart;

  todoItems.forEach((todo) => {
    todo.addEventListener("dragstart", (e) => {
      dragStart = +e.target.dataset.index;
    });
    todo.addEventListener("dragenter", (e) => {
      e.target.classList.add("over");
    });
    todo.addEventListener("dragleave", (e) => {
      e.target.classList.remove("over");
    });
    todo.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    todo.addEventListener("drop", (e) => {
      e.target.classList.remove("over");
      const dragEnd = +e.target.dataset.index;
      if (dragEnd) {
        let todos = app.swapTasks(dragStart, dragEnd);
        setTodos(todos);
        renderTodos();
        addEventListeners(app);
      }
    });
  });
};

export default dragDrop;
