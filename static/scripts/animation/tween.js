import gsap from 'gsap';

const hover = document.querySelector('.contact-link');
const $button = document.querySelector('.contact');

const tween = gsap.to($button, {
    rotate: 10,
    scale: 0.8,
    duration: 0.2,
    ease: 'bounce.in',
});

hover.addEventListener('mouseover', () => {
    tween.play();
});

hover.addEventListener('mouseout', () => {
    tween.reverse();
});