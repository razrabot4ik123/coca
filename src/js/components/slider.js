import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

export const usePartnersSlider = () => {
  function checkWidth() {
    if (window.innerWidth <= 768) {
      initSwiper();
    }
  }
  checkWidth();

  function initSwiper() {
    new Swiper('.partners__slider', {
      modules: [Autoplay],
      speed: 1000,
      loop: true,
      slidesPerView: 1.5,
      spaceBetween: 15,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      breakpoints: {
        650: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

        450: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }
};
