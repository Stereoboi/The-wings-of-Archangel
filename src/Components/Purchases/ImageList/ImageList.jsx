import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageSlider from "../Slider/Slider";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

export default function TitleBarImageList({ imageUrl }) {
  const [open, setOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  const handleOpen = (item) => {
    setOpen(true);
    setCurrentImages(item.attributes.images.data);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ImageList>
      {imageUrl.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.attributes.images.data[0].attributes.url}?w=248&h=200&fit=crop&auto=format`}
            srcSet={`${item.attributes.images.data[0].attributes.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.attributes.description}
            loading="lazy"
            onClick={() => handleOpen(item)}
            style={{ cursor: "pointer" }}
          />
          <ImageListItemBar title={item.attributes.description} />
          <ImageSlider
            open={open}
            handleClose={handleClose}
            images={currentImages}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
