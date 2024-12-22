// Function to generate confetti animation
function createConfetti() {
    const confettiContainer = document.getElementById('celebration');
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
      confetti.style.backgroundColor = randomColor();
      confettiContainer.appendChild(confetti);
      setTimeout(() => confetti.remove(), 5000);
    }
  }

  function randomColor() {
    const colors = ['#ffd700', '#ff6347', '#ff69b4', '#87cefa', '#32cd32', '#ffa07a'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  createConfetti();