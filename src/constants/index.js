import { instagram, twitter } from "../assets/icons";
import {
    ecosystemAgent,
    ecosystemClient,
    ecosystemDriver,
} from "../assets/images";

export const navLinks = [
    { href: "#probleme", label: "Problème" },
    { href: "#solution", label: "Solution" },
    { href: "#fonctionnalites", label: "Fonctionnalités" },
    { href: "#impact", label: "Impact" },
    { href: "#tarifs", label: "Tarifs" },
];

export const trustedByEyebrow = "Partenaires de confiance au Cameroun";

export const trustedByPartners = [
    "ONGOLA EXPRESS",
    "KAMER DELIVERY",
    "YAOUNDÉ HUB",
    "MVAN TRANSPORT",
    "BASTOS COURIER",
];

export const problemEyebrow = "Le défi logistique";

export const problemHeadline =
    "Vous gérez encore vos livraisons manuellement ?";

/** iconId maps to @heroicons/react/24/outline in LeProbleme.jsx */
export const problemPoints = [
    {
        iconId: "exclamation",
        title: "Erreurs de saisie humaine",
        description:
            "Fini les erreurs de coordonnées et les colis perdus à cause d'une mauvaise lecture.",
    },
    {
        iconId: "eye-slash",
        title: "Manque de visibilité en temps réel",
        description:
            "Arrêtez de deviner où se trouvent vos livreurs et vos colis à chaque instant.",
    },
    {
        iconId: "clock",
        title: "Perte de temps administrative",
        description:
            "Libérez vos équipes des appels incessants et de la paperasse manuelle fastidieuse.",
    },
    {
        iconId: "trending-down",
        title: "Difficulté à scaler",
        description:
            "Ne soyez plus limité par vos processus manuels lorsque votre volume augmente.",
    },
];

export const ecosystemEyebrow = "L'Écosystème LivSight";

export const ecosystemHeadline = "Une Solution, Trois Expériences";

export const ecosystemShowcases = [
    {
        image: ecosystemClient,
        title: "Pour les Clients",
        description:
            "Créez vos demandes en 2 clics et suivez-les en temps réel sur une interface élégante.",
    },
    {
        image: ecosystemAgent,
        title: "Pour les Agents",
        description:
            "Gérez les flux, assignez les chauffeurs et réglez les imprévus avec un tableau de bord puissant.",
    },
    {
        image: ecosystemDriver,
        title: "Pour les Livreurs",
        description:
            "Une application optimisée pour le terrain avec navigation GPS et validation instantanée.",
    },
];

export const keyMetrics = [
    {
        value: "98.4%",
        label: "Taux de succès",
        sublabel: "Satisfaction client garantie",
    },
    {
        value: "45 min",
        label: "Moyenne par livraison",
        sublabel: "Optimisation du traitement des demandes",
    },
    {
        value: "50+",
        label: "Agences partenaires",
        sublabel: "Réseau logistique national",
    },
];

export const securityEyebrow = "Sécurisation des données";

export const securityHeadline = "Votre sécurité est notre priorité absolue";

export const securityIntro =
    "Nous appliquons les standards de sécurité pour protéger vos informations sensibles et celles de vos clients.";

/** iconId maps to @heroicons/react/24/outline in SecuriteConfiance.jsx; variant "uptime" uses custom layout */
export const securityFeatures = [
    {
        iconId: "cloud",
        title: "Hébergement Cloud",
        subtitle: "Un système qui s'adapte à votre demande.",
    },
    {
        iconId: "lock",
        title: "AES-256 bits",
        subtitle: "Cryptage de bout en bout",
    },
    {
        iconId: "shield-check",
        title: "Conforme RGPD",
        subtitle: "Respect strict de la vie privée",
    },
    {
        variant: "uptime",
        label: "Disponibilité",
        title: "99.9%",
        titleLine2: "Uptime",
        subtitle: "Haute disponibilité garantie",
    },
];

export const securityCertTitle = "Certifié LivSight Secure";

export const securityCertBody =
    "Chaque transaction et donnée est scellée numériquement pour prévenir toute fraude ou fuite.";

export const testimonialEyebrow = "Témoignages";

export const testimonialHeadline = "Ce que disent nos partenaires";

export const tarifsEyebrow = "Tarifs & Plans";

export const tarifsHeadline = "Un plan adapté selon vos besoins";

export const tarifsBillingMonthly = "Mensuel";

export const tarifsBillingAnnual = "Annuel (2 mois offerts)";

export const tarifsPlanTitle = "Solution Sur-Mesure";

export const tarifsPlanBadge = "ENTERPRISE";

export const tarifsPlanDescription =
    "Un accompagnement complet et une plateforme évolutive pour les entreprises en pleine croissance. Optimisez votre logistique avec nos outils premium.";

export const tarifsPricePrefix = "À partir de";

/** Affiché lorsque la bascule est sur « Mensuel » */
export const tarifsPriceMonthly = {
    amount: "50 000 XAF",
    period: "/ mois",
};

/** Affiché lorsque la bascule est sur « Annuel » (facturation annuelle, 2 mois offerts) */
export const tarifsPriceAnnual = {
    amount: "500 000 XAF",
    period: "/ an",
    subline: "Soit l'équivalent de ~41 667 XAF / mois",
};

export const tarifsFeaturesLeft = [
    "Livraisons illimitées",
    "Dashboard Agent Complet",
    "Support 24/7 dédié",
];

export const tarifsFeaturesRight = [
    "API & Intégrations CRM",
    "Gestion de Stock intégrée",
    "Rapports automatiques",
];

export const tarifsCtaPrimary = "Démarrer avec LivSight";

