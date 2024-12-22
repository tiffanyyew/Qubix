// 定义全局变量和获取必要的 DOM 元素
const startPage = document.getElementById("start-page");
const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("question-text");
const questionNumber = document.getElementById("question-number");
const optionsContainer = document.getElementById("options-container");
const timerText = document.getElementById("timer-text");
const startBtn = document.getElementById("start-btn");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timerInterval;

// Example quiz data (确保 quizData 已定义)
const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hypertext Markup Language", "Hightext Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
    answer: 0, // Correct answer index
  },
  {
    question: "Which language is primarily used for styling web pages?",
    options: ["HTML", "JavaScript", "CSS", "PHP"],
    answer: 2,
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
    answer: 0,
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: ["String", "Number", "Boolean", "Character"],
    answer: 3,
  },
  {
    question: "Which symbol is used to denote a class in CSS?",
    options: [".", "#", "*", "&"],
    answer: 0,
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<dl>"],
    answer: 1,
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["React", "Django", "Spring", "Laravel"],
    answer: 0,
  },
  {
    question: "What does the 'console.log()' function do in JavaScript?",
    options: ["Displays an alert", "Writes a message to the console", "Updates the DOM", "Logs errors to a file"],
    answer: 1,
  },
  {
    question: "In which language is Node.js written?",
    options: ["JavaScript", "C", "Python", "Java"],
    answer: 1,
  },
  {
    question: "What is the default file extension for JavaScript files?",
    options: [".html", ".js", ".css", ".java"],
    answer: 1,
  },
];


// 开始按钮点击事件
startBtn.addEventListener("click", startQuiz);

// 开始 Quiz
function startQuiz() {
  startPage.style.display = "none"; // 隐藏开始页面
  quizContainer.style.display = "block"; // 显示 Quiz 容器
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion();
}

// 加载当前问题
function loadQuestion() {
  clearInterval(timerInterval);
  timeLeft = 10;
  updateTimer();

  const currentQuestion = quizData[currentQuestionIndex];
  questionNumber.textContent = `Question ${currentQuestionIndex + 1}`;
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  // 动态生成选项按钮
  currentQuestion.options.forEach((option, index) => {
    const optionBtn = document.createElement("button");
    optionBtn.className = "option";
    optionBtn.textContent = option;
    optionBtn.addEventListener("click", () => selectAnswer(index, optionBtn));
    optionsContainer.appendChild(optionBtn);
  });

  startTimer();
}

// 选择答案
function selectAnswer(index, optionBtn) {
  clearInterval(timerInterval);
  const correctAnswer = quizData[currentQuestionIndex].answer;

  if (index === correctAnswer) {
    optionBtn.classList.add("correct");
    score++;
  } else {
    optionBtn.classList.add("wrong");
    highlightCorrectAnswer(correctAnswer);
  }

  setTimeout(nextQuestion, 1000);
}

// 高亮正确答案
function highlightCorrectAnswer(correctIndex) {
  const buttons = document.querySelectorAll(".option");
  buttons[correctIndex].classList.add("correct");
}

// 下一问题或结束 Quiz
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    // 自动跳转到 `quiz_leaderboard.html` 页面
    setTimeout(() => {
      window.location.href = "quiz_leaderboard.html";
    }, 1000); // 延迟1秒以展示最后一题的回答效果
  }
}

// 计时器
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      nextQuestion();
    }
  }, 1000);
}

// 更新计时器
function updateTimer() {
  timerText.textContent = `${timeLeft}s`;
}

localStorage.setItem('userScore', userScore); // Store the user's score
localStorage.setItem('userName', userName);   // Store the user's name (optional)

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    // 自动保存用户分数并跳转到排行榜页面
    localStorage.setItem('userScore', score); // 存储分数
    setTimeout(() => {
      window.location.href = "quiz_leaderboard.html";
    }, 1000);
  }
}


