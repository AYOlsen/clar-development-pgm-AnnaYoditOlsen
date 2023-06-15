import gsap from 'gsap';

const scaleAnimation = () => {
    const $trigger = document.querySelectorAll('svg');
    const $circles = document.querySelectorAll('[data-animation="scale"] circle');

    $circles.forEach((element) => {
        gsap.fromTo(
            element,
            {
                scale: 0
            },
            {
                scale: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: $trigger,
                    start: 'top 80%',
                    end: 'bottom top',
                    toggleActions: 'play none none reverse',
                }
            }
        );
    });
};

export default scaleAnimation;
