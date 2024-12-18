import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LinkGeneratorPage from "./pages/LinkGeneratorPage";
import AccessPage from "./pages/AccessPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LinkGeneratorPage />} />
        <Route path="/access" element={<AccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
