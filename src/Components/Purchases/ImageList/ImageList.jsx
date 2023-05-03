import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { SwiperSlider } from "../Slider/Slider";
import { useState } from "react";
import { GalleryWrapper } from "./ImageList.styled";

export default function TitleBarImageList({ imageUrl }) {
  const [open, setOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  const handleOpen = (item) => {
    setOpen(true);
    setCurrentImages(item.attributes.images.data);
    document.querySelector("html").style.overflow = "hidden";
  };

  const handleClose = () => {
    setOpen(false);
    document.querySelector("html").style.overflow = "auto";
  };

  return (
    <GalleryWrapper>
      <ImageList>
        {imageUrl.map((item) => {
          return (
            <ImageListItem key={item.id} id={item.id}>
              <img
                src={`${item.attributes.images.data[0].attributes.url}?w=248&h=200&fit=crop&auto=format`}
                srcSet={`${item.attributes.images.data[0].attributes.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.attributes.description}
                loading="lazy"
                onClick={() => handleOpen(item)}
                style={{ cursor: "pointer" }}
              />
              <ImageListItemBar title={item.attributes.description} />
            </ImageListItem>
          );
        })}
      </ImageList>
      <SwiperSlider
        slides={currentImages}
        open={open}
        handleClose={handleClose}
      />
    </GalleryWrapper>
  );
}
