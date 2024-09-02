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
import { useEffect, useState } from "react";
import { Loader } from "./Components/Loader/Loader.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  console.log(loading);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    window.addEventListener("load", handleLoad);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
