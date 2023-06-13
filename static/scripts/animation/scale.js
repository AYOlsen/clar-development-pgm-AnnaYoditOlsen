import { gsap } from 'gsap';

const scale = () => {
    const $triggers = document.querySelectorAll('.image');

    const scaleCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const $circles = document.querySelectorAll('[data-animation="scale"] circle');
    
            gsap.fromTo($circles, 
                {scale: 0},
                {
                scale: 1,
                stagger: 0.2
                });
    
            observer.unobserve(entry.target);
            }
        });
    };
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
    };
    
    const observer = new IntersectionObserver(scaleCallback, observerOptions);
    
    $triggers.forEach(($triggers) => {
        observer.observe($triggers);
    });
}

export default scale;
