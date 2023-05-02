// Import Swiper React components
import { Backdrop } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import {
  SliderWrapper,
  CloseBtn,
  SliderImg,
  BackDrp,
  CloseIco,
} from "./Slider.styled";

import "swiper/css";
import "swiper/css/navigation";

export const SwiperSlider = ({ slides, open, handleClose }) => {
  return (
    <>
      <BackDrp open={open}>
        <CloseBtn onClick={handleClose}>
          <CloseIco />
        </CloseBtn>
        <Swiper
          style={{ zIndex: 1000 }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={500}
          slidesPerView={1}
          navigation
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map((slide) => {
            console.log(slide.attributes.url);
            return (
              <SwiperSlide key={slide.attributes.url}>
                <SliderWrapper>
                  <SliderImg
                    src={slide.attributes.url}
                    alt={slide.attributes.name}
                  />
                </SliderWrapper>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </BackDrp>
    </>
  );
};
