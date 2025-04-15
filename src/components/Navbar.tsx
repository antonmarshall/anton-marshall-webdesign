
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary hover:text-primary/90 transition-colors">
          Anton Marshall<span className="text-accent"> Webdesign</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            {t('home')}
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            {t('portfolio')}
          </button>
          <button 
            onClick={() => scrollToSection('workflow')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            {t('workflow')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            {t('contact')}
          </button>
          <LanguageSwitcher />
          <Button 
            onClick={() => scrollToSection('contact')}
            size="sm" 
            className="bg-accent hover:bg-accent/90 text-white"
          >
            {t('hero.cta')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-lg">
          <div className="flex flex-col py-4 px-6 space-y-4">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-primary py-2 transition-colors"
            >
              {t('home')}
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-gray-700 hover:text-primary py-2 transition-colors"
            >
              {t('portfolio')}
            </button>
            <button 
              onClick={() => scrollToSection('workflow')} 
              className="text-gray-700 hover:text-primary py-2 transition-colors"
            >
              {t('workflow')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-primary py-2 transition-colors"
            >
              {t('contact')}
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-accent hover:bg-accent/90 text-white"
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
