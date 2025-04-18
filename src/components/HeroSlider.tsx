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
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80',
    alt: 'Creative website design',
  },
  {
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1920&q=80',
    alt: 'Professional web development',
  },
  {
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1920&q=80',
    alt: 'Modern business website',
  },
  {
    image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=1920&q=80',
    alt: 'E-commerce website example',
  },
];

const HeroSlider = () => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let typingTimeout;
    let cursorTimeout;

    const typeText = () => {
      setTypedText('');
      setShowButton(false);
      setCursorVisible(true);
      
      const textToType = t('hero.subtitle');
      let i = 0;
      const typeNextChar = () => {
        if (i < textToType.length) {
          setTypedText(textToType.substring(0, i + 1));
          i++;
          // Random typing speed between 20-80ms for irregular effect
          const randomDelay = Math.floor(Math.random() * 60) + 20;
          typingTimeout = setTimeout(typeNextChar, randomDelay);
        } else {
          // Typing complete, blink cursor twice before showing button
          setTimeout(() => {
            setCursorVisible(false);
            cursorTimeout = setTimeout(() => {
              setCursorVisible(true);
              cursorTimeout = setTimeout(() => {
                setCursorVisible(false);
                cursorTimeout = setTimeout(() => {
                  setCursorVisible(true);
                  cursorTimeout = setTimeout(() => {
                    setCursorVisible(false);
                    setShowButton(true);
                  }, 400);
                }, 400);
              }, 400);
            }, 400);
          }, 200);
        }
      };
      
      // Start typing with a short delay
      typingTimeout = setTimeout(typeNextChar, 500);
    };
    
    typeText();
    
    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(cursorTimeout);
    };
  }, [t, language]); // Restart animation when language changes

  const goToSlide = (index) => {
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
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src={slide.image}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full text-white px-4 container mx-auto">
        <div className="max-w-2xl ml-0 mr-auto md:ml-8 lg:ml-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 slide-in text-left">
            <span className="text-primary font-bold">Anton Marshall</span> <span className="text-accent">WebDesign</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-left h-16">
            {typedText}
            <span className={`inline-block w-0.5 h-5 bg-white ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
          </p>
          <div className="text-left">
            {showButton && (
              <Button 
                onClick={handleScroll}
                size={isMobile ? "default" : "lg"}
                className="bg-accent hover:bg-accent/90 text-white px-10 font-medium text-lg slide-in shadow-lg"
              >
                {t('hero.cta')}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Removed */}
      
      {/* Indicators - Removed */}
    </div>
  );
};

export default HeroSlider;
