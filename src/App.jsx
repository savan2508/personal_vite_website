import HeroSection from "./Components/Hero/HeroSection.jsx";
import AboutSection from "./Components/About/AboutSection.jsx";
import Facts from "./Components/Facts/Facts.jsx";
import { SkillsSection } from "./Components/Skills/Skills.jsx";
import { ResumeSection } from "./Components/Resume/ResumeSection.jsx";

function App() {
  return (
    <>
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
