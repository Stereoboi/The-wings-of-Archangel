import { useState, useEffect } from "react";
import {
  RequisitesList,
  RequisitesTitle,
  CryptoList,
  UsdList,
  UahList,
  PlnList,
  EurList,
} from "../../Components/Requisites";
import { Container } from "@mui/material";
import { fetchData } from "../../API/requisites";

import { useQuery } from "urql";
import { PAYMENT_QUERY } from "../../API/query";

const RequisitesPage = () => {
  const [status, setStatus] = useState(true);
  const [requisites, setRequisites] = useState([]);
  const [cryptoRequisites, setCryptoRequisites] = useState([]);
  const [usdRequisites, setUsdRequisites] = useState([]);
  const [uahRequisites, setUahRequisites] = useState([]);
  const [eurRequisites, setEurRequisites] = useState([]);
  const [plnRequisites, setPlnRequisites] = useState([]);

  const [results] = useQuery({ query: PAYMENT_QUERY });

  useEffect(() => {
    const { data, fetching, error } = results;

    if (!fetching) {
      setStatus(false);
      setRequisites(data.bankDetails.data);
      setCryptoRequisites(data.cryptoDetails.data);
      setUsdRequisites(data.usds.data);
      setUahRequisites(data.uahs.data);
      setEurRequisites(data.eurs.data);
      setPlnRequisites(data.plns.data);
    }
  }, [results]);

  return (
    <Container maxWidth="lg">
      <RequisitesTitle />
      {status ? (
        <div>LOADING......</div>
      ) : (
        <>
          <RequisitesList requisites={requisites} />
          <CryptoList requisites={cryptoRequisites} />
          <UsdList requisites={usdRequisites} />
          <UahList requisites={uahRequisites} />
          <PlnList requisites={eurRequisites} />
          <EurList requisites={plnRequisites} />
        </>
      )}
    </Container>
  );
};

export default RequisitesPage;
