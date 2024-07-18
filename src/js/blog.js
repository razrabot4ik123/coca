import '../assets/scss/blog.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/header.js';
import { useAccordionFooter } from './components/footer.js';

useTheme();
useBurger();
useHeader();
useAccordionFooter();
