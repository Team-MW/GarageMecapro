"use client";

import { ArrowRight, Search, ShieldCheck, Car, Clock } from "lucide-react";

export default function EngagementsSection() {
  const engagements = [
    {
      title: "Recherche Vraie Panne",
      desc: "Diagnostic pointu et honnête : on ne remplace aucune pièce au hasard.",
      icon: Search
    },
    {
      title: "Devis Clair & Transparent",
      desc: "Tarifs justes et accord préalable systématique avant toute intervention.",
      icon: ShieldCheck
    },
    {
      title: "Véhicule de Prêt Gratuit",
      desc: "Voiture de courtoisie mise à disposition pour conserver votre mobilité.",
      icon: Car
    },
    {
      title: "Délais Courts & Réactivité",
      desc: "Prise en charge rapide pour réduire au maximum l'immobilisation.",
      icon: Clock
    }
  ];

  return (
    <section id="engagements" className="py-14 bg-[#ffffff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with font-display */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 tracking-tight">
            Pourquoi Choisir le Garage Mecapro ?
          </h2>

          <a
            href="#rendez-vous"
            className="text-xs font-bold text-slate-900 hover:text-brand-red transition-colors flex items-center gap-1 group font-display"
          >
            <span>Prendre RDV</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {engagements.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-card-hover transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-800 mb-3.5 shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold font-display text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
