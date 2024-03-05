document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('navbar');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('show');
        if (nav.classList.contains('show')) {
            this.innerHTML = '&times;';
        } else {
            this.innerHTML = '&#9776;';
        }
    });
});
