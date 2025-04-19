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
    'brand.name': 'Anton Marshall WebDesign',
    'about.menu': 'Über mich',
    'about.teaser': 'Professionelle Websites für Ihr Unternehmen – Klare Struktur, benutzerfreundlich und ohne unnötigen Schnickschnack.',
    
    // Hero
    'hero.title': 'Professionelle Webseiten für Ihr Unternehmen',
    'hero.subtitle': 'Maßgeschneiderte Webseiten für einen souveränen online Auftritt',
    'hero.cta': 'Kostenlose Beratung',
    
    // Portfolio
    'portfolio.title': 'Meine Arbeiten',
    'portfolio.subtitle': 'Eine Auswahl meiner Webdesign-Projekte für verschiedene Unternehmen',
    'portfolio.view': 'Ansehen',
    'portfolio.hover': 'Projekt anzeigen',
    'portfolio.construction': 'Bauunternehmen Website',
    'portfolio.computer': 'Computer Service Website',
    'portfolio.garden': 'Gärtnerei Website',
    'portfolio.tea': 'Japanischer Teeladen',
    'portfolio.psycho': 'Psychotherapie Website',
    'portfolio.photo': 'Fotografie Studio Website',
    'portfolio.construction.desc': 'Professioneller Webauftritt für Bauunternehmen',
    'portfolio.computer.desc': 'Moderne Website für PC-Dienstleistungen',
    'portfolio.garden.desc': 'Frische Website für Gärtnerei',
    'portfolio.tea.desc': 'Eleganter Online-Shop für japanische Tees',
    'portfolio.psycho.desc': 'Vertrauensvolle Online-Präsenz für Therapeuten',
    'portfolio.photo.desc': 'Kreative Website für Fotografie Studio',
    
    // Pricing
    'price.title': 'Preis',
    'price.subtitle': 'Als Student biete ich Ihnen professionelle Websites zu fairen Preisen',
    'price.fixedPrice': 'Einmaliger Festpreis',
    'price.includes': 'Leistungsumfang',
    'price.feature1': 'Individuelle Gestaltung und Entwicklung Ihrer Website',
    'price.feature2': 'Inklusive Domainregistrierung und Hosting für 12 Monate',
    'price.feature3': 'Begleitung von der Planung bis zur Veröffentlichung',
    'price.feature4': 'Responsive Design für alle Geräte: Perfekt auf Smartphone und Tablet',
    'price.payment': 'Hinweis: Die Zahlung erfolgt erst nach Fertigstellung und Ihrer Freigabe zur Veröffentlichung der Website.',
    
    // Workflow
    'workflow.title': '3 Wochen bis zur fertigen Website',
    'workflow.subtitle': 'Klarer Ablauf von der ersten Idee bis zur fertigen Website',
    'workflow.step1.title': 'Beratung',
    'workflow.step1.desc': 'Kostenlose Erstberatung zur Klärung Ihrer Wünsche und Ziele',
    'workflow.step1.detail': 'Wir besprechen Ihre Anforderungen, Ziele und Vision für Ihre Website. Ich analysiere Ihre Branche und Zielgruppe, um die beste Lösung für Sie zu finden.',
    'workflow.step2.title': 'Konzeption',
    'workflow.step2.desc': 'Entwicklung eines maßgeschneiderten Konzepts für Ihre Website',
    'workflow.step2.detail': 'Basierend auf unserer Beratung erstelle ich ein detailliertes Konzept mit Struktur, Designrichtung und Funktionalitäten, das perfekt auf Ihre Bedürfnisse zugeschnitten ist.',
    'workflow.step3.title': 'Design',
    'workflow.step3.desc': 'Kreative Gestaltung Ihrer Website mit modernem Look',
    'workflow.step3.detail': 'Ich entwickle ein ansprechendes Design, das Ihre Markenidentität widerspiegelt und Ihre Besucher begeistert. Alle Elemente werden für optimale Benutzerfreundlichkeit optimiert.',
    'workflow.step4.title': 'Entwicklung',
    'workflow.step4.desc': 'Professionelle Umsetzung mit modernsten Technologien',
    'workflow.step4.detail': 'Ihre Website wird mit den neuesten Webtechnologien entwickelt, um maximale Performance, Sicherheit und Benutzerfreundlichkeit zu gewährleisten.',
    'workflow.timeline': 'Gesamtdauer: Maximal 3 Wochen',
    'workflow.effort': 'Ihr Aufwand: Nur 2-3 kurze Gespräche',
    
    // About
    'about.title': 'Meine Stärken für Ihr Projekt',
    'about.desc': 'Die einfachsten Unternehmenswebsites beginnen bei professionellen Agenturen oft erst ab 1.500 € und können schnell deutlich teurer werden. Bei mir erhalten Sie eine ansprechende und strukturierte Website zu einem fairen Preis. Ob Sie eine auffällige oder eine schlichte Website möchten – ich begleite Sie mit kreativen Ideen durch den gesamten Prozess, ohne Sie mit technischen Details zu überfordern. Falls Sie bereits konkrete Vorstellungen haben, setze ich diese präzise um.',
    'about.personal': 'Ich studiere Künstliche Intelligenz an der Universität Groningen und habe mich auf die Entwicklung benutzerfreundlicher Websites spezialisiert.',
    'strengths.empathy.title': 'Zuhören & Verstehen',
    'strengths.empathy.subtitle': 'Ihre Wünsche klar im Blick',
    'strengths.speed.title': 'Faire Preise',
    'strengths.speed.subtitle': 'Professionell ohne Agenturpreise',
    'strengths.quality.title': 'Ansprechendes Design',
    'strengths.quality.subtitle': 'Ohne unnötigen Schnickschnack',
    'strengths.creativity.title': 'Kreative Begleitung',
    'strengths.creativity.subtitle': 'Ohne technische Überforderung',
    'contact.cta': 'Jetzt Kontakt aufnehmen',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Kontaktieren Sie mich!',
    'contact.name': 'Name',
    'contact.email': 'E-Mail',
    'contact.message': 'Nachricht',
    'contact.send': 'Nachricht senden',
    'contact.success': 'Vielen Dank für Ihre Nachricht! Ich werde mich in Kürze bei Ihnen melden.',
    'contact.error': 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.',
    'contact.whatsapp': 'WhatsApp',
    'contact.schedule': 'Termin vereinbaren',
    'contact.minutes': 'Minuten',
    
    // Footer
    'footer.rights': 'Alle Rechte vorbehalten',
    'footer.privacy': 'Datenschutz',
    'footer.imprint': 'Impressum',
    
    // Portfolio Detail
    'portfolio.back': 'Zurück zum Portfolio',
    'portfolio.features': 'Funktionen',
    'portfolio.technologies': 'Verwendete Technologien',
    'portfolio.notFound': 'Projekt nicht gefunden',
    
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
    
    // Accessibility
    'aria.menu': 'Hauptmenü',
    'aria.toggle': 'Menü öffnen/schließen',
    'aria.language': 'Sprache ändern',
  },
  en: {
    // Navbar
    'home': 'Home',
    'portfolio': 'Portfolio',
    'workflow': 'Process',
    'price': 'Price',
    'contact': 'Contact',
    'navigation': 'Navigation',
    'brand.name': 'Anton Marshall WebDesign',
    'about.menu': 'About Me',
    'about.teaser': 'Professional websites for your business – Clear structure, user-friendly and without unnecessary frills.',
    
    // Hero
    'hero.title': 'Professional Websites for Your Business',
    'hero.subtitle': 'Tailored websites that make your business shine',
    'hero.cta': 'Free Consultation',
    
    // Portfolio
    'portfolio.title': 'My Work',
    'portfolio.subtitle': 'A selection of my web design projects for various businesses',
    'portfolio.view': 'View',
    'portfolio.hover': 'View Project',
    'portfolio.construction': 'Construction Company Website',
    'portfolio.computer': 'Computer Service Website',
    'portfolio.garden': 'Garden Center Website',
    'portfolio.tea': 'Japanese Tea Shop',
    'portfolio.psycho': 'Psychotherapy Website',
    'portfolio.photo': 'Photography Studio Website',
    'portfolio.construction.desc': 'Professional web presence for construction company',
    'portfolio.computer.desc': 'Modern website for PC services',
    'portfolio.garden.desc': 'Fresh website for garden center',
    'portfolio.tea.desc': 'Elegant online shop for Japanese teas',
    'portfolio.psycho.desc': 'Trustworthy online presence for therapists',
    'portfolio.photo.desc': 'Creative website for photography studio',
    
    // Pricing
    'price.title': 'Price',
    'price.subtitle': 'As a student, I offer you professional websites at fair prices',
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
    'about.title': 'My Strengths for Your Project',
    'about.desc': 'The simplest business websites often start at professional agencies from €1,500 and can quickly become much more expensive. With me, you get an appealing and structured website at a fair price. Whether you want a striking or a simple website – I accompany you with creative ideas throughout the entire process, without overwhelming you with technical details. If you already have specific ideas, I implement them precisely.',
    'about.personal': 'I study Artificial Intelligence at the University of Groningen and have specialized in developing user-friendly websites.',
    'strengths.empathy.title': 'Listen & Understand',
    'strengths.empathy.subtitle': 'Your wishes clearly in focus',
    'strengths.speed.title': 'Fair Prices',
    'strengths.speed.subtitle': 'Professional without agency prices',
    'strengths.quality.title': 'Appealing Design',
    'strengths.quality.subtitle': 'Without unnecessary frills',
    'strengths.creativity.title': 'Creative Guidance',
    'strengths.creativity.subtitle': 'Without technical overwhelm',
    'contact.cta': 'Contact Me Now',
    
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
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message.',
    
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
    
    // Accessibility
    'aria.menu': 'Main menu',
    'aria.toggle': 'Toggle menu',
    'aria.language': 'Change language',
  },
};
