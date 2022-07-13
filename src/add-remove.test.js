/**
 * @jest-environment jsdom
 */
import Todos from "./todos.js"
import Task from "./task.js"

test ('Add Todo Functionality', () => {
  // arrange
  document.body.innerHTML = `
  <form id="todo-form">       
  <input type="text" name="todo" id="todo" placeholder="Add to your list...">
  <input type="submit" value="&#x23CE;">
  </form>
  <ul id="tasks">

  </ul>
  `

  // act
  const task = new Task(1, 'hello');
  Todos.add(task);

  // assert
  const listItem = document.querySelector('#tasks .task p')
  expect(listItem.innerText).toBe('hello')
})