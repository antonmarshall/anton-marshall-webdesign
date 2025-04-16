import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Legal = () => {
  const { language } = useLanguage();

  return (
    <section id="Impressum" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-primary">
          {language === 'de' ? 'Impressum' : 'Legal Notice'}
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
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

          <h2>{language === 'de' ? 'Haftungsausschluss' : 'Disclaimer'}</h2>
          <h3>{language === 'de' ? 'Haftung für Inhalte' : 'Liability for content'}</h3>
          <p>
            {language === 'de' 
              ? 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.'
              : 'The contents of our pages were created with utmost care. However, we cannot guarantee the accuracy, completeness and timeliness of the content.'}
          </p>

          <h3>{language === 'de' ? 'Haftung für Links' : 'Liability for links'}</h3>
          <p>
            {language === 'de'
              ? 'Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.'
              : 'Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Legal; 