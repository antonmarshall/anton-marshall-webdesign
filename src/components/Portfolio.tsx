
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
  {
    id: 'teeshop',
    title: 'Teekultur Japan',
    image: '/lovable-uploads/ba2b9903-e0ca-4b32-a32e-d600eb99f44a.png',
    alt: 'Japanischer Teeladen',
    desc: 'Eleganter Online-Shop für japanische Tees',
    url: 'https://example-teaware.com',
  },
  {
    id: 'matcha',
    title: 'Matcha Paradise',
    image: '/lovable-uploads/ba2b9903-e0ca-4b32-a32e-d600eb99f44a.png',
    alt: 'Matcha Cafe',
    desc: 'Traditionelle Matcha-Erlebnisse und Zubehör',
    url: 'https://example-matcha.com',
  },
  {
    id: 'teahouse',
    title: 'Sakura Teehaus',
    image: '/lovable-uploads/ba2b9903-e0ca-4b32-a32e-d600eb99f44a.png',
    alt: 'Japanisches Teehaus',
    desc: 'Authentische Teezeremonie-Webpräsenz',
    url: 'https://example-teahouse.com',
  },
  {
    id: 'sencha',
    title: 'Sencha Select',
    image: '/lovable-uploads/ba2b9903-e0ca-4b32-a32e-d600eb99f44a.png',
    alt: 'Grüner Tee Shop',
    desc: 'Spezialist für japanischen Grüntee',
    url: 'https://example-sencha.com',
  },
  {
    id: 'tearoom',
    title: 'Zen Teatime',
    image: '/lovable-uploads/ba2b9903-e0ca-4b32-a32e-d600eb99f44a.png',
    alt: 'Teeraum',
    desc: 'Modernes japanisches Tee-Erlebnis online',
    url: 'https://example-tearoom.com',
  },
  {
    id: 'teaware',
    title: 'Kyoto Teewaren',
    image: '/lovable-uploads/ba2b9903-e0ca-4b32-a32e-d600eb99f44a.png',
    alt: 'Teegeschirr Shop',
    desc: 'Premium japanisches Teegeschirr',
    url: 'https://example-kyoto.com',
  }
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
            <Card key={item.id} className="group overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end text-white p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm mb-4 opacity-90">{item.desc}</p>
                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-sm bg-white/20 py-2 px-4 rounded-full mt-2 hover:bg-white/30 transition-colors"
                    >
                      <span>{t('portfolio.view')}</span>
                      <ExternalLink size={16} />
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
