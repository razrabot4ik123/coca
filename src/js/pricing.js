import '../assets/scss/pricing.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/header.js';
import { usePriceSwitcher } from './components/pricing/priceSwitcher.js';

useTheme();
useBurger();
useHeader();
usePriceSwitcher();
