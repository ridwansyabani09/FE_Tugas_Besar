// src/App.js
import React from 'react';
import './App.css';
import Login from './Login'; // Import komponen Login

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login /> {/* Gunakan komponen Login di sini */}
      </header>
    </div>
  );
}

export default App;
