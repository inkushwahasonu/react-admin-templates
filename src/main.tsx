import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { SidebarProvider } from "./contexts/sidebar.context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarProvider>
  </React.StrictMode>
);
