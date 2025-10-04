import "./skills.styles.css";
import { useEffect, useRef, useState } from "react";

export const SkillIcon = ({ name, icon, id, onMouseOver, onMouseOut }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isNearRight, setIsNearRight] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const checkIfNearRight = () => {
      if (skillRef.current) {
        const rect = skillRef.current.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        // Check if the marble's right edge is near or exceeds the viewport
        if (rect.right + 150 > windowWidth) {
          setIsNearRight(true); // Near the right edge, expand to the left
        } else {
          setIsNearRight(false); // Otherwise, expand normally to the right
        }
      }
    };

    // Check positioning on hover and on window resize
    checkIfNearRight();
    window.addEventListener("resize", checkIfNearRight);

    return () => {
      window.removeEventListener("resize", checkIfNearRight);
    };
  }, [isHovered]);

  return (
    <>
      <div
        ref={skillRef}
        className={`skill-wrapper`}
        onMouseOver={() => {
          onMouseOver(id);
          setIsHovered(true);
        }}
        onMouseOut={() => {
          onMouseOut(id);
          setIsHovered(false);
        }}
        onTouchStart={() => {
          onMouseOver(id);
          setIsHovered(true);
        }}
        onTouchEnd={() => {
          onMouseOut(id);
          setIsHovered(false);
        }}
      >
        {/* Always render the marble */}
        <div className="marble">
          <img src={icon} alt={name} className="marble-icon" />
        </div>

        {/* Conditionally render the capsule on top of the marble when hovered */}
        {isHovered && (
          <div className={`hovered-skill ${isNearRight ? "expand-left" : ""}`}>
            <img src={icon} alt={name} className="marble-icon-hovered" />
            <span className="skill-name">{name}</span>
          </div>
        )}
      </div>
    </>
  );
};
