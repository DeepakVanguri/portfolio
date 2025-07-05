document.addEventListener('DOMContentLoaded', function() {
    // Animate project cards when they come into view
    const projectCards = document.querySelectorAll('.project-card');
    
    // Add animation class to project cards with a delay
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate');
        }, 200 * index);
    });
    
    // Intersection Observer for project cards
    const observeProjects = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observeProjects.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    // Observe each project card
    projectCards.forEach(card => {
        observeProjects.observe(card);
    });
});