
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PhoneCall, Code, MessageSquare, CheckCircle, GraduationCap } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const WorkflowSection = () => {
  const { t } = useLanguage();

  return (
    <section id="workflow" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Personal Introduction */}
        <div className="max-w-4xl mx-auto mb-20 flex flex-col md:flex-row items-center gap-12 bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-lg">
          <Avatar className="w-40 h-40 border-4 border-white shadow-lg">
            <AvatarImage src="/lovable-uploads/ba2b9903-e0ca-4b32-a32e-d600eb99f44a.png" alt="Anton Marshall" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              Anton Marshall
              <GraduationCap className="text-accent" size={24} />
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Mit 22 Jahren studiere ich Künstliche Intelligenz in Groningen und bringe technisches Know-how mit kreativem Design zusammen. Ich liebe es, mit Menschen zu brainstormen und ihre Vision zu verstehen. Jedes Projekt ist für mich eine spannende Reise, bei der ich mit hohen Ansprüchen Ihre digitale Präsenz gestalte.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {t('workflow.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('workflow.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-accent/40 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {t('workflow.step1.title')}
                </h3>
                <p className="text-gray-600">
                  {t('workflow.step1.desc')}
                </p>
              </div>
              <div className="md:w-0 relative flex justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white z-10 shadow-lg">
                  <PhoneCall size={20} />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                {/* Empty for layout */}
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row md:items-center pt-12 md:pt-24">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 order-1 md:order-3 md:text-left">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {t('workflow.step2.title')}
                </h3>
                <p className="text-gray-600">
                  {t('workflow.step2.desc')}
                </p>
              </div>
              <div className="md:w-0 relative flex justify-center order-2 md:order-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white z-10 shadow-lg">
                  <Code size={20} />
                </div>
              </div>
              <div className="md:w-1/2 md:pr-12 order-3 md:order-1">
                {/* Empty for layout */}
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row md:items-center pt-12 md:pt-24">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {t('workflow.step3.title')}
                </h3>
                <p className="text-gray-600">
                  {t('workflow.step3.desc')}
                </p>
              </div>
              <div className="md:w-0 relative flex justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white z-10 shadow-lg">
                  <MessageSquare size={20} />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                {/* Empty for layout */}
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row md:items-center pt-12 md:pt-24">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 order-1 md:order-3 md:text-left">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {t('workflow.step4.title')}
                </h3>
                <p className="text-gray-600">
                  {t('workflow.step4.desc')}
                </p>
              </div>
              <div className="md:w-0 relative flex justify-center order-2 md:order-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white z-10 shadow-lg">
                  <CheckCircle size={20} />
                </div>
              </div>
              <div className="md:w-1/2 md:pr-12 order-3 md:order-1">
                {/* Empty for layout */}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            Warum mich wählen?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Ich bin der perfekte Partner für alle, die eine professionelle Webpräsenz suchen, aber wenig Zeit haben. Ob Sie eine auffällige oder schlichte Website wünschen - gemeinsam finden wir den passenden Stil für Ihr Unternehmen. Keine klare Vorstellung? Kein Problem! Ich begleite Sie mit kreativen Ideen durch den Prozess, ohne Sie mit technischen Details zu überfordern. Und wenn Sie bereits konkrete Vorstellungen haben, setze ich diese präzise um.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between gap-6 mt-8">
            <div className="flex items-center gap-3 text-gray-700">
              <Code size={24} className="text-primary" />
              <span className="font-medium">
                {t('workflow.timeline')}
              </span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <PhoneCall size={24} className="text-primary" />
              <span className="font-medium">
                {t('workflow.effort')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
