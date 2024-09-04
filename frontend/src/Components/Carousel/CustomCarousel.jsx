import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./custom-carousel.scss";

export const CustomCarousel = ({ isOpen, images, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="custom-carousel-overlay">
        <div className="custom-carousel-container">
          <button className="close-btn" onClick={onClose}>
            X
          </button>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="custom-carousel-swiper"
          >
            {images?.length > 0 &&
              images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="carousel-image"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
