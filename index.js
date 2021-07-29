import Task from './Task.js';
import UI from './UI.js';

// create a new instance for UI constructor function
const ui = new UI();

ui.showAllTasks();

// Trigger click event for activating 'ADD TASK' button to add new task to the task-list
document.querySelector('.AddTaskBtn').addEventListener('click', (e) =>{
  const taskTitle = document.querySelector('#newtaskID').value;
  // empty string would not be stored
  if (taskTitle.length > 0) {
    const task = new Task(taskTitle);
    // add a task object into the ui object
    ui.addToUI(task);
    // Reset input field
    ui.resetForm();
  }
})

// Trigger keyup event for activating 'Enter' button to add new task to the task-list
document.querySelector('.newtask__input').addEventListener('keyup', (e) =>{
  if (e.which === 13) {
    const taskTitle = document.querySelector('#newtaskID').value;
    if (taskTitle.length > 0) {
      const task = new Task(taskTitle);
      // add a task object into the ui object
      ui.addToUI(task);
      // Reset input field
      ui.resetForm();
    }
  }
})

document.querySelector('.task-list').addEventListener('click', (e) => {
  if (e.target.className.includes('task__op_edit')) {
    ui.editTask(e);
  }
  if (e.target.className.includes('task__op_delete')) {
    ui.deleteTask(e);
  }
  if (e.target.className.includes('task-check')) {
    ui.completeTask(e);
  }
})

document.querySelector('.EditTaskBtn').addEventListener('click', (e) => {
  ui.updateTask(e);
})

document.querySelector('.CancelTaskBtn').addEventListener('click', (e) => {
  ui.cancelTask(e);
})
