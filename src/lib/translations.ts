export type Language = 'de' | 'en';

type TranslationKeys = {
  [key: string]: string;
};

type Translations = {
  [key in Language]: TranslationKeys;
};

export const translations: Translations = {
  de: {
    // Navbar
    'home': 'Startseite',
    'portfolio': 'Portfolio',
    'workflow': 'Ablauf',
    'price': 'Preis',
    'contact': 'Kontakt',
    
    // Hero
    'hero.title': 'Professionelle Webseiten für Ihr Unternehmen',
    'hero.subtitle': 'Maßgeschneiderte Webseiten, die Ihr Unternehmen zum Strahlen bringen',
    'hero.cta': 'Kostenlose Beratung',
    
    // Portfolio
    'portfolio.title': 'Meine Arbeiten',
    'portfolio.subtitle': 'Eine Auswahl meiner Webdesign-Projekte für japanische Teeshops und Teehäuser',
    'portfolio.view': 'Ansehen',
    
    // Pricing
    'price.title': 'Preis',
    'price.subtitle': 'Professionelle Website-Erstellung – Komplettpaket',
    'price.fixedPrice': 'Einmaliger Festpreis',
    'price.includes': 'Leistungsumfang',
    'price.feature1': 'Individuelle Gestaltung und Entwicklung Ihrer Website',
    'price.feature2': 'Inklusive Domainregistrierung und Hosting für 12 Monate',
    'price.feature3': 'Begleitung von der Planung bis zur Veröffentlichung',
    'price.payment': 'Hinweis: Die Zahlung erfolgt erst nach Fertigstellung und Ihrer Zustimmung zur Veröffentlichung der Website.',
    
    // Workflow
    'workflow.title': 'Mein Arbeitsprozess',
    'workflow.subtitle': 'Ein einfacher und transparenter Ablauf für Ihre Website',
    'workflow.step1.title': 'Erstgespräch',
    'workflow.step1.desc': 'Kurzes kostenloses Kennenlerngespräch',
    'workflow.step2.title': 'Entwicklung',
    'workflow.step2.desc': 'Design und Umsetzung Ihrer Website',
    'workflow.step3.title': 'Feedback',
    'workflow.step3.desc': 'Gemeinsame Abstimmung und Anpassungen',
    'workflow.step4.title': 'Fertigstellung',
    'workflow.step4.desc': 'Ihre Website geht online',
    'workflow.timeline': 'Gesamtdauer: Maximal 3 Wochen',
    'workflow.effort': 'Ihr Aufwand: Nur 2-3 kurze Gespräche',
    
    // About
    'about.title': 'Warum mich wählen?',
    'about.desc': 'Ich bin der ideale Partner für alle, die keine Zeit haben und jemanden mit Erfahrung brauchen, um ihr Unternehmen im Internet optimal zu präsentieren. Egal ob Sie eine auffällige oder eine schlichte, ruhige Webseite wünschen - ich bin für Sie geeignet. Auch wenn Sie keine klare Vorstellung haben, führe ich Sie durch den Prozess, ohne Sie mit Fragen zu überfordern. Und wenn Sie bereits genaue Ideen haben, setze ich diese präzise um.',
    
    // Contact
    'contact.title': 'Kontaktieren Sie mich',
    'contact.subtitle': 'Vereinbaren Sie ein kostenloses 15-minütiges Beratungsgespräch',
    'contact.whatsapp': 'WhatsApp',
    'contact.schedule': 'Termin vereinbaren',
    'contact.name': 'Name',
    'contact.email': 'E-Mail',
    'contact.message': 'Nachricht',
    'contact.send': 'Senden',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten',
  },
  en: {
    // Navbar
    'home': 'Home',
    'portfolio': 'Portfolio',
    'workflow': 'Process',
    'price': 'Price',
    'contact': 'Contact',
    
    // Hero
    'hero.title': 'Professional Websites for Your Business',
    'hero.subtitle': 'Tailored websites that make your business shine',
    'hero.cta': 'Free Consultation',
    
    // Portfolio
    'portfolio.title': 'My Work',
    'portfolio.subtitle': 'A selection of my web design projects for Japanese tea shops and tea houses',
    'portfolio.view': 'View',
    
    // Pricing
    'price.title': 'Price',
    'price.subtitle': 'Professional Website Creation – Complete Package',
    'price.fixedPrice': 'One-time Fixed Price',
    'price.includes': 'Services Included',
    'price.feature1': 'Custom design and development of your website',
    'price.feature2': 'Domain registration and hosting included for 12 months',
    'price.feature3': 'Guidance from planning to publication',
    'price.payment': 'Note: Payment is only due after completion and your approval for website publication.',
    
    // Workflow
    'workflow.title': 'My Process',
    'workflow.subtitle': 'A simple and transparent process for your website',
    'workflow.step1.title': 'Initial Chat',
    'workflow.step1.desc': 'Brief free get-to-know conversation',
    'workflow.step2.title': 'Development',
    'workflow.step2.desc': 'Design and implementation of your website',
    'workflow.step3.title': 'Feedback',
    'workflow.step3.desc': 'Joint review and adjustments',
    'workflow.step4.title': 'Completion',
    'workflow.step4.desc': 'Your website goes live',
    'workflow.timeline': 'Total duration: Maximum 3 weeks',
    'workflow.effort': 'Your effort: Only 2-3 short calls',
    
    // About
    'about.title': 'Why Choose Me?',
    'about.desc': "I'm the ideal partner for those who don't have time and need someone with experience to make their business stand out online. Whether you want a striking or a simple, calm website - I'm suitable for you. Even if you don't have a clear vision, I'll guide you through the process without overwhelming you with questions. And if you already have precise ideas, I'll implement them accurately.",
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Schedule a free 15-minute consultation call',
    'contact.whatsapp': 'WhatsApp',
    'contact.schedule': 'Schedule Appointment',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
  },
};
