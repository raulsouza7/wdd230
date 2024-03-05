const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.textContent = '🕶️';
    } else {
        darkModeIcon.textContent = '☀️';
    }
});
