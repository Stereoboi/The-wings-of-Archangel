// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlideImage } from "./Swiper.styled";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const SwiperSlider = ({ slides, open, handleClose }) => {
  console.log(slides);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => {
        console.log(slide.attributes.url);
        return (
          <SwiperSlide key={slide.attributes.url}>
            <SlideImage
              src={slide.attributes.url}
              alt={slide.attributes.name}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
