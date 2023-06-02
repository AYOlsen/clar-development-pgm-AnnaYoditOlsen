import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const $overflowContainer = document.querySelector("[data-animation='horizontal-scroll']");
const $wideElement = $overflowContainer.querySelectorAll("[data-child='horizontal-scroll']");

gsap.to($wideElement, {
    x: (_, $wideElement) => - ($wideElement.scrollWidth - window.innerWidth / 4) - 500,
    scrollTrigger: {
        trigger: $overflowContainer,
        start: 'top 30%',
        end: 'bottom top',
        scrub: true,
        pin: true,
    }
});