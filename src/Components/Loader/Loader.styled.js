import { styled } from "@mui/material/styles";
import { Box, LinearProgress } from "@mui/material";

export const ProgressBar = styled(LinearProgress)(({ theme }) => ({
  "& .MuiLinearProgress-bar": {
    backgroundColor: "blue",
  },
  width: "70%",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "green",
}));

export const LoaderWrapper = styled(Box)((theme) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10rem",
  zIndex: 10000,
}));
