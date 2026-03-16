export type Project = {
    title : string;
    description : string;
    context: string;
    role: string;
    techs: string[];
    liveUrl?: string;
    repoUrl?: string;
};

export const projects: Project[] = [
    {
        title: "Écrire à la mer",
        description: "Application web d'expression intime inspirée du concept de bouteille à la mer. Flux authentification, gestion des rôles, sécurité, CRUD complet, base de données cloud, déploiement. Implémentation de fonctionnalités spécifiques au projet orienté user-friendly, tests Postman et user. ",
        context: "Projet de fin d'études en développement web validé avec félicitations du jury.",
        role: "Conception et développement full-stack de l'application.",
        techs: ["Node.js", "Express", "MongoDB", "React", "CSS"],
        liveUrl: "https://ecrirealamer-front.onrender.com",
    },
   {
    title: "E-commerce TypeScript",
    description: "API REST, gestion panier, commandes et Stripe. Le travail de reprise a notamment porté sur la migration de la base de données alwaysdata vers MariaDB, la prise en main et la réorganisation du backend, la migration, la compréhension, la clarification et la configuration globale du projet.",
    context: "Projet repris pour créer une base backend maintenable.",
    role: "Migration backend, restructuration du code et logique métier.",
    techs: ["Node.js", "Express", "TypeScript", "MariaDB", "Stripe", "Docker"],
    repoUrl: "https://github.com/charlene631/ecommerce"
  },
  {
    title: "Accessiweb",
    description: "Projet d'origine collaboratif réalisé en hackathon de 4 jours sur l’accessibilité web. Reprise de ce projet pour améliorer l’architecture et les fonctionnalités. Plateforme web permettant de consulter et gérer une bibliothèque, avec un système d’authentification sécurisé et gestion des rôles.",
    context: "Projet présenté devant une quarantaine de participants en ligne.",
    role: "Participation au backend et structuration des fonctionnalités, reprise pour améliorer l’architecture.",
    techs: ["Node.js", "Express", "Base de données", "React"],
    repoUrl: "https://github.com/charlene631/accessiweb"
  }
];