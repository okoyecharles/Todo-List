export default class Store {
  // Get Todos from Local Storage
  static getTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    return todos;
  }

  static add(task) {
  // Add a Todo to Local Storage
    const tasks = Store.getTodos();
    tasks.push(task);
    localStorage.setItem('todos', JSON.stringify(tasks));
  }

  static setTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  // Delete Todo From Local Storage
  static deleteTodo(e) {
    e.target.parentElement.remove();
    let todos = Store.getTodos();
    const des = e.target.previousSibling.firstChild.innerHTML || e.target.previousSibling.innerHTML;
    todos = todos.filter((t) => t.description !== des);
    todos.forEach((todo, i) => { todo.index = i + 1; });
    Store.setTodos(todos);
  }
}