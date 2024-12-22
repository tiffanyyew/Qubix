document.addEventListener("DOMContentLoaded", () => {
    // 获取Back按钮
    const backButton = document.getElementById("back-btn");

    if (backButton) {
        backButton.addEventListener("click", () => {
            window.location.href = "html.html"; // 跳转到 html.html
        });
    }
})
document.addEventListener("DOMContentLoaded", () => {
    // Tips hover functionality
    const tipIcons = document.querySelectorAll(".tip-icon-container");
    tipIcons.forEach((icon) => {
        const tipBox = icon.nextElementSibling; // Get the corresponding tip box
        icon.addEventListener("mouseenter", () => {
            tipBox.style.display = "block";
        });
        icon.addEventListener("mouseleave", () => {
            tipBox.style.display = "none";
        });
    });

    // Answer hover functionality
    const answerBoxes = document.querySelectorAll(".answer-box");
    answerBoxes.forEach((box) => {
        const hiddenAnswer = box.querySelector(".hidden-answer");
        box.addEventListener("mouseenter", () => {
            hiddenAnswer.style.display = "block";
        });
        box.addEventListener("mouseleave", () => {
            hiddenAnswer.style.display = "none";
        });
    });

    // "Go to Level 7" button functionality
    const nextLevelBtn = document.getElementById("next-level-btn");
    if (nextLevelBtn) {
        nextLevelBtn.addEventListener("click", () => {
            // Redirect to the next level
            window.location.href = "hlevel8.html";
        });
    }
});
