import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Notification } from '../types/types';

const getRandomDate = (): string => {
  const date = new Date();
  return date.toISOString();
};

const getRandomNotification = (id: number): Notification => {
  const messages = [
    'New ODI rankings are out!',
    'Babar Azam smashes India brutally',
    'Morning Star scored a century against Pak and made England victorious',
    'Upcoming ODI match: India vs Pakistan',
    'Player of the match: Virat Kohli',
    'ODI ranking updates coming soon!',
    'Check out the latest team standings',
    'Exciting ODI highlights available now',
    'Don\'t miss the next cricketing action!',
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];

  return {
    id,
    message: randomMessage,
    date: getRandomDate(),
  };
};

const generateRandomNotifications = (count: number): Notification[] => {
  const notifications: Notification[] = [];
  for (let i = 1; i <= count; i++) {
    notifications.push(getRandomNotification(i));
  }
  return notifications;
};

const NotificationComponent: React.FC = () => {
  const notifications = generateRandomNotifications(10);
  const [notificationsShown, setNotificationsShown] = useState(0);

  useEffect(() => {
    notifications.forEach((notification, index) => {
      if (notificationsShown < 5) {
        setTimeout(() => {
          toast(notification.message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            onClose: () => setNotificationsShown((prevCount) => prevCount + 1),
          });
        }, index * 2000);
      }
    });
  }, [notificationsShown]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default NotificationComponent;
