// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Import CSS styles
import Home from './Home'; // Import Home component
import Login from './Login'; // Import Login component
import Cart from './Cart'; // Import Cart component

function App() {
  // Data dummy untuk keranjang belanja
  const dummyCartItems = [
    { id: 1, name: 'Baju', price: 150000, quantity: 2 },
    { id: 2, name: 'Celana', price: 200000, quantity: 1 },
    { id: 3, name: 'Sepatu', price: 300000, quantity: 1 }
  ];

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart cartItems={dummyCartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
