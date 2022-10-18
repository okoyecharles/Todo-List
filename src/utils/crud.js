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

  editTask(index, editTodo) {
    const editedTodo = this.store.todos.map((todo) => {
      if (todo.index === index) {
        return { ...todo, ...editTodo };
      } else {
        return { ...todo };
      }
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
