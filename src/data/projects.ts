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
        description: "Application web d'expression intime inspirée du concept de bouteille à la mer.",
        context: "Projet de fin d'études en développement web validé avec félicitations du jury.",
        role: "Conception et développement full-stack de l'application.",
        techs: ["React", "Node.js", "Express", "MongoDB", "CSS"],
        liveUrl: "https://ecrirealamer-front.onrender.com",
        repoUrl: "Code privé - consultable sur demande"
    },
   {
    title: "E-commerce TypeScript",
    description: "Reprise et migration d’un projet e-commerce de groupe vers TypeScript.",
    context: "Projet repris pour s’entraîner et créer une base backend maintenable.",
    role: "Migration backend vers TypeScript, restructuration du code et logique métier.",
    techs: ["Node.js", "Express", "TypeScript", "MariaDB"],
    repoUrl: "API backend – non déployée"
  },
  {
    title: "Accessiweb",
    description: "Projet collaboratif réalisé en hackathon de 4 jours sur l’accessibilité web.",
    context: "Projet présenté devant une quarantaine de participants en ligne.",
    role: "Participation au backend et structuration des fonctionnalités, reprise pour améliorer l’accessibilité.",
    techs: ["Node.js", "Express", "Base de données"],
  }
];