window.addEventListener('scroll', () => {
    document.querySelectorAll('.bento-card').forEach(card => {
        if (card.getBoundingClientRect().top < window.innerHeight) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
});