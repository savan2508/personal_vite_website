"use client";

import "./work.scss";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { WorkCard } from "./WorkCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Button from "react-bootstrap/Button";
import { ProfileContext } from "@/context/ProfileContext";
import { GridModal } from "@/Components/Modal/GridModal";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Work = () => {
  const { works } = useContext(ProfileContext);

  if (!works || works.length <= 1) {
    return <></>;
  }

  const [filterWork, setFilterWork] = useState(works);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const [tags, setTags] = useState(["All"]);
  // Initialize with a default value (e.g., false). This runs on the server.
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  const [showAllModal, setShowAllModal] = useState(false);

  useEffect(() => {
    // This effect runs only on the client, where `window` is available.
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set the initial value on the client
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const allTags = works.flatMap((work) => work.tags);
    const uniqueTags = Array.from(new Set(allTags));
    setTags([...uniqueTags, "All"]);
  }, []);

  const handleShowAllModal = () => setShowAllModal(true);
  const handleCloseAllModal = () => setShowAllModal(false);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <section id="portfolio" className="portfolio">
        <h2 className="head-text">
          My Creative <span>Portfolio</span> Section
        </h2>
        <div className="app__work-filter">
          {tags.map((item, index) => (
            <div
              key={`work_filter_${index}`}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""}`}
            >
              {item}
            </div>
          ))}
        </div>
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
          key={`work_portfolio`}
        >
          <Swiper
            effect={isMobile ? "slide" : "coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={isMobile ? 1 : 3}
            spaceBetween={isMobile ? 30 : 0}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
            modules={
              !isMobile
                ? [EffectCoverflow, Pagination, Navigation]
                : [Pagination, Navigation]
            }
            className="work_Swiper"
            key={`work_swiper`}
          >
            {filterWork.map((work, index) => (
              <SwiperSlide key={`work_slider_${index}`}>
                <div className="app__work-item app__flex">
                  <WorkCard work={work} />
                </div>
              </SwiperSlide>
            ))}
            <div className="slide-counter" key={`slider-count`}>
              {currentSlide}/{filterWork.length}
            </div>
          </Swiper>
        </motion.div>
        <div className="d-grid gap-2">
          <Button
            className="show-all-button"
            variant="outline-primary"
            onClick={handleShowAllModal}
            key={`show-all-button`}
          >
            Show All {activeFilter === "All" ? "" : activeFilter} Projects
          </Button>
        </div>
        {showAllModal && (
          <GridModal
            gridData={filterWork}
            activeFilter={activeFilter}
            handleCloseAllModal={handleCloseAllModal}
            showAllModal={showAllModal}
            key={`grid_modal`}
          />
        )}
      </section>
    </>
  );
};
