
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

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
      <span className="text-sm font-medium flex items-center gap-1">
        {language === 'de' ? (
          <>
            <span className="text-xl">🇩🇪</span>
            DE
          </>
        ) : (
          <>
            <span className="text-xl">🇬🇧</span>
            EN
          </>
        )}
      </span>
    </Button>
  );
};

export default LanguageSwitcher;
