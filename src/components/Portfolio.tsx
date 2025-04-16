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
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800',
      alt: language === 'de' ? 'Schreinerei Website' : 'Carpentry Website',
      desc: language === 'de' ? 'Traditionelle Schreinerei mit modernem Webauftritt' : 'Traditional carpentry with modern web presence',
      url: '#handwerk',
    },
    {
      id: 'psycho',
      title: language === 'de' ? 'Praxis für Psychotherapie' : 'Psychotherapy Practice',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      alt: language === 'de' ? 'Psychotherapie Praxis' : 'Psychotherapy Practice',
      desc: language === 'de' ? 'Vertrauensvolle Online-Präsenz für Therapeuten' : 'Trustworthy online presence for therapists',
      url: '#psycho',
    },
    {
      id: 'teashop',
      title: language === 'de' ? 'Teekultur Japan' : 'Tea Culture Japan',
      image: 'https://images.unsplash.com/photo-1563822249366-3e5d7d08c69e?auto=format&fit=crop&q=80&w=800',
      alt: language === 'de' ? 'Japanischer Teeladen' : 'Japanese Tea Shop',
      desc: language === 'de' ? 'Eleganter Online-Shop für japanische Tees' : 'Elegant online shop for Japanese teas',
      url: '#teashop',
    },
    {
      id: 'computer',
      title: language === 'de' ? 'PC Support Express' : 'PC Support Express',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      alt: language === 'de' ? 'Computer Support' : 'Computer Support',
      desc: language === 'de' ? 'Professionelle IT-Dienstleistungen' : 'Professional IT services',
      url: '#computer',
    },
    {
      id: 'gardener',
      title: language === 'de' ? 'Grüne Oase Gartenbau' : 'Green Oasis Landscaping',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800',
      alt: language === 'de' ? 'Gartenbau Website' : 'Landscaping Website',
      desc: language === 'de' ? 'Kreative Gartengestaltung und Pflege' : 'Creative garden design and maintenance',
      url: '#gardener',
    },
    {
      id: 'construction',
      title: language === 'de' ? 'Kyoto Teewaren' : 'Kyoto Teaware',
      image: 'https://images.unsplash.com/photo-1547312853-2a4d0f5d1b3d?auto=format&fit=crop&q=80&w=800',
      alt: language === 'de' ? 'Teegeschirr Shop' : 'Teaware Shop',
      desc: language === 'de' ? 'Bauunternehmer' : 'construction',
      url: '#construction',
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
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
              className="group overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 gradient-border"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end text-white p-6">
                    <h3 className="text-xl font-semibold mb-2 text-center">
                      {item.title}
                    </h3>
                    <p className="text-sm mb-4 text-center opacity-90">{item.desc}</p>
                    <a 
                      href={item.url}
                      className="flex items-center gap-2 text-sm bg-primary/80 hover:bg-primary py-2 px-4 rounded-full transition-colors"
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
