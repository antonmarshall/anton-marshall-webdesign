import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const { t, language } = useLanguage();

  const portfolioItems = [
    {
      id: 'handwerk',
      title: language === 'de' ? 'Müller & Sohn Schreinerei' : 'Müller & Son Carpentry',
      image: '/images/portfolio/handwerk.jpg',
      alt: language === 'de' ? 'Schreinerei Website' : 'Carpentry Website',
      desc: language === 'de' ? 'Traditionelle Schreinerei mit modernem Webauftritt' : 'Traditional carpentry with modern web presence',
      url: '/examples/handwerk',
    },
    {
      id: 'psycho',
      title: language === 'de' ? 'Praxis für Psychotherapie' : 'Psychotherapy Practice',
      image: '/images/portfolio/psycho.jpg',
      alt: language === 'de' ? 'Psychotherapie Praxis' : 'Psychotherapy Practice',
      desc: language === 'de' ? 'Vertrauensvolle Online-Präsenz für Therapeuten' : 'Trustworthy online presence for therapists',
      url: '/examples/psycho',
    },
    {
      id: 'teashop',
      title: language === 'de' ? 'Teekultur Japan' : 'Tea Culture Japan',
      image: '/images/portfolio/teashop.jpg',
      alt: language === 'de' ? 'Japanischer Teeladen' : 'Japanese Tea Shop',
      desc: language === 'de' ? 'Eleganter Online-Shop für japanische Tees' : 'Elegant online shop for Japanese teas',
      url: '/examples/teashop',
    },
    {
      id: 'computer',
      title: language === 'de' ? 'PC Support Express' : 'PC Support Express',
      image: '/images/portfolio/computer.jpg',
      alt: language === 'de' ? 'Computer Support' : 'Computer Support',
      desc: language === 'de' ? 'Professionelle IT-Dienstleistungen' : 'Professional IT services',
      url: '/examples/computer',
    },
    {
      id: 'gardener',
      title: language === 'de' ? 'Grüne Oase Gartenbau' : 'Green Oasis Landscaping',
      image: '/images/portfolio/gardener.jpg',
      alt: language === 'de' ? 'Gartenbau Website' : 'Landscaping Website',
      desc: language === 'de' ? 'Kreative Gartengestaltung und Pflege' : 'Creative garden design and maintenance',
      url: '/examples/gardener',
    },
    {
      id: 'construction',
      title: language === 'de' ? 'Kyoto Teewaren' : 'Kyoto Teaware',
      image: '/images/portfolio/construction.jpg',
      alt: language === 'de' ? 'Teegeschirr Shop' : 'Teaware Shop',
      desc: language === 'de' ? 'Bauunternehmer' : 'construction',
      url: '/examples/construction',
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
