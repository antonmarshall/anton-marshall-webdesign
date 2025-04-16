
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const { t } = useLanguage();
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 text-center sm:text-left">
          {t('legal.cookie.text')}
        </p>
        <div className="flex gap-4">
          <Button
            variant="default"
            size="sm"
            onClick={handleAccept}
          >
            {t('legal.cookie.accept')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
