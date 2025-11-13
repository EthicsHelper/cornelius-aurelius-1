/* -------------------------------------------------------
   FADE-IN ON SCROLL
-------------------------------------------------------- */

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.25
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


/* -------------------------------------------------------
   SMOOTH SCROLLING FOR ANCHORS
-------------------------------------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        if (this.getAttribute("href") === "#") return;
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});


/* -------------------------------------------------------
   PARALLAX HERO MOTION
-------------------------------------------------------- */

const heroImage = document.querySelector('.hero-bg');

document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    heroImage.style.transform = `translate(${x}px, ${y}px) scale(1.04)`;
});


/* -------------------------------------------------------
   SCROLL PROGRESS BAR (TOP SLIM LINE)
-------------------------------------------------------- */

const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.background = "#6AB8FF";
progressBar.style.zIndex = "9999";
progressBar.style.transition = "width 0.2s linear";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + "%";
});


/* -------------------------------------------------------
   LITTLE GLOW ON HOVER EFFECT (CARDS)
-------------------------------------------------------- */

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `radial-gradient(circle at ${x}px ${y}px, 
        #112030, #0C1017)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.background = "#0C1017";
    });
});
