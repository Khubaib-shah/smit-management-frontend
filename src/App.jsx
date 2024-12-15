import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";



function App() {
  return (
    

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/students" element={<Students />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    
  );
}

export default App;
