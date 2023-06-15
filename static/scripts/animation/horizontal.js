import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const pinElements = () => {
    const $trigger = document.querySelector("[data-animation='pin-horizontal-scroll']");
    const $overflowElement = $trigger.querySelector("[data-child='pin-horizontal-scroll']");
    const $quote = $overflowElement.querySelectorAll(".quote-list li");

    const horizontalScroll = gsap.to($overflowElement, {
        x: (_, $overflowElement) => - ($overflowElement.scrollWidth - window.innerWidth / 4) - 500,
        scrollTrigger: {
            trigger: $trigger,
            start: '30% 30%',
            end: 'bottom top',
            scrub: true,
            pin: $trigger,
            
        }
    });

    $quote.forEach($card => {
        gsap.set($card, { opacity: 1 });

        ScrollTrigger.create({
            trigger: $card,
            containerAnimation: horizontalScroll,
            start: 'top 40%',
            end: '10% 50%',
            onEnterBack: () => gsap.to($card, { opacity: 1 }),
            onLeave: () => gsap.to($card, { opacity: 0 }),
        });
    });
};

export default pinElements;