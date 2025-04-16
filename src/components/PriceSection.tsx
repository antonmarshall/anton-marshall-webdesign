
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { EuroIcon } from 'lucide-react';

const PriceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="price" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('price.title') || 'Preis'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('price.subtitle') || 'Transparente Preisgestaltung für Ihre Webseite'}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  {t('price.websitePackage') || 'Webseiten-Paket'}
                </h3>
                <p className="text-lg text-gray-600 mt-2">
                  {t('price.completePackage') || 'Komplettpaket für Ihre professionelle Online-Präsenz'}
                </p>
              </div>
              <div className="mt-6 md:mt-0 flex items-center">
                <div className="text-3xl md:text-4xl font-bold text-accent flex items-center">
                  <span>800</span>
                  <EuroIcon className="ml-1 w-8 h-8" />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-xl font-semibold mb-4 text-primary">
                {t('price.includes') || 'Im Preis enthalten:'}
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('price.feature1') || 'Responsive Design'}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('price.feature2') || 'Suchmaschinenoptimierung'}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('price.feature3') || 'Kontaktformular'}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('price.feature4') || 'Domain & Hosting (1 Jahr)'}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('price.feature5') || 'Unbegrenzte Revisionen'}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('price.feature6') || 'Support nach Launch'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
