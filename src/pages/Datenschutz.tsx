
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Datenschutz = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">
          {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
        </h1>
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">
            {language === 'de' ? '1. Datenschutz auf einen Blick' : '1. Privacy at a glance'}
          </h2>
          <p className="mb-4">
            {language === 'de' 
              ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.'
              : 'The following information provides a simple overview of what happens to your personal data when you visit this website.'}
          </p>
          
          <h3 className="text-lg font-semibold mb-2">
            {language === 'de' ? 'Datenerfassung auf dieser Website' : 'Data collection on this website'}
          </h3>
          <p className="mb-4">
            {language === 'de'
              ? 'Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten können Sie dem Impressum dieser Website entnehmen.'
              : 'Data processing on this website is carried out by the website operator. You can find their contact details in the legal notice of this website.'}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
