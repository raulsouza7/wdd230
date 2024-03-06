document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.textContent = navLinks.classList.contains('nav-active') ? '✖' : '☰';
    });

    navLinks.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            navLinks.classList.remove('nav-active');
            hamburger.textContent = '☰';
        }
    });

    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove('nav-active');
            hamburger.textContent = '☰';
        }
    });
});
