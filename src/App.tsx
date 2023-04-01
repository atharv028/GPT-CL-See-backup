import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CoverLetter from "./pages/CoverLetter";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cover-letter" element={<CoverLetter />} />
      </Routes>
    </>
  );
}

export default App;
