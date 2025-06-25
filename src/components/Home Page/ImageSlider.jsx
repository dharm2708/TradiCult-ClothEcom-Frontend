import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner1 from "../../assets/images/banner4.jpg";
import Banner2 from "../../assets/images/banner3.png";
import Banner3 from "../../assets/images/banner2.jpg";
import Banner4 from "../../assets/images/banner1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/imageslider.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function ImageSlider() {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
      swiperRef.current.allowTouchMove = false;
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
      swiperRef.current.allowTouchMove = true;
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={Banner1}
            alt="Slide 1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Banner2}
            alt="Slide 2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Banner3}
            alt="Slide 3"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Banner4}
            alt="Slide 4"
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
