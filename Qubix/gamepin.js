// 获取 DOM 元素
const gamePinInput = document.getElementById("gamePinInput");
const joinGameButton = document.querySelector(".game-pin-btn");
const pinErrorMessage = document.getElementById("pin-error-message");

// 规定正确的 Game Pin
const correctPin = "123456";

// 为 "Join Game" 按钮添加点击事件处理
function joinGame() {
  const enteredPin = gamePinInput.value.trim(); // 获取用户输入的 PIN

  if (enteredPin === correctPin) {
    // 输入正确的 PIN，跳转到 avatar.html
    window.location.href = "avatar.html";  
  } else {
    // 输入错误的 PIN，显示错误消息
    pinErrorMessage.style.display = "block";
  }
}
