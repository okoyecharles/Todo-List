export default class Store {
  static getTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    return todos
  }

  static add(task) {
    let tasks = Store.getTodos();
    tasks.push(task);
    localStorage.setItem('todos', JSON.stringify(tasks));
  }
}