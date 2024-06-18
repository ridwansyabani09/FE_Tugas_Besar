// Home.js

import React from 'react';
import './Home.css'; // Import CSS for Home page styling
import Navbar from './Navbar'; // Import Navbar component
import Footer from './Footer'; // Import Footer component
import { Carousel } from 'react-responsive-carousel'; // Import Carousel component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const Home = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main content */}
      <div className="main-content">
        {/* Slider (Carousel) */}
        <Carousel showArrows autoPlay infiniteLoop showThumbs={false} interval={5000}>
          <div>
            <img src="https://img.freepik.com/free-vector/horizontal-banner-template-black-friday-sales_23-2150879089.jpg?t=st=1718674094~exp=1718677694~hmac=c46b31d8030f3feb6c1048de55b29b7076d2c7dde6b7490d2330ed71af0f0bff&w=1060" alt="Slider Image 1" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-psd/banner-template-with-online-shopping_23-2148545459.jpg?t=st=1718676936~exp=1718680536~hmac=e5258a7da823ce7431b373e6b2ab496229ad3ebc93129cf4f05e211ab2cf90bb&w=1060" alt="Slider Image 2" />
          </div>
          <div>
            <img src="https://img.freepik.com/free-vector/hand-painted-sale-landing-page-template-with-photo_23-2149055739.jpg?t=st=1718676977~exp=1718680577~hmac=6fd07933bfe26d447538d1ceab345c231f7a6567bdd6a00de4bbf5ca4383bc4b&w=1060" alt="Slider Image 3" />
          </div>
          {/* Add more images as needed */}
        </Carousel>

        {/* Featured Products */}
        <div className="products">
          <h2>Produk Pilihan</h2>
          <div className="product-list">
            {/* Product cards */}
            <div className="product-card">
              <img src="product1.jpg" alt="Product 1" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="product1.jpg" alt="Product 1" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="product1.jpg" alt="Product 1" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="product1.jpg" alt="Product 1" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="product1.jpg" alt="Product 1" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="product1.jpg" alt="Product 1" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="product1.jpg" alt="Product 1" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="product1.jpg" alt="Product 1" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="product1.jpg" alt="Product 1" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <img src="product1.jpg" alt="Product 1" />
              <h3>Product 1</h3>
              <p>Description of Product 1</p>
              <button>Add to Cart</button>
            </div>
            {/* Include other product cards here */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
