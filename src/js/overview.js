import 'swiper/css';
import '/scss/overview.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/header.js';
import { useSwitchTabs } from './components/overview/tab.js';
import { useOverviewHeroSlider } from './components/slider.js';
import { useOverviewArticlesSlider } from './components/slider.js';
import { useAccordionFooter } from './components/footer.js';

useTheme();
useBurger();
useHeader();
useSwitchTabs();
useOverviewHeroSlider();
useOverviewArticlesSlider();
useAccordionFooter();
