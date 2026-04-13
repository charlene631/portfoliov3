import useDarkMode from "../../hooks/useDarkMode";
import "./Header.css";

export default function Header() {
  const [theme, setTheme] = useDarkMode();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="header flex justify-between items-center">
      <nav className="header-nav flex flex-wrap items-center gap-4">
        <a href="#about">À propos</a>
        <a href="#experience">Parcours</a>
        <a href="#technical-projects">Infrastructure</a>
        <a href="#projects">Projets</a>        
        <a href="#contact">Contact</a>
      </nav>
      <button onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </header>
  );
}
