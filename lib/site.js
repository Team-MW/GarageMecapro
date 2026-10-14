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

  // Navigation multi-pages
  navigation: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Marques", href: "/marques" },
    { label: "Engagements", href: "/engagements" },
    { label: "Avis Clients", href: "/avis" },
    { label: "Contact", href: "/contact" },
  ],

  // Hero Section
  hero: {
    badge: "MÉCANIQUE GÉNÉRALE • MAZAMET (81200)",
    titleStart: "Trouvez Votre",
    titleHighlight: "Vrai Mécanicien",
    subtitle: "Au Garage Mecapro à Mazamet, nous cherchons l'origine réelle de vos pannes mécaniques et électroniques sans vous faire changer de pièces inutilement. Véhicule de prêt gratuit et réactivité garantie.",
    ctaPrimary: "Prendre Rendez-vous",
    ctaSecondary: "05 63 98 25 83",
    trustIndicators: [
      { id: "1", label: "Mécano Passionné", sub: "Diagnostic rigoureux" },
      { id: "2", label: "Véhicule de Prêt", sub: "Offert pendant travaux" },
      { id: "3", label: "Vraie Panne", sub: "Zéro pièce inutile" },
      { id: "4", label: "Délais Courts", sub: "Prise en charge rapide" }
    ]
  },

  // Barre de recherche / filtre express
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
    buttonLabel: "Valider ma demande"
  },

  // Marques entretenues
  brandsSection: {
    tag: "TOUTES MARQUES",
    title: "Toutes Marques Entretenues",
    subtitle: "Garantie constructeur préservée sur tous les modèles récents et anciens",
    brands: [
      { name: "Toyota", origin: "Japon" },
      { name: "BMW", origin: "Allemagne" },
      { name: "Mercedes-Benz", origin: "Allemagne" },
      { name: "Audi", origin: "Allemagne" },
      { name: "Peugeot", origin: "France" },
      { name: "Renault", origin: "France" },
      { name: "Volkswagen", origin: "Allemagne" },
      { name: "Ford", origin: "États-Unis" }
    ]
  },

  // Services phares & complets
  servicesSection: {
    tag: "NOS PRESTATIONS",
    title: "Prestations Phares",
    subtitle: "SOIGNÉES & GARANTIES. PRÊTES POUR VOUS.",
    pageTitle: "Nos Services & Prestations Mécaniques",
    pageSubtitle: "Diagnostic approfondi, réparations mécaniques lourdes et entretien régulier avec pièces certifiées.",
    items: [
      {
        id: "diag",
        title: "Diagnostic & Vraie Panne",
        category: "Spécialité Atelier",
        sub: "Valise constructeur • Zéro pièce inutile",
        price: "À partir de 69 €",
        description: "Recherche ciblée de la cause réelle de panne : voyants moteur, injection, turbo, FAP, capteurs et faisceaux. Nous identifions la vraie cause avant de toucher à quoi que ce soit.",
        features: [
          "Lecture et analyse approfondie des calculateurs",
          "Contrôle des faisceaux et signaux électroniques",
          "Recherche de pannes intermittentes et complexes",
          "Rapport clair sans remplacement de pièces inutiles"
        ],
        image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "meca",
        title: "Distribution & Embrayage",
        category: "Grosse Mécanique",
        sub: "Kit complet, pompe à eau, volant moteur",
        price: "Devis clair & sans surprise",
        description: "Remplacement de kit de courroie ou chaîne de distribution, pompe à eau, galets tendeurs, kit d'embrayage avec ou sans volant moteur bi-masse.",
        features: [
          "Calage précis aux piges constructeur",
          "Remplacement systématique de la pompe à eau",
          "Purge du liquide de refroidissement",
          "Pièces d'origine ou équipementiers certifiés"
        ],
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "entretien",
        title: "Révision Complète & Vidange",
        category: "Maintenance",
        sub: "Huiles homologuées • Garantie préservée",
        price: "À partir de 89 €",
        description: "Vidange moteur avec huile 100% synthétique conforme aux spécifications exactes de votre constructeur, filtres et contrôles sécurité.",
        features: [
          "Huiles homologuées (0W20, 5W30, etc.)",
          "Filtre à huile, air, habitacle et carburant",
          "Mise à zéro de l'indicateur d'entretien",
          "Préservation totale de la garantie constructeur"
        ],
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "freinage",
        title: "Freinage & Amortisseurs",
        category: "Sécurité",
        sub: "Disques, plaquettes, liaisons au sol",
        price: "Bilan sécurité offert",
        description: "Plaquettes et disques de frein, étriers, purge liquide de frein haute température, amortisseurs, rotules et triangles de suspension.",
        features: [
          "Contrôle d'usure et d'épaisseur des disques",
          "Plaquettes homologuées haute adhérence",
          "Contrôle visuel des trains roulants et soufflets",
          "Essai routier systématique après intervention"
        ],
        image: "https://images.unsplash.com/photo-1600793575654-910699b5e4d4?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "climatisation",
        title: "Climatisation & Confort",
        category: "Confort Thermique",
        sub: "Recharge gaz, recherche fuite, traitement",
        price: "À partir de 79 €",
        description: "Entretien complet du circuit de climatisation : tirage au vide, recharge de fluide frigorifique (R134a et R1234yf), et traitement antibactérien.",
        features: [
          "Tirage au vide et test d'étanchéité",
          "Recharge précise au gramme près",
          "Remplacement du filtre d'habitacle",
          "Traitement assainissant du circuit d'air"
        ],
        image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "controle",
        title: "Pré-contrôle Technique",
        category: "Contrôle & Sécurité",
        sub: "Inspection rigoureuse • Zéro contre-visite",
        price: "Offert avec révision",
        description: "Examen minutieux de tous les points de contrôle soumis à obligation : éclairage, freinage, pollution, trains roulants et carrosserie.",
        features: [
          "Vérification complète des organes de sécurité",
          "Passage à la valise diagnostic pour voyants",
          "Devis immédiat en cas de défaut majeur",
          "Présentation possible du véhicule au centre"
        ],
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },

  // Bannière Dépannage
  emergencyBanner: {
    tag: "ASSISTANCE RAPIDE",
    title: "Une Panne ou un Voyant Allumé ?",
    subtitle: "Ne prenez aucun risque sur la route. Nous identifions l'origine exacte du dysfonctionnement sans vous facturer de réparations superflues.",
    buttonCall: "Appeler le 05 63 98 25 83",
    buttonWhatsApp: "Message WhatsApp direct",
    badgeRight: "Diagnostic Rapide & Précis"
  },

  // 4 Engagements
  engagementsSection: {
    tag: "NOS VALEURS",
    title: "Pourquoi Choisir le Garage Mecapro ?",
    subtitle: "Une relation de confiance bâtie sur le sérieux, la franchise et le respect du client.",
    pageTitle: "Nos Engagements & Notre Philosophie",
    pageSubtitle: "Pourquoi les conducteurs de Mazamet et des environs nous font confiance au quotidien.",
    items: [
      {
        title: "Recherche Vraie Panne",
        desc: "Diagnostic pointu et honnête : on ne remplace aucune pièce au hasard.",
        fullDesc: "Finies les estimations vagues et les pièces changées à l'aveugle. Mécano passionné, nous analysons minutieusement les symptômes pour réparer uniquement ce qui est défaillant.",
        icon: "Search"
      },
      {
        title: "Devis Clair & Transparent",
        desc: "Tarifs justes et accord préalable systématique avant toute intervention.",
        fullDesc: "Aucun travail n'est engagé sans votre validation préalable. Les devis sont détaillés, compréhensibles et sans mauvaise surprise au moment de régler.",
        icon: "ShieldCheck"
      },
      {
        title: "Véhicule de Prêt Gratuit",
        desc: "Voiture de courtoisie mise à disposition pour conserver votre mobilité.",
        fullDesc: "Parce qu'une voiture immobilisée ne doit pas vous bloquer, nous mettons gracieusement à votre disposition un véhicule de prêt propre et sécurisé pendant les travaux.",
        icon: "Car"
      },
      {
        title: "Délais Courts & Réactivité",
        desc: "Prise en charge rapide pour réduire au maximum l'immobilisation.",
        fullDesc: "Nous organisons nos plannings de manière réactive pour réceptionner votre véhicule rapidement et respecter les délais convenus.",
        icon: "Clock"
      }
    ]
  },

  // Avis Google
  testimonialsSection: {
    tag: "AVIS CLIENTS",
    title: "Ce Que Disent Nos Clients",
    subtitle: "Note certifiée Google : 4,0/5 sur 33 avis à Mazamet",
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
      },
      {
        name: "Élodie B.",
        role: "Cliente à Mazamet",
        stars: 5,
        text: "Prise de rendez-vous rapide, explications claires et tarif transparent. J'ai pu bénéficier d'un véhicule de courtoisie très propre. Je recommande le Garage Mecapro les yeux fermés.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
      }
    ]
  },

  // Formulaire de rendez-vous
  bookingForm: {
    tag: "PRISE DE RENDEZ-VOUS",
    title: "Prendre Rendez-vous à l'Atelier",
    subtitle: "Remplissez le formulaire ci-dessous ou échangez directement avec nous sur WhatsApp",
    labels: {
      fullName: "Nom complet",
      phone: "Téléphone",
      vehicle: "Véhicule (Marque, Modèle)",
      plate: "Plaque d'immatriculation (facultatif)",
      service: "Prestation souhaitée",
      date: "Date souhaitée",
      time: "Créneau horaire",
      loanCar: "Besoin d'un véhicule de prêt gratuit",
      message: "Description du problème ou symptômes observés",
      submit: "Envoyer ma demande de RDV",
      submitWhatsApp: "Envoyer via WhatsApp",
      successTitle: "Demande bien reçue !",
      successText: "L'équipe du Garage Mecapro vous recontacte rapidement pour valider la date et le créneau.",
      urgentText: "Pour une urgence le jour même, appelez l'atelier au"
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
    title: "Nous Trouver à Mazamet",
    subtitle: "Atelier situé au 16 Rue des Arts, 81200 Mazamet • Stationnement disponible",
    addressTitle: "Adresse de l'Atelier",
    phoneTitle: "Téléphone Direct",
    hoursTitle: "Horaires d'Ouverture",
    directionsBtn: "Ouvrir dans Google Maps",
    callBtn: "Appeler l'atelier"
  },

  // Footer
  footer: {
    description: "Garage indépendant au 16 Rue des Arts à Mazamet. Recherche de la vraie panne, véhicule de courtoisie gratuit et réactivité garantie.",
    quickLinksTitle: "Navigation",
    servicesTitle: "Prestations",
    contactTitle: "Atelier Mazamet",
    hoursTitle: "Disponibilité",
    copyright: "© " + new Date().getFullYear() + " Garage Mecapro. Tous droits réservés.",
    quote: "Des réparations justes, un vrai pro."
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
