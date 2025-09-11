function updateLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username');
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    let loginStatus = document.getElementById('login-status');

    if (isLoggedIn) {
        loginStatus.innerHTML = `<span style="margin-right:10px;">欢迎，${username}！</span>
                               <button class="login-button" onclick="logout()">注销</button>`;
        // 如果是管理员，显示管理员功能入口
        if (isAdmin) {
            document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'block');
        }
    } else {
        loginStatus.innerHTML = `<button class="login-button" onclick="goToLogin()">登录</button>`;
        // 未登录跳转到登录页面
        window.location.href = 'mqtt.html';
    }
}

function goToLogin() {
    window.location.href = 'mqtt.html';
}

function checkAdminStatus() {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (isAdmin) {
        document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'block');
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    updateLoginStatus();
    window.location.href = 'index.html';
}

// 页面加载时更新登录状态
window.onload = function() {
    updateLoginStatus();
    checkAdminStatus();
};