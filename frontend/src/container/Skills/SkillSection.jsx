"use client";

import SkillData from "../../data/skillData.js";
import { useContext, useEffect, useState } from "react";
import { SkillIcon } from "./SkillIcon.jsx";
import { PortableText } from "@portabletext/react";
import { ProfileContext } from "../../context/ProfileContext.jsx";
import { SkillsBreakdown } from "./SkillsBreakdown.jsx";

export const SkillsSection = () => {
  const { hero, skillsFetched } = useContext(ProfileContext);

  const { skillsIcons, skillsSections } = skillsFetched[0];

  const { skillsLocal } = SkillData;
  const [skills, setSkills] = useState([skillsLocal]);

  useEffect(() => {
    const combinedSkillsIcons = [...skillsLocal, ...skillsIcons];
    setSkills(combinedSkillsIcons);
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
        <SkillsBreakdown skillsCategories={skillsSections} />
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
