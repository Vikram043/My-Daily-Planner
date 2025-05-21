# 🗓️ My Daily Planner

A simple and elegant Daily Planner web app built using **HTML5, CSS3, and JavaScript (ES6+)**, designed to help users manage their daily tasks. The app supports adding, completing, deleting, and searching tasks with performance optimizations using **debounce** and **throttle**. All data persists locally via **localStorage**.

---

## 🚀 Features

### ✅ Core Features
- **Add Tasks** – Input task name and optional category.
- **Task Completion** – Mark tasks as complete with checkbox (or strikethrough).
- **Delete Tasks** – Remove individual tasks.
- **Search Tasks** – Debounced input for real-time search filtering.
- **Persistent Storage** – Uses `localStorage` to save tasks across sessions.

### 🌟 Stretch Features
- **Back to Top Button** – Appears on scroll using throttled scroll event.
- **Clear All Tasks** – One-click to delete all tasks (with confirmation).
- **Categories** – Tasks can be categorized (e.g., Work, Study).
- **Modular JavaScript** – Code is separated into modules: `main.js`, `dom.js`, `utils.js`, and `storage.js`.

---

## 🧰 Tech Stack & Tools

- **HTML5** – Semantic structure (header, section, input forms).
- **CSS3** – Box Model, Flexbox, Responsive Design, Transitions.
- **JavaScript (ES6+)** – DOM Manipulation, Arrow Functions, Modules.
- **localStorage** – For storing task data.
- **Debounce & Throttle** – For search input and scroll event optimizations.
- **Git + GitHub Pages** *(Optional)* – Version control and deployment.

---

## 📦 Project Setup

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/daily-planner.git
cd daily-planner
2. File Structure
daily-planner/
│
├── index.html
├── style.css
├── main.js
├── utils.js
├── dom.js
├── storage.js
└── README.md
3. Run Project
Simply open index.html in your browser. No build tools or servers required.

📄 Functionality Breakdown
Feature	File	Description
Task UI Rendering	dom.js	Handles DOM updates, create, delete, and render logic.
Task Storage	storage.js	Loads and saves tasks using localStorage.
Debounce & Throttle	utils.js	Exports utility functions for performance optimization.
App Logic	main.js	Main event listeners, input handling, and state management.



🌐 Live Demo
Visit the live demo 



📬 Contact
Vikram – Feel free to connect via GitHub or LinkedIn.








