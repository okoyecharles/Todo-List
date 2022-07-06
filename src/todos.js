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

    const description = document.createElement('p');
    description.innerText = task.description;
    if (task.completed) {
      completed.setAttribute('checked', 'checked');
      description.style.textDecoration = "line-through"
      description.style.color = "grey"
    }

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
  static checkTodo() {
    const todos = document.querySelectorAll('.task');
    todos.forEach(todo => todo.addEventListener('click', (e) => {
      if (e.target.classList.contains('check')) {
        const des = e.target.nextSibling;
        let todos = Store.getTodos();
        // When Todo is Checked
        if (e.target.checked) {
          des.style.textDecoration = 'line-through'
          des.style.color = 'grey'
          let checked = todos.filter(todo => todo.description === des.innerHTML)
          checked[0].completed = true;
          let rest = todos.filter(todo => todo.description !== des.innerHTML)
          todos = [...checked, ...rest]
          todos.sort((a, b) => a.index - b.index);
        } else { // When Todo is Uncheked
          des.style.textDecoration = 'none'
          des.style.color = '#003b46'
          let checked = todos.filter(todo => todo.description === des.innerHTML)
          checked[0].completed = false;
          let rest = todos.filter(todo => todo.description !== des.innerHTML)
          todos = [...checked, ...rest]
          todos.sort((a, b) => a.index - b.index);
        }
        // Update Store to Checked or Not Checked
        Store.setTodos(todos)
      }
    }))

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
        }
      })
    })
  }

  static disableEdit() {
    const todos = document.querySelectorAll(".task")

    // Remove all Edit Styles when you click outside Todo List
    document.getElementById('tasks').addEventListener('click', (event) => {
      event.stopPropagation()
    }, {
      once: true
    })

    document.body.addEventListener('click', (e) => {
      todos.forEach(todo => {
        todo.classList.remove('edit')
        todo.children[2].remove()
        const dots = document.createElement('i');
        dots.className = 'fa-solid fa-ellipsis-vertical dots';
        todo.append(dots)
      })
    }, {
      once: true
    })
  }
}