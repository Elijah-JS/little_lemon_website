import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Little Lemon Restaurant</title>
        <meta name="description" content="Welcome to Little Lemon Restaurant! Enjoy our delicious dishes, cozy ambiance, and excellent service. Explore our menu and make a reservation today." />
        <meta name="keywords" content="restaurant, dining, Little Lemon, food, reservation" />
        <meta property="og:title" content="Home | Little Lemon Restaurant" />
        <meta property="og:description" content="Welcome to Little Lemon Restaurant! Enjoy our delicious dishes, cozy ambiance, and excellent service. Explore our menu and make a reservation today." />
        <meta property="og:image" content="/assetsp/logo.svg" />
        <meta property="og:url" content="http://www.littlelemon.com" />
      </Helmet>
      {/* Page content starts undere here*/}
    </>
  );
};

export default Home;

