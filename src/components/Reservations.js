import React from 'react';
import { Helmet } from 'react-helmet';
import "./Reservations.css"
import { useState } from 'react';
const Reservations = () => {


  const [location, setlocation] = useState("")
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
      <div className='reservation-page'>
        <div className='top-box'>
          <div className='titlel&seating-choice'>
            <p>Reservations</p>
            <div className='form-field radio-buttons'>
              <label>

              <input
                type='radio'
                name="indoor"
                value="indoor"
                onChange={e => setlocation(e.target.value)}

                />
                <span>Indoor seating</span>

              </label>

              <label>

                <input
                  type='radio'
                  name="indoor"
                  value="indoor"
                  onChange={e => setlocation(e.target.value)}

                  />
                  <span>Outdoor seating</span>

              </label>
            </div>
          </div>

          {/*drop down menus section*/}
          <div className='top-row-dropdown'>

          </div>
          <div className='bottom-row-dropdown'>

          </div>

        </div>
        <div className='bottom'>
          <div className='image-row'>

            <img />
            <img />
            <img />

          </div>
          <div className='Reserve-button-section'>
            <button className='reserve-button'>Reserve a table</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservations;
