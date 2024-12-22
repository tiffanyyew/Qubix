// 当前选中的卡片
let selectedCard = null;

// 选择卡片
function selectCard(card) {
    // 清除之前的选中状态
    if (selectedCard) {
        selectedCard.classList.remove("selected");
    }

    // 设置新的选中状态
    selectedCard = card;
    card.classList.add("selected");
}

// 开始学习
function startLearning() {
    if (!selectedCard) {
        alert("Please select a coding path first!");
        return;
    }

    // 获取跳转路径
    const path = selectedCard.getAttribute("data-path");
    window.location.href = path;
}
