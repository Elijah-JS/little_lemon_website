import React from 'react';
import { Helmet } from 'react-helmet';

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Menu | Little Lemon Restaurant</title>
        <meta name="description" content="Browse the diverse menu at Little Lemon Restaurant. From appetizers to desserts, discover the flavors and specialties we offer." />
        <meta name="keywords" content="menu, Little Lemon, restaurant menu, food, appetizers, desserts" />
        <meta property="og:title" content="Menu | Little Lemon Restaurant" />
        <meta property="og:description" content="Browse the diverse menu at Little Lemon Restaurant. From appetizers to desserts, discover the flavors and specialties we offer." />
        <meta property="og:image" content="/assetsp/logo.svg" />
        <meta property="og:url" content="http://www.littlelemon.com/menu" />
      </Helmet>
      {/* Page content starts undere here*/}
    </>
  );
};

export default Menu;
