import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <h1>My Shop</h1>
    </Link>
  </div>
);

export default Logo;
