import gsap from 'gsap';

const slideInUp = () => {
    const $triggers = document.querySelectorAll('.title');

    const slideInCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const $slideElements = entry.target.querySelectorAll('span span');

                gsap.to($slideElements, {
                    y: 0,
                    duration: 1,
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

    const observer = new IntersectionObserver(slideInCallback, observerOptions);

    $triggers.forEach(($trigger) => {
        observer.observe($trigger);
    });
};

export default slideInUp;
