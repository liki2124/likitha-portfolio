import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
export default function Home() {
  return (
    <main
  id="top"
  className="min-h-screen bg-[#08111F] text-[#F1F5F9]"
    >
      {/* Navigation */}
      <Navbar />
      {/* Hero */}
       {/* Hero */}
      <Hero />
      <Highlights />
      {/* About */}
      <About />
      {/* Skills */}
      <Skills />
      {/* Projects */}
      <Projects />
      {/* Experience */}
      <Experience />
      {/* Education */}
      {/* Education */}
      <Education />

      {/* Contact */}
      {/* Contact */}
       <Contact />
      {/* Footer */}
      {/* Footer */}
      <Footer />
    </main>
  );
}