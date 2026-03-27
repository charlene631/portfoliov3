import "./About.css";

export default function About() {
  return (
    <section className="section" id="about">
      <h2>À propos de moi</h2>
      <p>Mon parcours m’a amenée à évoluer dans des environnements exigeants, où la rigueur, l’écoute et la gestion de situations complexes sont essentielles.
      </p>
      <p>Je développe des applications web full stack avec React et Node.js, en portant une attention particulière à la clarté des interfaces, à la sécurité et à l’expérience utilisateur.</p> 
      <p>J’analyse le code en profondeur, j’implémente des tests et j’intègre des pratiques de sécurité dès la conception pour garantir des applications fiables.</p>
      <p>J’utilise également l’intelligence artificielle comme un levier de productivité, tout en gardant un rôle critique sur le code produit.</p>
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
