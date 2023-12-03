// NotificationBar.js
import React, { useState } from 'react';
import './NotificationBar.scss';

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState('');

  const showNotification = (newMessage) => {
    setMessage(newMessage);
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <div className={`Notification-Bar ${isVisible ? 'show' : 'hide'}`}>
      <p className='notification-message'>{message}</p>
    </div>
  );
};

export const handlerNotificationBar = NotificationBar.showNotification;

export default NotificationBar;
