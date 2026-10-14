"use client";

import { ArrowRight, Heart } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: "diag",
      title: "Diagnostic & Vraie Panne",
      sub: "Valise constructeur • Zéro pièce inutile",
      price: "À partir de 69 €",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "meca",
      title: "Distribution & Embrayage",
      sub: "Kit complet, pompe à eau, volant moteur",
      price: "Devis clair & sans surprise",
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "entretien",
      title: "Révision Complète & Vidange",
      sub: "Huiles homologuées • Garantie préservée",
      price: "À partir de 89 €",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=700&q=80"
    },
    {
      id: "freinage",
      title: "Freinage & Amortisseurs",
      sub: "Disques, plaquettes, liaisons au sol",
      price: "Bilan sécurité offert",
      image: "https://images.unsplash.com/photo-1600793575654-910699b5e4d4?auto=format&fit=crop&w=700&q=80"
    }
  ];

  return (
    <section id="services" className="py-14 bg-[#ffffff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header like CarZone Featured Cars */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 tracking-tight flex items-baseline gap-3 flex-wrap">
              <span>Prestations Phares</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans">
                SOIGNÉES & GARANTIES. PRÊTES POUR VOUS.
              </span>
            </h2>
          </div>

          <a
            href="#rendez-vous"
            className="text-xs font-bold text-slate-900 hover:text-brand-red transition-colors flex items-center gap-1 group"
          >
            <span>Prendre RDV atelier</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 4 Cards Grid like CarZone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-card-hover transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[16/11] relative overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-base font-bold font-serif text-slate-900 leading-snug group-hover:text-brand-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {item.sub}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                <span className="text-sm font-extrabold text-slate-900">
                  {item.price}
                </span>
                <a
                  href="#rendez-vous"
                  className="p-1.5 text-slate-400 hover:text-brand-red transition-colors"
                  aria-label="Prendre rendez-vous"
                >
                  <Heart className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
