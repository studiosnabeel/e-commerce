import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FiShoppingCart } from 'react-icons/fi';

const Nav = () => (
  <div className="navlink-folder">
    <ul className="nav-ul">
      <li className="nav-li">
        <NavLink to="/">HOME</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/about">ABOUT</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/products">PRODUCTS</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/contact">CONTACT</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/cart">
          <FiShoppingCart />
          <span>(10)</span>
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
