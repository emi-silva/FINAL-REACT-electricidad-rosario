import  { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const confirmPurchase = () => {
    alert('Compra confirmada');
    setCartItems([]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Router>
      <Header toggleCart={toggleCart} />
      <main>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
        </Routes>
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          confirmPurchase={confirmPurchase}
          isOpen={isCartOpen}
          toggleCart={toggleCart}
        />
      </main>
      <Footer />
    </Router>
  );
}

export default App;

