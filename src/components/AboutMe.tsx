import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Euro, Palette, Coffee } from 'lucide-react';

const AboutMe = () => {
  const { t } = useLanguage();

  const strengths = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: t('strengths.empathy.title'),
      subtitle: t('strengths.empathy.subtitle')
    },
    {
      icon: <Euro className="h-8 w-8 text-primary" />,
      title: t('strengths.speed.title'),
      subtitle: t('strengths.speed.subtitle')
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: t('strengths.quality.title'),
      subtitle: t('strengths.quality.subtitle')
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: t('strengths.creativity.title'),
      subtitle: t('strengths.creativity.subtitle')
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">{t('about.menu')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.teaser')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg mb-6 bg-gray-200">
                <img
                  src={`${import.meta.env.BASE_URL}images/profil_bild.png`}
                  alt="Anton Marshall"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg text-gray-600 mt-4 text-center">
                {t('about.personal')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {strengths.map((strength, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  title={`${strength.title} - ${strength.subtitle}`}
                >
                  <div className="flex justify-center mb-3">
                    {strength.icon}
                  </div>
                  <h4 className="text-xl font-bold text-primary text-center mb-2">
                    {strength.title}
                  </h4>
                  <p className="text-gray-600 text-center text-sm">
                    {strength.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('contact.cta')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 