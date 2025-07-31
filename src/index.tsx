import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DarkMode } from "./screens/DarkMode";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DarkMode />
  </StrictMode>,
);
