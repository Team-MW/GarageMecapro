"use client";

import { siteConfig, getPhoneUrl, getWhatsAppUrl } from "@/lib/site";
import { Phone, ArrowRight, MessageSquare } from "lucide-react";

export default function EmergencyBanner() {
  const whatsappMsg = "Bonjour Garage Mecapro, j'ai une panne ou un voyant allumé sur mon véhicule. Pouvez-vous me renseigner ?";

  return (
    <section className="py-8 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden bg-[#0c0d10] text-white p-8 sm:p-12 shadow-md">
          {/* Right Silhouette Image */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 pointer-events-none hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80"
              alt="Assistance Dépannage Mecapro"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="relative z-10 max-w-xl space-y-4">
            <h2 className="text-2xl sm:text-4xl font-black font-display text-white tracking-tight">
              Une Panne ou un Voyant Allumé ?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Ne prenez aucun risque sur la route. Nous identifions l'origine exacte du dysfonctionnement sans vous facturer de réparations superflues.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={getPhoneUrl()}
                className="bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs px-6 py-3.5 rounded-lg flex items-center gap-2 transition-colors shadow-sm font-display uppercase tracking-wide text-[11px]"
              >
                <span>Appeler le 05 63 98 25 83</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={getWhatsAppUrl(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs px-5 py-3.5 rounded-lg border border-neutral-700 transition-colors flex items-center gap-2 font-display text-[11px]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Message WhatsApp direct</span>
              </a>
            </div>
          </div>

          {/* Red Handwritten Script Text */}
          <div className="absolute right-8 top-8 hidden lg:block text-right pointer-events-none">
            <span className="font-script text-4xl text-brand-red block leading-none rotate-[-4deg] drop-shadow">
              Diagnostic Rapide & Précis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
