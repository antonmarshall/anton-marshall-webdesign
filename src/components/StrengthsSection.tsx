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
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-primary">Kreativität</h3>
              <p className="text-gray-600">
                {t('about.strengths.creativity')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-primary">Technische Expertise</h3>
              <p className="text-gray-600">
                {t('about.strengths.technical')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-primary">Kundenorientierung</h3>
              <p className="text-gray-600">
                {t('about.strengths.customer')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrengthsSection; 