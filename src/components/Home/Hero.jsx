import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => (
  <div className="hero-container">
    <div className="welcome-container">
      <p className="hero-p1">Welcome to</p>
      <h1>Nabeel Store</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui et ad
        asperiores soluta.
      </p>
      <NavLink>
        <button className="hero-btn" type="submit">
          Shop Now
        </button>
      </NavLink>
    </div>
    <figure className="hero-img-folder">
      <img className="hero-img" src="./images/hero.jpg" alt="" />
    </figure>
  </div>
);

export default Hero;
