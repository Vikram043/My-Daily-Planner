export function saveTasks(taskList) {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }
  
  export function loadTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }
  