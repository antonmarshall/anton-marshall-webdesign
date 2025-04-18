import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PhoneCall, MessageSquare, Code, MonitorCheck, CloudUpload, GraduationCap } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const WorkflowSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <PhoneCall size={24} />,
      title: "Kostenloses Erstgespräch",
      subtitle: "Bedarf klären",
      duration: "2 Tage"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Ideen-Gespräch",
      subtitle: "Gemeinsam 30 Min. brainstormen",
      duration: "2 Tage"
    },
    {
      icon: <Code size={24} />,
      title: "Design & Umsetzung",
      subtitle: "Entwurf fertigstellen",
      duration: "14 Tage"
    },
    {
      icon: <MonitorCheck size={24} />,
      title: "Review & Feedback",
      subtitle: "Live-Demo & Korrekturen",
      duration: "3 Tage"
    },
    {
      icon: <CloudUpload size={24} />,
      title: "Fertigstellung & Upload",
      subtitle: "Online schalten",
      duration: "3 Tage"
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

        {/* Timeline Workflow */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line - visible on mobile and desktop */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary transform -translate-x-1/2 md:hidden"></div>
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-primary transform -translate-y-1/2 hidden md:block"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="group relative h-full">
                  <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 relative z-10 h-full flex flex-col">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-center mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-center text-sm flex-1">{step.subtitle}</p>
                    <p className="text-primary font-medium text-center mt-2">{step.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Numbers */}
          <div className="mt-8 flex justify-between px-4 md:px-0">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white mb-2">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <p className="text-xs text-gray-500">{step.duration}</p>
              </div>
            ))}
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
