/**
 * @jest-environment jsdom
 */

import Store from './store.js';
import Task from './task.js';
import Todos from './todos.js';
import clearTodos from './clearTodos.js';

beforeEach(() => {
  // to fully reset the state between tests, clear the storage
  localStorage.clear();
  // and reset all mocks
  jest.clearAllMocks();
});

describe('Edit, Update and Clear Tests', () => {
  test('Edit Todo Functionality', () => {
    // arrange
    document.body.innerHTML = `
    <form id="todo-form">       
    <input type="text" name="todo" id="todo" placeholder="Add to your list...">
    <input type="submit" value="&#x23CE;">
    </form>
    <ul id="tasks">

    </ul>
    `;
    const task = new Task(1, 'First Todo');
    Todos.add(task);
    Store.add(task);

    // act
    // Edit a Todo on the Mocked Local Storage
    const [editedTask] = Store.getTodos();
    editedTask.description = 'First Todo Edited';
    Store.setTodos(editedTask);

    // assert
    expect(Store.getTodos()).toEqual(editedTask);
  });

  test('Check Todo Functionality', () => {
    /// arrange
    document.body.innerHTML = `
    <form id="todo-form">       
    <input type="text" name="todo" id="todo" placeholder="Add to your list...">
    <input type="submit" value="&#x23CE;">
    </form>
    <ul id="tasks">

    </ul>
    `;
    const task = new Task(1, 'First Todo');
    Todos.add(task);
    Store.add(task);
    /// act
    /// change a Todo completed status on the Mocked Local Storage
    const [editedTask] = Store.getTodos();
    editedTask.completed = true;
    Store.setTodos(editedTask);

    /// assert
    expect(Store.getTodos()).toEqual(editedTask);
  });

  test('Clear Todo Functionality', () => {
    /// arrange
    document.body.innerHTML = `
    <form id="todo-form">       
    <input type="text" name="todo" id="todo" placeholder="Add to your list...">
    <input type="submit" value="&#x23CE;">
    </form>
    <ul id="tasks">

    </ul>
    `;
    const task = new Task(1, 'First Todo');
    Todos.add(task);
    Store.add(task);
    /// act
    /// clear a Todo on the Mocked Local Storage and load to the UI
    const [editedTask] = Store.getTodos();
    editedTask.completed = true;
    Store.setTodos([editedTask]);
    Todos.load();
    clearTodos();

    /// assert
    expect(Store.getTodos()).toEqual([]);
  });
});
