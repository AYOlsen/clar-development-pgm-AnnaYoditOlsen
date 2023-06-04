import './animation/horizontal.js';
import './animation/scroll.js';
import './animation/fade.js';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

import pinElements from './animation/horizontal.js';
import fadeElements from './animation/fade.js';
pinElements();
fadeElements();