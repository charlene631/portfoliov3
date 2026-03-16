import { FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <h2>Contact</h2>
      <a href="https://www.linkedin.com/in/charlène-gausset-113380b5/" target="_blank" rel="noopener noreferrer" aria-label="Profil LinkedIn" className="contact-link"><FaLinkedinIn /></a>
    </section>
  );
}
