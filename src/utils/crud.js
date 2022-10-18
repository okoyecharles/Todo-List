import Store from "./store";

class App {
  constructor() {
    this.store = new Store();
  }

  addTask(todos, description) {
    const task = {
      index: todos.length + 1,
      completed: false,
      description,
    };

    todos.push(task);
    this.store.update(todos);
  }

  deleteTask(todos, index) {
    todos = todos
      .filter((todo) => {
        return todo.index !== index;
      })
      .map((todo, index) => {
        index++;
        return { ...todo, index };
      });

    this.store.update(todos);
    return todos;
  }

  editTask(todos, index, description) {
    const editedTodo = todos.map((todo) => {
      if (todo.index === index) {
        return { ...todo, description };
      } else {
        return { ...todo };
      }
    });

    this.store.update(editedTodo);
    return editedTodo;
  }
}

export default App;
