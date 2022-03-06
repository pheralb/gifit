/* ---------------------------- */
/* Libraries: */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
/* ---------------------------- */
/* Components: */
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./themes/theme";
/* ---------------------------- */

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
/* ---------------------------- */
reportWebVitals();
