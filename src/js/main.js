import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import '/scss/main.scss';

// icons
import '/assets/icons/c-favicon-icon--dark.svg';
import '/assets/icons/c-favicon-icon--light.svg';
import '/assets/icons/yandex-map-marker-icon.svg';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/header.js';
import { usePartnersSlider, useInsightSlider, useTestimonialsSlider } from './components/slider.js';
import { useAccordionFooter } from './components/footer.js';

useTheme();
useBurger();
useHeader();
usePartnersSlider();
useInsightSlider();
useTestimonialsSlider();
useAccordionFooter();
