"use client";

import Link from "next/link";
import { siteConfig, getPhoneUrl, getWhatsAppUrl } from "@/lib/site";
import { Phone, MapPin, Clock, Heart, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-slate-400 pt-16 pb-20 sm:pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-neutral-850">
          {/* Column 1: Logo & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-black italic tracking-tighter text-white font-display">
                Meca<span className="text-brand-red">Pro</span>
              </span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 mt-0.5 font-display">
                MÉCANIQUE GÉNÉRALE • MAZAMET
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-sans">
              Garage indépendant au 16 Rue des Arts à Mazamet. Recherche de la vraie panne, véhicule de courtoisie gratuit et réactivité garantie.
            </p>

            {/* Social Icons like CarZone */}
            <div className="flex items-center gap-2.5 pt-1">
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-colors" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-colors" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-colors" aria-label="YouTube">
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/rendez-vous" className="text-brand-red hover:underline font-bold">
                  Prendre Rendez-vous
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Prestations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Prestations
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="/services#diag" className="hover:text-white transition-colors">Diagnostic & Panne</Link></li>
              <li><Link href="/services#meca" className="hover:text-white transition-colors">Distribution & Moteur</Link></li>
              <li><Link href="/services#entretien" className="hover:text-white transition-colors">Révision & Vidange</Link></li>
              <li><Link href="/services#freinage" className="hover:text-white transition-colors">Freinage & Sécurité</Link></li>
              <li><Link href="/services#climatisation" className="hover:text-white transition-colors">Climatisation</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Script Text */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Atelier Mazamet
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                <a href={getPhoneUrl()} className="text-white font-bold hover:text-brand-red transition-colors font-display">
                  05 63 98 25 83
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-red flex-shrink-0 mt-0.5" />
                <span>16 Rue des Arts, 81200 Mazamet</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                <span>Lun - Ven: 08h00 - 18h30</span>
              </li>
            </ul>

            {/* Handwritten script like CarZone */}
            <div className="pt-4">
              <span className="font-script text-3xl sm:text-4xl text-white/90 block leading-tight rotate-[-3deg]">
                Des réparations justes, un vrai pro.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2 font-display">
          <p>© {new Date().getFullYear()} Garage Mecapro. Tous droits réservés.</p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Mécanique passionnée à Mazamet</span>
            <Heart className="w-3 h-3 text-brand-red fill-brand-red inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
