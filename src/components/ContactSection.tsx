import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, MessageSquare, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const { t, language } = useLanguage();

  const handleCalendarClick = () => {
    window.open('https://calendly.com/anton-marshall03/30min', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Options - Reordered */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <button
                onClick={handleCalendarClick}
                className="flex items-center gap-4 w-full text-left"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('contact.schedule')}</h3>
                  <p className="text-gray-600">15 {t('contact.minutes')}</p>
                </div>
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <a 
                href="https://wa.me/491234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('contact.whatsapp')}</h3>
                  <p className="text-gray-600">+49 123 456 7890</p>
                </div>
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <a 
                href="mailto:a.marshall@webdesign.com" 
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">a.marshall@webdesign.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.name')}
                </label>
                <Input id="name" type="text" placeholder={language === 'de' ? "Max Mustermann" : "John Doe"} />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.email')}
                </label>
                <Input id="email" type="email" placeholder={language === 'de' ? "max@beispiel.de" : "john@example.com"} />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.message')}
                </label>
                <Textarea 
                  id="message" 
                  placeholder={language === 'de' ? "Ich möchte mehr über Ihre Dienstleistungen erfahren..." : "I would like to learn more about your services..."} 
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                <Send size={16} className="mr-2" />
                {t('contact.send')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
