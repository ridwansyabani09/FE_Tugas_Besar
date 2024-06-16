// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Sesuaikan dengan file CSS yang sesuai
import Product from './Product'; // Misalnya, Anda memiliki komponen Product

// Deklarasi komponen Navbar di dalam file Home.js
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

const Home = () => {
  return (
    <div className="home">
      <Navbar /> {/* Menggunakan komponen Navbar di sini */}
      <div className="slider">
        {/* Isi slide foto di sini */}
        <img src="https://via.placeholder.com/1200x400" alt="Slider 1" className="slider-image" />
        {/* Tambahkan lebih banyak slide foto jika perlu */}
      </div>
      <div className="product-list">
        <Product name="Sepatu Nike Air Zoom Pegasus" price="1.200.000" imageUrl="https://via.placeholder.com/200x200" />
        <Product name="Jam Tangan Casio G-Shock" price="900.000" imageUrl="https://via.placeholder.com/200x200" />
        {/* Tambahkan lebih banyak produk sesuai kebutuhan */}
      </div>
    </div>
  );
}

export default Home;
