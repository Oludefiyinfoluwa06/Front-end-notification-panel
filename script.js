const maar = document.getElementById('maar');
const unreadCount = document.getElementById('unread-count');
const redDots = document.querySelectorAll('#red-dot');
const notifications = document.querySelectorAll('#notification');

maar.addEventListener('click', () => {
    notifications.forEach(notification => {
        notification.classList.remove('unread');
    });
    redDots.forEach(redDot => {
        redDot.classList.remove('reddot');
    });
    unreadCount.innerText = 0;
});