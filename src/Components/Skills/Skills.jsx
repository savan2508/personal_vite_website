import { useSpring, animated } from "react-spring";
import SkillData from "../../data/skillData.js";
import "./skills.styles.css";
import { useState } from "react";

const Skill = ({ name, icon, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { scale, boxShadow, background } = useSpring({
    scale: isHovered ? 1.5 : 1,
    boxShadow: isHovered
      ? "0 0 30px rgba(255, 255, 255, 0.7)"
      : "0 0 20px rgba(0, 0, 0, 0.1)",
    background: isHovered
      ? "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0) 70%)"
      : "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0) 70%)",
  });

  return (
    <animated.div
      className="skill marble"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      style={{
        transform: scale.interpolate((s) => `scale(${s})`),
        boxShadow: boxShadow,
        background: background,
      }}
    >
      <div className="hover-container">
        <img src={icon} alt={name} className="marble-icon" />
      </div>
    </animated.div>
  );
};

export const SkillsSection = () => {
  const { title, content, skills } = SkillData;

  return (
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>

        <div className="skills-content">
          {skills.map((skill, index) => (
            <Skill key={`skill-${index}`} id={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
