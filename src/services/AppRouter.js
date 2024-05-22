import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminMain from "../components/admin/AdminMain";
import UserMain from "../components/pages/UserMain"; 

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminMain />} />
        <Route path="/*" element={<UserMain />} />
      </Routes>
    </BrowserRouter>
  );
}