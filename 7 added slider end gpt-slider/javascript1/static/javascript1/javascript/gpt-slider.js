let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;
    const slideWidth = document.querySelector('.slide').offsetWidth;

    currentIndex += direction;

    if (currentIndex === totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

// Auto slide change every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);
