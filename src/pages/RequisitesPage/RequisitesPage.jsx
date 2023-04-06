import { useState, useEffect } from "react";
import { RequisitesList, RequisitesTitle } from "../../Components/Requisites";
import { Container } from "@mui/material";
import { fetchData } from "../../API/requisites";

const RequisitesPage = () => {
  const [requisites, setRequisites] = useState([]);

  useEffect(() => {
    const getFetch = async () => {
      try {
        const result = await fetchData();
        setRequisites(result.data.data);
        // console.log(result.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFetch();
  }, []);

  return (
    <Container maxWidth="lg">
      <RequisitesTitle />
      <RequisitesList requisites={requisites} />
    </Container>
  );
};

export default RequisitesPage;
