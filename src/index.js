import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react";
// import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import { Tempcontextprovider } from "./context/Tempcontext";
import { store } from './Redux/store';
import theme from './components/payment/Theme'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Tempcontextprovider>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
        <Provider store={store}>
          <App />
          </Provider>
        </BrowserRouter>      
      </ChakraProvider>
    </Tempcontextprovider>
  </React.StrictMode>
);

