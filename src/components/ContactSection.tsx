
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Calendar, Send } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gray-50">
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
          {/* Contact Options */}
          <div className="space-y-8">
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
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('contact.schedule')}</h3>
                  <p className="text-gray-600">15 {t('contact.schedule')} (Google Calendar)</p>
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
                <Input id="name" type="text" placeholder="Max Mustermann" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.email')}
                </label>
                <Input id="email" type="email" placeholder="max@example.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.message')}
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Ich möchte mehr über Ihre Dienstleistungen erfahren..." 
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
