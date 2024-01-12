import SkillData from "../../data/skillData.js";
import "./skills.styles.css";
import { useState } from "react";

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
      {/*{isHovered && (*/}
      {/*  <div className="info-container">*/}
      {/*    <p className="skill-name">{name}</p>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
};

export const SkillsSection = () => {
  const { title, content, skills } = SkillData;

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
    </section>
  );
};
