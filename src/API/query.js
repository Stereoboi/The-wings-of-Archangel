import { createClient } from "urql";

export const PAYMENT_QUERY = `
query{
  plns{
    data{
      id
      attributes{
        name,
        number
      }
    }
  }
  usds{
    data{
      id
      attributes{
        name,
        number
      }
    }
  }
  eurs{
    data{
      id
      attributes{
        name,
        number
      }
    }
  }
  uahs{
    data{
      id
      attributes{
        name,
        number
      }
    }
  }
  cryptoDetails{
    data{
      id
      attributes{
        name,
        number
      }
    }
  }
  bankDetails{
    data{
      id
      attributes{
        name,
        number
      }
    }
  }
}
`;

export const IMAGE_QUERY = `
query{
  purchases{
    data{
      id
      attributes{
        description
        images{
          data{
            id
            attributes{
              url
              name
            }
          }
        }
      }
    }
  }
}
`;

// export const client = createClient({
//   url: "https://wings-backend.onrender.com/graphql",
// });
export const client = createClient({
  url: "http://localhost:1337/graphql",
});
