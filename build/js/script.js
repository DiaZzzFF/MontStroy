'use strict';

(function () {
  var myBody = document.querySelector('body');
  var myNav = myBody.querySelector('.nav');
  var myBtnNavToggle = myNav.querySelector('.nav__toggle');
  var myBtnHeaderFeedback = myBody.querySelector('.header__btn-feedback');
  var myBtnPromoFeedback = myBody.querySelector('.promo__btn--feedback');
  var myBtnPromoServices = myBody.querySelector('.promo__btn--services');

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

  var scroll = function (myBtn, scrollTo) {
    myBtn.addEventListener('click', function () {
      myBody.querySelector(scrollTo).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  var phoneMask = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  var myInput = document.querySelector('[type=tel]');
  vanillaTextMask.maskInput({
    inputElement: myInput,
    mask: phoneMask
  });

  var myProjectsLinks = myBody.querySelectorAll('.projects__item-link');
  var addAndRemoveHref = function () {
    if (window.matchMedia('(max-width: 1199px)').matches) {
      for (var i = 0; i < myProjectsLinks.length; i++) {
        myProjectsLinks[i].setAttribute('href', '#');
      }

    } else {
      for (var j = 0; j < myProjectsLinks.length; j++) {
        myProjectsLinks[j].removeAttribute('href');
      }
    }
  };

  var currentBreakpoint = '';
  var swiperAdvantages;
  var swiperPartners;

  var desktopSwiperConfigPartners = {
    init: false,
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.partners__btn-next',
      prevEl: '.partners__btn-prev',
    }
  };

  var tabletSwiperConfigAdvantages = {
    init: false,
    slidesPerView: 3,
    spaceBetween: 0,
    initialSlide: 1,
    centeredSlides: true,
    effect: 'coverflow',
    loop: true,
    pagination: {
      el: '.advantages__toggles',
      clickable: true,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }
  };

  var tabletSwiperConfigPartners = {
    init: false,
    slidesPerView: 3,
    spaceBetween: 10,
    initialSlide: 1,
    centeredSlides: true,
    width: 820,
    effect: 'coverflow',
    loop: true,
    pagination: {
      el: '.partners__toggles',
      clickable: true,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }
  };

  var mobileSwiperConfigAdvantages = {
    init: false,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 0,
    initialSlide: 1,
    pagination: {
      el: '.advantages__toggles',
      clickable: true,
    },
  };

  var mobileSwiperConfigPartners = {
    init: false,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    width: 280,
    pagination: {
      el: '.partners__toggles',
      clickable: true,
    },
  };

  function initSwiper() {
    if (window.matchMedia('(max-width: 767px)').matches && currentBreakpoint !== 'mobile') {
      currentBreakpoint = 'mobile';

      if (swiperAdvantages) {
        swiperAdvantages.destroy();
      }
      swiperAdvantages = new Swiper('.swiper-container-advantages', mobileSwiperConfigAdvantages);
      swiperAdvantages.init();

      if (swiperPartners) {
        swiperPartners.destroy();
      }
      swiperPartners = new Swiper('.swiper-container', mobileSwiperConfigPartners);
      swiperPartners.init();
    }

    if (window.matchMedia('(min-width: 768px) and (max-width: 1199px)').matches && currentBreakpoint !== 'tablet') {
      currentBreakpoint = 'tablet';

      if (swiperAdvantages) {
        swiperAdvantages.destroy();
      }
      swiperAdvantages = new Swiper('.swiper-container-advantages', tabletSwiperConfigAdvantages);
      swiperAdvantages.init();

      if (swiperPartners) {
        swiperPartners.destroy();
      }
      swiperPartners = new Swiper('.swiper-container', tabletSwiperConfigPartners);
      swiperPartners.init();
    }

    if (window.matchMedia('(min-width: 1200px)').matches && currentBreakpoint !== 'desktop') {
      currentBreakpoint = 'desktop';

      if (swiperAdvantages) {
        swiperAdvantages.destroy();
      }

      if (swiperPartners) {
        swiperPartners.destroy();
      }
      swiperPartners = new Swiper('.swiper-container', desktopSwiperConfigPartners);
      swiperPartners.init();
    }
  }

  scroll(myBtnHeaderFeedback, '.feedback__form');
  scroll(myBtnPromoFeedback, '.feedback__form');
  scroll(myBtnPromoServices, '.services');

  addAndRemoveHref();
  initSwiper();

  window.addEventListener('resize', initSwiper);
  window.addEventListener('resize', addAndRemoveHref);
})();
