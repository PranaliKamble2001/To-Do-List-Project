# Task-Engine Project 📝
> **A modern To-Do List app built with JavaScript, featuring data saving and a clean UI.**

## 📌 Project Overview
This project is a functional **Task Manager** that I built to practice real-world coding. Instead of just making a simple list, I focused on how data moves in a web app—from typing a task to saving it in the browser's memory so it doesn't disappear when you refresh.

------------------------------------------------------------------------------------------------

## 📂 How it's Structured
I kept the code organized using the **Separation of Concerns** principle. This means each file has one specific job:

* **index.html:** The "Skeleton" of the app. I used proper HTML tags to make it easy for browsers to read.
* **style.css:** The "Skin" of the app. It uses a modern **Glassmorphism** look (blur effect) and works on all browsers, including Safari.
* **todoLogic.js:** The "Brain" of the app. This is where the tasks are created, deleted, and saved.


------------------------------------------------------------------------------------------------

##  Features I Added

### 1. Data That Stays (LocalStorage)
Most student projects lose data on refresh. I added **LocalStorage** logic. Now, your tasks are saved directly in your browser's local memory.

### 2. Smart Logic (Map & Filter)
I used modern JavaScript methods to handle the tasks:
* **.map()**: Used to find a task and mark it as "Done."
* **.filter()**: Used to quickly remove a task when you click delete.
* **Date.now()**: Used to give every task a unique ID number.

### 3. "Clear All" Button
I added a bulk-delete feature. If you have a lot of tasks, you can wipe the whole list clean with one click after a confirmation pop-up.

------------------------------------------------------------------------------------------------

##  Tech Stack
* **HTML5:** Clean and simple structure.
* **CSS3:** Gradient backgrounds and hover effects.
* **JavaScript:** Modern ES6 features (Arrow functions and template strings).

-----------------------------------------------------------------------------------------------

##  Compatibility & Fixes
I made sure the app follows professional standards:
* **Safari Support:** Added special CSS rules (`-webkit`) so the blur effect works on iPhones/Macs.
* **W3C Standards:** Set button types and removed inline styles to keep the code clean and error-free.

------------------------------------------------------------------------------------------------
