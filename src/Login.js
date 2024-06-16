// Login.js

import React from 'react';
import './Login.css'; // Import file CSS yang sesuai

const Login = () => {
  
  // Handler untuk tombol "Lupa Password"
  const handleForgotPassword = () => {
    // Tambahkan logika untuk aksi "Lupa Password" di sini
    console.log("Lupa Password clicked");
  };

  // Handler untuk tombol "Login dengan Akun Google"
  const handleLoginWithGoogle = () => {
    // Tambahkan logika untuk aksi "Login dengan Akun Google" di sini
    console.log("Login dengan Akun Google clicked");
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        {/* Ganti URL gambar dengan yang sesuai */}
        <img src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?t=st=1718509123~exp=1718512723~hmac=1a86af5a70e04ec721b7be1b2032c5a5ca77222fe034905248ae304168ef87da&w=900" alt="background" className="background-image" />
      </div>
      <div className="right-panel">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Login</button>
          <button type="button" onClick={handleForgotPassword} className="forgot-password">Lupa Password?</button>
          <button type="button" onClick={handleLoginWithGoogle} className="google-login">Login dengan Google</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
