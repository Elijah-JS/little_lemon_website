import React from 'react';
import { Helmet } from 'react-helmet';

const Reservations = () => {
  return (
    <>
      <Helmet>
        <title>Reservations | Little Lemon Restaurant</title>
        <meta name="description" content="Make a reservation at Little Lemon Restaurant. Ensure your table is ready for an unforgettable dining experience." />
        <meta name="keywords" content="reservations, Little Lemon, book a table, dining, restaurant reservations" />
        <meta property="og:title" content="Reservations | Little Lemon Restaurant" />
        <meta property="og:description" content="Make a reservation at Little Lemon Restaurant. Ensure your table is ready for an unforgettable dining experience." />
        <meta property="og:image" content="/assetsp/logo.svg" />
        <meta property="og:url" content="http://www.littlelemon.com/reservations" />
      </Helmet>
      {/* Page content starts undere here*/}
    </>
  );
};

export default Reservations;
