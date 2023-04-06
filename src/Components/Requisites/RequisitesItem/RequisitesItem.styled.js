import { styled } from "@mui/material/styles";
import { Typography, Box, Divider, Button, Link } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const BankName = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  fontWeight: 600,
  padding: 8,
  [theme.breakpoints.up("md")]: {
    display: "flex",
    fontSize: "1.3rem",
    width: "25%",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
}));

export const BankRequisites = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  padding: 8,
  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
}));

export const BankWrapper = styled(Box)(({ theme }) => ({
  // textAlign: "center",
  [theme.breakpoints.up("md")]: {
    display: "flex",

    // alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const LineDivider = styled(Divider)(({ theme }) => ({
  height: "2px",
  backgroundColor: "black",
}));

export const CopyBtn = styled(Button)(({ theme }) => ({
  // justifyContent: "flex-start",
  // paddingRight: 0,
  "&:hover": {
    backgroundColor: "white",
  },

  [theme.breakpoints.up("lg")]: {},
}));

export const BtnText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  padding: 8,
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  color: "black",
  marginRight: "1rem",
  width: "11rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
}));

export const CopyIcon = styled(ContentCopyIcon)(({ theme }) => ({
  backgroundColor: "black",
  color: "white",
  borderRadius: "50%",
  padding: "4px",
  fontSize: "1.6rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2rem",
  },
}));

export const BtnWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  // justifyContent: "flex-start",
  width: "25%",
}));

export const BankLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
}));

export const BankIcon = styled("img")(({ theme }) => ({
  width: "2rem",
  height: "2rem",
  borderRadius: "50%",
}));
