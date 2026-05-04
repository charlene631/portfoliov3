import type { PortfolioMode } from "../hooks/usePortfolioMode";
import "./Experience.css";

type Props = {
  readonly mode: PortfolioMode;
};

export default function Experience({ mode }: Props) {
  if (mode === 'dev') {
    return (
      <section id="experience">
        <h2>Parcours</h2>

        <div className="experience-container">
          <div className="experience-block">
            <h3>Développement web</h3>
            <p>
              Formée au développement full stack, je travaille avec Node.js, Express, TypeScript et React. 
              J'ai conçu plusieurs applications complètes intégrant authentification, gestion de données (SQL/NoSQL) et architecture sécurisée.
            </p>
            <p>
              Je porte une attention particulière à la qualité du code, à la sécurité et à l'expérience utilisateur, 
              avec une approche orientée produit et résolution de problèmes concrets.
            </p>
          </div>

          <div className="experience-block">
            <h3>Infrastructure & systèmes</h3>
            <p>
              Mon intérêt pour l'infrastructure m'a conduite à me former à l'administration système (Windows Server 2019, Active Directory, DHCP) 
              et aux réseaux (configuration LAN, routage, sécurité).
            </p>
            <p>
              Cette double compétence dev/infra me permet de comprendre l'ensemble de la chaîne technique, 
              de l'application au déploiement et à la gestion des environnements.
            </p>
          </div>

          <div className="experience-block">
            <h3>Compétences transférables</h3>
            <p>
              Mon parcours de 8 ans en soins infirmiers m'a apporté rigueur, gestion des priorités et capacité à prendre des décisions 
              dans des environnements à forte responsabilité.
            </p>
            <p>
              J'ai travaillé en radiothérapie, psychiatrie et EHPAD, où la rigueur, l'écoute et le travail en équipe étaient essentiels. 
              Ces compétences sont directement transférables au développement et à la gestion de projets techniques.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // MODE TECH
  return (
    <section id="experience">
      <h2>Parcours</h2>

      <div className="experience-container">
        <div className="experience-block">
          <h3>Transition vers la tech</h3>
          <p>
            Attirée par l'informatique, je me suis formée à l'administration système (Windows Server 2019, Active Directory, DHCP) 
            et au développement web (Node.js, React, bases de données).
          </p>
          <p>
            Cette double formation me permet de comprendre à la fois les besoins utilisateurs et les contraintes techniques, 
            ce qui est un atout dans le support et l'infrastructure.
          </p>
        </div>

        <div className="experience-block">
          <h3>Rigueur & méthodologie</h3>
          <p>
            Mon parcours de 8 ans en soins infirmiers (radiothérapie, psychiatrie, EHPAD) m'a apporté 
            rigueur, gestion des priorités et capacité à travailler sous pression.
          </p>
          <p>
            J'ai développé une forte capacité d'écoute, de diagnostic et de résolution de problèmes, 
            compétences directement transférables au support technique et à la gestion d'incidents.
          </p>
        </div>

        <div className="experience-block">
          <h3>Objectif professionnel</h3>
          <p>
            Je cherche une alternance en tant que technicienne informatique pour ancrer mes compétences techniques 
            dans un environnement professionnel réel.
          </p>
          <p>
            Mon objectif est d'évoluer vers des rôles combinant support, infrastructure et sécurité, 
            en capitalisant sur mon bagage développement et ma rigueur acquise en milieu médical.
          </p>
        </div>
      </div>
    </section>
  );
}