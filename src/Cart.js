// Cart.js

import React from 'react';
import styles from './Cart.module.css'; // Import CSS Modules

const Cart = ({ cartItems }) => {
  // Fungsi untuk menghitung total harga
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <div className={styles.cart}>
      <h2>Keranjang Belanja</h2>
      <div className={styles['cart-items']}>
        {cartItems.map(item => (
          <div key={item.id} className={styles['cart-item']}>
            <div className={styles['item-name']}>{item.name}</div>
            <div className={styles['item-price']}>Rp {item.price}</div>
            <div className={styles['item-quantity']}>Qty: {item.quantity}</div>
          </div>
        ))}
      </div>
      <div className={styles['cart-total']}>
        <h3>Total Belanja:</h3>
        <p>Rp {calculateTotal()}</p>
      </div>
    </div>
  );
};

export default Cart;
