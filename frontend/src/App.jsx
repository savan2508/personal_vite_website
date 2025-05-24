import React, { Suspense, useContext, useEffect, useState } from "react";
import "./App.scss";
import { Loader } from "./Components/Loader/Loader.jsx";
import { ProfileContext } from "./context/ProfileContext.jsx";
import Work from "./container/work/Work.jsx";

// Lazy-load components
const HeroSection = React.lazy(
  () => import("./Components/Hero/HeroSection.jsx"),
);
const AboutSection = React.lazy(
  () => import("./container/About/AboutSection.jsx"),
);
const Facts = React.lazy(() => import("./Components/Facts/Facts.jsx"));

// Lazy-load named exports with wrappers
const ResumeSection = React.lazy(() =>
  import("./Components/Resume/ResumeSection.jsx").then((module) => ({
    default: module.ResumeSection,
  })),
);
const Navbar = React.lazy(() => import("./Components/Navbar/Navbar.jsx"));
const Footer = React.lazy(() =>
  import("./container/footer/Footer.jsx").then((module) => ({
    default: module.Footer,
  })),
);
const SkillsSection = React.lazy(() =>
  import("./container/Skills/SkillSection.jsx").then((module) => ({
    default: module.SkillsSection,
  })),
);
const Certifications = React.lazy(() =>
  import("./container/Certifications/Certifications.jsx").then((module) => ({
    default: module.Certifications,
  })),
);
function App() {
  const { isLoading } = useContext(ProfileContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 100);
    };

    window.addEventListener("load", handleLoad);

    const maxTimeout = setTimeout(handleLoad, 10000);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("DOMContentLoaded", handleLoad);
      clearTimeout(maxTimeout);
    };
  }, []);

  if (loading || isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </>
  );
}

export default App;
