"use client";

import { useState } from "react";
import { siteConfig, getWhatsAppUrl, getPhoneUrl } from "@/lib/site";
import { Send, MessageSquare, CheckCircle2, Car } from "lucide-react";

export default function BookingFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    vehicle: "",
    plate: "",
    service: siteConfig.bookingForm.services[0],
    date: "",
    time: siteConfig.bookingForm.times[0],
    loanCar: true,
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const getWhatsAppMessage = () => {
    return `Bonjour Garage Mecapro, je souhaite planifier un rendez-vous :\n` +
      `• Nom : ${formData.fullName || "Non renseigné"}\n` +
      `• Tél : ${formData.phone || "Non renseigné"}\n` +
      `• Véhicule : ${formData.vehicle || "Non renseigné"} ${formData.plate ? `(Immat: ${formData.plate})` : ""}\n` +
      `• Prestation : ${formData.service}\n` +
      `• Date souhaitée : ${formData.date || "Au plus vite"}\n` +
      `• Créneau : ${formData.time}\n` +
      `• Véhicule de prêt : ${formData.loanCar ? "OUI souhaité" : "Non nécessaire"}\n` +
      (formData.message ? `• Symptômes : ${formData.message}` : "");
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    window.open(getWhatsAppUrl(getWhatsAppMessage()), "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="rendez-vous" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 tracking-tight">
              Prendre Rendez-vous à l'Atelier
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-sans">
              Remplissez le formulaire ci-dessous ou échangez directement avec nous sur WhatsApp
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 px-4 bg-slate-50 rounded-lg border border-slate-200 max-w-md mx-auto space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900">
                Demande bien reçue !
              </h3>
              <p className="text-xs text-slate-600 font-sans">
                L'équipe du Garage Mecapro vous recontacte rapidement pour valider la date et le créneau.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-slate-200 text-slate-800 hover:bg-slate-300 transition-colors font-display"
                >
                  Autre demande
                </button>
                <a
                  href={getWhatsAppUrl(getWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors inline-flex items-center justify-center gap-1.5 font-display"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Envoyer sur WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-display">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Ex: Jean Martin"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-display">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ex: 06 12 34 56 78"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-display">
                    Véhicule (Marque, Modèle) *
                  </label>
                  <input
                    type="text"
                    name="vehicle"
                    required
                    value={formData.vehicle}
                    onChange={handleChange}
                    placeholder="Ex: Peugeot 308 1.6 HDi"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-display">
                    Plaque d'immatriculation (facultatif)
                  </label>
                  <input
                    type="text"
                    name="plate"
                    value={formData.plate}
                    onChange={handleChange}
                    placeholder="Ex: AB-123-CD"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-display">
                    Prestation souhaitée *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red cursor-pointer"
                  >
                    {siteConfig.bookingForm.services.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-display">
                    Date souhaitée
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 font-display">
                    Créneau horaire
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red cursor-pointer"
                  >
                    {siteConfig.bookingForm.times.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center">
                  <label className="flex items-center gap-2.5 p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 cursor-pointer w-full transition-colors">
                    <input
                      type="checkbox"
                      name="loanCar"
                      checked={formData.loanCar}
                      onChange={handleChange}
                      className="w-4 h-4 rounded text-brand-red focus:ring-brand-red"
                    />
                    <div className="flex items-center gap-1.5">
                      <Car className="w-4 h-4 text-brand-red" />
                      <span className="text-xs font-bold text-slate-800 font-display">
                        Besoin d'un véhicule de prêt gratuit
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 font-display">
                  Description du problème ou symptômes observés
                </label>
                <textarea
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Décrivez les bruits, voyants au tableau de bord ou travaux spécifiques..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-5 rounded-lg bg-brand-red hover:bg-brand-redHover text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm font-display tracking-wide uppercase text-[11px]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Envoyer ma demande de RDV</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="py-3 px-5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm font-display text-[11px]"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Envoyer via WhatsApp</span>
                </button>
              </div>

              <div className="pt-2 text-center text-xs text-slate-500 font-sans">
                <span>Pour une urgence le jour même, appelez l'atelier au </span>
                <a href={getPhoneUrl()} className="font-bold text-brand-red hover:underline font-display">
                  05 63 98 25 83
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
