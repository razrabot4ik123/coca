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
        451: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        651: {
          slidesPerView: 3,
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
      381: {
        slidesPerView: 1.2,
      },
      577: {
        slidesPerView: 1.4,
        centeredSlides: true,
      },
      769: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      993: {
        slidesPerView: 2.3,
        spaceBetween: 32,
      },
    },
  });
};

export const useAboutTeamSlider = () => {
  new Swiper('.team__people', {
    slidesPerView: 'auto',
    spaceBetween: 18,
    loop: true,
    centeredSlides: true,

    breakpoints: {
      769: {
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 2.5,
      },
      1201: {
        slidesPerView: 3,
        spaceBetween: 32,
        centeredSlides: false,
      },
    },
  });
};

export const useOverviewHeroSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 16,
    initialSlide: 1,

    breakpoints: {
      1201: {
        slidesPerView: 'auto',
        centeredSlides: false,
        initialSlide: 0,
        spaceBetween: 32,
      },
      993: {
        slidesPerView: 'auto',
        initialSlide: 1,
        spaceBetween: 32,
        centeredSlides: true,
      },
      577: {
        slidesPerView: 'auto',
        centeredSlides: true,
      },
    },
  });
};

export const useOverviewArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    spaceBetween: 32,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.articles__btn--next',
      prevEl: '.articles__btn--prev',
    },
  });
};
