
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BackButton from '@/components/BackButton';

const Datenschutz = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <BackButton />
        <h1 className="text-3xl font-bold mb-8">
          {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
        </h1>
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">Datenschutz auf einen Blick</h2>
          <p className="mb-6">
            Der Schutz Ihrer Daten ist uns wichtig. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften.
          </p>
          
          <h3 className="text-lg font-semibold mb-2">Kontaktaufnahme</h3>
          <p className="mb-6">
            Wenn Sie uns per E-Mail oder Kontaktformular kontaktieren, speichern wir Ihre Angaben zur Bearbeitung der Anfrage. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <h3 className="text-lg font-semibold mb-2">Cookies</h3>
          <p className="mb-6">
            Unsere Website verwendet keine Cookies, um Nutzerprofile zu erstellen. Technisch notwendige Cookies werden ausschließlich für den sicheren Betrieb der Seite verwendet.
          </p>

          <h3 className="text-lg font-semibold mb-2">Ihre Rechte</h3>
          <p className="mb-6">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie auf Widerspruch. Bei Fragen wenden Sie sich bitte an: a.marshall@webdesign.com
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
