import HeroSection from "./Components/Hero/HeroSection.jsx";
import AboutSection from "./Components/About/AboutSection.jsx";
import Facts from "./Components/Facts/Facts.jsx";
import { SkillsSection } from "./Components/Skills/Skills.jsx";
import { ResumeSection } from "./Components/Resume/ResumeSection.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main id="main">
        <AboutSection />
        <Facts />
        <SkillsSection />
        <ResumeSection />
      </main>
    </>
  );
}

export default App;
