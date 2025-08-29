import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import "./assets/styles/index.scss";
import "@carbon/styles/css/styles.css";
import { App } from "./App";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <App />
  </StrictMode>
);
