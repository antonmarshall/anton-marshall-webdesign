
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage} 
      className="flex items-center gap-2 hover:bg-accent/10 focus:outline-none focus:ring-0"
      tabIndex={-1} // Prevents focusing
    >
      <Globe className="h-4 w-4" />
      {language === 'de' ? 'DE' : 'EN'}
    </Button>
  );
};

export default LanguageSwitcher;
