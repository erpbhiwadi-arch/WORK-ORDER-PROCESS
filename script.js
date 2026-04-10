// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Hero Text Reveal Animation
    gsap.from(".reveal", {
        duration: 1.2,
        y: 50,
        opacity: 0,
        stagger: 0.3,
        ease: "power4.out"
    });

    // 2. Card Entrance Animation
    gsap.from(".card", {
        scrollTrigger: {
            trigger: ".grid-container",
            start: "top 80%",
        },
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });

    // 3. Sub-page Content Animations
    gsap.from(".anim-left", {
        scrollTrigger: {
            trigger: ".content-section",
            start: "top 70%",
        },
        x: -100,
        opacity: 0,
        duration: 1
    });

    gsap.from(".anim-right", {
        scrollTrigger: {
            trigger: ".content-section",
            start: "top 70%",
        },
        x: 100,
        opacity: 0,
        duration: 1
    });

    // 4. Smooth Page Transition Effect (Entrance)
    gsap.from("body", {
        opacity: 0,
        duration: 0.5,
        ease: "linear"
    });
});
// Add this to your existing script.js
document.querySelector('a[href^="mailto:"]').addEventListener('click', function() {
    console.log("Contacting Malhotra Cables ERP...");
});

// GSAP list item animation
gsap.from("li", {
    scrollTrigger: {
        trigger: "ul",
        start: "top 90%"
    },
    opacity: 0,
    x: -20,
    stagger: 0.1,
    duration: 0.5
});