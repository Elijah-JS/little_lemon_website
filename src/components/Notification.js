import React, { useEffect } from 'react';
import './Notification.css'; // Import CSS file for styling

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    // Automatically close the notification and redirect after 3 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 4700); // 4700 milliseconds = 4.7 seconds

    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, [onClose]);

  return (
    <div className="notification">
      {message}
    </div>
  );
};

export default Notification;
