import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileCallBar from "@/components/MobileCallBar";
import EmergencyBanner from "@/components/EmergencyBanner";
import { siteConfig } from "@/lib/site";
import Link from "next/link";
import { Star, CheckCircle, ExternalLink, ArrowRight } from "lucide-react";

export const metadata = {
  title: `Avis Clients Vérifiés Google | ${siteConfig.name} Mazamet`,
  description: "Consultez les avis des clients du Garage Mecapro à Mazamet (81200) : note certifiée Google de 4,0/5 sur 33 avis de conducteurs du Tarn.",
};

export default function AvisPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="bg-[#0b0c0e] text-white py-14 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-red font-display block mb-2">
            RÉPUTATION & SATISFACTION CLIENT
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight max-w-3xl">
            Avis Clients <span className="text-brand-red italic">Vérifiés Google</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-4 font-sans leading-relaxed">
            La plus belle récompense de notre métier reste la satisfaction de nos clients. Découvrez leurs retours d'expérience après réparation ou entretien à Mazamet.
          </p>
        </div>
      </section>

      {/* Google Rating Overview Banner */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="text-center pr-6 border-r border-slate-200">
                <span className="text-4xl sm:text-5xl font-black font-display text-slate-900 block leading-none">
                  {siteConfig.googleRating.score}
                </span>
                <span className="text-[11px] font-bold text-slate-400 font-display">sur {siteConfig.googleRating.max}</span>
              </div>
              <div>
                <div className="flex text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h2 className="text-sm font-bold font-display text-slate-900">
                  {siteConfig.googleRating.summary}
                </h2>
                <p className="text-xs text-slate-500 font-sans mt-0.5">
                  Évaluations authentiques de conducteurs réels à Mazamet et dans le Tarn
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/16+Rue+des+Arts,+81200+Mazamet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold font-display transition-colors"
            >
              <span>Voir sur Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.testimonialsSection.reviews.map((r) => (
              <div
                key={r.name}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-card-hover transition-all flex items-start gap-4"
              >
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-14 h-14 rounded-full object-cover flex-shrink-0 border border-slate-200"
                />

                <div className="space-y-2 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(r.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      Avis certifié
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-sans">
                    "{r.text}"
                  </p>

                  <div className="pt-2 border-t border-slate-200/80">
                    <h3 className="text-sm font-bold font-display text-slate-900">
                      {r.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans">
                      {r.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/rendez-vous"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold font-display tracking-wide uppercase transition-colors shadow-sm"
            >
              <span>Prendre RDV au Garage Mecapro</span>
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
