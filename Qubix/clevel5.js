document.addEventListener("DOMContentLoaded", () => {
    // 获取Back按钮
    const backButton = document.getElementById("back-btn");

    if (backButton) {
        backButton.addEventListener("click", () => {
            console.log("Back button clicked"); // Log the back button click
            window.location.href = "css.html"; // 跳转到 python.html
        });
    }

    // 显示和隐藏 tips 功能
    const tipIcons = document.querySelectorAll(".tip-icon");

    tipIcons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
            const tipBox = icon.nextElementSibling;
            tipBox.style.display = "block";
        });

        icon.addEventListener("mouseleave", () => {
            const tipBox = icon.nextElementSibling;
            tipBox.style.display = "none";
        });
    });

    // 检查答案
    const checkButtons = document.querySelectorAll(".check-btn");
    const questions = document.querySelectorAll(".question");
    const nextLevelSection = document.getElementById("next-level-section");
    const nextLevelBtn = document.getElementById("next-level-btn");

    checkButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const question = btn.closest(".question");
            const userInput = question.querySelector("input:checked") || question.querySelector(".answer-input");
            const feedback = question.querySelector(".feedback");

            if (!userInput) {
                alert("Please select an answer or fill the input!");
                return;
            }

            const correctAnswer = question.dataset.correct;

            if (userInput.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
                feedback.textContent = "Correct!";
                feedback.classList.remove("wrong");
                feedback.classList.add("correct");
            } else {
                feedback.textContent = `Wrong! Correct answer: ${correctAnswer}`;
                feedback.classList.remove("correct");
                feedback.classList.add("wrong");
            }

            feedback.style.display = "block";
            checkAllAnswered();
        });
    });

    // 检查是否所有问题回答完成
    function checkAllAnswered() {
        const allAnswered = Array.from(questions).every((question) => {
            const feedback = question.querySelector(".feedback");
            return feedback.style.display === "block";
        });

        if (allAnswered) {
            console.log("All questions answered, showing Next Level button.");
            nextLevelSection.style.display = "block";
        }
    }

    // Level 2 跳转
    nextLevelBtn.addEventListener("click", () => {
        console.log("Next level button clicked"); // Log the next level button click
        window.location.href = "clevel6.html"; // 跳转到 Level 2 页面
    });
});
