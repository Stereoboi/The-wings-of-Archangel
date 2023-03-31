import { useQuery } from "urql";
import { PAYMENT_QUERY } from "../../API/query";

export const Footer = () => {
  const [results] = useQuery({ query: PAYMENT_QUERY });
  const { data, fetching, error } = results;
  console.log(data.payments.data[0].attributes.monobank);
  return <div>Footer</div>;
};
