import dynamic from "next/dynamic";
import HeroSection from "@/Components/Hero/HeroSection";

import Facts from "@/Components/Facts/Facts";
import { SkillsSection } from "@/container/Skills/SkillSection";
import { ResumeSection } from "@/Components/Resume/ResumeSection";
import { Work } from "@/container/work/Work";
import { Certifications } from "@/container/Certifications/Certifications";
import { Footer } from "@/container/footer/Footer";

const AboutSection = dynamic(() => import("@/container/About/AboutSection"));

// The page is now an async function
export default async function Home() {
  return (
    <>
      {/* Pass the server-fetched data as a prop to the client component */}
      <HeroSection />
      <main id="main" className="app">
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
