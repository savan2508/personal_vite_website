import { useState } from "react";
import { PortableText } from "@portabletext/react";

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
          <PortableText value={details} />
        </div>
      </div>
    </div>
  );
};
