
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Impressum = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">
          {language === 'de' ? 'Impressum' : 'Legal Notice'}
        </h1>
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">
            {language === 'de' ? 'Angaben gemäß § 5 TMG' : 'Information according to § 5 TMG'}
          </h2>
          <p className="mb-4">
            Anton Marshall<br />
            Webdesign<br />
            Musterstraße 123<br />
            12345 Groningen<br />
            Netherlands
          </p>

          <h3 className="text-lg font-semibold mb-2">
            {language === 'de' ? 'Kontakt' : 'Contact'}
          </h3>
          <p className="mb-4">
            Telefon: +49 123 456 7890<br />
            E-Mail: a.marshall@webdesign.com
          </p>

          <h3 className="text-lg font-semibold mb-2">
            {language === 'de' ? 'Umsatzsteuer-ID' : 'VAT ID'}
          </h3>
          <p className="mb-4">
            {language === 'de' ? 'Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:' : 'VAT identification number according to §27a VAT law:'}<br />
            DE 123 456 789
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
