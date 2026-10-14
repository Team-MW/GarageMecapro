"use client";

import { siteConfig, getPhoneUrl } from "@/lib/site";
import { Phone, ArrowRight, ShieldCheck, Car, Clock, Search, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="accueil" className="bg-[#0b0c0e] text-white pt-12 sm:pt-16 pb-16 lg:pb-24 overflow-hidden relative border-b border-neutral-800">
      {/* Background Subtle Automotive Atmosphere */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1920&q=80"
          alt="Ambiance atelier Garage Mecapro"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0e] via-[#0b0c0e]/95 to-[#0b0c0e]/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl space-y-6">
          {/* Tagline & Google Rating Pill */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red font-display">
              MÉCANIQUE DE PRÉCISION • EXPERT MAZAMET (81200)
            </span>
            <span className="hidden sm:inline text-neutral-600">•</span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white text-[11px] font-display">4,0 / 5 (33 avis Google)</span>
            </div>
          </div>

          {/* Huge Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white leading-[0.98]">
            Trouvez Votre{" "}
            <span className="text-brand-red italic block mt-1">
              Vrai Mécanicien
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
            Au Garage Mecapro à Mazamet, nous cherchons l'origine réelle de vos pannes mécaniques et électroniques sans vous faire changer de pièces inutilement. Véhicule de prêt gratuit et réactivité garantie.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#rendez-vous"
              className="bg-brand-red hover:bg-brand-redHover text-white font-bold text-xs sm:text-sm px-7 py-4 rounded-lg flex items-center gap-2.5 transition-colors shadow-sm font-display tracking-wide uppercase"
            >
              <span>Prendre Rendez-vous</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={getPhoneUrl()}
              className="bg-neutral-900/90 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm px-6 py-4 rounded-lg border border-neutral-700 transition-colors flex items-center gap-2.5 font-display tracking-wide"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              <span>05 63 98 25 83</span>
            </a>
          </div>

          {/* 4 Trust Icons Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-8 border-t border-neutral-800/80 max-w-3xl">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-slate-400 flex-shrink-0" />
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white leading-tight font-display">Mécano Passionné</h3>
                <p className="text-[11px] text-slate-400">Diagnostic rigoureux</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Car className="w-6 h-6 text-slate-400 flex-shrink-0" />
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white leading-tight font-display">Véhicule de Prêt</h3>
                <p className="text-[11px] text-slate-400">Offert pendant travaux</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Search className="w-6 h-6 text-slate-400 flex-shrink-0" />
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white leading-tight font-display">Vraie Panne</h3>
                <p className="text-[11px] text-slate-400">Zéro pièce inutile</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-slate-400 flex-shrink-0" />
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white leading-tight font-display">Délais Courts</h3>
                <p className="text-[11px] text-slate-400">Prise en charge rapide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
