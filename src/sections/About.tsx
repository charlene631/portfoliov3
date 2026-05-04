import type { PortfolioMode } from "../hooks/usePortfolioMode";
import "./About.css";

type Props = {
  readonly mode: PortfolioMode;
};

export default function About({ mode }: Props) {
  if (mode === 'dev') {
    return (
      <section id="about">
        <h2>À propos</h2>
        <p>
          Développeuse full stack spécialisée en backend, j'ai finalisé une formation de développeur web en 2025. 
          Je conçois des applications avec Node.js, Express, TypeScript et React, en portant une attention particulière à l'architecture, la sécurité et l'expérience utilisateur.
        </p>
        <p>
          Mon parcours m'a également conduite vers l'administration système (Windows Server 2019, Active Directory, DHCP), 
          ce qui me permet d'avoir une vision complète de l'infrastructure et du déploiement d'applications.
        </p>
        <p>
          Mon expérience de 8 ans en soins infirmiers m'a apporté rigueur, gestion des priorités et capacité à travailler dans des environnements exigeants.
        </p>
        
        <div className="stack">
          <img src="/icons/node.svg" alt="Node.js" />
          <img src="/icons/react.svg" alt="React" />
          <img src="/icons/typescript.png" alt="TypeScript" />
          <img src="/icons/mysql.svg" alt="MySQL" />
          <img src="/icons/mongodb.svg" alt="MongoDB" />
          <img src="/icons/docker.svg" alt="Docker" />
          <img src="/icons/commit-git.png" alt="Git" />
          <img src="/icons/ubuntustyle.png" alt="Ubuntu" />
          <img src="/icons/shield.png" alt="Sécurité" />
        </div>
      </section>
    );
  }

  // MODE TECH
  return (
    <section id="about">
      <h2>À propos</h2>
      <p>
        Attirée par l'informatique et les systèmes, je me suis récemment formée à l'administration système sous Windows Server 2019 
        (Active Directory, DHCP, gestion des utilisateurs et des groupes de sécurité). 
        Je cherche aujourd'hui à mettre ces compétences en pratique dans le cadre d'une alternance en tant que technicienne informatique.
      </p>
      <p>
        J'ai également finalisé une formation de développeur web en 2025, ce qui me donne une compréhension solide de la logique informatique, 
        des outils numériques et de la résolution de problèmes techniques.
      </p>
      <p>
        Mon parcours en soins infirmiers (8 ans) m'a permis de développer rigueur, gestion des priorités et une forte capacité à travailler en équipe dans des environnements exigeants.
      </p>
      
      <div className="stack">
        <img src="/icons/ubuntustyle.png" alt="Ubuntu" />
        <img src="/icons/docker.svg" alt="Docker" />
        <img src="/icons/shield.png" alt="Sécurité" />
        <img src="/icons/node.svg" alt="Node.js" />
        <img src="/icons/react.svg" alt="React" />
        <img src="/icons/typescript.png" alt="TypeScript" />
        <img src="/icons/mysql.svg" alt="MySQL" />
        <img src="/icons/mongodb.svg" alt="MongoDB" />
        <img src="/icons/commit-git.png" alt="Git" />
      </div>
    </section>
  );
}