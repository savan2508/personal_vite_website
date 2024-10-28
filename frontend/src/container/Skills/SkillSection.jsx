import SkillData from "../../data/skillData.js";
import { useContext, useEffect, useState } from "react";
import { SkillIcon } from "./SkillIcon.jsx";
import { PortableText } from "@portabletext/react";
import { ProfileContext } from "../../context/ProfileContext.jsx";

export const SkillsSection = () => {
  const { hero, skillsFetched } = useContext(ProfileContext);

  const { skillsLocal } = SkillData;
  const [skills, setSkills] = useState([skillsLocal]);

  useEffect(() => {
    const combinedSkills = [...skillsLocal, ...skillsFetched];
    setSkills(combinedSkills);
  }, []);

  if (!skills || skills.length <= 0) {
    return <></>;
  }

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
          {hero?.skillsDescription && (
            <PortableText
              value={hero?.skillsDescription}
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
              name={skill?.name}
              icon={skill?.icon_url ? skill?.icon_url : skill?.icon}
              onMouseOver={() => handleMouseOver(index, skill?.name)}
              onMouseOut={handleMouseOut}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
