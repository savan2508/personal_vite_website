import { aboutData } from "../../data/data.js";
import "./aboutsection.styles.css";
import "./About.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { urlFor, client } from "../../../client.js";

const {
  title,
  content,
  programmingContent,
  contactInfo,
  seekingOpportunities,
} = aboutData;

const AboutSection = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((res) => {
      setAbouts(res);
    });
  }, []);

  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p style={{ textAlign: "justify" }}>{content}</p>
        </div>
        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="app__profile-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
        {/*<TempAbout />*/}
      </div>
    </section>
  );
};

const TempAbout = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-8 pt-4 pt-lg-0 content">
          {programmingContent.map((item, index) => (
            <div key={index}>
              <h3>{item.heading}</h3>
              <p className="fst-italic" style={{ textAlign: "justify" }}>
                {item.description}
              </p>
            </div>
          ))}

          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <strong>Phone:</strong> <span>{contactInfo.phone}</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <strong>City:</strong> <span>{contactInfo.city}</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <strong>Degree:</strong>
                  <span>{contactInfo.degree}</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <strong>Email:</strong>
                  <span>{contactInfo.email}</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <strong>Freelance:</strong>{" "}
                  <span>{contactInfo.freelance}</span>
                </li>
              </ul>
            </div>
          </div>
          <p style={{ textAlign: "justify" }}>{seekingOpportunities}</p>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
