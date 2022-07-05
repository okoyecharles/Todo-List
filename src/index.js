import './index.scss';
import Task from './task.js';
import Todos from './todos.js';
import Store from "./store.js";

const form = document.getElementById('todo-form')
form.addEventListener('submit', (e) => {
  if (form.elements.todo.value) {
    e.preventDefault()
    const todos = Store.getTodos()
    const input = form.elements.todo.value;
    const task = new Task(todos.length, input)
    Store.add(task)
    Todos.load()
    form.reset()
  } else {
    e.preventDefault()
  }
})

// Dynamically render todos on page load
Todos.load();

// Delete or Edit Todo When Clicked On
Todos.editTodos()

