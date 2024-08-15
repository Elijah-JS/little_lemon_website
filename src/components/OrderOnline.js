import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './OrderOnline.css';
import Notification from './Notification'; // Import the Notification component//
import salad from "../assets/salad.jpg";
import Bruschetta from "../assets/bruchetta.svg";
import lemons from "../assets/lemons.jpg";
import spag from "../assets/spagetti.jpg";
import pizza from "../assets/pizza3.jpg";
import lasagna from "../assets/lasagna.jpg";
import Tiramisu from "../assets/tiramisu.jpg";
import lemon from "../assets/lemon.png";
import logo from "../assets/Logo.svg";
/*when running build with npm start change path to / instead of ../ */

const OrderOnline = () => {
  const menuItems = [
    { id: 1, name: 'Greek Salad', price: 8.99, image: salad },
    { id: 2, name: 'Lemon Dessert', price: 10.99, image: lemons },
    { id: 3, name: 'Bruschetta', price: 7.99, image: Bruschetta },
    { id: 4, name: 'Spaghetti & Meatballs', price: 12.99, image: spag },
    { id: 5, name: 'Chicago Pizza', price: 15.99, image: pizza },
    { id: 6, name: 'Lasagna', price: 14.99, image: lasagna },
    { id: 7, name: 'Tiramisu', price: 14.99, image: Tiramisu }
  ];

  const [cart, setCart] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      setCart([]);
      setName('');
      setAddress('');
    }, 3000); // Notification duration
  };

  const totalAmount = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <>
      <Helmet>
        <title>Order Online | Little Lemon Restaurant</title>
        <meta name="description" content="Order your favorite dishes from Little Lemon Restaurant online. Enjoy convenient delivery and pickup options." />
        <meta name="keywords" content="order online, Little Lemon, food delivery, pickup, restaurant" />
        <meta property="og:title" content="Order Online | Little Lemon Restaurant" />
        <meta property="og:description" content="Order your favorite dishes from Little Lemon Restaurant online. Enjoy convenient delivery and pickup options." />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="http://www.littlelemon.com/order-online" />
      </Helmet>
      <div className="order-page">
        <header className="order-header">
          <h1>Little Lemon's Menu</h1>
        </header>

        <section id="menu" className="menu-section">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.image} alt={item.name} />
              <div className="card-content">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </section>

        <div className='bottom-half'>
          <div className='wholebottombox'>
            <div className='image1'><img src={lemon} alt='lemon'/></div>
            <section id="order" className="order-section">
              <h2>Order Summary</h2>

              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} - ${item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
              <h3>Total: ${totalAmount}</h3>

              <form onSubmit={handleOrderSubmit}>
                <label className='smalltitle'>
                  <div className='title'>Name</div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <br />
                <label className='smalltitle'>
                  <div className='title'>Address</div>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </label>
                <br />
                <button type="submit">Place Order</button>
              </form>
            </section>
            <div className='image2'><img src = {lemon} alt='lemon'/></div>
          </div>
        </div>
        {showNotification && (
          <Notification
            message={`Order placed by ${name} for delivery to ${address}.`}
            onClose={() => setShowNotification(false)}
          />
        )}
      </div>
    </>
  );
};

export default OrderOnline;
