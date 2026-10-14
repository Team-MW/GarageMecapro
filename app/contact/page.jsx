import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileCallBar from "@/components/MobileCallBar";
import ContactSection from "@/components/ContactSection";
import EmergencyBanner from "@/components/EmergencyBanner";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: `Contact, Adresse & Horaires | ${siteConfig.name} Mazamet`,
  description: "Coordonnées du Garage Mecapro : 16 Rue des Arts, 81200 Mazamet. Téléphone : 05 63 98 25 83. Horaires d'ouverture, plan d'accès et itinéraire.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="bg-[#0b0c0e] text-white py-14 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red font-display block mb-2">
            COORDONNÉES & HORAIRES • MAZAMET
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight max-w-3xl">
            Contactez Notre <span className="text-brand-red italic">Atelier</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-4 font-sans leading-relaxed">
            Situé au 16 Rue des Arts à Mazamet, votre garage automobile vous accueille du lundi au vendredi. Contactez-nous par téléphone, WhatsApp ou venez directement sur place.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <EmergencyBanner />

      <Footer />
      <FloatingWhatsApp />
      <MobileCallBar />
    </main>
  );
}
