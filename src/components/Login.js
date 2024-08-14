import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Update import for navigation
import Notification from './Notification'; // Import the notification component
import './Login.css';
import { Helmet } from 'react-helmet';

const Login = () => {
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate(); // Get the navigate function for redirection

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a successful login
    setShowNotification(true);

    // Redirect to home page after notification is displayed
    setTimeout(() => {
      navigate('/'); // Redirect to the home page
    }, 3000); // Match this duration with the notification duration
  };

  return (
    <>
      <Helmet>
        <title>Login | Little Lemon Restaurant</title>
        <meta name="description" content="Log in to your Little Lemon Restaurant account to manage reservations, view your order history, and more." />
        <meta name="keywords" content="login, Little Lemon, account, reservations, order history" />
        <meta property="og:title" content="Login | Little Lemon Restaurant" />
        <meta property="og:description" content="Log in to your Little Lemon Restaurant account to manage reservations, view your order history, and more." />
        <meta property="og:image" content="/assetsp/logo.svg" />
        <meta property="og:url" content="http://www.littlelemon.com/login" />
      </Helmet>
      <div className='login-section'>
        <div className='rows'>
          <div className='leftside'><img src='/assetsp/lemon.png' alt='lemon' /></div>
          <div className='middle'>
            <p>One of us?</p>
            <p>Log in to continue</p>
            <form className='login-form' onSubmit={handleSubmit}>
              <div className='loginbuttons'>
                <div className='login-input-container' id='user'>
                  <img src='/assetsp/user.png' alt='username icon' className='input-icon' />
                  <input type="text" name="username" placeholder="Username" required />
                </div>
                <div className='login-input-container' id='pass'>
                  <img src='/assetsp/padlock.png' alt='password icon' className='input-icon' />
                  <input type="password" name="password" placeholder="Password" required />
                </div>
                <button className='logbutton' type="submit">Login</button>
              </div>
            </form>
          </div>
          <div className='rightside'><img src='/assetsp/lemon.png' alt='lemon' /></div>
        </div>
      </div>
      {showNotification && (
        <Notification
          message="Successfully logged in!"
          onClose={() => setShowNotification(false)}
        />
      )}
    </>
  );
};

export default Login;
