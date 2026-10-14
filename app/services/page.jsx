import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileCallBar from "@/components/MobileCallBar";
import EmergencyBanner from "@/components/EmergencyBanner";
import { siteConfig, getPhoneUrl } from "@/lib/site";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Calendar } from "lucide-react";

export const metadata = {
  title: `Prestations & Réparations | ${siteConfig.name} Mazamet`,
  description: "Découvrez toutes les prestations du Garage Mecapro à Mazamet : diagnostic de panne complexe, distribution, embrayage, révision constructeur et freinage.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="bg-[#0b0c0e] text-white py-14 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red font-display block mb-2">
            ATELIER MÉCANIQUE • MAZAMET (81200)
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight max-w-3xl">
            Nos Prestations <span className="text-brand-red italic">& Savoir-Faire</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-4 font-sans leading-relaxed">
            {siteConfig.servicesSection.pageSubtitle} Nous intervenons sur tous types de véhicules avec rigueur technique et transparence tarifaire.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.servicesSection.items.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] relative overflow-hidden bg-slate-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-neutral-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded font-display">
                      {service.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h2 className="text-lg font-bold font-display text-slate-900">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-sans mb-4">
                      {service.description}
                    </p>

                    {/* Features list */}
                    {service.features && (
                      <div className="space-y-2 pt-3 border-t border-slate-200">
                        {service.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-red flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-200 mt-4">
                  <span className="text-sm font-black text-slate-900 font-display">
                    {service.price}
                  </span>

                  <Link
                    href={`/rendez-vous?prestation=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold font-display transition-colors"
                  >
                    <span>Prendre RDV</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EmergencyBanner />

      <Footer />
      <FloatingWhatsApp />
      <MobileCallBar />
    </main>
  );
}
