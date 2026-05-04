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
        
            <Projects mode={mode} />
            <About mode={mode} />
            <Experience mode={mode} />
      
            <About mode={mode} />
            <Experience mode={mode} />
        
        <Contact />
      </main>
      <Footer />
    </>
  );
}