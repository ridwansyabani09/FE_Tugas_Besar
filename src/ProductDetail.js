// src/components/ProductDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'; // Import CSS for styling
import Navbar from './Navbar'; // Import Navbar component
import Footer from './Footer'; // Import Footer component

const ProductDetail = () => {
  // Dapatkan parameter productId dari URL menggunakan useParams
  let { id } = useParams();

  // Data produk (biasanya diambil dari backend)
  const product = {
    id: id,
    name: 'Sepatu Sneakers',
    price: 500000,
    description: 'Sepatu sneakers nyaman dengan desain modern.',
    imageUrl: 'https://img.freepik.com/free-photo/sport-running-shoes_1203-3414.jpg?t=st=1718715475~exp=1718719075~hmac=beb51ef39df2653428312fb2129403383e2d09f2e0db96353ebe775cab9822ad&w=900',
  };

  return (
    <div>
      <Navbar />
      <div className="product-detail">
        <img src={product.imageUrl} alt={product.name} />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="price">Rp {product.price}</p>
          <p>{product.description}</p>
          <button className="add-to-cart">Tambah ke Keranjang</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
