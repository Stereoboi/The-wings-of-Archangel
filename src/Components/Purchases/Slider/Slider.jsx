import { useState } from "react";

import Dialog from "@mui/material/Dialog";

import { SwiperSlider } from "../Swiper/Swiper";

export default function ImageSlider({ images, open, handleClose }) {
  console.log(images);

  return (
    <Dialog open={open} onClose={handleClose}>
      {images.length === 0 ? (
        <div>Loading</div>
      ) : (
        <SwiperSlider slides={images} />
      )}
    </Dialog>
  );
}
