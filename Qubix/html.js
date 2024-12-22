const levelsList = document.querySelector(".levels-list");
const startButton = document.getElementById("start-button");

// Simulated level data for HTML content
const levels = [
    { id: 1, title: "Introduction to HTML" },
    { id: 2, title: "HTML Basics (Tags, Attributes)" },
    { id: 3, title: "Working with Text and Images" },
    { id: 4, title: "Links and Navigation" },
    { id: 5, title: "HTML Forms and Inputs" },
    { id: 6, title: "Semantic HTML" },
    { id: 7, title: "HTML Tables" },
    { id: 8, title: "HTML5 Features (Audio, Video, Canvas)" }
];

// Save user progress
function saveProgress() {
    localStorage.setItem("htmlProgress", JSON.stringify(levels));
}

// Load saved progress
function loadProgress() {
    const savedProgress = localStorage.getItem("htmlProgress");
    if (savedProgress) {
        const parsedLevels = JSON.parse(savedProgress);
        // Update levels status if necessary based on saved progress
    }
}

// Render the level list
function renderLevels() {
    levelsList.innerHTML = "";
    levels.forEach((level) => {
        const listItem = document.createElement("li");
        listItem.classList.add("level-item");

        listItem.innerHTML = `
            <span>${level.title}</span>
            <button onclick="startLevel(${level.id})">Start</button>
        `;
        levelsList.appendChild(listItem);
    });
}

// Start a level (Navigate to corresponding HTML level page)
function startLevel(levelId) {
    const level = levels.find((lvl) => lvl.id === levelId);
    if (level) {
        console.log(`Navigating to: hlevel${levelId}.html`);  // Debugging output
        window.location.href = `hlevel${levelId}.html`;  // Ensure it's hlevel1.html, hlevel2.html, etc.
    }
}

// Global Start button logic (can be removed if not needed)
startButton.addEventListener("click", () => {
    const firstLevel = levels[0];  // Pick the first level
    startLevel(firstLevel.id);  // Ensure it navigates to hlevel1.html
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
