import gsap from 'gsap';

const fadeElements = () => {
    const $fadeElements = document.querySelectorAll('[data-animation="fade"]');

    $fadeElements.forEach(($fadeElement) => {
        gsap.from($fadeElement, {
            opacity: 0,
            y: 50,
            scrollTrigger: {
                trigger: $fadeElement,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        })
    })
}

export default fadeElements