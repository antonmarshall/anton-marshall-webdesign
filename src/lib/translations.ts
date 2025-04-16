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
    'navigation': 'Navigation',
    
    // Hero
    'hero.title': 'Professionelle Webseiten für Ihr Unternehmen',
    'hero.subtitle': 'Maßgeschneiderte Webseiten, die Ihr Unternehmen zum Strahlen bringen',
    'hero.cta': 'Kostenlose Beratung',
    
    // Portfolio
    'portfolio.title': 'Meine Arbeiten',
    'portfolio.subtitle': 'Eine Auswahl meiner Webdesign-Projekte für verschiedene Unternehmen',
    'portfolio.view': 'Ansehen',
    'portfolio.hover': 'Projekt anzeigen',
    
    // Pricing
    'price.title': 'Preis',
    'price.subtitle': 'Professionelle Website-Erstellung – Komplettpaket',
    'price.fixedPrice': 'Einmaliger Festpreis',
    'price.includes': 'Leistungsumfang',
    'price.feature1': 'Individuelle Gestaltung und Entwicklung Ihrer Website',
    'price.feature2': 'Inklusive Domainregistrierung und Hosting für 12 Monate',
    'price.feature3': 'Begleitung von der Planung bis zur Veröffentlichung',
    'price.feature4': 'Responsives Design für alle Geräte: Perfekt auf Smartphone und Tablet',
    'price.payment': 'Hinweis: Die Zahlung erfolgt erst nach Fertigstellung und Ihrer Zustimmung zur Veröffentlichung der Website.',
    
    // Workflow
    'workflow.title': 'Mein Arbeitsprozess',
    'workflow.subtitle': 'Ein einfacher und transparenter Ablauf für Ihre Website',
    'workflow.step1.title': 'Erstgespräch',
    'workflow.step1.desc': 'Kurzes kostenloses Kennenlerngespräch',
    'workflow.step1.detail': 'Ein kurzes, kostenloses Gespräch um Ihre Website-Wünsche kennenzulernen.',
    'workflow.step2.title': 'Entwicklung',
    'workflow.step2.desc': 'Design und Umsetzung Ihrer Website',
    'workflow.step2.detail': 'Ich setze Ihre Ideen in eine moderne, responsive Website um.',
    'workflow.step3.title': 'Feedback',
    'workflow.step3.desc': 'Gemeinsame Abstimmung und Anpassungen',
    'workflow.step3.detail': 'Gemeinsam verfeinern wir das Design bis es perfekt passt.',
    'workflow.step4.title': 'Fertigstellung',
    'workflow.step4.desc': 'Ihre Website geht online',
    'workflow.step4.detail': 'Ihre Website geht online und ich stelle sicher, dass alles reibungslos läuft.',
    'workflow.timeline': 'Gesamtdauer: Maximal 3 Wochen',
    'workflow.effort': 'Ihr Aufwand: Nur 2-3 kurze Gespräche',
    
    // About
    'about.title': 'Warum mich wählen?',
    'about.desc': 'Professionelle Websites kosten normalerweise weit über 800€. Bei mir bekommen Sie für diesen Preis eine authentische und strukturierte Website. Egal, ob Sie eine auffällige oder eine einfache Website wollen. Keine klare Vorstellung? Kein Problem! Ich führe Sie mit kreativen Ideen durch den Prozess, ohne Sie mit technischen Details zu überfordern. Und wenn Sie bereits konkrete Vorstellungen haben, setze ich diese präzise um.',
    'about.personal': 'Ich studiere Künstliche Intelligenz an der Universität Groningen. Dort habe ich angefangen mein Studium mit dem Programmieren von Webseiten zu finanzieren. Ich habe einen hohen Anspruch an meine Projekte und höre nicht auf, bevor Ihre Webseite visuell ansprechend, intuitiv und überzeugend ist.',
    
    // Contact
    'contact.title': 'Kontaktieren Sie mich',
    'contact.subtitle': 'Vereinbaren Sie ein kostenloses 15-minütiges Beratungsgespräch',
    'contact.whatsapp': 'WhatsApp',
    'contact.schedule': 'Termin vereinbaren',
    'contact.minutes': 'Minuten',
    'contact.name': 'Name',
    'contact.email': 'E-Mail',
    'contact.message': 'Nachricht',
    'contact.send': 'Senden',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.location': 'Groningen, Niederlande',
    
    // Legal
    'legal': 'Rechtliches',
    'legal.notice': 'Impressum',
    'legal.privacy': 'Datenschutz',
    'legal.terms': 'AGB',
    'legal.cookie.text': 'Diese Website verwendet Cookies, um Ihr Browsererlebnis zu verbessern.',
    'legal.cookie.accept': 'Akzeptieren',
    'legal.cookie.reject': 'Ablehnen',
    
    // Navigation
    'back.to.home': 'Zurück zur Startseite',
  },
  en: {
    // Navbar
    'home': 'Home',
    'portfolio': 'Portfolio',
    'workflow': 'Process',
    'price': 'Price',
    'contact': 'Contact',
    'navigation': 'Navigation',
    
    // Hero
    'hero.title': 'Professional Websites for Your Business',
    'hero.subtitle': 'Tailored websites that make your business shine',
    'hero.cta': 'Free Consultation',
    
    // Portfolio
    'portfolio.title': 'My Work',
    'portfolio.subtitle': 'A selection of my web design projects for various businesses',
    'portfolio.view': 'View',
    'portfolio.hover': 'View Project',
    
    // Pricing
    'price.title': 'Price',
    'price.subtitle': 'Professional Website Creation – Complete Package',
    'price.fixedPrice': 'One-time Fixed Price',
    'price.includes': 'Services Included',
    'price.feature1': 'Custom design and development of your website',
    'price.feature2': 'Domain registration and hosting included for 12 months',
    'price.feature3': 'Guidance from planning to publication',
    'price.feature4': 'Responsive design for all devices: Perfect on smartphone and tablet',
    'price.payment': 'Note: Payment is only due after completion and your approval for website publication.',
    
    // Workflow
    'workflow.title': 'My Process',
    'workflow.subtitle': 'A simple and transparent process for your website',
    'workflow.step1.title': 'Initial Chat',
    'workflow.step1.desc': 'Brief free get-to-know conversation',
    'workflow.step1.detail': 'A short, free call to get to know your website needs.',
    'workflow.step2.title': 'Development',
    'workflow.step2.desc': 'Design and implementation of your website',
    'workflow.step2.detail': 'I transform your ideas into a modern, responsive website.',
    'workflow.step3.title': 'Feedback',
    'workflow.step3.desc': 'Joint review and adjustments',
    'workflow.step3.detail': 'Together we refine the design until it fits perfectly.',
    'workflow.step4.title': 'Completion',
    'workflow.step4.desc': 'Your website goes live',
    'workflow.step4.detail': 'Your website goes online and I ensure everything runs smoothly.',
    'workflow.timeline': 'Total duration: Maximum 3 weeks',
    'workflow.effort': 'Your effort: Only 2-3 short calls',
    
    // About
    'about.title': 'Why Choose Me?',
    'about.desc': "Professional websites typically cost well over €800. With me, you get an authentic and structured website for this price. Whether you want a striking or a simple website. No clear vision? No problem! I'll guide you through the process with creative ideas, without overwhelming you with technical details. And if you already have specific ideas, I'll implement them precisely.",
    'about.personal': "I'm studying Artificial Intelligence at the University of Groningen. That's where I started financing my studies by programming websites. I have high standards for my projects and don't stop until your website is visually appealing, intuitive, and convincing.",
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Schedule a free 15-minute consultation call',
    'contact.whatsapp': 'WhatsApp',
    'contact.schedule': 'Schedule Appointment',
    'contact.minutes': 'minutes',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    
    // Footer
    'footer.rights': 'All Rights Reserved',
    'footer.location': 'Groningen, Netherlands',
    
    // Legal
    'legal': 'Legal',
    'legal.notice': 'Legal Notice',
    'legal.privacy': 'Privacy Policy',
    'legal.terms': 'Terms & Conditions',
    'legal.cookie.text': 'This website uses cookies to enhance your browsing experience.',
    'legal.cookie.accept': 'Accept',
    'legal.cookie.reject': 'Decline',
    
    // Navigation
    'back.to.home': 'Back to Home',
  },
};
