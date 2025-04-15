
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import Portfolio from '@/components/Portfolio';
import WorkflowSection from '@/components/WorkflowSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <HeroSlider />
        <Portfolio />
        <WorkflowSection />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
