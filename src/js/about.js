import 'swiper/css';
import '/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/header.js';
import { useAboutHeroSlider } from './components/slider.js';
import { useAboutTeamSlider } from './components/slider.js';
import { useAccordionFooter } from './components/footer.js';

useTheme();
useBurger();
useHeader();
useAboutHeroSlider();
useAboutTeamSlider();
useAccordionFooter();
