// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Sesuaikan dengan file CSS yang sesuai

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <Link to="/" className="navbar-logo-link">
            Toko Online
          </Link>
        </h1>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">
              Login
            </Link>
          </li>
          {/* Tambahkan menu lain sesuai kebutuhan */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
