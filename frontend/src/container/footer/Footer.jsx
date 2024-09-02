import "./footer.scss";
import { images } from "../../constants/index.js";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
  return (
    <>
      <section id="contact" className="contact">
        <h2 className="head-text">Contact Me</h2>
        <div className="app__footer-cards">
          <div className="app__footer-card ">
            <img src={images.email} alt="email" />
            <a href="mailto:sawanpatel2508@gmail.com" className="p-text">
              sawanpatel2508@gmail.com
            </a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="phone" />
            <a href="tel:+1 (813) 452-0870" className="p-text">
              +1 (813) 452-0870
            </a>
          </div>
        </div>
      </section>
      <div id="footer">
        <div className="container">
          <h3>Savan Patel</h3>
          <p style={{ textAlign: "center" }}>
            Thank you for visiting my website. I would love to connect with you.
            Please send me an email, call me, or send me a request on LinkedIn.
          </p>
          <div className="social-links">
            <a href="https://github.com/savan2508" className="github">
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/savan-patel-577a6669/"
              className="linkedin"
            >
              <AiFillLinkedin />
            </a>
            <a href="mailto:savanpatel4724@gmail.com" className="email">
              <AiOutlineMail />
            </a>
          </div>
        </div>
        <p style={{ textAlign: "center", margin: "0" }}>Credits</p>
        <a href="https://www.flaticon.com/free-animated-icons" title="icons">
          icons created by - Flaticon
        </a>
        <a href="https://www.bootstrap.com" title="Style">
          Style and CSS by - bootstrap
        </a>
        <a
          href="https://www.flaticon.com/free-animated-icons/car"
          title="car animated icons"
        >
          Car animated icons created by Freepik - Flaticon
        </a>
      </div>
    </>
  );
};
