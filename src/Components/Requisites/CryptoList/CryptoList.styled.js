import { styled } from "@mui/material/styles";
import { List, Typography } from "@mui/material";

export const CrpList = styled(List)(({ theme }) => ({
  // marginTop: "2rem",
  [theme.breakpoints.up("lg")]: {},
}));

export const CaptionText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  backgroundColor: theme.palette.primary.black,
  color: theme.palette.primary.main,
  fontSize: "1.5rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2rem",
  },
}));
