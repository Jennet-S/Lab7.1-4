import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/bitcoin-rates">Bitcoin Rates</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
