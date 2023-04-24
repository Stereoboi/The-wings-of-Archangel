import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { ArrowCircleUp } from "@mui/icons-material";
export const ScrollToTopBtn = styled(Button)(({ theme, isvisible }) => ({
  display: isvisible === "false" ? "none" : "block",
  minWidth: "36px",
  position: "fixed",
  bottom: "0.5rem",
  right: "0.5rem",
  zIndex: 10000,
  "& .MuiTouchRipple-root": {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    bottom: "0.8rem",
    right: "0.8rem",
  },
  [theme.breakpoints.up("lg")]: {
    bottom: "1.4rem",
    right: "1.4rem",
  },
}));

export const ArrowUpIcon = styled(ArrowCircleUp)(({ theme }) => ({
  width: "36px",
  height: "36px",
  color: theme.palette.primary.black,
  transition: "color 0.3s, background-color 0.3s",
  borderRadius: "50%",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.black,
  },
}));
