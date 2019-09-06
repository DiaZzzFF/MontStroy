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

  var $div1 = $('.promo__text').clone();
  $('.promo__text-box').html($div1);

  var $div2 = $('.advantages').clone();
  $('.promo__advantages-box').html($div2);

  $(window).resize(function () {
    if ($(window).width() < 1200) {
      $('.promo__advantages-box .advantages').addClass('swiper-container');
      $('.promo__advantages-box .advantages__list').addClass('swiper-wrapper');
      $('.promo__advantages-box .advantages__item').addClass('swiper-slide');
      $('.promo__advantages-box .advantages__pagination').addClass('swiper-pagination');

    } else {
      $('.advantages').removeClass('swiper-container');
      $('.advantages__list').removeClass('swiper-wrapper');
      $('.advantages__item').removeClass('swiper-slide');
      $('.advantages__pagination').removeClass('swiper-pagination');
    }
  });

  var mySwiper = new Swiper('.promo__advantages-box .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    initialSlide: 1,
    slideToClickedSlide: true,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
})();


