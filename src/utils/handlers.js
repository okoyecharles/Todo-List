import { setTodos, renderTodos, addEventListeners } from "./update";
import { getElementIndex } from "./abstracts";

export default class Handler {
  constructor(app) {
    this.app = app;
  }

  submitForm(event) {
    event.preventDefault();
    const description = event.target.elements.description.value;
    event.target.elements.description.value = "";
    if (description.trim().length) {
      const todos = this.app.addTask(description);
      setTodos(todos);
    }
  }

  changeCheckbox(event, index) {
    this.app.editTask(index + 1, { completed: event.target.checked });
  }

  deleteTask(deleteEvent, todoItemIndex) {
    const { app } = this;
    if (deleteEvent.target.classList.contains("fa-trash")) {
      const todos = app.deleteTask(todoItemIndex + 1);
      setTodos(todos);
      renderTodos();
      addEventListeners(app);
    }
  }

  disablePrevEdit(index) {
    const { app } = this;
    const prevInput = document.querySelector(".tempInput");
    const prevInputParent = prevInput?.parentElement;
    const prevIndex = getElementIndex(prevInputParent);
    const newNode = document.createElement("span");
    newNode.className = "todoDescription";
    newNode.innerText = prevInput?.value;
    if (prevIndex !== index) {
      prevInputParent?.replaceChild(newNode, prevInput);
      if (prevInput) {
        prevInputParent.draggable = true;
        prevInputParent.children[2].className = "fa fa-ellipsis-v";
        const todos = app.editTask(prevIndex + 1, {
          description: prevInput.value,
        });
        setTodos(todos);
      }
      return true;
    }
    return false;
  }

  editTask = (editEvent, index) => {
    const { app } = this;
    const { target } = editEvent;

    const disabled = this.disablePrevEdit(index);

    if (
      !target.classList.contains("todoCheckbox") &&
      !target.classList.contains("fa-ellipsis-v") &&
      disabled
    ) {
      const todoItem = target.closest(".todoItem");
      todoItem.draggable = false;
      const todoItemIndex = +todoItem.dataset.index;
      const tempInput = document.createElement("input");
      const trashCan = document.createElement("i");
      trashCan.className = "fa fa-trash";
      tempInput.className = "tempInput";
      tempInput.value = todoItem.children[1].innerText;
      todoItem.replaceChild(tempInput, todoItem.children[1]);
      todoItem.replaceChild(trashCan, todoItem.children[2]);
      tempInput.focus();

      tempInput.addEventListener("keyup", (keyEvent) => {
        if (keyEvent.code === "Enter") {
          const description = keyEvent.target.value;
          let todos = app.editTask(index + 1, { description });
          setTodos(todos);
          renderTodos();
          addEventListeners(app);
        }
      });

      todoItem.children[2].addEventListener("click", (event) =>
        this.deleteTask(event, todoItemIndex)
      );
    }
  };
}
