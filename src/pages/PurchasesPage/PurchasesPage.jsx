import { useEffect } from "react";
import { useQuery } from "urql";
import { IMAGE_QUERY } from "../../API/query";
import { TitleBarImageList, PurchasesTitle } from "../../Components/Purchases";
import { Container } from "@mui/material";
import { useState } from "react";

const PurchasesPage = () => {
  const [results] = useQuery({ query: IMAGE_QUERY });
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() => {
    const { data, fetching, error } = results;
    if (!fetching) {
      // console.log(data.purchases);
      setImageUrl(data.purchases.data);
    }
    // }
  }, [results]);

  return (
    <Container>
      <PurchasesTitle />
      <TitleBarImageList imageUrl={imageUrl} />
    </Container>
  );
};

export default PurchasesPage;
