import SkillData from "../../data/skillData.js";
import "./skills.styles.css";
import { useEffect, useState } from "react";
import "./skills.scss";

import { motion } from "framer-motion";
import { urlFor, client } from "../../../client.js";
import { Tooltip } from "react-tooltip";

const Skill = ({ name, icon, id, onMouseOver, onMouseOut }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`skill marble ${isHovered ? "hovered" : ""}`}
      onMouseOver={() => {
        onMouseOver(id);
        setIsHovered(true);
      }}
      onMouseOut={() => {
        onMouseOut(id);
        setIsHovered(false);
      }}
    >
      <div id={`marble-${id}`} className="hover-container">
        <img src={icon} alt={name} className="marble-icon" />
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const { title, content, skillsLocal } = SkillData;
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState(skillsLocal);

  console.log(skills);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      console.log(data.length, skillsLocal.length);
      // if (data.length > skillsLocal.length) {
      //   setSkills(data);
      // }
    });
  }, []);

  console.log(skills);

  const handleMouseOver = (index) => {
    // Add your animation logic here
    const marble = document.getElementById(`marble-${index}`);
    if (marble) {
      marble.classList.add("hovered");
    }
  };

  const handleMouseOut = (index) => {
    // Add your reset animation logic here
    const marble = document.getElementById(`marble-${index}`);
    if (marble) {
      marble.classList.remove("hovered");
    }
  };

  return (
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>

        <div className="skills-content">
          {skills.map((skill, index) => (
            <Skill
              key={`skill-${index}`}
              id={index}
              {...skill}
              name={skill.name}
              icon={skill.icon}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          ))}
        </div>
      </div>
      <>
        <h2 className="app__skills-container">Skills & Experiences</h2>
        <div className="app__skills-container">
          <motion.div className="app__skills-list">
            {skills.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="app__skills-exp">
            {experiences.map((experience) => (
              <motion.div
                className="app__skills-exp-item"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={work.name}
                        key={work.name}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                      <Tooltip
                        id={work.name}
                        effect="solid"
                        arrowColor="#fff"
                        className="skills-tooltip"
                      >
                        {work.desc}
                      </Tooltip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </>
    </section>
  );
};
