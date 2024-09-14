import "./facts.styles.css";
import { useEffect, useState } from "react";
import { client } from "../../../client.js";
import { PortableText } from "@portabletext/react";

const FactsSection = () => {
  const [factsData, setFactsData] = useState(null);

  useEffect(() => {
    const fetchFactsData = async () => {
      const query = `*[_type == "factsSection"]{
        title,
        content,
        facts[]{
          title,
          description,
          "iconUrl": icon.asset->url,
          link
        }
      }`;
      const data = await client.fetch(query);
      setFactsData(data[0]); // Assuming only one document is returned
    };
    fetchFactsData();
  }, []);

  if (!factsData) {
    return <></>;
  }
  const { title, content, facts } = factsData;

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
