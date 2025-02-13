import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Products.css';

// Importa las imágenes correctamente
import lamparaLed9w from '../../assets/images/lampara_led9w.jpg';
import lamparaLed12w from '../../assets/images/lampara_led12w.jpg';
import lamparaLed80w from '../../assets/images/lampara_led80w.jpg';
import cintaAisladora from '../../assets/images/cinta_aisladora.jpg'
import cables from '../../assets/images/cables.jpg'
import termicaBipolar from '../../assets/images/termica_bip32.jpg'
import tester from '../../assets/images/tester.jpg'
import herramientas from '../../assets/images/herramientas.jpg'
import estabilizador from '../../assets/images/estabilizador.jpg'

const initialProducts = [
  { id: 1, name: 'Lampara Led', description: 'Lampara led 9w luz fria o calida', price: 1200, image: lamparaLed9w },
  { id: 2, name: 'Lampara Led', description: 'Lampara led 12w luz fria o calida', price: 1600, image: lamparaLed12w },
  { id: 3, name: 'Lampara led Alta Potencia', description: 'Lampara led 80w luz fria', price: 3300, image: lamparaLed80w },
  { id: 4, name: 'Cinta Aisladora', description: 'Cinta aisladora de 20 metros', price: 350, image: cintaAisladora },
  { id: 5, name: 'Cables', description: 'Rollo cable 2.5mm x 100 metros', price: 23500, image: cables },
  { id: 6, name: 'Termica 32 amp', description: 'Termica bipolar SICA', price: 32500, image:termicaBipolar },
  { id: 7, name: 'Multimetro' , description: 'Tester digital', price: 22399, image: tester},
  { id: 8, name: 'Set de Herramientas', description: 'set de herramientas dielectricas', price: 108300, image: herramientas },
  { id: 9, name: 'Estabilizador', description: 'Estabilizador de tension 1000w', price: 65700, image: estabilizador },
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
