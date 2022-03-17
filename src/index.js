import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { StateContextProvider } from "./Context/GlobalContext/StateContext";
import { AuthContextProvider } from "./Context/AuthContext/AuthContext";
import { CartContextProvider } from "./Context/CartContext/CartContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateContextProvider>
        <AuthContextProvider>
          <CartContextProvider>

            <App />

          </CartContextProvider>
        </AuthContextProvider>
      </StateContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
