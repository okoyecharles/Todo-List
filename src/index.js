import './styles/index.scss';
import App from './utils/crud';
import Store from './utils/store';

let todos = new Store().todos;
const app = new App();

const todoList = document.querySelector('[data-todo-list]');

todos.forEach((todo) => {
  const { completed, description } = todo;

  const todoItem = document.createElement('li');

  const todoCheckbox = document.createElement('input');
  todoCheckbox.type = 'checkbox';
  todoCheckbox.checked = completed;
  const todoDescription = document.createElement('span');
  todoDescription.innerText = description;
  const todoMore = document.createElement('i');
  todoMore.className = 'fa fa-ellipsis-v';

  todoItem.append(todoCheckbox, todoDescription, todoMore);
  todoList.append(todoItem);
});
