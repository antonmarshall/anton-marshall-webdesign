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
        <div className="max-w-4xl mx-auto mb-20 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-lg">
          <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
            <AvatarImage src="/lovable-uploads/ba2b9903-e0ca-4b32-a32e-d600eb99f44a.png" alt="Anton Marshall" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
              Anton Marshall
              <GraduationCap className="text-accent" size={24} />
            </h3>
            <p className="text-gray-600 leading-relaxed">
              22 Jahre alt, studiere Künstliche Intelligenz in Groningen. Mit meiner Kombination aus technischem Know-how und kreativem Design helfe ich Ihnen, Ihre Webseite zum Leben zu erwecken.
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
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
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
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white z-10">
                  <PhoneCall size={20} />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left">
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
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white z-10">
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
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white z-10">
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
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white z-10">
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
          <div className="flex flex-col md:flex-row md:justify-between gap-6">
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

        <div className="max-w-3xl mx-auto mt-16 bg-white rounded-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900">
            {t('about.title')}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {t('about.desc')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
