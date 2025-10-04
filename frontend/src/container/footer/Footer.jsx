import "./footer.scss";
import { images } from "../../constants/index.js";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { useEffect, useState } from "react";
import { client } from "../../../client.js";

export const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  useEffect(() => {
    // Fetch the job titles from Sanity
    const fetchTitles = async () => {
      const query = `*[_type == "hero"]{github, linkedin, email, name, cellPhone}`;
      const result = await client.fetch(query);
      if (result.length > 0) {
        setFooterData(result[0]);
      }
    };
    fetchTitles();
  }, []);
  if (!footerData) {
    return <></>;
  }
  return (
    <>
      <section id="contact" className="contact">
        <h2 className="head-text">Contact Me</h2>
        <div className="app__footer-cards">
          <div className="app__footer-card ">
            <img src={images.email} alt="email" />
            <a href={`mailto:${footerData.email}`} className="p-text">
              {footerData.email}
            </a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="phone" />
            <a href={`tel:${footerData.cellPhone}`} className="p-text">
              {footerData.cellPhone}
            </a>
          </div>
        </div>
      </section>
      <div id="footer">
        <div className="container">
          <h3>{footerData.name}</h3>
          <p style={{ textAlign: "center" }}>
            Thank you for visiting my website. I would love to connect with you.
            Please send me an email, call me, or send me a request on LinkedIn.
          </p>
          <div className="social-links">
            <a href={footerData.github} className="github" target="_blank">
              <AiFillGithub />
            </a>
            <a href={footerData.linkedin} className="linkedin" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href={`mailto:${footerData.email}`} className="email">
              <AiOutlineMail />
            </a>
          </div>
        </div>
        <p style={{ textAlign: "center", margin: "0" }}>Credits</p>
        <a
          href="https://www.flaticon.com/free-animated-icons"
          title="icons"
          target="_blank"
        >
          icons created by - Flaticon
        </a>
        <a href="https://www.bootstrap.com" title="Style" target="_blank">
          Style and CSS by - bootstrap
        </a>
        <a
          href="https://www.flaticon.com/free-animated-icons/car"
          title="car animated icons"
          target="_blank"
        >
          Car animated icons created by Freepik - Flaticon
        </a>
      </div>
    </>
  );
};
