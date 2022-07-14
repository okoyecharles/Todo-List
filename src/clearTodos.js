import Store from './store.js';
// clear all Todos on click of Clear All button
const clearTodos = () => {
  const todos = document.querySelectorAll('.task');
  let todosStore = Store.getTodos();
  todos.forEach((todo) => {
    if (todo.firstChild.checked) todo.remove();
  });
  todosStore = todosStore.filter((todo) => !todo.completed);
  todosStore.forEach((todo, index) => {
    todo.index = index + 1;
  });
  Store.setTodos(todosStore);
};

export default clearTodos;
