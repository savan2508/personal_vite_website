import { aboutData } from "../../data/data.js";
import "./aboutsection.styles.css";
import "./About.scss";
import { motion } from "framer-motion";

const abouts = [
  {
    title: "Web Development",
    description:
      "I have experience building websites using JavaScript, React, HTML, CSS, and Bootstrap.",
    imgUrl: "",
  },
  {
    title: "Data Science",
    description:
      "I have experience building and deploying machine learning models using Python, R, and SQL.",
    imgUrl: "",
  },
  {
    title: "Project Management",
    description:
      "I have experience managing projects using Agile and Scrum methodologies.",
    imgUrl: "",
  },
  {
    title: "Mobile Development",
    description:
      "I have experience building mobile applications using React Native and Flutter.",
    imgUrl: "",
  },
];

const AboutSection = () => {
  return (
    <>
      <h2 className="head-text">
        I know that
        <span>Good Design</span>
        <br />
        means
        <span>Good Business</span>
        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="app__profile-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </h2>
    </>
  );
};

const TempAbout = () => {
  const {
    title,
    content,
    programmingContent,
    contactInfo,
    seekingOpportunities,
  } = aboutData;
  return (
    <section id="about" className="about" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p style={{ textAlign: "justify" }}>{content}</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img
              src="../../assets/img/profile-img.jpg"
              className="img-fluid profilepic"
              alt=""
            />
          </div>
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
                    <strong>Birthday:</strong>{" "}
                    <span>{contactInfo.birthday}</span>
                  </li>
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
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Age:</strong>
                    <span>{contactInfo.age}</span>
                  </li>
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
      </div>
    </section>
  );
};

export default AboutSection;