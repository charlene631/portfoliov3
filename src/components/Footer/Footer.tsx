import "./Footer.css";
import { useEffect, useState } from "react";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="footer flex justify-between items-center">
      <p>&copy; {new Date().getFullYear()} Charlène Gausset. Tous droits réservés.</p>
      <button id="backToTop" onClick={scrollToTop} style={{ opacity: visible ? 1 : 0 }}>
        ↑
      </button>
    </footer>
  );
}

