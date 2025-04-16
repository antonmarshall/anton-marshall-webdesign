
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
            {t('price.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('price.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  {t('price.fixedPrice')}
                </h3>
                <p className="text-lg text-gray-600 mt-2">
                  800 €
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-xl font-semibold mb-6 text-primary">
                {t('price.includes')}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">{t('price.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">{t('price.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-accent mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">{t('price.feature3')}</span>
                </li>
              </ul>
              <p className="mt-8 text-lg text-gray-600 border-t border-gray-200 pt-6">
                {t('price.payment')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
