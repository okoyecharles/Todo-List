import './index.scss';
import Task from './task.js';
import Todos from './todos.js';
import Store from './store.js';
import clearTodos from './clearTodos.js';

// NOTE: Tasks are only Edited on Enter Key Press
const form = document.getElementById('todo-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (form.elements.todo.value) {
    const todos = Store.getTodos();
    const input = form.elements.todo.value;
    const task = new Task(todos.length + 1, input);
    Store.add(task);
    Todos.load();
    form.reset();
  }
});

// Dynamically render todos on page load
Todos.load();

// Clear all Checked Todos whwn clicked
const clearBtn = document.querySelector('section > button');
clearBtn.addEventListener('click', () => {
  clearTodos();
});

Todos.editMode();
