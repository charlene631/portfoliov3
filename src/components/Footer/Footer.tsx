import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer flex justify-between items-center">
      <p>&copy; {new Date().getFullYear()} Charlène Gausset. Tous droits réservés.</p>
    </footer>
  );
}
