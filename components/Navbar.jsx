"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, getPhoneUrl } from "@/lib/site";
import { Phone, Menu, X, ArrowRight, Car, Wrench } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#000000] text-white">
      {/* Top Bar matching CarZone mockup */}
      <div className="bg-[#0a0a0a] border-b border-neutral-800 py-1.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-slate-300 font-semibold tracking-wide uppercase text-[11px] font-display">
              <Car className="w-4 h-4 text-slate-400" />
              <span>GARAGE AUTOMOBILE</span>
            </div>
            <a
              href={getPhoneUrl()}
              className="bg-brand-red hover:bg-brand-redHover text-white font-bold text-[11px] px-3 py-1 rounded-full flex items-center gap-1 transition-colors font-display"
            >
              <span>{siteConfig.phone}</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="hidden md:flex items-center gap-2 text-slate-300 text-[11px]">
            <span>16 Rue des Arts, 81200 Mazamet</span>
            <span className="text-neutral-600">•</span>
            <span className="text-slate-400">Note Google 4,0/5 (33 avis)</span>
          </div>

          <div className="hidden lg:flex items-center text-slate-400 text-xs">
            <Wrench className="w-4 h-4 text-slate-500" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col group">
          <div className="text-2xl sm:text-3xl font-black italic tracking-tighter leading-none text-white font-display">
            Meca<span className="text-brand-red">Pro</span>
          </div>
          <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mt-0.5 font-display">
            MÉCANIQUE GÉNÉRALE • MAZAMET
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-wide font-display">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`py-1 transition-colors relative ${
                  isActive
                    ? "text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-red"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={getPhoneUrl()}
            className="text-xs font-bold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 font-display"
          >
            <Phone className="w-3.5 h-3.5 text-brand-red" />
            <span>05 63 98 25 83</span>
          </a>

          <Link
            href="/rendez-vous"
            className="bg-brand-red hover:bg-brand-redHover text-white font-bold text-xs px-5 py-2.5 rounded-full flex items-center gap-2 transition-colors shadow-sm font-display tracking-wide uppercase text-[11px]"
          >
            <span>Prendre RDV</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={getPhoneUrl()}
            className="p-2 rounded-full bg-brand-red text-white"
            aria-label="Appeler"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-900 border-t border-neutral-800 px-5 py-4 space-y-3 font-display">
          <nav className="flex flex-col space-y-2 text-sm font-bold">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1.5 ${
                  pathname === item.href ? "text-brand-red" : "text-slate-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <Link
              href="/rendez-vous"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-full bg-brand-red text-center text-xs font-bold text-white flex items-center justify-center gap-1.5 font-display tracking-wide uppercase"
            >
              <span>Prendre RDV en ligne</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
