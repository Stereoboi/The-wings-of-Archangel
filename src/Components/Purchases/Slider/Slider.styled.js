import { styled } from "@mui/material/styles";
import { Box, Button, Backdrop } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const SliderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // width: "400px",
  height: "400px",
}));

export const SliderImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "contain",
}));

export const CloseBtn = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: 10,
  right: 10,
}));

export const BackDrp = styled(Backdrop)(({ theme }) => ({
  zIndex: 10,
}));

export const CloseIco = styled(CloseIcon)(({ theme }) => ({
  width: "40px",
  height: "40px",
  transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
  "&:hover": {
    color: "rgb(0,122,255)",
    transform: "scale(1.4)",
  },
}));
