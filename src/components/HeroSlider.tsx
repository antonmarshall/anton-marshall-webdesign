
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80',
    alt: 'Modern website design on laptop',
  },
  {
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&q=80',
    alt: 'Clean architecture website example',
  },
  {
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=1920&q=80',
    alt: 'Creative website design',
  },
  {
    image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=1920&q=80',
    alt: 'Modern business website',
  },
  {
    image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=1920&q=80',
    alt: 'E-commerce website example',
  },
];

const HeroSlider = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

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
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 slide-in">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl slide-in">
          {t('hero.subtitle')}
        </p>
        <Button 
          onClick={handleScroll}
          className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg slide-in"
        >
          {t('hero.cta')}
        </Button>
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
