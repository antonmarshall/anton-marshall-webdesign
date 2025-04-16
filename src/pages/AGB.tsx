
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const AGB = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">
          {language === 'de' ? 'Allgemeine Geschäftsbedingungen' : 'Terms and Conditions'}
        </h1>
        <div className="prose max-w-none">
          <p className="mb-4">
            {language === 'de'
              ? 'Stand: April 2025'
              : 'Last updated: April 2025'}
          </p>
          
          <h2 className="text-xl font-semibold mb-4">
            {language === 'de' ? '§1 Geltungsbereich' : '§1 Scope'}
          </h2>
          <p className="mb-4">
            {language === 'de'
              ? 'Diese Allgemeinen Geschäftsbedingungen gelten für alle zwischen Anton Marshall Webdesign und dem Kunden abgeschlossenen Verträge.'
              : 'These Terms and Conditions apply to all contracts concluded between Anton Marshall Webdesign and the customer.'}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AGB;
