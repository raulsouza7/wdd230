document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navUL = document.querySelector('.navigation ul');

    hamburger.addEventListener('click', function() {
        navUL.classList.toggle('show');

        if (navUL.classList.contains('show')) {
            this.innerHTML = '&times;';
        } else {
            this.innerHTML = '&#9776;';
        }
    });
});
