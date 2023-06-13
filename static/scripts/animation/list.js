import gsap from 'gsap';

const fadeList = () => {
    const $fadeList = document.querySelectorAll('[data-animation="fade-list"] li');

    gsap.from($fadeList, {
        opacity: 0,
        x: -50,
        stagger: 0.1,
        scrollTrigger: {
            trigger: $fadeList,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    })
}

export default fadeList