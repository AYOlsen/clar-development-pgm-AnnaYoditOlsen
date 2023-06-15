import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

import './animation/scroll.js';
import './animation/tween.js';
import './animation/mouse.js';

import pinElements from './animation/horizontal.js';
import fadeElements from './animation/fade.js';
import fadeList from './animation/list.js';
import slideInUp  from './animation/slide-in.js';
import scaleAnimation  from './animation/scale.js';
import showLoading  from './animation/loading.js';

const afterLoading = () => {
    pinElements();
    fadeElements();
    fadeList();
    slideInUp();
    scaleAnimation();
}

showLoading(afterLoading);