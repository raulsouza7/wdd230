document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger-menu');
    const nav = document.getElementById('navbar');
    const body = document.body;

    hamburger.addEventListener('click', function () {
        nav.classList.toggle('show');
        body.classList.toggle('menu-active');

        if (nav.classList.contains('show')) {
            this.innerHTML = '&times;';
        } else {
            this.innerHTML = '&#9776;';
        }
    });
});
