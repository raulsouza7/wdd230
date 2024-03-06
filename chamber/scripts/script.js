document.addEventListener('DOMContentLoaded', () => {
    const lastModified = document.getElementById('last-updated');
    lastModified.textContent = new Date(document.lastModified).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric', hour: '12', minute: '2-digit', second: '2-digit'
    });
});
