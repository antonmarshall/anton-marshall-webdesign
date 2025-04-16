
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80',
    alt: 'Modern website design on laptop',
  },
  {
    image: `${import.meta.env.BASE_URL}images/hero_image_skizze.png`,
    alt: 'skizze einer webseite',
  },
  {
    image: `${import.meta.env.BASE_URL}images/different_websites_presentation.png`,
    alt: 'Creative website design',
  },
  {
    image: `${import.meta.env.BASE_URL}images/yoga_knete.png`,
    alt: 'yoga webseite in Knete',
  },
  {
    image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=1920&q=80',
    alt: 'E-commerce website example',
  },
];

const HeroSlider = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000); 

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handleScroll = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="home" className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/60 z-10" />
          <img
            src={slide.image}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full text-white px-4 container mx-auto">
        <div className="max-w-2xl bg-gradient-to-br from-[#1E2435] to-[#2D3446] shadow-2xl rounded-xl px-8 py-10 ml-0 mr-auto md:ml-8 lg:ml-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 slide-in text-left">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 slide-in text-left">
            {t('hero.subtitle')}
          </p>
          <div className="text-left">
            <Button 
              onClick={handleScroll}
              size={isMobile ? "default" : "lg"}
              className="bg-accent hover:bg-accent/90 text-white px-10 font-medium text-lg slide-in shadow-lg"
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 p-2 rounded-full text-white transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
