"use client";

import { siteConfig, getPhoneUrl, getWhatsAppUrl } from "@/lib/site";
import { Phone, MessageSquare, Calendar } from "lucide-react";

export default function MobileCallBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-md border-t border-navy-800 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Call */}
        <a
          href={getPhoneUrl()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-navy-850 border border-navy-700 text-white"
        >
          <Phone className="w-4 h-4 text-brand-red mb-1" />
          <span className="text-[10px] font-bold">
            {siteConfig.mobileBar.call}
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-navy-850 border border-navy-700 text-white"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-1" />
          <span className="text-[10px] font-bold">
            {siteConfig.mobileBar.whatsapp}
          </span>
        </a>

        {/* RDV */}
        <a
          href="#rendez-vous"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-brand-red text-white"
        >
          <Calendar className="w-4 h-4 mb-1" />
          <span className="text-[10px] font-bold">
            {siteConfig.mobileBar.booking}
          </span>
        </a>
      </div>
    </div>
  );
}
