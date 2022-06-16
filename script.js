const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const openPopupButtons = document.querySelectorAll('[data-popup-target]');
const closePopupButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

