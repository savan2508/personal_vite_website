import { useEffect, useState } from "react";

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  // const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Easy on scroll event listener
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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowBackToTop(window.scrollY > 0);
  //   };
  //
  //   window.addEventListener("scroll", handleScroll);
  //
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  //
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  const handleNavItemClick = (e) => {
    if (e.target.classList.contains("scrollto")) {
      e.preventDefault();
      let body = document.querySelector("body");
      if (body.classList.contains("mobile-nav-active")) {
        body.classList.remove("mobile-nav-active");
        let navbarToggle = document.querySelector(".mobile-nav-toggle");
        navbarToggle.classList.toggle("bi-list");
        navbarToggle.classList.toggle("bi-x");
      }
      scrollto(e.target.hash);
    }
  };

  return (
    <header className="d-flex flex-column justify-content-center" id="header">
      <i
        className={`bi mobile-nav-toggle d-lg-none ${
          mobileMenuVisible ? "bi-x" : "bi-list"
        }`}
        onClick={toggleMobileMenu}
      ></i>
      <nav
        className={`navbar nav-menu ${
          mobileMenuVisible ? "mobile-menu-visible" : ""
        }`}
        id="navbar"
        onClick={handleNavItemClick}
      >
        <ul>
          <li>
            <a className="nav-link scrollto active" href="#hero">
              <i className="bx bx-home"></i> <span>Home</span>
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#about">
              <i className="bx bx-user"></i> <span>About</span>
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#resume">
              <i className="bx bx-file-blank"></i> <span>Resume</span>
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#portfolio">
              <i className="bx bx-book-content"></i> <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#contact">
              <i className="bx bx-envelope"></i> <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* .nav-menu */}
      {/*{showBackToTop && (*/}
      {/*  <div*/}
      {/*    className={`back-to-top d-flex align-items-center justify-content-center ${*/}
      {/*      window.scrollY > 100 ? "active" : ""*/}
      {/*    }`}*/}
      {/*    onClick={scrollToTop}*/}
      {/*  >*/}
      {/*    <i className="bi bi-arrow-up-short"></i>*/}
      {/*  </div>*/}
      {/*)}*/}
    </header>
  );
};

export default Navbar;
