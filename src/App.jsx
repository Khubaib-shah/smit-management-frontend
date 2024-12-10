import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/students" element={<Students />} />
      <Route path="/teachers" element={<Teachers />} />
    </Routes>
  );
}

export default App;
