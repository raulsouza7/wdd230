document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('year').innerHTML = '&copy; ' + new Date().getFullYear() + ' Raul Cavalcante de Souza, Orem - Utah';
    document.getElementById('lastModified').textContent = 'Last Modification: ' + document.lastModified;
});
