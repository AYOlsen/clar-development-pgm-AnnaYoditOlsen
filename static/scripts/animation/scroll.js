import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const $introSection = document.querySelectorAll('.scroll-wrapper');
const $scrollElements = document.querySelectorAll('.scroll-element');

gsap.to($scrollElements, {
    y: 50,
    scrollTrigger: {
        trigger: $introSection,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: $scrollElements,
        pinSpacing: false,
        markers: true
    }
});
