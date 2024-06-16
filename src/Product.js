// Product.js

import React from 'react';
import './Product.css'; // Import file CSS yang sesuai

const Product = ({ id, name, price, imageUrl }) => {
  const handleAddToCart = () => {
    // Logika untuk menambahkan produk ke keranjang bisa ditambahkan di sini
    console.log(`Produk ${name} ditambahkan ke keranjang`);
  };

  return (
    <div className="product">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">Rp {price}</p>
        <button onClick={handleAddToCart} className="btn-add-to-cart">Beli</button>
      </div>
    </div>
  );
}

export default Product;
