import 'swiper/css';
import '../assets/scss/overview.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/header.js';
import { useOverviewHeroSlider } from './components/slider.js';
import { useAccordionFooter } from './components/footer.js';

useTheme();
useBurger();
useHeader();
useOverviewHeroSlider();
useAccordionFooter();
