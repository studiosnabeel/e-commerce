import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FiShoppingCart } from 'react-icons/fi';

const Nav = () => (
  <div className="flex item-center">
    <ul className="flex items-center gap-2">
      <li
        className="text-xs hover:bg-red-400
      active:text-white
      active:bg-red-500
      rounded p-2"
      >
        <NavLink to="/">HOME</NavLink>
      </li>
      <li
        className="text-xs hover:bg-red-400
      active:text-white  active:bg-red-500 rounded p-2"
      >
        <NavLink to="/about">ABOUT</NavLink>
      </li>
      <li
        className="text-xs hover:bg-red-400
      active:bg-red-500
      active:text-white rounded p-2 "
      >
        <NavLink to="/products">PRODUCTS</NavLink>
      </li>
      <li className="text-xs hover:bg-red-400 active:text-white active:bg-red-500 rounded p-2">
        <NavLink to="/contact">CONTACT</NavLink>
      </li>
      <li
        className="
      text-xs hover:bg-red-400
      active:text-white  active:bg-red-500 rounded p-2"
      >
        <NavLink className="flex " to="/cart">
          <FiShoppingCart />
          <span className="mx-0.5">(10)</span>
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
