// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Sesuaikan dengan file CSS yang sesuai
import Home from './Home'; // Sesuaikan dengan path file Home.js
import Login from './Login'; // Sesuaikan dengan path file Login.js

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
