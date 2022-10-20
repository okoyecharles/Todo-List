import Store from './store.js';

class App {
  constructor() {
    this.store = new Store();
  }

  addTask(description) {
    const { todos } = this.store;
    const task = {
      index: todos.length + 1,
      completed: false,
      description,
    };
    todos.push(task);

    this.store.update(todos);
    return todos;
  }

  deleteTask(index) {
    const todos = this.store.todos
      .filter((todo) => todo.index !== index - 1)
      .map((todo, index) => {
        index++;
        return { ...todo, index };
      });

    this.store.update(todos);
    return todos;
  }

  swapTasks(index1, index2) {
    let { todos } = this.store;
    const task1 = todos[index1 - 1];
    const task2 = todos[index2 - 1];
    todos[index2 - 1] = task1;
    todos[index1 - 1] = task2;
    todos = todos.map((todo, index) => {
      index++;
      return { ...todo, index };
    });

    this.store.update(todos);
    return todos;
  }

  editTask(index, editTodo) {
    const editedTodo = this.store.todos.map((todo) => {
      if (todo.index === index) {
        return { ...todo, ...editTodo };
      }
      return { ...todo };
    });

    this.store.update(editedTodo);
    return editedTodo;
  }

  clearAllCompleted() {
    const filteredTodos = this.store.todos
      .filter((todo) => todo.completed === false)
      .map((todo, index) => {
        index++;
        return { ...todo, index };
      });

    this.store.update(filteredTodos);
    return filteredTodos;
  }

  refresh() {
    this.store.update([]);
    return [];
  }
}

export default App;
