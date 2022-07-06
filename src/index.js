import './index.scss';
import Task from './task.js';
import Todos from './todos.js';
import Store from './store.js';

const form = document.getElementById('todo-form');
form.addEventListener('submit', (e) => {
  if (form.elements.todo.value) {
    e.preventDefault();
    const todos = Store.getTodos();
    const input = form.elements.todo.value;
    const task = new Task(todos.length, input);
    Store.add(task);
    Todos.load();
    form.reset();
  } else {
    e.preventDefault();
  }
});

// Dynamically render todos on page load
Todos.load();

const clearBtn = document.querySelector('section > button');
clearBtn.addEventListener('click', () => {
  const todos = document.querySelectorAll('.task');
  let todosStore = Store.getTodos();
  todos.forEach((todo) => {
    if (todo.firstChild.checked) todo.remove();
  });
  todosStore = todosStore.filter((todo) => !todo.completed);
  Store.setTodos(todosStore);
});