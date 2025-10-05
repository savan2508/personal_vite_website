"use client";

import "./facts.styles.css";
import { useContext } from "react";
import { PortableText } from "@portabletext/react";
import { ProfileContext } from "@/context/ProfileContext";

const FactsSection = () => {
  const { factsData } = useContext(ProfileContext);

  if (!factsData) {
    return <></>;
  }

  const { title, content, facts } = factsData[0];

  return (
    <section id="facts" className="facts" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          {content?.length > 0 && (
            <PortableText
              value={content}
              components={{
                block: {
                  normal: ({ children }) => <p>{children}</p>,
                },
              }}
            />
          )}
        </div>
        <div className="container px-4 py-5" id="icon-grid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
            {facts?.map((fact, index) => (
              <div key={index} className="col d-flex align-items-start">
                <img
                  src={fact.iconUrl}
                  alt=""
                  className="factimg"
                  loading="lazy"
                />
                <div className="newfact">
                  <h3 className="fw-bold mb-0 fs-4">
                    {fact.link ? (
                      <a
                        href={fact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {fact.title}
                      </a>
                    ) : (
                      fact.title
                    )}
                  </h3>
                  <p>{fact.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
