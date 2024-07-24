import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import '/scss/main.scss';

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
