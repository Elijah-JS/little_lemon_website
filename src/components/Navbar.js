import React from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"
import logo from "../assets/Logo.svg"

const Navbar = () => {
  return (

    <nav>
    <ul>
    <img src={logo} alt="Logo" className= "logo" />
        <li><Link to="/">Home</Link></li>
        <li><Link to= "/order-online">Order Online</Link></li>
        <li><Link to= "/reservations">Reservations</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li></li>
    </ul>
    </nav>
  );
};

export default Navbar;

/*when running build with npm start change path to / instead of ../ */