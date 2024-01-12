import resumeData from "../../data/resumeData.js";
import { useState } from "react";

const ResumeItem = ({ title, date, company, details }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <div className="resume-item">
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
      <h5>{date}</h5>
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

export const ResumeSection = () => {
  const { title, content, summary, education, experience } = resumeData;
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>{summary.name}</h4>
              <p>
                <em>{summary.description}</em>
              </p>
              <ul>
                <li>{summary.location}</li>
                <li>{summary.phone}</li>
                <li>{summary.email}</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            {education.map((edu, index) => (
              <ResumeItem
                key={index}
                title={edu.title}
                date={edu.date}
                company={edu.institution}
                details={[]}
              />
            ))}
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            {experience.map((exp, index) => (
              <ResumeItem
                key={index}
                title={exp.title}
                date={exp.date}
                company={exp.company}
                details={exp.details}
              />
            ))}
          </div>
        </div>
        <p style={{ textAlign: "right" }}>
          <em>Please click on the job title to expand</em>
        </p>
      </div>
    </section>
  );
};
