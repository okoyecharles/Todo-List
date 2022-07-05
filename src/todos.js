import Store from "./store.js";

export default class Todos {
  // Add Task on the UI
  static add(task) {
    const taskList = document.getElementById('tasks');
    const taskUI = document.createElement('li');
    taskUI.className = 'task';

    const completed = document.createElement('input');
    completed.setAttribute('type', 'checkbox');
    completed.className = 'check'
    if (task.completed) completed.setAttribute('checked', 'checked');

    const description = document.createElement('p');
    description.innerText = task.description;

    const dots = document.createElement('i');
    dots.className = 'fa-solid fa-ellipsis-vertical dots';

    taskUI.append(completed, description, dots);
    taskList.append(taskUI);
  }

  // Load all tasks from Local Storage
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
    // Give Ability To Edit Recently added Todos
    this.editTodos()
  }

  // Give a dashed style To todos when checked
  static checkTodo(text) {
    text.style.textDecoration = "line-through";
    text.style.color = "grey";
    let todos = Store.getTodos();
    let checked = todos.filter(todo => todo.description === text.innerHTML)
    checked[0].completed = true;
    let rest = todos.filter(todo => todo.description !== text.innerHTML)
    todos = [...checked, ...rest]
    todos.sort((a, b) => a.index - b.index);
    Store.setTodos(todos)
  }

  // Edit Todos When Clicked
  static editTodos() {
    const todos = document.querySelectorAll(".task")
    todos.forEach(todo => {
      // Listen For Clicks On Todos
      todo.addEventListener('click', (e) => {
        if (!e.target.classList.contains('check')) {
          let target;
          target = e.target.closest('.task')

          // Add Edit Classes On Clicked Todos
          if (!target.classList.contains('edit')) {

            // Reset all Todo Styles
            todos.forEach(todo => {
              todo.classList.remove('edit')
              todo.children[2].remove()
              const dots = document.createElement('i');
              dots.className = 'fa-solid fa-ellipsis-vertical dots';
              todo.append(dots)
            })

            // Apply Todo Styles
            target.classList.toggle('edit')
            target.children[2].remove()
            const bin = document.createElement('i')
            bin.className = "fa-solid fa-trash-can"
            target.append(bin)
            bin.addEventListener('click', Store.deleteTodo)
          }
          // Disable Edit Styles When Clicked Outside Container
          this.disableEdit()
        } else {
          // Add Checked (StrikeThrough) Style
          const text = e.target.nextSibling;
          this.checkTodo(text)
        }
      })
    })
  }

  static disableEdit (){
    const todos = document.querySelectorAll(".task")

    // Remove all Edit Styles when you click outside Todo List
    document.getElementById('tasks').addEventListener('click', (event) => {
      event.stopPropagation()
    }, {once: true})

    document.body.addEventListener('click', (e) => {
      todos.forEach(todo => {
        todo.classList.remove('edit')
        todo.children[2].remove()
        const dots = document.createElement('i');
        dots.className = 'fa-solid fa-ellipsis-vertical dots';
        todo.append(dots)
      })
    }, {once: true})
  }
}