import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./certifications.scss";
import { client } from "../../../client.js";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { CustomModal } from "../../Components/Modal/CustomModal.jsx";

export const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedCertification, setSelectedCertification] = useState("");
  const [swiperInstance, setSwiperInstance] = useState(null);

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

  const getPlainTextFromBlocks = (blocks) => {
    return blocks
      .map((block) => block.children.map((child) => child.text).join(""))
      .join(" ");
  };

  const truncateDescription = (description, wordLimit) => {
    const plainText = getPlainTextFromBlocks(description);
    const words = plainText.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ...            ";
    }
    return description;
  };

  const openModal = (description, title) => {
    setSelectedDescription(description);
    setSelectedCertification(title);
    setModalIsOpen(true);
    if (swiperInstance) {
      swiperInstance.autoplay.stop();
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedDescription("");
    setSelectedCertification("");
    if (swiperInstance) {
      swiperInstance.autoplay.start();
    }
  };

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
            onSwiper={setSwiperInstance}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={30}
            loop={certifications.length > 1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 7000, // Switch slides every 7 seconds
              disableOnInteraction: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {certifications.map((cert, index) => (
              <SwiperSlide key={index}>
                <div className="certification-item">
                  <a href={cert?.link} target="_blank" rel="noreferrer">
                    <img
                      src={cert?.imageUrl || ""}
                      className="certification-img"
                      alt={cert?.title || ""}
                      loading={"lazy"}
                    />
                  </a>
                  <a href={cert.course_link} target="_blank" rel="noreferrer">
                    <h3>{cert?.title || ""}</h3>
                  </a>
                  {cert?.organization && (
                    <a
                      href={cert?.course_link || ""}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h4>{cert?.organization}</h4>
                    </a>
                  )}
                  <p>
                    {truncateDescription(cert?.description, 30)}
                    {getPlainTextFromBlocks(cert?.description).split(" ")
                      .length > 30 && (
                      <button
                        onClick={() =>
                          openModal(cert?.description, cert?.title)
                        }
                      >
                        Read More
                      </button>
                    )}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <CustomModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        description={selectedDescription}
        title={selectedCertification}
      />
    </section>
  );
};
