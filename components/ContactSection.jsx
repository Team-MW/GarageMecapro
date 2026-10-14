"use client";

import { siteConfig, getPhoneUrl } from "@/lib/site";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-14 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 tracking-tight">
              Nous Trouver à Mazamet
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Atelier situé au 16 Rue des Arts, 81200 Mazamet • Stationnement disponible
            </p>
          </div>

          <a
            href={siteConfig.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-slate-900 hover:text-brand-red transition-colors inline-flex items-center gap-1 group"
          >
            <span>Ouvrir dans Google Maps</span>
            <Navigation className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-800 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase text-slate-500">Adresse de l'Atelier</h3>
                  <p className="text-sm font-bold font-serif text-slate-900 mt-0.5">
                    16 Rue des Arts, 81200 Mazamet
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Accès facile avec parking client
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-800 flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase text-slate-500">Téléphone Direct</h3>
                  <a
                    href={getPhoneUrl()}
                    className="text-lg font-black text-slate-900 hover:text-brand-red transition-colors block mt-0.5"
                  >
                    05 63 98 25 83
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Prise en charge et devis rapide
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-start gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-800 flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase text-slate-500">Horaires d'Ouverture</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Accueil atelier du lundi au vendredi
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-200">
                {siteConfig.hours.map((h) => (
                  <div key={h.days} className="flex justify-between text-xs">
                    <span className="font-medium text-slate-600">{h.days}</span>
                    <span className="font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="lg:col-span-7 h-[400px] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              src={siteConfig.maps.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Carte Google Maps - ${siteConfig.name}`}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
