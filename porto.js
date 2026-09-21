// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.style.background = "#111111";
    } else {
        navbar.style.background = "rgba(23, 23, 23, 0.95)";
    }

});


// ===============================
// SCROLL REVEAL
// ===============================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(function (section) {
    observer.observe(section);
});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.style.color = "#bbbbbb";

        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#e63946";
        }

    });

});
// =========================================
// CUSTOM CURSOR CIRCLE
// =========================================

const cursorCircle =
    document.querySelector(".cursor-circle");

document.addEventListener("mousemove", function (event) {

    cursorCircle.style.left = event.clientX + "px";

    cursorCircle.style.top = event.clientY + "px";

});