import axios from "axios";

// axios.defaults.baseURL = "http://localhost:1337/api";
axios.defaults.baseURL = "https://wings-backend.onrender.com/api";

export const fetchData = async () => {
  const response = await axios.get("/bank-details", {});
  return response;
};

fetchData();
