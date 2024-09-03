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

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    window.addEventListener("load", handleLoad);

    const maxTimeout = setTimeout(handleLoad, 10000);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("DOMContentLoaded", handleLoad);
      clearTimeout(maxTimeout);
    };
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
