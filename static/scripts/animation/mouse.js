import gsap from 'gsap';

const $circle = document.querySelector('.mouse');

gsap.set($circle, {
    yPercent: -50,
    xPercent: -50,
    transformOrigin: 'center'
});

const xTo = gsap.quickTo($circle, 'x', { duration: 1 });
const yTo = gsap.quickTo($circle, 'y', { duration: 1 });

window.addEventListener('mousemove', (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
});
