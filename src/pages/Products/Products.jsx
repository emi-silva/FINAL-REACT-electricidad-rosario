import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Products.css';

const initialProducts = [
  { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: 100, image: 'ruta/a/imagen1.jpg' },
  { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: 200, image: 'ruta/a/imagen2.jpg' },
  // Agrega más productos aquí hasta tener 15
];

const Products = ({ addToCart }) => {
  const [products] = useState(initialProducts);

  return (
    <div className="products-page">
      <h1>Productos</h1>
      <div className="products-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

// Define los tipos de las propiedades
Products.propTypes = {
  addToCart: PropTypes.func.isRequired
};

export default Products;
