import useDarkMode from "../../hooks/useDarkMode";
import "./Header.css";

export default function Header() {
  const [theme, setTheme] = useDarkMode();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="header flex justify-between items-center">
      <nav className="space-x-6">
        <a href="#projects">Projets</a>
        <a href="#about">À propos</a>
        <a href="#contact">Contact</a>
      </nav>
      <button onClick={toggleTheme} aria-label="Toggle theme">
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </header>
  );
}
