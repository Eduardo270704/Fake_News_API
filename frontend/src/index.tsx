import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HistoricoProvider } from "./contexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HistoricoProvider>
        <App />
      </HistoricoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