export const tarifsCtaSecondary = "Contacter un expert";

/** Lien « Contacter un expert » — à ajuster au mail LivSight réel */
export const tarifsCtaSecondaryHref = "mailto:contact@livsight.com";

export const faqHeading = "Questions Fréquentes";

export const faqSubheading = "Tout ce que vous devez savoir pour commencer.";

export const faqItems = [
    {
        question:
            "Comment LivSight assure-t-il la sécurité des données ?",
        answer:
            "Vos données sont chiffrées en transit et au repos (normes AES-256), hébergées sur une infrastructure cloud sécurisée et traitées conformément au RGPD. Les accès sont journalisés et limités par rôle pour réduire les risques.",
    },
    {
        question: "Puis-je intégrer LivSight à mon système existant ?",
        answer:
            "Oui. LivSight propose des API et des connecteurs pour lier votre ERP, votre CRM ou vos outils métier. Notre équipe peut vous accompagner pour définir les flux (webhooks, imports automatisés) adaptés à votre stack.",
    },
    {
        question: "Est-ce que l'application fonctionne hors-ligne ?",
        answer:
            "L'application livreur conserve les informations essentielles en local pour les zones à faible couverture : la synchronisation reprend automatiquement dès le retour du réseau. Les interfaces agent et client nécessitent une connexion pour garantir des données à jour.",
    },
    {
        question: "Combien de temps prend la mise en place ?",
        answer:
            "Une première mise en production est souvent possible en quelques semaines selon la taille de votre équipe et le périmètre (formation, imports, intégrations). Un plan de déploiement détaillé vous est proposé après un court diagnostic.",
    },
    {
        question: "Quels types de supports proposez-vous ?",
        answer:
            "Documentation en ligne, assistance par e-mail et chat pour tous les plans ; pour les offres Enterprise, un support prioritaire avec canal dédié et temps de réponse garanti. Des sessions de formation à la prise en main peuvent être ajoutées sur demande.",
    },
];

export const ctaFinalHeading = "Prêt à transformer votre logistique ?";

export const ctaFinalSubheading =
    "Rejoignez la révolution de la livraison au Cameroun. Démarrage instantané, sans engagement de longue durée.";

export const ctaFinalPrimaryLabel = "Essayer Gratuitement";

export const ctaFinalSecondaryLabel = "Contacter un Expert";

/** Même contact que l’offre Tarifs — centraliser ici pour le CTA final */
export const ctaFinalSecondaryHref = "mailto:contact@livsight.com";

export const partnerTestimonials = [
    {
        quote:
            "Depuis qu'on utilise LivSight, nos pertes de colis ont chuté de 95%. La traçabilité est exemplaire.",
        name: "Matthieu Wafo",
        role: "DG, Ongola Express",
        rating: 5,
    },
    {
        quote:
            "L'interface agent est si simple que mon équipe a appris à l'utiliser en moins d'une heure. Impressionnant.",
        name: "Sarah Bidjang",
        role: "Opérations, Kamer Delivery",
        rating: 5,
    },
    {
        quote:
            "Le ROI a été immédiat. Nous gérons 2 fois plus de livraisons avec le même nombre de livreurs.",
        name: "Marc Kameni",
        role: "Fondateur, Yaoundé Hub",
        rating: 5,
    },
];

/**
 * Footer — Figma §16 (LivSight).
 *
 * All `href` values below are intentional placeholders for future pages or URLs.
 * Replace them here when routes, CMS pages, or external profiles exist (e.g. React Router paths,
 * marketing site slugs, or `https://…` links). This SPA ships without a router: direct visits to
 * these paths may 404 until your host is configured for SPA fallback or pages are added.
 */
export const footerTagline =
    "La plateforme de livraison nouvelle génération pour les entreprises modernes au Cameroun.";

export const footerCopyright =
    "© 2026 LivSight - Gestion des Livraisons. Tous droits réservés.";

export const footerColumns = [
    {
        title: "Plateforme",
        links: [
            { label: "Solution Client", href: "/plateforme/solution-client" },
            { label: "Portail Agent", href: "/plateforme/portail-agent" },
            { label: "App Chauffeur", href: "/plateforme/app-chauffeur" },
            { label: "Intégrations API", href: "/plateforme/integrations-api" },
        ],
    },
    {
        title: "Entreprise",
        links: [
            { label: "À Propos", href: "/entreprise/a-propos" },
            { label: "Blog", href: "/entreprise/blog" },
            { label: "Recrutement", href: "/entreprise/recrutement" },
            { label: "Contact", href: "/entreprise/contact" },
        ],
    },
    {
        title: "Légal",
        links: [
            { label: "Confidentialité", href: "/legal/confidentialite" },
            { label: "Conditions", href: "/legal/conditions" },
            { label: "Sécurité", href: "/legal/securite" },
            { label: "Cookies", href: "/legal/cookies" },
        ],
    },
];

/**
 * Social icons — replace `href` with real profile URLs when available.
 */
export const footerSocialLinks = [
    {
        href: "https://twitter.com/",
        label: "LivSight sur X",
        icon: twitter,
    },
    {
        href: "https://www.instagram.com/",
        label: "LivSight sur Instagram",
        icon: instagram,
    },
];

/**
 * Locale labels — wire to i18n or locale routes when product supports multiple languages.
 * `href` can become `/en/`, `/es/`, or query-based locale switching.
 */
export const footerLocales = [
    { code: "fr", label: "FR", href: "/", active: true },
    { code: "en", label: "EN", href: "/en/", active: false },
    { code: "es", label: "ES", href: "/es/", active: false },
];
