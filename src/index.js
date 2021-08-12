/* ---------------------------- */
/* Libraries: */
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Auth0Provider } from '@auth0/auth0-react';
/* ---------------------------- */
/* Components: */
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from "./themes/theme";
/* ---------------------------- */
/* Auth0 Data: */
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
/* ---------------------------- */

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
      domain={domain} 
      clientId={clientId} 
      redirectUri={window.location.origin}
    >
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
/* ---------------------------- */
reportWebVitals();
