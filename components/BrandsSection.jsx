"use client";

import { ArrowRight } from "lucide-react";

export default function BrandsSection() {
  const brands = [
    {
      name: "Toyota",
      svg: (
        <svg viewBox="0 0 100 70" className="w-10 h-7" fill="none">
          <ellipse cx="50" cy="35" rx="46" ry="30" stroke="#1f2937" strokeWidth="6" />
          <ellipse cx="50" cy="24" rx="28" ry="12" stroke="#1f2937" strokeWidth="5" />
          <ellipse cx="50" cy="38" rx="14" ry="24" stroke="#1f2937" strokeWidth="5" />
        </svg>
      )
    },
    {
      name: "BMW",
      svg: (
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <circle cx="50" cy="50" r="48" fill="#111827" />
          <circle cx="50" cy="50" r="46" stroke="#ffffff" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="32" fill="#ffffff" />
          {/* Top-right and bottom-left blue quadrants */}
          <path d="M 50 18 A 32 32 0 0 1 82 50 L 50 50 Z" fill="#0066B1" />
          <path d="M 50 82 A 32 32 0 0 1 18 50 L 50 50 Z" fill="#0066B1" />
          <circle cx="50" cy="50" r="32" stroke="#ffffff" strokeWidth="2" fill="none" />
          {/* BMW text letter hints */}
          <text x="32" y="16" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="sans-serif">B</text>
          <text x="46" y="13" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="sans-serif">M</text>
          <text x="61" y="16" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="sans-serif">W</text>
        </svg>
      )
    },
    {
      name: "Mercedes-Benz",
      svg: (
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <circle cx="50" cy="50" r="45" stroke="#1f2937" strokeWidth="5" fill="none" />
          <path
            d="M 50 50 L 50 8 L 47 48 Z"
            fill="#1f2937"
          />
          <path
            d="M 50 50 L 50 8 L 53 48 Z"
            fill="#64748b"
          />
          <path
            d="M 50 50 L 14 71 L 49 48 Z"
            fill="#1f2937"
          />
          <path
            d="M 50 50 L 14 71 L 47 52 Z"
            fill="#64748b"
          />
          <path
            d="M 50 50 L 86 71 L 51 48 Z"
            fill="#64748b"
          />
          <path
            d="M 50 50 L 86 71 L 53 52 Z"
            fill="#1f2937"
          />
          <circle cx="50" cy="50" r="3" fill="#1f2937" />
        </svg>
      )
    },
    {
      name: "Audi",
      svg: (
        <svg viewBox="0 0 140 60" className="w-12 h-6" fill="none">
          <circle cx="26" cy="30" r="22" stroke="#1f2937" strokeWidth="4.5" />
          <circle cx="52" cy="30" r="22" stroke="#1f2937" strokeWidth="4.5" />
          <circle cx="78" cy="30" r="22" stroke="#1f2937" strokeWidth="4.5" />
          <circle cx="104" cy="30" r="22" stroke="#1f2937" strokeWidth="4.5" />
        </svg>
      )
    },
    {
      name: "Peugeot",
      svg: (
        <svg viewBox="0 0 100 110" className="w-7 h-8">
          {/* Peugeot Shield */}
          <path
            d="M 15 15 L 85 15 L 85 65 Q 85 95 50 105 Q 15 95 15 65 Z"
            fill="#111827"
          />
          <path
            d="M 20 20 L 80 20 L 80 64 Q 80 90 50 99 Q 20 90 20 64 Z"
            stroke="#ffffff"
            strokeWidth="1.5"
            fill="none"
          />
          {/* Lion Profile Silhouette */}
          <path
            d="M 40 38 Q 45 32 55 35 Q 60 37 63 42 Q 62 48 57 51 L 62 55 Q 65 60 60 67 L 54 65 L 56 75 L 48 72 L 45 78 L 41 68 Q 36 62 38 52 Q 40 46 40 38 Z"
            fill="#ffffff"
          />
          <text x="32" y="29" fill="#ffffff" fontSize="6.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            PEUGEOT
          </text>
        </svg>
      )
    },
    {
      name: "Renault",
      svg: (
        <svg viewBox="0 0 100 120" className="w-6 h-8" fill="none">
          {/* Renault Modern Double Rhombus */}
          <polygon
            points="50,10 88,60 50,110 12,60"
            stroke="#111827"
            strokeWidth="9"
            strokeLinejoin="miter"
          />
          <polygon
            points="50,30 72,60 50,90 28,60"
            stroke="#ffffff"
            strokeWidth="4"
            fill="#ffffff"
          />
        </svg>
      )
    },
    {
      name: "Volkswagen",
      svg: (
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <circle cx="50" cy="50" r="47" stroke="#1f2937" strokeWidth="5" fill="#001e50" />
          <circle cx="50" cy="50" r="42" stroke="#ffffff" strokeWidth="2.5" fill="none" />
          {/* V on top */}
          <path
            d="M 28 32 L 40 58 L 47 43 L 50 49 L 53 43 L 60 58 L 72 32 L 64 32 L 56 49 L 50 37 L 44 49 L 36 32 Z"
            fill="#ffffff"
          />
          {/* W on bottom */}
          <path
            d="M 33 60 L 44 83 L 50 71 L 56 83 L 67 60 L 59 60 L 53 73 L 50 67 L 47 73 L 41 60 Z"
            fill="#ffffff"
          />
        </svg>
      )
    },
    {
      name: "Ford",
      svg: (
        <svg viewBox="0 0 140 80" className="w-11 h-6">
          <ellipse cx="70" cy="40" rx="66" ry="36" fill="#002c6c" stroke="#ffffff" strokeWidth="2.5" />
          <ellipse cx="70" cy="40" rx="63" ry="33" stroke="#ffffff" strokeWidth="1.5" fill="none" />
          {/* Ford Cursive Script Approximation */}
          <text
            x="70"
            y="49"
            fill="#ffffff"
            fontSize="26"
            fontFamily="Georgia, serif"
            fontStyle="italic"
            fontWeight="bold"
            textAnchor="middle"
          >
            Ford
          </text>
        </svg>
      )
    }
  ];

  return (
    <section id="marques" className="py-12 bg-[#ffffff] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 tracking-tight">
            Toutes Marques Entretenues
          </h2>

          <a
            href="#rendez-vous"
            className="text-xs font-bold text-slate-900 hover:text-brand-red transition-colors flex items-center gap-1 group font-display"
          >
            <span>Prendre RDV</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Brand Badges with real SVGs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {brands.map((b) => (
            <div
              key={b.name}
              className="p-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all text-center flex flex-col items-center justify-center cursor-pointer group"
            >
              <div className="w-14 h-12 flex items-center justify-center group-hover:scale-105 transition-transform mb-1.5">
                {b.svg}
              </div>
              <span className="text-xs font-bold text-slate-900 group-hover:text-brand-red transition-colors font-display">
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
