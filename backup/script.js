document.addEventListener("DOMContentLoaded", function() {
    // Function to update the time and date
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const month = now.toLocaleString('default', { month: 'long' });
        const day = now.getDate();
        const year = now.getFullYear();

        document.querySelector('.time').textContent = `${hours}:${minutes}:${seconds}`;
        document.querySelector('.date').textContent = `${month} ${day}, ${year}`;
    }

    // Update the time immediately
    updateTime();

    // Set an interval to update the time every second
    setInterval(updateTime, 1000);

    // List of background image paths
    const backgrounds = [
        'backgrounds/1.jpg',
        'backgrounds/2.jpg',
        'backgrounds/3.jpg',
        'backgrounds/4.jpg',
        'backgrounds/5.jpg',
        'backgrounds/6.jpg',
        'backgrounds/7.jpg',
        'backgrounds/8.jpg',
        'backgrounds/9.jpg',
        'backgrounds/10.jpg'
    ];

    // Randomly select a background
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.backgroundImage = `url('${randomBackground}')`;
});
