import Swiper from 'swiper';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';

export const usePartnersSlider = () => {
  let partnersSlider = null;

  function checkWidth() {
    if (window.innerWidth <= 768) {
      if (!partnersSlider) {
        initSwiper();
      }
    } else {
      if (partnersSlider) {
        destroySwiper();
      }
    }
  }

  function initSwiper() {
    partnersSlider = new Swiper('.partners__slider', {
      modules: [Autoplay],
      speed: 1000,
      loop: true,
      slidesPerView: 1.5,
      spaceBetween: 15,
      centeredSlides: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        651: {
          slidesPerView: 3,
        },
        451: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }

  function destroySwiper() {
    if (partnersSlider) {
      partnersSlider.destroy(true, true);
      partnersSlider = null;
    }
  }

  window.addEventListener('resize', checkWidth);
  checkWidth();
};

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      451: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      601: {
        spaceBetween: 30,
        slidesPerView: 1.5,
      },
      801: {
        slidesPerView: 1.8,
        spaceBetween: 30,
        centeredSlides: true,
      },
      1201: {
        centeredSlides: false,
        slidesPerView: 2,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.testimonials__btn--next',
      prevEl: '.testimonials__btn--prev',
    },
  });
};

export const useAboutHeroSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 1,
    spaceBetween: 22,
    loop: true,
    centeredSlides: false,

    breakpoints: {
      993: {
        slidesPerView: 2.3,
        spaceBetween: 32,
      },
      769: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      577: {
        slidesPerView: 1.4,
        centeredSlides: true,
      },
    },
    381: {
      slidesPerView: 1.2,
    },
  });
};
