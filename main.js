document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.add('light-theme');
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        }
    });
});

const video = document.getElementById('welcome-video');
const playOverlay = document.getElementById('play-overlay');

if (playOverlay && video) {
    playOverlay.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playOverlay.style.opacity = '0';
            setTimeout(() => {
                playOverlay.style.display = 'none';
            }, 300);
        }
    });

    video.addEventListener('pause', () => {
        playOverlay.style.display = 'flex';
        playOverlay.style.opacity = '1';
    });
}
let currentSlide = 0;
const slides = document.querySelectorAll('.review-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

document.querySelectorAll('.slider-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('next')) {
            currentSlide = (currentSlide + 1) % slides.length;
        } else {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        }
        showSlide(currentSlide);
    });
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 6000);

if (slides.length > 0) {
    showSlide(0);
}
