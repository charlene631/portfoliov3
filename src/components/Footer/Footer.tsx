import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer flex justify-between items-center">
      <p>&copy; {new Date().getFullYear()} Charlène. Tous droits réservés.</p>
      <p>
        <a href="#contact">Me contacter</a>
      </p>
    </footer>
  );
}
