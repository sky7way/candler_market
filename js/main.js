const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', function () {
    menuMobile.classList.toggle('menu__open');
});