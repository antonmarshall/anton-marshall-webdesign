import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold mb-4">Anton Marshall WebDesign</div>
            <p className="text-gray-400 mb-4">© {currentYear} - {t('footer.rights')}</p>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">{t('navigation')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  {t('home')}
                </a>
              </li>
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
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
            <ul className="space-y-4">
              <li className="text-lg font-semibold mb-2">{t('contact.schedule')}</li>
              <li className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                <Phone size={20} />
                <span>+49 123 456 7890</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                <Mail size={20} />
                <a href="mailto:a.marshall@webdesign.com" className="hover:text-white transition-colors">
                  a.marshall@webdesign.com
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">{t('legal')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="/impressum" className="text-gray-400 hover:text-white transition-colors">
                  {t('legal.notice')}
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
                  {t('legal.privacy')}
                </a>
              </li>
              <li>
                <a href="/agb" className="text-gray-400 hover:text-white transition-colors">
                  {t('legal.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
