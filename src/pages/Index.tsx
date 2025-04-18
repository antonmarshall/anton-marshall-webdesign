import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import Portfolio from '@/components/Portfolio';
import WorkflowSection from '@/components/WorkflowSection';
import PriceSection from '@/components/PriceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Force a repaint on load to ensure all components display correctly
  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <WorkflowSection />
      <Portfolio />
      <PriceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
