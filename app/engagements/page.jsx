import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileCallBar from "@/components/MobileCallBar";
import EmergencyBanner from "@/components/EmergencyBanner";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { Search, ShieldCheck, Car, Clock, Check, X, ArrowRight } from "lucide-react";

export const metadata = {
  title: `Nos Engagements & Valeurs | ${siteConfig.name} Mazamet`,
  description: "Découvrez les engagements du Garage Mecapro à Mazamet : recherche de la vraie panne, véhicule de prêt offert, délais courts et devis transparent.",
};

export default function EngagementsPage() {
  const getIcon = (name) => {
    switch (name) {
      case "Search":
        return <Search className="w-6 h-6 text-brand-red" />;
      case "Car":
        return <Car className="w-6 h-6 text-brand-red" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-brand-red" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-brand-red" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-brand-red" />;
    }
  };

  const comparison = [
    {
      criterion: "Recherche de la vraie panne",
      mecapro: "Diagnostic approfondi, aucune pièce remplacée au hasard",
      others: "Tendance à remplacer des blocs complets"
    },
    {
      criterion: "Véhicule de courtoisie",
      mecapro: "Mis à disposition GRATUITEMENT pendant les réparations",
      others: "Souvent payant ou non disponible"
    },
    {
      criterion: "Délais de prise en charge",
      mecapro: "Prise en charge rapide et respect des délais annoncés",
      others: "Délais d'attente souvent longs (plusieurs semaines)"
    },
    {
      criterion: "Transparence tarifaire",
      mecapro: "Devis clair validé ensemble avant le moindre travail",
      others: "Factures parfois opaques avec suppléments imprévus"
    },
    {
      criterion: "Relation client",
      mecapro: "Échange direct avec votre mécanicien passionné",
      others: "Intermédiaire d'accueil sans contact avec le technicien"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="bg-[#0b0c0e] text-white py-14 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red font-display block mb-2">
            CONFIANCE & HONNÊTETÉ TECHNIQUE
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight max-w-3xl">
            Nos 4 Engagements <span className="text-brand-red italic">Envers Vous</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-4 font-sans leading-relaxed">
            {siteConfig.engagementsSection.pageSubtitle} Chez Garage Mecapro, nous traitons votre véhicule avec la même exigence que s'il s'agissait du nôtre.
          </p>
        </div>
      </section>

      {/* 4 Pillars In Depth */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.engagementsSection.items.map((item, index) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:shadow-card-hover transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                      {getIcon(item.icon)}
                    </div>
                    <span className="text-xs font-black text-slate-300 font-display">
                      0{index + 1}
                    </span>
                  </div>

                  <h2 className="text-xl font-black font-display text-slate-900 mb-2">
                    {item.title}
                  </h2>

                  <p className="text-sm font-semibold text-slate-700 mb-2 font-display">
                    {item.desc}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {item.fullDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 tracking-tight">
              Pourquoi Faire la Différence ?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-sans">
              Comparatif entre notre engagement d'artisan indépendant et les structures traditionnelles
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#0b0c0e] text-white border-b border-neutral-800 font-display uppercase tracking-wider text-[11px]">
                    <th className="p-4 sm:p-5">Critère</th>
                    <th className="p-4 sm:p-5 text-brand-red">Garage Mecapro</th>
                    <th className="p-4 sm:p-5 text-slate-400">Grandes Enseignes / Autres</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {comparison.map((row) => (
                    <tr key={row.criterion} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-4 sm:p-5 font-bold font-display text-slate-900">
                        {row.criterion}
                      </td>
                      <td className="p-4 sm:p-5 font-semibold text-slate-900 flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{row.mecapro}</span>
                      </td>
                      <td className="p-4 sm:p-5 text-slate-500">
                        {row.others}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/rendez-vous"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold font-display tracking-wide uppercase transition-colors shadow-sm"
            >
              <span>Tester notre atelier</span>
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
