import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import VideoSection from './VideoSection';

const PortfolioDetail = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { id } = useParams();

  // This would typically come from a data source or API
  const portfolioItems = {
    'tischler': {
      title: {
        de: 'Tischlerei Website',
        en: 'Carpentry Website'
      },
      description: {
        de: 'Eine professionelle Website für eine Tischlerei mit Portfolio-Galerie und Kontaktformular.',
        en: 'A professional website for a carpentry business with portfolio gallery and contact form.'
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
    'steuer': {
      title: {
        de: 'Steuerberatung Website',
        en: 'Tax Consulting Website'
      },
      description: {
        de: 'Eine moderne Website für Steuerberatung mit Service-Angeboten und Online-Buchung.',
        en: 'A modern website for tax consulting with service offerings and online booking.'
      },
      features: {
        de: [
          'Responsive Design',
          'Service-Angebote',
          'Online-Buchung',
          'Kundendashboard'
        ],
        en: [
          'Responsive Design',
          'Service Offerings',
          'Online Booking',
          'Customer Dashboard'
        ]
      },
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    'garten': {
      title: {
        de: 'Gärtnerei Website',
        en: 'Garden Center Website'
      },
      description: {
        de: 'Eine frische Website für eine Gärtnerei mit Produktkatalog und saisonalen Angeboten.',
        en: 'A fresh website for a garden center with product catalog and seasonal offers.'
      },
      features: {
        de: [
          'Responsive Design',
          'Produktkatalog',
          'Saisonale Angebote',
          'Newsletter-Anmeldung'
        ],
        en: [
          'Responsive Design',
          'Product Catalog',
          'Seasonal Offers',
          'Newsletter Signup'
        ]
      },
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    'caffe': {
      title: {
        de: 'Café Website',
        en: 'Café Website'
      },
      description: {
        de: 'Eine gemütliche Website für ein Café mit Speisekarte und Reservierungssystem.',
        en: 'A cozy website for a café with menu and reservation system.'
      },
      features: {
        de: [
          'Responsive Design',
          'Speisekarte',
          'Online-Reservierung',
          'Galerie'
        ],
        en: [
          'Responsive Design',
          'Menu',
          'Online Reservation',
          'Gallery'
        ]
      },
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    'kunsttherapie': {
      title: {
        de: 'Kunsttherapie Website',
        en: 'Art Therapy Website'
      },
      description: {
        de: 'Eine kreative Website für Kunsttherapie mit Galerie und Buchungsmöglichkeit.',
        en: 'A creative website for art therapy with gallery and booking option.'
      },
      features: {
        de: [
          'Responsive Design',
          'Galerie',
          'Terminbuchung',
          'Kontaktformular'
        ],
        en: [
          'Responsive Design',
          'Gallery',
          'Appointment Booking',
          'Contact Form'
        ]
      },
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    'zahnarzt': {
      title: {
        de: 'Zahnarzt Website',
        en: 'Dental Practice Website'
      },
      description: {
        de: 'Eine professionelle Website für eine Zahnarztpraxis mit Terminbuchung und Informationsseiten.',
        en: 'A professional website for a dental practice with appointment booking and information pages.'
      },
      features: {
        de: [
          'Responsive Design',
          'Terminbuchung',
          'Informationsseiten',
          'Kontaktformular'
        ],
        en: [
          'Responsive Design',
          'Appointment Booking',
          'Information Pages',
          'Contact Form'
        ]
      },
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
    }
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

          <div className="mb-12">
            <VideoSection />
          </div>

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