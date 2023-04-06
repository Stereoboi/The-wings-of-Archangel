import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import { HashRouter } from "react-router-dom";
// import { Provider } from "urql";
// import { client } from "./API/query";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      {/* <Provider value={client}> */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      {/* </Provider> */}
    </HashRouter>
  </React.StrictMode>
);
