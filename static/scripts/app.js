import './animation/horizontal.js';
import './animation/scroll.js';
import './animation/fade.js';
import './animation/tween.js';
import './animation/scale.js';


import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

import pinElements from './animation/horizontal.js';
import fadeElements from './animation/fade.js';
import fadeList from './animation/list.js';
import slideInUp  from './animation/slide-in.js';
import scale  from './animation/scale.js';

pinElements();
fadeElements();
fadeList();
slideInUp();
scale();