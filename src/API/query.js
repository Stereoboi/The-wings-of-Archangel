import { createClient } from "urql";

export const PAYMENT_QUERY = `
query{
  payments{
    data{
      attributes{
        monobank
      }
    }
  }
}
`;

export const client = createClient({ url: "http://localhost:1337/graphql" });
