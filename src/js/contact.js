import 'swiper/css';
import 'swiper/css/autoplay';
import '../assets/scss/contact.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/header.js';
import { useMap } from './components/contact/contactMap.js';
import { usePartnersSlider } from './components/slider.js';
import { useAccordionFooter } from './components/footer.js';

useTheme();
useBurger();
useHeader();
useMap();
usePartnersSlider();
useAccordionFooter();
