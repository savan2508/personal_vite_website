import HeroSection from "./Components/Hero/HeroSection.jsx";
import AboutSection from "./container/About/AboutSection.jsx";
import Facts from "./Components/Facts/Facts.jsx";
import { ResumeSection } from "./Components/Resume/ResumeSection.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Work } from "./container/work/Work.jsx";
import { Footer } from "./container/footer/Footer.jsx";
import "./App.scss";
import { SkillsSection } from "./container/Skills/SkillSection.jsx";
import { Certifications } from "./container/Certifications/Certifications.jsx";

function App() {
  return (
    <>
      <HeroSection />
      <main id="main" className="app">
        <Navbar />
        <AboutSection />
        <Facts />
        <SkillsSection />
        <ResumeSection />
        <Work />
        <Certifications />
        <Footer />
      </main>
    </>
  );
}

export default App;
