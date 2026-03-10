/**
 * Core Logic: Task Management System
 * Focus: State Persistence & Clean DOM Manipulation
 */

let tasks = [];

window.onload = () => {
    const savedData = localStorage.getItem("archivedTasks");
    if (savedData) {
        tasks = JSON.parse(savedData);
        renderTasks();
    }
};

function syncStorage() {
    localStorage.setItem("archivedTasks", JSON.stringify(tasks));
    document.getElementById('taskCount').textContent = tasks.length;
    
    // Using classList instead of .style.display to avoid "no-inline-styles" warning
    const footer = document.getElementById('footerAction');
    if (tasks.length > 0) {
        footer.classList.add('show-footer');
    } else {
        footer.classList.remove('show-footer');
    }
}

function handleNewTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText !== "") {
        tasks.push({
            id: Date.now(),
            text: taskText,
            isDone: false
        });
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
    if (confirm("Clear all tasks from memory?")) {
        tasks = [];
        renderTasks();
    }
}

function renderTasks() {
    const list = document.getElementById('listContainer');
    list.innerHTML = ""; 

    if (tasks.length === 0) {
        const emptyMsg = document.createElement('li');
        emptyMsg.className = "empty-state"; // Applied clean CSS class
        emptyMsg.textContent = "No active tasks";
        list.appendChild(emptyMsg);
    } else {
        tasks.forEach((task) => {
            const li = document.createElement('li');
            const statusClass = task.isDone ? "completed" : "";

            li.innerHTML = `
                <span class="task-text ${statusClass}" onclick="toggleComplete(${task.id})">
                    ${task.text}
                </span>
                <button type="button" class="delete-btn" onclick="deleteTask(${task.id})">Remove</button>
            `;
            list.appendChild(li);
        });
    }
    syncStorage();
}

