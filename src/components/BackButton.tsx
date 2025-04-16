import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BackButton = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  
  return (
    <Button 
      variant="outline" 
      size="default" 
      onClick={() => navigate('/')}
      className="flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      <ArrowLeft className="h-4 w-4" />
      {language === 'de' ? 'Zurück zur Startseite' : 'Back to Home'}
    </Button>
  );
};

export default BackButton;
