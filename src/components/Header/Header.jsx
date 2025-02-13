import 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/imageslogo.jpeg'; // Asegúrate de que la ruta sea correcta

const Header = ({ toggleCart }) => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Logo de la Empresa" className="logo-image" />
        <div className="brand-name">Electricidad Rosario</div>
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/products">Productos</Link></li>
            <li><Link to="/about">Sobre Nosotros</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </nav>
      </div>
      <div className="cart-button" onClick={toggleCart}>
        🛒 Carrito
      </div>
    </header>
  );
}

Header.propTypes = {
  toggleCart: PropTypes.func.isRequired,
};

export default Header;
