let mobileMenuBtn = document.querySelector('.fa-bars');
let menu = document.querySelector('menu');

mobileMenuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});