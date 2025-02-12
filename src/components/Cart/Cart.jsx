import 'react';
import PropTypes from 'prop-types';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, confirmPurchase }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name} - ${item.price}</p>
              <button onClick={() => removeFromCart(index)}>Eliminar</button>
            </div>
          ))}
          <p>Total: ${total}</p>
          <button onClick={confirmPurchase}>Confirmar Compra</button>
        </div>
      )}
    </div>
  );
};

// Define los tipos de las propiedades
Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  confirmPurchase: PropTypes.func.isRequired
};

export default Cart;