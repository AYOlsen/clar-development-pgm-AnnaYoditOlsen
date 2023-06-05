import './animation/horizontal.js';
import './animation/scroll.js';
import './animation/fade.js';
import './animation/slide-in.js';


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

import pinElements from './animation/horizontal.js';
import fadeElements from './animation/fade.js';
import {staggerLists}  from './animation/stagger.js';
import slideInUp  from './animation/slide-in.js';
pinElements();
fadeElements();
staggerLists();

