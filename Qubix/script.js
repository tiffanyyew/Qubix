const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

const drops = [];
for (let i = 0; i < columns; i++) drops[i] = 1;

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ffea";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;

        drops[i]++;
    }
}

setInterval(draw, 33);
function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.3)"; // 半透明黑色背景，每次覆盖
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(0, 255, 234, 0.8)"; // 字符颜色，稍微透明
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;

        drops[i]++;
    }
}

// 添加点击事件监听器到 Study Mode 选项
document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('.option-title').innerText;
        if (title === "Study Mode") {
            window.location.href = "study.html";
        } else if (title === "Challenge Mode") {
            window.location.href = "challenge.html";
        }
    });
});
