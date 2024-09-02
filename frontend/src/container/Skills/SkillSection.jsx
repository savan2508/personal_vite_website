import SkillData from "../../data/skillData.js";
import { useEffect, useState } from "react";
import { client } from "../../../client.js";
import { SkillIcon } from "./SkillIcon.jsx";

export const SkillsSection = () => {
  const { title, content, skillsLocal } = SkillData;
  const [skills, setSkills] = useState(skillsLocal);

  console.log(skills);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      console.log(data.length, skillsLocal.length);
      if (data.length > skillsLocal.length) {
        setSkills(data);
      }
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
            <SkillIcon
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
