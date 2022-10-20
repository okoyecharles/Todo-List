class Store {
  constructor() {
    this.storeKey = 'todo-store-164192491';
    this.todos = this.load();
  }

  load() {
    const { storeKey } = this;
    if (localStorage.getItem(storeKey)) {
      return JSON.parse(localStorage.getItem(storeKey));
    }
    localStorage.setItem(storeKey, JSON.stringify([]));
    return [];
  }

  update(todos) {
    localStorage.setItem(this.storeKey, JSON.stringify(todos));
    this.todos = todos;
  }
}

export default Store;