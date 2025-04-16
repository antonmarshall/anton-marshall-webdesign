
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BackButton from '@/components/BackButton';

const Impressum = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <BackButton />
        <h1 className="text-3xl font-bold mb-8">
          {language === 'de' ? 'Impressum' : 'Legal Notice'}
        </h1>
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="mb-4">
            Anton Marshall Webdesign<br />
            Anton Marshall<br />
            Groningen, Niederlande
          </p>

          <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
          <p className="mb-4">
            E-Mail: a.marshall@webdesign.com<br />
            Telefon: +49 123 456 7890
          </p>

          <h3 className="text-lg font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p className="mb-4">
            Anton Marshall<br />
            E-Mail: a.marshall@webdesign.com
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
