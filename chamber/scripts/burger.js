document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
