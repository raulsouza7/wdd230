document.addEventListener('DOMContentLoaded', () => {
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    img.setAttribute('src', src);
                    img.onload = () => img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, {rootMargin: "0px 0px 50px 0px"});

        document.querySelectorAll('.gallery-image').forEach(img => {
            observer.observe(img);
        });
    } else {
        document.querySelectorAll('.gallery-image').forEach(img => {
            const src = img.getAttribute('data-src');
            img.setAttribute('src', src);
        });
    }
});
