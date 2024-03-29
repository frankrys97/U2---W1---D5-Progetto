const nav = document.querySelector("nav")
const navButton = document.querySelector("nav div button")

window.addEventListener('scroll', function () {
    if (window.scrollY < 450) {
        nav.classList.remove('nav-scrolled');
        navButton.classList.remove('nav-scrolled');
        nav.classList.remove('nav-transition');
        navButton.classList.remove('nav-transition');
    } else {
        nav.classList.add('nav-scrolled');
        navButton.classList.add('nav-scrolled');
        nav.classList.add('nav-transition');
        navButton.classList.add('nav-transition');
    }
});


