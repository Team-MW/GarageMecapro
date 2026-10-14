"use client";

import { siteConfig } from "@/lib/site";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = siteConfig.testimonialsSection.reviews;

  return (
    <section id="avis" className="py-14 bg-[#ffffff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header like CarZone */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 tracking-tight">
              Ce Que Disent Nos Clients
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Note certifiée Google : 4,0/5 sur 33 avis à Mazamet
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-slate-400 transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-slate-400 transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Review Cards matching CarZone layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-card-hover transition-all flex items-start gap-4"
            >
              <img
                src={r.image}
                alt={r.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0 border border-slate-200"
              />

              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{r.text}"
                </p>

                <div className="pt-1">
                  <h3 className="text-xs font-bold text-slate-900">
                    {r.name}
                  </h3>
                  <p className="text-[10px] text-slate-400">
                    Avis vérifié Google • Mazamet
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
