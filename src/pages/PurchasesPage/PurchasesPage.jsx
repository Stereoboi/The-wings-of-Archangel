import { useEffect } from "react";
import { useQuery } from "urql";
import { IMAGE_QUERY } from "../../API/query";
import { TitleBarImageList, PurchasesTitle } from "../../Components/Purchases";
import { Container } from "@mui/material";
import { useState } from "react";
import { Loader } from "../../Components/Loader/Loader";

const PurchasesPage = () => {
  const [status, setStatus] = useState(true);
  const [results] = useQuery({ query: IMAGE_QUERY });
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    const { data, fetching, error } = results;
    if (!fetching) {
      setStatus(false);
      setImageUrl(data.purchases.data);
    }
    // }
  }, [results]);

  return (
    <Container>
      <PurchasesTitle />
      {status ? <Loader /> : <TitleBarImageList imageUrl={imageUrl} />}
    </Container>
  );
};

export default PurchasesPage;
