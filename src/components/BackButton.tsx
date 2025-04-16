
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BackButton = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={() => navigate('/')}
      className="mb-6 mt-2"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      {t('back.to.home')}
    </Button>
  );
};

export default BackButton;
