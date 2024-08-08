document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideImages = document.querySelectorAll('.slides img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let index = 0;

    function showSlide(i) {
        if (i >= slideImages.length) index = 0;
        else if (i < 0) index = slideImages.length - 1;
        else index = i;

        const offset = -index * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', () => {
        showSlide(index + 1);
    });

    prevButton.addEventListener('click', () => {
        showSlide(index - 1);
    });

    // Initialize slider
    showSlide(index);
});
