import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: t('portfolio.project1.title'),
      description: t('portfolio.project1.description'),
      image: `${import.meta.env.BASE_URL}images/portfolio1.jpg`,
      video: `${import.meta.env.BASE_URL}videos/temp.mp4`
    },
    {
      id: 2,
      title: t('portfolio.project2.title'),
      description: t('portfolio.project2.description'),
      image: `${import.meta.env.BASE_URL}images/portfolio2.jpg`,
      video: `${import.meta.env.BASE_URL}videos/temp.mp4`
    },
    {
      id: 3,
      title: t('portfolio.project3.title'),
      description: t('portfolio.project3.description'),
      image: `${import.meta.env.BASE_URL}images/portfolio3.jpg`,
      video: `${import.meta.env.BASE_URL}videos/temp.mp4`
    },
    {
      id: 4,
      title: t('portfolio.project4.title'),
      description: t('portfolio.project4.description'),
      image: `${import.meta.env.BASE_URL}images/portfolio4.jpg`,
      video: `${import.meta.env.BASE_URL}videos/temp.mp4`
    },
    {
      id: 5,
      title: t('portfolio.project5.title'),
      description: t('portfolio.project5.description'),
      image: `${import.meta.env.BASE_URL}images/portfolio5.jpg`,
      video: `${import.meta.env.BASE_URL}videos/temp.mp4`
    },
    {
      id: 6,
      title: t('portfolio.project6.title'),
      description: t('portfolio.project6.description'),
      image: `${import.meta.env.BASE_URL}images/portfolio6.jpg`,
      video: `${import.meta.env.BASE_URL}videos/temp.mp4`
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{t('portfolio.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group relative"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative aspect-video overflow-hidden">
                {hoveredCard === project.id ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                    onClick={() => navigate(`/portfolio/${project.id}`)}
                  >
                    {t('portfolio.view')} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
