import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const { t } = useLanguage();
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      // Small delay to ensure smooth animation
      setTimeout(() => setShowConsent(true), 1000);
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
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800 p-4 shadow-lg z-50 transition-transform duration-300 ease-in-out ${
        showConsent ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {t('legal.cookie.text')}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReject}
            className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {t('legal.cookie.reject')}
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={handleAccept}
            className="bg-primary hover:bg-primary/90"
          >
            {t('legal.cookie.accept')}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReject}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
