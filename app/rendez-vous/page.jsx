import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileCallBar from "@/components/MobileCallBar";
import BookingFormSection from "@/components/BookingFormSection";
import EmergencyBanner from "@/components/EmergencyBanner";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: `Prendre Rendez-vous | ${siteConfig.name} Mazamet`,
  description: "Planifiez votre rendez-vous mécanique ou diagnostic au Garage Mecapro à Mazamet (81200). Véhicule de courtoisie gratuit et confirmation rapide.",
};

export default function RendezVousPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="bg-[#0b0c0e] text-white py-14 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red font-display block mb-2">
            PRISE EN CHARGE RAPIDE • MAZAMET
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight max-w-3xl">
            Prenez Rendez-vous <span className="text-brand-red italic">en Ligne</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-4 font-sans leading-relaxed">
            Remplissez vos coordonnées et votre besoin en quelques clics. Vous pouvez également nous envoyer votre demande directement par WhatsApp ou nous appeler au 05 63 98 25 83.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <BookingFormSection />

      <EmergencyBanner />

      <Footer />
      <FloatingWhatsApp />
      <MobileCallBar />
    </main>
  );
}
