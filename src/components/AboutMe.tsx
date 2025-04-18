import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-12 md:mb-20 flex flex-col md:flex-row items-center gap-6 md:gap-12 rounded-lg p-4">
          <Avatar className="w-32 h-32 md:w-48 md:h-48 border-4 border-white shadow-lg">
            <AvatarImage src={`${import.meta.env.BASE_URL}images/profil_bild.png`} alt="Anton Marshall" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 flex items-center justify-center md:justify-start gap-2">
              Anton Marshall
              <GraduationCap className="text-accent" size={24} />
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {t('about.personal')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 