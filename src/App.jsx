import 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from '../src/pages/HomePage';
import About from './pages/About/About';
import Footer from '../src/components/Footer/Footer'
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<About/>}/>
          {/* Otras rutas aquí */}
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;

