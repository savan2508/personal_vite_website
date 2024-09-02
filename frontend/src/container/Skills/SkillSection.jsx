import SkillData from "../../data/skillData.js";
import { useEffect, useState } from "react";
import { client } from "../../../client.js";
import { SkillIcon } from "./SkillIcon.jsx";

export const SkillsSection = () => {
  const { title, content, skillsLocal } = SkillData;
  const [skills, setSkills] = useState(skillsLocal);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillsQuery = '*[_type == "skills"]';
        const fetchedData = await client.fetch(skillsQuery);
        const combinedSkills = [...skillsLocal, ...fetchedData];
        setSkills(combinedSkills);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

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
              icon={skill.icon_url ? skill.icon_url : skill.icon}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
