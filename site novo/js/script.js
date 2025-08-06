document.addEventListener('DOMContentLoaded', function() {
    // Add click effect to cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Footer year update
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Add hover effect to developer names
    const devLinks = document.querySelectorAll('.nomes a');
    devLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.fontWeight = '600';
        });
        link.addEventListener('mouseleave', function() {
            this.style.fontWeight = '';
        });
    });
    
    // Preload images for better performance
    const images = document.querySelectorAll('img[data-src]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    imageObserver.unobserve(image);
                }
            });
        });
        
        images.forEach(image => {
            imageObserver.observe(image);
        });
    }
});