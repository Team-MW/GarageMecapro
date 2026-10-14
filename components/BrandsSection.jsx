"use client";

import { ArrowRight } from "lucide-react";

export default function BrandsSection() {
  const brands = [
    { name: "Toyota", icon: "TOYOTA" },
    { name: "BMW", icon: "BMW" },
    { name: "Mercedes-Benz", icon: "MERCEDES" },
    { name: "Audi", icon: "AUDI" },
    { name: "Peugeot", icon: "PEUGEOT" },
    { name: "Renault", icon: "RENAULT" },
    { name: "Volkswagen", icon: "VW" },
    { name: "Ford", icon: "FORD" }
  ];

  return (
    <section id="marques" className="py-12 bg-[#ffffff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header like CarZone "Shop By Brand" */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 tracking-tight">
            Toutes Marques Entretenues
          </h2>

          <a
            href="#rendez-vous"
            className="text-xs font-bold text-slate-900 hover:text-brand-red transition-colors flex items-center gap-1 group"
          >
            <span>Voir toutes les marques</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Brand Badges like CarZone */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {brands.map((b) => (
            <div
              key={b.name}
              className="p-3.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all text-center flex flex-col items-center justify-center cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center font-black text-[11px] tracking-wider text-slate-700 group-hover:text-brand-red group-hover:border-brand-red/30 transition-colors mb-1.5 shadow-2xs">
                {b.icon}
              </div>
              <span className="text-xs font-bold text-slate-800 group-hover:text-brand-red transition-colors">
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
