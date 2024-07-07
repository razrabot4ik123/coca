import 'swiper/css';
import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/header.js';
import { usePartnersSlider } from './components/slider.js';

useTheme();
useBurger();
useHeader();
usePartnersSlider();
