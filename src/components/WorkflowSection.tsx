import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PhoneCall, Search, Code, MonitorCheck, CloudUpload, GraduationCap } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const WorkflowSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <PhoneCall size={24} />,
      title: "Kostenloses Erstgespräch",
      subtitle: "30 Minuten zur groben Bedarfsklärung"
    },
    {
      icon: <Search size={24} />,
      title: "Detaillierter Discovery-Call",
      subtitle: "30 Minuten zur präzisen Festlegung von Scope & Zielen"
    },
    {
      icon: <Code size={24} />,
      title: "Design & Programmierung",
      subtitle: "Wireframes, visuelles Design & technische Umsetzung"
    },
    {
      icon: <MonitorCheck size={24} />,
      title: "Review & Feedback",
      subtitle: "Live-Demo & Änderungswünsche aufnehmen"
    },
    {
      icon: <CloudUpload size={24} />,
      title: "Finalisierung & Upload",
      subtitle: "Letzte Anpassungen, Liveschaltung & Übergabe"
    }
  ];

  return (
    <section id="workflow" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Personal Introduction */}
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

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {t('workflow.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('workflow.subtitle')}
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-center mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center text-sm">{step.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Gesamtdauer: 3 Wochen</h3>
            
            {/* Timeline Bar */}
            <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden mb-8">
              <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{ width: '33.33%' }}></div>
              <div className="absolute top-0 left-1/3 h-full bg-primary/80 rounded-full" style={{ width: '33.33%' }}></div>
              <div className="absolute top-0 left-2/3 h-full bg-primary/60 rounded-full" style={{ width: '33.33%' }}></div>
            </div>
            
            {/* Timeline Steps */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-2">
                  <span className="font-bold">1</span>
                </div>
                <p className="text-sm font-medium">Erstgespräch</p>
                <p className="text-xs text-gray-500">Woche 1</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-2">
                  <span className="font-bold">2</span>
                </div>
                <p className="text-sm font-medium">Discovery-Call & Planung</p>
                <p className="text-xs text-gray-500">Woche 2</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-2">
                  <span className="font-bold">3</span>
                </div>
                <p className="text-sm font-medium">Umsetzung & Finalisierung</p>
                <p className="text-xs text-gray-500">Woche 3</p>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-900">
              {t('about.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 font-normal text-sm md:text-base">
              {t('about.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
