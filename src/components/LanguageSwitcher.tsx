
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { FlagTriangleRight } from 'lucide-react';

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
      className="flex items-center gap-2"
    >
      <FlagTriangleRight size={16} className={language === 'de' ? 'text-red-500' : 'text-blue-500'} />
      <span className="text-sm font-medium">{language === 'de' ? 'EN' : 'DE'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
