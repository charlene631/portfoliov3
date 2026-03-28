import "./Experience.css";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <h2>Parcours</h2>

      <div className="experience-container">
        <div className="experience-block">
          <h3>Comprendre l'humain</h3>
          <p>
            Mon parcours a commencé dans le domaine de la santé, en
            radiothérapie puis en psychiatrie, dans des environnements où la
            rigueur, l’écoute et la gestion de situations complexes sont
            essentielles.
          </p>
          <p>
            Durant 10 ans, j’y ai développé une attention fine aux
            comportements, aux émotions et aux besoins réels des personnes.
          </p>
        </div>

        <div className="experience-block">
          <h3>Univers artistique & musique</h3>
          <p>
            En parallèle de ma transition vers le développement web, durant 4 ans, j’ai accompagné des artistes dans leurs projets
            musicaux : coaching vocal, travail sur l’image, identité de marque
            et communication digitale.
          </p>
          <p>
            Ces expériences m’ont permis de structurer des projets créatifs et
            de transformer des intentions en réalisations concrètes, notamment à
            travers l’organisation de clips, la coordination et la communication
            digitale.
          </p>
        </div>

        <div className="experience-block">
          <h3>Vers le développement</h3>
          <p>
            Ce parcours pluridisciplinaire m’a naturellement conduite vers le
            développement web, avec l’envie de créer des outils utiles, clairs
            et fiables.
          </p>
          <p>
            Aujourd’hui, je conçois des applications full stack en combinant
            exigence technique, compréhension des usages et attention portée à
            l’expérience utilisateur.
          </p>
        </div>
      </div>
    </section>
  );
}
