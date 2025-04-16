
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const { t } = useLanguage();
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-gray-800 p-6 shadow-lg z-50">
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-white/90 text-center sm:text-left">
          {t('legal.cookie.text')}
        </p>
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="default"
            onClick={handleReject}
            className="hover:bg-white/10 border-white/20 text-white"
          >
            {t('legal.cookie.reject')}
          </Button>
          <Button
            variant="default"
            size="default"
            onClick={handleAccept}
            className="bg-white text-black hover:bg-white/90"
          >
            {t('legal.cookie.accept')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
