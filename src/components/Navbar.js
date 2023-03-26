import React from 'react'
import "./Navbar.css";
import Logo from "../assets/Logo.svg";

function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="Little lemon"/>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#resevation">Reservation</a>
        </li>
        <li>
          <a href="#order-online">Order Online</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar