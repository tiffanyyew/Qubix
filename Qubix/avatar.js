// 获取元素
const avatars = document.querySelectorAll('.avatar');
const usernameInput = document.getElementById('username');
const nextButton = document.getElementById('next-button');
let selectedAvatar = null;

// 头像点击事件
avatars.forEach(avatar => {
    avatar.addEventListener('click', () => {
        // 清除之前的选择
        avatars.forEach(a => a.classList.remove('selected'));
        // 设置新选择
        avatar.classList.add('selected');
        selectedAvatar = avatar.getAttribute('data-id');
    });
});

// 下一步按钮点击事件
nextButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();

    if (!selectedAvatar) {
        alert('Please select an avatar!');
        return;
    }

    if (!username) {
        alert('Please enter your name!');
        return;
    }

    // 存储头像和名字到 localStorage
    localStorage.setItem('selectedAvatar', selectedAvatar);
    localStorage.setItem('username', username);

    // 跳转到 quiz 页面
    window.location.href = 'quiz.html';
});

