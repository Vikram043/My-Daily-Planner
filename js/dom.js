export function renderTasks(taskArray) {
    const list = document.getElementById('task-list');
    list.innerHTML = '';
  
    taskArray.forEach(task => {
      const li = document.createElement('li');
      li.className = 'task-item';
      if (task.completed) li.classList.add('completed');
  
      const span = document.createElement('span');
      span.textContent = `${task.text} (${task.category})`;
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', () => {
        const updatedTasks = window.taskState.tasks.map(t =>
          t.id === task.id ? { ...t, completed: !t.completed } : t
        );
        window.taskState.tasks = updatedTasks;
      });
  
      const delBtn = document.createElement('button');
      delBtn.textContent = '❌';
      delBtn.addEventListener('click', () => {
        const updatedTasks = window.taskState.tasks.filter(t => t.id !== task.id);
        window.taskState.tasks = updatedTasks;
      });
  
      li.append(checkbox, span, delBtn);
      list.appendChild(li);
    });
  }
  