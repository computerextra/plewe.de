import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Layout from "./Layout";
import Datenschutz from "./Pages/Datenschutz";
import Home from "./Pages/Home";
import Impressum from "./Pages/Impressum";
import Kontakt from "./Pages/Kontakt";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Kontakt" element={<Kontakt />} />
          <Route path="Datenschutz" element={<Datenschutz />} />
          <Route path="Impressum" element={<Impressum />} />
          <Route
            path="*"
            element={<>Die Seite konnte nicht gefunden werden</>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
