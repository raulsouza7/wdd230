document.addEventListener('DOMContentLoaded', () => {
    const visitMessageContainer = document.getElementById('visit-message');
    const lastVisitTime = localStorage.getItem('lastVisit');
    const currentTime = new Date().getTime();

    let message = 'Welcome! Let us know if you have any questions.';
    if (lastVisitTime) {
        const daysBetween = Math.floor((currentTime - lastVisitTime) / (1000 * 60 * 60 * 24));
        if (daysBetween < 1) {
            message = 'Back so soon! Awesome!';
        } else {
            const dayText = daysBetween === 1 ? 'day' : 'days';
            message = `You last visited ${daysBetween} ${dayText} ago.`;
        }
    }

    visitMessageContainer.textContent = message;
    localStorage.setItem('lastVisit', currentTime.toString());
});
