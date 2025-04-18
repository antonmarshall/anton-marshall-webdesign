import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Code, CheckCircle } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-12 md:mb-20 flex flex-col md:flex-row items-start gap-8 md:gap-12 rounded-lg p-6 md:p-8 bg-white shadow-md">
          {/* Left column with image */}
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-md opacity-70"></div>
              <Avatar className="w-32 h-32 md:w-48 md:h-48 border-4 border-white shadow-lg relative z-10">
                <AvatarImage src={`${import.meta.env.BASE_URL}images/profil_bild.png`} alt="Anton Marshall" />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          {/* Right column with text content */}
          <div className="w-full md:w-2/3 flex flex-col">
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary flex items-center">
                <span className="mr-2">{t('about.menu')}</span>
                <GraduationCap className="text-accent" size={24} />
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {t('about.personal')}
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-primary flex items-center">
                <span className="mr-2">{t('about.title')}</span>
                <Code className="text-accent" size={24} />
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {t('about.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 