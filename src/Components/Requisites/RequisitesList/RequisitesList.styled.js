import { styled } from "@mui/material/styles";
import { List } from "@mui/material";

export const ReqList = styled(List)(({ theme }) => ({
  marginTop: "2rem",
  [theme.breakpoints.up("lg")]: {},
}));
