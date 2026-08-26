import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import SyllabusBuilder from "./SyllabusBuilder.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SyllabusBuilder />
    <Analytics />
  </React.StrictMode>
);
