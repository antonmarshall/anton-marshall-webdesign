import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-primary">Über</span>{" "}
            <span className="text-accent">Mich</span>
          </h2>
          
          <div className="bg-card rounded-lg shadow-lg p-8">
            <p className="text-lg leading-relaxed text-foreground/90">
              {t('about.personal')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe; 