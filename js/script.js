let menu = document.querySelector('#toggle-menu');
let navbar = document.querySelector('.navbar');
let form = document.querySelector('.main-search');
let formBox = document.querySelector('.search-form');


menu.addEventListener('click', function () {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('navbar-toggle');
})

form.addEventListener('click', function () {
  formBox.classList.toggle('active');
})