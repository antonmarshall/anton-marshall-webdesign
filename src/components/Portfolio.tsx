import React, { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const handleMouseEnter = (itemId: string) => {
    setHoveredCard(itemId);
    const video = videoRefs.current[itemId];
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  const handleMouseLeave = (itemId: string) => {
    setHoveredCard(null);
    const video = videoRefs.current[itemId];
    if (video) {
      video.pause();
      // Sanfter Übergang zum Anfang
      const fadeOut = setInterval(() => {
        if (video.currentTime > 0) {
          video.currentTime = Math.max(0, video.currentTime - 0.1);
        } else {
          clearInterval(fadeOut);
        }
      }, 50);
    }
  };

  const handleVideoEnded = (itemId: string) => {
    const video = videoRefs.current[itemId];
    if (video) {
      video.currentTime = 0;
    }
  };

  const portfolioItems = [
    {
      id: 'construction',
      title: t('portfolio.construction'),
      desc: t('portfolio.construction.desc'),
      video: `${import.meta.env.BASE_URL}videos/recording_tischler_2025-04-24T19-59-38-096Z.mp4`
    },
    {
      id: 'computer',
      title: t('portfolio.computer'),
      desc: t('portfolio.computer.desc'),
      video: `${import.meta.env.BASE_URL}videos/recording_tischler_2025-04-24T19-59-38-096Z.mp4`
    },
    {
      id: 'garden',
      title: t('portfolio.garden'),
      desc: t('portfolio.garden.desc'),
      video: `${import.meta.env.BASE_URL}videos/recording_tischler_2025-04-24T19-59-38-096Z.mp4`
    },
    {
      id: 'tea',
      title: t('portfolio.tea'),
      desc: t('portfolio.tea.desc'),
      video: `${import.meta.env.BASE_URL}videos/recording_tischler_2025-04-24T19-59-38-096Z.mp4`
    },
    {
      id: 'psycho',
      title: t('portfolio.psycho'),
      desc: t('portfolio.psycho.desc'),
      video: `${import.meta.env.BASE_URL}videos/recording_tischler_2025-04-24T19-59-38-096Z.mp4`
    },
    {
      id: 'photo',
      title: t('portfolio.photo'),
      desc: t('portfolio.photo.desc'),
      video: `${import.meta.env.BASE_URL}videos/recording_tischler_2025-04-24T19-59-38-096Z.mp4`
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
                  onEnded={() => handleVideoEnded(item.id)}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="lg"
                    className="bg-white/90 text-gray-900 hover:bg-white/80 backdrop-blur-sm"
                    onClick={() => navigate(`/portfolio/${item.id}`)}
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
