import "./About.css";

export default function About() {
  return (
    <section className="section" id="about">
      <h2>À propos de moi</h2>
      <p>Je développe des applications web full stack avec React et Node.js, en portant une attention particulière à la clarté des interfaces, à la sécurité et à l’expérience utilisateur.</p>
      <div className="stack">
  <img src="/icons/react.svg" alt="React" />
  <img src="/icons/node.svg" alt="Node" />
  <img src="/icons/mysql.svg" alt="MySQL" />
  <img src="/icons/javascript.svg" alt="JavaScript" />
  <img src="/icons/git.svg" alt="Git" />
  <img src="/icons/postman.svg" alt="Postman" />
  <img src="/icons/ubuntu.svg" alt="Ubuntu" />
</div>
    </section>
  );
}
