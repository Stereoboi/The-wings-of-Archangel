import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

export const ReqTitle = styled(Typography)(({ theme }) => ({
  marginTop: "1.5rem",
  color: "rgba(0, 0, 0, 1)",
  [theme.breakpoints.down("sm")]: {},
}));

export const ReqTitleMain = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "600",
  lineHeight: "2.3rem",
  textTransform: "uppercase",
  marginTop: "1.2rem",
  color: theme.palette.text,
  [theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
    lineHeight: "2.7rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "3.2rem",
    lineHeight: "3.2rem",
  },
}));

export const ReqWrapper = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  paddingTop: "3rem",
  textAlign: "center",
}));
