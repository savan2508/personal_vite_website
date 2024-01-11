// HeroSection.js

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section id="hero" className="d-flex flex-column justify-content-center">
            <video id="background-video" autoPlay loop muted playsInline>
                <source
                    id="video-source"
                    src="./assets/video/video1.mp4"
                    type="video/mp4"
                />
                {/* Fallback content for non-supported browsers */}
                Your browser does not support the video tag.
            </video>
            <div className="container" id="hometext" data-aos="zoom-in" data-aos-delay="100">
                <h1>Savan Patel</h1>
                <p>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    I'm
                    <span
                        className="typed"
                        data-typed-items="Software Engineer, Web Developer, Project Manager, Game Designer"
                    ></span>
                </p>
                <div className="social-links">
                    <a href="https://github.com/savan2508" className="github" target="_blank" rel="noreferrer">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/savan-patel-577a6669/"
                        className="linkedin"
                        target="_blank" rel="noreferrer"
                    >
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="mailto:savanpatel4724@gmail.com" className="bi-envelope">
                        <i className="bx"></i>
                    </a>
                </div>
                <Link to="#about" id="home-explore">
                    Explore
                </Link>
            </div>
            <div id="background-btn">
                <button className="btn btn-primary">Change Background</button>
            </div>
        </section>
    );
};

export default HeroSection;
