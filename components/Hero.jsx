"use client";

import { siteConfig, getPhoneUrl } from "@/lib/site";
import { Phone, ArrowRight, ShieldCheck, Car, Clock, Search } from "lucide-react";

export default function Hero() {
  return (
    <section id="accueil" className="bg-[#0b0c0e] text-white pt-8 sm:pt-12 pb-16 lg:pb-24 overflow-hidden relative border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column matching CarZone text hierarchy */}
          <div className="lg:col-span-7 space-y-5">
            {/* Tagline */}
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              MÉCANIQUE DE PRÉCISION • EXPERT MAZAMET (81200)
            </p>

            {/* Serif Title in Playfair Display like CarZone "Find Your Perfect Ride" */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif tracking-tight text-white leading-[1.08]">
              Trouvez Votre{" "}
              <span className="text-brand-red block mt-0.5">
                Vrai Mécanicien
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
              Au Garage Mecapro à Mazamet, nous cherchons la vraie cause de vos pannes mécaniques et électroniques sans vous faire changer de pièces inutilement. Véhicule de prêt gratuit et réactivité garantie.
            </p>

            {/* Buttons like CarZone */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#rendez-vous"
                className="bg-brand-red hover:bg-brand-redHover text-white font-bold text-xs px-6 py-3.5 rounded-lg flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>Prendre Rendez-vous</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={getPhoneUrl()}
                className="bg-neutral-900/80 hover:bg-neutral-800 text-white font-bold text-xs px-5 py-3.5 rounded-lg border border-neutral-700 transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-brand-red" />
                <span>05 63 98 25 83</span>
              </a>
            </div>

            {/* 4 Trust Icons Row matching the CarZone layout */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-800/80">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-white leading-tight">Mécano Passionné</h3>
                  <p className="text-[10px] text-slate-400">Diagnostic rigoureux</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Car className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-white leading-tight">Véhicule de Prêt</h3>
                  <p className="text-[10px] text-slate-400">Offert pendant travaux</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-white leading-tight">Vraie Panne</h3>
                  <p className="text-[10px] text-slate-400">Zéro pièce inutile</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-white leading-tight">Délais Courts</h3>
                  <p className="text-[10px] text-slate-400">Prise en charge rapide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Showroom car photo with glass logo and handwritten cursive note */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
              <div className="aspect-[16/11] relative">
                {/* Real Showroom Car Image */}
                <img
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
                  alt="Garage Mecapro Mazamet Atelier"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Showroom Window Logo Overlay like in CarZone mockup */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded border border-white/10 text-right">
                  <div className="text-lg font-black italic tracking-tight text-white leading-none">
                    Meca<span className="text-brand-red">Pro</span>
                  </div>
                  <span className="text-[8px] uppercase tracking-widest text-slate-300">
                    EXPERT AUTOMOBILE
                  </span>
                </div>

                {/* Handwritten cursive script like "More Than Cars A Better Tomorrow" */}
                <div className="absolute bottom-4 right-4 text-right pointer-events-none">
                  <span className="font-script text-2xl sm:text-3xl text-white/90 leading-tight block drop-shadow-md">
                    Votre voiture entre de bonnes mains
                  </span>
                </div>

                {/* Left Bottom Badge */}
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded border border-white/10">
                  <span className="text-xs font-bold text-white block">
                    Garage Mecapro • Mazamet
                  </span>
                  <span className="text-[10px] text-amber-400">
                    ★ 4,0/5 (33 avis Google certifiés)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
