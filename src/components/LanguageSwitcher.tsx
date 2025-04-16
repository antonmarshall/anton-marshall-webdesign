import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === 'de' ? 'en' : 'de';
    setLanguage(newLanguage);
    // Save language preference
    localStorage.setItem('preferredLanguage', newLanguage);
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage} 
      className="flex items-center gap-2 hover:bg-accent/10 focus:outline-none focus:ring-0 transition-all duration-200"
      aria-label={language === 'de' ? 'Switch to English' : 'Zu Deutsch wechseln'}
    >
      <Globe className="h-4 w-4" />
      <span className="transition-opacity duration-200">{language === 'de' ? 'DE' : 'EN'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
