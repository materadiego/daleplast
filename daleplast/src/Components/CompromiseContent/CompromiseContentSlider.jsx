import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import sliderIcon1 from "../../utils/images/compromise-slider-icon1.svg";
import sliderIcon2 from "../../utils/images/compromise-slider-icon2.svg";
import "swiper/css";
import "swiper/css/pagination";
const CompromiseContentSlider = () => {
  return (
    <div className="CompromiseContentSlider">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className="CompromiseContentSlider-Slide1">
          <p className="CompromiseContentSlider-Slide__Text">
            La tecnología D2W le brinda al plástico una vida útil de entre 2 y 5
            años, esto significa que cumplido este tiempo se degrada evitando la
            contaminación del suelo, a diferencia del plástico convencional que
            demora hasta 200 años en desaparecer del ambiente.
          </p>
        </SwiperSlide>
        <SwiperSlide className="CompromiseContentSlider-Slide2">
          <p className="CompromiseContentSlider-Slide2__Title">
            La oxi-biodegradabilidad ocurre en dos períodos:
          </p>
          <div className="CompromiseContentSlider-Slide2__Box">
            <img
              src={sliderIcon1}
              alt="Icon"
              className="CompromiseContentSlider-Slide2__Box--Image"
              id="CompromiseBocIcon1"
            ></img>
            <p className="CompromiseContentSlider-Slide2__Box--Title">
              1° Fragmentos moleculares
            </p>
            <p className="CompromiseContentSlider-Slide2__Box--Description">
              El plástico se convierte, bajo condiciones específicas de calor,
              humedad, luz y oxígeno, en fragmentos moleculares menores.
            </p>
          </div>
          <div className="CompromiseContentSlider-Slide2__Box">
            <img
              src={sliderIcon2}
              alt="Icon"
              className="CompromiseContentSlider-Slide2__Box--Image"
              id="CompromiseBocIcon2"
            ></img>
            <p className="CompromiseContentSlider-Slide2__Box--Title">
              2° Biodegradación
            </p>
            <p className="CompromiseContentSlider-Slide2__Box--Description">
              Estos fragmentos se biodegradan, lo cual significa que son
              convertidos en dióxido de carbono, agua y biomasa gracias a
              microorganismos corruptores.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CompromiseContentSlider;