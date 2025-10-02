import { urlFor } from "../../../client.js";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";
import { CustomModal } from "../../Components/Modal/CustomModal.jsx";
import { CustomCarousel } from "../../Components/Carousel/CustomCarousel.jsx";

// eslint-disable-next-line react/prop-types
export const WorkCard = ({ work }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const handleCardClick = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setIsCarouselOpen(false);
  };

  const openCarousel = () => {
    setIsCarouselOpen(true);
    setModalIsOpen(false);
  };

  const handleCloseCarousel = () => {
    setIsCarouselOpen(false);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  const buttons = [
    work.projectLink && {
      variant: "primary",
      text: "View Project",
      icon: <AiFillEye />,
      onClick: () => window.open(work.projectLink, "_blank"),
    },
    work.screenshots && {
      variant: "secondary",
      text: "View Screenshots",
      icon: <AiFillEye />,
      onClick: () => openCarousel(),
    },
    work.codeLink && {
      variant: "dark",
      text: "View Code",
      icon: <AiFillGithub />,
      onClick: () => window.open(work.codeLink, "_blank"),
    },
    work.downloadLink && {
      variant: "success",
      text: "Download",
      icon: <FaDownload />,
      onClick: () => window.open(work.downloadLink, "_blank"),
    },
  ].filter(Boolean);

  return (
    <>
      <div onClick={handleCardClick} key={`work-card-${work.title}`}>
        <div className="app__work-img app__flex">
          <img src={urlFor(work.mainImage)} alt={work.name} loading="lazy" />
          <motion.div
            whileHover={{ opacity: [0, 1] }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
            className="app__work-hover app__flex"
          >
            {work.projectLink ? (
              <a
                href={work.projectLink}
                target="_blank"
                rel="noreferrer"
                onClick={handleButtonClick}
              >
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
            ) : (
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.25 }}
                className="app__flex"
                onClick={(e) => {
                  handleButtonClick(e);
                  openCarousel();
                }}
              >
                <AiFillEye />
              </motion.div>
            )}
            <a
              href={work.codeLink}
              target="_blank"
              rel="noreferrer"
              onClick={handleButtonClick}
            >
              <motion.div
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 0.9] }}
                transition={{ duration: 0.25 }}
                className="app__flex"
              >
                <AiFillGithub />
              </motion.div>
            </a>
          </motion.div>
        </div>
        <div className="app__work-content app__flex">
          <h4 className="bold-text">{work?.title}</h4>
          <p className="p-text" style={{ marginTop: 10 }}>
            {work.shortDescription}
          </p>
          <div className="app__work-tag app__flex">
            <p className="p-text">{work.tags[0]}</p>
          </div>
        </div>
      </div>
      {modalIsOpen && (
        <CustomModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          description={work.description}
          screenshots={work.screenshots}
          title={work.title}
          buttons={buttons}
        />
      )}

      {isCarouselOpen && (
        <CustomCarousel
          isOpen={isCarouselOpen}
          images={work.screenshots}
          onClose={handleCloseCarousel}
        />
      )}
    </>
  );
};
