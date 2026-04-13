import "./About.css";

export default function About() {
  return (
    <section className="section" id="about">
      <h2>À propos de moi</h2>
      <p>Attirée par le numérique et l'informatique, je me suis très récemment formée à l’administration système sous Windows Server 2019. Ce projet m’a permis de développer des compétences clés en gestion d’infrastructure, que je souhaite mettre en pratique dans le cadre d’une alternance en tant que technicienne informatique.</p>
      <p>J’ai finalisé une formation de développeur en 2025, ce qui m’a apporté des bases en logique informatique, compréhension des systèmes et outils numériques. Je m’oriente aujourd’hui vers les métiers du support et des infrastructures.</p> 
      <p>Mon parcours en soins infirmiers (8 ans) m’a permis de développer rigueur, gestion des priorités et une forte expérience de la relation humaine dans des environnements exigeants.</p>
      <div className="stack">
        <img src="/icons/node.svg" alt="Node" />
        <img src="/icons/react.svg" alt="React" />
        <img src="/icons/mysql.svg" alt="MySQL" />
        <img src="/icons/mongodb.svg" alt="MongoDB" />
        <img src="/icons/typescript.png" alt="TypeScript" />
        <img src="/icons/commit-git.png" alt="Git" />
        <img src="/icons/ubuntustyle.png" alt="Ubuntu" />
        <img src="/icons/docker.svg" alt="Docker" />
        <img src="/icons/figma.png" alt="Figma" />
        <img src="/icons/shield.png" alt="Sécurité" />
        <img src="/icons/artificial-intelligence star.png" alt="Intelligence Artificielle" />
      </div>
     </section>
  );
}
