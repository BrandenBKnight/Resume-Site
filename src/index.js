import React from "react";
import { createRoot } from "react-dom/client"; // Change the import here
import App from "./components/App";

const rootElement = document.getElementById("app");
createRoot(rootElement).render(<App />);
