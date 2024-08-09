import React from 'react';
import { Helmet } from 'react-helmet';

const Login = () => {
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
      {/* Page content starts under here*/}
    </>
  );
};

export default Login;
