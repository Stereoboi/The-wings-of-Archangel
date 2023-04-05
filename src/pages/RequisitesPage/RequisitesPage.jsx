import { RequisitesList, RequisitesTitle } from "../../Components/Requisites";
import { Container } from "@mui/material";
const RequisitesPage = () => {
  return (
    <Container maxWidth="lg">
      <RequisitesTitle />
      <RequisitesList />
    </Container>
  );
};

export default RequisitesPage;
