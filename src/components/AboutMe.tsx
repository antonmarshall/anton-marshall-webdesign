import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t('about.menu')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.personal')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center md:items-start space-y-6">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
                <img
                  src={`${import.meta.env.BASE_URL}images/anton_marshall.png`}
                  alt="Anton Marshall"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-primary text-center md:text-left">
                Anton Marshall
              </h3>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {t('about.title')}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 