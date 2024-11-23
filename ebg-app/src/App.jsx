import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './component/header';
import Footer from './component/footer';
import Home from './pages/home';
import About from './pages/about';
import Dealership from './pages/Dealership';
import Skypher from './pages/products/skypher';
import Electrus_pro from './pages/products/electrus_pro';
import Electrus from './pages/products/electrus';
import Galexeon from './pages/products/galexeon';
import Skypher_pro from './pages/products/skypher_pro';
import Nexara from './pages/products/nexara';
import Voltoria from './pages/products/voltoria';
import Contact from './pages/Contact';
import ScrollToTop from './component/ScrollToTop'; // Importing the ScrollToTop component
import Preebook from './pages/Preebook';


function App() {
  return (
    <Router>
      <ScrollToTop />  {/* Add ScrollToTop here */}
      <Header />
      <div className="pt-20 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dealership" element={<Dealership />} />
          <Route path="/products/skypher" element={<Skypher />} />
          <Route path="/products/electrus-pro" element={<Electrus_pro />} />
          <Route path="/products/electrus" element={<Electrus />} />
          <Route path="/products/galexeon" element={<Galexeon />} />
          <Route path="/products/nexara" element={<Nexara />} />
          <Route path="/products/skypher-pro" element={<Skypher_pro />} />
          <Route path="/products/voltoria" element={<Voltoria />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="products/:productSlug/prebook"  element={<Preebook />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
