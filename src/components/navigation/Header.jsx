import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const Header = () => (
  <div className="nav-container">
    <NavLink to="/">
      <img className="nav-img" src="./images/logo1.png" alt="" />
    </NavLink>
    <Nav />
  </div>
);

export default Header;
