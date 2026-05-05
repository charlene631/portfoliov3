import type { PortfolioMode } from "../hooks/usePortfolioMode";
import "./Hero.css";

type Props = {
  readonly mode: PortfolioMode;
};

export default function Hero({ mode }: Props) {
  if (mode === 'dev') {
    return (
      <section className="hero">
        <h1>Développeuse full stack</h1>
        <h2>Backend, infrastructure & sécurité — Node.js / TypeScript / React</h2>
        <p className="hero-description">
          Spécialisée dans la conception d'applications backend robustes, avec une attention particulière portée à l'architecture, la sécurité et l'expérience utilisateur.
        </p>
      </section>
    );
  }

  // MODE TECH (par défaut)
  return (
    <section className="hero">
      <h1>Technicienne informatique en alternance</h1>
      <h2>Système, infrastructure & réseau — avec compétences en développement et appétence pour la sécurité</h2>
      <p className="hero-description">
        Je recherche une entreprise pour développer mes compétences en administration système, support utilisateur et infrastructure réseau, en m'appuyant sur mon bagage en développement.
      </p>
    </section>
  );
}