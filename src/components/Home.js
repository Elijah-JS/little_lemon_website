import React from 'react';
import { Helmet } from 'react-helmet';
import "./Home.css"
import { useNavigate } from 'react-router-dom';
/*when running build with npm start change path to / instead of ../ */
import heroimg from "../assets/heroimg.jpg";
import logo from "../assets/Logo.svg";
import salad from "../assets/salad.jpg";
import Bruschetta from "../assets/bruchetta.svg";
import lemons from "../assets/lemons.jpg";
import star from "../assets/star.svg";
import owners from "../assets/A.jpg";




const Home = () => {

const navigate = useNavigate();

const handleClick1 = ()=>{
  navigate("/reservations")
}

const handleClick2 = ()=>{
  navigate("/order-online")
}

  return (
    <>
      <Helmet>
        <title>Home | Little Lemon Restaurant</title>
        <meta name="description" content="Welcome to Little Lemon Restaurant! Enjoy our delicious dishes, cozy ambiance, and excellent service. Explore our menu and make a reservation today." />
        <meta name="keywords" content="restaurant, dining, Little Lemon, food, reservation" />
        <meta property="og:title" content="Home | Little Lemon Restaurant" />
        <meta property="og:description" content="Welcome to Little Lemon Restaurant! Enjoy our delicious dishes, cozy ambiance, and excellent service. Explore our menu and make a reservation today." />
        <meta property="og:image" content= {logo} />
        <meta property="og:url" content="http://www.littlelemon.com" />
      </Helmet>
      {/* Page content starts undere here*/}
      <div className='hero-container '>
        <div className='left-box'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>Indulge in the vibrant and aromatic flavors of Mediterranean cuisine right here in Chicago. From zesty lemon-infused dishes to savory classics, our menu celebrates the rich traditions and fresh ingredients of Mediterranean cooking. Join us for an unforgettable dining experience where every meal is a taste of the Mediterranean.</p>
          <button className='home' onClick={handleClick1}>Reserve a Table</button>
        </div>
        <div className='right-box'>
        <img src={heroimg} alt="Hero image" className="hero-image" />

        </div>
      </div>

      <div className='specials-section'>
        <div className='top-section'>
          <h2>This weeks specials</h2>
          <button className='home' onClick={handleClick2}>Online Menu</button>
        </div>

        <div className='bottom-section'>

          <div className="card">
              <img src={salad} alt="image" className="card-image" />
              <div className="card-content">
                <h3 className="card-title">Greek Salad</h3>
                <p className="card-description">Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil.</p>
                <button className='home' onClick={handleClick2}>Order for Delivery</button>
              </div>
          </div>

          <div className="card">
              <img src= {Bruschetta} alt="image" className="card-image" />
              <div className="card-content">
                <h3 className="card-title">Bruschetta</h3>
                <p className="card-description">Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.</p>
                <button className='home' onClick={handleClick2}>Order for Delivery</button>
              </div>
          </div>

          <div className="card">
              <img src={lemons} alt="image" className="card-image" />
              <div className="card-content">
                <h3 className="card-title">Lemon Dessert</h3>
                <p className="card-description">A buttery shortbread base layered with a silky lemon curd, topped with a fresh lemon slice.</p>
                <button className='home' onClick={handleClick2}>Order for Delivery</button>
              </div>
          </div>

        </div>

      </div>

      <div className='Testimonials-sections' id='baby'>
        <div className='testimony-title'> Testimonials</div>
        <div className='top-row'>

          <div className='top1stbox'>

            <img src ={star} alt='star-icon' className='star-image'/>
            <p className='name'> Micheal Caldwell </p>
            <p>This is the best Mediterranean food that I've ever had! </p>

          </div>

          <div className='top2ndbox'>

            <img src={star} alt='star-icon' className='star-image'/>
            <p className='name'>Alan Chen </p>
            <p>My Shiba Inu, Mugi really loved the cozy vibes and delicious food here. </p>

          </div>

          <div className='top3rdbox'>

            <img src={star} alt='star-icon' className='star-image'/>
            <p className='name'>Casey Lau</p>
            <p>I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture. </p>

          </div>

          <div className='top4thbox'>

            <img src= {star} alt='star-icon' className='star-image'/>
            <p className='name'> John Rosenblum</p>
            <p>Great food, working staff, cozy atmosphere. A great place to treat your kids to.</p>

          </div>

        </div>

        <div className='bottom-row'>

          <div className='bot1stbox'>

            <img src= {star} alt='star-icon' className='star-image'/>
            <p className='name'>Brian Dean </p>
            <p> The food here really refreshed me after a late night shift at the socal supply depot.</p>

          </div>

          <div className='bot2ndbox'>

            <img src= {star} alt='star-icon' className='star-image'/>
            <p className='name'> Tyler Tohmine</p>
            <p>I came to little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here.</p>

          </div>

          <div className='bot3rdbox'>

            <img src= {star} alt='star-icon' className='star-image'/>
            <p className='name'>Jack Hu </p>
            <p>This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!</p>

          </div>

          <div className='bot4thbox'>

            <img src= {star} alt='star-icon' className='star-image'/>
            <p className='name'>Jim Reynor </p>
            <p>The food here was fire!! Everyone should try this place out at least once if they live in Chicago.</p>

          </div>

        </div>


      </div>

      <div className='about-us'>
        <div className='leftside'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>For over 30 years, we’ve been sharing our passion for Italian cooking right here in Chicago. Our kitchen is more than just a place where we cook—it’s where our family traditions come to life. Each dish is made with the same care and love that Mario and Adrian bring to their own family meals. We’re all about using the freshest ingredients and classic recipes to create a warm, inviting dining experience that feels just like home. Come on in and be a part of our extended family—we can’t wait to share our table with you!</p>
        </div>
        <div className='right-ide'>
          <img src={owners} alt='image of owners' />
        </div>
      </div>
    </>
  );
};

export default Home;

