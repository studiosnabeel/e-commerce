import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const Header = () => (
  <div className="flex justify-between bg-slate-200 text-slate-900 py-2 px-8">
    <NavLink to="/">
      <img className="w-14 h-10" src="./images/logo1.png" alt="" />
    </NavLink>
    <Nav />
  </div>
);

export default Header;
