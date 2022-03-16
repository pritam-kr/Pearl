import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom"
import { StateContextProvider } from  "./Context/GlobalContext/StateContext"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <StateContextProvider>
        <App />

      </StateContextProvider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);
