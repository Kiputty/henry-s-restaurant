document.addEventListener('DOMContentLoaded', () => {
    // Carousel Functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentSlide = 0;

    function showSlide(index) {
        carouselItems.forEach((item, i) => {
            item.classList.remove('active');
            item.style.left = (i === index) ? '0' : '100%';
        });
        carouselItems[index].classList.add('active');
    }

    // Auto Slide
    setInterval(() => {
        currentSlide = (currentSlide + 1) % carouselItems.length;
        showSlide(currentSlide);
    }, 3000);

    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (event) => {
        event
