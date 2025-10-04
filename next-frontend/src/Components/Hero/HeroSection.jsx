"use client"; // Keep this as a client component for now because of the background changer

import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import BackgroundVideo from "next-video/background-video";
import { useRandomBackground } from "@/hooks/useRandomBackground";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ProfileContext } from "@/context/ProfileContext";

import "./HeroSection.style.css";
const HeroSection = () => {
  const { hero } = useContext(ProfileContext);

  const heroData = hero[0];

  if (!heroData) {
    return null;
  }

  console.log(heroData);

  const { currentBackground, changeBackground } = useRandomBackground();
  const [showChangeBackground, setShowChangeBackground] = useState(true);

  // Check if the screen is large enough for the sidebar padding to apply
  const isLargeScreen = useMediaQuery("(min-width: 992px)");

  const isVideo = currentBackground?.type === "video";
  const isImage = currentBackground?.type === "image";

  useEffect(() => {
    // Initialize AOS on the client
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      setShowChangeBackground(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Extracted hero content to avoid duplication
  const HeroContent = (
    <div
      className="container"
      id="hometext"
      data-aos="zoom-in"
      data-aos-delay="200"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        width: isLargeScreen ? "calc(100% - 160px)" : "100%",
        padding: "0 15px",
      }}
    >
      <div
        id="herotextbox"
        style={{ justifyContent: "left", width: "100%", paddingLeft: "5rem" }}
      >
        <h1>{heroData?.name}</h1>
        <p style={{ whiteSpace: "nowrap" }}>
          I'm
          <span> </span>
          <ReactTyped
            strings={heroData?.titles || ["Software Engineer"]}
            typeSpeed={100}
            backSpeed={50}
            backDelay={2000}
            loop
            className="typed"
          />
        </p>
        <div className="hero-social-links">
          <a
            href={heroData?.github}
            className="github"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href={heroData?.linkedin}
            className="linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href={`mailto:${heroData?.email}`} className="bi-envelope">
            <i className="bx"></i>
          </a>
        </div>
        <a href="#about" id="home-explore">
          Explore
        </a>
      </div>
    </div>
  );

  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center"
      style={{ position: "relative" }}
    >
      <div className="hero-background">
        {isImage && currentBackground.source && (
          <Image
            src={currentBackground.source}
            alt="Hero background"
            fill
            objectFit="cover" // This will maintain aspect ratio and prevent distortion
            priority // Preload the image since it's in the hero section
          />
        )}
        {isVideo && currentBackground.source && (
          <BackgroundVideo
            src={currentBackground.source}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            id="hero-background-video"
            style={{
              objectFit: "cover",
              position: "inherit",
              aspectRatio: "auto",
              width: "100%",
              height: "100%",
            }}
          />
        )}
      </div>
      {HeroContent}
      {showChangeBackground ? (
        <div id="background-btn">
          <button className="btn btn-primary" onClick={changeBackground}>
            Change Background
          </button>
        </div>
      ) : (
        <div
          className={`back-to-top d-flex align-items-center justify-content-center active 
            `}
          onClick={scrollToTop}
        >
          <i className="bi bi-arrow-up-short"></i>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
