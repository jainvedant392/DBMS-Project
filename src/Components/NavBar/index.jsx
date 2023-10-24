import React from 'react';
import '../Styles/index.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="nav-link">
          Wallet X
        </Link>
        <Link to="/account" className="nav-link">
          Account
        </Link>
        <Link to="/wallet" className="nav-link">
          Wallet
        </Link>
        <Link to="/login" className="nav-link">
          Log In
        </Link>
        <Link to="/signup" className="nav-link">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
