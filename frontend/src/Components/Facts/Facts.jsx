import { factsData } from "../../data/data.js";
import "./facts.styles.css";

const FactsSection = () => {
  const { title, content, facts } = factsData;

  return (
    <section id="facts" className="facts" data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
        <div className="container px-4 py-5" id="icon-grid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
            {facts.map((fact, index) => (
              <div key={index} className="col d-flex align-items-start">
                <img src={fact.icon} alt="" className="factimg" />
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
