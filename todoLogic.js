/**
 * Task-Engine v2.0
 * Features: State Persistence, Priority Mapping, Progress Tracking
 */

let tasks = [];

window.onload = () => {
    const savedData = localStorage.getItem("taskEngine_v2");
    if (savedData) {
        tasks = JSON.parse(savedData);
        renderTasks();
    }
};

function updateProgress() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.isDone).length;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
    
    document.getElementById('progressBar').style.width = percent + "%";
    document.getElementById('completionPercent').textContent = percent + "% Done";
}

function handleNewTask() {
    const input = document.getElementById('taskInput');
    const priority = document.getElementById('priorityInput').value;
    
    if (input.value.trim() !== "") {
        const newTask = {
            id: Date.now(),
            text: input.value.trim(),
            priority: priority,
            isDone: false
        };
        
        tasks.push(newTask);
        input.value = "";
        renderTasks();
    }
}

function toggleComplete(id) {
    tasks = tasks.map(task => 
        task.id === id ? { ...task, isDone: !task.isDone } : task
    );
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function clearAllTasks() {
    if (confirm("This will permanently delete all tasks. Continue?")) {
        tasks = [];
        renderTasks();
    }
}

function renderTasks() {
    const list = document.getElementById('listContainer');
    list.innerHTML = "";

    // Sort tasks: High priority first
    const sortedTasks = [...tasks].sort((a, b) => {
        const order = { high: 1, medium: 2, low: 3 };
        return order[a.priority] - order[b.priority];
    });

    sortedTasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="prio-tag prio-${task.priority}" title="${task.priority} priority"></div>
            <span class="task-text ${task.isDone ? 'completed' : ''}" 
                  onclick="toggleComplete(${task.id})" 
                  role="button" 
                  aria-label="Toggle completion for ${task.text}">
                ${task.text}
            </span>
            <button class="delete-btn" onclick="deleteTask(${task.id})" aria-label="Delete task">✕</button>
        `;
        list.appendChild(li);
    });

    // Sync state
    localStorage.setItem("taskEngine_v2", JSON.stringify(tasks));
    document.getElementById('taskCount').textContent = tasks.length;
    updateProgress();
    
    // UI visibility
    const footer = document.getElementById('footerAction');
    footer.style.display = tasks.length > 0 ? "flex" : "none";
}
