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
        description: "Application web d'expression intime inspirée du concept de bouteille à la mer. Flux authentification, gestion des rôles, sécurité, CRUD complet, style CSS personnalisé, base de données cloud, déploiement. Implémentation de fonctionnalités spécifiques au projet orienté user-friendly. J’ai développé une couche de simulation IA backend, testée en environnement serveur, en cours d’intégration frontend pour enrichir l’expérience utilisateur.",
        context: "Projet de fin d'étude TP Développeur Web et Web mobile, diplôme validé avec félicitations du jury.",
        role: "Conception et développement full stack de l'application avec architecture hybride.",
        techs: ["Node.js", "Express", "MongoDB", "PostgreSQL", "React", "Render", "Tests Postman"],
        liveUrl: "https://ecrirealamer-front.onrender.com",
    },
   {
    title: "E-commerce TypeScript",
    description: "API REST, gestion panier, commandes et Stripe. Le travail de reprise a notamment porté sur la migration de la base de données alwaysdata vers MariaDB, la prise en main et la réorganisation du backend, la migration en TypeScript, la compréhension, la clarification et la configuration globale du projet. Tests Postman pour valider les fonctionnalités et la stabilité de l’API.",
    context: "Projet de groupe repris indépendamment pour créer une base backend en TypeScript.",
    role: "Migration backend, restructuration du code et logique métier.",
    techs: ["Node.js", "Express", "TypeScript", "Stripe", "MariaDB", "Docker", "Tests Postman"],
    repoUrl: "https://github.com/charlene631/ecommerce"
  },
  {
    title: "Accessiweb",
    description: "Projet d'origine collaboratif réalisé en hackathon de 4 jours sur l’accessibilité web. Reprise de ce projet pour améliorer l’architecture backend. Plateforme web permettant de consulter et gérer une bibliothèque sur les normes d’accessibilité et les catégories accessibles. Prototype d'application avec un système d’authentification sécurisé et gestion des rôles et une configuration claire.",
    context: "Projet Hackathon présenté devant une quarantaine de participants en ligne.",
    role: "Participation au backend et structuration des fonctionnalités, reprise pour homogénéiser l’architecture.",
    techs: ["Node.js", "Express", "MongoDB", "React", "Render", "Vercel", "Tests Postman"],
    repoUrl: "https://github.com/charlene631/accessiweb"
  }
];