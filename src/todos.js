import Store from "./store.js";

export default class Todos {
  static add(task) {
    const taskList = document.getElementById('tasks');
    const taskUI = document.createElement('li');
    taskUI.className = 'task';

    const completed = document.createElement('input');
    completed.setAttribute('type', 'checkbox');
    if (task.completed) completed.setAttribute('checked', 'checked');

    const description = document.createElement('p');
    description.innerText = task.description;

    const dots = document.createElement('i');
    dots.className = 'fa-solid fa-ellipsis-vertical dots';

    taskUI.append(completed, description, dots);
    taskList.append(taskUI);
  }

  static load() {
    const tasks = Store.getTodos()
    if (tasks) {
      tasks.sort((a, b) => a.index - b.index); // Sort Tasks based on their Index Value
      document.getElementById('tasks').innerHTML = '';
      tasks.forEach((task) => {
        this.add(task);
      });
    } else {
      const taskList = document.getElementById('tasks');
      taskList.style.display = 'none'; // Remove Shadow if there are no tasks
    }
  }
}