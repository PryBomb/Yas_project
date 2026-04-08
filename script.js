// script.js
document.addEventListener("DOMContentLoaded", () => {
    // 7. Scroll Progress Bar
    const progressBar = document.getElementById("scroll-progress");

    // 1. & 2. Sticky Navbar & Scroll Color Shift
    const navbar = document.getElementById("navbar");
    
    window.addEventListener("scroll", () => {
        // Sticky Navbar
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Progress Bar
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
        if (progressBar) {
            progressBar.style.width = scrollPercent + "%";
        }

        // 8. About Section Dynamic Scroll Gradient
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            const rect = aboutSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top <= windowHeight && rect.bottom >= 0) {
                const scrollDistance = windowHeight - rect.top;
                const totalScrollable = windowHeight + rect.height;
                let progress = scrollDistance / totalScrollable;
                
                // Curve the progress to stay 0 until centered, max out earlier
                progress = Math.max(0, Math.min(1, (progress - 0.2) * 1.5));
                aboutSection.style.setProperty('--about-progress', progress);
                
                if (progress > 0.4) {
                    aboutSection.classList.add('dark-active');
                } else {
                    aboutSection.classList.remove('dark-active');
                }
            }
        }
    });

    // 2. Mobile Hamburger Menu Interaction
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    
    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            
            // Basic hamburger transform animation
            hamburger.classList.toggle("toggle");
            const spans = hamburger.querySelectorAll("span");
            if (navLinks.classList.contains("active")) {
                spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
                spans[1].style.opacity = "0";
                spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
            } else {
                spans[0].style.transform = "none";
                spans[1].style.opacity = "1";
                spans[2].style.transform = "none";
            }
        });

        // Close mobile menu when clicking a navigation link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                if (navLinks.classList.contains("active")) {
                    hamburger.click();
                }
            });
        });
    }

    // 3. Fade-in Animations on Scroll
    const faders = document.querySelectorAll('.fade-in');
    
    // Set up the Intersection Observer
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Add the appear class which triggers the CSS transition
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);
    
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 5. Cursor Glow Effect
    const cursorGlow = document.getElementById("cursor-glow");
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Use requestAnimationFrame for smooth trailing effect
        const updateCursor = () => {
            // LERP for smooth lag
            glowX += (mouseX - glowX) * 0.15;
            glowY += (mouseY - glowY) * 0.15;
            cursorGlow.style.transform = `translate(${glowX}px, ${glowY}px)`;
            requestAnimationFrame(updateCursor);
        };
        requestAnimationFrame(updateCursor);
    }
});
