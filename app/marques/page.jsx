import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileCallBar from "@/components/MobileCallBar";
import BrandsSection from "@/components/BrandsSection";
import EmergencyBanner from "@/components/EmergencyBanner";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: `Toutes Marques Entretenues | ${siteConfig.name} Mazamet`,
  description: "Entretien et réparation multimarque à Mazamet : Renault, Peugeot, Citroën, Volkswagen, BMW, Audi, Mercedes, Toyota. Garantie constructeur préservée.",
};

export default function MarquesPage() {
  const brandGroups = [
    {
      title: "Marques Françaises",
      description: "Renault, Peugeot, Citroën, Dacia, DS Automobiles.",
      points: [
        "Moteurs PureTech, HDi, BlueHDi, dCi, TCe",
        "Kits de distribution et courroies humides",
        "Diagnostic valise et réinitialisation compteurs"
      ]
    },
    {
      title: "Marques Allemandes",
      description: "Volkswagen, Audi, BMW, Mercedes-Benz, Seat, Skoda, Opel.",
      points: [
        "Moteurs TDI, TSI, TFSI, d, i",
        "Boîtes manuelles et boîtes automatiques (DSG, S-Tronic)",
        "Freinage haute performance et amortisseurs pilotés"
      ]
    },
    {
      title: "Marques Asiatiques & Internationales",
      description: "Toyota, Ford, Hyundai, Kia, Nissan, Fiat.",
      points: [
        "Motorisations hybrides, essence et diesel",
        "Entretien périodique selon carnet constructeur",
        "Pièces d'origine certifiées équipementiers"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="bg-[#0b0c0e] text-white py-14 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red font-display block mb-2">
            EXPERTISE MULTIMARQUE • MAZAMET
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight max-w-3xl">
            Toutes Marques <span className="text-brand-red italic">Entretenues & Réparées</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-4 font-sans leading-relaxed">
            Grâce à un outillage de diagnostic multimarque de pointe, le Garage Mecapro assure l'entretien de votre véhicule quelle que soit sa marque, tout en préservant scrupuleusement la garantie constructeur.
          </p>
        </div>
      </section>

      {/* Brand Logos */}
      <BrandsSection />

      {/* Multibrand Details */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 tracking-tight">
              Une Prise en Charge Conforme aux Normes Constructeur
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-sans">
              Conformément à la réglementation européenne, vous êtes totalement libre de faire entretenir votre véhicule chez Garage Mecapro dès son premier jour de mise en circulation sans perdre la garantie constructeur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brandGroups.map((group) => (
              <div key={group.title} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-800 mb-4 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 text-brand-red" />
                </div>
                <h3 className="text-lg font-bold font-display text-slate-900">
                  {group.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 mt-1 mb-4 font-sans">
                  {group.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-200">
                  {group.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-red flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Action Call */}
          <div className="mt-12 text-center">
            <Link
              href="/rendez-vous"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold font-display tracking-wide uppercase transition-colors shadow-sm"
            >
              <span>Prendre RDV pour mon véhicule</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
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
