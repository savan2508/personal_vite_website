import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./certifications.scss";
import { client } from "../../../client.js";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "certification"]{
          title,
          organization,
          description,
          link,
          course_link,
          "imageUrl": image.asset->url
        }`,
      )
      .then((data) => setCertifications(data))
      .catch(console.error);
  }, []);

  return (
    <section id="certifications" className="certifications section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Certificates</h2>
        </div>

        <div
          className="certifications-slider swiper"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000, // Switch slides every 5 seconds
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {certifications.map((cert, index) => (
              <SwiperSlide key={index}>
                <div className="certification-item">
                  <a href={cert.link} target="_blank" rel="noreferrer">
                    <img
                      src={cert.imageUrl}
                      className="certification-img"
                      alt={cert.title}
                    />
                  </a>
                  <a href={cert.course_link} target="_blank" rel="noreferrer">
                    <h3>{cert.title}</h3>
                  </a>
                  <a href={cert.course_link} target="_blank" rel="noreferrer">
                    <h4>{cert.organization}</h4>
                  </a>
                  <p>{cert.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};
