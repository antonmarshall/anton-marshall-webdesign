
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold mb-2">Webseiten-Freund</div>
            <p className="text-gray-400">© {currentYear} - {t('footer.rights')}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-3">{t('home')}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">
                    {t('portfolio')}
                  </a>
                </li>
                <li>
                  <a href="#workflow" className="text-gray-400 hover:text-white transition-colors">
                    {t('workflow')}
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-3">{t('contact')}</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">WhatsApp: +49 123 456 7890</li>
                <li>
                  <a href="mailto:info@webseiten-freund.de" className="text-gray-400 hover:text-white transition-colors">
                    info@webseiten-freund.de
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
