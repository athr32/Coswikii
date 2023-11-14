const main = document.querySelector('.main');
const registerlink = document.querySelector('.register-link');
const loginlink = document.querySelector('.login-link');

registerlink.onclick = () => {
    main.classList.add('active');
}
loginlink.onclick = ()  => {
    main.classList.remove('active');
}