import 'swiper/css';
import 'swiper/css/autoplay';
import '/scss/contact.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/header.js';
import { usePhone } from './components/contact/phone.js';

useTheme();
useHeader();
useBurger();
usePhone();
