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
          {/* Portfolio Item 1 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gray-100 relative">
              <img
                src="/portfolio/project1.jpg"
                alt="Project 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {t('portfolio.project1.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('portfolio.project1.desc')}
              </p>
              <Button variant="outline" className="w-full">
                {t('portfolio.viewProject')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gray-100 relative">
              <img
                src="/portfolio/project2.jpg"
                alt="Project 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {t('portfolio.project2.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('portfolio.project2.desc')}
              </p>
              <Button variant="outline" className="w-full">
                {t('portfolio.viewProject')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video bg-gray-100 relative">
              <img
                src="/portfolio/project3.jpg"
                alt="Project 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {t('portfolio.project3.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('portfolio.project3.desc')}
              </p>
              <Button variant="outline" className="w-full">
                {t('portfolio.viewProject')}
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
