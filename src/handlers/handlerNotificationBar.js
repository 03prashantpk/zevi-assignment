// NotificationBar.js
export const HandlerNotificationBar = (message) => {
    const notificationBar = document.querySelector('.Notification-Bar');
    const notificationBarText = document.querySelector('.notification-message');


    notificationBarText.textContent = message;

    notificationBar.style.display='flex';
    setTimeout(() => {
        notificationBar.style.display='none';
    }, 5000);
};