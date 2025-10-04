"use client";

import { createContext } from "react";
import SkillData from "@/data/skillData.js";

export const ProfileContext = createContext({
  hero: {},
  abouts: {},
  factsData: {},
  skills: {},
  skillsSections: {},
  resume: {},
  works: {},
  certifications: {},
  footer: {},
});

export const ProfileContextProvider = ({ children, initialData }) => {
  const { skillsLocal } = SkillData;

  const combinedSkills = initialData.skills
    ? [...skillsLocal, ...initialData.skills[0].skillsIcons]
    : skillsLocal;

  const values = {
    hero: initialData.hero,
    abouts: initialData.abouts,
    factsData: initialData.facts,
    skills: combinedSkills,
    skillsSections: initialData.skills[0].skillsSections,
    resume: initialData.resume,
    works: initialData.works,
    certifications: initialData.certifications,
    footer: initialData.hero, // Footer can reuse hero data
  };

  return (
    <ProfileContext.Provider value={values}>{children}</ProfileContext.Provider>
  );
};
