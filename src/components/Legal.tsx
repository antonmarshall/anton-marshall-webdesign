import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Legal = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  const getTitle = () => {
    switch (location.pathname) {
      case '/impressum':
        return language === 'de' ? 'Impressum' : 'Legal Notice';
      case '/datenschutz':
        return language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy';
      case '/agb':
        return language === 'de' ? 'Allgemeine Geschäftsbedingungen' : 'Terms and Conditions';
      default:
        return '';
    }
  };

  const getContent = () => {
    switch (location.pathname) {
      case '/impressum':
        return (
          <>
            <h2>{language === 'de' ? 'Angaben gemäß § 5 TMG' : 'Information according to § 5 TMG'}</h2>
            <p>
              Marshall WebDesign<br />
              [Street Address]<br />
              [City, Postal Code]<br />
              Germany
            </p>

            <h3>{language === 'de' ? 'Kontakt' : 'Contact'}</h3>
            <p>
              {language === 'de' ? 'Telefon' : 'Phone'}: [Your Phone Number]<br />
              E-Mail: contact@marshall-webdesign.com
            </p>

            <h3>{language === 'de' ? 'Umsatzsteuer-ID' : 'VAT ID'}</h3>
            <p>
              {language === 'de' ? 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz' : 'VAT identification number according to § 27 a of the Sales Tax Law'}:<br />
              DE [Your VAT Number]
            </p>

            <h3>{language === 'de' ? 'Verantwortlich für den Inhalt' : 'Responsible for content'}</h3>
            <p>Anton Marshall</p>
          </>
        );
      case '/datenschutz':
        return (
          <>
            <p>
              {language === 'de'
                ? 'Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen.'
                : 'The protection of your personal data is very important to us. We therefore process your data exclusively on the basis of legal provisions.'}
            </p>
            {/* Add more privacy policy content here */}
          </>
        );
      case '/agb':
        return (
          <>
            <p>
              {language === 'de'
                ? 'Durch die Nutzung unserer Website erklären Sie sich mit den folgenden Geschäftsbedingungen einverstanden.'
                : 'By using our website, you agree to the following terms and conditions.'}
            </p>
            {/* Add more terms and conditions content here */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{language === 'de' ? 'Zurück' : 'Back'}</span>
        </button>

        <h1 className="text-4xl font-bold mb-8 text-primary">
          {getTitle()}
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          {getContent()}
        </div>
      </div>
    </section>
  );
};

export default Legal; 