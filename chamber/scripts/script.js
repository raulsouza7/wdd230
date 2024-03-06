document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('open');
    });

    document.addEventListener('click', (event) => {
        if (!hamburger.contains(event.target) && navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('open');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('open');
        });
    });
});
