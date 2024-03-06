document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('open');
    });

    navLinks.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('open');
        }
    });
});
