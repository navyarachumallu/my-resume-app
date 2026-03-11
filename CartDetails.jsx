import React from "react";

const CartDetails = ({ cart, setCart }) => {
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      removeFromCart(id);
    } else {
      setCart(cart.map((item) => item.id === id ? { ...item, quantity } : item));
    }
  };

  const totalAmount = cart.reduce((total, item) => {
    const price = parseInt(item.price.replace('₹', '').replace('/kg', '')) * item.quantity;
    return total + price;
  }, 0);

  return (
    <div className="cart-details">
      <h2>Cart Details</h2>
      <table>
        <thead>
          <tr>
            <th>Fruit</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}/>
              </td>
              <td>{item.price}</td>
              <td>₹{parseInt(item.price.replace('₹', '').replace('/kg', '')) * item.quantity}</td>
              <td>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total Amount:</td>
            <td>₹{totalAmount}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartDetails;