const levelsList = document.querySelector(".levels-list");
const startButton = document.getElementById("start-button");

// Simulated level data
const levels = [
    { id: 1, title: "Introduction to CSS" },
    { id: 2, title: "Selectors and Properties" },
    { id: 3, title: "Box Model" },
    { id: 4, title: "Flexbox" },
    { id: 5, title: "Grid Layout" },
    { id: 6, title: "Responsive Design" },
    { id: 7, title: "CSS Animations" },
    { id: 8, title: "Advanced Techniques" }
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
        console.log(`跳转到页面: clevel${levelId}.html`);  // Debugging output
        window.location.href = `clevel${levelId}.html`;  // Ensure it's clevel1.html, clevel2.html, etc.
    }
}

// Global Start button logic (can be removed if not needed)
startButton.addEventListener("click", () => {
    const firstLevel = levels[0];  // Pick the first level
    startLevel(firstLevel.id);  // Ensure it navigates to clevel1.html
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


