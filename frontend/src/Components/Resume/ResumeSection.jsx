import { ResumeItem } from "./ResumeItem.jsx";
import { client } from "../../../client.js";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";

export const ResumeSection = () => {
  const [resumeData, setResumeData] = useState(null); // State to store resume data

  useEffect(() => {
    const query = `*[_type == "resume"]{
      title,
      content,
      summary {
        name,
        description,
        location,
        phone,
        email
      },
      education[] {
        title,
        institution,
        date
      },
      experience[] {
        title,
        company,
        date,
        details
      }
    }`;
    client
      .fetch(query)
      .then((data) => setResumeData(data))
      .catch(console.error);
  }, []);
  if (!resumeData) {
    return <></>;
  }
  const { title, content, summary, education, experience } = resumeData[0];

  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{title}</h2>
          <PortableText value={content} />
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>{summary.name}</h4>
              <PortableText value={summary.description} />
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
