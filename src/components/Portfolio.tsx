import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Portfolio Item 1 - Bauunternehmen */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gray-100 relative">
              <img
                src="/images/bau_unternehmer.png"
                alt={t('portfolio.construction')}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {t('portfolio.construction')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('portfolio.construction.desc')}
              </p>
              <Button variant="outline" className="w-full">
                {t('portfolio.view')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Portfolio Item 2 - Computer Service */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gray-100 relative">
              <img
                src="/images/computer.png"
                alt={t('portfolio.computer')}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {t('portfolio.computer')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('portfolio.computer.desc')}
              </p>
              <Button variant="outline" className="w-full">
                {t('portfolio.view')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Portfolio Item 3 - Gärtnerei */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gray-100 relative">
              <img
                src="/images/gärtner.png"
                alt={t('portfolio.garden')}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {t('portfolio.garden')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('portfolio.garden.desc')}
              </p>
              <Button variant="outline" className="w-full">
                {t('portfolio.view')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Portfolio Item 4 - Japanischer Teeladen */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gray-100 relative">
              <img
                src="/images/japanischer_teeladen.png"
                alt={t('portfolio.tea')}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {t('portfolio.tea')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('portfolio.tea.desc')}
              </p>
              <Button variant="outline" className="w-full">
                {t('portfolio.view')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Portfolio Item 5 - Psychotherapie */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gray-100 relative">
              <img
                src="/images/psychotherapie.png"
                alt={t('portfolio.psycho')}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {t('portfolio.psycho')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('portfolio.psycho.desc')}
              </p>
              <Button variant="outline" className="w-full">
                {t('portfolio.view')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Portfolio Item 6 - Fotografie Studio */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gray-100 relative">
              <img
                src="/images/yoga_knete.png"
                alt={t('portfolio.photo')}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {t('portfolio.photo')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('portfolio.photo.desc')}
              </p>
              <Button variant="outline" className="w-full">
                {t('portfolio.view')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
