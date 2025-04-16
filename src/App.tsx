import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Workflow from './components/Workflow';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Legal from './components/Legal';
import CookieConsent from './components/CookieConsent';
import { LanguageProvider } from './contexts/LanguageContext';

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Portfolio />
                <Pricing />
                <Workflow />
                <About />
                <Contact />
                <Legal />
              </>
            } />
            <Route path="/impressum" element={<Legal />} />
          </Routes>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
