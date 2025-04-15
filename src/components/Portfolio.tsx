
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    id: 'psychologist',
    title: 'Dr. Schmidt Psychotherapie',
    image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=800&q=80',
    alt: 'Psychologe Website',
    url: 'https://example-psychologist.com',
  },
  {
    id: 'construction',
    title: 'Bau Meyer GmbH',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    alt: 'Bauunternehmen Website',
    url: 'https://example-construction.com',
  },
  {
    id: 'gardener',
    title: 'Gartenbau Naturfreund',
    image: 'https://images.unsplash.com/photo-1599685315640-4cbebfc5ec3c?auto=format&fit=crop&w=800&q=80',
    alt: 'Gartenbau Website',
    url: 'https://example-gardener.com',
  },
  {
    id: 'engineer',
    title: 'TechSolutions IT',
    image: 'https://images.unsplash.com/photo-1581092335397-9fa73b3e5e78?auto=format&fit=crop&w=800&q=80',
    alt: 'IT Dienstleistungen Website',
    url: 'https://example-engineer.com',
  },
  {
    id: 'shop',
    title: 'Teekultur Japan',
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=800&q=80',
    alt: 'Japanischer Teeladen',
    url: 'https://example-teaware.com',
  },
];

const Portfolio = () => {
  const { t } = useLanguage();

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end text-white p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1 text-sm bg-white/20 py-1 px-3 rounded-full mt-4 hover:bg-white/30 transition-colors"
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

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-lg max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              {t('pricing.title')}
            </h3>
            <p className="text-3xl font-bold text-primary">{t('pricing.price')}</p>
            <p className="text-gray-600 mt-2">{t('pricing.includes')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
