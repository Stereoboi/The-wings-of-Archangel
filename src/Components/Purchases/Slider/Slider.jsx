import { useState } from "react";
import Slider from "@mui/material/Slider";
import Dialog from "@mui/material/Dialog";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function ImageSlider({ images, open, handleClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (event, newValue) => {
    setActiveIndex(newValue);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Slider
        value={activeIndex}
        min={0}
        max={images.length - 1}
        onChange={handleSlideChange}
        aria-label="slider"
      />
      <ImageList sx={{ width: 450, height: 450 }}>
        {images.map((image, index) => {
          return (
            <ImageListItem
              key={index}
              sx={{
                display: index === activeIndex ? "block" : "none",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src={image.attributes.url}
                alt={image.attributes.name}
                style={{ width: "100", height: "auto" }}
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Dialog>
  );
}
