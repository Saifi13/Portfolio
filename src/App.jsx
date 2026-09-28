import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Ticker from "./sections/Ticker.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Services from "./sections/Services.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  return (
    <>
      <div className="bg-ambient" />
      <div className="bg-grain" />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
