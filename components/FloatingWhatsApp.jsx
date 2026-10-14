"use client";

import { siteConfig, getWhatsAppUrl } from "@/lib/site";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Contact WhatsApp rapide" className="fixed bottom-20 sm:bottom-6 right-5 z-40">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter le Garage Mecapro sur WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-all hover:scale-105"
      >
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline text-xs font-bold">
          {siteConfig.whatsapp.buttonLabel}
        </span>
      </a>
    </aside>
  );
}
