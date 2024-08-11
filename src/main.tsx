import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { TranslateContextProvider } from "./context/Translate.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TranslateContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TranslateContextProvider>
);
