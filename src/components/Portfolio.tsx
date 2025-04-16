import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const { t, language } = useLanguage();

  const portfolioItems = [
    {
      id: 'construction',
      title: language === 'de' ? 'Rheiner Lob Bauunternehmen' : 'Rheiner Lob Construction',
      image: '/images/portfolio/construction.jpg',
      alt: language === 'de' ? 'Bauunternehmen Website' : 'Construction Company Website',
      desc: language === 'de' ? 'Professioneller Webauftritt für Bauunternehmen' : 'Professional web presence for construction company',
      url: '/examples/construction',
    },
    {
      id: 'computer',
      title: 'Custom PC Solutions',
      image: '/images/portfolio/computer.jpg',
      alt: language === 'de' ? 'Computer Service Website' : 'Computer Service Website',
      desc: language === 'de' ? 'Moderne Website für PC-Dienstleistungen' : 'Modern website for PC services',
      url: '/examples/computer',
    },
    {
      id: 'gardener',
      title: language === 'de' ? 'Grüne Oase' : 'Green Oasis',
      image: '/images/portfolio/gardener.jpg',
      alt: language === 'de' ? 'Gärtnerei Website' : 'Garden Center Website',
      desc: language === 'de' ? 'Frische Website für Gärtnerei' : 'Fresh website for garden center',
      url: '/examples/gardener',
    },
    {
      id: 'teashop',
      title: language === 'de' ? 'Teehaus Japan' : 'Tea House Japan',
      image: '/images/portfolio/teashop.jpg',
      alt: language === 'de' ? 'Japanischer Teeladen' : 'Japanese Tea Shop',
      desc: language === 'de' ? 'Eleganter Online-Shop für japanische Tees' : 'Elegant online shop for Japanese teas',
      url: '/examples/teashop',
    },
    {
      id: 'psycho',
      title: language === 'de' ? 'Praxis für Psychotherapie' : 'Psychotherapy Practice',
      image: '/images/portfolio/psycho.jpg',
      alt: language === 'de' ? 'Psychotherapie Website' : 'Psychotherapy Website',
      desc: language === 'de' ? 'Vertrauensvolle Online-Präsenz für Therapeuten' : 'Trustworthy online presence for therapists',
      url: '/examples/psycho',
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
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
                    <a 
                      href={item.url}
                      className="flex items-center gap-2 text-sm bg-primary hover:bg-primary/90 py-2 px-4 rounded-full transition-colors"
                    >
                      <span>{t('portfolio.view')}</span>
                      <ExternalLink size={14} />
                    </a>
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
