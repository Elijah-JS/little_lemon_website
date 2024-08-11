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

      <div className='Testimonials-sections' id='baby'>
        <div className='testimony-title'> Testimonials</div>
        <div className='top-row'>

          <div className='top1stbox'>

            <img src='/assetsp/star.svg' alt='star-icon' className='star-image'/>
            <p className='name'> Micheal Caldwell </p>
            <p>This is the best Mediterranean food that I've ever had! </p>

          </div>

          <div className='top2ndbox'>

            <img src='/assetsp/star.svg' alt='star-icon' className='star-image'/>
            <p className='name'>Alan Chen </p>
            <p>My Shiba Inu, Mugi really loved the cozy vibes and delicious food here. </p>

          </div>

          <div className='top3rdbox'>

            <img src='/assetsp/star.svg' alt='star-icon' className='star-image'/>
            <p className='name'>Casey Lau</p>
            <p>I've had some greate Mediterranean food before, but none of them beats Little Lemon in flavor and texture. </p>

          </div>

          <div className='top4thbox'>

            <img src='/assetsp/star.svg' alt='star-icon' className='star-image'/>
            <p className='name'> John Rosenblum</p>
            <p>Great food, working staff, cozy atmosphere. A great place to treat your kids to.</p>

          </div>

        </div>

        <div className='bottom-row'>

          <div className='bot1stbox'>

            <img src='/assetsp/star.svg' alt='star-icon' className='star-image'/>
            <p className='name'>Brian Dean </p>
            <p> The food here really refrehed me after a late night shift at the socal supply depot.</p>

          </div>

          <div className='bot2ndbox'>

            <img src='/assetsp/star.svg' alt='star-icon' className='star-image'/>
            <p className='name'> Tyler Tohmine</p>
            <p>I came to little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here.</p>

          </div>

          <div className='bot3rdbox'>

            <img src='/assetsp/star.svg' alt='star-icon' className='star-image'/>
            <p className='name'>Jack Hu </p>
            <p>This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!</p>

          </div>

          <div className='bot4thbox'>

            <img src='/assetsp/star.svg' alt='star-icon' className='star-image'/>
            <p className='name'>Jim Reynor </p>
            <p>The food here was fire!! Everyone should try this place out at least once if they live in Chicago.</p>

          </div>

        </div>


      </div>
    </>
  );
};

export default Home;

