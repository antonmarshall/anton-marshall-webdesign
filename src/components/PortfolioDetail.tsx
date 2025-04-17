import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PortfolioDetail = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { id } = useParams();

  // This would typically come from a data source or API
  const portfolioItems = {
    'carpentry': {
      title: {
        de: 'Tischlerei Website',
        en: 'Carpentry Website'
      },
      description: {
        de: 'Eine moderne Website für eine lokale Tischlerei mit Portfolio-Galerie und Kontaktformular.',
        en: 'A modern website for a local carpentry business with portfolio gallery and contact form.'
      },
      features: {
        de: [
          'Responsive Design',
          'Portfolio Galerie',
          'Kontaktformular',
          'SEO optimiert'
        ],
        en: [
          'Responsive Design',
          'Portfolio Gallery',
          'Contact Form',
          'SEO optimized'
        ]
      },
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    // Add more portfolio items here
  };

  const item = portfolioItems[id as keyof typeof portfolioItems];

  if (!item) {
    return (
      <section className="py-20 bg-[#f8f2f1] dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <button
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{language === 'de' ? 'Zurück' : 'Back'}</span>
          </button>
          <h1 className="text-4xl font-bold mb-8 text-primary">
            {language === 'de' ? 'Projekt nicht gefunden' : 'Project not found'}
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#f8f2f1] dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{language === 'de' ? 'Zurück' : 'Back'}</span>
        </button>

        <h1 className="text-4xl font-bold mb-8 text-primary">
          {item.title[language as keyof typeof item.title]}
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-8">
            {item.description[language as keyof typeof item.description]}
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            {language === 'de' ? 'Funktionen' : 'Features'}
          </h2>
          <ul className="list-disc pl-6 mb-8">
            {item.features[language as keyof typeof item.features].map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            {language === 'de' ? 'Verwendete Technologien' : 'Technologies Used'}
          </h2>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDetail; 