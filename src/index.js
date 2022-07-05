import './index.scss';

const tasks = [{
  index: 0,
  description: 'Clean the House',
  completed: false,
},
{
  index: 1,
  description: 'Dust the Shelf',
  completed: false,
},
{
  index: 2,
  description: 'Buy the Groceries',
  completed: false,
},
];

class Tasks {
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
    if (tasks.length) {
      tasks.sort((a, b) => a.index - b.index); // Sort Tasks based on their Index Value
      tasks.forEach((task) => {
        this.add(task);
      });
    } else {
      const taskList = document.getElementById('tasks');
      taskList.style.display = 'none'; // Remove Shadow if there are no tasks
    }
  }
}

// Dynamically render tasks on page load
Tasks.load();