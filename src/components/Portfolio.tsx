import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const { t } = useLanguage();

  const portfolioItems = [
    {
      id: 'construction',
      title: t('portfolio.construction'),
      desc: t('portfolio.construction.desc'),
      image: `${import.meta.env.BASE_URL}images/bau_unternehmer.png`,
      alt: t('portfolio.construction')
    },
    {
      id: 'computer',
      title: t('portfolio.computer'),
      desc: t('portfolio.computer.desc'),
      image: `${import.meta.env.BASE_URL}images/computer.png`,
      alt: t('portfolio.computer')
    },
    {
      id: 'garden',
      title: t('portfolio.garden'),
      desc: t('portfolio.garden.desc'),
      image: `${import.meta.env.BASE_URL}images/gärtner.png`,
      alt: t('portfolio.garden')
    },
    {
      id: 'tea',
      title: t('portfolio.tea'),
      desc: t('portfolio.tea.desc'),
      image: `${import.meta.env.BASE_URL}images/japanischer_teeladen.png`,
      alt: t('portfolio.tea')
    },
    {
      id: 'psycho',
      title: t('portfolio.psycho'),
      desc: t('portfolio.psycho.desc'),
      image: `${import.meta.env.BASE_URL}images/psychotherapie.png`,
      alt: t('portfolio.psycho')
    },
    {
      id: 'photo',
      title: t('portfolio.photo'),
      desc: t('portfolio.photo.desc'),
      image: `${import.meta.env.BASE_URL}images/yoga_knete.png`,
      alt: t('portfolio.photo')
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolioItems.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-100 relative">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-white line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-white/90 mb-4 line-clamp-1">
                    {item.desc}
                  </p>
                  <Link to={`/portfolio/${item.id}`}>
                    <Button 
                      variant="outline" 
                      className="bg-white text-primary border-white hover:bg-accent hover:text-white hover:border-accent transition-colors"
                    >
                      {t('portfolio.view')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
