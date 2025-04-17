import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const { t, language } = useLanguage();

  const portfolioItems = [
    {
      id: 'construction',
      title: language === 'de' ? 'Rheiner Lob Bauunternehmen' : 'Rheiner Lob Construction',
      image: `${import.meta.env.BASE_URL}images/bau_unternehmer.png`,
      alt: t('portfolio.construction'),
      desc: t('portfolio.construction.desc'),
    },
    {
      id: 'computer',
      title: 'Custom PC Solutions',
      image: `${import.meta.env.BASE_URL}images/computer.png`,
      alt: t('portfolio.computer'),
      desc: t('portfolio.computer.desc'),
    },
    {
      id: 'gardener',
      title: language === 'de' ? 'Grüne Oase' : 'Green Oasis',
      image: `${import.meta.env.BASE_URL}images/gärtner.png`,
      alt: t('portfolio.garden'),
      desc: t('portfolio.garden.desc'),
    },
    {
      id: 'teashop',
      title: language === 'de' ? 'Teehaus Japan' : 'Tea House Japan',
      image: `${import.meta.env.BASE_URL}images/japanischer_teeladen.png`,
      alt: t('portfolio.tea'),
      desc: t('portfolio.tea.desc'),
    },
    {
      id: 'psycho',
      title: language === 'de' ? 'Praxis für Psychotherapie' : 'Psychotherapy Practice',
      image: `${import.meta.env.BASE_URL}images/psychotherapie.png`,
      alt: t('portfolio.psycho'),
      desc: t('portfolio.psycho.desc'),
    },
    {
      id: 'photography',
      title: language === 'de' ? 'Licht & Schatten Studio' : 'Light & Shadow Studio',
      image: `${import.meta.env.BASE_URL}images/yoga_knete.png`,
      alt: t('portfolio.photo'),
      desc: t('portfolio.photo.desc'),
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 border border-primary"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end text-white p-6">
                    <h3 className="text-xl font-semibold mb-2 text-center">
                      {item.title}
                    </h3>
                    <p className="text-sm mb-4 text-center opacity-90">{item.desc}</p>
                    <Link 
                      to={`/portfolio/${item.id}`}
                      className="flex items-center gap-2 text-sm bg-primary hover:bg-primary/90 py-2 px-4 rounded-full transition-colors"
                    >
                      <span>{t('portfolio.view')}</span>
                      <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
