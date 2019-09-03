'use strict';

(function () {
  var myBody = document.querySelector('body');
  var myNav = myBody.querySelector('.nav');
  var myBtnNavToggle = myNav.querySelector('.nav__toggle');
  var myBtnHeaderFeedback = myBody.querySelector('.header__btn-feedback');
  var myBtnPromoFeedback = myBody.querySelector('.promo__btn-feedback');
  var myBtnPromoServices = myBody.querySelector('.promo__btn-services');

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

  myBtnHeaderFeedback.addEventListener('click', function () {
    $('.footer').animatescroll(); // временно
  });

  myBtnPromoFeedback.addEventListener('click', function () {
    $('.footer').animatescroll(); // временно
  });

  myBtnPromoServices.addEventListener('click', function () {
    $('.services').animatescroll();
  });
})();
