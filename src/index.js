
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
// import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import { Tempcontextprovider } from "./context/Tempcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Tempcontextprovider>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Tempcontextprovider>
  </React.StrictMode>
);

