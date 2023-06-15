import gsap from 'gsap';
import slideInUp from './slide-in';

const showLoading = (callback) => {
    const $loading = document.querySelector('.loading');
    const $loadingElement = document.querySelector('.loading span');

    const timeline = gsap.timeline({
    onComplete: () => {
        callback();
    },
    
    });

    timeline
    .to($loadingElement, {
        slideInUp,
        duration: 1.5
    })
    .to($loading, {
        x: "100%"
    })
}

export default showLoading;
