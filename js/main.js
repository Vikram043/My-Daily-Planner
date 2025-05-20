import { saveTasks, loadTasks } from './storage.js';
import { renderTasks } from './dom.js';
import { debounce, throttle } from './utils.js';

const taskInput = document.getElementById('task-input');
const categoryInput = document.getElementById('task-category');
const addBtn = document.getElementById('add-task');
const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('clear-all');
const backToTopBtn = document.getElementById('back-to-top');

let tasks = loadTasks();

// Add task
addBtn.addEventListener('click', () => {
  if (!taskInput.value.trim()) return;

  const newTask = {
    id: Date.now().toString(),
    text: taskInput.value.trim(),
    completed: false,
    category: categoryInput.value || "General",
  };

  tasks.push(newTask);
  saveTasks(tasks);
  renderTasks(tasks);
  taskInput.value = '';
});

// Clear all tasks
clearBtn.addEventListener('click', () => {
  if (confirm("Are you sure you want to delete all tasks?")) {
    tasks = [];
    saveTasks(tasks);
    renderTasks(tasks);
  }
});

// Search tasks with debounce
searchInput.addEventListener('input', debounce(e => {
  const query = e.target.value.toLowerCase();
  const filtered = tasks.filter(task => task.text.toLowerCase().includes(query));
  renderTasks(filtered);
}, 300));

// Scroll behavior with throttle
window.addEventListener('scroll', throttle(() => {
  if (window.scrollY > 100) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
}, 300));


backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initial render
renderTasks(tasks);

// Expose task list globally to allow updates from dom.js
window.taskState = {
  get tasks() {
    return tasks;
  },
  set tasks(newTasks) {
    tasks = newTasks;
    saveTasks(tasks);
    renderTasks(tasks);
  },
};
