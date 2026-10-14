import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: `${siteConfig.name} | Garage Automobile & Diagnostic à ${siteConfig.city}`,
  description: siteConfig.description,
  keywords: [
    "Garage automobile Mazamet",
    "Mécanique générale Mazamet",
    "Diagnostic panne voiture Mazamet",
    "Véhicule de prêt gratuit Mazamet",
    "Réparation automobile 81200",
    "Garage Mecapro Mazamet",
    "Entretien vidange révision Mazamet"
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} | Expert Mécanique & Recherche de Panne à ${siteConfig.city}`,
    description: siteConfig.description,
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.name,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "16 Rue des Arts",
      addressLocality: siteConfig.city,
      postalCode: siteConfig.postalCode,
      addressCountry: "FR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.491295,
      longitude: 2.3732009
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.googleRating.score,
      reviewCount: siteConfig.googleRating.reviewCount,
      bestRating: siteConfig.googleRating.max
    }
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Playfair Display for editorial serif, Inter for sans-serif, Caveat for realistic handwritten accents */}
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;0,900;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
