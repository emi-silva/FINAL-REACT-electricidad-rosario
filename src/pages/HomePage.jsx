import 'react';
import './HomePage.css'; // Asegúrate de tener un archivo CSS para estilos
import lamparasLedImage1 from '../assets/images/lampara led.png';
import lamparasLedImage2 from '../assets/images/lampara led 2.jpg';
import lamparasLedImage3 from '../assets/images/lampara led 3.jpg';
import apliquesLedImage1 from '../assets/images/aplique led.jpg';
import apliquesLedImage2 from '../assets/images/apliques led 2.jpg';
import apliquesLedImage3 from '../assets/images/apliques led 3.jpg';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Bienvenidos a Electricidad Rosario</h1>
      <p>Descubre los mejores productos y ofertas exclusivas.</p>
      <section className="highlights">
        <h2>Destacados</h2>
        <div className="product-highlight">
          <h3>Producto Destacado Lamparas Led</h3>
          <div className="highlight-images">
            <img src={lamparasLedImage1} alt="Lamparas LED 1" className="highlight-image" />
            <img src={lamparasLedImage2} alt="Lamparas LED 2" className="highlight-image" />
            <img src={lamparasLedImage3} alt="Lamparas LED 3" className="highlight-image" />
          </div>
          <p>Las lámparas LED son una excelente opción para quienes buscan una iluminación eficiente, duradera y versátil.</p>
        </div>
        <div className="product-highlight">
          <h3>Producto Destacado Apliques de Led</h3>
          <div className="highlight-images">
            <img src={apliquesLedImage1} alt="Apliques de LED 1" className="highlight-image" />
            <img src={apliquesLedImage2} alt="Apliques de LED 2" className="highlight-image" />
            <img src={apliquesLedImage3} alt="Apliques de LED 3" className="highlight-image" />
          </div>
          <p>Diseñado para iluminar y embellecer espacios exteriores. Fabricado con materiales resistentes a la intemperie, ofrece una luz cálida y eficiente. Ideal para jardines, terrazas y fachadas.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
