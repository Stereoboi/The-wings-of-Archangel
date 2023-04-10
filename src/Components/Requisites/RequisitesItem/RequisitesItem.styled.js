import { styled } from "@mui/material/styles";
import { Typography, Box, Divider, Button, Link } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const BankName = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  fontWeight: 600,
  padding: "1rem",
  [theme.breakpoints.up("md")]: {
    padding: "2rem",
    display: "flex",
    alignItems: "center",
    fontSize: "1.3rem",
    width: "25%",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
}));

export const BankRequisites = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  padding: "1rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
    // padding: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },
}));

export const BankWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",

  [theme.breakpoints.up("md")]: {
    display: "flex",
    // alignItems: "baseline",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const LineDivider = styled(Divider)(({ theme }) => ({
  height: "2px",
  backgroundColor: "black",
}));

export const CopyBtn = styled(Button)(({ theme }) => ({
  padding: "0.5rem",
  "&:hover": {
    backgroundColor: "white",
  },

  [theme.breakpoints.up("md")]: {
    padding: 0,
  },
}));

export const BtnText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  textTransform: "uppercase",
  display: "flex",
  color: "black",
  // marginRight: "1rem",
  width: "7rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
    padding: "2rem",
    width: "13rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
    padding: "2rem",
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
  // width: "25%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-between",

  [theme.breakpoints.up("md")]: {
    display: "flex",
    alignItems: "center",
    marginRight: "2rem",
    justifyContent: "center",
  },
}));

export const BankLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  padding: "0.5rem",
  [theme.breakpoints.up("md")]: {
    padding: 0,
  },
}));

export const BankIcon = styled("img")(({ theme }) => ({
  width: "1.6rem",
  height: "1.6rem",
  borderRadius: "50%",
  [theme.breakpoints.up("md")]: {
    width: "1.8rem",
    height: "1.8rem",
  },
  [theme.breakpoints.up("lg")]: {
    width: "1.8rem",
    height: "1.8rem",
  },
}));

export const PaymentImgWrapper = styled(Box)(({ theme }) => ({
  marginTop: "1rem",

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const PaymentDesktopImgWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",
  },
}));
export const DesktopImgWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "1.6rem",
}));
export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: "1.5rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const JarIcon = styled("img")(({ theme }) => ({
  width: "7.5rem",
  height: "7.5rem",
  marginRight: "0.5rem",
  [theme.breakpoints.up("md")]: {
    marginTop: "0.2rem",
  },
}));
export const ApayIcon = styled("img")(({ theme }) => ({
  width: "4rem",
  height: "1.5rem",
  marginRight: "0.5rem",
}));
export const GpayIcon = styled("img")(({ theme }) => ({
  width: "4rem",
  height: "1.5rem",
  marginLeft: "0.5rem",
}));
