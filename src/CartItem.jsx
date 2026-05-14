import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import Navbar from './Navbar';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      // Remove the '$' and parse as a float
      const cost = parseFloat(item.cost.substring(1));
      return total + cost * item.quantity;
    }, 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-container">
        <h2 className="cart-total-heading">
          Total Cart Amount: ${calculateTotalAmount()}
        </h2>
        <div className="cart-items-panel">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-unit-price">{item.cost}</p>
                <div className="cart-item-quantity">
                  <button type="button" onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => handleIncrement(item)}>+</button>
                </div>
                <p className="cart-item-line-total">
                  Total: ${(parseFloat(item.cost.substring(1)) * item.quantity).toFixed(2)}
                </p>
                <button type="button" className="cart-item-delete" onClick={() => handleRemove(item)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-actions">
          <Link to="/products">
            <button type="button" className="continue-shopping-btn">Continue Shopping</button>
          </Link>
          <button type="button" className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;