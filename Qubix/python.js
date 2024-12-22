// Global logic for handling the go back button and level navigation
const levelsList = document.querySelector(".levels-list");
const startButton = document.getElementById("start-button");

const levels = [
    { id: 1, title: "Introduction to Python" },
    { id: 2, title: "Variables and Data Types" },
    { id: 3, title: "Control Flow (if, else, for, while)" },
    { id: 4, title: "Functions and Modules" },
    { id: 5, title: "Data Structures (Lists, Dictionaries, Sets)" },
    { id: 6, title: "File Handling and Exceptions" },
    { id: 7, title: "Object-Oriented Programming" },
    { id: 8, title: "Advanced Python (Decorators, Generators, etc.)" }
];

// Save user progress
function saveProgress() {
    localStorage.setItem("cssProgress", JSON.stringify(levels));
}

// Load saved progress
function loadProgress() {
    const savedProgress = localStorage.getItem("cssProgress");
    if (savedProgress) {
        const parsedLevels = JSON.parse(savedProgress);
        // Load user progress if necessary
    }
}

// Render the level list
function renderLevels() {
    levelsList.innerHTML = "";
    levels.forEach((level) => {
        const listItem = document.createElement("li");
        listItem.classList.add("level-item");

        // Each level always shows a "Start" button
        listItem.innerHTML = `
            <span>${level.title}</span>
            <button onclick="startLevel(${level.id})">Start</button>
        `;
        levelsList.appendChild(listItem);
    });
}

// Start a level
function startLevel(levelId) {
    const level = levels.find((lvl) => lvl.id === levelId);
    if (level) {
        console.log(`跳转到页面: level${levelId}.html`);  // Debugging output
        window.location.href = `level${levelId}.html`;  // Redirect to the respective level page
    }
}

// Global Start button logic (can be removed if not needed)
startButton.addEventListener("click", () => {
    const firstLevel = levels[0];  // Pick the first level as an example
    startLevel(firstLevel.id);
});

// Handle go-back button click to return to the study page
document.addEventListener("DOMContentLoaded", () => {
    const goBackButton = document.getElementById("go-back-btn");
    if (goBackButton) {
        goBackButton.addEventListener("click", () => {
            window.location.href = "study.html"; // Redirect to study.html
        });
    }

    // Load and render levels
    loadProgress();
    renderLevels();
});
