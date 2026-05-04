import Header from "./components/Header/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./components/Footer/Footer";
import { usePortfolioMode } from "./hooks/usePortfolioMode";
import "./App.css";

export default function App() {
  const mode = usePortfolioMode();

  return (
    <>
      <Header />
      <main>
        <Hero mode={mode} />
        
        {/* INVERSION DE L'ORDRE DES PROJETS SELON LE MODE */}
        {mode === 'dev' ? (
          <>
            {/* MODE DEV : projets dev en premier */}
            <Projects mode={mode} showDevFirst />
            <About mode={mode} />
            <Experience mode={mode} />
          </>
        ) : (
          <>
            {/* MODE TECH : projets infra/système en premier */}
            <Projects mode={mode} showDevFirst={false} />
            <About mode={mode} />
            <Experience mode={mode} />
          </>
        )}
        
        <Contact />
      </main>
      <Footer />
    </>
  );
}