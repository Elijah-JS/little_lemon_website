import React from 'react';
import { Helmet } from 'react-helmet';

const OrderOnline = () => {
  return (
    <>
      <Helmet>
        <title>Order Online | Little Lemon Restaurant</title>
        <meta name="description" content="Order your favorite dishes from Little Lemon Restaurant online. Enjoy convenient delivery and pickup options." />
        <meta name="keywords" content="order online, Little Lemon, food delivery, pickup, restaurant" />
        <meta property="og:title" content="Order Online | Little Lemon Restaurant" />
        <meta property="og:description" content="Order your favorite dishes from Little Lemon Restaurant online. Enjoy convenient delivery and pickup options." />
        <meta property="og:image" content="/assetsp/logo.svg" />
        <meta property="og:url" content="http://www.littlelemon.com/order-online" />
      </Helmet>
      {/* Page content starts undere here*/}
    </>
  );
};

export default OrderOnline;
