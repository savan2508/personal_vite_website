import { aboutData } from "../../data/data.js";
import "./aboutsection.styles.css";
import "./About.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { urlFor, client } from "../../../client.js";

const { title, content } = aboutData;

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
      </div>
    </section>
  );
};

export default AboutSection;
