/**
 * @jest-environment jsdom
 */

import Store from "./store";
import Task from "./task";
import Todos from "./todos";


beforeEach(() => {
  // to fully reset the state between tests, clear the storage
  localStorage.clear();
  // and reset all mocks
  jest.clearAllMocks();
});

describe('Edit, Update and Clear Tests', () => {
  test('Edit Todo Functionality', () => { 
    //arrange
    document.body.innerHTML = `
    <form id="todo-form">       
    <input type="text" name="todo" id="todo" placeholder="Add to your list...">
    <input type="submit" value="&#x23CE;">
    </form>
    <ul id="tasks">

    </ul>
    `
    const task = new Task(1, 'First Todo');
    Todos.add(task);
    Store.add(task);

    //act
      // Edit a Todo on the Mocked Local Storage
    const [editedTask] = Store.getTodos();
    editedTask.description = "First Todo Edited";
    Store.setTodos(editedTask);

    //assert
    expect(Store.getTodos()).toEqual(editedTask)
  })
})