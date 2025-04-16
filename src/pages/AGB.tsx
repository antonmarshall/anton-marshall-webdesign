
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import BackButton from '@/components/BackButton';

const AGB = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <BackButton />
        <h1 className="text-3xl font-bold mb-8">
          {language === 'de' ? 'Allgemeine Geschäftsbedingungen' : 'Terms and Conditions'}
        </h1>
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">1. Geltungsbereich</h2>
          <p className="mb-6">
            Diese AGB gelten für alle Leistungen im Zusammenhang mit der Erstellung und Bereitstellung von Webseiten durch Anton Marshall WebDesign.
          </p>

          <h2 className="text-xl font-semibold mb-4">2. Leistungen</h2>
          <p className="mb-6">
            Die Leistungen beinhalten die Konzeption, Gestaltung und technische Umsetzung von Webseiten nach individueller Absprache.
          </p>

          <h2 className="text-xl font-semibold mb-4">3. Vergütung</h2>
          <p className="mb-6">
            Der Preis beträgt 800 € als einmaliger Festpreis. Die Zahlung erfolgt erst nach Fertigstellung und Ihrer Zustimmung zur Veröffentlichung der Website.
          </p>

          <h2 className="text-xl font-semibold mb-4">4. Mitwirkungspflichten</h2>
          <p className="mb-6">
            Kund*innen stellen die zur Umsetzung benötigten Inhalte (Texte, Bilder etc.) rechtzeitig bereit.
          </p>

          <h2 className="text-xl font-semibold mb-4">5. Nutzungsrechte</h2>
          <p className="mb-6">
            Nach vollständiger Bezahlung erhält der Kunde das einfache, nicht übertragbare Nutzungsrecht an der erstellten Website.
          </p>

          <h2 className="text-xl font-semibold mb-4">6. Haftung</h2>
          <p className="mb-6">
            Für technische Probleme, die außerhalb unseres Einflussbereichs liegen (z. B. Serverprobleme des Hosting-Anbieters), übernehmen wir keine Haftung.
          </p>

          <h2 className="text-xl font-semibold mb-4">7. Schlussbestimmungen</h2>
          <p className="mb-6">
            Es gilt deutsches Recht. Sollte eine Bestimmung unwirksam sein, bleibt der Rest des Vertrags davon unberührt.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AGB;
