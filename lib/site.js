export const siteConfig = {
  // Informations Principales
  name: "Garage Mecapro",
  tagline: "Mécanique générale & Recherche de panne à Mazamet",
  description: "Garage automobile indépendant à Mazamet (81200). Mécanique générale, recherche approfondie de la vraie panne, véhicule de courtoisie offert et réactivité garantie.",
  city: "Mazamet",
  postalCode: "81200",
  address: "16 Rue des Arts, 81200 Mazamet",
  phone: "05 63 98 25 83",
  phoneRaw: "+33563982583",
  whatsappNumber: "33563982583",
  email: "contact@garagemecapro.fr",

  // Note Google
  googleRating: {
    score: "4.0",
    max: "5",
    reviewCount: 33,
    badgeText: "Avis vérifiés Google",
    summary: "Note de 4,0/5 basée sur 33 avis clients réels à Mazamet"
  },

  // Horaires d'ouverture
  hours: [
    { days: "Lundi - Jeudi", hours: "08h00 - 12h00 / 14h00 - 18h30" },
    { days: "Vendredi", hours: "08h00 - 12h00 / 14h00 - 18h00" },
    { days: "Samedi - Dimanche", hours: "Fermé" }
  ],
  hoursBadge: "Ouvert du Lundi au Vendredi",

  // Coordonnées GPS / Maps
  maps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.428489721327!2d2.3732009!3d43.491295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ae17d6b49265f9%3A0x6b9d62886f3458b!2s16%20Rue%20des%20Arts%2C%2081200%20Mazamet!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr",
    directionsUrl: "https://maps.google.com/?q=16+Rue+des+Arts,+81200+Mazamet"
  },

  // WhatsApp
  whatsapp: {
    defaultMessage: "Bonjour Garage Mecapro, je vous contacte depuis votre site internet pour un renseignement ou un rendez-vous pour mon véhicule.",
    buttonLabel: "Contacter sur WhatsApp",
    badgeLabel: "Réponse directe",
  },

  // Top bar
  topBar: {
    announcement: "Atelier ouvert à Mazamet • Diagnostic et réparations toutes marques",
    directContact: "Contact direct : 05 63 98 25 83",
    cta: "Prendre Rendez-vous"
  },

  // Navigation
  navigation: [
    { label: "Accueil", href: "#accueil" },
    { label: "Services", href: "#services" },
    { label: "Marques", href: "#marques" },
    { label: "Engagements", href: "#engagements" },
    { label: "Avis Clients", href: "#avis" },
    { label: "Prendre RDV", href: "#rendez-vous" },
    { label: "Contact", href: "#contact" },
  ],

  // Hero Section
  hero: {
    badge: "MÉCANIQUE GÉNÉRALE • MAZAMET (81200)",
    titleStart: "Votre véhicule entre les mains d'un",
    titleHighlight: "Vrai Passionné",
    subtitle: "Recherche minutieuse de la vraie panne sans remplacement inutile de pièces. Bénéficiez d'un véhicule de prêt gratuit pendant les réparations et de délais maîtrisés.",
    ctaPrimary: "Prendre Rendez-vous",
    ctaSecondary: "Appeler le 05 63 98 25 83",
    trustIndicators: [
      { id: "1", label: "Mécano passionné", sub: "Recherche vraie panne" },
      { id: "2", label: "Véhicule de prêt", sub: "Mis à disposition gratuitement" },
      { id: "3", label: "Délais courts", sub: "Prise en charge rapide" },
      { id: "4", label: "Devis transparent", sub: "Aucune surprise" }
    ]
  },

  // Barre de recherche / filtre express (façon CarZone)
  quickSearch: {
    tabs: [
      { id: "rdv", label: "Demande de RDV" },
      { id: "diag", label: "Diagnostic Panne" },
      { id: "entretien", label: "Devis Révision" }
    ],
    placeholderService: "Choisir une prestation...",
    placeholderVehicle: "Marque & Modèle (ex: Peugeot 208)",
    placeholderDate: "Date souhaitée",
    placeholderTime: "Créneau (Matin / Après-midi)",
    buttonLabel: "Valider la demande"
  },

  // Marques entretenues (façon Shop by Brand)
  brandsSection: {
    tag: "TOUTES MARQUES",
    title: "Entretien et réparation multimarque",
    subtitle: "Garantie constructeur préservée sur tous les modèles récents et anciens",
    brands: [
      { name: "Renault", origin: "France" },
      { name: "Peugeot", origin: "France" },
      { name: "Citroën", origin: "France" },
      { name: "Volkswagen", origin: "Allemagne" },
      { name: "BMW", origin: "Allemagne" },
      { name: "Audi", origin: "Allemagne" },
      { name: "Mercedes-Benz", origin: "Allemagne" },
      { name: "Toyota", origin: "Japon" },
      { name: "Ford", origin: "États-Unis" },
      { name: "Dacia", origin: "Roumanie" }
    ]
  },

  // Services phares
  servicesSection: {
    tag: "NOS PRESTATIONS",
    title: "Services mécaniques à l'atelier",
    subtitle: "Des interventions fiables et garanties, réalisées avec un outillage de pointe.",
    items: [
      {
        id: "diag",
        title: "Diagnostic Électronique & Vraie Panne",
        category: "Spécialité Atelier",
        description: "Recherche ciblée de la panne réelle : voyants moteur, injection, turbo, capteurs. Nous trouvons la cause exacte sans changer des pièces inutilement.",
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80",
        badge: "Recherche ciblée"
      },
      {
        id: "mecanique",
        title: "Mécanique Générale & Moteur",
        category: "Grosse Mécanique",
        description: "Remplacement de kit de distribution, kit d'embrayage, volant moteur, pompe à eau, alternateur et démarreur sur toutes motorisations.",
        image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
        badge: "Précision"
      },
      {
        id: "entretien",
        title: "Révision Complète & Vidange",
        category: "Maintenance",
        description: "Vidange avec huiles aux normes constructeur, remplacement des filtres (huile, air, habitacle, carburant) et contrôle des points de sécurité.",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
        badge: "Garantie préservée"
      },
      {
        id: "freinage",
        title: "Freinage & Liaisons au Sol",
        category: "Sécurité",
        description: "Plaquettes et disques de frein, étriers, amortisseurs, ressorts, rotules, triangles de suspension et roulements de roues.",
        image: "https://images.unsplash.com/photo-1600793575654-910699b5e4d4?auto=format&fit=crop&w=800&q=80",
        badge: "Sécurité"
      }
    ]
  },

  // Bannière Dépannage (façon Upgrade Your Drive)
  emergencyBanner: {
    tag: "ASSISTANCE RAPIDE",
    title: "Une panne, un bruit suspect ou un voyant allumé ?",
    subtitle: "Ne prenez aucun risque sur la route. Contactez immédiatement notre atelier pour un pré-diagnostic ou une prise en charge urgente.",
    buttonCall: "Appeler le 05 63 98 25 83",
    buttonWhatsApp: "Envoyer un message WhatsApp",
    badgeRight: "Intervention rapide à Mazamet"
  },

  // 4 Engagements (façon Why Choose CarZone)
  engagementsSection: {
    tag: "NOS VALEURS",
    title: "Pourquoi choisir le Garage Mecapro ?",
    subtitle: "Une relation de confiance bâtie sur le sérieux, la franchise et le respect du client.",
    items: [
      {
        title: "Recherche de la vraie panne",
        description: "Un diagnostic poussé et honnête : on identifie l'origine du souci sans vous faire payer de réparations superflues.",
        icon: "Search"
      },
      {
        title: "Véhicule de prêt gratuit",
        description: "Restez libre de vos déplacements pendant que nous entretenons ou réparons votre voiture à l'atelier.",
        icon: "Car"
      },
      {
        title: "Réactivité et délais courts",
        description: "Prise en charge rapide de votre véhicule pour réduire au maximum votre temps d'immobilisation.",
        icon: "Clock"
      },
      {
        title: "Devis clair & sans surprise",
        description: "Chaque prestation fait l'objet d'un accord préalable. Vous maîtrisez votre budget de A à Z.",
        icon: "ShieldCheck"
      }
    ]
  },

  // Avis Google (façon What Our Customers Say)
  testimonialsSection: {
    tag: "AVIS CLIENTS",
    title: "Ce que disent nos clients",
    subtitle: "Note Google certifiée de 4,0/5 avec 33 avis à Mazamet",
    reviews: [
      {
        name: "Jean-Marc D.",
        role: "Client à Mazamet",
        stars: 5,
        text: "Un vrai passionné qui sait de quoi il parle ! Deux autres garages voulaient me faire changer tout le système sans certitude. Chez Mecapro, la vraie panne a été localisée et réparée rapidement avec un tarif très correct. Merci encore !",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
      },
      {
        name: "Sophie Laurent",
        role: "Cliente à Mazamet",
        stars: 5,
        text: "Très satisfaite de la prestation. Voiture de prêt fournie gratuitement pour aller au travail, travail soigné et prix conforme au devis. C'est rare de trouver un garage aussi sérieux et honnête.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
      },
      {
        name: "Patrick V.",
        role: "Client à Aussillon",
        stars: 4,
        text: "Accueil sympathique et grand professionnalisme. Le garagiste a pris le temps de m'expliquer le problème sans jargon technique. Véhicule rendu impeccable et dans les temps prévus.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
      }
    ]
  },

  // Formulaire de rendez-vous
  bookingForm: {
    tag: "PRISE DE RENDEZ-VOUS",
    title: "Planifiez votre venue à l'atelier",
    subtitle: "Remplissez ce formulaire pour convenir d'une date ou envoyez directement votre demande sur WhatsApp.",
    labels: {
      fullName: "Nom complet",
      phone: "Téléphone",
      vehicle: "Véhicule (Marque, Modèle, Année)",
      plate: "Immatriculation (facultatif)",
      service: "Prestation souhaitée",
      date: "Date souhaitée",
      time: "Créneau",
      loanCar: "Besoin d'un véhicule de prêt gratuit",
      message: "Précisions ou symptômes observés",
      submit: "Envoyer ma demande",
      submitWhatsApp: "Envoyer via WhatsApp",
      successTitle: "Demande transmise avec succès",
      successText: "Nous avons bien reçu votre demande. Nous vous confirmons le créneau rapidement par téléphone ou SMS.",
      urgentText: "Pour une panne urgente le jour même, appelez-nous directement au"
    },
    services: [
      "Recherche de panne / Diagnostic",
      "Révision & Vidange complète",
      "Kit de distribution & Pompe à eau",
      "Embrayage & Boîte de vitesses",
      "Plaquettes & Disques de frein",
      "Amortisseurs & Suspensions",
      "Climatisation",
      "Pré-contrôle technique",
      "Autre réparation"
    ],
    times: [
      "Matinée (08h00 - 12h00)",
      "Après-midi (14h00 - 18h30)",
      "Indifférent"
    ]
  },

  // Contact
  contactSection: {
    tag: "NOUS TROUVER",
    title: "Coordonnées & Accès",
    subtitle: "Atelier situé au 16 Rue des Arts à Mazamet. Stationnement disponible.",
    addressTitle: "Adresse",
    phoneTitle: "Téléphone",
    hoursTitle: "Horaires",
    directionsBtn: "Itinéraire Google Maps",
    callBtn: "Appeler l'atelier"
  },

  // Footer (façon CarZone footer)
  footer: {
    description: "Garage Mecapro à Mazamet (81200). Mécanique générale de confiance, diagnostic de la vraie panne, véhicule de prêt gratuit et réactivité.",
    quickLinksTitle: "Navigation",
    servicesTitle: "Prestations",
    contactTitle: "Atelier",
    hoursTitle: "Disponibilité",
    copyright: "© " + new Date().getFullYear() + " Garage Mecapro. Tous droits réservés.",
    quote: "Des réparations justes, un mécanicien à votre écoute."
  },

  // Barre mobile
  mobileBar: {
    call: "Appeler",
    whatsapp: "WhatsApp",
    booking: "Prendre RDV"
  }
};

export function getWhatsAppUrl(customMessage) {
  const msg = customMessage || siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

export function getPhoneUrl() {
  return `tel:${siteConfig.phoneRaw}`;
}
