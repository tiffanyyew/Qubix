document.addEventListener('DOMContentLoaded', function () {
    // Simulated leaderboard data
    const leaderboardData = [
        { name: "John Doe", points: 120 },
        { name: "Jane Smith", points: 95 },
        { name: "Alice Brown", points: 80 },
        { name: "Bob White", points: 60 }
    ];

    // Function to populate leaderboard
    function populateLeaderboard(data) {
        const leaderboardTable = document.querySelector("#leaderboardTable tbody");
        data.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${index + 1}</td><td>${user.name}</td><td>${user.points}</td>`;
            leaderboardTable.appendChild(row);
        });
    }

    // Countdown timer setup
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 30); // Challenge ends in 30 days
    const timerElement = document.getElementById('timer');

    function updateTimer() {
        const now = new Date();
        const timeRemaining = endDate - now;

        if (timeRemaining <= 0) {
            timerElement.textContent = "Challenge Ended";
            clearInterval(timerInterval);
        } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    const timerInterval = setInterval(updateTimer, 1000);

    // Start Challenge button action
    const startChallengeBtn = document.getElementById('startChallengeBtn');
    startChallengeBtn.addEventListener('click', function () {
        window.location.href = "upload_.html"; // Redirect to upload_.html
    });

    // Initialize leaderboard and timer
    populateLeaderboard(leaderboardData);
    updateTimer();
});
