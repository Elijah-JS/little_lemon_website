import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (

    <nav>
    <img src="/assetsp/Logo.svg" alt="Logo" className= "logo" />
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to= "/menu">Menu</Link></li>
        <li><Link to= "/reservations">Reservations</Link></li>
        <li><Link to= "/order-online">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li></li>
    </ul>
    </nav>
  );
};

export default Navbar;