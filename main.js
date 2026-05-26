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
