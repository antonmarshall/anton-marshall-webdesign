import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const StrengthsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="strengths" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('about.desc')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection; 