const navLinks = document.querySelector('.nav-links')
const navToggle = document.querySelector('.nav-toggle')
navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open')
})

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

setInterval(function() {
    slides[currentIndex].classList.remove('active');
    currentIndex = currentIndex + 1;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    slides[currentIndex].classList.add('active');
}, 5000);