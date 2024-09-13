import SkillData from "../../data/skillData.js";
import { useEffect, useState } from "react";
import { client } from "../../../client.js";
import { SkillIcon } from "./SkillIcon.jsx";
import { PortableText } from "@portabletext/react";

export const SkillsSection = () => {
  const { skillsLocal } = SkillData;
  const [skills, setSkills] = useState(skillsLocal);
  const [skillsDescription, setSkillsDescription] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillsQuery = '*[_type == "skills"]';
        const query2 = '*[_type == "hero"]{skillsDescription}';
        const fetchedSkillIconData = await client.fetch(skillsQuery);
        const fetchedFactDescription = await client.fetch(query2);
        const combinedSkills = [...skillsLocal, ...fetchedSkillIconData];
        setSkills(combinedSkills);
        setSkillsDescription(fetchedFactDescription[0].skillsDescription);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  const handleMouseOver = (index) => {
    const marble = document.getElementById(`marble-${index}`);
    if (marble) {
      marble.classList.add("hovered");
    }
  };

  const handleMouseOut = (index) => {
    const marble = document.getElementById(`marble-${index}`);
    if (marble) {
      marble.classList.remove("hovered");
    }
  };

  return (
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>SKILLS</h2>
          {skillsDescription && (
            <PortableText
              value={skillsDescription}
              components={{
                block: {
                  // Customize rendering of "normal" block styles
                  normal: ({ children }) => <p>{children}</p>,
                },
              }}
            />
          )}
        </div>
        <div className="skills-content">
          {skills.map((skill, index) => (
            <SkillIcon
              key={`skill-${index}`}
              id={index}
              {...skill}
              name={skill.name}
              icon={skill.icon_url ? skill.icon_url : skill.icon}
              onMouseOver={() => handleMouseOver(index, skill.name)}
              onMouseOut={handleMouseOut}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
