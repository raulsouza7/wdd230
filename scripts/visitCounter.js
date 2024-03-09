document.addEventListener('DOMContentLoaded', () => {
    const countEl = document.getElementById('visitCount');
    let visits = Number(localStorage.getItem('visits')) || 0;
    visits++;
    localStorage.setItem('visits', visits);
    countEl.textContent = visits;
});
