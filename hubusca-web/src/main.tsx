import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Global } from "./styles/global";
import { App } from "./App";
import { HubProvider } from "./providers";

ReactDOM.createRoot(document.getElementById("root")! as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <HubProvider>
        <Global />
        <App />
      </HubProvider>
    </BrowserRouter>
  </React.StrictMode>
);
