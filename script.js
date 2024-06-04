document.addEventListener('DOMContentLoaded', () => {
    const progressCircles = document.querySelectorAll('.circle-progress');
    progressCircles.forEach(circle => {
        const progress = circle.getAttribute('data-progress');
        circle.style.setProperty('--progress', progress);
    });
});
