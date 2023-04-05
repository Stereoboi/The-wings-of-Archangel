import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const Slogan = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    backgroundColor: theme.palette.primary.main,
  },
}));
