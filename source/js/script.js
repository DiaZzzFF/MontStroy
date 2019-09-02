'use strict';

(function () {
  var myBody = document.querySelector('body');
  var myNav = myBody.querySelector('.nav');
  var myBtnNavToggle = myNav.querySelector('.nav__toggle');
  var myBtnHeader = myBody.querySelector('.header__btn');

  myNav.classList.remove('nav--nojs');

  myBtnNavToggle.addEventListener('click', function () {
    if (myNav.classList.contains('nav--closed')) {
      myNav.classList.remove('nav--closed');
      myNav.classList.add('nav--opened');

    } else {
      myNav.classList.add('nav--closed');
      myNav.classList.remove('nav--opened');
    }
  });

  myBtnHeader.addEventListener('click', function () {
    $('.footer').animatescroll(); // временно
  });
})();
