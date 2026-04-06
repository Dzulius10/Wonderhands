const navLinks = document.querySelector('.nav-links')
const navToggle = document.querySelector('.nav-toggle')
navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open')
})