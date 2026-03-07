#  My To-Do List Project

A functional, state-driven Task Manager built with Vanilla JavaScript. This project focuses on clean logic, DOM manipulation, and efficient data handling.

##  Key Features

- **Dynamic Task Creation**: Generates unique IDs using `Date.now()` for precise data tracking.
- **Interactive Completion**: Toggle tasks as "Done" with a visual strikethrough effect.
- **Efficient Deletion**: Uses the `.filter()` method to remove tasks from the data state.
- **Clean Architecture**: Complete separation of concerns between HTML, CSS, and JS.

##  Logic & Data Flow

This project follows a **State-to-UI** pattern, which is a fundamental concept in modern frontend development:

1.  **State Management**: Tasks are stored in an array of objects: `[{ id: 123, text: "Task", isDone: false }]`.
2.  **Immutability**: When updating a task, we use `.map()` to create a new state rather than mutating the original array.
3.  **DOM Rendering**: A single `renderTasks()` function synchronizes the User Interface with the JavaScript data.



##  Tech Stack

- **HTML5**: Structured for accessibility.
- **CSS3**: Modern UI with hover effects and animations.
- **JavaScript (ES6+)**: Array methods (`map`, `filter`, `forEach`), Arrow Functions, and Template Literals.

-------------
