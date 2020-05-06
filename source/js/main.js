var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var headerInner = document.querySelector('.page-header__inner');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    headerInner.classList.remove('page-header__inner--closed');
    headerInner.classList.add('page-header__inner--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    headerInner.classList.add('page-header__inner--closed');
    headerInner.classList.remove('page-header__inner--opened');
  }
});
