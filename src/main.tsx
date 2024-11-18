import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./core/routes/AppRoutes";
import { HashRouter as Router } from "react-router-dom";
import "./core/style/golbal.css";
import { Toaster } from "./components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Toaster />
      <AppRoutes />
    </Router>
  </StrictMode>
);
