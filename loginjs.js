document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');
    const showLogin = document.getElementById('showLogin');
    const showSignup = document.getElementById('showSignup');

    // Toggle between Login and Sign-Up form
    loginTab.addEventListener('click', () => {
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
        signupTab.classList.remove('active');
        loginTab.classList.add('active');
    });

    signupTab.addEventListener('click', () => {
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
        loginTab.classList.remove('active');
        signupTab.classList.add('active');
    });

    // Show login when clicking the link
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        loginTab.click();
    });

    // Show sign-up when clicking the link
    showSignup.addEventListener('click', (e) => {
        e.preventDefault();
        signupTab.click();
    });
});
