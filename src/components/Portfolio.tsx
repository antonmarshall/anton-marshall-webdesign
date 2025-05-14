import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Vorladen der Videos beim Mounten der Komponente
  useEffect(() => {
    portfolioItems.forEach(item => {
      const video = videoRefs.current[item.id];
      if (video) {
        video.load();
        // Setze die Startzeit auf 1 Sekunde
        video.currentTime = 1;
        // Pausiere das Video sofort
        video.pause();
      }
    });
  }, []);

  const handleMouseEnter = (itemId: string) => {
    setHoveredCard(itemId);
    const video = videoRefs.current[itemId];
    if (video) {
      video.currentTime = 0;
      video.play().catch(error => {
        console.log('Video playback failed:', error);
      });
    }
  };

  const handleMouseLeave = (itemId: string) => {
    setHoveredCard(null);
    const video = videoRefs.current[itemId];
    if (video) {
      // Sofort pausieren, aber mit sanftem Übergang zum Anfang
      video.pause();
      video.style.transition = 'opacity 0.2s ease-out';
      video.style.opacity = '0.7';
      
      // Kurze Verzögerung für den Übergang
      requestAnimationFrame(() => {
        video.currentTime = 0;
        video.style.opacity = '1';
      });
    }
  };

  const handleVideoEnded = (itemId: string) => {
    const video = videoRefs.current[itemId];
    if (video) {
      if (hoveredCard === itemId) {
        // Wenn noch gehovered wird, direkt neu starten
        video.currentTime = 0;
        video.play().catch(error => {
          console.log('Video playback failed:', error);
        });
      } else {
        // Sanfter Übergang zum Anfang
        video.style.transition = 'opacity 0.3s ease-in-out';
        video.style.opacity = '0.3';
        
        setTimeout(() => {
          video.currentTime = 0;
          video.style.opacity = '1';
        }, 300);
      }
    }
  };

  const portfolioItems = [
    {
      id: 'tischler',
      title: t('portfolio.tischler'),
      desc: t('portfolio.tischler.desc'),
      video: `${import.meta.env.BASE_URL}videos/tischler.mp4`,
      url: 'https://antonmarshall.github.io/luebeck-tischler-handwerk/'
    },
    {
      id: 'steuer',
      title: t('portfolio.steuer'),
      desc: t('portfolio.steuer.desc'),
      video: `${import.meta.env.BASE_URL}videos/steuer.mp4`,
      url: 'https://antonmarshall.github.io/luebeck-steuer-digital-klar/'
    },
    {
      id: 'garten',
      title: t('portfolio.garten'),
      desc: t('portfolio.garten.desc'),
      video: `${import.meta.env.BASE_URL}videos/garten.mp4`,
      url: 'https://antonmarshall.github.io/altona-garten-zauber/'
    },
    {
      id: 'caffe',
      title: t('portfolio.caffe'),
      desc: t('portfolio.caffe.desc'),
      video: `${import.meta.env.BASE_URL}videos/caffe.mp4`,
      url: 'https://antonmarshall.github.io/altstadt-cafe-website/'
    },
    {
      id: 'kunsttherapie',
      title: t('portfolio.kunsttherapie'),
      desc: t('portfolio.kunsttherapie.desc'),
      video: `${import.meta.env.BASE_URL}videos/kunsttherapie.mp4`,
      url: 'https://antonmarshall.github.io/webseite-andrea-wennecke/'
    },
    {
      id: 'zahnarzt',
      title: t('portfolio.zahnarzt'),
      desc: t('portfolio.zahnarzt.desc'),
      video: `${import.meta.env.BASE_URL}videos/zahnarzt.mp4`,
      url: 'https://antonmarshall.github.io/barmbek-smile-design/'
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
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group relative"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
            >
              <div className="relative aspect-video overflow-hidden">
                <video
                  ref={el => videoRefs.current[item.id] = el}
                  src={item.video}
                  poster={item.video}
                  muted
                  playsInline
                  preload="auto"
                  onEnded={() => handleVideoEnded(item.id)}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="lg"
                    className="bg-white/90 text-gray-900 hover:bg-white/80 backdrop-blur-sm"
                    onClick={() => window.open(item.url, '_blank')}
                  >
                    {t('portfolio.view')} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
