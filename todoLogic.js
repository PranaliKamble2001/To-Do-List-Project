/**
 * Core Logic: To-Do Management
 * Focus: Array Methods (map, filter) and State-to-UI Sync
 */

// 1. Array to hold task objects (The "State")
let tasks = [];

// 2. CREATE: Adding a new task
function handleNewTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText !== "") {
        const newTask = {
            id: Date.now(), // Unique ID using timestamp
            text: taskText,
            isDone: false
        };
        tasks.push(newTask);
        input.value = ""; // Clear input field
        renderTasks();
    }
}

// 3. UPDATE: Toggling the 'isDone' status using .map()
function toggleComplete(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, isDone: !task.isDone };
        }
        return task;
    });
    renderTasks();
}

// 4. DELETE: Removing a task using .filter()
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// 5. RENDER: Updating the UI based on the current 'tasks' state
function renderTasks() {
    const list = document.getElementById('listContainer');
    list.innerHTML = ""; 

    tasks.forEach((task) => {
        const li = document.createElement('li');
        
        // Determine if the completed class should be applied
        const statusClass = task.isDone ? "completed" : "";

        li.innerHTML = `
            <span class="task-text ${statusClass}" onclick="toggleComplete(${task.id})">
                ${task.text}
            </span>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        `;
        list.appendChild(li);
    });
}
