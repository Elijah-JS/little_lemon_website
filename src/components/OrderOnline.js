import React, { useState } from 'react'; // Import useState
import { Helmet } from 'react-helmet';
import "./OrderOnline.css";

const OrderOnline = () => {
  const menuItems = [
    { id: 1, name: 'Cheeseburger', price: 8.99, image: '/path-to-images/cheeseburger.jpg' },
    { id: 2, name: 'Margherita Pizza', price: 10.99, image: '/path-to-images/pizza.jpg' },
    { id: 3, name: 'Caesar Salad', price: 7.99, image: '/path-to-images/salad.jpg' },
    { id: 4, name: 'Spaghetti Bolognese', price: 12.99, image: '/path-to-images/spaghetti.jpg' },
  ];

  const [cart, setCart] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed by ${name} for delivery to ${address}.`);
    setCart([]);
    setName('');
    setAddress('');
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
        <meta property="og:image" content="/assetsp/logo.svg" />
        <meta property="og:url" content="http://www.littlelemon.com/order-online" />
      </Helmet>
      {/* Page content starts here */}
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
              <div className='title'> Address</div>
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
        </div>
      </div>
    </>
  );
};

export default OrderOnline;
