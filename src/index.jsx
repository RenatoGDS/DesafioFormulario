import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App";
import { RegionsContextProvider } from "./context/Regions";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RegionsContextProvider>
      <ToastContainer theme="dark" />
      <App />
    </RegionsContextProvider>
  </React.StrictMode>
);
