
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    id: 'psychologist',
    image: 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=800&q=80',
    alt: 'Psychologist website',
  },
  {
    id: 'construction',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    alt: 'Construction company website',
  },
  {
    id: 'gardener',
    image: 'https://images.unsplash.com/photo-1599685315640-4cbebfc5ec3c?auto=format&fit=crop&w=800&q=80',
    alt: 'Gardener website',
  },
  {
    id: 'engineer',
    image: 'https://images.unsplash.com/photo-1581092335397-9fa73b3e5e78?auto=format&fit=crop&w=800&q=80',
    alt: 'IT engineer website',
  },
  {
    id: 'shop',
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&w=800&q=80',
    alt: 'Japanese teaware shop',
  },
];

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
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
            <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-0">
                <div className="relative group">
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {t(`portfolio.${item.id}`)}
                    </h3>
                    <a href="#" className="flex items-center gap-1 text-sm bg-white/20 py-1 px-3 rounded-full mt-4 hover:bg-white/30 transition-colors">
                      <span>{t('portfolio.view')}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-center text-gray-900">
            {t('pricing.title')}
          </h3>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">{t('pricing.price')}</p>
            <p className="text-gray-600 mt-2">{t('pricing.includes')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
