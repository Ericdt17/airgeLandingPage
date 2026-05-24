/**
 * Page Sécurité — AIRGÉ.
 * Route SPA : aligner `legalSecurityPath` avec `App.jsx`.
 */

export const legalSecurityPath = "/legal/securite";

export const securityPageTitle = "Sécurité";

export const securityPageUpdated = "Dernière mise à jour : avril 2026";

export const securityPageIntro =
    "Cette page décrit les mesures que nous mettons en place pour protéger votre compte, vos données et l’usage de l’outil IA sur AIRGÉ. Elle complète notre politique de confidentialité.";

export const securityContactIntro =
    "Pour toute question de sécurité ou pour signaler un abus, contactez-nous par email :";

/** Conservé pour la page Contact (legacy) — laisser vide si non utilisé */
export const securityAgencyPhone = "";

export const securityGroups = [
    {
        groupTitle: "Compte & authentification",
        articles: [
            {
                art: 1,
                title: "Protection du compte",
                paragraphs: [
                    "Utilisez un mot de passe robuste et unique. Ne partagez pas vos identifiants. En cas de suspicion d’accès non autorisé, changez votre mot de passe et nous prévenez sans délai.",
                ],
            },
            {
                art: 2,
                title: "Accès limité",
                paragraphs: [
                    "L’accès aux données et aux outils d’administration est réservé au personnel autorisé, selon le principe du moindre privilège.",
                ],
            },
        ],
    },
    {
        groupTitle: "Données & hébergement",
        articles: [
            {
                art: 3,
                title: "Protection des données",
                paragraphs: [
                    "Nous appliquons des mesures techniques et organisationnelles pour protéger vos données (chiffrement en transit lorsque applicable, contrôles d’accès, sauvegardes).",
                    "Les données sont hébergées chez des prestataires sélectionnés pour leur fiabilité, sous engagements de confidentialité.",
                ],
            },
            {
                art: 4,
                title: "Données sensibles",
                paragraphs: [
                    "Ne transmettez pas via le service des informations que vous ne souhaitez pas voir traitées (mots de passe tiers, données bancaires complètes, etc.).",
                ],
            },
        ],
    },
    {
        groupTitle: "Outil IA",
        articles: [
            {
                art: 5,
                title: "Traitement par l’IA",
                paragraphs: [
                    "Les contenus que vous soumettez pour analyse ou génération d’idées sont traités uniquement pour fournir le service. Ils ne sont pas vendus à des tiers.",
                    "Nous pouvons utiliser des prestataires d’IA sous contrat, avec des règles strictes de confidentialité.",
                ],
                highlightLine:
                    "Tu restes responsable de ce que tu publies : l’IA t’aide à réfléchir, pas à contourner les règles des plateformes.",
            },
        ],
    },
    {
        groupTitle: "Signalement",
        articles: [
            {
                art: 6,
                title: "Abus et contenus inappropriés",
                paragraphs: [
                    "Si vous constatez un usage frauduleux du service, un compte compromis ou un contenu illicite lié à AIRGÉ, signalez-le par email. Nous examinerons chaque signalement dans un délai raisonnable.",
                ],
            },
        ],
    },
];
