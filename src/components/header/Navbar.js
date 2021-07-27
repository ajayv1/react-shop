import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <Logo />
        <ul>
          <li><NavLink to="/" exact={true}>Home</NavLink></li>
          <li><NavLink to="/collection/laptops">Latops</NavLink></li>
          <li><NavLink to="/collection/mobiles">Mobiles</NavLink></li>
          <li><NavLink to="/collection/games">Games</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;