import React from 'react';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Hero = ({ myData }) => {
  // eslint-disable-next-line react/prop-types
  const { name, para } = myData;
  return (
    <div className="hero-container">
      <div className="welcome-container">
        <p className="hero-p1">Welcome to</p>
        <h1 className="hero-h1">{name}</h1>
        <p className="hero-p2">{para}</p>
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
};

export default Hero;
