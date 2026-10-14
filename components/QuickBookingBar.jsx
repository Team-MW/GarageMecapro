"use client";

import { useState } from "react";
import { siteConfig, getWhatsAppUrl } from "@/lib/site";
import { Wrench, Car, Calendar, Clock, ArrowRight, ChevronDown } from "lucide-react";

export default function QuickBookingBar() {
  const [activeTab, setActiveTab] = useState("rdv");
  const [service, setService] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const tabLabel = activeTab === "rdv" ? "Demande de RDV" : activeTab === "diag" ? "Diagnostic Panne" : "Devis Révision";
    const msg = `Bonjour Garage Mecapro, je souhaite faire une ${tabLabel} :\n- Prestation : ${service || "À définir"}\n- Véhicule : ${vehicle || "Non spécifié"}\n- Date : ${date || "Au plus vite"}\n- Créneau : ${time || "Indifférent"}`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section id="recherche" className="relative z-20 -mt-6 sm:-mt-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Top Tabs matching CarZone New Cars / Used Cars */}
          <div className="flex bg-slate-100/80 border-b border-slate-200 text-xs font-bold">
            <button
              onClick={() => setActiveTab("rdv")}
              className={`px-6 py-3 transition-colors ${
                activeTab === "rdv"
                  ? "bg-white text-slate-900 border-t-2 border-brand-red font-extrabold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Demande de Rendez-vous
            </button>
            <button
              onClick={() => setActiveTab("diag")}
              className={`px-6 py-3 transition-colors ${
                activeTab === "diag"
                  ? "bg-white text-slate-900 border-t-2 border-brand-red font-extrabold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Diagnostic Panne
            </button>
            <button
              onClick={() => setActiveTab("devis")}
              className={`px-6 py-3 transition-colors ${
                activeTab === "devis"
                  ? "bg-white text-slate-900 border-t-2 border-brand-red font-extrabold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Devis Révision
            </button>
          </div>

          {/* Form Bar matching Select Make / Model / Price / Body Type */}
          <form onSubmit={handleSubmit} className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-center">
            {/* Input 1 */}
            <div className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2.5 bg-slate-50/60 hover:border-slate-300">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <Wrench className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-800 bg-transparent focus:outline-none cursor-pointer truncate"
                >
                  <option value="">Sélectionner Prestation</option>
                  {siteConfig.bookingForm.services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 pointer-events-none" />
            </div>

            {/* Input 2 */}
            <div className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2.5 bg-slate-50/60 hover:border-slate-300">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <Car className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Modèle / Véhicule"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-800 bg-transparent focus:outline-none placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* Input 3 */}
            <div className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2.5 bg-slate-50/60 hover:border-slate-300">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <Calendar className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-800 bg-transparent focus:outline-none"
                />
              </div>
            </div>

            {/* Input 4 */}
            <div className="flex items-center justify-between border border-slate-200 rounded-lg px-3 py-2.5 bg-slate-50/60 hover:border-slate-300">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full text-xs font-semibold text-slate-800 bg-transparent focus:outline-none cursor-pointer"
                >
                  <option value="">Créneau Horaire</option>
                  {siteConfig.bookingForm.times.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 pointer-events-none" />
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-lg bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Envoyer ma demande</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
