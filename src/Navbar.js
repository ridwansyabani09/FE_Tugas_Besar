// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Jika menggunakan routing

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo">BUGENDAI</Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-link">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
