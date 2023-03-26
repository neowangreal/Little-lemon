import React from "react";
import "./Header.css";
import Food from "../assets/Food.jpg";



function Header() {
  return (
    <header>
      <div id="home" className="left-side">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>
          <a href="#Reserve">Reserve a Table</a>
        </button>
      </div>
      <div className="right-side">
        <img
          src={Food}
          alt="our cook holding a tablet with delicoues baguettes"
        />
      </div>
    </header>
  )
}

export default Header
