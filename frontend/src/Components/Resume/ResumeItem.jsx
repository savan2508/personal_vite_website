import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const ResumeItem = ({ title, date, company, details }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className="resume-item">
      {details.length > 0 ? (
        <h4>
          <a
            data-bs-toggle="collapse"
            href={`#${title.replace(/\s+/g, "").toLowerCase()}`}
            role="button"
            aria-expanded={!isCollapsed}
            aria-controls={`${title.replace(/\s+/g, "").toLowerCase()}`}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {title}
          </a>
        </h4>
      ) : (
        <h4>{title}</h4>
      )}
      {date && <h5>{date}</h5>}
      <p>
        <em>{company}</em>
      </p>
      <div
        className={`collapse ${isCollapsed ? "" : "show"}`}
        id={`${title.replace(/\s+/g, "").toLowerCase()}`}
      >
        <div className="card card-body">
          <ul>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};