/* ---------------------------- */
/* Libraries: */
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
/* ---------------------------- */
/* Components: */
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from "./themes/theme";
/* ---------------------------- */
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
/* ---------------------------- */
reportWebVitals();
