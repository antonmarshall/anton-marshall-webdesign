import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BackButton from '@/components/BackButton';

const Impressum = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <BackButton />
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mt-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            {language === 'de' ? 'Impressum' : 'Legal Notice'}
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              {language === 'de' ? 'Angaben gemäß § 5 TMG' : 'Information according to § 5 TMG'}
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Anton Marshall Webdesign<br />
              Anton Marshall<br />
              Groningen, Niederlande
            </p>

            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              {language === 'de' ? 'Kontakt' : 'Contact'}
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              E-Mail: a.marshall@webdesign.com<br />
              Telefon: +49 123 456 7890
            </p>

            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
              {language === 'de' ? 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV' : 'Responsible for content according to § 55 Abs. 2 RStV'}
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Anton Marshall<br />
              E-Mail: a.marshall@webdesign.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
