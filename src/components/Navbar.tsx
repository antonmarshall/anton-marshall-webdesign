import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const scrollTimeoutRef = useRef<number | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Set initial scroll state
  useEffect(() => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    }
  }, []);

  useEffect(() => {
    if (!isHomePage) return;
    
    const handleScroll = () => {
      // Update scroll state immediately for better responsiveness
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 0);
      lastScrollY.current = currentScrollY;

      // Update active section based on scroll position
      const sections = ['home', 'workflow', 'about', 'portfolio', 'strengths', 'price', 'contact'];
      let foundActive = false;
      
      // Check sections in reverse order to prioritize the one most in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust the threshold to make it more accurate
          if (rect.top <= 100) {
            setActiveSection(section);
            foundActive = true;
            break;
          }
        }
      }
      
      // If no section is in view, set the first one as active
      if (!foundActive && window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    // Use requestAnimationFrame for smoother performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [isHomePage]);

  const navigateToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    
    if (!isHomePage) {
      navigate('/');
      // Use a more reliable way to wait for navigation
      const checkElement = setInterval(() => {
        const element = document.getElementById(id);
        if (element) {
          clearInterval(checkElement);
          // Add offset to prevent content from being hidden under the navbar
          const offsetPosition = element.offsetTop - 80;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
      
      // Clear interval after 2 seconds to prevent infinite checking
      setTimeout(() => clearInterval(checkElement), 2000);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      // Add offset to prevent content from being hidden under the navbar
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const getNavItemClass = (section: string) => {
    return `transition-colors duration-300 px-3 py-2 rounded-md outline-none ${
      isHomePage && activeSection === section 
      ? 'bg-primary text-white font-medium'
      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary dark:hover:text-primary'
    }`;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <Logo />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={() => navigateToSection('home')} 
            className={getNavItemClass('home')}
          >
            {t('home')}
          </button>
          <button 
            onClick={() => navigateToSection('workflow')} 
            className={getNavItemClass('workflow')}
          >
            {t('workflow')}
          </button>
          <button 
            onClick={() => navigateToSection('about')} 
            className={getNavItemClass('about')}
          >
            {t('about.menu')}
          </button>
          <button 
            onClick={() => navigateToSection('portfolio')} 
            className={getNavItemClass('portfolio')}
          >
            {t('portfolio')}
          </button>
          <button 
            onClick={() => navigateToSection('strengths')} 
            className={getNavItemClass('strengths')}
          >
            {t('about.title')}
          </button>
          <button 
            onClick={() => navigateToSection('price')} 
            className={getNavItemClass('price')}
          >
            {t('price')}
          </button>
          <button 
            onClick={() => navigateToSection('contact')} 
            className={getNavItemClass('contact')}
          >
            {t('contact')}
          </button>
          <LanguageSwitcher />
          <Button 
            onClick={() => navigateToSection('contact')}
            size="sm" 
            className="bg-primary hover:bg-primary/90 text-white"
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
            className="text-gray-700 dark:text-gray-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden bg-white dark:bg-gray-900 w-full shadow-lg absolute top-full left-0 right-0"
        >
          <div className="flex flex-col py-4 px-6 space-y-4">
            <button 
              onClick={() => navigateToSection('home')} 
              className={getNavItemClass('home')}
            >
              {t('home')}
            </button>
            <button 
              onClick={() => navigateToSection('workflow')} 
              className={getNavItemClass('workflow')}
            >
              {t('workflow')}
            </button>
            <button 
              onClick={() => navigateToSection('about')} 
              className={getNavItemClass('about')}
            >
              {t('about.menu')}
            </button>
            <button 
              onClick={() => navigateToSection('portfolio')} 
              className={getNavItemClass('portfolio')}
            >
              {t('portfolio')}
            </button>
            <button 
              onClick={() => navigateToSection('strengths')} 
              className={getNavItemClass('strengths')}
            >
              {t('about.title')}
            </button>
            <button 
              onClick={() => navigateToSection('price')} 
              className={getNavItemClass('price')}
            >
              {t('price')}
            </button>
            <button 
              onClick={() => navigateToSection('contact')} 
              className={getNavItemClass('contact')}
            >
              {t('contact')}
            </button>
            <Button 
              onClick={() => navigateToSection('contact')}
              className="w-full bg-primary hover:bg-primary/90 text-white"
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
