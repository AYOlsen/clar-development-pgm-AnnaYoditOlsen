import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const pinElements = () => {
    const $trigger = document.querySelector("[data-animation='pin-scroll']");
    const $overflowElement = $trigger.querySelectorAll("[data-child='pin-scroll']");

    gsap.to($overflowElement, {
        x: (_, $overflowElement) => - ($overflowElement.scrollWidth - window.innerWidth / 4) - 500,
        scrollTrigger: {
            trigger: $trigger,
            start: 'top 30%',
            end: 'bottom top',
            scrub: true,
            pin: $trigger,
        }
    });
}

export default pinElements;