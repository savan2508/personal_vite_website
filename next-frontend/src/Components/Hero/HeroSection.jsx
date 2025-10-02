"use client"; // Keep this as a client component for now because of the background changer

import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeroSection.style.css";
import { backgrounds } from "@/data/backgrounds";
import { ReactTyped } from "react-typed";

const HeroSection = ({ heroData }) => {
  const [videoSourceLink, setVideoSourceLink] = useState(
    "./assets/video/video2.mp4",
  );
  const [heroSectionStyle, setHeroSectionStyle] = useState({});
  const [showChangeBackground, setShowChangeBackground] = useState(true);

  const videoRef = useRef(null);

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

  const changeBackground = () => {
    const randomBackground =
      backgrounds[Math.floor(Math.random() * backgrounds.length)];
    const transitionStyle = {
      transition: "background 1s ease-in, background-image 1s ease-in",
    };

    if (randomBackground.type === "video") {
      setHeroSectionStyle({
        ...transitionStyle,
        background: "none",
      });
      setVideoSourceLink(randomBackground.source);
    } else if (randomBackground.type === "image") {
      // Handle image background change
      setVideoSourceLink("");
      setHeroSectionStyle({
        ...transitionStyle,
        backgroundImage: `url(${randomBackground.source})`,
        backgroundSize: "cover",
        position: "relative",
        width: "100%",
        height: "100vh",
      });
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Video play error:", error);
        }
      });
    }
  }, [videoSourceLink]);

  useEffect(() => {
    changeBackground();
  }, []);

  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center"
      style={heroSectionStyle}
    >
      <video
        id="hero-background-video"
        autoPlay
        loop
        muted
        playsInline
        ref={videoRef}
      >
        <source id="video-source" src={videoSourceLink} type="video/mp4" />
        {/* Fallback content for non-supported browsers */}
        Your browser does not support the video tag.
      </video>
      <div
        className="container"
        id="hometext"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div id="herotextbox" style={{ justifyContent: "left" }}>
          <h1>{heroData?.name}</h1>
          <p>
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
