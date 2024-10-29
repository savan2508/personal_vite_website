import { PortableText } from "@portabletext/react";

export const SkillsBreakdown = ({ skillsCategories }) => {
  return (
    <>
      <div className="skills-breakdown">
        {skillsCategories.map((category, index) => (
          <div key={index} className="skills-category">
            <h3>{category.sectionTitle}</h3>
            <PortableText
              value={category.description}
              components={{
                block: {
                  normal: ({ children }) => <p>{children}</p>,
                },
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};
