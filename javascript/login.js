import UserService from './services/user-service.js'

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

const loginDiv = document.querySelector('#login');
const registerDiv = document.querySelector('#register');

const goRegister = document.querySelector('.no-account');
const goLogin = document.querySelector('.has-account');

goRegister.addEventListener('click', () => {
    console.log('clicked');
    loginDiv.classList.add('hidden');
    registerDiv.classList.remove('hidden');
});

goLogin.addEventListener('click', () => {
    loginDiv.classList.remove('hidden');
    registerDiv.classList.add('hidden');
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
        UserService.login(email, password);
        window.location = '/index.html';
    } catch (error) {
        alert(error.message);
    }

});

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
        UserService.register(name, email, password);
        alert('User registered successfully');
        window.location = '/index.html';
    } catch (error) {
        alert(error.message);
    }

});
