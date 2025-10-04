import { useEffect, useRef, useState } from "react";
import "./navbar.styles.css";
import {
  BiHome,
  BiUser,
  BiFileBlank,
  BiBookContent,
  BiEnvelope,
  BiX,
  BiMenu,
} from "react-icons/bi";

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    // Function to detect clicks outside the navbar
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuVisible(false);
        document.body.classList.remove("mobile-nav-active");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  useEffect(() => {
    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    // Navbar links active state on scroll
    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      let navbarlinks = document.querySelectorAll(".scrollto");

      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };

    window.addEventListener("load", navbarlinksActive);
    onscroll(document, navbarlinksActive);
  }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);

    // Get the body element
    let body = document.querySelector("body");

    // Toggle the mobile-nav-active class
    if (body) {
      body.classList.toggle("mobile-nav-active");
    }
  };

  const scrollto = (el) => {
    let elementPos = document.querySelector(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: "smooth",
    });
  };

  const handleNavItemClick = (e) => {
    if (e.target.classList.contains("scrollto")) {
      e.preventDefault();
      let body = document.querySelector("body");
      if (body.classList.contains("mobile-nav-active")) {
        body.classList.remove("mobile-nav-active");
      }
      scrollto(e.target.hash);
      setMobileMenuVisible(false);
    }
  };

  return (
    <>
      <i className={`mobile-nav-toggle d-lg-none`} onClick={toggleMobileMenu}>
        {mobileMenuVisible ? <BiX /> : <BiMenu />}
      </i>
      <header className="d-flex flex-column justify-content-center" id="header">
        <nav
          className={`nav-menu ${
            mobileMenuVisible ? "mobile-menu-visible" : ""
          }`}
          id="navbar"
          onClick={handleNavItemClick}
          ref={navRef}
        >
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                <i>
                  <BiHome />
                </i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                <i>
                  <BiUser />
                </i>{" "}
                <span>About</span>
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#resume">
                <i>
                  <BiFileBlank />
                </i>{" "}
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#portfolio">
                <i>
                  <BiBookContent />
                </i>{" "}
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                <i>
                  <BiEnvelope />
                </i>{" "}
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
