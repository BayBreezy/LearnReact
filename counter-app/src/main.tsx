import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Toast } from "./components/ui/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Toast position="top-right" visibleToasts={4} />
      <App />
    </ThemeProvider>
  </StrictMode>
);
