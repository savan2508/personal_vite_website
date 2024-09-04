import resumeData from "../../data/resumeData.js";
import { ResumeItem } from "./ResumeItem.jsx";

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
                date={null}
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
