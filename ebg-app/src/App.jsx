import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header';
import Home from './pages/home';
// import About from './About';
// import Services from './Services';
// import Contact from './Contact';

function App() {
  return (
    <Router>
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
