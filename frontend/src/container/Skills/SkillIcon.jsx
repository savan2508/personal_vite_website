import "./skills.styles.css";
import { useState } from "react";

export const SkillIcon = ({ name, icon, id, onMouseOver, onMouseOut }) => {
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
