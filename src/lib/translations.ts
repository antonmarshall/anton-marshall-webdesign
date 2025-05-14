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
    'portfolio.view': 'Website besuchen',
    'portfolio.hover': 'Projekt anzeigen',
    'portfolio.tischler': 'Tischlerei Website',
    'portfolio.steuer': 'Steuerberatung Website',
    'portfolio.garten': 'Gärtnerei Website',
    'portfolio.caffe': 'Café Website',
    'portfolio.kunsttherapie': 'Kunsttherapie Website',
    'portfolio.zahnarzt': 'Zahnarzt Website',
    'portfolio.tischler.desc': 'Professioneller Webauftritt für eine Tischlerei',
    'portfolio.steuer.desc': 'Moderne Website für Steuerberatung',
    'portfolio.garten.desc': 'Frische Website für eine Gärtnerei',
    'portfolio.caffe.desc': 'Gemütliche Website für ein Café',
    'portfolio.kunsttherapie.desc': 'Kreative Website für Kunsttherapie',
    'portfolio.zahnarzt.desc': 'Professionelle Website für Zahnarztpraxis',
    
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
    'workflow.title': 'Mein Prozess',
    'workflow.subtitle': 'Ein strukturierter Ansatz für Ihr Projekt',
    'steps.consultation.title': 'Fokus Gespräch',
    'steps.consultation.description': 'Wir besprechen Ihre Ziele, Wünsche und Anforderungen in einem ausführlichen Gespräch.',
    'steps.concept.title': 'Konzept & Design',
    'steps.concept.description': 'Entwicklung eines maßgeschneiderten Konzepts mit modernem Design, das zu Ihrer Marke passt.',
    'steps.development.title': 'Entwicklung',
    'steps.development.description': 'Umsetzung Ihres Projekts mit modernsten Technologien und bestem Code.',
    'steps.review.title': 'Review & Feedback',
    'steps.review.description': 'Gemeinsame Überprüfung und Optimierung bis alles perfekt ist.',
    'steps.launch.title': 'Launch & Support',
    'steps.launch.description': 'Professioneller Start Ihrer Website und kontinuierliche Unterstützung.',
    'workflow.timeline': 'Gesamtdauer: Maximal 3 Wochen',
    'workflow.effort': 'Ihr Aufwand: Nur 2-3 kurze Gespräche',
    
    // About
    'about.title': 'Meine Stärken für Ihr Projekt',
    'about.desc': 'Die einfachsten Unternehmenswebsites beginnen bei professionellen Agenturen oft erst ab 1.500 € und können schnell deutlich teurer werden. Bei mir erhalten Sie eine ansprechende und strukturierte Website zu einem fairen Preis. Ob Sie eine auffällige oder eine schlichte Website möchten – ich begleite Sie mit kreativen Ideen durch den gesamten Prozess, ohne Sie mit technischen Details zu überfordern. Falls Sie bereits konkrete Vorstellungen haben, setze ich diese präzise um.',
    'about.personal': 'Ich studiere Künstliche Intelligenz an der Universität Groningen und habe mich auf die Entwicklung benutzerfreundlicher Websites spezialisiert.',
    'strengths.empathy.title': 'Kernaussagen finden',
    'strengths.empathy.subtitle': 'Ihre Ziele im Blick behalten',
    'strengths.speed.title': 'Faire Preise',
    'strengths.speed.subtitle': 'Professionell ohne Agenturpreise',
    'strengths.quality.title': 'Ansprechendes Design',
    'strengths.quality.subtitle': 'Ohne unnötigen Schnickschnack',
    'strengths.creativity.title': 'Stressfrei online',
    'strengths.creativity.subtitle': 'Ich übernehme die Technik',
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
    'hero.subtitle': 'Custom-made websites for a professional online presence',
    'hero.cta': 'Free Consultation',
    
    // Portfolio
    'portfolio.title': 'My Work',
    'portfolio.subtitle': 'A selection of my web design projects for various businesses',
    'portfolio.view': 'Visit Website',
    'portfolio.hover': 'View Project',
    'portfolio.tischler': 'Carpentry Website',
    'portfolio.steuer': 'Tax Consulting Website',
    'portfolio.garten': 'Garden Center Website',
    'portfolio.caffe': 'Café Website',
    'portfolio.kunsttherapie': 'Art Therapy Website',
    'portfolio.zahnarzt': 'Dental Practice Website',
    'portfolio.tischler.desc': 'Professional web presence for a carpentry business',
    'portfolio.steuer.desc': 'Modern website for tax consulting',
    'portfolio.garten.desc': 'Fresh website for a garden center',
    'portfolio.caffe.desc': 'Cozy website for a café',
    'portfolio.kunsttherapie.desc': 'Creative website for art therapy',
    'portfolio.zahnarzt.desc': 'Professional website for dental practice',
    
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
    'workflow.subtitle': 'A structured approach to your project',
    'steps.consultation.title': 'Focus Meeting',
    'steps.consultation.description': 'We discuss your goals, wishes, and requirements in a detailed conversation.',
    'steps.concept.title': 'Concept & Design',
    'steps.concept.description': 'Development of a tailored concept with modern design that matches your brand.',
    'steps.development.title': 'Development',
    'steps.development.description': 'Implementation of your project using the latest technologies and best code practices.',
    'steps.review.title': 'Review & Feedback',
    'steps.review.description': 'Joint review and optimization until everything is perfect.',
    'steps.launch.title': 'Launch & Support',
    'steps.launch.description': 'Professional launch of your website and continuous support.',
    'workflow.timeline': 'Total duration: Maximum 3 weeks',
    'workflow.effort': 'Your effort: Only 2-3 short calls',
    
    // About
    'about.title': 'My Strengths for Your Project',
    'about.desc': 'The simplest business websites often start at professional agencies from €1,500 and can quickly become much more expensive. With me, you get an appealing and structured website at a fair price. Whether you want a striking or a simple website – I accompany you with creative ideas throughout the entire process, without overwhelming you with technical details. If you already have specific ideas, I implement them precisely.',
    'about.personal': 'I study Artificial Intelligence at the University of Groningen and have specialized in developing user-friendly websites.',
    'strengths.empathy.title': 'Extract Key Points',
    'strengths.empathy.subtitle': 'Find the essentials together',
    'strengths.speed.title': 'Fair Prices',
    'strengths.speed.subtitle': 'Professional without agency prices',
    'strengths.quality.title': 'Appealing Design',
    'strengths.quality.subtitle': 'Without unnecessary frills',
    'strengths.creativity.title': 'Relaxed Collaboration',
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
