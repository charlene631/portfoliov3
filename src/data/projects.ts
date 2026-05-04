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
        description: "Application full stack d'expression intime avec authentification, gestion des rôles et CRUD complet. Architecture sécurisée, base de données cloud et interface orientée expérience utilisateur.",
        context: "Projet de fin d’étude – Développeur Web et Web Mobile (validé avec félicitations du jury)",
        role: "Développement full stack et conception de l’architecture applicative",
        techs: ["Node.js", "Express", "MongoDB", "React", "Render", "Postman"],
        liveUrl: "https://ecrirealamer-front.onrender.com",
    },
   {
    title: "Text Analysis SaaS",
    description: "Service d'analyse de documents (CV, LinkedIn) transformant du texte brut en données structurées via extraction, scoring et normalisation.",
    context: "Projet personnel full stack – orientation SaaS et architecture backend",
    role: "Conception du moteur d'analyse, API FastAPI, structuration des données et scoring personnalisé",
    techs: ["FastAPI", "Python", "NLP", "React", "Docker"],
    repoUrl: "https://github.com/charlene631/text-analysis-service"
  },
  {
    title: "Accessiweb",
    description: "Plateforme collaborative sur l’accessibilité web avec gestion de contenu et authentification sécurisée.",
    context: "Hackathon 4 jours – présentation en équipe devant participants en ligne",
    role: "Contribution backend et reprise de l’architecture pour homogénéisation",
    techs: ["Node.js", "Express", "MongoDB", "React", "Render", "Vercel", "Postman"],
    repoUrl: "https://github.com/charlene631/accessiweb"
  }
];