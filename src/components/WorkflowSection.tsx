import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PhoneCall, MessageSquare, Code, MonitorCheck, CloudUpload } from 'lucide-react';

const WorkflowSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <PhoneCall size={24} />,
      title: t('steps.consultation.title'),
      subtitle: t('steps.consultation.description'),
      duration: "Tag 1",
      shortName: "Erstgespräch"
    },
    {
      icon: <MessageSquare size={24} />,
      title: t('steps.concept.title'),
      subtitle: t('steps.concept.description'),
      duration: "Tag 2",
      shortName: "Ideen"
    },
    {
      icon: <Code size={24} />,
      title: t('steps.development.title'),
      subtitle: t('steps.development.description'),
      duration: "Tag 3-16",
      shortName: "Design"
    },
    {
      icon: <MonitorCheck size={24} />,
      title: t('steps.review.title'),
      subtitle: t('steps.review.description'),
      duration: "Tag 17-19",
      shortName: "Review"
    },
    {
      icon: <CloudUpload size={24} />,
      title: t('steps.launch.title'),
      subtitle: t('steps.launch.description'),
      duration: "Tag 20-21",
      shortName: "Upload"
    }
  ];

  return (
    <section id="workflow" className="py-20 bg-white">
      <div className="container mx-auto px-4">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
