const carousel = document.querySelector('.updates-carousel');
const cards = document.querySelectorAll('.updates-card');
const dotsContainer = document.getElementById('dots-container');

let currentIndex = 0;

// 1. Scalable: Create dots based on the number of cards
cards.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function goToSlide(index) {
    currentIndex = index;
    // Handle Infinite Logic: Loop back to start or end
    if (currentIndex >= cards.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = cards.length - 1;

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    updateDots();
}

// Optional: Auto-slide every 5 seconds for the "infinite" feel
// setInterval(() => {
//     goToSlide(currentIndex + 1);
// }, 5000);