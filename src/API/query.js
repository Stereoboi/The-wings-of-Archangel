import { createClient } from "urql";

export const PAYMENT_QUERY = `
query{
  purchases{
    data{
      attributes{
        name
        description
        image{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`;

export const client = createClient({
  url: "https://wings-backend.onrender.com/graphql",
});
// export const client = createClient({
//   url: "http://localhost:1337/graphql",
// });

// import axios from "axios";

// axios.defaults.baseURL = "https://wings-backend.onrender.com/api";

// export const fetchData = async () => {
//   const response = await axios.get("/purchases", {});
//   console.log(response);
//   return response;
// };
