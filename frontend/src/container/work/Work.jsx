import "./work.scss";
import { motion } from "framer-motion";
import { client } from "../../../client.js";
import { useEffect, useState } from "react";
import { WorkCard } from "./WorkCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import Button from "react-bootstrap/Button";
import { GridModal } from "../../Components/Modal/GridModal.jsx";

export const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const [tags, setTags] = useState(["All"]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentSlide, setCurrentSlide] = useState(1);

  const [showAllModal, setShowAllModal] = useState(false);

  const handleShowAllModal = () => setShowAllModal(true);
  const handleCloseAllModal = () => setShowAllModal(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    client.fetch(`*[_type == "works"]{ tags }`).then((data) => {
      const allTags = data.flatMap((work) => work.tags);
      const uniqueTags = Array.from(new Set(allTags));
      setTags([...uniqueTags, "All"]);
    });
  }, []);

  useEffect(() => {
    const query = `*[_type == "works"] | order(priority desc, title asc) {
  title,
  priority,
  shortDescription,
  description[],
  "mainImage": imgUrl.asset->url,
  "screenshots": screenshots[].asset->url,
  projectLink,
  codeLink,
  downloadLink,
  tags,
  publishedAt
}`;

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

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
