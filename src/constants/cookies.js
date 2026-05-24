/**
 * Politique cookies — site marketing AIRGÉ.
 */

export const legalCookiesPath = "/legal/cookies";

export const cookiesPageTitle = "Politique cookies";

export const cookiesPageUpdated = "Dernière mise à jour : avril 2026";

export const cookiesPageIntro =
    "Cette page décrit comment le site AIRGÉ (video-story.com) utilise les cookies et comment vous pouvez gérer vos préférences.";

export const cookiesContactIntro =
    "Pour toute question sur cette politique, contactez-nous par email :";

export const cookieRecapColumnLabels = {
    type: "Type",
    name: "Nom",
    role: "Rôle",
    duration: "Durée",
    active: "Actif",
};

export const cookieRecapRows = [
    {
        type: "Technique",
        name: "session / auth",
        role: "Maintenir la session de navigation sur le site",
        duration: "Fin de session",
        active: "Oui",
    },
    {
        type: "Préférence",
        name: "prefs",
        role: "Mémoriser des choix d’affichage (si applicable)",
        duration: "12 mois",
        active: "Oui",
    },
    {
        type: "Analytics",
        name: "_ga / _gid",
        role: "Mesure d’audience anonymisée (si activée)",
        duration: "2 ans / 24h",
        active: "Optionnel",
    },
    {
        type: "Publicitaire",
        name: "—",
        role: "Ciblage ou revente de données",
        duration: "—",
        active: "Non utilisé",
    },
];

export const cookieBrowserHints = [
    {
        browser: "Chrome",
        steps: "Paramètres → Confidentialité et sécurité → Cookies",
    },
    {
        browser: "Firefox",
        steps: "Paramètres → Vie privée et sécurité → Cookies",
    },
    {
        browser: "Safari",
        steps: "Préférences → Confidentialité → Cookies",
    },
    {
        browser: "Edge",
        steps: "Paramètres → Confidentialité, recherche et services → Cookies",
    },
];

export const cookieGroups = [
    {
        groupTitle: "Qu'est-ce qu'un cookie",
        articles: [
            {
                art: 1,
                title: "Définition",
                paragraphs: [
                    "Un cookie est un petit fichier texte déposé sur votre appareil lorsque vous visitez un site. Il permet de mémoriser certaines informations entre deux visites. Les cookies ne contiennent pas de virus et ne peuvent pas accéder à vos fichiers personnels.",
                ],
            },
        ],
    },
    {
        groupTitle: "Cookies utilisés sur ce site",
        articles: [
            {
                art: 2,
                title: "Récapitulatif des cookies",
                paragraphs: [
                    "Le site marketing AIRGÉ utilise des cookies strictement nécessaires et, le cas échéant, des cookies de mesure d’audience avec votre consentement. Aucun cookie publicitaire ou de profilage n’est déposé.",
                ],
                showCookieTable: true,
            },
            {
                art: 3,
                title: "Cookies techniques (obligatoires)",
                paragraphs: [
                    "Ces cookies sont indispensables au fonctionnement du site (navigation, sécurité de session). Ils ne peuvent pas être désactivés sans altérer votre expérience.",
                ],
            },
            {
                art: 4,
                title: "Cookies analytics (optionnels)",
                paragraphs: [
                    "S’ils sont activés, ces cookies permettent de mesurer le trafic de façon agrégée pour améliorer le site. Aucune revente de données à des fins publicitaires.",
                ],
            },
        ],
    },
    {
        groupTitle: "Vos droits & gestion",
        articles: [
            {
                art: 5,
                title: "Gérer vos préférences",
                paragraphs: [
                    "Vous pouvez modifier vos préférences depuis les paramètres de votre navigateur :",
                ],
                showBrowserHints: true,
            },
            {
                art: 6,
                title: "Désactivation & conséquences",
                paragraphs: [
                    "La désactivation des cookies techniques peut limiter certaines fonctions du site. La désactivation des cookies analytics n’affecte en général pas la navigation.",
                ],
            },
            {
                art: 7,
                title: "Mise à jour de cette politique",
                paragraphs: [
                    "Cette politique peut être mise à jour pour refléter l’évolution du site ou de la réglementation. La date en tête de page indique la dernière révision.",
                ],
            },
        ],
    },
];
