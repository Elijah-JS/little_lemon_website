import React from 'react';
import { Helmet } from 'react-helmet';
import "./Home.css"

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
      <div className='hero-container '>
        <div className='left-box'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>Indulge in the vibrant and aromatic flavors of Mediterranean cuisine right here in Chicago. From zesty lemon-infused dishes to savory classics, our menu celebrates the rich traditions and fresh ingredients of Mediterranean cooking. Join us for an unforgettable dining experience where every meal is a taste of the Mediterranean.</p>
          <button>Reserve a Table</button>
        </div>
        <div className='right-box'>
          <img src = "/assetsp/heroimg.jpg" alt="Hero image" className="hero-image" />
        </div>
      </div>
      <div className='specials-section'>
        <div className='top-section'>
          <h2>This weeks specials</h2>
          <button>Online Menu</button>
        </div>

        <div className='bottom-section'>

          <div className="card">
              <img src="/assetsp/heroimg.jpg" alt="image" className="card-image" />
              <div className="card-content">
                <h3 className="card-title">title</h3>
                <p className="card-description">description</p>
                <button>Order for Delivery</button>
              </div>
          </div>

          <div className="card">
              <img src="/assetsp/heroimg.jpg" alt="image" className="card-image" />
              <div className="card-content">
                <h3 className="card-title">title</h3>
                <p className="card-description">description</p>
                <button>Order for Delivery</button>
              </div>
          </div>

          <div className="card">
              <img src="/assetsp/heroimg.jpg" alt="image" className="card-image" />
              <div className="card-content">
                <h3 className="card-title">title</h3>
                <p className="card-description">description</p>
                <button>Order for Delivery</button>
              </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Home;

