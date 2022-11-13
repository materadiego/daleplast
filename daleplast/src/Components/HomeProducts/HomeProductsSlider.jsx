import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/scss";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeProductsSlider = () => {
  return (
    <div className="SliderContainer">
      {/* SLIDER MOBILE */}
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper Mobile-Slider"
      >
        <SwiperSlide>
          <div className="Slide-Image Slide1"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide-Image Slide2"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide-Image Slide3"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide-Image Slide4"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide-Image Slide5"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide-Image Slide6"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide-Image Slide7"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide-Image Slide8"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide-Image Slide9"></div>
        </SwiperSlide>
      </Swiper>
      {/* SLIDER DESKTOP */}
      <Swiper
        slidesPerView={4}
        spaceBetween={28}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="Slide-Image Slide1"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide-Image Slide2"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide-Image Slide3"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide-Image Slide4"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide-Image Slide5"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide-Image Slide6"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide-Image Slide7"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide-Image Slide8"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Slide-Image Slide9"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeProductsSlider;
