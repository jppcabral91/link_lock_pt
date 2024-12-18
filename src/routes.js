import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LinkGeneratorPage from "./pages/LinkGeneratorPage";
import AccessPage from "./pages/AccessPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Página inicial para gerar links protegidos */}
        <Route path="/" element={<LinkGeneratorPage />} />
        
        {/* Página para acessar e desencriptar links protegidos */}
        <Route path="/access" element={<AccessPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
