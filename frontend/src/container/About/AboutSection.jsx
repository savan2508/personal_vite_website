import "./aboutsection.styles.css";
import "./About.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { urlFor, client } from "../../../client.js";
import { PortableText } from "@portabletext/react";

const AboutSection = () => {
  const [abouts, setAbouts] = useState([]);
  const [aboutDescription, setAboutDescription] = useState([]);

  useEffect(() => {
    const query1 = '*[_type == "abouts"]';
    const query2 = '*[_type == "hero"]{aboutDescription}';
    client.fetch(query1).then((res) => {
      setAbouts(res);
    });
    client.fetch(query2).then((res) => {
      setAboutDescription(res[0].aboutDescription);
    });
  }, []);

  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>ABOUT</h2>
          {aboutDescription && (
            <PortableText
              value={aboutDescription}
              components={{
                block: {
                  // Customize rendering of "normal" block styles
                  normal: ({ children }) => <p>{children}</p>,
                },
              }}
            />
          )}
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
