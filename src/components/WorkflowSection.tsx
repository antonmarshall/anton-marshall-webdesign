import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { PhoneCall, Code, MessageSquare, CheckCircle, GraduationCap } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const WorkflowSection = () => {
  const {
    t
  } = useLanguage();
  const steps = [{
    icon: <PhoneCall size={24} />,
    title: t('workflow.step1.title'),
    desc: t('workflow.step1.desc'),
    detail: "Ein kurzes, kostenloses Gespräch um Ihre Website-Wünsche kennenzulernen."
  }, {
    icon: <Code size={24} />,
    title: t('workflow.step2.title'),
    desc: t('workflow.step2.desc'),
    detail: "Ich setze Ihre Ideen in eine moderne, responsive Website um."
  }, {
    icon: <MessageSquare size={24} />,
    title: t('workflow.step3.title'),
    desc: t('workflow.step3.desc'),
    detail: "Gemeinsam verfeinern wir das Design bis es perfekt passt."
  }, {
    icon: <CheckCircle size={24} />,
    title: t('workflow.step4.title'),
    desc: t('workflow.step4.desc'),
    detail: "Ihre Website geht online und ich stelle sicher, dass alles reibungslos läuft."
  }];
  return <section id="workflow" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Personal Introduction */}
        <div className="max-w-6xl mx-auto mb-20 flex flex-col md:flex-row items-center gap-12 rounded-lg">
          <Avatar className="w-48 h-48 border-4 border-white shadow-lg">
            <AvatarImage src="/lovable-uploads/ba2b9903-e0ca-4b32-a32e-d600eb99f44a.png" alt="Anton Marshall" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              Anton Marshall
              <GraduationCap className="text-accent" size={24} />
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Mit 22 Jahren studiere ich Künstliche Intelligenz in Groningen und bringe technisches Know-how mit kreativem Design zusammen. 
              Ich liebe es, mit Menschen zu brainstormen und ihre Vision zu verstehen. Jedes Projekt ist für mich eine spannende Reise, 
              bei der ich mit hohen Ansprüchen Ihre digitale Präsenz gestalte.
            </p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {t('workflow.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('workflow.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-accent/80 transform -translate-y-1/2 hidden md:block"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {steps.map((step, index) => <div key={index} className="group relative">
                  <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-center text-sm">{step.desc}</p>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-center p-4">{step.detail}</p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Warum mich wählen?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 font-normal">professionelle Webseiten kosten in der Regel weit über 800€.
Sie kriegen in kurzer Zeit eine authentische Webseite. Egal, ob Sie eine auffällige oder schlichte Website wünschen.
Keine klare Vorstellung? Kein Problem! Ich begleite Sie mit kreativen Ideen durch den Prozess, ohne Sie mit technischen Details zu überfordern. Und wenn Sie bereits konkrete Vorstellungen haben, setze ich diese präzise um.</p>
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
      </div>
    </section>;
};
export default WorkflowSection;