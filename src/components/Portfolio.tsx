
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
      image: '/images/handwerker.png',
      alt: language === 'de' ? 'Schreinerei Website' : 'Carpentry Website',
      desc: language === 'de' ? 'Traditionelle Schreinerei mit modernem Webauftritt' : 'Traditional carpentry with modern web presence',
      url: 'https://example-handwerk.com',
    },
    {
      id: 'psycho',
      title: language === 'de' ? 'Praxis für Psychotherapie' : 'Psychotherapy Practice',
      image: '/images/psychotherapie.png',
      alt: language === 'de' ? 'Psychotherapie Praxis' : 'Psychotherapy Practice',
      desc: language === 'de' ? 'Vertrauensvolle Online-Präsenz für Therapeuten' : 'Trustworthy online presence for therapists',
      url: 'https://example-therapy.com',
    },
    {
      id: 'teashop',
      title: language === 'de' ? 'Teekultur Japan' : 'Tea Culture Japan',
      image: `${import.meta.env.BASE_URL}images/japanischer_teeladen.png`,
      alt: language === 'de' ? 'Japanischer Teeladen' : 'Japanese Tea Shop',
      desc: language === 'de' ? 'Eleganter Online-Shop für japanische Tees' : 'Elegant online shop for Japanese teas',
      url: 'https://example-teashop.com',
    },
    {
      id: 'computer',
      title: language === 'de' ? 'PC Support Express' : 'PC Support Express',
      image: '/images/computer.png',
      alt: language === 'de' ? 'Computer Support' : 'Computer Support',
      desc: language === 'de' ? 'Professionelle IT-Dienstleistungen' : 'Professional IT services',
      url: 'https://amazon.com',
    },
    {
      id: 'gardener',
      title: language === 'de' ? 'Grüne Oase Gartenbau' : 'Green Oasis Landscaping',
      image: '/images/gärtner.png',
      alt: language === 'de' ? 'Gartenbau Website' : 'Landscaping Website',
      desc: language === 'de' ? 'Kreative Gartengestaltung und Pflege' : 'Creative garden design and maintenance',
      url: 'https://example-garten.com',
    },
    {
      id: 'construction',
      title: language === 'de' ? 'Kyoto Teewaren' : 'Kyoto Teaware',
      image: '/anton-marshall-webdesign/images/bau_unternehmer.png',
      alt: language === 'de' ? 'Teegeschirr Shop' : 'Teaware Shop',
      desc: language === 'de' ? 'Bauunternehmer' : 'construction',
      url: 'https://example-kyoto.com',
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

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full h-36 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end text-white p-4 md:p-6">
                    <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm mb-2 md:mb-4 opacity-90">{item.desc}</p>
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1 md:gap-2 text-xs md:text-sm bg-white/20 py-1 md:py-2 px-3 md:px-4 rounded-full mt-1 md:mt-2 hover:bg-white/30 transition-colors"
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
