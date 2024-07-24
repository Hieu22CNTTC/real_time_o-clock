function updateClock() {
    const cities = [
        { id: 'clock-hanoi', timezone: 'Asia/Ho_Chi_Minh' },
        { id: 'clock-tokyo', timezone: 'Asia/Tokyo' },
        { id: 'clock-newyork', timezone: 'America/New_York' },
        { id: 'clock-singapore', timezone: 'Asia/Singapore' },
        { id: 'clock-busan', timezone: 'Asia/Seoul' }
    ];

    cities.forEach(city => {
        const clockElement = document.getElementById(city.id);
        const now = new Date(new Date().toLocaleString('en-US', { timeZone: city.timezone }));

        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    });

    updateBackground();
}

function updateBackground() {
    const hanoiTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }));
    const hours = hanoiTime.getHours();

    const bodyElement = document.body;
    if (hours >= 6 && hours < 12) {
        bodyElement.className = 'morning';
    } else if (hours >= 12 && hours < 18) {
        bodyElement.className = 'afternoon';
    } else if (hours >= 18 && hours < 21) {
        bodyElement.className = 'evening';
    } else {
        bodyElement.className = 'night';
    }
}

setInterval(updateClock, 1000);
updateClock();
