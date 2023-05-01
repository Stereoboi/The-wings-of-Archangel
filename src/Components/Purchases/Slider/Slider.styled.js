import { styled } from "@mui/material/styles";

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
