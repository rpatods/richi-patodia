// ==========================================
// Typing Animation
// ==========================================

const typingText = document.getElementById("typing-text");

const words = [
    "Chartered Accountant",
    "Finance Educator",
    //"CA Foundation Mentor",
    //"CA Intermediate Faculty",
    "Business Studies Expert",
    "Accounting Mentor"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;

            setTimeout(typeEffect, 1800);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 60 : 120
    );
}

typeEffect();


// ==========================================
// Animated Counters
// ==========================================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection =
        document.querySelector(".stats");

    const position =
        statsSection.getBoundingClientRect().top;

    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                +counter.getAttribute("data-target");

            let current = 0;

            const increment =
                Math.ceil(target / 100);

            const updateCounter = () => {

                current += increment;

                if (current >= target) {

                    counter.innerText =
                        target + "+";

                } else {

                    counter.innerText =
                        current;

                    requestAnimationFrame(
                        updateCounter
                    );
                }
            };

            updateCounter();

        });
    }
}

window.addEventListener(
    "scroll",
    startCounters
);

window.addEventListener(
    "load",
    startCounters
);


// ==========================================
// Testimonials Auto Slider
// ==========================================

const testimonials =
    document.querySelectorAll(".testimonial");

let testimonialIndex = 0;

function rotateTestimonials() {

    testimonials.forEach(item => {
        item.classList.remove("active");
    });

    testimonialIndex++;

    if (
        testimonialIndex >= testimonials.length
    ) {
        testimonialIndex = 0;
    }

    testimonials[
        testimonialIndex
    ].classList.add("active");
}

setInterval(
    rotateTestimonials,
    4000
);


// ==========================================
// Mobile Menu
// ==========================================

const hamburger =
    document.querySelector(".hamburger");

const navLinks =
    document.querySelector(".nav-links");

if (hamburger) {

    hamburger.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "mobile-active"
            );

        }
    );
}


// ==========================================
// Close Menu On Click
// ==========================================

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navLinks.classList.remove(
                "mobile-active"
            );

        }
    );

});


// ==========================================
// Scroll Reveal Animation
// ==========================================

const revealElements =
    document.querySelectorAll(
        ".section, .stat-card, .course-card, .about-card, .timeline-item, .gallery-item"
    );

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show-element"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );

revealElements.forEach(el => {

    el.classList.add(
        "hidden-element"
    );

    revealObserver.observe(el);

});


// ==========================================
// Hero Parallax Effect
// ==========================================

window.addEventListener(
    "mousemove",
    e => {

        const glow =
            document.querySelector(
                ".profile-glow"
            );

        if (!glow) return;

        const x =
            (window.innerWidth / 2 -
                e.pageX) /
            60;

        const y =
            (window.innerHeight / 2 -
                e.pageY) /
            60;

        glow.style.transform =
            `translate(${x}px, ${y}px)`;
    }
);


// ==========================================
// Navbar Background On Scroll
// ==========================================

window.addEventListener(
    "scroll",
    () => {

        const navbar =
            document.querySelector(
                ".navbar"
            );

        if (
            window.scrollY > 80
        ) {

            navbar.style.boxShadow =
                "0 10px 25px rgba(0,0,0,.08)";

        } else {

            navbar.style.boxShadow =
                "none";

        }
    }
);


// ==========================================
// Contact Form Demo
// ==========================================

const form =
    document.querySelector(
        ".contact-form"
    );

if (form) {

    form.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const btn =
                this.querySelector(
                    "button"
                );

            const original =
                btn.innerHTML;

            btn.innerHTML =
                "Sending...";

            btn.disabled = true;

            setTimeout(() => {

                alert(
                    "Thank you! Your message has been submitted."
                );

                form.reset();

                btn.innerHTML =
                    original;

                btn.disabled = false;

            }, 1500);

        }
    );
}


// ==========================================
// Smooth Button Hover Glow
// ==========================================

document
.querySelectorAll(
    ".btn-primary"
)
.forEach(btn => {

    btn.addEventListener(
        "mousemove",
        e => {

            const rect =
                btn.getBoundingClientRect();

            const x =
                e.clientX -
                rect.left;

            const y =
                e.clientY -
                rect.top;

            btn.style.setProperty(
                "--x",
                `${x}px`
            );

            btn.style.setProperty(
                "--y",
                `${y}px`
            );
        }
    );

});


// ==========================================
// Gallery Image Tilt Effect
// ==========================================

document
.querySelectorAll(
    ".gallery-item"
)
.forEach(card => {

    card.addEventListener(
        "mousemove",
        e => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX -
                rect.left;

            const y =
                e.clientY -
                rect.top;

            const rotateX =
                ((y /
                    rect.height) -
                    0.5) *
                -10;

            const rotateY =
                ((x /
                    rect.width) -
                    0.5) *
                10;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.03)`;

        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        }
    );

});


// ==========================================
// Current Year Footer (Optional)
// ==========================================

const footerYear =
    document.getElementById(
        "currentYear"
    );

if (footerYear) {

    footerYear.textContent =
        new Date().getFullYear();
}