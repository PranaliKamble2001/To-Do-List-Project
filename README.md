#  Task-Engine v2.0 | Advanced CRUD Architect

A high-performance, responsive Task Management System built with **Vanilla JavaScript**. This project demonstrates professional-grade State Management, Data Persistence, and modern **Glassmorphism** UI principles.

##  Project Overview
Task-Engine is more than a simple list; it is a functional demonstration of the **Separation of Concerns (SoC)** principle. The architecture focuses on how data flows from user input to browser memory, ensuring a seamless and persistent user experience.

##  Technical Architecture
I structured the codebase to ensure scalability and maintainability:
* **Layer 1 (Skeleton):** Semantic `HTML5` for SEO and Accessibility (A11y).
* **Layer 2 (Skin):** `CSS3` utilizing Custom Variables (Design Tokens) and Glassmorphism effects.
* **Layer 3 (Brain):** `ES6+ JavaScript` handling the logic engine and DOM manipulation.

##  Engineered Features

### 1. Robust Data Persistence (LocalStorage)
Unlike standard volatile web apps, Task-Engine implements **JSON-based persistence**. By leveraging the browser's `localStorage` API, user data remains intact across sessions and hard refreshes.

### 2. Intelligent State Management
The application utilizes modern JavaScript functional programming patterns:
* **`.map()`:** Efficiently updates task status (Toggle Complete) without mutating the original state.
* **`.filter()`:** Performs high-speed deletion by filtering the task array based on unique `Date.now()` timestamps.
* **Priority Logic:** Automatically sorts tasks by High, Medium, and Low urgency to optimize user workflow.

### 3. Real-time Progress Analytics
Includes a dynamic **Progress Tracker** that calculates the completion percentage of the task list in real-time, providing immediate visual feedback to the user via a sleek progress bar.

### 4. Cross-Platform Optimization
* **Webkit Support:** Includes `-webkit-backdrop-filter` for Safari/iOS compatibility.
* **Responsive Design:** Implemented Fluid Grids to ensure the UI adapts perfectly from Desktop to Mobile.
* **A11y Compliant:** Integrated ARIA labels and semantic landmarks for screen-reader compatibility.

##  Tech Stack

| Technology | Role |
| :--- | :--- |
| **HTML5** | Semantic Structure & A11y |
| **CSS3** | Flexbox, Grid, & Glassmorphism |
| **JavaScript** | ES6+, Array Methods, & LocalStorage |

---
*Developed by Pranali | Software Excellence Portfolio 2026*
