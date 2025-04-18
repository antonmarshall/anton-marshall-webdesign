import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Code, Palette, Rocket, Shield } from 'lucide-react';

const strengths = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Clean Code",
    description: "Sauberer, wartbarer und effizienter Code"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Modern Design",
    description: "Zeitgemäße und ansprechende Gestaltung"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Performance",
    description: "Optimierte Ladezeiten und reaktionsschnelle Websites"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Sicherheit",
    description: "Höchste Standards für Datenschutz und Sicherheit"
  }
];

const StrengthsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="strengths" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-primary">Meine</span>{" "}
            <span className="text-accent">Stärken</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{strength.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
                <p className="text-foreground/80">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrengthsSection; 