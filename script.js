document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animated-section');
    const options = {
        threshold: 0.1
    };

    const revealOnScroll = new IntersectionObserver((entries, revealOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            revealOnScroll.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        revealOnScroll.observe(section);
    });
});

