import './styles/index.scss';

const todos = [
  {
    index: 1,
    completed: true,
    description: 'Reflect best practices',
  },
  {
    index: 2,
    completed: false,
    description: 'Become a code reviewer',
  },
];

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
